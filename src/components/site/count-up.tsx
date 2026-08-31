"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { useInView } from "@/components/site/reveal";

/* ---------------------------------------------------------------------------
   Figures that settle, the way a display finishes calibrating.

   Stat values are not plain numbers — they are things like "10,000 nits",
   "< 8 sec", "±15°", "0.6 – 10 mm" and "24 / 7". So the string is split into
   numeric and literal runs, every number counts up, and everything around them
   stays exactly as written.

   Both number formats are handled, because Portuguese writes ten thousand as
   "10 000" and three point nine as "3,9" — animating those with English
   parsing would produce nonsense.
   --------------------------------------------------------------------------- */

type Token =
  | { kind: "text"; raw: string }
  | { kind: "num"; value: number; decimals: number; grouped: boolean };

/** Stripping needs the global flag; testing must not have it, because `test`
    on a global regex advances lastIndex and alternates its answer between
    calls on the same input. */
const GROUP_STRIP = /[\s\u00A0\u202F]/g;
const GROUP_TEST = /[\s\u00A0\u202F]/;
const COMMA_STRIP = /,/g;
const COMMA_TEST = /,/;

function tokenize(input: string, locale: "en" | "pt"): Token[] {
  const decimal = locale === "pt" ? "," : ".";
  // A number may carry group separators internally but must start and end on a
  // digit, which keeps trailing spaces and dashes out of the match.
  const pattern =
    locale === "pt"
      ? /\d[\d.,\s\u00A0\u202F]*\d|\d/g
      : /\d[\d.,]*\d|\d/g;

  const tokens: Token[] = [];
  let cursor = 0;

  for (const match of input.matchAll(pattern)) {
    const raw = match[0];
    const start = match.index ?? 0;
    if (start > cursor) {
      tokens.push({ kind: "text", raw: input.slice(cursor, start) });
    }

    const grouped = (locale === "pt" ? GROUP_TEST : COMMA_TEST).test(raw);
    const stripped = raw.replace(
      locale === "pt" ? GROUP_STRIP : COMMA_STRIP,
      "",
    );
    const normalised =
      decimal === "," ? stripped.replace(",", ".") : stripped;
    const value = Number.parseFloat(normalised);

    if (Number.isFinite(value)) {
      const dot = normalised.indexOf(".");
      tokens.push({
        kind: "num",
        value,
        decimals: dot === -1 ? 0 : normalised.length - dot - 1,
        grouped,
      });
    } else {
      tokens.push({ kind: "text", raw });
    }
    cursor = start + raw.length;
  }

  if (cursor < input.length) {
    tokens.push({ kind: "text", raw: input.slice(cursor) });
  }
  return tokens;
}

function format(
  n: number,
  decimals: number,
  grouped: boolean,
  locale: "en" | "pt",
) {
  const fixed = n.toFixed(decimals);
  const [whole, fraction] = fixed.split(".");
  const body = grouped
    ? whole.replace(/\B(?=(\d{3})+(?!\d))/g, locale === "pt" ? " " : ",")
    : whole;
  if (!fraction) return body;
  return body + (locale === "pt" ? "," : ".") + fraction;
}

const render = (
  tokens: Token[],
  progress: number,
  locale: "en" | "pt",
): string =>
  tokens
    .map((token) =>
      token.kind === "text"
        ? token.raw
        : format(
            token.value * progress,
            token.decimals,
            token.grouped,
            locale,
          ),
    )
    .join("");

/** Fast start, long settle — it should look like it is coming to rest. */
const easeOutExpo = (p: number) => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p));

/* Runs before paint on the client so the figure never shows its final value
   for a frame and then snap back to zero. Falls back to a normal effect during
   server rendering, where neither ever runs. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function CountUp({
  value,
  duration = 1150,
  delay = 0,
  className,
}: {
  value: string;
  duration?: number;
  /** Milliseconds. Staggers siblings so a row settles across rather than at once. */
  delay?: number;
  className?: string;
}) {
  const { locale } = useT();
  const { ref, inView } = useInView<HTMLSpanElement>();
  const outRef = React.useRef<HTMLSpanElement>(null);

  const tokens = React.useMemo(() => tokenize(value, locale), [value, locale]);
  const hasNumber = tokens.some((t) => t.kind === "num");

  useIsomorphicLayoutEffect(() => {
    const node = outRef.current;
    if (!node || !inView || !hasNumber) return;

    // Deliberately runs under `prefers-reduced-motion` too. That preference
    // exists for motion that can trigger vestibular symptoms — parallax,
    // spinning, large translation — and a figure settling in place is none of
    // those. The blur and lift around it stay suppressed, because those are.

    // Written straight to the DOM rather than through state: this runs every
    // frame, and re-rendering React sixty times a second for a label is waste.
    let frame = 0;
    const started = performance.now() + delay;
    const step = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - started) / duration));
      node.textContent = render(tokens, easeOutExpo(p), locale);
      if (p < 1) frame = requestAnimationFrame(step);
      else node.textContent = value;
    };
    node.textContent = render(tokens, 0, locale);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, hasNumber, tokens, duration, delay, locale, value]);

  return (
    <span ref={ref} className={className}>
      {/* Server and first client render both emit the finished value, so the
          markup is correct with or without JavaScript. */}
      <span ref={outRef}>{value}</span>
    </span>
  );
}

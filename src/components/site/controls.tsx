"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import { useLocale, useTheme, type Locale } from "@/components/site/preferences";

/**
 * Theme and language controls.
 *
 * Both are segmented two-state switches rather than icon buttons that cycle:
 * with only two options each, showing both and marking the active one costs
 * the same space and removes the guess about what a single icon will do.
 */

/**
 * `useLayoutEffect` is the right hook here — the pill has to be measured and
 * placed before the browser paints, or it visibly jumps in from the left on
 * first render. React logs a warning when it runs during server rendering
 * though, so on the server it degrades to `useEffect`, which is never actually
 * called there.
 */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

function Segmented({
  label,
  options,
  value,
  onChange,
  className,
}: {
  label: string;
  options: { value: string; label: string; title: string }[];
  value: string;
  onChange: (next: string) => void;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [pill, setPill] = React.useState<{ left: number; width: number } | null>(
    null,
  );
  const [travelling, setTravelling] = React.useState(false);

  const activeIndex = options.findIndex((option) => option.value === value);

  // Measured rather than assumed. The two switches happen to hold equal-width
  // labels today, but "EN"/"PT" and a pair of glyphs are not guaranteed to stay
  // that way once a third locale or a longer label appears — and a pill sized
  // by a fraction of the track would then sit visibly off its segment.
  useIsomorphicLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const button = el.querySelectorAll("button")[activeIndex];
      if (!button) return;
      setPill({ left: button.offsetLeft, width: button.offsetWidth });
    };

    measure();
    // Fonts land after first paint and change the label widths under us.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeIndex, options.length]);

  // A short stretch along the direction of travel. Physical things gain a
  // little length when they accelerate; without it the pill slides like a
  // rectangle being repositioned rather than something with mass.
  //
  // Keyed on the index alone: firing it on the first measurement too would
  // stretch the pill on page load, when it has not travelled anywhere.
  const firstRun = React.useRef(true);
  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setTravelling(true);
    const timer = window.setTimeout(() => setTravelling(false), 260);
    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={label}
      className={cn("relative isolate flex border border-seam", className)}
    >
      {/* The lit segment. One element that moves, rather than a background
          appearing on one button and disappearing from another — which is what
          makes the change read as a single object travelling. */}
      {pill && (
        <span
          aria-hidden
          // `left-0` is explicit rather than relying on the static position:
          // `offsetLeft` is measured from the container's padding edge, so the
          // translate has to start from that same origin or the pill sits a
          // border-width off its segment.
          className="absolute inset-y-0 left-0 -z-10 bg-signal shadow-[0_0_16px_-2px_var(--color-signal)] transition-[transform,width] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none"
          style={{
            width: pill.width,
            transform: `translateX(${pill.left}px) scaleX(${travelling ? 1.14 : 1})`,
          }}
        />
      )}

      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            title={option.title}
            aria-label={option.title}
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "label-data press relative flex h-8 min-w-8 items-center justify-center px-2.5",
              // The colour crossfade runs slower than the pill so the outgoing
              // label is still legible while the fill is leaving it, instead of
              // flicking to grey the instant the pointer lands.
              "transition-colors duration-300",
              active ? "text-obsidian" : "text-graphite hover:text-filament",
              // Until the pill is measured the active segment carries the fill
              // itself, so the server-rendered markup is never briefly unmarked.
              !pill && active && "bg-signal",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function ThemeSwitch({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { t } = useT();
  return (
    <Segmented
      label={t.nav.themeLabel}
      className={className}
      value={theme}
      onChange={(next) => setTheme(next as "light" | "dark")}
      options={[
        { value: "light", label: "☀", title: t.nav.themeLight },
        { value: "dark", label: "☾", title: t.nav.themeDark },
      ]}
    />
  );
}

export function LocaleSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const { t } = useT();
  return (
    <Segmented
      label={t.nav.languageLabel}
      className={className}
      value={locale}
      onChange={(next) => setLocale(next as Locale)}
      options={[
        { value: "en", label: "EN", title: "English" },
        { value: "pt", label: "PT", title: "Português" },
      ]}
    />
  );
}

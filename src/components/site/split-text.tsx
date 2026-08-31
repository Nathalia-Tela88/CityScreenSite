"use client";

import * as React from "react";

import { useInView } from "@/components/site/reveal";

/* ---------------------------------------------------------------------------
   Per-word headline reveal.

   Each word is its own inline-block that resolves from blur(12px) / opacity 0
   into focus, one after the next on a short stagger. Words rather than
   characters: at display sizes a per-character stagger reads as a novelty
   typewriter, while per-word reads as type coming into focus, which is the
   gesture the rest of the site already uses.

   Three things this has to survive:

   1. Screen readers. A heading chopped into forty spans is announced in
      fragments, so the real text is restored with aria-label and the spans are
      hidden from assistive tech entirely.
   2. Line wrapping. Whitespace is preserved as its own text node so the
      browser still breaks lines wherever it likes.
   3. Mixed content. Headings here contain <br /> and coloured spans, so the
      splitter walks the tree and only ever touches string nodes.
   --------------------------------------------------------------------------- */

/** Flattened text, for the aria-label that replaces the split markup. */
function flatten(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flatten).join("");
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (el.type === "br") return " ";
    return flatten(el.props.children);
  }
  return "";
}

type Ctx = {
  index: number;
  stagger: number;
  base: number;
  active: boolean;
  /** Extra classes for each word span — carries the 3D lift when enabled. */
  word: string;
  /** The reveal animation each word runs. */
  reveal: string;
};

/**
 * 1.25s per word against a 60ms stagger, so roughly twenty words are in flight
 * at any moment — the reveal reads as one continuous wash across the line
 * rather than a queue of individual events.
 *
 * The curve is a gentle ease-out rather than the near-vertical expo it started
 * as. Expo dumps almost all its progress into the first fifth of the duration,
 * which on a blur means the word snaps into focus and then sits there; this
 * one keeps moving through the whole window.
 */
const wordClass =
  "inline-block will-change-[opacity,filter] motion-safe:animate-[word-in_1.8s_cubic-bezier(0.25,0.46,0.3,0.99)_both] motion-reduce:animate-[word-fade-in_1.1s_cubic-bezier(0.25,0.46,0.3,0.99)_both]";

/**
 * The alternative reveal: each word strikes on like a diode that has to try
 * twice, instead of resolving out of blur.
 *
 * `steps(1)` between keyframes is what makes it read as a flicker at all — an
 * eased interpolation turns every strike into a smooth pulse, which is a
 * throb, not a fault. The stops in `word-flicker` are placed to be jumped
 * between, not travelled through.
 *
 * Reduced motion keeps the plain fade. A flicker is precisely the pattern that
 * setting exists to suppress, so this one never degrades to "the same thing but
 * quicker" — it degrades to a different thing.
 */
const flickerClass =
  "inline-block will-change-[opacity,filter] motion-safe:animate-[word-flicker_1.6s_steps(1,end)_both] motion-reduce:animate-[word-fade-in_1.1s_cubic-bezier(0.25,0.46,0.3,0.99)_both]";

function split(node: React.ReactNode, ctx: Ctx, key = "n"): React.ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    // Capturing group keeps the runs of whitespace in the output, so words
    // stay separated and the line can break between them as normal.
    const parts = String(node).split(/(\s+)/);
    return parts.map((part, i) => {
      if (part === "") return null;
      if (/^\s+$/.test(part)) return part;
      const delay = ctx.base + ctx.index * ctx.stagger;
      ctx.index += 1;
      return (
        <span
          key={`${key}-${i}`}
          className={ctx.word ? `${ctx.reveal} ${ctx.word}` : ctx.reveal}
          style={{
            animationDelay: `${delay}s`,
            // Held at the start state until the heading is actually reached.
            animationPlayState: ctx.active ? "running" : "paused",
          }}
        >
          {part}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    // Each entry needs its own key: a branch may return a bare element such as
    // <br />, or a nested array of word spans, and neither carries one up from
    // the recursion. A keyed Fragment covers both without adding markup.
    return node.map((child, i) => (
      <React.Fragment key={`${key}-${i}`}>
        {split(child, ctx, `${key}-${i}`)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (el.type === "br") return el;
    return React.cloneElement(el, {
      children: split(el.props.children, ctx, key),
    });
  }

  return node;
}

export function SplitText({
  children,
  className,
  as: Tag = "span",
  delay = 0,
  stagger = 0.06,
  lift = false,
  flicker = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Seconds before the first word starts. */
  delay?: number;
  /** Seconds between consecutive words. Deliberately much shorter than the
      1.25s each word runs for, so they overlap heavily. */
  stagger?: number;
  /** Each word tips toward the cursor on hover. Off by default: it suits a
      hero, and would be noise on every heading down a spec page. */
  lift?: boolean;
  /** Words strike on like diodes rather than resolving out of blur. */
  flicker?: boolean;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  const label = React.useMemo(() => flatten(children).trim(), [children]);
  const content = React.useMemo(
    () =>
      split(children, {
        index: 0,
        stagger,
        base: delay,
        active: inView,
        word: lift ? "lift-3d" : "",
        reveal: flicker ? flickerClass : wordClass,
      }),
    [children, stagger, delay, inView, lift, flicker],
  );

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      aria-label={label}
      // The perspective has to live on an ancestor of the lifting words, not on
      // the words themselves — set per-word it gives each its own vanishing
      // point and they tip in visibly different directions.
      className={lift ? `lift-stage ${className ?? ""}` : className}
    >
      {/* The split spans are decoration over the aria-label above; assistive
          tech reads the label and never sees the fragments. */}
      <span aria-hidden>{content}</span>
    </Tag>
  );
}

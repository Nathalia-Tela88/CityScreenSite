"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useInView, revealClass } from "@/components/site/reveal";
import { SplitText } from "@/components/site/split-text";
import { CountUp } from "@/components/site/count-up";

/**
 * Shared by every text primitive below. Each takes a `delay` so a section's
 * eyebrow, headline, lede and buttons arrive in the order you read them
 * rather than all landing on the same frame.
 */
function useReveal(animate: boolean) {
  const { ref, inView } = useInView<HTMLElement>();
  return [ref, revealClass(inView, animate)] as const;
}

const delayStyle = (delay: number) =>
  delay ? ({ animationDelay: `${delay}s` } as React.CSSProperties) : undefined;

/* ---------------------------------------------------------------------------
   The shared vocabulary every page is built from.

   Two rules hold the system together:
   1. Sections are separated by a seam — a hairline with ticks on the module
      grid — not by empty space alone. The page reads as assembled panels.
   2. Anything that is a measurement is set in mono. Anything that is a claim
      is set in prose. The two never borrow each other's voice.
   --------------------------------------------------------------------------- */

export function Section({
  children,
  className,
  seam = true,
  bleed = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  /** Draw the cabinet seam along the top edge. */
  seam?: boolean;
  /** Skip the horizontal gutter — for sections that run edge to edge. */
  bleed?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative", className)}>
      {seam && <SectionSeam />}
      <div className={cn("mx-auto max-w-[1560px]", !bleed && "px-6 md:px-10")}>
        {children}
      </div>
    </section>
  );
}

/** The join between two cabinets. */
export function SectionSeam({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-x-0 top-0 h-px bg-seam", className)}
    >
      <div className="seam-ticks h-full w-full opacity-70" />
    </div>
  );
}

/**
 * Section label. Carries the real technical anchor of the section — a pitch, a
 * nit value, an ingress rating — rather than a marketing word, so the label
 * tells the reader something they did not already know from the headline.
 */
export function Eyebrow({
  children,
  className,
  tone = "signal",
  delay = 0,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "signal" | "muted";
  delay?: number;
  animate?: boolean;
}) {
  const [revealRef, revealCn] = useReveal(animate);
  return (
    <p
      ref={revealRef as React.Ref<HTMLParagraphElement>}
      style={delayStyle(delay)}
      className={cn(
        "label-data flex items-center gap-2.5",
        tone === "signal" ? "text-signal" : "text-graphite-dim",
        revealCn,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-1.5 w-1.5",
          tone === "signal" ? "bg-signal" : "bg-graphite-dim",
        )}
      />
      {children}
    </p>
  );
}

/**
 * Headings resolve word by word out of defocus — the same gesture as the
 * counting figures, applied to type. Splitting happens inside SplitText, which
 * also restores the heading's real text for assistive technology.
 *
 * `animate={false}` falls back to a plain heading, for the few places where a
 * heading sits inside something that already animates.
 */
export function Display({
  children,
  className,
  as: Tag = "h2",
  size = "lg",
  delay = 0,
  stagger = 0.06,
  animate = true,
  lift = false,
  flicker = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  /** Seconds between consecutive words. */
  stagger?: number;
  animate?: boolean;
  /** Each word tips toward the cursor on hover. Needs `animate` — the lift
      rides on the split word spans, and the unsplit fallback has none. */
  lift?: boolean;
  /** Words strike on like diodes instead of resolving out of blur. */
  flicker?: boolean;
}) {
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl lg:text-5xl",
    lg: "text-4xl md:text-6xl lg:text-7xl",
    xl: "text-5xl md:text-8xl lg:text-9xl",
  };
  const classes = cn(
    "font-display font-semibold text-filament",
    sizes[size],
    className,
  );

  if (!animate) return <Tag className={classes}>{children}</Tag>;

  return (
    <SplitText
      as={Tag}
      className={classes}
      delay={delay}
      stagger={stagger}
      lift={lift}
      flicker={flicker}
    >
      {children}
    </SplitText>
  );
}

export function Lede({
  children,
  className,
  delay = 0,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animate?: boolean;
}) {
  const [revealRef, revealCn] = useReveal(animate);
  return (
    <p
      ref={revealRef as React.Ref<HTMLParagraphElement>}
      style={delayStyle(delay)}
      className={cn(
        "text-md text-graphite md:text-lg",
        revealCn,
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Body({
  children,
  className,
  delay = 0,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animate?: boolean;
}) {
  const [revealRef, revealCn] = useReveal(animate);
  return (
    <p
      ref={revealRef as React.Ref<HTMLParagraphElement>}
      style={delayStyle(delay)}
      className={cn("text-base text-graphite", revealCn, className)}
    >
      {children}
    </p>
  );
}

/* --------------------------------------------------------------------------- */

const ctaBase =
  "group press inline-flex items-center justify-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] disabled:pointer-events-none disabled:opacity-50";

/**
 * The trailing glyph. Normally the arrow that nudges forward on hover; while
 * the destination route is still being fetched it becomes a spinner instead.
 *
 * `useLinkStatus` only reports for the `<Link>` it is rendered inside, which
 * is why this is a child component rather than a hook call in `Cta` — and why
 * the external `<a>` branch below uses the plain arrow, since there is no
 * client navigation to be pending on.
 */
function CtaGlyph() {
  const { pending } = useLinkStatus();

  if (pending) {
    return <span aria-hidden className="spinner size-3.5 shrink-0" />;
  }
  return (
    <span
      aria-hidden
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

const ctaVariants = {
  /* The one filled element in a given view. Used sparingly. */
  signal:
    "bg-signal px-6 py-3.5 text-obsidian hover:bg-filament focus-visible:bg-filament",
  outline:
    "border border-seam-bright px-6 py-3.5 text-filament hover:border-signal hover:text-signal",
  ghost: "px-0 py-1 text-filament hover:text-signal",
} as const;

export function Cta({
  href,
  children,
  variant = "signal",
  className,
  external = false,
  delay = 0,
  animate = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof ctaVariants;
  className?: string;
  external?: boolean;
  delay?: number;
  animate?: boolean;
}) {
  const [revealRef, revealCn] = useReveal(animate);
  const classes = cn(ctaBase, ctaVariants[variant], revealCn, className);

  if (external) {
    return (
      <a
        href={href}
        ref={revealRef as React.Ref<HTMLAnchorElement>}
        style={delayStyle(delay)}
        className={classes}
      >
        {children}
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    );
  }
  return (
    <Link
      href={href}
      ref={revealRef as React.Ref<HTMLAnchorElement>}
      style={delayStyle(delay)}
      className={classes}
    >
      {children}
      <CtaGlyph />
    </Link>
  );
}

/* --------------------------------------------------------------------------- */

/**
 * A single measured fact. The value leads in mono at display size, the label
 * follows quietly — the way a spec sheet is actually read.
 */
export function Metric({
  value,
  label,
  note,
  className,
}: {
  value: string;
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-seam pt-5", className)}>
      <p>
        <CountUp
          value={value}
          className="tabular text-3xl font-medium text-filament md:text-4xl"
        />
      </p>
      <p className="label-data mt-3 text-graphite-dim">{label}</p>
      {note && <p className="mt-2 text-sm text-graphite">{note}</p>}
    </div>
  );
}

/** A spec sheet row: parameter left, value right, dotted leader between. */
export function SpecRow({
  parameter,
  value,
  note,
}: {
  parameter: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-seam py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-3">
      <span className="text-base text-graphite sm:shrink-0">{parameter}</span>
      {/* The leader only earns its place once both halves sit on one line. */}
      <span
        aria-hidden
        className="hidden min-w-6 flex-1 border-b border-dotted border-seam-bright/60 sm:block"
      />
      {/* Deliberately shrinkable: values like "Suspended, floor-stand or
          glass-bonded" are longer than a phone is wide and must wrap. */}
      <span className="tabular text-base text-filament sm:text-right">
        {value}
        {note && (
          <span className="ml-2 font-sans text-sm text-graphite-dim">{note}</span>
        )}
      </span>
    </div>
  );
}

/**
 * A bordered panel that reads as one LED cabinet: square corners, hairline
 * frame, and a corner tick in the top-left where the frame is fixed.
 */
export function Cabinet({
  children,
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border border-seam bg-cabinet",
        interactive &&
          "press-soft hover:border-seam-bright hover:bg-cabinet-raised",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-2 w-2 border-l border-t border-signal/70"
      />
      {children}
    </div>
  );
}

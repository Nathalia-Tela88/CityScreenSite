"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Fires once, the first time an element scrolls into view.
 *
 * Shared by every revealing element so a heading, its lede and the figures
 * beneath it resolve on one trigger rather than on separate observers that
 * drift a frame or two apart.
 */
// Constrained to `Element`, not `HTMLElement`: IntersectionObserver observes
// any element, and the stage glyphs attach this to an <svg>.
export function useInView<T extends Element>(rootMargin = "-8% 0px") {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The case where scripting never runs at all is handled by a <noscript>
    // rule in the document head, not here — a runtime check could only fire
    // after hydration, which is exactly when it is not needed.

    // Already-visible elements fire straight away, so above-the-fold content
    // does not sit hidden waiting for a scroll that never comes.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

/**
 * The one reveal used everywhere.
 *
 * Full motion gets blur, lift and fade — a display pulling into calibration.
 * Reduced motion gets the fade alone: no movement, no defocus, but the content
 * still arrives in reading order instead of being there before you look.
 */
export function revealClass(inView: boolean, enabled = true) {
  if (!enabled) return undefined;
  return inView
    ? "motion-safe:animate-[resolve-in_1.15s_cubic-bezier(0.25,0.46,0.3,0.99)_both] motion-reduce:animate-[fade-in_0.8s_cubic-bezier(0.25,0.46,0.3,0.99)_both]"
    : "opacity-0";
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Staggers siblings so a block arrives in reading order. */
  delay?: number;
  as?: "div" | "li";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={cn(revealClass(inView), className)}
      style={inView && delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}

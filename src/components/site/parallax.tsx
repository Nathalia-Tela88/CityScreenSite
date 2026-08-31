"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Multi-layer parallax.
 *
 * One scroll listener for the whole scene rather than one per layer. It writes
 * a single unitless custom property — `--parallax`, the number of pixels the
 * scene has travelled past the top of the viewport — and every layer derives
 * its own transform from that in CSS.
 *
 * Two consequences worth having:
 *
 * React never re-renders while scrolling. The listener writes straight to the
 * DOM node's style, so a 60fps scroll costs no reconciliation at all.
 *
 * The property is read inside a `calc()` on each layer, so adding a layer is a
 * markup change with no extra JavaScript, and the layers can never drift out
 * of sync with each other — they are all reading the same number on the same
 * frame.
 *
 * Under `prefers-reduced-motion` the listener is never attached, so the
 * property keeps its initial `0` and every layer's transform resolves to a
 * no-op translate. Nothing to special-case in the layers themselves.
 */
export function ParallaxScene({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Clamped to the scene's own height: once it has scrolled fully out of
      // view the layers stop moving, rather than drifting indefinitely and
      // leaving a gap at the edge of the frame.
      const travelled = Math.min(Math.max(-rect.top, 0), rect.height);
      el.style.setProperty("--parallax", String(travelled));
    };

    const onScroll = () => {
      // Coalesce to one write per frame. Scroll fires far more often than the
      // compositor can paint, and without this the handler does the same work
      // several times for a single visible update.
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--parallax": 0 } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * One depth plane inside a scene.
 *
 * `speed` is the fraction of scroll distance the layer keeps. Positive values
 * hold the layer back so it reads as further away; negative values push it
 * ahead of the page, which is what gives foreground text its slight lead.
 * `0` is the page itself.
 */
export function ParallaxLayer({
  speed,
  children,
  className,
  fade = false,
}: {
  speed: number;
  children: React.ReactNode;
  className?: string;
  /** Dim the layer as the scene leaves, so deep layers recede rather than
      sliding out at full strength. */
  fade?: boolean;
}) {
  return (
    <div
      className={cn("will-change-transform", className)}
      style={
        {
          transform: `translate3d(0, calc(var(--parallax, 0) * ${speed} * 1px), 0)`,
          ...(fade
            ? { opacity: "calc(1 - var(--parallax, 0) / 900)" }
            : null),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

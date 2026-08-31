"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useInView } from "@/components/site/reveal";

/**
 * Line-art glyphs for the six delivery stages, drawn on scroll.
 *
 * The drawing is done with `stroke-dashoffset`, which is why every path here
 * carries `pathLength={1}`: it renormalises the path's length to 1 regardless
 * of its real geometry, so a single `stroke-dasharray: 1` rule in CSS drives
 * every shape identically. Without it each path would need its own measured
 * dash length and the timings would drift apart as soon as a shape changed.
 *
 * Each segment is delayed a little further than the last, so the glyph draws
 * in the order a person would draw it rather than every stroke arriving at
 * once — which is the difference between a mark being *made* and a mark being
 * revealed.
 *
 * `vector-effect="non-scaling-stroke"` keeps the hairline at one physical
 * pixel weight whatever size the glyph is rendered at, matching the seams the
 * rest of the page is built from.
 */

type Segment = { d: string; delay: number };

const GLYPHS: Segment[][] = [
  // 01 — Site survey: a tripod over a ground line, with the sight line it takes.
  [
    { d: "M4 27h24", delay: 0 },
    { d: "M16 7v10", delay: 0.12 },
    { d: "M16 17 8 27M16 17l8 10", delay: 0.24 },
    { d: "M16 12h12", delay: 0.44 },
  ],
  // 02 — Structural design: a stamped frame with its bracing.
  [
    { d: "M5 5h22v22H5z", delay: 0 },
    { d: "M5 5l22 22M27 5L5 27", delay: 0.18 },
    { d: "M11 11h10v10H11z", delay: 0.4 },
  ],
  // 03 — Supply: stacked cabinets, colour-matched as one batch.
  [
    { d: "M4 8h11v11H4z", delay: 0 },
    { d: "M17 8h11v11H17z", delay: 0.12 },
    { d: "M10.5 21h11v6h-11z", delay: 0.24 },
    { d: "M4 30h24", delay: 0.4 },
  ],
  // 04 — Installation: a wall going up against a plumb line.
  [
    { d: "M6 28V9l12-5v24", delay: 0 },
    { d: "M18 12h8v16h-8", delay: 0.16 },
    { d: "M3 28h26", delay: 0.34 },
    { d: "M11 15v3M11 21v3", delay: 0.5 },
  ],
  // 05 — Commissioning: a calibration sweep resolving across the surface.
  [
    { d: "M4 6h24v20H4z", delay: 0 },
    { d: "M10 16h4M18 16h4", delay: 0.2 },
    { d: "M16 10v12", delay: 0.34 },
    { d: "M4 31h24", delay: 0.48 },
  ],
  // 06 — Service: a response arc closing back on itself.
  [
    { d: "M26 16a10 10 0 1 1-3-7.1", delay: 0 },
    { d: "M26 4v5h-5", delay: 0.32 },
    { d: "M16 11v5l4 3", delay: 0.46 },
  ],
];

export function StageGlyph({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  const { ref, inView } = useInView<SVGSVGElement>();
  const segments = GLYPHS[index % GLYPHS.length];

  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn(
        "size-8 stroke-seam-bright transition-colors duration-300 group-hover:stroke-signal",
        className,
      )}
      strokeWidth={1.5}
      strokeLinecap="square"
    >
      {segments.map((segment) => (
        <path
          key={segment.d}
          d={segment.d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          // Held at dashoffset 1 — fully undrawn — until the glyph is on
          // screen, so it draws when it is watched rather than before.
          className={inView ? "path-draw" : undefined}
          style={
            inView
              ? { animationDelay: `${segment.delay}s` }
              : { strokeDasharray: 1, strokeDashoffset: 1 }
          }
        />
      ))}
    </svg>
  );
}

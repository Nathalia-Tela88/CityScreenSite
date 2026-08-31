"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type Step = { n: string; title: string; body: string };

/**
 * The numbered sequence used to explain a process — how a service call runs,
 * what happens after an enquiry lands.
 *
 * Flex rather than a grid, because the counts differ per page and neither
 * three nor five divides evenly into a fixed column count: `flex-1` lets the
 * last row fill the width instead of leaving a seam-coloured hole where the
 * missing cells would be.
 *
 * Each tile pulls forward under the pointer and its numeral lights and grows
 * with it, so a sequence of near-identical panels has one thing the eye can
 * follow along the row.
 */
export function StepList({
  steps,
  className,
}: {
  steps: readonly Step[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "flex flex-wrap gap-px border border-seam bg-seam",
        className,
      )}
    >
      {steps.map((step) => (
        <li
          key={step.n}
          className="group tile-lift flex min-w-56 flex-1 flex-col bg-cabinet p-7"
        >
          {/* `self-start` keeps the box hugging the glyphs. Left to stretch,
              the numeral's transform origin would sit at the left edge of a
              full-width flex item, which is the same place — but only until
              someone centres the tile. */}
          <span className="tabular step-numeral self-start font-display text-3xl font-medium text-seam-bright">
            {step.n}
          </span>
          <h3 className="mt-5 font-display text-lg font-medium text-filament">
            {step.title}
          </h3>
          <p className="mt-3 text-sm text-graphite">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

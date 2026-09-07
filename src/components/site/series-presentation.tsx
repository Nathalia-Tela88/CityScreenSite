"use client";

import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";
import type { Frame } from "@/lib/series";
import type { FrameCopy } from "@/lib/i18n/frames";
import { useT } from "@/lib/i18n";
import { Display, Eyebrow, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";

/**
 * The manufacturer's product presentation, one series at a time.
 *
 * LAMPRO and Unilumin both present a product as a deck: the cabinet first,
 * then the two or three things that actually decide a specification, then the
 * installed evidence. That sequence is worth keeping — it is the order a buyer
 * asks questions in — so the frames arrive in it and this component does not
 * re-sort them.
 *
 * What it does not keep is the deck's own styling. A slide is built to be
 * projected at a trade stand: full-bleed artwork, the claim burned into the
 * image, no way in for anything the reseller needs to say. Here the artwork is
 * mounted as a plate and the claim is set beside it as type, in the site's own
 * voice, so a caption can carry the manufacturer's qualifier — "on LSK2.8",
 * "optional", "P2.6" — that the slide leaves off.
 *
 * Frames alternate sides down the page. Not for variety: the eye needs the
 * caption column to move, or eleven stacked rows of image-then-text read as a
 * single scrolling image and the captions stop being read at about frame four.
 */
export function SeriesPresentation({
  frames,
  copy,
  name,
}: {
  frames: Frame[];
  copy?: FrameCopy[];
  name: string;
}) {
  const { t } = useT();
  if (frames.length === 0) return null;

  return (
    <Section className="py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow>{t.seriesPage.presentationEyebrow}</Eyebrow>
        <Display as="h2" size="md" className="mt-6">
          {name}
        </Display>
        <p className="mt-5 text-base text-graphite">
          {t.seriesPage.presentationLede}
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-px border border-seam bg-seam md:mt-20">
        {frames.map((frame, i) => (
          <FrameRow
            key={frame.src}
            frame={frame}
            copy={copy?.[i]}
            index={i}
            name={name}
          />
        ))}
      </div>
    </Section>
  );
}

function FrameRow({
  frame,
  copy,
  index,
  name,
}: {
  frame: Frame;
  copy?: FrameCopy;
  index: number;
  name: string;
}) {
  const { t } = useT();
  const flipped = index % 2 === 1;

  return (
    <Reveal delay={0.04}>
      <article
        className={cn(
          "grid grid-cols-1 gap-px bg-seam",
          // The caption column swaps sides on odd rows. `lg:` and not `md:`:
          // below that width the two tracks are stacked anyway and the order
          // utilities would only move the caption above its own picture.
          "lg:grid-cols-[1.25fr_0.75fr]",
        )}
      >
        {/* The frame. Its plate holds the ground the artwork was drawn for, in
            both themes — see plate-dark / plate-light in globals.css. Without
            that, half of these captions are invisible in one theme or the
            other, and they are the half carrying the figures. */}
        <div
          className={cn(
            "relative flex items-center justify-center p-6 md:p-10",
            frame.tone === "dark" ? "plate-dark" : "plate-light",
            flipped && "lg:order-2",
          )}
        >
          <Image
            src={frame.src}
            alt={
              copy
                ? `${name} — ${copy.title}`
                : `${name} — ${t.seriesPage.renderNote}`
            }
            width={1600}
            height={1100}
            quality={88}
            sizes="(min-width: 1024px) 62vw, 100vw"
            // Frame 1 is what the page is opened to look at; the rest are
            // below the fold on every viewport this renders at.
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            className="h-auto max-h-[32rem] w-full object-contain"
          />
        </div>

        <div
          className={cn(
            "flex flex-col justify-center bg-cabinet p-7 md:p-9",
            flipped && "lg:order-1",
          )}
        >
          <span className="label-data tabular text-graphite-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          {copy ? (
            <>
              <h3 className="rule-left mt-5 font-display text-xl font-medium text-filament md:text-2xl">
                {copy.title}
              </h3>
              <p className="mt-4 text-base text-graphite">{copy.body}</p>
            </>
          ) : (
            /* A series whose captions have not been written yet still shows
               its deck. Saying so is better than captioning the frame with a
               guess at what the manufacturer meant by it. */
            <p className="mt-5 text-base text-graphite-dim">
              {t.seriesPage.frameUncaptioned}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  );
}

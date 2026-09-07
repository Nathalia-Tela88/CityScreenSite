"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { modelsBySlug, type Model } from "@/lib/models";
import { revealClass, useInView } from "@/components/site/reveal";
import { Display, Eyebrow, Lede, Section } from "@/components/site/primitives";

/**
 * The series inside one platform.
 *
 * Where a series has no photograph yet the card shows its name set on the
 * unlit-cabinet texture instead of a stand-in image. A generic panel shot
 * under a specific model number would read as a photograph of that model, and
 * a buyer comparing an LMini against an LHP would be comparing two pictures of
 * nothing.
 */
function SeriesCard({
  model,
  index,
  requestLabel,
}: {
  model: Model;
  index: number;
  requestLabel: string;
}) {
  const { ref, inView } = useInView<HTMLAnchorElement>();
  const hero = model.frames?.[0];
  const second = model.frames?.[1];

  return (
    <Link
      ref={ref}
      href={`/products/${model.slug}`}
      style={inView ? { animationDelay: `${index * 0.08}s` } : undefined}
      className={cn(
        revealClass(inView),
        "group press-soft flex w-full flex-col bg-cabinet panel-lift hover:bg-cabinet-raised",
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden",
          // The card carries the ground its frame was drawn for, the same way
          // the series header does. Without it a white datasheet render sits
          // in a dark grid as a bright rectangle, and a cut-out on the light
          // theme loses its edges entirely.
          hero?.tone === "light" ? "plate-light" : "plate-dark",
        )}
      >
        {hero ? (
          <>
            <Image
              src={hero.src}
              alt={model.name}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 460px"
              // `contain`, not `cover`. These are product frames, not
              // photographs with room to spare: cropping one to fill 4:3 cuts
              // the cabinet in half, which is the one thing the card exists to
              // show.
              className="object-contain p-4 transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
            />
            {/* The second frame of the deck, uncovered on hover rather than
                cross-faded over the first, so the two are never both
                half-visible. Only when the series actually has one. */}
            {second && (
              <Image
                src={second.src}
                alt=""
                aria-hidden
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 460px"
                className="reveal-swap object-contain p-4"
              />
            )}
            {hero.tone === "dark" && (
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
              />
            )}
            {/* Quick action. A real destination — this card already links to
                the series page, so the overlay states where it goes rather
                than inventing a cart affordance the site has no use for. */}
            <span className="reveal-layer label-data absolute bottom-4 left-4 flex items-center gap-2 border border-white/25 bg-black/70 px-3 py-2 text-white backdrop-blur-sm">
              {requestLabel}
              <span aria-hidden>→</span>
            </span>
          </>
        ) : (
          // A plain surface, not the module grid — at this size the grid read
          // as a low-resolution image rather than as a waiting slot.
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center bg-cabinet-raised"
          >
            <span className="font-display text-lg font-medium text-graphite-dim transition-colors duration-300 group-hover:text-signal md:text-xl">
              {model.name}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="rule-left font-display text-lg font-medium text-filament md:text-xl">
          {model.name}
        </h3>
        <span className="label-data mt-auto flex items-center gap-2 pt-6 text-graphite transition-colors group-hover:text-signal">
          {requestLabel}
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function SeriesGrid({
  slug,
  eyebrow,
  heading,
  intro,
  requestLabel,
  className,
}: {
  slug: string;
  eyebrow: string;
  heading: string;
  intro: string;
  requestLabel: string;
  className?: string;
}) {
  const models = modelsBySlug[slug] ?? [];
  if (models.length === 0) return null;

  return (
    <Section className={cn("py-20 md:py-28", className)}>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display as="h2" size="lg" delay={0.08} className="mt-6">
          {heading}
        </Display>
        <Lede delay={0.16} className="mt-6 max-w-xl">
          {intro}
        </Lede>
      </div>

      {/* Flex rather than fixed columns: the seam colour behind this list is
          what fills any cell a grid leaves empty, and the counts here (1, 3, 4)
          do not divide evenly into a column count at every breakpoint. Flex
          items grow to fill the last row instead, so there is never a gap. */}
      <ul
        className={cn(
          "mt-14 flex flex-wrap gap-px border border-seam bg-seam",
          models.length === 1 && "max-w-sm",
        )}
      >
        {models.map((model, index) => (
          <li key={model.name} className="flex min-w-60 flex-1">
            <SeriesCard
              model={model}
              index={index}
              requestLabel={requestLabel}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}

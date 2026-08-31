import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";
import { Cta } from "@/components/site/primitives";

/**
 * Every interior page opens the same way: an eyebrow that states the real
 * technical anchor, a display headline, a lede, and — where the page has a
 * subject worth showing — the same LED treatment as the homepage, without the
 * pitch control. One signature, stated once and then echoed quietly.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  stats,
  cta,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  image?: string;
  stats?: { label: string; value: string }[];
  cta?: { href: string; label: string };
  className?: string;
}) {
  return (
    // With an image behind it this is an LED wall and stays dark in both
    // themes; without one it is an ordinary page header and follows the theme.
    <section className={cn("relative", image && "on-wall bg-obsidian", className)}>
      {image && (
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          {/* The photograph, sharp. `quality` is lifted above the default 75
              because this runs full-bleed behind a headline, where the usual
              compression artefacts sit right next to crisp type and show. */}
          <Image
            src={image}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40">
        <p className="label-data flex items-center gap-2.5 text-signal">
          <span aria-hidden className="inline-block h-1.5 w-1.5 bg-signal" />
          {eyebrow}
        </p>

        {/* 24ch, not 18. `ch` is the advance of the "0" glyph, which in a
            proportional face is narrower than the average letter — 18ch used to
            hold about 23 characters of real text. In a monospace face every
            glyph is exactly 1ch, so the same measure now holds exactly 18, and
            the headings started breaking into more and shorter lines than they
            were set for. 24ch restores the line length the type was drawn to,
            and keeps the headline wider than the lede beneath it rather than
            narrower, which is what made the block read as badly set. */}
        <h1 className="mt-7 max-w-[24ch] font-display text-4xl font-semibold leading-[0.98] text-filament md:text-7xl lg:text-8xl">
          {title}
        </h1>

        {lede && (
          <p className="mt-7 max-w-2xl text-md text-graphite md:text-lg">{lede}</p>
        )}

        {cta && (
          <Cta href={cta.href} className="mt-9">
            {cta.label}
          </Cta>
        )}

        {stats && stats.length > 0 && (
          <dl className="mt-14 grid grid-cols-1 gap-px border border-seam bg-seam sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.12}
                className="bg-cabinet px-6 py-6"
              >
                <dd>
                  <CountUp
                    value={stat.value}
                    className="tabular font-display text-2xl font-medium text-filament md:text-3xl"
                  />
                </dd>
                <dt className="label-data mt-3 text-graphite-dim">
                  {stat.label}
                </dt>
              </Reveal>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

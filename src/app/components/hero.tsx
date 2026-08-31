"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { VideoBackdrop } from "@/components/site/video-backdrop";
import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";
import { ParallaxLayer, ParallaxScene } from "@/components/site/parallax";
import { Cta, Display, Eyebrow, Lede } from "@/components/site/primitives";

export function Hero() {
  const { t } = useT();

  return (
    // `on-wall` holds the dark palette here even when the page is in light
    // mode: this is night footage of an emissive surface, and a pale hero would
    // read as a hole punched in the page.
    <section className="on-wall flex min-h-svh flex-col bg-obsidian">
      {/* Four planes at four depths. The footage is furthest back and holds
          30% of the scroll, so the wall appears to sit behind the window
          rather than being pasted onto it; the scrims track it closely enough
          to stay locked to the image they are darkening; the headline runs
          slightly ahead of the page, which is what separates it from the
          footage instead of leaving both moving as one flat picture. */}
      <ParallaxScene className="relative flex flex-1 items-end overflow-hidden">
        <ParallaxLayer speed={0.3} fade className="absolute inset-0">
          {/* Over-scaled so the held-back layer never exposes the edge of the
              frame as it lags behind the scroll. */}
          <VideoBackdrop
            src="/video/cityscreen-hero.mp4"
            poster="/video/cityscreen-hero-poster.jpg"
            loopEnd={5.2}
            className="absolute inset-0 h-[125%] w-full"
          />
        </ParallaxLayer>

        {/* Two layers rather than one.
            A flat scrim across the whole frame so the footage sits back
            everywhere instead of stopping halfway, and a softer gradient
            weighted to the left for the extra contrast the text needs.
            Together they land around 78% behind the headline and 45% on the
            open right-hand side, which keeps the wall clearly readable. */}
        <ParallaxLayer
          speed={0.22}
          className="pointer-events-none absolute inset-0"
        >
          <div aria-hidden className="absolute inset-0 h-[125%] bg-obsidian/45" />
          <div
            aria-hidden
            className="absolute inset-0 h-[125%] bg-gradient-to-r from-obsidian/60 via-obsidian/30 to-transparent md:to-70%"
          />
        </ParallaxLayer>

        {/* The opening sequence: label, headline, lede, actions — each a beat
            behind the last, in the order the page is read. */}
        <ParallaxLayer speed={-0.08} className="relative z-10 w-full">
          <div className="w-full px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>

            {/* The hero runs slower than the rest of the site: it is the first
                thing seen and has the room for it. Later sections keep the
                shorter cadence so scrolling never waits on an animation. */}
            <Display
              as="h1"
              delay={0.25}
              stagger={0.12}
              lift
              flicker
              // 20ch for the same reason as the page header: `ch` is the "0"
              // advance, and on a monospace face that is now every glyph, so
              // the old 16ch measure lost a fifth of its characters.
              className="mt-8 max-w-[20ch] text-5xl leading-[0.95] md:text-8xl lg:text-9xl"
            >
              {t.hero.titleTop}
              <br />
              <span className="text-emissive">{t.hero.titleBottom}</span>
            </Display>

            <Lede delay={0.9} className="mt-8 max-w-xl">
              {t.hero.lede}
            </Lede>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* The flicker rides on a wrapper, not on the button itself.
                  `Cta` already sets an `animation` for its entrance reveal,
                  and a second animation shorthand on the same element replaces
                  it outright rather than adding to it — put together, only the
                  reveal survived and the flicker silently never ran. On
                  separate elements the two opacities multiply, so the button
                  strikes on as it arrives. */}
              <span className="cta-flicker inline-flex">
                <Cta href="/contact-us" delay={1.15}>
                  {t.nav.quote}
                </Cta>
              </span>
              <Cta href="/products" variant="outline" delay={1.28}>
                {t.common.seeTheRange}
              </Cta>
            </div>
          </div>
        </ParallaxLayer>
      </ParallaxScene>

      {/* Status strip along the bottom edge of the wall. */}
      <div className="border-t border-seam bg-obsidian">
        <dl className="grid grid-cols-1 divide-y divide-seam sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.hero.proof.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.12}
              className="px-6 py-6 md:px-10 md:py-7"
            >
              <dd className="flex items-baseline gap-1">
                <CountUp
                  value={item.value}
                  className="tabular font-display text-3xl font-medium text-filament md:text-4xl"
                />
                <span className="label-data text-signal">{item.unit}</span>
              </dd>
              <dt className="label-data mt-3 text-graphite-dim">{item.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

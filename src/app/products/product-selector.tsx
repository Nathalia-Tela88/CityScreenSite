"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { modelsBySlug } from "@/lib/models";
import { Display, Eyebrow, Section } from "@/components/site/primitives";

/**
 * The selection surface.
 *
 * Two actions per platform, and they are deliberately different jobs: read the
 * datasheet, or pick this one and carry the choice into the quote form. The
 * second is a real handoff — the platform arrives pre-selected on the contact
 * page rather than asking the client to remember what they just chose.
 *
 * The photograph shows each platform installed rather than as a cabinet on a
 * backdrop. That is partly what we have, but it is also the more useful image:
 * every LED cabinet is a black box, and what actually separates these four is
 * the room they belong in.
 */
export function ProductSelector() {
  const { t, services } = useT();

  return (
    <Section className="py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow>{t.productsPage.pickEyebrow}</Eyebrow>
        <Display as="h2" size="lg" className="mt-6">
          {t.productsPage.pickHeading}
        </Display>
        <p className="mt-6 max-w-xl text-md text-graphite">
          {t.productsPage.pickBody}
        </p>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.slug}
            className="group press-soft flex flex-col bg-cabinet panel-lift hover:bg-cabinet-raised"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.name} — ${service.tagline}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
              {/* Scrims sit on photographs, so they stay dark in both themes. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <span className="label-data absolute left-4 top-4 border border-white/25 bg-black/70 px-2.5 py-1.5 text-white backdrop-blur-sm">
                {service.eyebrow}
              </span>

              {/* The shortlisting numbers, surfaced on the photograph. These
                  are the five parameters the comparison table below sorts on,
                  so hovering a platform answers "is this the one?" without
                  scrolling to the table. */}
              <div className="reveal-layer absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
                {(["pitch", "brightness"] as const).map((key) => (
                  <span
                    key={key}
                    className="label-data flex items-baseline gap-2 border border-white/20 bg-black/70 px-2.5 py-1.5 text-white/70 backdrop-blur-sm"
                  >
                    {t.productsPage.rows[key]}
                    <span className="tabular text-white">
                      {t.productsPage.compareValues[service.slug][key]}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7 md:p-9">
              <h3 className="font-display text-2xl font-medium text-filament md:text-3xl">
                {service.name}
              </h3>
              <p className="mt-2 font-display text-md text-graphite">
                {service.tagline}
              </p>
              <p className="mt-5 text-base text-graphite">{service.summary}</p>

              {/* The actual model names, so a client can recognise the one
                  they were quoted elsewhere without opening the page. */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {(modelsBySlug[service.slug] ?? []).map((model) => (
                  <li key={model.name}>
                    <Link
                      href={`/products/${model.slug}`}
                      className="block border border-seam px-2.5 py-1.5 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-graphite-dim transition-colors hover:border-signal hover:text-signal"
                    >
                      {model.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-seam pt-5">
                {service.heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="label-data text-graphite-dim">
                      {stat.label}
                    </dt>
                    <dd className="tabular mt-1.5 text-base text-filament">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <Link
                  href={`/contact-us?platform=${service.slug}`}
                  className="label-data inline-flex items-center gap-2.5 bg-signal px-5 py-3.5 text-obsidian transition-colors hover:bg-filament"
                >
                  {t.common.selectPlatform}
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href={service.href}
                  className="label-data inline-flex items-center gap-2.5 border border-seam-bright px-5 py-3.5 text-filament transition-colors hover:border-signal hover:text-signal"
                >
                  {t.common.specifications}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

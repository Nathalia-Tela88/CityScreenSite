"use client";

import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import { Display, Eyebrow, Section } from "@/components/site/primitives";

export function ResourcesContent() {
  const { t, services } = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.resourcesPage.eyebrow}
        title={t.resourcesPage.title}
        lede={t.resourcesPage.lede}
      />

      {/* Top padding is load-bearing: the section draws its seam on its own
          top edge, and with bottom-only padding that hairline lands exactly on
          the first element inside — cutting through the label's glyphs, which
          have no leading to absorb it at `line-height: 1`. */}
      <Section className="pt-12 pb-20 md:pt-16 md:pb-28">
        <ul className="border-t border-seam">
          {t.resourcesPage.articles.map((article) => (
            <li key={article.title}>
              <article className="group grid grid-cols-1 gap-4 border-b border-seam py-8 md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-10 md:py-10">
                <p className="label-data text-signal">{article.topic}</p>
                <div>
                  <h2 className="font-display text-xl font-medium text-filament transition-colors group-hover:text-signal md:text-2xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base text-graphite">
                    {article.summary}
                  </p>
                </div>
                <p className="label-data shrink-0 text-graphite-dim">
                  {article.minutes} {t.resourcesPage.minutesSuffix}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-graphite-dim">
          {t.resourcesPage.note}
        </p>
      </Section>

      <Section className="bg-cabinet py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.resourcesPage.specsEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.resourcesPage.specsHeading}
          </Display>
          <p className="mt-6 max-w-xl text-md text-graphite">
            {t.resourcesPage.specsBody}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px border border-seam bg-seam sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="group flex h-full flex-col bg-cabinet p-7 transition-colors hover:bg-obsidian"
              >
                <p className="label-data text-graphite-dim">
                  {service.eyebrow}
                </p>
                <h3 className="rule-left mt-4 font-display text-xl font-medium text-filament">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm text-graphite">{service.tagline}</p>
                <span className="label-data mt-auto flex items-center gap-2 pt-8 text-filament transition-colors group-hover:text-signal">
                  {t.common.specifications}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        heading={t.resourcesPage.ctaHeading}
        body={t.resourcesPage.ctaBody}
      />
    </>
  );
}

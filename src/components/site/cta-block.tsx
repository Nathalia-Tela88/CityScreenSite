"use client";

import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { company } from "@/lib/i18n/navigation";
import { Cta, Display, Eyebrow, Lede, Section } from "@/components/site/primitives";

/**
 * The closing panel. Two doors, not one: send the site details and get a
 * stamped proposal, or skip the form and call the office. Both are real
 * actions, so both get equal weight rather than a primary and a whisper.
 */
export function CtaBlock({
  heading,
  body,
  quoteHref = "/contact-us",
}: {
  heading?: string;
  body?: string;
  quoteHref?: string;
}) {
  const { t } = useT();

  return (
    <Section className="py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <Eyebrow>{t.cta.eyebrow}</Eyebrow>
          <Display as="h2" size="lg" delay={0.08} className="mt-6 max-w-3xl">
            {heading ?? t.cta.heading}
          </Display>
          <Lede delay={0.16} className="mt-7 max-w-xl">
            {body ?? t.cta.body}
          </Lede>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta href={quoteHref}>{t.nav.quote}</Cta>
            <Cta href="/products" variant="outline">
              {t.common.seeTheRange}
            </Cta>
          </div>
        </div>

        <div className="border-t border-seam pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="label-data text-graphite-dim">{t.cta.orSkip}</p>
          <p className="mt-5 text-base text-graphite">{t.cta.orSkipBody}</p>
          <a
            href={company.phoneHref}
            className="tabular mt-6 block font-display text-3xl font-medium text-filament transition-colors hover:text-signal md:text-4xl"
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 block text-sm text-graphite transition-colors hover:text-filament"
          >
            {company.email}
          </a>
          <p className="mt-8 text-sm text-graphite-dim">{company.address}</p>
          <Link
            href="/warranty-service"
            className="label-data mt-6 inline-block text-signal transition-colors hover:text-filament"
          >
            {t.cta.serviceDesk} →
          </Link>
        </div>
      </div>
    </Section>
  );
}

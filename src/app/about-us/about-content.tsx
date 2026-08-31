"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import {
  Cta,
  Display,
  Eyebrow,
  Metric,
  Section,
} from "@/components/site/primitives";

/** Initials stand in for a portrait — set in the same mono as every other
    identifier on the site, rather than a grey silhouette placeholder. */
function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function AboutContent() {
  const { t } = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        lede={t.aboutPage.lede}
        image="/img/app-commercial.jpg"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.aboutPage.principlesEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.aboutPage.principlesHeading}
          </Display>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2">
          {t.aboutPage.principles.map((principle) => (
            <div key={principle.title} className="bg-obsidian p-7 md:p-9">
              <h3 className="font-display text-xl font-medium text-filament">
                {principle.title}
              </h3>
              <p className="mt-3 text-base text-graphite">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cabinet py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{t.aboutPage.scaleEyebrow}</Eyebrow>
            <Display as="h2" size="md" className="mt-6">
              {t.aboutPage.scaleHeading}
            </Display>
            <p className="mt-5 max-w-sm text-base text-graphite">
              {t.aboutPage.scaleBody}
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.aboutPage.numbers.map((number) => (
              <Metric
                key={number.label}
                value={number.value}
                label={number.label}
              />
            ))}
          </dl>
        </div>
      </Section>

      <Section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.aboutPage.teamEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.aboutPage.teamHeading}
          </Display>
          <p className="mt-6 max-w-xl text-md text-graphite">
            {t.aboutPage.teamBody}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2 lg:grid-cols-3">
          {t.aboutPage.team.map((person) => (
            <li key={person.name} className="bg-obsidian p-7 md:p-9">
              <span
                aria-hidden
                className="tabular flex h-14 w-14 items-center justify-center border border-seam-bright text-lg text-signal"
              >
                {initials(person.name)}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium text-filament">
                {person.name}
              </h3>
              <p className="label-data mt-2.5 text-graphite-dim">
                {person.role}
              </p>
              <p className="mt-4 text-base text-graphite">{person.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-6 border-t border-seam pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-medium text-filament">
              {t.aboutPage.hiringHeading}
            </h3>
            <p className="mt-2 text-base text-graphite">
              {t.aboutPage.hiringBody}
            </p>
          </div>
          <Cta href="/contact-us" variant="outline" className="shrink-0">
            {t.aboutPage.hiringCta}
          </Cta>
        </div>
      </Section>

      <Section className="bg-cabinet py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>{t.aboutPage.dealerEyebrow}</Eyebrow>
          <Display as="h2" size="md" className="mt-6">
            {t.aboutPage.dealerHeading}
          </Display>
          <p className="mt-6 text-md text-graphite">{t.aboutPage.dealerBody}</p>
        </div>
      </Section>

      <CtaBlock heading={t.aboutPage.ctaHeading} body={t.aboutPage.ctaBody} />
    </>
  );
}

"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { company } from "@/lib/i18n/navigation";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import { Faq } from "@/components/site/faq";
import { StepList } from "@/components/site/step-list";
import { Display, Eyebrow, Section } from "@/components/site/primitives";

export function WarrantyContent() {
  const { t, faqs } = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.warrantyPage.eyebrow}
        title={t.warrantyPage.title}
        lede={t.warrantyPage.lede}
        image="/img/app-dooh.jpg"
        stats={t.warrantyPage.stats}
        cta={{
          href: company.phoneHref,
          label: t.warrantyPage.callDesk,
        }}
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.warrantyPage.promisesEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.warrantyPage.promisesHeading}
          </Display>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2">
          {t.warrantyPage.promises.map((promise) => (
            <div key={promise.title} className="bg-obsidian p-7 md:p-9">
              <h3 className="font-display text-xl font-medium text-filament">
                {promise.title}
              </h3>
              <p className="mt-3 text-base text-graphite">{promise.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cabinet py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.warrantyPage.stepsEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.warrantyPage.stepsHeading}
          </Display>
          <p className="mt-6 max-w-xl text-md text-graphite">
            {t.warrantyPage.stepsBody}
          </p>
        </div>

        <StepList steps={t.warrantyPage.steps} className="mt-14" />
      </Section>

      <Section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.warrantyPage.compareEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.warrantyPage.compareHeading}
          </Display>
          <p className="mt-6 max-w-xl text-md text-graphite">
            {t.warrantyPage.compareBody}
          </p>
        </div>

        <div className="mt-12 -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
          <table className="row-focus w-full min-w-[52rem] border-collapse text-left">
            <caption className="sr-only">
              {t.warrantyPage.compareCaption}
            </caption>
            <thead>
              <tr className="border-b border-seam-bright">
                <th
                  scope="col"
                  className="w-[30%] pb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-graphite-dim"
                >
                  {t.warrantyPage.colParameter}
                </th>
                <th
                  scope="col"
                  className="pb-5 pl-6 font-mono text-xs font-medium uppercase tracking-[0.14em] text-signal"
                >
                  {company.name}
                </th>
                <th
                  scope="col"
                  className="pb-5 pl-6 font-mono text-xs font-medium uppercase tracking-[0.14em] text-graphite-dim"
                >
                  {t.warrantyPage.colOffshore}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.warrantyPage.comparison.map((row) => (
                <tr key={row.parameter} className="border-b border-seam">
                  <th
                    scope="row"
                    className="py-6 pr-6 text-left text-base font-normal text-graphite"
                  >
                    {row.parameter}
                  </th>
                  <td className="py-6 pl-6 text-base text-filament">
                    {row.cityscreen}
                  </td>
                  <td className="py-6 pl-6 text-base text-graphite-dim">
                    {row.offshore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Faq
        items={faqs.warranty}
        eyebrow={t.warrantyPage.faqEyebrow}
        heading={t.warrantyPage.faqHeading}
        intro={t.warrantyPage.faqIntro}
      />

      <CtaBlock
        heading={t.warrantyPage.ctaHeading}
        body={t.warrantyPage.ctaBody}
      />
    </>
  );
}

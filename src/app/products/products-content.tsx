"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { modelsBySlug } from "@/lib/models";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import {
  Cta,
  Display,
  Eyebrow,
  Section,
  SpecRow,
} from "@/components/site/primitives";

import { ProductSelector } from "./product-selector";

/** The five parameters a buyer uses to shortlist before reading any datasheet. */
const COMPARISON_KEYS = [
  "pitch",
  "brightness",
  "ingress",
  "refresh",
  "service",
] as const;

const headCell =
  "pb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-graphite-dim";

export function ProductsContent() {
  const { t, services } = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.productsPage.eyebrow}
        title={t.productsPage.title}
        lede={t.productsPage.lede}
        image="/img/app-professional.jpg"
        stats={[
          { label: t.productsPage.statPitch, value: "0.9 – 10 mm" },
          { label: t.productsPage.statPeak, value: "10,000 nits" },
          { label: t.productsPage.statWarranty, value: "5 years" },
        ]}
      />

      {/* Choose first, compare second, read the datasheet third. */}
      <ProductSelector />

      {/* Shortlist on one screen: five rows, four columns. */}
      <Section className="bg-cabinet py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.productsPage.compareEyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6">
            {t.productsPage.compareHeading}
          </Display>
        </div>

        <div className="-mx-6 mt-12 overflow-x-auto px-6 md:mx-0 md:px-0">
          <table className="row-focus w-full min-w-[60rem] border-collapse text-left">
            <caption className="sr-only">
              {t.productsPage.compareCaption}
            </caption>
            <thead>
              <tr className="border-b border-seam-bright">
                <th scope="col" className={`w-[22%] ${headCell}`}>
                  {t.productsPage.parameter}
                </th>
                {services.map((service) => (
                  <th key={service.slug} scope="col" className="pb-5 pl-6">
                    <Link
                      href={service.href}
                      className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-graphite transition-colors hover:text-signal"
                    >
                      {service.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_KEYS.map((key) => (
                <tr key={key} className="border-b border-seam">
                  <th
                    scope="row"
                    className="py-6 pr-6 text-left text-base font-normal text-graphite"
                  >
                    {t.productsPage.rows[key]}
                  </th>
                  {services.map((service) => (
                    <td
                      key={service.slug}
                      className="tabular py-6 pl-6 text-base text-filament"
                    >
                      {t.productsPage.compareValues[service.slug][key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Then the full datasheet for each, in place. */}
      {services.map((service, index) => (
        <Section
          key={service.slug}
          id={service.slug}
          className={
            index % 2 === 1 ? "bg-cabinet py-20 md:py-28" : "py-20 md:py-28"
          }
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-cabinet">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 992px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <p className="label-data mt-8 text-signal">{service.eyebrow}</p>
              <Display as="h2" size="md" className="mt-4">
                {service.name}
              </Display>
              <p className="mt-3 font-display text-lg text-graphite">
                {service.tagline}
              </p>
              <p className="mt-6 max-w-xl text-base text-graphite">
                {service.summary}
              </p>
              <div className="mt-8">
                <p className="label-data text-graphite-dim">
                  {t.productsPage.seriesLabel}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {(modelsBySlug[service.slug] ?? []).map((model) => (
                    <li key={model.name}>
                      <Link
                        href={`/products/${model.slug}`}
                        className="block border border-seam px-2.5 py-1.5 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-filament transition-colors hover:border-signal hover:text-signal"
                      >
                        {model.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Cta href={service.href} variant="outline" className="mt-8">
                {t.productsPage.fullPlatformPage}
              </Cta>
            </div>

            <div className="space-y-12">
              {service.specTables.map((table) => (
                <div key={table.title}>
                  <h3 className="font-display text-xl font-medium text-filament">
                    {table.title}
                  </h3>
                  {table.caption && (
                    <p className="mt-2 text-sm text-graphite-dim">
                      {table.caption}
                    </p>
                  )}
                  <div className="mt-6">
                    {table.rows.map((row) => (
                      <SpecRow
                        key={row.parameter}
                        parameter={row.parameter}
                        value={row.value}
                        note={row.note}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <CtaBlock
        heading={t.productsPage.ctaHeading}
        body={t.productsPage.ctaBody}
      />
    </>
  );
}

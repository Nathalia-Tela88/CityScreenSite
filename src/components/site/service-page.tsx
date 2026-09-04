"use client";

import Image from "next/image";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import { Faq } from "@/components/site/faq";
import { ProjectCard } from "@/components/site/project-grid";
import { SeriesGrid } from "@/components/site/series-grid";
import {
  Cabinet,
  Display,
  Eyebrow,
  Section,
  SpecRow,
} from "@/components/site/primitives";

/**
 * One template for all four disciplines. Everything that differs between them
 * lives in the localised service data, so the pages stay in step with each
 * other — and with the active language — by construction.
 */
export function ServicePage({
  slug,
}: {
  slug: "rental" | "dooh" | "commercial" | "professional";
}) {
  const { t, serviceBySlug, faqs, projects } = useT();
  const service = serviceBySlug[slug];

  const related = projects.filter((p) => p.disciplineKey === slug);
  const platformFaqs =
    slug === "rental" ? faqs.rental : slug === "dooh" ? faqs.dooh : undefined;

  return (
    <>
      <SiteHeader />

      <PageHeader
        eyebrow={service.eyebrow}
        title={service.name}
        lede={service.summary}
        image={service.image}
        stats={service.heroStats}
        cta={{
          href: `/contact-us?platform=${service.slug}`,
          label: t.nav.quote,
        }}
      />

      {/* What separates this platform from the other three. */}
      <Section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{service.tagline}</Eyebrow>
          <Display as="h2" size="md" delay={0.08} className="mt-6">
            {t.platform.highlightsHeading}
          </Display>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2">
          {service.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="bg-cabinet panel-lift p-7 md:p-9"
            >
              <h3 className="font-display text-xl font-medium text-filament">
                {highlight.title}
              </h3>
              <p className="mt-3 text-base text-graphite">{highlight.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The same claims, as hardware. Sits between the written highlights and
          the series grid so the page alternates prose and picture instead of
          running four screens of specification before showing anything. */}
      {service.visuals && service.visuals.length > 0 && (
        <Section className="bg-cabinet-raised py-20 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>{t.platform.visualsEyebrow}</Eyebrow>
            <Display as="h2" size="md" delay={0.08} className="mt-6">
              {t.platform.visualsHeading}
            </Display>
            <p className="mt-5 text-base text-graphite">
              {t.platform.visualsBody}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {service.visuals.map((visual) => (
              <figure key={visual.src}>
                <div className="relative aspect-[4/3] overflow-hidden border border-seam bg-obsidian">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4 flex gap-3 text-base text-graphite">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal"
                  />
                  {visual.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      {/* The named series inside this platform. */}
      <SeriesGrid
        slug={service.slug}
        eyebrow={t.series.eyebrow}
        heading={t.series.heading}
        intro={t.series.intro}
        requestLabel={t.series.request}
      />

      {/* The datasheet, presented as a datasheet. */}
      <Section className="bg-cabinet-raised py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{t.platform.specsEyebrow}</Eyebrow>
            <Display as="h2" size="md" delay={0.08} className="mt-6">
              {t.platform.specsHeading}
            </Display>
            <p className="mt-5 max-w-sm text-base text-graphite">
              {t.platform.specsBody}
            </p>
          </div>

          <div className="space-y-14">
            {service.specTables.map((table) => (
              <Cabinet key={table.title} className="bg-obsidian p-7 md:p-9">
                <h3 className="font-display text-xl font-medium text-filament">
                  {table.title}
                </h3>
                {table.caption && (
                  <p className="mt-2 text-sm text-graphite-dim">
                    {table.caption}
                  </p>
                )}
                <div className="mt-7">
                  {table.rows.map((row) => (
                    <SpecRow
                      key={row.parameter}
                      parameter={row.parameter}
                      value={row.value}
                      note={row.note}
                    />
                  ))}
                </div>
              </Cabinet>
            ))}
          </div>
        </div>
      </Section>

      {/* Where it gets used. A plain list, because it is a plain list. */}
      <Section className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{t.platform.applicationsEyebrow}</Eyebrow>
            <Display as="h2" size="md" delay={0.08} className="mt-6">
              {t.platform.applicationsHeading}
            </Display>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {service.applications.map((application) => (
              <li
                key={application}
                className="flex items-baseline gap-4 border-b border-seam py-5"
              >
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-signal" />
                <span className="text-base text-filament">{application}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="py-20 md:py-28">
          <Eyebrow>{t.platform.installsEyebrow}</Eyebrow>
          <Display as="h2" size="md" delay={0.08} className="mt-6">
            {related.length === 1
              ? t.platform.installOne
              : t.platform.installMany}
          </Display>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {related.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}

      {platformFaqs && (
        <Faq
          items={platformFaqs}
          eyebrow={service.name}
          heading={t.platform.faqHeading}
        />
      )}

      <CtaBlock
        heading={`${t.seriesPage.specifyPrefix} ${service.name}`}
        body={t.platform.ctaBody}
        quoteHref={`/contact-us?platform=${service.slug}`}
      />
      <SiteFooter />
    </>
  );
}

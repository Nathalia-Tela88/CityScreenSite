"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { seriesByPlatform, hasDetail, type Series } from "@/lib/series";
import { SeriesPresentation } from "@/components/site/series-presentation";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CtaBlock } from "@/components/site/cta-block";
import { ProjectCard } from "@/components/site/project-grid";
import {
  Cabinet,
  Cta,
  Display,
  Eyebrow,
  Section,
  SpecRow,
} from "@/components/site/primitives";

/** Fills {token} placeholders in a dictionary string. */
function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

/**
 * One page per series.
 *
 * The honest shape of this page changes with how much real data exists. Where
 * a series has its own datasheet the page leads with it. Where it does not,
 * the page says so and shows the platform's published envelope instead —
 * clearly labelled as the platform's, never as the series'. It never presents
 * a figure nobody measured.
 */
export function SeriesPage({ item }: { item: Series }) {
  const { t, serviceBySlug, projects, seriesCopy, frameCopy } = useT();

  const platform = serviceBySlug[item.platform];
  const siblings = (seriesByPlatform[item.platform] ?? []).filter(
    (s) => s.slug !== item.slug,
  );
  const related = projects.filter((p) => p.disciplineKey === item.platform);

  // The datasheet is localised, so it comes from the dictionary rather than
  // from the routing record. A series with no entry still renders — it falls
  // back to the platform envelope and says so.
  const copy = seriesCopy[item.slug];
  const detailed = Boolean(copy) || hasDetail(item);

  const tagline = copy?.tagline ?? item.tagline;
  const summary = copy?.summary ?? item.summary;
  const heroStats = copy?.heroStats ?? item.heroStats;
  const highlights = copy?.highlights ?? item.highlights;
  const specTables = copy?.specTables ?? item.specTables;

  // The manufacturer's deck for this series, and the ground each frame in it
  // was drawn for. `hero` is frame 1 — the shot the header carries — and the
  // presentation below renders the whole sequence including it, because the
  // deck reads as a sequence and dropping its opening frame breaks the order
  // the captions were written in.
  const frames = item.frames ?? [];
  const hero = frames[0];

  return (
    <>
      <SiteHeader />

      {/* Header. The backdrop stays the platform photograph — an installed wall
          of this discipline — while the cabinet itself sits in front of it as a
          labelled object. Putting the render behind the gradient instead, as
          this once did, dimmed it to 40% and buried the one thing a buyer opens
          the page to look at. */}
      <section className="on-wall relative bg-obsidian">
        <div className="absolute inset-0">
          <Image
            src={platform.image}
            alt=""
            aria-hidden
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1560px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,44rem)] lg:items-center lg:gap-14">
            <div>
          <nav
            aria-label={t.seriesPage.breadcrumb}
            className="label-data text-graphite-dim"
          >
            <Link
              href="/products"
              className="transition-colors hover:text-signal"
            >
              {t.nav.products}
            </Link>
            <span aria-hidden className="mx-2.5">
              /
            </span>
            <Link
              href={platform.href}
              className="transition-colors hover:text-signal"
            >
              {platform.name}
            </Link>
          </nav>

          <Display as="h1" size="lg" delay={0.08} className="mt-7">
            {item.name}
          </Display>

          <p className="mt-6 max-w-2xl text-md text-graphite md:text-lg">
            {summary ??
              fill(t.seriesPage.summaryFallback, {
                platform: platform.name,
                summary: platform.summary,
              })}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Cta href={`/contact-us?platform=${item.platform}`}>
              {t.seriesPage.requestDatasheet}
            </Cta>
            <Cta href={platform.href} variant="outline">
              {t.seriesPage.aboutPlatform} {platform.name}
            </Cta>
          </div>
            </div>

            {/* The cabinet, lit and legible, rather than a mood shot. Sits on
                its own panel so a render with a white ground and one with a
                transparent ground read the same way against the wall behind.

                No `justify-self` on the figure: that sizes it to its content
                and the plate collapses to a fraction of its column. Default
                stretch is what makes it fill the track. */}
            {hero && (
              <figure className="w-full">
                <div
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden",
                    // The plate holds the ground this frame was drawn for, in
                    // both themes. A cabinet cut out on transparency sits on
                    // the dark plate and reads as an object on the wall; a
                    // white datasheet render sits on the light one and keeps
                    // its own edge instead of showing as a bright rectangle
                    // punched into the header.
                    hero.tone === "dark"
                      ? "plate-dark border border-seam"
                      : "plate-light panel-lift border border-seam",
                  )}
                >
                  <Image
                    src={hero.src}
                    alt={`${item.name} — ${t.seriesPage.renderNote}`}
                    fill
                    priority
                    quality={90}
                    sizes="(min-width: 1024px) 44rem, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <figcaption className="label-data mt-3 flex items-center gap-2.5 text-graphite-dim">
                  <span aria-hidden className="inline-block h-1.5 w-1.5 bg-signal" />
                  {item.name} · {t.seriesPage.renderNote}
                </figcaption>
              </figure>
            )}
          </div>

          {heroStats && heroStats.length > 0 && (
            <dl className="mt-14 grid grid-cols-1 gap-px border border-seam bg-seam sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-cabinet px-6 py-6">
                  <dd className="tabular font-display text-2xl font-medium text-filament md:text-3xl">
                    {stat.value}
                  </dd>
                  <dt className="label-data mt-3 text-graphite-dim">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* The manufacturer's deck. Sits directly under the header so the
          product is seen before it is read about. */}
      <SeriesPresentation
        frames={frames}
        copy={frameCopy[item.slug]}
        name={item.name}
      />

      {tagline && (
        <Section className="py-16 md:py-20">
          <Eyebrow>{t.seriesPage.apartEyebrow}</Eyebrow>
          <p className="mt-6 max-w-3xl font-display text-2xl text-filament md:text-3xl">
            {tagline}
          </p>
        </Section>
      )}

      {highlights && highlights.length > 0 && (
        <Section className="py-20 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>{tagline ?? t.seriesPage.apartEyebrow}</Eyebrow>
            <Display as="h2" size="md" className="mt-6">
              {t.seriesPage.behaviourHeading}
            </Display>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="bg-cabinet panel-lift p-7 md:p-9">
                <h3 className="font-display text-xl font-medium text-filament">
                  {h.title}
                </h3>
                <p className="mt-3 text-base text-graphite">{h.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Specifications. Either this series' own, or the platform's envelope
          with the difference stated outright. */}
      <Section className="bg-cabinet-raised py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{t.common.specifications}</Eyebrow>
            <Display as="h2" size="md" className="mt-6">
              {detailed
                ? t.seriesPage.specsFull
                : t.seriesPage.specsOnRequest}
            </Display>
            <p className="mt-5 max-w-sm text-base text-graphite">
              {detailed
                ? t.seriesPage.specsBodyFull
                : fill(t.seriesPage.specsBodyEnvelope, {
                    platform: platform.name,
                    series: item.name,
                  })}
            </p>
            <Cta
              href={`/contact-us?platform=${item.platform}`}
              variant="outline"
              className="mt-8"
            >
              {t.seriesPage.requestDatasheet}
            </Cta>
          </div>

          <div className="space-y-14">
            {(specTables ?? platform.specTables).map((table) => (
              <Cabinet key={table.title} className="bg-obsidian p-7 md:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-medium text-filament">
                    {table.title}
                  </h3>
                  {!detailed && (
                    <span className="label-data text-graphite-dim">
                      {platform.name} {t.seriesPage.platformTag}
                    </span>
                  )}
                </div>
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

      {/* Where the platform gets used — true of every series inside it. */}
      <Section className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{t.platform.applicationsEyebrow}</Eyebrow>
            <Display as="h2" size="md" className="mt-6">
              {t.platform.applicationsHeading}
            </Display>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {platform.applications.map((application) => (
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

      {siblings.length > 0 && (
        <Section className="bg-cabinet-raised py-20 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>{t.seriesPage.samePlatformEyebrow}</Eyebrow>
            <Display as="h2" size="md" className="mt-6">
              {t.seriesPage.otherSeries} {platform.name}{" "}
              {t.seriesPage.seriesWord}
            </Display>
          </div>
          {/* Flex, not a fixed column count — two or three siblings would
              otherwise leave the seam colour showing in the empty cells. */}
          <ul className="mt-12 flex flex-wrap gap-px border border-seam bg-seam">
            {siblings.map((s) => (
              <li key={s.slug} className="flex min-w-60 flex-1">
                <Link
                  href={`/products/${s.slug}`}
                  className="group flex w-full flex-col bg-cabinet panel-lift p-6 transition-colors hover:bg-obsidian"
                >
                  <h3 className="rule-left font-display text-lg font-medium text-filament md:text-xl">
                    {s.name}
                  </h3>
                  <span className="label-data mt-auto flex items-center gap-2 pt-8 text-graphite transition-colors group-hover:text-signal">
                    {t.seriesPage.view}
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
      )}

      {related.length > 0 && (
        <Section className="py-20 md:py-28">
          <Eyebrow>{t.platform.installsEyebrow}</Eyebrow>
          <Display as="h2" size="md" className="mt-6">
            {platform.name} {t.seriesPage.installsSuffix}
          </Display>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {related.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}

      <CtaBlock
        heading={`${t.seriesPage.specifyPrefix} ${item.name}`}
        body={t.seriesPage.ctaBody}
        quoteHref={`/contact-us?platform=${item.platform}`}
      />
      <SiteFooter />
    </>
  );
}

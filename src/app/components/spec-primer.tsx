"use client";

import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { CountUp } from "@/components/site/count-up";
import { Cta, Display, Eyebrow, Lede, Section } from "@/components/site/primitives";
import { LedWall } from "@/components/site/led-wall";

/**
 * A spec sheet is not marketing material — it is a set of promises. So this
 * section is an actual comparison matrix rather than four cards of prose:
 * the metric, what it really means in one line, and where each discipline
 * lands on it. It is the page a buyer would otherwise have to build in a
 * spreadsheet from four PDFs.
 *
 * The figures are keyed by slug so the columns follow the service order in
 * whichever language is active.
 */
const values: Record<string, Record<string, string>> = {
  en: {
    "pitch:professional": "0.6 – 1.5",
    "pitch:commercial": "1.8 – 3.0",
    "pitch:rental": "2.6 – 4.8",
    "pitch:dooh": "4 – 10",
    "bright:professional": "600 – 1,200",
    "bright:commercial": "800 – 5,000",
    "bright:rental": "1,000 – 1,500",
    "bright:dooh": "10,000",
    "refresh:professional": "3,840 – 7,680",
    "refresh:commercial": "3,840",
    "refresh:rental": "3,840",
    "refresh:dooh": "1,920 – 3,840",
    "ip:professional": "IP20",
    "ip:commercial": "IP30",
    "ip:rental": "IP43 / IP31",
    "ip:dooh": "IP65",
  },
  pt: {
    "pitch:professional": "0,6 – 1,5",
    "pitch:commercial": "1,8 – 3,0",
    "pitch:rental": "2,6 – 4,8",
    "pitch:dooh": "4 – 10",
    "bright:professional": "600 – 1 200",
    "bright:commercial": "800 – 5 000",
    "bright:rental": "1 000 – 1 500",
    "bright:dooh": "10 000",
    "refresh:professional": "3 840 – 7 680",
    "refresh:commercial": "3 840",
    "refresh:rental": "3 840",
    "refresh:dooh": "1 920 – 3 840",
    "ip:professional": "IP20",
    "ip:commercial": "IP30",
    "ip:rental": "IP43 / IP31",
    "ip:dooh": "IP65",
  },
};

const rowKeys = ["pitch", "bright", "refresh", "ip"] as const;

/**
 * Ingress ratings sit still while the other three count.
 *
 * IP65 is a classification, not a measurement — counting it from zero would
 * imply a quantity that does not exist, and briefly display IP07 and IP41 as
 * if they meant something. The site draws that line everywhere else too:
 * things that are measured are set in mono and behave like numbers, things
 * that are classified do not.
 */
const COUNTABLE: Record<string, boolean> = {
  pitch: true,
  bright: true,
  refresh: true,
  ip: false,
};

export function SpecPrimer() {
  const { t, services, locale } = useT();
  const table = values[locale];

  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{t.specPrimer.eyebrow}</Eyebrow>
          <Display as="h2" size="lg" delay={0.08} className="mt-6">
            {t.specPrimer.heading}
          </Display>
          <Lede delay={0.16} className="mt-6 max-w-xl">
            {t.specPrimer.body}
          </Lede>
        </div>
        <Cta href="/products" variant="ghost" className="shrink-0">
          {t.common.fullSpecifications}
        </Cta>
      </div>

      {/* The first of the four numbers, shown rather than described.
          Everything above this says pixel pitch decides how close a viewer can
          stand before the grid shows; the wall lets someone drag between P0.9
          and P10 and watch that happen on a real photograph. It sits ahead of
          the table because the table assumes you already know what the figure
          in its first row means. */}
      <figure className="mt-14">
        <LedWall
          src="/img/hero-facade.jpg"
          className="aspect-[21/9] w-full border border-seam"
        />
        <figcaption className="label-data mt-4 flex items-center gap-2.5 text-graphite-dim">
          <span aria-hidden className="inline-block size-1.5 bg-signal" />
          {t.specPrimer.wallHint}
        </figcaption>
      </figure>

      {/* The matrix scrolls on narrow screens rather than reflowing into four
          disconnected cards, because the comparison is the whole point. */}
      <div className="-mx-6 mt-14 overflow-x-auto px-6 md:mx-0 md:px-0">
        <table className="row-focus w-full min-w-[60rem] border-collapse text-left">
          <caption className="sr-only">{t.specPrimer.caption}</caption>
          <thead>
            <tr className="border-b border-seam-bright">
              <th
                scope="col"
                className="w-[32%] pb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-graphite-dim"
              >
                {t.common.metric}
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
            {t.specPrimer.metrics.map((metric, index) => (
              <tr key={metric.name} className="border-b border-seam">
                {/* The metric and its definition run long, so the label column
                    stays top-aligned while the figures centre against it —
                    otherwise the numbers float at the top of a tall empty row. */}
                <th
                  scope="row"
                  className="py-8 pr-8 text-left align-top font-normal"
                >
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-display text-xl font-medium text-filament md:text-2xl">
                      {metric.name}
                    </span>
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-signal">
                      {metric.unit}
                    </span>
                  </span>
                  <span className="mt-3.5 block max-w-md text-base text-graphite">
                    {metric.meaning}
                  </span>
                </th>
                {services.map((service, column) => {
                  const key = rowKeys[index];
                  const figure = table[`${key}:${service.slug}`];
                  return (
                    <td
                      key={service.slug}
                      className="tabular py-8 pl-6 align-middle text-base text-filament md:text-lg"
                    >
                      {COUNTABLE[key] ? (
                        <CountUp
                          value={figure}
                          /* Settles left to right, like a readout scanning
                             across the row rather than four figures landing
                             on the same frame. */
                          delay={column * 90}
                        />
                      ) : (
                        figure
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

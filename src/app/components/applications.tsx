"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useT, type Service } from "@/lib/i18n";
import { revealClass, useInView } from "@/components/site/reveal";
import { Display, Eyebrow, Lede, Section } from "@/components/site/primitives";

/**
 * The card carries the reveal itself rather than sitting inside a wrapper,
 * because it is the grid cell — wrapping it would put an unstyled div between
 * the seam grid and the panel and break the hairline gaps.
 */
function ApplicationCard({
  service,
  index,
  cta,
}: {
  service: Service;
  index: number;
  cta: string;
}) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      href={service.href}
      style={inView ? { animationDelay: `${index * 0.09}s` } : undefined}
      className={cn(
        revealClass(inView),
        "group relative flex flex-col bg-cabinet panel-lift transition-colors duration-300 hover:bg-cabinet-raised",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {/* Scrims sit on photographs, so they stay dark in both themes. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-9">
        <p className="label-data text-signal">{service.eyebrow}</p>
        <h3 className="rule-left mt-4 font-display text-2xl font-medium text-filament md:text-3xl">
          {service.name}
        </h3>
        <p className="mt-2 font-display text-md text-graphite">
          {service.tagline}
        </p>

        <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-seam pt-5">
          {service.heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="label-data text-graphite-dim">{stat.label}</dt>
              <dd className="tabular mt-1.5 text-base text-filament">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <span className="label-data mt-8 flex items-center gap-2 text-filament transition-colors group-hover:text-signal">
          {cta}
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * Four disciplines, four routes. Each card carries the one number that
 * separates it from the other three — a church needs 0 dB, a billboard needs
 * 10,000 nits — rather than a generic feature line.
 */
export function Applications() {
  const { t, services } = useT();

  return (
    <Section className="py-20 md:py-28">
      <div className="max-w-3xl">
        <Eyebrow>{t.applications.eyebrow}</Eyebrow>
        <Display as="h2" size="lg" delay={0.08} className="mt-6">
          {t.applications.heading}
        </Display>
        <Lede delay={0.16} className="mt-6 max-w-xl">
          {t.applications.body}
        </Lede>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2">
        {services.map((service, index) => (
          <ApplicationCard
            key={service.slug}
            service={service}
            index={index}
            cta={t.common.specifications}
          />
        ))}
      </div>
    </Section>
  );
}

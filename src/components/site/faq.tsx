"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import { revealClass, useInView } from "@/components/site/reveal";
import { Body, Cta, Display, Eyebrow, Section } from "@/components/site/primitives";

export type FaqItem = { q: string; a: string };

/** The row owns its reveal so the list cascades top to bottom as it arrives. */
function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const { ref, inView } = useInView<HTMLDetailsElement>();

  return (
    <details
      ref={ref}
      style={inView ? { animationDelay: `${index * 0.06}s` } : undefined}
      className={cn(revealClass(inView), "group border-b border-seam")}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
        <span className="font-display text-lg font-medium text-filament transition-colors group-hover:text-signal md:text-xl">
          {item.q}
        </span>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-signal transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="max-w-2xl pb-7 text-base text-graphite">{item.a}</p>
    </details>
  );
}

/**
 * Native <details> rather than a JS accordion: it is keyboard accessible and
 * open-by-URL-fragment for free, and it works before hydration.
 */
export function Faq({
  items,
  eyebrow,
  heading,
  intro,
}: {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
}) {
  const { t } = useT();

  return (
    <Section className="py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>{eyebrow ?? t.faq.eyebrow}</Eyebrow>
          <Display as="h2" size="md" delay={0.08} className="mt-6">
            {heading ?? t.faq.heading}
          </Display>
          <Body delay={0.16} className="mt-5 max-w-sm">
            {intro ?? t.faq.intro}
          </Body>
          <Cta href="/contact-us" variant="outline" className="mt-8">
            {t.common.askEngineer}
          </Cta>
        </div>

        <div className="border-t border-seam">
          {items.map((item, index) => (
            <FaqRow key={item.q} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

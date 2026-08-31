"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import { Display, Section } from "@/components/site/primitives";

export function FaqContent() {
  const { t, faqs } = useT();

  // Indexed ids rather than slugified topics: the Portuguese headings carry
  // accents, which a latin-only slugifier would flatten into collisions.
  const groupId = (index: number) => `topic-${index}`;

  return (
    <>
      <PageHeader
        eyebrow={t.faqPage.eyebrow}
        title={t.faqPage.title}
        lede={t.faqPage.lede}
      />

      {/* Top padding is load-bearing: the section draws its seam on its own
          top edge, and with bottom-only padding that hairline lands exactly on
          the first element inside — cutting through the label's glyphs, which
          have no leading to absorb it at `line-height: 1`. */}
      <Section className="pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          {/* Jump list. Real navigation, since the page is long. */}
          <nav
            aria-label={t.faq.topics}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="label-data text-graphite-dim">{t.faq.topics}</p>
            <ul className="mt-6 border-t border-seam">
              {faqs.groups.map((group, index) => (
                <li key={group.topic} className="border-b border-seam">
                  <a
                    href={`#${groupId(index)}`}
                    className="flex items-baseline justify-between gap-4 py-3.5 text-sm text-graphite transition-colors hover:text-signal"
                  >
                    {group.topic}
                    <span className="tabular text-xs text-graphite-dim">
                      {group.items.length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-20">
            {faqs.groups.map((group, index) => (
              <section
                key={group.topic}
                id={groupId(index)}
                className="scroll-mt-32"
              >
                <Display as="h2" size="sm" className="text-signal">
                  {group.topic}
                </Display>
                <div className="mt-7 border-t border-seam">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group border-b border-seam"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                        <span className="font-display text-lg font-medium text-filament transition-colors group-hover:text-signal">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="mt-1 shrink-0 text-signal transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="max-w-2xl pb-6 text-base text-graphite">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <CtaBlock heading={t.faqPage.ctaHeading} body={t.faqPage.ctaBody} />
    </>
  );
}

"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { company } from "@/lib/i18n/navigation";
import { PageHeader } from "@/components/site/page-header";
import { Faq } from "@/components/site/faq";
import { StepList } from "@/components/site/step-list";
import {
  Cabinet,
  Display,
  Eyebrow,
  Section,
} from "@/components/site/primitives";
import { LeadCaptureForm } from "@/components/contact/lead-capture-form";

export function ContactContent() {
  const { t, faqs } = useT();

  // The contact routes are copy, but the addresses they point at are facts —
  // so the hrefs are attached here rather than duplicated in the dictionary.
  const actions = [
    null,
    { href: company.phoneHref, text: company.phone },
    { href: `mailto:${company.email}`, text: company.email },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        lede={t.contactPage.lede}
      />

      {/* Top padding is load-bearing: the section draws its seam on its own
          top edge, and with bottom-only padding that hairline lands exactly on
          the first element inside — cutting through the label's glyphs, which
          have no leading to absorb it at `line-height: 1`. */}
      <Section className="pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <Cabinet className="p-6 md:p-10">
            {/* The form reads ?platform= to preselect the project type, which
                needs a boundary here to keep this page statically rendered. */}
            <React.Suspense
              fallback={
                <p className="label-data text-graphite-dim">
                  {t.contactPage.loadingForm}
                </p>
              }
            >
              <LeadCaptureForm />
            </React.Suspense>
          </Cabinet>

          <div className="space-y-10">
            <div>
              <Eyebrow>{t.contactPage.reachEyebrow}</Eyebrow>
              <a
                href={company.phoneHref}
                className="tabular mt-6 block font-display text-3xl font-medium text-filament transition-colors hover:text-signal"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 block text-base text-graphite transition-colors hover:text-filament"
              >
                {company.email}
              </a>
            </div>

            <div className="border-t border-seam pt-8">
              <p className="label-data text-graphite-dim">
                {t.contactPage.officeLabel}
              </p>
              <p className="mt-3 text-base text-graphite">{company.address}</p>
              <p className="mt-4 text-sm text-graphite-dim">
                {t.contactPage.hours}
              </p>
            </div>

            <div className="border-t border-seam pt-8">
              <p className="label-data text-graphite-dim">
                {t.contactPage.whereEyebrow}
              </p>
              <dl className="mt-6 space-y-7">
                {t.contactPage.routes.map((route, index) => {
                  const action = actions[index];
                  return (
                    <div key={route.label}>
                      <dt className="text-sm font-medium text-filament">
                        {route.label}
                      </dt>
                      <dd className="mt-1.5 text-sm text-graphite">
                        {route.body}
                        {action && (
                          <>
                            {" "}
                            <a
                              href={action.href}
                              className="tabular text-signal transition-colors hover:text-filament"
                            >
                              {action.text}
                            </a>
                          </>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-cabinet py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>{t.contactPage.nextEyebrow}</Eyebrow>
            <Display as="h2" size="md" className="mt-6">
              {t.contactPage.nextHeading}
            </Display>
          </div>
          <StepList steps={t.contactPage.steps} />
        </div>
      </Section>

      <Faq
        items={faqs.contact}
        eyebrow={t.contactPage.faqEyebrow}
        heading={t.contactPage.faqHeading}
      />
    </>
  );
}

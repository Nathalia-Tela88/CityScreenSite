"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { PageHeader } from "@/components/site/page-header";
import { CtaBlock } from "@/components/site/cta-block";
import { Section } from "@/components/site/primitives";

import { GalleryFilter } from "./gallery-filter";

/**
 * The page body lives in a client component because the language switch is
 * client-side; `page.tsx` stays a server component so it can still export
 * metadata.
 */
export function GalleryContent() {
  const { t } = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.galleryPage.eyebrow}
        title={t.galleryPage.title}
        lede={t.galleryPage.lede}
        image="/img/hero-facade-src.jpg"
      />

      <Section className="py-16 md:py-20">
        <GalleryFilter />
      </Section>

      <CtaBlock
        heading={t.galleryPage.ctaHeading}
        body={t.galleryPage.ctaBody}
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as React from "react";

import { series, seriesBySlug } from "@/lib/series";
import { serviceBySlug } from "@/lib/services";
import { SeriesPage } from "@/components/site/series-page";
import { PageTransition } from "@/components/site/page-transition";

/** All twelve series are known at build time, so all twelve prerender. */
export function generateStaticParams() {
  return series.map((s) => ({ series: s.slug }));
}

/** Nothing outside that list is a real product, so anything else 404s. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string }>;
}): Promise<Metadata> {
  const { series: slug } = await params;
  const item = seriesBySlug[slug];
  if (!item) return {};

  const platform = serviceBySlug[item.platform];
  return {
    title: item.name,
    description:
      item.summary ??
      `${item.name}, a series in the CityScreen ${platform.name} platform. ${platform.tagline} Datasheet on request.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const { series: slug } = await params;
  const item = seriesBySlug[slug];
  if (!item) notFound();

  return (
    <PageTransition>
      <SeriesPage item={item} />
    </PageTransition>
  );
}

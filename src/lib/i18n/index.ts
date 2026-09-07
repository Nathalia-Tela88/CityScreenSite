"use client";

import { useLocale } from "@/components/site/preferences";
import { dictionaries, type Dict } from "@/lib/i18n/ui";
import { servicesByLocale, type Service } from "@/lib/i18n/services";
import { faqsByLocale, type FaqBundle } from "@/lib/i18n/faqs";
import { projectsByLocale, type Project } from "@/lib/i18n/projects";
import { seriesCopyByLocale, type SeriesCopy } from "@/lib/i18n/series";
import { frameCopyByLocale, type FrameCopy } from "@/lib/i18n/frames";

/**
 * One hook for everything localised.
 *
 * The switch is client-side and does not change the URL, so any component that
 * renders words has to be a client component and read from here. The trade-off
 * was chosen deliberately: instant switching with no reload, at the cost of
 * search engines only ever seeing the English build.
 */
export function useT(): {
  locale: "en" | "pt";
  t: Dict;
  services: Service[];
  serviceBySlug: Record<Service["slug"], Service>;
  faqs: FaqBundle;
  projects: Project[];
  /** Series datasheets and copy, keyed by series slug. */
  seriesCopy: Record<string, SeriesCopy>;
  /** Presentation-frame captions, keyed by series slug and then frame order. */
  frameCopy: Record<string, FrameCopy[]>;
} {
  const { locale } = useLocale();

  const services = servicesByLocale[locale];
  return {
    locale,
    t: dictionaries[locale],
    services,
    serviceBySlug: Object.fromEntries(
      services.map((s) => [s.slug, s]),
    ) as Record<Service["slug"], Service>,
    faqs: faqsByLocale[locale],
    projects: projectsByLocale[locale],
    seriesCopy: seriesCopyByLocale[locale],
    frameCopy: frameCopyByLocale[locale],
  };
}

export type { Dict, Service, Project, FaqBundle, SeriesCopy, FrameCopy };

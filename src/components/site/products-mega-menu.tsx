"use client";

import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { series } from "@/lib/series";

/**
 * The products mega menu.
 *
 * A column per platform, each listing the series that actually belong to it —
 * read from `lib/series.ts`, so a series added there appears here without
 * anyone editing the navigation. The old dropdown listed the four platform
 * pages and stopped; the twelve series underneath them were reachable only by
 * landing on a platform page first.
 *
 * Deliberately typographic rather than the tiled product shots the pattern is
 * usually built from. Every series currently has zero photography (see
 * `public/img/SERIES-IMAGES.md`), and a grid of identical placeholder tiles
 * would say less than the names do while taking four times the height.
 */
export function ProductsMegaMenu({
  open,
  onRequestClose,
  onKeepOpen,
  labelledBy,
}: {
  open: boolean;
  onRequestClose: () => void;
  onKeepOpen: () => void;
  labelledBy: string;
}) {
  const { t, services } = useT();

  // Grouped once per render rather than filtered inside the column loop, which
  // would walk all twelve series four times over.
  const byPlatform = React.useMemo(() => {
    const map = new Map<string, typeof series>();
    for (const model of series) {
      const list = map.get(model.platform) ?? [];
      list.push(model);
      map.set(model.platform, list);
    }
    return map;
  }, []);

  if (!open) return null;

  return (
    <div
      // Hovering the panel has to count as hovering the menu, or the gap
      // between the trigger and the panel closes it the moment the pointer
      // crosses it.
      onMouseEnter={onKeepOpen}
      onMouseLeave={onRequestClose}
      aria-labelledby={labelledBy}
      // Opaque, not translucent. At 95% the hero headline behind it showed
      // through the lower half of the panel and tangled with the links; a menu
      // is a surface you read, not a scrim.
      className="absolute inset-x-0 top-full border-b border-t border-seam bg-obsidian"
    >
      <div className="mx-auto max-w-[1560px] px-6 py-8 md:px-10">
        <div className="grid grid-cols-2 gap-px border border-seam bg-seam lg:grid-cols-4">
          {services.map((service) => {
            const models = byPlatform.get(service.slug) ?? [];
            return (
              <div key={service.slug} className="bg-obsidian p-6">
                <Link
                  href={service.href}
                  transitionTypes={["nav-forward"]}
                  onClick={onRequestClose}
                  className="group block"
                >
                  <p className="label-data text-signal">{service.eyebrow}</p>
                  <p className="rule-left mt-2.5 font-display text-lg font-medium text-filament">
                    {service.name}
                  </p>
                </Link>
                <p className="mt-2 text-sm text-graphite-dim">
                  {service.tagline}
                </p>

                <ul className="mt-5 space-y-px border-t border-seam pt-4">
                  {models.map((model) => (
                    <li key={model.slug}>
                      <Link
                        href={`/products/${model.slug}`}
                        transitionTypes={["nav-forward"]}
                        onClick={onRequestClose}
                        className="group flex items-center justify-between gap-3 py-1.5 text-sm text-graphite transition-colors hover:text-filament"
                      >
                        <span className="rule-left">{model.name}</span>
                        <span
                          aria-hidden
                          className="shrink-0 text-graphite-dim transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-signal"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Link
          href="/products"
          transitionTypes={["nav-forward"]}
          onClick={onRequestClose}
          className="label-data press mt-5 inline-flex items-center gap-2.5 text-filament hover:text-signal"
        >
          {t.nav.allProducts}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

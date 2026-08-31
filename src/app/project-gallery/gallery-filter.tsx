"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import { ProjectCard } from "@/components/site/project-grid";

/** Filtering is keyed on the stable slug, not the visible label, so a language
    switch never resets or breaks the active filter. */
const KEYS = ["all", "professional", "commercial", "rental", "dooh"] as const;

/**
 * How wide a project wants to be, read off the ratio it was shot at.
 *
 * A facade that runs the length of a city block loses its whole subject when
 * squeezed into a half column, so anything panoramic claims the full row and
 * everything else pairs up. Parsed rather than string-matched against
 * `aspect-[21/9]` so a project added at 16:9 or 3:2 still lands somewhere
 * sensible without anyone editing this.
 */
function isPanoramic(aspect: string) {
  const ratio = aspect.match(/(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/);
  if (!ratio) return false;
  return Number(ratio[1]) / Number(ratio[2]) >= 2;
}

export function GalleryFilter() {
  const { t, projects, services } = useT();
  const [active, setActive] = React.useState<string>("all");

  const labelFor = (key: string) =>
    key === "all"
      ? t.common.allProjects
      : (services.find((s) => s.slug === key)?.name ?? key);

  const shown =
    active === "all"
      ? projects
      : projects.filter((p) => p.disciplineKey === active);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div>
      {/* The bar and the readout share one line and one rule beneath them, so
          the controls read as the header of the index rather than as a slab of
          buttons sitting above unrelated content. */}
      <div className="flex flex-col gap-6 border-b border-seam pb-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div
          role="group"
          aria-label={t.nav.projectGallery}
          className="flex flex-wrap gap-px border border-seam bg-seam"
        >
          {KEYS.map((key) => {
            const count =
              key === "all"
                ? projects.length
                : projects.filter((p) => p.disciplineKey === key).length;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active === key}
                onClick={() => setActive(key)}
                // Sized by their labels rather than stretched with `flex-1`:
                // five equal segments spanning the full width read as a
                // navigation bar, which is not what this is.
                //
                // No `transition-colors` alongside `press` — it sets its own
                // transition-property and would silently drop the transform.
                className={cn(
                  "label-data press flex items-center gap-2 px-5 py-3.5",
                  active === key
                    ? "bg-signal text-obsidian"
                    : "bg-cabinet text-graphite hover:bg-cabinet-raised hover:text-filament",
                )}
              >
                {labelFor(key)}
                <span className="tabular opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* The readout doubles as the live region. A visible count that also
            announces beats an sr-only duplicate of the same two numbers. */}
        <p
          aria-live="polite"
          className="label-data flex shrink-0 items-baseline gap-2.5 text-graphite-dim"
        >
          <span className="tabular text-xl text-filament">
            {pad(shown.length)}
          </span>
          <span aria-hidden className="text-seam-bright">
            /
          </span>
          <span className="tabular">{pad(projects.length)}</span>
          <span>{t.galleryPage.countLabel}</span>
        </p>
      </div>

      {/* Panoramic projects take the whole row, the rest pair up. With six
          projects that gives a wide / pair / wide / pair rhythm instead of six
          identical tiles, and the ragged rows a uniform two-column grid
          produced out of mismatched aspect ratios go away. */}
      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
        {shown.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i + 1}
            priority={i === 0}
            className={cn(isPanoramic(project.aspect) && "md:col-span-2")}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useT, type Project } from "@/lib/i18n";
import { revealClass, useInView } from "@/components/site/reveal";
import { Cta, Display, Eyebrow, Lede, Section } from "@/components/site/primitives";

/**
 * Projects are shown at the size their aspect ratio deserves rather than
 * forced into equal tiles — a facade that wraps a city block should not be
 * cropped to the same square as a boardroom wall.
 *
 * The text block below the photograph reads its own width rather than being
 * told it: `@container` here plus `@4xl:` below means a card given the full
 * row splits its meta and its summary into two columns, while the same
 * component in a half column stacks them. One card, no layout prop, and the
 * page can rearrange itself without anything being passed down about it.
 */
export function ProjectCard({
  project,
  className,
  priority = false,
  index,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  /** Position in a numbered index. Omitted outside the gallery. */
  index?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={cn(revealClass(inView), "group @container", className)}
    >
      <div className={cn("relative overflow-hidden bg-cabinet", project.aspect)}>
        <Image
          src={project.image}
          alt={`${project.title}, ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        {/* Scrims sit on photographs, so they stay dark in both themes. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="label-data absolute left-4 top-4 border border-white/25 bg-black/70 px-2.5 py-1.5 text-white backdrop-blur-sm">
          {project.discipline}
        </span>

        {/* Tag overlay. The as-built numbers are what a buyer actually wants
            off a project photograph, so hovering the image surfaces them
            without making them scroll to the spec list underneath.

            On a touch device `reveal-layer` resolves to permanently visible —
            there is no hover to wait for, and content that can only be reached
            by a gesture the device cannot make is simply content that is
            missing. It costs a little redundancy against the list below, which
            is the right trade. */}
        <div className="reveal-layer absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4 md:p-5">
          {project.specs.slice(0, 3).map((spec) => (
            <span
              key={spec.label}
              className="label-data flex items-baseline gap-2 border border-white/20 bg-black/70 px-2.5 py-1.5 text-white/70 backdrop-blur-sm"
            >
              {spec.label}
              <span className="tabular text-white">{spec.value}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-x-12 gap-y-4 @4xl:grid-cols-[1fr_1.05fr] @4xl:items-start">
        <div>
          <div className="flex items-baseline gap-4">
            {index !== undefined && (
              <span
                aria-hidden
                className="tabular shrink-0 font-display text-xl font-medium text-seam-bright transition-colors duration-300 group-hover:text-signal md:text-2xl"
              >
                {String(index).padStart(2, "0")}
              </span>
            )}
            <h3 className="font-display text-xl font-medium text-filament md:text-2xl">
              {project.title}
            </h3>
          </div>
          {/* Place and year on one line. They are read together — "Toronto,
              2025" — and splitting them across two rows spent a line of the
              card on half a fact. */}
          <p className="label-data mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-graphite-dim">
            {project.location}
            <span aria-hidden className="inline-block size-1 bg-seam-bright" />
            <span className="tabular">{project.year}</span>
          </p>
        </div>
        <p className="max-w-xl text-base text-graphite">{project.summary}</p>
      </div>

      {/* One baseline, not a row of stacked pairs. At three or four specs the
          stacked version was two lines tall and read as a second heading
          block; on one line it reads as the instrument strip it is. */}
      <dl className="mt-6 flex flex-wrap items-baseline gap-x-7 gap-y-2 border-t border-seam pt-4">
        {project.specs.map((spec) => (
          <div key={spec.label} className="flex items-baseline gap-2">
            <dt className="label-data text-graphite-dim">{spec.label}</dt>
            <dd className="tabular text-base text-filament">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function ProjectGrid({
  count = 3,
  heading,
  eyebrow,
  intro,
  showCta = true,
}: {
  /** How many of the localised projects to show. */
  count?: number;
  heading?: string;
  eyebrow?: string;
  intro?: string;
  showCta?: boolean;
}) {
  const { t, projects } = useT();
  const shown = projects.slice(0, count);
  const [lead, ...rest] = shown;

  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow ?? t.projects.eyebrow}</Eyebrow>
          <Display as="h2" size="lg" delay={0.08} className="mt-6">
            {heading ?? t.projects.heading}
          </Display>
          <Lede delay={0.16} className="mt-6 max-w-xl">
            {intro ?? t.projects.intro}
          </Lede>
        </div>
        {showCta && (
          <Cta href="/project-gallery" variant="ghost" className="shrink-0">
            {t.common.allProjects}
          </Cta>
        )}
      </div>

      <div className="mt-14 space-y-16">
        {lead && <ProjectCard project={lead} priority />}
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

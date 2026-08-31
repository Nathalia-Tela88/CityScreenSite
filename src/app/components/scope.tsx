"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/site/reveal";
import { StageGlyph } from "@/components/site/stage-glyph";
import { Display, Eyebrow, Lede, Section } from "@/components/site/primitives";

/**
 * This is the one place on the site where numbered markers are honest: the
 * stages genuinely run in order, and the order is the argument — a competitor
 * who only sells panels drops out after stage three.
 */
export function Scope() {
  const { t } = useT();

  return (
    <Section className="bg-cabinet-raised py-20 md:py-28">
      <div className="max-w-3xl">
        <Eyebrow>{t.scope.eyebrow}</Eyebrow>
        <Display as="h2" size="lg" delay={0.08} className="mt-6">
          {t.scope.heading}
        </Display>
        <Lede delay={0.16} className="mt-6 max-w-xl">
          {t.scope.body}
        </Lede>
      </div>

      <ol className="mt-16 grid grid-cols-1 gap-px border border-seam bg-seam md:grid-cols-2 lg:grid-cols-3">
        {t.scope.stages.map((stage, index) => (
          <Reveal
            as="li"
            key={stage.title}
            delay={index * 0.07}
            className="group relative flex flex-col bg-cabinet panel-lift p-7 md:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="tabular font-display text-4xl font-medium text-seam-bright transition-colors duration-300 group-hover:text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* The glyph draws itself the first time the card is seen. It
                  restates the stage rather than decorating it — the survey
                  tripod, the stamped frame, the response arc. */}
              <StageGlyph index={index} className="mt-1 shrink-0" />
            </div>
            <h3 className="mt-6 font-display text-xl font-medium text-filament">
              {stage.title}
            </h3>
            <p className="mt-3 text-base text-graphite">{stage.body}</p>
            <p className="mt-auto flex items-baseline gap-3 border-t border-seam pt-4">
              <span className="label-data text-graphite-dim">
                {t.common.delivers}
              </span>
              <span className="text-sm text-filament">{stage.produces}</span>
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

"use client";

import * as React from "react";

import { useT } from "@/lib/i18n";
import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";
import { CtaBlock } from "@/components/site/cta-block";
import { Faq } from "@/components/site/faq";
import { ProjectGrid } from "@/components/site/project-grid";

import { Hero } from "./components/hero";
import { Applications } from "./components/applications";
import { SpecPrimer } from "./components/spec-primer";
import { Scope } from "./components/scope";

export default function Page() {
  const { faqs } = useT();

  return (
    <>
      <SiteHeader />
      <PageTransition>
      <Hero />
      <Applications />
      <SpecPrimer />
      <Scope />
      <ProjectGrid count={3} />
      <Faq items={faqs.home} />
      <CtaBlock />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

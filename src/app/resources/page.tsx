import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { ResourcesContent } from "./resources-content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Technical guides from CityScreen engineers — pixel pitch and viewing distance, nits and outdoor brightness, IP ratings, power loads and permit timelines in Ontario.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <ResourcesContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

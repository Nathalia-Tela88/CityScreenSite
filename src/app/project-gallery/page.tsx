import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { GalleryContent } from "./gallery-content";

export const metadata: Metadata = {
  title: "Project gallery",
  description:
    "LED installations delivered across Ontario: media facades, control rooms, transparent shopfronts, festival stages and roadside billboard networks.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <GalleryContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

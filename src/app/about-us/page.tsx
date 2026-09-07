import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "CityScreen keeps structural engineering, fabrication, installation and commissioning in-house. Twelve years and 400 installs across Portugal.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <AboutContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

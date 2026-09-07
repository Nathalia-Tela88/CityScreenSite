import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { WarrantyContent } from "./warranty-content";

export const metadata: Metadata = {
  title: "Warranty & service",
  description:
    "Five-year parts and labour warranty, spares held in Setúbal, four-hour average response and a full report after every service visit.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <WarrantyContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

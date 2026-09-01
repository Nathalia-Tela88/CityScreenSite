import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { FaqContent } from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Permits, timelines, content software, warranty, financing and engineering: the questions CityScreen engineers answer on every Ontario site survey.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <FaqContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { ProductsContent } from "./products-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Four LED platforms from P0.9 mm fine-pitch to P10 mm outdoor. Full published specifications for professional, commercial, rental and DOOH installations.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <ProductsContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

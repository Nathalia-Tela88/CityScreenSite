import type { Metadata } from "next";
import * as React from "react";

import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";

import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Send CityScreen the site address and the application. You get a stamped proposal with a fixed price and a delivery date inside five business days.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PageTransition>
      <ContactContent />
      </PageTransition>
      <SiteFooter />
    </>
  );
}

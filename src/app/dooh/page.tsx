import type { Metadata } from "next";

import { ServicePage } from "@/components/site/service-page";
import { PageTransition } from "@/components/site/page-transition";

export const metadata: Metadata = {
  title: "DOOH Billboards",
  description:
    "Outdoor media surfaces at 10,000 nits, sealed to IP65 and rated from −30 °C to +60 °C. Specified as revenue assets with programmatic play-out logs.",
};

export default function Page() {
  return (
    <PageTransition>
      <ServicePage slug="dooh" />
    </PageTransition>
  );
}

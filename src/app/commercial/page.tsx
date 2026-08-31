import type { Metadata } from "next";

import { ServicePage } from "@/components/site/service-page";
import { PageTransition } from "@/components/site/page-transition";

export const metadata: Metadata = {
  title: "Commercial LED",
  description:
    "Shopfront walls, window-facing displays and transparent glass LED up to 85% see-through, designed to sit inside a shopfit programme.",
};

export default function Page() {
  return (
    <PageTransition>
      <ServicePage slug="commercial" />
    </PageTransition>
  );
}

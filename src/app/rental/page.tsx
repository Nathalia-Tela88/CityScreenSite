import type { Metadata } from "next";

import { ServicePage } from "@/components/site/service-page";
import { PageTransition } from "@/components/site/page-transition";

export const metadata: Metadata = {
  title: "Rental LED",
  description:
    "Quick-lock rental LED cabinets that fly straight, land flat and strike in minutes. Curve-ready frames, tool-free latches and redundant data paths.",
};

export default function Page() {
  return (
    <PageTransition>
      <ServicePage slug="rental" />
    </PageTransition>
  );
}

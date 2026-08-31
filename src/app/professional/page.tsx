import type { Metadata } from "next";

import { ServicePage } from "@/components/site/service-page";
import { PageTransition } from "@/components/site/page-transition";

export const metadata: Metadata = {
  title: "Professional Visualisation",
  description:
    "Fine-pitch LED from 0.9 mm for control rooms and boardrooms. Flip-chip COB and GOB surfaces, front-serviced, rated for continuous duty.",
};

export default function Page() {
  return (
    <PageTransition>
      <ServicePage slug="professional" />
    </PageTransition>
  );
}

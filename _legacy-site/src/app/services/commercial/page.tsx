import type { Metadata } from "next";
import { ServicePage } from "@/components/services/service-page";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug.commercial;

export const metadata: Metadata = {
  title: service.name,
  description: service.summary,
};

export default function CommercialPage() {
  return <ServicePage service={service} />;
}

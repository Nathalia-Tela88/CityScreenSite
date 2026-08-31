import type { Metadata } from "next";
import { ServicePage } from "@/components/services/service-page";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug.dooh;

export const metadata: Metadata = {
  title: service.name,
  description: service.summary,
};

export default function DoohPage() {
  return <ServicePage service={service} />;
}

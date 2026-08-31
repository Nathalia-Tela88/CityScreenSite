import { ServiceTabs } from "@/components/services/service-tabs";

export default function ServicesLayout({ children }: LayoutProps<"/services">) {
  return (
    <div className="relative bg-obsidian">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,34,51,0.10),transparent_65%)]"
      />
      <ServiceTabs />
      <div className="relative">{children}</div>
    </div>
  );
}

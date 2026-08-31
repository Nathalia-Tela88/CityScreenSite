import Link from "next/link";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-signal/10 bg-obsidian">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-6 items-center justify-center">
              <span className="absolute inset-0 rounded-sm border border-signal/40" />
              <span className="size-1.5 rounded-[1px] bg-signal shadow-[0_0_12px_#ff2233]" />
            </span>
            <span className="font-heading text-sm font-semibold tracking-[0.2em] uppercase">
              City<span className="text-signal">Screen</span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            LED environments engineered as architecture. We specify, install and
            commission display systems that turn passive surfaces into
            revenue-generating digital assets.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
            Capabilities
          </h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
            Engage
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Request a consultation
              </Link>
            </li>
            <li className="text-sm text-muted-foreground">
              Technical pre-sales &amp; site survey
            </li>
            <li className="text-sm text-muted-foreground">
              Commissioning &amp; handover
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-signal/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CityScreen. All rights reserved.</p>
          <p className="font-mono tracking-[0.14em] uppercase">
            Transforming light into architecture
          </p>
        </div>
      </div>
    </footer>
  );
}

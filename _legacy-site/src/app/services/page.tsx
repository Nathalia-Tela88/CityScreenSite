import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Rental, DOOH, commercial and professional LED platforms — engineered, specified and commissioned by CityScreen.",
};

export default function ServicesIndexPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-20 pb-28 lg:pt-28">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
          Capabilities
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-5xl leading-[1.04] font-semibold tracking-tight text-balance sm:text-6xl">
          Four platforms, specified to environment.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Pick the discipline that matches the site. Each page carries the full
          technical specification, the deployment contexts and the engineering
          position behind the platform.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-signal/12 bg-signal/12 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.06}>
            <Link
              href={service.href}
              className="group relative block h-full bg-obsidian p-8 transition-colors hover:bg-obsidian-raised lg:p-10"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-signal uppercase">
                    {service.eyebrow}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
                  {service.name}
                </h2>
                <p className="mt-1.5 text-sm text-signal/80">
                  {service.tagline}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

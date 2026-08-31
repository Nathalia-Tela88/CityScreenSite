import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Led3DPresentation } from "@/components/Led3DPresentation";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";

const process = [
  {
    step: "01",
    title: "Survey & feasibility",
    body: "Structural loading, sightline modelling, ambient lux readings and a viewing-distance study that sets the pitch before anything is quoted.",
  },
  {
    step: "02",
    title: "System design",
    body: "Cabinet layout, processing topology, power distribution and redundancy strategy issued as a coordinated technical package.",
  },
  {
    step: "03",
    title: "Install & commission",
    body: "Rigging, calibration, colour matching and CMS integration — handed over with a measured brightness and uniformity report.",
  },
  {
    step: "04",
    title: "Operate & monetise",
    body: "Play-out monitoring, yield reporting and a maintenance SLA that keeps the surface earning through its full service life.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Led3DPresentation />

      <section className="relative border-t border-signal/10 bg-obsidian py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
              Capabilities
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Four disciplines. One engineering standard.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every category runs the same specification rigour — the difference
              is the environment it has to survive and the revenue model it has
              to serve.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-signal/12 bg-signal/12 md:grid-cols-2">
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

                    <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-signal/80">
                      {service.tagline}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>

                    <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                      {service.heroStats.map((stat) => (
                        <div key={stat.label}>
                          <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                            {stat.label}
                          </dt>
                          <dd className="mt-1 font-heading text-lg font-semibold text-foreground">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-signal/10 bg-obsidian py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-etch opacity-25" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
              Delivery
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              From survey to yield report.
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((phase, index) => (
              <Reveal key={phase.step} delay={index * 0.07}>
                <li className="relative border-t border-signal/20 pt-6">
                  <span className="absolute -top-px left-0 h-px w-10 bg-signal shadow-[0_0_10px_#ff2233]" />
                  <span className="font-mono text-[11px] tracking-[0.2em] text-signal">
                    {phase.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-signal/10 bg-obsidian py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[150px]"
        />
        <div className="relative mx-auto w-full max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Tell us about the wall.
              <br />
              <span className="text-signal text-glow-signal">
                We will tell you what it can earn.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Send the location, the surface and the intent. You will get a
              specification, a pitch recommendation and an indicative build cost
              from an engineer — not a brochure.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-signal px-7 py-3.5 text-sm font-semibold text-obsidian transition-all hover:shadow-[0_0_44px_-6px_#ff2233]"
            >
              Start a project brief
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

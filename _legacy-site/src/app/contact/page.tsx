import type { Metadata } from "next";
import { Clock, FileCheck2, Ruler } from "lucide-react";
import { LeadCaptureForm } from "@/components/contact/lead-capture-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Request a consultation",
  description:
    "Send your site, surface and intent. A CityScreen applications engineer responds with a specification, pitch recommendation and indicative build cost.",
};

const assurances = [
  {
    icon: Clock,
    title: "One business day",
    body: "Every brief is routed to an applications engineer, not a queue. You get a reply within a single working day.",
  },
  {
    icon: Ruler,
    title: "Specification first",
    body: "You receive a pitch recommendation, viewing-distance study and cabinet layout before any commercial conversation.",
  },
  {
    icon: FileCheck2,
    title: "Drawings under NDA",
    body: "Blueprints stay inside the specification team. Nothing is shared with a manufacturer without written consent.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-obsidian">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_top,rgba(255,34,51,0.13),transparent_65%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-etch opacity-20" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pt-20 pb-28 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:pt-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
              Enterprise enquiry
            </p>
            <h1 className="mt-4 font-heading text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl">
              Scope the
              <br />
              <span className="text-signal text-glow-signal">
                installation.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Give us the site, the surface and the intent. We come back with a
              pitch recommendation, a cabinet layout and an indicative build
              cost — engineered against your conditions, not a catalogue.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 space-y-6">
              {assurances.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-signal/25 bg-signal/8">
                    <item.icon className="size-4 text-signal" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold">
                      {item.title}
                    </p>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <LeadCaptureForm />
        </Reveal>
      </div>
    </div>
  );
}

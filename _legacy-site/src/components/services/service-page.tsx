import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import type { Service } from "@/lib/services";

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} via-transparent to-transparent`}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 pb-16 lg:pt-28">
          <Reveal>
            <Badge
              variant="outline"
              className="border-signal/35 bg-signal/8 font-mono text-[10px] tracking-[0.2em] text-signal uppercase"
            >
              {service.eyebrow}
            </Badge>

            <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {service.name}
            </h1>
            <p className="mt-4 font-heading text-xl text-signal text-glow-signal sm:text-2xl">
              {service.tagline}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-signal/12 bg-signal/12 sm:grid-cols-3">
              {service.heroStats.map((stat) => (
                <div key={stat.label} className="bg-obsidian px-6 py-6">
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-heading text-3xl font-semibold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-signal/10 py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering position
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 0.06}>
                <Card className="group h-full border-0 bg-gradient-to-b from-obsidian-raised to-obsidian ring-1 ring-signal/12 transition-all duration-300 hover:ring-signal/40 hover:shadow-[0_0_44px_-16px_#ff2233]">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-lg">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal shadow-[0_0_10px_#ff2233]" />
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-[calc(var(--card-spacing)+1.5rem)]">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {highlight.body}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-signal/10 py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-etch opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
              Technical specification
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Published numbers, not marketing ranges.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {service.specTables.map((table, index) => (
              <Reveal key={table.title} delay={index * 0.08}>
                <Card className="h-full border-0 bg-gradient-to-b from-obsidian-raised to-obsidian ring-1 ring-signal/12">
                  <CardHeader className="border-b border-signal/10 pb-4">
                    <CardTitle className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                      {table.title}
                    </CardTitle>
                    {table.caption ? (
                      <CardDescription className="text-xs">
                        {table.caption}
                      </CardDescription>
                    ) : null}
                  </CardHeader>
                  <CardContent className="px-0">
                    <Table>
                      <TableBody>
                        {table.rows.map((row) => (
                          <TableRow
                            key={row.parameter}
                            className="border-signal/8 hover:bg-signal/4"
                          >
                            <TableCell className="w-2/5 px-(--card-spacing) py-3 align-top text-xs whitespace-normal text-muted-foreground">
                              {row.parameter}
                            </TableCell>
                            <TableCell className="px-(--card-spacing) py-3 text-right align-top font-mono text-xs whitespace-normal text-foreground">
                              {row.value}
                              {row.note ? (
                                <span className="mt-0.5 block text-[10px] font-normal text-signal/70">
                                  {row.note}
                                </span>
                              ) : null}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableCaption className="mb-2 px-(--card-spacing) text-left font-mono text-[10px] tracking-wide text-muted-foreground/70 uppercase">
                        Subject to final site survey
                      </TableCaption>
                    </Table>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-signal/10 py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
                Deployment
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Where this platform is specified.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Each deployment starts from the same survey pack — loading,
                sightlines, ambient light and viewing distance — before a pitch
                or cabinet is proposed.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-semibold text-obsidian transition-all hover:shadow-[0_0_40px_-6px_#ff2233]"
              >
                Scope a {service.name} project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="grid gap-px overflow-hidden rounded-xl border border-signal/12 bg-signal/12 sm:grid-cols-2">
                {service.applications.map((application) => (
                  <li
                    key={application}
                    className="flex items-center gap-3 bg-obsidian px-5 py-4 text-sm text-muted-foreground"
                  >
                    <Check className="size-3.5 shrink-0 text-signal" />
                    {application}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ParticleMesh } from "@/components/particle-mesh";

const headline = ["Transforming", "Light", "into", "Architecture."];

const stats = [
  { value: "10,000", unit: "nits", label: "Peak outdoor output" },
  { value: "0.6", unit: "mm", label: "Finest COB pitch" },
  { value: "24/7", unit: "", label: "Mission-critical duty" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-obsidian">
      <ParticleMesh className="absolute inset-0 -z-20 size-full" />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-etch opacity-40" />
        <div className="absolute left-1/2 top-1/3 size-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#060709_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-obsidian to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          {...rise(0)}
          className="inline-flex items-center gap-2.5 rounded-full border border-signal/25 bg-signal/5 px-4 py-1.5"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-signal uppercase">
            LED systems engineering
          </span>
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-heading text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {headline.map((word, index) => (
            <motion.span
              key={word}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12 + index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                index === 3
                  ? "mr-[0.28em] inline-block text-signal text-glow-signal"
                  : "mr-[0.28em] inline-block"
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          {...rise(0.55)}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
        >
          Our LED solutions turn passive walls into dynamic, revenue-generating
          digital environments — engineered surfaces that earn their place on the
          building and their line on the balance sheet.
        </motion.p>

        <motion.div {...rise(0.68)} className="mt-11 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-semibold text-obsidian transition-all hover:shadow-[0_0_40px_-6px_#ff2233]"
          >
            Request a consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#hardware"
            className="inline-flex items-center gap-2 rounded-md border border-signal/25 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-signal/60 hover:bg-signal/5"
          >
            Inspect the hardware
          </Link>
        </motion.div>

        <motion.dl
          {...rise(0.82)}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-signal/12 bg-signal/12 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-obsidian/90 px-6 py-5">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 font-heading text-3xl font-semibold text-foreground">
                {stat.value}
                {stat.unit ? (
                  <span className="ml-1 text-base font-normal text-signal">
                    {stat.unit}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute inset-x-0 bottom-7 flex justify-center"
      >
        <ChevronDown className="size-5 animate-bounce text-signal/50" />
      </motion.div>
    </section>
  );
}

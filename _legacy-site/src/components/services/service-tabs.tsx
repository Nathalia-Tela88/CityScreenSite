"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 border-b border-signal/10 bg-obsidian/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl gap-1 overflow-x-auto px-6">
        {services.map((service) => {
          const active = pathname === service.href;
          return (
            <Link
              key={service.slug}
              href={service.href}
              className={cn(
                "relative shrink-0 px-4 py-3.5 text-sm whitespace-nowrap transition-colors",
                active
                  ? "text-signal"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-60">
                {service.eyebrow}
              </span>
              <span className="mt-0.5 block font-medium">{service.name}</span>
              {active ? (
                <motion.span
                  layoutId="service-tab"
                  className="absolute inset-x-2 bottom-0 h-px bg-signal shadow-[0_0_10px_#ff2233]"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              ) : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

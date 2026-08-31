"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const links = [
  ...services.map((service) => ({ href: service.href, label: service.name })),
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-signal/15 bg-obsidian/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex size-6 items-center justify-center">
            <span className="absolute inset-0 rounded-sm border border-signal/40" />
            <span className="size-1.5 rounded-[1px] bg-signal shadow-[0_0_12px_#ff2233] transition-transform duration-300 group-hover:scale-150" />
          </span>
          <span className="font-heading text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
            City<span className="text-signal">Screen</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "text-signal"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-px bg-signal shadow-[0_0_8px_#ff2233]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md border border-signal/40 bg-signal/10 px-4 py-2 text-sm font-medium text-signal transition-all hover:bg-signal/20 hover:shadow-[0_0_24px_-4px_#ff2233] sm:inline-flex"
          >
            Request a consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-md border border-signal/20 text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-signal/10 bg-obsidian/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors",
                    pathname === link.href
                      ? "bg-signal/10 text-signal"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

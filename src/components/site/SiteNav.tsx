"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-brand-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-brand-dark">
          THAZIO<span className="text-brand-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase">
          {links.map((l) => {
            const isActive = pathname === l.to || pathname?.startsWith(l.to);
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`transition-colors ${
                  isActive ? "text-brand-accent" : "text-brand-dark/80 hover:text-brand-accent"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-xs hover:bg-brand-accent transition-all hover:-translate-y-0.5"
          >
            Start Project
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-px w-6 bg-brand-dark transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-brand-dark transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-brand-dark transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-bg border-t border-brand-line">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-wide font-medium">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="text-brand-dark/80 hover:text-brand-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-brand-dark text-white px-5 py-3 rounded-full text-xs text-center"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — Thazio Labs",
  description:
    "Five pillars of transformation: Digital & Software, AI Data & Analytics, Cloud, Consulting, and Global Capability Centers.",
  openGraph: {
    title: "Services — Thazio Labs",
    description: "The five pillars Thazio uses to transform enterprise operations.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="01">Services</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              Five pillars of <span className="italic font-serif font-light">transformation</span>.
            </h1>
            <p className="max-w-2xl text-xl text-brand-muted leading-relaxed">
              Strategy, software, data, AI and cloud — each one a discipline in its own right, all of them stitched into the same delivery fabric.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-brand-line">
        {services.map((s) => (
          <Reveal key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="block border-b border-brand-line px-6 py-12 md:py-16 hover:bg-brand-surface transition-colors group"
            >
              <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1 font-display text-brand-accent text-sm">{s.index}</div>
                <div className="md:col-span-5">
                  <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-balance group-hover:text-brand-accent transition-colors">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-lg text-brand-muted leading-relaxed">{s.short}</p>
                </div>
                <div className="md:col-span-1 text-right">
                  <span className="inline-block text-brand-accent group-hover:translate-x-1 transition-transform text-2xl">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}

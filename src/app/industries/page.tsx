import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries — Thazio Labs",
  description:
    "Industry-specific expertise across retail, finance, healthcare, education, telecom, advertising, e-commerce and utilities.",
  openGraph: {
    title: "Industries — Thazio Labs",
    description: "Vertical solutions for sectors where precision and trust matter most.",
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="01">Industries</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              Vertical <span className="italic font-serif font-light">expertise</span>, applied.
            </h1>
            <p className="max-w-2xl text-xl text-brand-muted leading-relaxed">
              The same engineering discipline, shaped to the workflows and regulatory edges that define each sector.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.04}>
              <Link
                href={`/industries/${ind.slug}`}
                className="block h-full aspect-[4/5] bg-brand-surface rounded-2xl p-6 border border-brand-line hover:border-brand-accent hover:-translate-y-1 transition-all group"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-lg bg-brand-bg grid place-items-center text-sm font-display font-semibold text-brand-accent group-hover:scale-110 transition-transform">
                    {ind.initials}
                  </div>
                  <div>
                    <div className="font-display text-2xl font-medium mb-3 group-hover:text-brand-accent transition-colors">
                      {ind.name}
                    </div>
                    <p className="text-sm text-brand-muted leading-relaxed">{ind.tagline}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

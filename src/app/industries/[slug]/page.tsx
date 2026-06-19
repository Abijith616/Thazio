import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  const title = `${industry.name} — Thazio Labs`;
  const desc = industry.tagline;
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) {
    notFound();
  }

  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-accent mb-12"
            >
              <span>←</span> All industries
            </Link>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl bg-brand-surface grid place-items-center font-display font-semibold text-brand-accent">
                {industry.initials}
              </div>
              <SectionLabel index="—">Industry</SectionLabel>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              {industry.name}
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-brand-muted leading-relaxed font-light text-pretty">
              {industry.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-6">
                Where we focus
              </h2>
              <h3 className="text-4xl font-display font-medium leading-tight text-balance">
                Solutions built for{" "}
                <span className="italic font-serif font-light">{industry.name.toLowerCase()}</span>
              </h3>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {industry.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.05}>
                  <div className="flex items-baseline gap-6 py-6 border-b border-white/10">
                    <span className="font-display text-brand-accent text-sm w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl md:text-2xl font-display font-medium text-white text-balance">
                      {h}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-display font-medium mb-12">Other industries</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-3">
            {others.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-brand-surface border border-brand-line rounded-xl p-5 hover:border-brand-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-brand-bg grid place-items-center text-xs font-display font-semibold text-brand-accent mb-6">
                  {ind.initials}
                </div>
                <div className="text-sm font-medium group-hover:text-brand-accent transition-colors">
                  {ind.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} — Thazio Labs`;
  const desc = service.short;
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const others = services.filter((s) => s.slug !== service.slug);
  const next = services[(services.indexOf(service) + 1) % services.length];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-accent mb-12"
            >
              <span>←</span> All services
            </Link>
            <SectionLabel index={service.index}>Service</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              {service.title}
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-brand-muted leading-relaxed font-light text-pretty">
              {service.long}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-brand-dark text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-12">
              Measured outcomes
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {service.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.1} className="bg-brand-dark p-10">
                <div className="font-display text-6xl md:text-7xl font-medium tracking-tight mb-4 text-white">
                  {o.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                  {o.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel index="A">Capabilities</SectionLabel>
              <h2 className="text-4xl font-display font-medium leading-tight text-balance">
                What we <span className="italic font-serif font-light">deliver</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-brand-line">
              {service.capabilities.map((c, i) => (
                <Reveal key={c} delay={i * 0.05}>
                  <div className="flex items-baseline gap-6 py-6 border-b border-brand-line">
                    <span className="font-display text-brand-accent text-sm w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl md:text-2xl font-display font-medium text-balance">
                      {c}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-display font-medium">Other capabilities</h2>
            <Link
              href={`/services/${next.slug}`}
              className="text-sm uppercase tracking-widest font-semibold text-brand-accent hover:text-brand-dark"
            >
              Next: {next.title} →
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-brand-bg border border-brand-line rounded-xl p-6 hover:border-brand-accent transition-colors group"
              >
                <div className="font-display text-brand-accent text-xs mb-8">{s.index}</div>
                <div className="font-display text-lg font-medium leading-tight group-hover:text-brand-accent transition-colors">
                  {s.title}
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

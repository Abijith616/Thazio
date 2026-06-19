import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { insights } from "@/data/site";
import chip from "@/assets/insight-chip.jpg";
import keyboard from "@/assets/insight-keyboard.jpg";
import trails from "@/assets/insight-trails.jpg";
import cloud from "@/assets/insight-cloud.jpg";

const imageMap = { chip, keyboard, trails, cloud };

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};

  const title = `${article.title} — Thazio Labs`;
  const desc = article.excerpt;
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const idx = insights.indexOf(article);
  const next = insights[(idx + 1) % insights.length];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <article>
        <section className="pt-40 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-accent mb-12"
              >
                <span>←</span> All insights
              </Link>
              <div className="flex gap-3 mb-8">
                <span className="text-[10px] font-bold uppercase text-brand-accent tracking-widest">
                  {article.category}
                </span>
                <span className="text-[10px] font-medium uppercase text-brand-muted tracking-widest">
                  {article.date} · {article.readTime}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1] mb-8 text-balance">
                {article.title}
              </h1>
              <p className="text-xl md:text-2xl text-brand-muted leading-relaxed font-light italic font-serif text-pretty">
                {article.excerpt}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-brand-surface relative h-[300px] md:h-[500px]">
                <Image
                  src={imageMap[article.image]}
                  alt=""
                  fill
                  sizes="(max-w-1024px) 100vw, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-2xl mx-auto">
            {article.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={`leading-[1.7] text-pretty mb-8 ${
                    i === 0
                      ? "text-2xl font-display font-medium text-brand-dark"
                      : "text-lg text-brand-dark/80"
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      </article>

      {/* Next */}
      <section className="border-t border-brand-line px-6 py-16">
        <Link
          href={`/insights/${next.slug}`}
          className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center group"
        >
          <div className="md:col-span-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted">
            Up next
          </div>
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-balance group-hover:text-brand-accent transition-colors">
              {next.title}
            </h3>
          </div>
          <div className="md:col-span-2 text-right text-brand-accent text-3xl group-hover:translate-x-1 transition-transform">
            →
          </div>
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

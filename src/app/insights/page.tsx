import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { insights } from "@/data/site";
import chip from "@/assets/insight-chip.jpg";
import keyboard from "@/assets/insight-keyboard.jpg";
import trails from "@/assets/insight-trails.jpg";
import cloud from "@/assets/insight-cloud.jpg";

const imageMap = { chip, keyboard, trails, cloud };

export const metadata: Metadata = {
  title: "Insights — Thazio Labs",
  description:
    "Editorial perspectives on AI, autonomous enterprise, multi-agent systems and intelligent workflows.",
  openGraph: {
    title: "Insights — Thazio Labs",
    description: "Editorial perspectives from the Thazio Labs team.",
  },
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="01">Insights</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              Field notes from the{" "}
              <span className="italic font-serif font-light">intelligent enterprise</span>.
            </h1>
            <p className="max-w-2xl text-xl text-brand-muted leading-relaxed">
              Essays and research from the Thazio team on what we&apos;re building, deploying and rethinking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="grid lg:grid-cols-12 gap-8 group items-end"
            >
              <div className="lg:col-span-7 aspect-[4/3] rounded-2xl overflow-hidden bg-brand-surface relative h-[400px] md:h-[500px]">
                <Image
                  src={imageMap[featured.image]}
                  alt=""
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="lg:col-span-5">
                <div className="flex gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase text-brand-accent tracking-widest">
                    Featured · {featured.category}
                  </span>
                  <span className="text-[10px] font-medium uppercase text-brand-muted tracking-widest">
                    {featured.date} · {featured.readTime}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6 text-balance group-hover:text-brand-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lg text-brand-muted leading-relaxed">{featured.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Rest */}
      <section className="border-t border-brand-line">
        {rest.map((article, i) => (
          <Reveal key={article.slug}>
            <Link
              href={`/insights/${article.slug}`}
              className="block border-b border-brand-line px-6 py-10 hover:bg-brand-surface transition-colors group"
            >
              <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 font-display text-brand-accent text-sm">
                  {String(i + 2).padStart(2, "0")}
                </div>
                <div className="md:col-span-2 text-[11px] font-bold uppercase text-brand-muted tracking-widest">
                  {article.date} · {article.category}
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-balance group-hover:text-brand-accent transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="md:col-span-1 text-sm text-brand-muted">{article.readTime}</div>
                <div className="md:col-span-1 text-right text-brand-accent text-xl group-hover:translate-x-1 transition-transform">
                  →
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

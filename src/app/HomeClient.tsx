"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { services, industries, insights, stats } from "@/data/site";
import heroMesh from "@/assets/hero-mesh.jpg";

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block py-1.5 px-3 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-8"
              >
                Intelligence in Motion
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance"
              >
                Architecting the{" "}
                <span className="italic font-light font-serif">next intelligent</span> enterprise.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-xl text-lg md:text-xl text-brand-muted leading-relaxed"
              >
                Thazio Labs bridges the gap between legacy infrastructure and generative futures — through cloud, AI, and strategic engineering that compounds.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-dark text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors group"
                >
                  Let&apos;s Talk
                  <span className="block w-5 h-px bg-current group-hover:w-9 transition-all" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 border border-brand-line text-brand-dark px-6 py-3.5 rounded-full text-sm font-medium hover:border-brand-dark transition-colors"
                >
                  See capabilities
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-surface outline-1 -outline-offset-1 outline-brand-line">
                <Image
                  src={heroMesh}
                  alt="Computational mesh sculpture"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-muted bg-white/80 backdrop-blur px-2 py-1 rounded">
                  Computational Art — 01
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SLAB */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">
                Core Capabilities
              </h2>
              <h3 className="text-4xl md:text-5xl font-display tracking-tight">
                Five pillars of <span className="italic font-serif font-light">transformation</span>
              </h3>
            </div>
            <div className="text-brand-accent font-display text-base tracking-wide">
              01 / 05
            </div>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="h-full bg-brand-dark p-8 hover:bg-white/[0.04] transition-colors block group"
                >
                  <div className="text-2xl mb-12 font-display text-white/25 group-hover:text-brand-accent transition-colors">
                    {s.index}
                  </div>
                  <h4 className="text-xl font-medium mb-4 leading-tight">{s.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{s.short}</p>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-brand-accent inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <span className="block w-4 h-px bg-current" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="02">Our Advantage</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tight max-w-3xl text-balance mb-20">
              Why teams choose <span className="italic font-serif font-light">Thazio</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-px bg-brand-line">
            {[
              {
                n: "01",
                title: "Proven legacy of engineering excellence",
                body: "Thazio Labs has been a dedicated partner guiding complex digital transformation. Stability and insight, backed by an unwavering commitment to client success — every solution is innovative, reliable, and tailored for long-term growth.",
              },
              {
                n: "02",
                title: "Expertise, execution, excellence",
                body: "Deep technical expertise in AI, cloud and digital systems combined with meticulous planning and seamless execution. A culture of continuous improvement keeps the bar high for quality and data security.",
              },
              {
                n: "03",
                title: "High-performance autonomous teams",
                body: "Our success runs on the strength of our people. Teamwork is the operating principle — tight collaboration internally and with your organization. Technical depth and cohesive delivery for your most critical projects.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1} className="bg-brand-bg p-10">
                <div className="font-display text-brand-accent text-sm mb-12">{item.n}</div>
                <h3 className="text-2xl font-display font-medium leading-tight mb-6 text-balance">
                  {item.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-pretty">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-1">
                <SectionLabel index="03">Industries</SectionLabel>
                <h2 className="text-4xl font-display font-medium leading-tight mb-6 text-balance">
                  Industry-specific <span className="italic font-serif font-light">expertise</span>
                </h2>
                <p className="text-brand-muted mb-8">
                  Tailored vertical solutions for sectors where precision and trust matter most.
                </p>
                <Link
                  href="/industries"
                  className="text-brand-accent font-semibold flex items-center gap-3 group italic font-serif text-lg"
                >
                  Explore sectors
                  <span className="block w-8 h-px bg-brand-accent group-hover:w-14 transition-all" />
                </Link>
              </div>
              <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="aspect-square bg-brand-bg rounded-xl p-5 flex flex-col justify-between border border-brand-line hover:border-brand-accent/60 hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-surface grid place-items-center text-xs font-display font-semibold text-brand-accent group-hover:scale-110 transition-transform">
                      {ind.initials}
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">{ind.name}</div>
                      <div className="text-[11px] text-brand-muted mt-1 line-clamp-2">
                        {ind.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex items-end justify-between mb-16">
            <div>
              <SectionLabel index="04">News & Insights</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight">
                Latest <span className="italic font-serif font-light">thinking</span>
              </h2>
            </div>
            <Link
              href="/insights"
              className="hidden md:inline-flex text-sm uppercase tracking-widest font-semibold border-b-2 border-brand-accent pb-1 hover:text-brand-accent"
            >
              View all
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((article, i) => (
              <InsightCard key={article.slug} article={article} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 border-y border-brand-line">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="05">By The Numbers</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-brand-line mt-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05} className="bg-brand-bg p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl font-medium tracking-tight mb-3 text-brand-dark">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-brand-muted font-semibold">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel index="06">Locations</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.05] text-balance">
                Headquartered in India.{" "}
                <span className="italic font-serif font-light">Connected globally.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-brand-line">
              {[
                { tier: "Active", region: "India", note: "Remote global delivery" },
                { tier: "Active", region: "Global Collaboration", note: "Distributed across time zones" },
                { tier: "Future", region: "Middle East", note: "Planned presence" },
                { tier: "Future", region: "Europe", note: "Planned presence" },
                { tier: "Future", region: "North America", note: "Planned presence" },
                { tier: "Future", region: "Asia Pacific", note: "Planned presence" },
              ].map((loc) => (
                <div key={loc.region} className="bg-brand-bg p-6">
                  <div
                    className={`text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 ${
                      loc.tier === "Active" ? "text-brand-accent" : "text-brand-muted"
                    }`}
                  >
                    {loc.tier}
                  </div>
                  <div className="font-display text-xl font-medium mb-1">{loc.region}</div>
                  <div className="text-sm text-brand-muted">{loc.note}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import type { Insight } from "@/data/site";
import chip from "@/assets/insight-chip.jpg";
import keyboard from "@/assets/insight-keyboard.jpg";
import trails from "@/assets/insight-trails.jpg";
import cloud from "@/assets/insight-cloud.jpg";

const imageMap = { chip, keyboard, trails, cloud };

function InsightCard({ article, delay = 0 }: { article: Insight; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/insights/${article.slug}`}
        className="group block"
      >
        <div className="aspect-[16/10] bg-brand-surface rounded-lg mb-6 overflow-hidden outline-1 -outline-offset-1 outline-brand-line relative">
          <Image
            src={imageMap[article.image]}
            alt=""
            loading="lazy"
            fill
            sizes="(max-w-768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="flex gap-3 mb-4">
          <span className="text-[10px] font-bold uppercase text-brand-accent tracking-widest">
            {article.category}
          </span>
          <span className="text-[10px] font-medium uppercase text-brand-muted tracking-widest">
            {article.date}
          </span>
        </div>
        <h3 className="text-xl font-display font-medium leading-tight group-hover:text-brand-accent transition-colors text-balance">
          {article.title}
        </h3>
      </Link>
    </Reveal>
  );
}

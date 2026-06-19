import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About — Thazio Labs",
  description:
    "Thazio Labs is a digital transformation consultancy engineered from India and connected globally. Built on trust, expertise, and autonomous teams.",
  openGraph: {
    title: "About — Thazio Labs",
    description: "Engineered from India. Connected globally.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              We build{" "}
              <span className="italic font-serif font-light">intelligent systems</span> that stay.
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-brand-muted leading-relaxed font-light text-pretty">
              Thazio Labs is a consultancy of engineers, designers and strategists building digital platforms, AI systems and cloud architectures for organizations that need to move with conviction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-dark text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-12">
              How we operate
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                n: "01",
                title: "Engineering as craft",
                body: "We treat software as something that has to last. The pace of AI doesn't reduce the standard for quality — it raises it.",
              },
              {
                n: "02",
                title: "Outcomes over output",
                body: "Code volume is not the deliverable. Decisions made, latency reduced, risk caught — those are. Every engagement is framed against them.",
              },
              {
                n: "03",
                title: "Autonomy with trust",
                body: "Our teams operate as embedded extensions of yours. Tight collaboration, high agency, mutual accountability. That's the contract.",
              },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 0.1} className="bg-brand-dark p-10">
                <div className="font-display text-brand-accent text-sm mb-12">{v.n}</div>
                <h3 className="text-2xl font-display font-medium leading-tight mb-4 text-balance">
                  {v.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel index="02">FAQ</SectionLabel>
              <h2 className="text-4xl font-display font-medium leading-tight text-balance">
                Frequently asked <span className="italic font-serif font-light">questions</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-brand-line">
              {[
                {
                  q: "What services does Thazio provide?",
                  a: "Custom software development, AI and data engineering, cloud platforms, strategic consulting, and global capability center setup.",
                },
                {
                  q: "Do you build custom software?",
                  a: "Yes — full-stack platforms, internal tools, customer-facing products, and modernizations of legacy systems.",
                },
                {
                  q: "Can AI solutions integrate with existing systems?",
                  a: "Yes. Most of our AI work plugs into existing data warehouses, CRMs, and ERPs — we add intelligence to systems already in production.",
                },
                {
                  q: "Do you support educational institutions?",
                  a: "We do. Learning platforms, assessment automation, and student information systems are part of our regular work.",
                },
                {
                  q: "Can organizations automate workflows?",
                  a: "Yes. We instrument, model, and automate workflows where the cost of human attention has outgrown its return.",
                },
                {
                  q: "Do you offer cloud solutions?",
                  a: "Cloud migration, native architecture, FinOps, and security — across AWS, GCP and Azure.",
                },
                {
                  q: "Which industries do you serve?",
                  a: "Retail, finance, healthcare, education, telecom, advertising, e-commerce, and utilities. New verticals on request.",
                },
                {
                  q: "How can we get started?",
                  a: "Send a note via the contact page. We respond within one business day with an initial brief or a call link.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.03}>
                  <details className="group border-b border-brand-line py-6">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-lg md:text-xl font-display font-medium text-balance pr-8">
                        {item.q}
                      </span>
                      <span className="text-2xl text-brand-accent group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

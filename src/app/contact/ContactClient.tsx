"use client";

import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const subject = encodeURIComponent(
    `New inquiry from ${form.name || "the website"}${form.company ? ` (${form.company})` : ""}`,
  );
  const body = encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`,
  );
  const mailto = `mailto:info@thazio.com?subject=${subject}&body=${body}`;

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <SiteNav />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel index="01">Contact</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-balance">
              Tell us what you&apos;re{" "}
              <span className="italic font-serif font-light">building</span>.
            </h1>
            <p className="max-w-2xl text-xl text-brand-muted leading-relaxed">
              Share a few details and we&apos;ll come back within one business day with a brief, a call invite, or both.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailto;
                }}
                className="space-y-8"
              >
                <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <Field
                  type="email"
                  label="Email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted mb-3">
                    What are you working on?
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-brand-line focus:border-brand-accent text-xl py-3 outline-none transition-colors resize-none"
                    placeholder="A few sentences is enough."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors group"
                >
                  Send message
                  <span className="block w-6 h-px bg-current group-hover:w-10 transition-all" />
                </button>
              </form>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5">
            <div className="bg-brand-surface rounded-2xl p-10 border border-brand-line">
              <h3 className="font-display text-2xl font-medium mb-8">Direct lines</h3>
              <dl className="space-y-8">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted mb-2">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@thazio.com"
                      className="text-2xl font-display font-medium hover:text-brand-accent"
                    >
                      info@thazio.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted mb-2">
                    Consultation
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@thazio.com?subject=Consultation%20Request"
                      className="text-lg hover:text-brand-accent"
                    >
                      Schedule a 30-min intro →
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted mb-2">
                    Headquarters
                  </dt>
                  <dd className="text-lg">India · Remote global delivery</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted mb-2">
                    Response time
                  </dt>
                  <dd className="text-lg">Within one business day</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-muted mb-3">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-brand-line focus:border-brand-accent text-xl py-3 outline-none transition-colors"
      />
    </div>
  );
}

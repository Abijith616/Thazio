import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA */}
        <div className="grid lg:grid-cols-12 gap-12 items-end pb-20 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6 block">
              Let&apos;s Connect
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[0.95] text-balance">
              Let&apos;s build <span className="italic font-light text-brand-accent">intelligent systems</span> together.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between gap-4 bg-brand-accent text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-brand-dark transition-colors group"
            >
              Start a Conversation
              <span className="block w-6 h-px bg-current group-hover:w-10 transition-all" />
            </Link>
            <a
              href="mailto:info@thazio.com"
              className="inline-flex items-center justify-between gap-4 border border-white/20 text-white px-6 py-4 rounded-full text-sm font-medium hover:border-white transition-colors"
            >
              info@thazio.com
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-12 gap-12 py-16">
          <div className="md:col-span-4">
            <div className="text-3xl font-display font-bold mb-6">
              THAZIO<span className="text-brand-accent">.</span>
            </div>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Data-driven, AI-powered digital transformation. Engineered from India, delivered globally.
            </p>
          </div>
          <div className="md:col-span-2">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5 text-white/40">Services</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/digital-software" className="text-white/70 hover:text-brand-accent">Digital & Software</Link></li>
              <li><Link href="/services/ai-data-analytics" className="text-white/70 hover:text-brand-accent">AI Data & Analytics</Link></li>
              <li><Link href="/services/cloud" className="text-white/70 hover:text-brand-accent">Cloud</Link></li>
              <li><Link href="/services/consulting" className="text-white/70 hover:text-brand-accent">Consulting</Link></li>
              <li><Link href="/services/global-capability-centers" className="text-white/70 hover:text-brand-accent">Global Capability</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5 text-white/40">Industries</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="/industries/retail" className="text-white/70 hover:text-brand-accent">Retail</Link></li>
              <li><Link href="/industries/finance" className="text-white/70 hover:text-brand-accent">Finance</Link></li>
              <li><Link href="/industries/healthcare" className="text-white/70 hover:text-brand-accent">Healthcare</Link></li>
              <li><Link href="/industries/education" className="text-white/70 hover:text-brand-accent">Education</Link></li>
              <li><Link href="/industries" className="text-white/70 hover:text-brand-accent">All industries →</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5 text-white/40">Contact</h5>
            <a href="mailto:info@thazio.com" className="text-2xl font-display block mb-4 hover:text-brand-accent transition-colors">
              info@thazio.com
            </a>
            <p className="text-white/50 text-sm mb-6">Headquartered in India.<br />Connected globally.</p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-xs hover:bg-brand-accent hover:border-brand-accent transition-colors">In</a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-xs hover:bg-brand-accent hover:border-brand-accent transition-colors">X</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <div>© {new Date().getFullYear()} Thazio Labs. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white">About</Link>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

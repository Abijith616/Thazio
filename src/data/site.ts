export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  long: string;
  capabilities: string[];
  outcomes: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: "digital-software",
    index: "01",
    title: "Digital & Software",
    short: "Custom platform engineering and product modernization for scale.",
    long: "We design, build, and modernize custom applications and digital platforms — enterprise product deployments, full-lifecycle software development, and quality engineering that compounds into competitive advantage.",
    capabilities: [
      "Product strategy & UX architecture",
      "Full-stack platform engineering",
      "Legacy modernization & re-platforming",
      "Quality engineering & SRE",
      "Mobile & cross-platform apps",
    ],
    outcomes: [
      { label: "Faster release cadence", value: "4×" },
      { label: "Defect rate reduction", value: "62%" },
      { label: "Avg. time to MVP", value: "11 wk" },
    ],
  },
  {
    slug: "ai-data-analytics",
    index: "02",
    title: "AI, Data & Analytics",
    short: "Generative AI, ML pipelines and predictive dashboards that decide in real time.",
    long: "Deploying generative AI solutions, customized machine learning pipelines, and predictive dashboards. We turn unstructured data into operational intelligence — the kind teams actually use.",
    capabilities: [
      "Generative AI & LLM orchestration",
      "ML pipelines & feature stores",
      "Predictive analytics & forecasting",
      "Data warehousing & lakehouse",
      "Real-time decisioning systems",
    ],
    outcomes: [
      { label: "Avg. inference latency", value: "12 ms" },
      { label: "Models in production", value: "40+" },
      { label: "Forecast accuracy lift", value: "31%" },
    ],
  },
  {
    slug: "cloud",
    index: "03",
    title: "Cloud",
    short: "Secure, elastic cloud with automated DevOps and zero-trust by default.",
    long: "Transitioning infrastructures to secure, elastic cloud environments with automated DevOps, zero-trust configurations, and 24/7 telemetry monitoring. Built so it stays cheap as it scales.",
    capabilities: [
      "Cloud migration & landing zones",
      "Kubernetes & serverless architecture",
      "DevOps automation & GitOps",
      "Zero-trust & cloud security",
      "Observability & FinOps",
    ],
    outcomes: [
      { label: "Cloud spend reduction", value: "38%" },
      { label: "Deployment frequency", value: "12×" },
      { label: "Mean time to recover", value: "9 min" },
    ],
  },
  {
    slug: "consulting",
    index: "04",
    title: "Consulting",
    short: "Strategic technology consulting and architecture for the next decade.",
    long: "Providing strategic technology consulting, transformation mapping, architecture design, and workflow assessments to future-proof operations. We leave behind a roadmap teams can actually execute.",
    capabilities: [
      "Digital transformation strategy",
      "Enterprise architecture",
      "Technology due diligence",
      "Operating model design",
      "Change & adoption programs",
    ],
    outcomes: [
      { label: "Engagement satisfaction", value: "98%" },
      { label: "Roadmaps delivered", value: "60+" },
      { label: "Avg. project ROI", value: "4.2×" },
    ],
  },
  {
    slug: "global-capability-centers",
    index: "05",
    title: "Global Capability Centers",
    short: "Dedicated delivery and competency centers — distributed by design.",
    long: "Setting up dedicated global delivery and competency centers to optimize distributed workflows, operational scale, and specialized talent pools. Engineering benches that act like an extension of your own team.",
    capabilities: [
      "GCC strategy & setup",
      "Talent acquisition & training",
      "Distributed delivery operations",
      "Compliance & governance",
      "Hybrid pod models",
    ],
    outcomes: [
      { label: "Cost-to-serve reduction", value: "45%" },
      { label: "Talent retention", value: "94%" },
      { label: "Time to stand-up", value: "16 wk" },
    ],
  },
];

export type Industry = {
  slug: string;
  initials: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    slug: "retail",
    initials: "Re",
    name: "Retail",
    tagline: "Customer engagement, intelligent inventory, shopping analytics.",
    description:
      "From storefront to supply chain, we build platforms that learn from every transaction — predicting demand, personalizing experience, and tightening the loop between channels.",
    highlights: [
      "Customer engagement platforms",
      "Intelligent inventory systems",
      "Omnichannel shopping analytics",
      "Loyalty & personalization engines",
    ],
  },
  {
    slug: "advertising-media",
    initials: "Ad",
    name: "Advertising & Media",
    tagline: "Automated ad placement, audience analytics, content platforms.",
    description:
      "Automated ad placement engines, audience analytic dashboards, and content platforms that route attention to the right place at the right cost.",
    highlights: [
      "Programmatic placement engines",
      "Audience analytics dashboards",
      "Content publishing platforms",
      "Brand measurement systems",
    ],
  },
  {
    slug: "education",
    initials: "Ed",
    name: "Education",
    tagline: "Digital classrooms, academic platforms, assessment automation.",
    description:
      "Digital classrooms, academic management platforms, and assessment automations — built for institutions that need to scale without losing the human in the loop.",
    highlights: [
      "Learning management platforms",
      "Assessment & proctoring automation",
      "Student information systems",
      "Adaptive learning engines",
    ],
  },
  {
    slug: "telecommunication",
    initials: "Te",
    name: "Telecommunication",
    tagline: "Network telemetry, customer portals, signal optimization.",
    description:
      "Network telemetry monitoring, customer portals, and signal optimization models that catch issues before subscribers notice.",
    highlights: [
      "Network telemetry & monitoring",
      "Self-service customer portals",
      "Signal optimization ML",
      "Provisioning automation",
    ],
  },
  {
    slug: "healthcare",
    initials: "He",
    name: "Healthcare",
    tagline: "Patient records, diagnostic support, inventory logs.",
    description:
      "Patient records platforms, diagnostic support models, and inventory logs — designed for clinical workflows and the compliance landscape that wraps them.",
    highlights: [
      "EHR / patient record platforms",
      "Diagnostic support models",
      "Pharmacy & inventory logs",
      "Compliance-first integrations",
    ],
  },
  {
    slug: "e-commerce",
    initials: "Ec",
    name: "E-commerce",
    tagline: "Storefronts, recommendation engines, logistics tracking.",
    description:
      "Bespoke web storefronts, recommendation engines, and logistics tracking solutions — composable architectures that let you ship features as fast as you ship product.",
    highlights: [
      "Composable storefronts",
      "Recommendation engines",
      "Fulfillment & logistics tracking",
      "Conversion analytics",
    ],
  },
  {
    slug: "finance",
    initials: "Fi",
    name: "Finance",
    tagline: "Secure transactions, risk analytics, compliance logs.",
    description:
      "Secure transaction platforms, risk analytics dashboards, and compliance logs — engineered for trust at the millisecond and at the audit.",
    highlights: [
      "Secure transaction platforms",
      "Risk analytics dashboards",
      "Compliance & audit logging",
      "Fraud detection ML",
    ],
  },
  {
    slug: "utilities",
    initials: "Ut",
    name: "Utilities",
    tagline: "Grid performance, billing portals, maintenance tracking.",
    description:
      "Grid performance models, customer billing portals, and maintenance tracking — keeping the lights on with software that's been on call as long as the operators have.",
    highlights: [
      "Grid performance modeling",
      "Customer billing portals",
      "Predictive maintenance",
      "Outage & restoration tools",
    ],
  },
];

export type Insight = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image: "chip" | "keyboard" | "trails" | "cloud";
  readTime: string;
};

export const insights: Insight[] = [
  {
    slug: "building-the-autonomous-enterprise",
    date: "Jun 2026",
    category: "Strategy",
    title: "Building The Autonomous Enterprise",
    excerpt:
      "What it actually takes to move from automated workflows to systems that decide, act, and learn on their own.",
    body: [
      "The phrase \"autonomous enterprise\" gets thrown around like it means automation with a coat of paint. It doesn't. Autonomy is the moment the system stops waiting for a human to confirm and starts being trusted to act.",
      "Getting there is less about model selection and more about closing three loops: instrumentation that's honest about what happened, decision policies that are auditable in plain language, and feedback that flows fast enough to correct course before the next cycle.",
      "We've spent the last decade watching companies invest in the first loop, half-build the second, and skip the third entirely. The result is dashboards. What teams need is a clear chain from signal to action to outcome — and the patience to let the system earn its scope, slowly.",
    ],
    image: "chip",
    readTime: "8 min",
  },
  {
    slug: "human-ai-collaboration-in-modern-organizations",
    date: "Jun 2026",
    category: "AI",
    title: "Human-AI Collaboration In Modern Organizations",
    excerpt:
      "Notes on building teams where models do the heavy lifting and people do the heavy thinking.",
    body: [
      "Most AI rollouts fail not because the model is wrong, but because the org chart is. When a model is dropped into a team without redrawing what the team is responsible for, you get either skepticism or surrender — both expensive.",
      "The best programs we've shipped treat the model as a new junior hire with strange superpowers: it's fast, it doesn't sleep, and it needs an explicit job description. Spell out what it owns, what it drafts, and what it never touches.",
      "Done right, the result is calmer: people stop competing with the model and start steering it. That, more than any benchmark, is how you know the collaboration is working.",
    ],
    image: "keyboard",
    readTime: "6 min",
  },
  {
    slug: "future-of-multi-agent-systems",
    date: "May 2026",
    category: "AI",
    title: "Future Of Multi-Agent Systems",
    excerpt:
      "Why the next decade of enterprise software looks less like apps and more like a small, opinionated team of agents.",
    body: [
      "Multi-agent systems are the obvious endpoint of the LLM era. Once a single model is good enough at a single task, the question becomes how many of them you can wire together before the seams show.",
      "The seams show fast. Coordination cost, prompt drift, brittle hand-offs — none of these are model problems. They're systems problems, and they're solved with the same engineering discipline we've always used: explicit interfaces, observable state, and a bias toward fewer agents that each do more.",
      "The teams who win this era will be the ones who treat agents like services, not like magic. Less prompt-jujitsu, more architecture.",
    ],
    image: "trails",
    readTime: "9 min",
  },
  {
    slug: "designing-intelligent-workflows",
    date: "May 2026",
    category: "Cloud",
    title: "Designing Intelligent Workflows",
    excerpt:
      "Patterns we've started reaching for when retrofitting intelligence into systems that were never built for it.",
    body: [
      "Most enterprise workflows were designed in an era when the cheapest thing was human attention. Intelligence inverts that — and the workflows have to be rewritten to match.",
      "The patterns we keep reaching for: shadow execution before production cut-over, confidence-routed branches so high-uncertainty cases find a human, and an explicit \"escape hatch\" that lets operators take over without dropping state.",
      "None of this is novel. What's new is how cheap it has become to instrument and how unforgiving the cost of skipping it has become.",
    ],
    image: "cloud",
    readTime: "7 min",
  },
];

export const stats = [
  { value: "10+", label: "Projects" },
  { value: "1+", label: "Years Building" },
  { value: "5+", label: "Technology Domains" },
  { value: "100%", label: "Custom Solutions" },
  { value: "24/7", label: "Continuous Innovation" },
];

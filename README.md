# Thazio Labs

Thazio Labs designs, builds, and modernizes intelligent platforms. It bridges the gap between legacy infrastructure and generative futures through cloud, AI, and strategic engineering.

This project is a modern, responsive, and performant web application built on **Next.js (App Router)** and **Tailwind CSS v4**. It was successfully migrated from a TanStack Start flat setup to an industry-standard, clean Next.js structure.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Motion for React](https://motion.dev/) (Framer Motion)
- **Icons & UI Primitives**: [Lucide React](https://lucide.dev/) and [Radix UI](https://www.radix-ui.com/)
- **Data Visualizations**: [Recharts](https://recharts.org/)

---

## 📂 Project Structure

```text
├── public/                 # Static assets (favicons, svgs, etc.)
├── src/
│   ├── app/                # Next.js pages, routing, and layout configurations
│   ├── assets/             # Computational design images and photography
│   ├── components/
│   │   ├── site/           # Layout components (SiteNav, SiteFooter, Reveal, etc.)
│   │   └── ui/             # Reusable Shadcn UI primitives (accordion, button, charts, etc.)
│   ├── data/               # Static and structured site content lists (services, industries, insights)
│   ├── hooks/              # Custom React hooks (use-mobile.tsx)
│   └── lib/                # Custom utilities, styles, and error handlers
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint rules
├── postcss.config.mjs      # PostCSS configuration
└── next.config.ts          # Next.js configurations
```

---

## 🛠️ Getting Started

### 1. Install Dependencies

Clone the repository and run:

```bash
npm install
```

### 2. Run the Development Server

Start the local server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production

Compile a production build:

```bash
npm run build
```

The build will type-check all files and generate optimized, search-engine-friendly static pages for the entire site.

---

## 📈 Key Features

- **Architectural Minimalist Design**: Premium dark/light themes, sleek typography (Inter & Instrument Serif), and glassmorphism headers.
- **Dynamic Routing**: Automatic path generation (`generateStaticParams`) for all Services, Industries, and Insights.
- **Interactive UI**: Fluid animations via Framer Motion, dynamic header transitions on scroll, interactive details accordion on the FAQ section, and custom responsive layouts.
- **SEO Ready**: Dedicated server-side `metadata` configurations exported for every page.

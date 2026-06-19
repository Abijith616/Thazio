import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thazio Labs — Data-Driven, AI-Powered Digital Transformation",
  description: "Thazio Labs designs, builds and modernizes intelligent platforms — strategy, data, AI and cloud solutions that scale.",
  authors: [{ name: "Thazio Labs" }],
  openGraph: {
    title: "Thazio Labs — Intelligent Systems, Engineered",
    description: "Data-driven, AI-powered digital transformation. Strategy, software, cloud and analytics built for scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thazio Labs",
    description: "Data-driven, AI-powered digital transformation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

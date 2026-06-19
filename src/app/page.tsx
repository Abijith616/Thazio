import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Thazio Labs — Data-Driven, AI-Powered Digital Transformation",
  description: "Thazio Labs designs, builds and modernizes intelligent platforms. Strategy, data, AI and cloud solutions that scale your business.",
  openGraph: {
    title: "Thazio Labs — Intelligent Systems, Engineered",
    description: "Strategy, data, AI and cloud solutions that scale your business. Engineered from India, delivered globally.",
  },
};

export default function Page() {
  return <HomeClient />;
}

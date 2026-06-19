import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Thazio Labs",
  description:
    "Start a conversation with Thazio Labs. Tell us about your project and we'll respond within one business day.",
  openGraph: {
    title: "Contact — Thazio Labs",
    description: "Let's build intelligent systems together.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

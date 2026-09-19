import type { Metadata } from "next";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import FaqClient from "./FaqClient";
import { allFaqs } from "./faq-data";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | JKKN Arts & Science",
  description:
    "Find answers to common questions about JKKN College of Arts and Science — admissions, programmes, fees, scholarships, campus facilities, and contact details.",
  alternates: { canonical: "https://cas.jkkn.ac.in/faq" },
  openGraph: {
    title: "FAQ | JKKN College of Arts and Science",
    description:
      "Answers to frequently asked questions about admissions, programmes, fees, and campus life at JKKN College of Arts and Science (Autonomous).",
    url: "https://cas.jkkn.ac.in/faq",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "FAQ", url: "https://cas.jkkn.ac.in/faq" },
        ]}
      />
      <FaqClient />
    </>
  );
}

import type { Metadata } from "next";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import FaqClient from "./FaqClient";

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

const schemaFaqs = [
  {
    question: "What is JKKN College of Arts and Science?",
    answer:
      "JKKN College of Arts and Science is an autonomous institution founded by J.K.K. Rangammal Charitable Trust, Komarapalayam in 1974, affiliated to Periyar University. It offers 27+ programmes in Arts, Science, and Commerce and is located on NH-544 (Salem–Coimbatore Highway), Komarapalayam, Namakkal, Tamil Nadu.",
  },
  {
    question: "Is JKKN College of Arts and Science an autonomous institution?",
    answer:
      "Yes. JKKN College of Arts and Science is an autonomous institution affiliated to Periyar University, with authority to design its own curriculum, conduct examinations, and award degrees.",
  },
  {
    question: "How many programmes does JKKN College of Arts and Science offer?",
    answer:
      "The college offers 27+ programmes including UG, PG, and PhD levels across Arts, Science, and Commerce disciplines in both Government-Aided and Self-Finance streams.",
  },
  {
    question: "What are the eligibility criteria for UG programmes?",
    answer:
      "Candidates must have passed the Higher Secondary Examination (12th standard) from a recognized board with relevant subjects. Typically 50% aggregate for Aided programmes and 45% for Self-Finance programmes.",
  },
  {
    question: "Does JKKN College offer scholarships?",
    answer:
      "Yes. JKKN College offers merit-based scholarships and government scholarships including BC/MBC/SC/ST and first-generation graduate scholarships. The college assists students with all application processes.",
  },
  {
    question: "Is hostel accommodation available at JKKN College?",
    answer:
      "Yes. Separate hostel facilities for boys and girls with 24/7 security, hygienic mess, Wi-Fi, and recreational areas. Transport is also available from Erode, Salem, Namakkal, and surrounding areas.",
  },
  {
    question: "Where is JKKN College of Arts and Science located?",
    answer:
      "JKKN College of Arts and Science, Natarajapuram, NH-544 (Salem–Coimbatore Highway), Komarapalayam, Namakkal District, Tamil Nadu – 638183.",
  },
  {
    question: "How can I contact JKKN College of Arts and Science?",
    answer:
      "Phone: +91 93458 55001 | Email: arts@jkkn.org | Address: JKKN College of Arts and Science, Natarajapuram, NH-544, Komarapalayam, Namakkal (DT), Tamil Nadu – 638183.",
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={schemaFaqs} />
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

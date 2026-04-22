import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce in Artificial Intelligence (B.Com AI) — Proposed Programme",
  description:
    "B.Com Artificial Intelligence at JKKN College of Arts and Science (Autonomous) — a proposed future-ready commerce programme blending accounting, finance, AI, ML and business analytics. Currently awaiting university approval; register your interest to be notified when admissions open.",
  keywords: [
    "BCom AI",
    "BCom Artificial Intelligence",
    "BCom AI college near Erode",
    "commerce with AI Tamil Nadu",
    "FinTech degree Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ai",
  },
  openGraph: {
    title: "B.Com — Artificial Intelligence | JKKN Arts & Science",
    description:
      "Study B.Com Artificial Intelligence at JKKN College of Arts and Science (Autonomous). Commerce + AI + FinTech — a future-ready undergraduate programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ai",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is B.Com (Artificial Intelligence) and how is it different from regular B.Com?",
    answer:
      "B.Com (AI) is a future-ready undergraduate programme that blends core commerce subjects — accounting, finance, taxation, auditing — with Artificial Intelligence, Machine Learning, and Business Analytics. Unlike a traditional B.Com, graduates learn to build AI-driven financial models, automate accounting workflows using RPA, and apply data science to business decisions.",
  },
  {
    question: "Do I need a programming or science background to apply?",
    answer:
      "No. The programme is open to students from any stream (Commerce, Science, or Arts) with 50% aggregate in 10+2. Programming, Python, and AI concepts are taught from the basics — no prior coding experience is required.",
  },
  {
    question: "What are the career opportunities after B.Com AI?",
    answer:
      "Graduates can pursue roles like AI Financial Analyst, Business Intelligence Analyst, FinTech Associate, Data Analyst, RPA Developer, Risk Analytics Executive, Algorithmic Trading Assistant, and AI Audit Consultant. They can also pursue higher studies in MBA (Analytics), M.Sc. Data Science, or CA with an analytics specialisation.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer:
      "Students get hands-on training in Python, SQL, Excel (advanced), Power BI, Tableau, Tally, machine learning libraries (scikit-learn, TensorFlow basics), RPA tools, and AI-powered accounting platforms. Capstone projects involve solving real business problems with AI.",
  },
  {
    question: "Is there an internship in this programme?",
    answer:
      "Yes. The programme includes two structured internships — one in the second year focused on business analytics, and one in the final year with FinTech firms, accounting & audit firms, or corporate finance teams.",
  },
  {
    question: "Is this programme approved by the university? Can I apply right now?",
    answer:
      "B.Com (AI) is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open only after the approval is received. You can register your interest via our Contact page and we will notify you as soon as applications open — no payment or commitment is required at this stage.",
  },
  {
    question: "How do I know the admission fee for B.Com AI?",
    answer:
      "The official fee structure will be published once the programme receives university approval. Register your interest via the Contact page to receive the fee structure as soon as it is finalised.",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce in Artificial Intelligence"
        description="Study B.Com Artificial Intelligence at JKKN College of Arts and Science (Autonomous). A future-ready commerce programme blending accounting, finance, AI, ML and business analytics near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-ai"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Artificial Intelligence)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ai",
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      {children}
    </>
  );
}

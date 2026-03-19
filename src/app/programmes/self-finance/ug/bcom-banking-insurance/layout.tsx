import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce in Banking and Insurance",
  description:
    "Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode.",
  keywords: [
    "BCom Banking Insurance",
    "BCom BI college near Erode",
    "banking degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-banking-insurance",
  },
  openGraph: {
    title: "B.Com — Banking & Insurance | JKKN Arts & Science",
    description:
      "Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-banking-insurance",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce in Banking and Insurance"
        description="Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-banking-insurance"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Banking & Insurance)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-banking-insurance",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration and structure of the B.Com Banking and Insurance programme?", answer: "The B.Com Banking and Insurance programme is a 3-year full-time undergraduate degree comprising six semesters. Each year includes two semesters with a combination of core banking subjects, insurance papers, financial accounting, practical software training, and skill-based electives. The final semester includes a mandatory internship and project work component." },
        { question: "What are the higher education options after B.Com Banking and Insurance?", answer: "After completing B.Com Banking and Insurance, learners can pursue M.Com in Banking & Finance, MBA in Finance or Banking Management, Master in Financial Management (MFM), Chartered Accountancy (CA), Company Secretary (CS), CFA, or CAIIB certification. Post-graduation options also include specialized programmes in Risk Management, Investment Banking, and Actuarial Science." },
        { question: "What competitive exams can I appear for after B.Com Banking and Insurance?", answer: "B.Com Banking and Insurance graduates can appear for various competitive examinations including IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B Officer, LIC AAO/ADO, SEBI Grade A, NABARD Grade A/B, Insurance Company recruitment exams, UPSC Civil Services, and State PSC examinations. The programme also prepares learners for professional certifications like IRDA Agent Exam, NISM certifications, and NCFM modules." },
        { question: "Are internships and practical training included in the curriculum?", answer: "Yes, the programme includes mandatory internships with banks, insurance companies, or financial institutions during the final year. Regular industrial visits to RBI, SEBI, NSE/BSE, insurance companies, and commercial banks are organized throughout the programme. The department also conducts banking software training, stock market simulation exercises, and workshops by industry professionals." },
        { question: "What makes this B.Com Banking and Insurance programme unique?", answer: "Our B.Com Banking and Insurance programme stands out due to its industry-aligned curriculum, strong bank and insurance company tie-ups for placements, integrated professional certification training (IRDA, NISM, NCFM), dedicated banking simulation lab, expert Learning Facilitators with industry experience, specialized coaching for bank competitive exams, and focus on fintech and digital banking trends. The programme also offers electives in emerging areas like mutual funds, derivatives, and micro-insurance." },
        { question: "What is the average salary package for B.Com Banking and Insurance graduates?", answer: "Entry-level positions for B.Com Banking and Insurance graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the employer and role. Bank Probationary Officers start at ₹4-6 lakhs, while insurance sector positions offer ₹3-4.5 lakhs initially. With experience and additional certifications like CA, CFA, or CAIIB, professionals can command packages of ₹10-20 lakhs per annum in senior roles." },
      ]} />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Arts in English",
  description:
    "Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu.",
  keywords: [
    "BA English self finance",
    "BA English college near Erode",
    "English degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/ba-english",
  },
  openGraph: {
    title: "B.A. English | JKKN Arts & Science",
    description:
      "Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/ba-english",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Arts in English"
        description="Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/ba-english"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.A. English",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/ba-english",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the BA English (Self-Finance) programme?", answer: "The BA English (Self-Finance) programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters, with examinations conducted at the end of each semester. The programme follows the Choice Based Credit System (CBCS) pattern as prescribed by the UGC." },
        { question: "How is the Self-Finance stream different from the Aided stream?", answer: "The curriculum and academic standards are identical for both streams. The primary difference lies in the fee structure — self-finance students pay the full tuition fee without government aid, while aided-stream students receive a government subsidy. Both streams share the same faculty, infrastructure, and placement support." },
        { question: "What are the career opportunities after BA English?", answer: "BA English graduates have diverse career opportunities including Content Writing and Copywriting, Journalism and Media, Publishing and Editing, Teaching (after B.Ed.), Public Relations and Corporate Communications, Translation and Interpretation, Civil Services (IAS, IPS, IFS), and Advertising and Marketing." },
        { question: "What is the eligibility criteria for BA English admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with English as a compulsory subject. A minimum aggregate of 50% marks is required for general category candidates, while 45% is required for reserved categories. Candidates from any stream (Arts, Science, or Commerce) are eligible to apply." },
        { question: "Can I pursue higher studies after BA English?", answer: "Yes, BA English opens multiple pathways for higher education including MA English (Literature/Linguistics), M.Phil. and Ph.D. in English, B.Ed. for teaching career, MBA (Management Studies), Mass Communication and Journalism, Law (LLB), and Diploma in Creative Writing." },
        { question: "Does the college provide placement assistance?", answer: "Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, soft skills training, resume building workshops, mock interviews, and industry interaction sessions. We have partnerships with leading companies in media, publishing, IT, education, and corporate sectors. The placement rate for BA English graduates has consistently been above 85%." },
        { question: "Are internships part of the BA English programme?", answer: "Yes, the programme includes a mandatory internship component in the fifth semester. Learners gain practical experience in fields such as journalism, content writing, publishing, teaching, or corporate communications. The department assists in securing internship placements with reputed organizations, newspapers, magazines, and educational institutions." },
        { question: "What scholarships are available for self-finance students?", answer: "Self-finance students may avail various government scholarships including BC/MBC/SC/ST scholarships, first-generation graduate scholarships, and merit-based scholarships. The institution also provides fee concessions and financial assistance for economically weaker students. Our admission office can guide you through the available scholarship options." },
      ]} />
      {children}
    </>
  );
}

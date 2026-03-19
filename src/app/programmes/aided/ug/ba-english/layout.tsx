import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Arts in English",
  description:
    "Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu.",
  keywords: [
    "BA English",
    "BA English college near Erode",
    "English literature degree Tamil Nadu",
    "arts college Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-english",
  },
  openGraph: {
    title: "B.A. English | JKKN Arts & Science",
    description:
      "Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-english",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Arts in English"
        description="Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/ba-english"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.A. English",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-english",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the BA English programme?", answer: "The BA English programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters, with examinations conducted at the end of each semester. The programme follows the Choice Based Credit System (CBCS) pattern as prescribed by the UGC." },
        { question: "What are the career opportunities after BA English?", answer: "BA English graduates have diverse career opportunities including Content Writing and Copywriting, Journalism and Media, Publishing and Editing, Teaching (after B.Ed.), Public Relations and Corporate Communications, Translation and Interpretation, Civil Services (IAS, IPS, IFS), and Advertising and Marketing." },
        { question: "What is the eligibility criteria for BA English admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with English as a compulsory subject. A minimum aggregate of 50% marks is required for general category candidates, while 45% is required for reserved categories (SC/ST/OBC). Candidates from any stream (Arts, Science, or Commerce) are eligible to apply." },
        { question: "What is the fee structure for BA English?", answer: "The fee structure varies based on the category of admission. Please contact the admission office for the current academic year's detailed fee structure. The college offers various scholarship opportunities for meritorious students and those from economically weaker sections. Government scholarships are also facilitated through the institution." },
        { question: "Can I pursue higher studies after BA English?", answer: "Yes, BA English opens multiple pathways for higher education including MA English (Literature/Linguistics), M.Phil. and Ph.D. in English, B.Ed. for teaching career, MBA (Management Studies), Mass Communication and Journalism, Law (LLB), and Diploma in Creative Writing." },
        { question: "Does the college provide placement assistance?", answer: "Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, soft skills training, resume building workshops, mock interviews, and industry interaction sessions. We have partnerships with leading companies in media, publishing, IT, education, and corporate sectors. The placement rate for BA English graduates has consistently been above 85%." },
        { question: "What makes this BA English programme unique?", answer: "Our BA English programme stands out due to its industry-aligned curriculum, emphasis on practical skills like digital content creation and journalism, dedicated language laboratory, expert learning facilitators with research experience, strong placement support, and focus on holistic development through co-curricular activities. The programme also offers specialization options in areas like Creative Writing, ELT, and Media Studies. Our Students are consistently publishing their creative outputs in social media and winning prizes." },
        { question: "Are internships mandatory in the BA English programme?", answer: "Yes, the programme includes a mandatory internship component in the fifth semester. Learners gain practical experience in fields such as journalism, content writing, publishing, teaching, or corporate communications. The department assists in securing internship placements with reputed organizations, newspapers, magazines, and educational institutions." },
      ]} />
      {children}
    </>
  );
}

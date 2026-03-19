import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Physics",
  description:
    "Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu.",
  keywords: [
    "BSc Physics",
    "BSc Physics college near Erode",
    "physics degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
  },
  openGraph: {
    title: "B.Sc Physics | JKKN Arts & Science",
    description:
      "Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Physics"
        description="Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-physics"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Physics",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Physics programme?", answer: "The B.Sc Physics programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters with comprehensive theoretical instruction and extensive practical laboratory sessions. The programme includes a mandatory project work component in the final semester." },
        { question: "What are the career opportunities after completing B.Sc Physics?", answer: "B.Sc Physics graduates have diverse career options including scientific research at organizations like ISRO, DRDO, and BARC, teaching and academia, electronics and semiconductor industries, IT and data science roles, medical physics in healthcare, aerospace industry, nuclear energy sector, and government services through UPSC and state PSC examinations." },
        { question: "What is the eligibility criteria for B.Sc Physics admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Physics, Chemistry and Mathematics as compulsory subjects. A minimum aggregate of 50% marks is required for general category candidates and 45% for reserved categories." },
        { question: "What higher studies options are available after B.Sc Physics?", answer: "Graduates can pursue M.Sc Physics, M.Sc Applied Physics, M.Sc Electronics, Integrated PhD programmes at premier institutions like IITs and IISc, M.Tech in various specializations, MBA, and research positions. Competitive examinations like IIT-JAM, GATE, CSIR-NET/JRF, and JEST open doors to prestigious institutions and research fellowships." },
        { question: "What is the expected salary package for B.Sc Physics graduates?", answer: "Entry-level positions for B.Sc Physics graduates typically offer packages ranging from Rs. 3 to Rs. 5 lakhs per annum depending on the sector and role. Positions in research organizations, IT companies, and government services often offer higher packages. With experience and additional qualifications, salaries can increase significantly, with senior positions in research and technology commanding Rs. 10-20 lakhs per annum." },
        { question: "Is there scope for research during the B.Sc programme?", answer: "Yes, the department encourages research activities from the undergraduate level. Learners can participate in departmental research projects, present papers at seminars and conferences, and publish their work in academic journals. The final semester includes a mandatory project work component where Learners conduct independent research under faculty guidance. Summer research internship opportunities at national laboratories are also facilitated." },
        { question: "What makes JKKN's B.Sc Physics programme unique?", answer: "Our programme stands out through its industry-aligned curriculum, experienced Learning Facilitators with active research profiles, state-of-the-art laboratory facilities, strong placement support, and collaborations with research organizations. The progressive education philosophy ensures holistic development with emphasis on practical skills, computational proficiency, and research aptitude preparing Learners for both industry and academia." },
      ]} />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "M.Sc Mathematics",
  description:
    "Study M.Sc. Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate maths programme near Erode, Tamil Nadu.",
  keywords: [
    "MSc Mathematics",
    "MSc Maths college near Erode",
    "postgraduate mathematics Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-mathematics",
  },
  openGraph: {
    title: "M.Sc Mathematics | JKKN Arts & Science",
    description:
      "Study M.Sc. Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate maths programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-mathematics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Mathematics"
        description="Study M.Sc. Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate maths programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/msc-mathematics"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          {
            name: "Self-Finance",
            url: "https://cas.jkkn.ac.in/programmes/self-finance",
          },
          {
            name: "PG",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg",
          },
          {
            name: "M.Sc. Mathematics",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-mathematics",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration and structure of the M.Sc Mathematics programme?", answer: "The M.Sc Mathematics programme is a 2-year full-time postgraduate degree comprising four semesters. The curriculum includes core courses in advanced mathematics, elective specializations, practical laboratory sessions, seminars, and a mandatory dissertation project in the final semester." },
        { question: "What are the career opportunities after M.Sc Mathematics?", answer: "M.Sc Mathematics graduates have diverse career options including academic positions in colleges and universities, research scientist roles in premier institutions (TIFR, ISI, IISC), data scientist positions in technology companies, quantitative analyst roles in banking and finance, actuarial careers in insurance, software development, cryptography, government services through UPSC/SSC, and further research through PhD programmes." },
        { question: "What is the eligibility criteria for M.Sc Mathematics admission?", answer: "Candidates must have completed Bachelor's Degree (B.Sc) in Mathematics or equivalent from a recognized university with minimum 50% aggregate marks for general category. Relaxation in marks as per government norms for reserved categories. Students with Mathematics as a major subject in their undergraduate degree are eligible to apply." },
        { question: "Does the programme offer specialization options?", answer: "The programme offers elective courses allowing specialization in areas such as Pure Mathematics (Algebra, Analysis, Topology), Applied Mathematics (Differential Equations, Mathematical Modeling), Computational Mathematics (Numerical Methods, Algorithms), Discrete Mathematics (Graph Theory, Combinatorics), and emerging fields like Financial Mathematics, Cryptography, and Data Science." },
        { question: "Does M.Sc Mathematics prepare for competitive examinations?", answer: "Yes, the curriculum is designed to prepare Learners for competitive examinations including NET/SET, GATE, UPSC, and other government services. Special coaching and guidance are provided for these examinations. Many of our alumni have successfully cleared these examinations and secured prestigious positions." },
        { question: "What is the expected salary for M.Sc Mathematics graduates?", answer: "Entry-level positions for M.Sc Mathematics graduates typically offer packages ranging from Rs. 4 to Rs. 8 lakhs per annum depending on the sector and role. Positions in data science, quantitative finance, and software development often command higher packages (Rs. 8-15 lakhs). Academic positions with NET qualification and government services offer competitive salaries with benefits. With experience and additional qualifications, senior positions can command Rs. 15-30 lakhs per annum." },
        { question: "Can I pursue PhD after completing M.Sc Mathematics?", answer: "Absolutely! M.Sc Mathematics is the standard pathway to doctoral research. Graduates can apply for PhD programmes in mathematics at universities in India (IITs, IISc, Central Universities, IISERs) and abroad. The programme prepares Learners for entrance examinations like CSIR-NET, GATE, and institution-specific tests. Many of our alumni have successfully pursued doctoral research at prestigious institutions." },
        { question: "What research opportunities are available during the programme?", answer: "The programme includes a mandatory dissertation project in the final semester where Learners work on original research problems under faculty guidance. Additionally, students can participate in departmental seminars, present papers at conferences, and collaborate on faculty research projects. The department also facilitates internships at research institutions like TIFR, IMSc, and ISI." },
      ]} />
      {children}
    </>
  );
}

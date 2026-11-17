import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// Added 2026-11-17: the user's final course list has B.Sc Mathematics in both streams; TN DCE (college code
// 2180001) lists the self-finance stream with 40 sanctioned seats.
export const metadata: Metadata = {
  title: "B.Sc Mathematics (Self-Finance)",
  description:
    "B.Sc Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Affiliated to Periyar University. 3 years, 6 semesters. Eligibility: +2 with Mathematics, Statistics or Business Mathematics.",
  keywords: [
    "BSc Mathematics",
    "BSc Maths self finance college near Erode",
    "maths degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-maths",
  },
  openGraph: {
    title: "B.Sc Mathematics (Self-Finance) | JKKN Arts & Science",
    description:
      "B.Sc Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Affiliated to Periyar University. 3 years, 6 semesters. Eligibility: +2 with Mathematics, Statistics or Business Mathematics.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-maths",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Mathematics"
        description="B.Sc Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Affiliated to Periyar University. 3 years, 6 semesters. Eligibility: +2 with Mathematics, Statistics or Business Mathematics."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-maths"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Mathematics",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-maths",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Mathematics programme?", answer: "The B.Sc Mathematics programme is a 3-year full-time undergraduate degree comprising six semesters." },
        { question: "What are the career opportunities after B.Sc Mathematics?", answer: "Graduates can pursue careers in data science, actuarial science, banking, teaching, research, financial analysis, software development, civil services, and quantitative analysis in various industries." },
        { question: "What is the eligibility criteria for B.Sc Mathematics admission?", answer: "A pass in the Higher Secondary (+2) examination with Mathematics, Statistics or Business Mathematics as one of the subjects, as per Periyar University regulations." },
        { question: "Is B.Sc Mathematics offered in the self-finance stream?", answer: "Yes. JKKN College of Arts and Science offers B.Sc Mathematics in both the aided and the self-finance streams. The self-finance stream has 40 sanctioned seats (TN DCE sanctioned strength)." },
      ]} />
      {children}
    </>
  );
}

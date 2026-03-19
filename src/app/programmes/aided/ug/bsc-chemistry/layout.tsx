import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Chemistry",
  description:
    "Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu.",
  keywords: [
    "BSc Chemistry",
    "BSc Chemistry college near Erode",
    "chemistry degree Tamil Nadu",
    "science college Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
  },
  openGraph: {
    title: "B.Sc Chemistry | JKKN Arts & Science",
    description:
      "Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Chemistry"
        description="Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-chemistry"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Sc. Chemistry",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Chemistry programme?", answer: "The B.Sc Chemistry programme is a 3-year full-time undergraduate degree comprising six semesters with both theoretical and practical components. Each academic year consists of two semesters, with examinations conducted at the end of each semester following the Choice Based Credit System (CBCS) pattern." },
        { question: "What are the career opportunities after B.Sc Chemistry?", answer: "Graduates can pursue careers in pharmaceutical companies, chemical industries, quality control laboratories, research institutions, environmental agencies, teaching, and can also opt for higher studies like M.Sc Chemistry, Ph.D., or professional courses in pharmaceutical sciences, analytical chemistry, and environmental sciences." },
        { question: "What is the eligibility criteria for admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Chemistry as a mandatory subject and preferably Physics or Mathematics. Science stream students with minimum aggregate marks are eligible to apply. The minimum percentage varies by category (General/OBC/SC/ST)." },
        { question: "What laboratory facilities are available?", answer: "The department has well-equipped laboratories for Organic, Inorganic, Physical, and Analytical Chemistry with  pH meters, centrifuges, chromatography equipment for hands-on learning and research projects." },
        { question: "Are there opportunities for research and projects?", answer: "Yes, students undertake research projects in the end of 2nd year and are encouraged to participate in scientific research, paper presentations, and academic conferences. The department provides research facilities and guidance from experienced faculty members to develop research aptitude and analytical skills." },
        { question: "Does the college provide placement assistance?", answer: "Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, soft skills training, resume building workshops, mock interviews, and industry interaction sessions. We have partnerships with leading chemical, pharmaceutical, and research companies for internships and career opportunities." },
        { question: "What makes this B.Sc Chemistry programme unique?", answer: "Our programme stands out due to its comprehensive curriculum balancing theory and practice, state-of-the-art laboratory infrastructure, expert learning facilitators with research experience, strong industry collaborations, emphasis on research projects, and holistic development through co-curricular activities in chemistry clubs and scientific societies." },
      ]} />
      {children}
    </>
  );
}

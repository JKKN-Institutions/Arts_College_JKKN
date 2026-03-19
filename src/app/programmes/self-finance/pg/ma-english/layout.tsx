import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Arts in English",
  description:
    "Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu.",
  keywords: [
    "MA English",
    "MA English college near Erode",
    "postgraduate English Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/ma-english",
  },
  openGraph: {
    title: "M.A. English | JKKN Arts & Science",
    description:
      "Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/ma-english",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Arts in English"
        description="Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/ma-english"
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
            name: "M.A. English",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/ma-english",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration and structure of the MA English programme?", answer: "The MA English programme is a 2-year full-time postgraduate degree comprising four semesters. The first three semesters focus on coursework covering British, American, Indian, and World Literature along with Literary Theory, Linguistics, and specialized electives. The fourth semester is primarily dedicated to research projects and defence." },
        { question: "Does the programme help in qualifying for UGC NET/SET examinations?", answer: "Yes, our MA English programme is specifically designed with UGC NET/SET preparation integrated into the curriculum. We offer dedicated coaching modules covering all NET syllabus topics, regular mock tests based on previous year patterns, study materials, and expert guidance from Learning Facilitators who have experience as NET examiners. Over 85% of our eligible graduates have qualified NET/SET examinations." },
        { question: "What are the specialization options available in MA English?", answer: "The programme offers multiple elective specializations including Cultural Studies, Gender Studies, Diaspora Studies, Film Studies, Translation Studies, and Comparative Literature. Learners can choose electives based on their research interests, and these specializations can form the basis for their dissertation topics and future doctoral research." },
        { question: "What is the dissertation requirement in MA English?", answer: "The dissertation is a mandatory component in the fourth semester. Learners work on an original research topic under the supervision of a designated faculty guide. The dissertation should be 15,000-20,000 words and must demonstrate independent research capability, critical analysis, and scholarly writing skills. Topics can span any area of English Studies including literature, linguistics, cultural studies, or ELT. The final evaluation includes a viva voce examination." },
        { question: "Can I pursue Ph.D. after completing MA English?", answer: "Yes, our MA English programme provides an excellent foundation for doctoral studies. After qualifying UGC NET-JRF or passing university entrance examinations, graduates can pursue Ph.D. in English at any recognized university. Our alumni have been admitted to premier institutions including central universities, IITs (for Humanities), and universities abroad. The research methodology training and dissertation experience gained during MA significantly helps in doctoral research." },
        { question: "What makes your MA English programme different from other institutions?", answer: "Our programme stands out due to its research-intensive curriculum, integrated NET preparation, strong publication support, and personalized mentorship with a 10:1 Learner-to-Learning Facilitator ratio. We offer access to extensive digital resources, regular seminars with eminent scholars, academic writing workshops, and opportunities for conference presentations. The programme combines rigorous theoretical training with practical applications, preparing graduates for diverse career paths in academia, publishing, and communication industries." },
        { question: "Are there opportunities for publication and conference participation?", answer: "Yes, we actively encourage Learners to publish their research and present at conferences. The department organizes annual national seminars where PG Learners can present papers. We provide guidance for publishing in UGC-approved journals and support Learners in participating in external conferences. Many of our Learners have published research articles and book chapters during their MA programme, which strengthens their academic profile for Ph.D. admissions and teaching positions." },
      ]} />
      {children}
    </>
  );
}

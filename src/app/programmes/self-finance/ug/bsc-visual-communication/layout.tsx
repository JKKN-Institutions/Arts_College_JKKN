import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Visual Communication",
  description:
    "Study B.Sc. Visual Communication at JKKN College of Arts and Science (Autonomous). Creative media programme with industry projects near Erode, Tamil Nadu.",
  keywords: [
    "BSc Visual Communication",
    "visual communication college near Erode",
    "media studies Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication",
  },
  openGraph: {
    title: "B.Sc Visual Communication | JKKN Arts & Science",
    description:
      "Study B.Sc. Visual Communication at JKKN College of Arts and Science (Autonomous). Creative media programme with industry projects near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Visual Communication"
        description="Study B.Sc. Visual Communication at JKKN College of Arts and Science (Autonomous). Creative media programme with industry projects near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-visual-communication"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Visual Communication",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Visual Communication programme?", answer: "The B.Sc Visual Communication programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters, with examinations conducted at the end of each semester. The programme includes theoretical courses, practical studio sessions, and hands-on projects." },
        { question: "What are the career opportunities after B.Sc Visual Communication?", answer: "B.Sc Visual Communication graduates have diverse career opportunities including Graphic Designer, Video Editor, UI/UX Designer, Photographer, Motion Graphics Artist, Digital Marketer, Art Director, Web Designer, and Animator. Opportunities exist in advertising agencies, film and television, digital marketing firms, animation studios, and as freelance creatives." },
        { question: "What is the eligibility criteria for admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board from any stream (Arts, Science, or Commerce). A minimum aggregate of 50% marks is required for general category candidates, while 45% is required for reserved categories (SC/ST/OBC). No portfolio or entrance test is required for admission." },
        { question: "What software and tools will I learn?", answer: "The programme provides comprehensive training in industry-standard software including Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects), 3D software (Maya, Blender), web design tools (Figma, Adobe XD), and video editing platforms. You will also learn photography techniques using professional DSLR cameras and studio equipment." },
        { question: "Can I pursue higher studies after B.Sc Visual Communication?", answer: "Yes, B.Sc Visual Communication opens multiple pathways for higher education including M.Sc in Visual Communication, M.A. in Mass Communication, M.Des in Graphic Design, MBA in Marketing/Media Management, or specialized programmes in Animation, Film Studies, or Digital Media. Professional certifications in UI/UX Design, Motion Graphics, or Digital Marketing are also valuable additions." },
        { question: "Does the college provide placement assistance?", answer: "Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, portfolio development workshops, mock interviews, and industry interaction sessions. We have partnerships with leading companies in advertising, media, publishing, IT, and creative sectors. The placement rate for B.Sc Visual Communication graduates has consistently been above 85%." },
        { question: "What makes this programme unique?", answer: "Our B.Sc Visual Communication programme stands out due to its industry-aligned curriculum developed in consultation with creative professionals, emphasis on hands-on studio practice with professional equipment, mandatory industry internships, live client projects for portfolio building, expert learning facilitators with active industry experience, and strong placement support connecting graduates with leading creative agencies across India." },
        { question: "Are internships mandatory?", answer: "Yes, the programme includes a mandatory industry internship in the final semester. Learners gain practical experience at advertising agencies, production houses, design studios, or media companies. The department assists in securing internship placements with reputed organizations. This hands-on experience is crucial for building your professional portfolio and industry connections." },
      ]} />
      {children}
    </>
  );
}

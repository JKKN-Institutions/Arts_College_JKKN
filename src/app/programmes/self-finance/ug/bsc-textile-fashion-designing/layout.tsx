import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Textile and Fashion Designing",
  description:
    "Study B.Sc. Textile & Fashion Designing at JKKN College of Arts and Science (Autonomous). Creative programme with industry exposure near Erode, Tamil Nadu.",
  keywords: [
    "BSc Textile Fashion Designing",
    "fashion design college near Erode",
    "textile design degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-textile-fashion-designing",
  },
  openGraph: {
    title: "B.Sc Textile & Fashion Design | JKKN Arts & Science",
    description:
      "Study B.Sc. Textile & Fashion Designing at JKKN College of Arts and Science (Autonomous). Creative programme with industry exposure near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-textile-fashion-designing",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Textile and Fashion Designing"
        description="Study B.Sc. Textile & Fashion Designing at JKKN College of Arts and Science (Autonomous). Creative programme with industry exposure near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-textile-fashion-designing"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Textile & Fashion Designing",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-textile-fashion-designing",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the scope of B.Sc Textile and Fashion Design in India?", answer: "The fashion and textile industry in India is booming with excellent career opportunities in fashion houses, export companies, textile mills, retail brands, and media. Graduates can work as fashion designers, textile designers, merchandisers, stylists, or start their own fashion ventures with growing demand in both domestic and international markets." },
        { question: "Can I pursue this course after Commerce or Arts stream?", answer: "Yes! While Science stream students are preferred, students from Commerce and Arts backgrounds can also apply if they have a genuine interest in design and creativity. The programme focuses on developing creative and technical skills rather than requiring advanced science knowledge." },
        { question: "What software and technical skills will I learn?", answer: "Students receive comprehensive training in industry-standard software including Adobe Photoshop, Adobe Illustrator, CorelDRAW for design, CAD software for pattern making, and 3D design tools. You will also learn manual techniques like draping, pattern making, embroidery, and textile printing alongside digital skills." },
        { question: "What is the average salary package for B.Sc TFD graduates?", answer: "Entry-level salaries range from Rs. 2.5-4.5 lakhs per annum depending on the role and company. Fashion designers in established brands can earn Rs. 4-8 lakhs, while merchandisers and production managers earn Rs. 3-6 lakhs annually. Successful entrepreneurs and freelance designers can earn significantly higher based on their clientele and brand value." },
        { question: "Are there industry internship opportunities during the course?", answer: "Yes, the programme includes a mandatory industry internship in the final year. We have partnerships with leading fashion houses, textile mills, export companies, and retail brands. Students gain hands-on experience in design studios, production units, merchandising departments, and fashion events, which significantly enhances employability." },
        { question: "Can I start my own fashion business after this course?", answer: "Absolutely! The curriculum includes Fashion Entrepreneurship, Marketing and Branding, and Production Management modules specifically designed to equip students with business skills. Many of our graduates have successfully launched their own fashion labels, boutiques, online stores, and design studios. The college also provides incubation support for student entrepreneurs." },
        { question: "What are the options for higher studies after B.Sc TFD?", answer: "Graduates can pursue M.Sc in Fashion Design, MBA in Fashion Management, specialized courses in Fashion Technology, Textile Engineering, or Fashion Communication. International options include degrees from fashion institutes in Italy, France, UK, and USA. Some students also pursue certifications in specialized areas like sustainable fashion, luxury brand management, or fashion styling." },
      ]} />
      {children}
    </>
  );
}

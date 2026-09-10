import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PATH = "/programmes/self-finance/ug/bsc-textile-fashion-designing-ai";
const URL = `https://cas.jkkn.ac.in${PATH}`;
const NAME = "Bachelor of Science in Textile and Fashion Designing with AI";

const META_DESCRIPTION =
  "B.Sc. Textile and Fashion Designing with AI at JKKN College of Arts and Science (Autonomous), Komarapalayam. A 3-year, 6-semester full-time undergraduate programme.";

const COURSE_DESCRIPTION =
  "The B.Sc. in Textile and Fashion Designing with AI is a future-ready undergraduate programme that fuses creative artistry with artificial intelligence and textile science. Students learn to conceptualize, design and produce fashion garments using both traditional craftsmanship and AI tools, from generative design and AI-powered pattern making to machine-learning-driven trend forecasting. The curriculum covers fashion illustration, pattern making, merchandising, branding and entrepreneurship, with hands-on work in design studios, CAD/AI laboratories and industry internships.";

export const metadata: Metadata = {
  title: "B.Sc. Textile and Fashion Designing with AI",
  description: META_DESCRIPTION,
  keywords: [
    "BSc Textile and Fashion Designing with AI",
    "AI fashion design course Tamil Nadu",
    "textile design degree near Erode",
    "JKKN Arts and Science self-finance UG",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "B.Sc. Textile & Fashion Designing with AI | JKKN Arts & Science",
    description: META_DESCRIPTION,
    url: URL,
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name={NAME}
        description={COURSE_DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url={PATH}
        programPrerequisites="10+2 or equivalent from a recognized board"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          { name: "B.Sc. Textile & Fashion Designing with AI", url: URL },
        ]}
      />
      {children}
    </>
  );
}

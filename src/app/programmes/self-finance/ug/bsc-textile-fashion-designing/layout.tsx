import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Textile and Fashion Designing at JKKN College of Arts and Science",
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
    title:
      "Bachelor of Science in Textile and Fashion Designing | JKKN College of Arts and Science",
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
      {children}
    </>
  );
}

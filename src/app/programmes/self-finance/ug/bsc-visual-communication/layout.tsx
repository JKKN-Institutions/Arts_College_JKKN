import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Visual Communication at JKKN College of Arts and Science",
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
    title:
      "Bachelor of Science in Visual Communication | JKKN College of Arts and Science",
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
      {children}
    </>
  );
}

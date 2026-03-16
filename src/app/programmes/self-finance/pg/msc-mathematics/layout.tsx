import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Master of Science in Mathematics at JKKN College of Arts and Science",
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
    title:
      "Master of Science in Mathematics | JKKN College of Arts and Science",
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
      {children}
    </>
  );
}

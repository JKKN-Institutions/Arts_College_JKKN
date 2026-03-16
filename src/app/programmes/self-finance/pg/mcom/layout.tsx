import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Commerce at JKKN College of Arts and Science",
  description:
    "Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu.",
  keywords: [
    "MCom self finance",
    "MCom college near Erode",
    "postgraduate commerce Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/pg/mcom",
  },
  openGraph: {
    title: "Master of Commerce | JKKN College of Arts and Science",
    description:
      "Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/mcom",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Commerce"
        description="Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/mcom"
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
            name: "M.Com",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/mcom",
          },
        ]}
      />
      {children}
    </>
  );
}

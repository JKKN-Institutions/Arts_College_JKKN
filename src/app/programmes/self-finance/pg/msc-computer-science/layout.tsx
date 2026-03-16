import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Master of Science in Computer Science at JKKN College of Arts and Science",
  description:
    "Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode.",
  keywords: [
    "MSc Computer Science",
    "MSc CS college near Erode",
    "computer science PG Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-computer-science",
  },
  openGraph: {
    title:
      "Master of Science in Computer Science | JKKN College of Arts and Science",
    description:
      "Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Computer Science"
        description="Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/msc-computer-science"
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
            name: "M.Sc. Computer Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-computer-science",
          },
        ]}
      />
      {children}
    </>
  );
}

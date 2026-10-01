import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Computer Science",
  description: "Department of Computer Science (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu: B.Sc Computer Science syllabus, labs, faculty, fee and eligibility.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/computer-science" },
  openGraph: {
    title: "Department of Computer Science | JKKN Arts & Science",
    description: "Department of Computer Science (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu: B.Sc Computer Science syllabus, labs, faculty, fee and eligibility.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Departments", url: "https://cas.jkkn.ac.in/departments" },
        { name: "Self-Finance", url: "https://cas.jkkn.ac.in/departments/self-finance" },
        { name: "Computer Science", url: "https://cas.jkkn.ac.in/departments/self-finance/computer-science" },
      ]} />
      {children}
    </>
  );
}

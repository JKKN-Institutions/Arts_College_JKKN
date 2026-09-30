import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Physics",
  description: "Department of Physics (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu: B.Sc Physics syllabus, practicals, faculty, fee and eligibility.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/physics" },
  openGraph: {
    title: "Department of Physics | JKKN Arts & Science",
    description: "Department of Physics (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu: B.Sc Physics syllabus, practicals, faculty, fee and eligibility.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/physics",
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
        { name: "Physics", url: "https://cas.jkkn.ac.in/departments/self-finance/physics" },
      ]} />
      {children}
    </>
  );
}

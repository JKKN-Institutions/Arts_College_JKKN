import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Microbiology",
  description: "Department of Microbiology (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Microbiology, Periyar University. +2 with any one biology subject.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/microbiology" },
  openGraph: {
    title: "Department of Microbiology | JKKN Arts & Science",
    description: "Department of Microbiology (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Microbiology, Periyar University. +2 with any one biology subject.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/microbiology",
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
        { name: "Microbiology", url: "https://cas.jkkn.ac.in/departments/self-finance/microbiology" },
      ]} />
      {children}
    </>
  );
}

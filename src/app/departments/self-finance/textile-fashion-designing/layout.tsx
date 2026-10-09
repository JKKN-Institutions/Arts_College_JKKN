import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Textile and Fashion Designing",
  description: "Department of Textile and Fashion Designing (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Textile and Fashion Designing, Periyar University. Any +2 group eligible.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/textile-fashion-designing" },
  openGraph: {
    title: "Department of Textile and Fashion Designing | JKKN Arts & Science",
    description: "Department of Textile and Fashion Designing (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Textile and Fashion Designing, Periyar University. Any +2 group eligible.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/textile-fashion-designing",
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
        { name: "Textile & Fashion Designing", url: "https://cas.jkkn.ac.in/departments/self-finance/textile-fashion-designing" },
      ]} />
      {children}
    </>
  );
}

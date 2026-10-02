import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of AI and Data Science",
  description: "Department of AI and Data Science (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Computer Science (AI & DS), Periyar University.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/ai-data-science" },
  openGraph: {
    title: "Department of AI and Data Science | JKKN Arts & Science",
    description: "Department of AI and Data Science (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Computer Science (AI & DS), Periyar University.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/ai-data-science",
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
        { name: "AI & Data Science", url: "https://cas.jkkn.ac.in/departments/self-finance/ai-data-science" },
      ]} />
      {children}
    </>
  );
}

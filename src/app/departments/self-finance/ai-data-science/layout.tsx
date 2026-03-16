import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of AI and Data Science | JKKN College of Arts and Science",
  description: "Department of AI and Data Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Expert faculty, research opportunities and placements near Erode, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/ai-data-science" },
  openGraph: {
    title: "Department of AI and Data Science | JKKN College of Arts and Science",
    description: "Department of AI and Data Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Expert faculty, research opportunities and placements near Erode, Tamil Nadu.",
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

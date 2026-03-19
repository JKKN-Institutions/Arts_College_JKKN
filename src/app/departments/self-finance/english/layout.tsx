import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of English",
  description: "Department of English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Expert faculty, research opportunities and placements near Erode, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/english" },
  openGraph: {
    title: "Department of English | JKKN Arts & Science",
    description: "Department of English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Expert faculty, research opportunities and placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/english",
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
        { name: "English", url: "https://cas.jkkn.ac.in/departments/self-finance/english" },
      ]} />
      {children}
    </>
  );
}

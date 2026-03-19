import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Computer Science",
  description: "Department of Computer Science (Aided) at JKKN College of Arts and Science (Autonomous). Expert faculty, research opportunities and placements near Erode, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/aided/computer-science" },
  openGraph: {
    title: "Department of Computer Science | JKKN Arts & Science",
    description: "Department of Computer Science (Aided) at JKKN College of Arts and Science (Autonomous). Expert faculty, research opportunities and placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/departments/aided/computer-science",
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
        { name: "Aided", url: "https://cas.jkkn.ac.in/departments/aided" },
        { name: "Computer Science", url: "https://cas.jkkn.ac.in/departments/aided/computer-science" },
      ]} />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Cyber Security",
  description: "Department of Cyber Security (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu: B.Sc CS (Cyber Security) syllabus, labs, fee and eligibility.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/cyber-security" },
  openGraph: {
    title: "Department of Cyber Security | JKKN Arts & Science",
    description: "Department of Cyber Security (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu: B.Sc CS (Cyber Security) syllabus, labs, fee and eligibility.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/cyber-security",
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
        { name: "Cyber Security", url: "https://cas.jkkn.ac.in/departments/self-finance/cyber-security" },
      ]} />
      {children}
    </>
  );
}

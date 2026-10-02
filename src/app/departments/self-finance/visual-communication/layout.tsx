import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Department of Visual Communication",
  description: "Department of Visual Communication (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Visual Communication (Viscom), Periyar University. Any +2 group eligible.",
  alternates: { canonical: "https://cas.jkkn.ac.in/departments/self-finance/visual-communication" },
  openGraph: {
    title: "Department of Visual Communication | JKKN Arts & Science",
    description: "Department of Visual Communication (Self-Finance), JKKN College of Arts and Science (Autonomous), Komarapalayam: B.Sc Visual Communication (Viscom), Periyar University. Any +2 group eligible.",
    url: "https://cas.jkkn.ac.in/departments/self-finance/visual-communication",
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
        { name: "Visual Communication", url: "https://cas.jkkn.ac.in/departments/self-finance/visual-communication" },
      ]} />
      {children}
    </>
  );
}

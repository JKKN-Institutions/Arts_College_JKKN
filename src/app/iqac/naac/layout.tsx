import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NAAC Accreditation",
  description:
    "NAAC accreditation details and quality assessment of JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/iqac/naac",
  },
  openGraph: {
    title: "NAAC Accreditation | JKKN Arts & Science",
    description:
      "NAAC accreditation details and quality assessment of JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/iqac/naac",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        { name: "NAAC", url: "https://cas.jkkn.ac.in/iqac/naac" },
      ]} />
      {children}
    </>
  );
}

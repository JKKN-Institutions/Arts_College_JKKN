import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Us | JKKN College of Arts and Science",
  description:
    "Contact JKKN College of Arts and Science (Autonomous). Phone: +91 93458 55001. Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/contact",
  },
  openGraph: {
    title: "Contact Us | JKKN College of Arts and Science",
    description:
      "Contact JKKN College of Arts and Science (Autonomous). Phone: +91 93458 55001. Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183.",
    url: "https://cas.jkkn.ac.in/contact",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Contact", url: "https://cas.jkkn.ac.in/contact" },
      ]} />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  // GL1-08: the root layout appends a 35-character "| JKKN College of Arts and Science"
  // template to every child title, so "Contact Us" rendered as 45 characters of which 35
  // were the college name again. Worse, this page was acting as a second homepage:
  // measured GSC 2026-07-21..08-17, 680 of its 951 impressions were the query "jkkn
  // college of arts and science", converting at 0.3% while the homepage converted the
  // same query at 11.8%. `absolute` opts this one page out and leads with the intent.
  title: { absolute: "JKKN Arts & Science College Address & Contact Number" },
  description:
    "Address, phone and email for JKKN College of Arts and Science (Autonomous), Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/contact",
  },
  openGraph: {
    title: "JKKN Arts & Science College Address & Contact Number",
    description:
      "Address, phone and email for JKKN College of Arts and Science (Autonomous), Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183.",
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

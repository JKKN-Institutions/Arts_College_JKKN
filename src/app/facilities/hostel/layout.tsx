import type { Metadata } from 'next';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Hostel Accommodation | JKKN College of Arts and Science',
  description: 'Separate hostel facilities for boys and girls at JKKN College of Arts and Science. Safe, comfortable accommodation near Erode, Tamil Nadu.',
  alternates: { canonical: 'https://cas.jkkn.ac.in/facilities/hostel' },
  openGraph: {
    title: 'Hostel Accommodation | JKKN College of Arts and Science',
    description: 'Separate hostel facilities for boys and girls at JKKN College of Arts and Science. Safe, comfortable accommodation near Erode, Tamil Nadu.',
    url: 'https://cas.jkkn.ac.in/facilities/hostel',
    siteName: 'JKKN College of Arts and Science',
    type: 'website',
  },
};

export default function HostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        { name: "Hostel", url: "https://cas.jkkn.ac.in/facilities/hostel" },
      ]} />
      {children}
    </>
  );
}

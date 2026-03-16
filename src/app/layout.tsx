import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://cas.jkkn.ac.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "JKKN College of Arts and Science | Autonomous | 27+ Programmes | Near Erode, Tamil Nadu",
    template: "%s | JKKN College of Arts and Science",
  },
  description:
    "JKKN College of Arts and Science (Autonomous) offers 27+ UG, PG and PhD programmes in Arts, Science and Commerce. Highest package ₹18 LPA. Affiliated to Periyar University. Located near Erode, Tamil Nadu.",
  keywords: [
    "JKKN College of Arts and Science",
    "arts and science college near Erode",
    "autonomous college Namakkal",
    "best arts college Tamil Nadu",
    "JKKN CAS",
    "Periyar University affiliated college",
    "UG PG programmes Komarapalayam",
    "BCA college near Erode",
    "BSc college Namakkal",
    "BCom college Tamil Nadu",
  ],
  verification: {
    google: "ONbewRpXBBv1QVV7f0lrEarMUyhdD4n0X8xHflc77jc",
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "JKKN College of Arts and Science",
    title:
      "JKKN College of Arts and Science | Autonomous | 27+ Programmes",
    description:
      "Autonomous institution offering 27+ UG, PG and PhD programmes. Highest package ₹18 LPA. Affiliated to Periyar University, near Erode, Tamil Nadu.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JKKN College of Arts and Science | Autonomous | 27+ Programmes",
    description:
      "Autonomous institution offering 27+ UG, PG and PhD programmes. Highest package ₹18 LPA. Near Erode, Tamil Nadu.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className} suppressHydrationWarning>
        <OrganizationSchema />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}

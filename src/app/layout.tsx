import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";

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
      "JKKN College of Arts and Science | Autonomous | Erode, TN",
    template: "%s | JKKN College of Arts and Science",
  },
  description:
    "Autonomous college offering 27+ UG, PG & PhD programmes in Arts, Science & Commerce. Highest package ₹18 LPA. Near Erode, Tamil Nadu.",
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
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — Autonomous Institution near Erode, Tamil Nadu",
      },
    ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QW6LQV7XE5"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-QW6LQV7XE5');`}
        </Script>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}

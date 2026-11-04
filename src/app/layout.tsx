import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ConversionTracking } from "@/components/analytics/ConversionTracking";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://cas.jkkn.ac.in";

// ANALYTICS_OFF=1 at build time is for a LOCAL test build only (the 2026-11-04 test of the Call /
// WhatsApp gate runs `next start` on this laptop). Vercel never sets it.
const IS_PRODUCTION_BUILD =
  process.env.NODE_ENV === "production" && process.env.ANALYTICS_OFF !== "1";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Best Arts and Science College in Tamil Nadu | JKKN College (Autonomous)",
    template: "%s | JKKN College of Arts and Science",
  },
  description:
    "JKKN College of Arts and Science, Komarapalayam: autonomous, NAAC accredited (B), Periyar University. 35 UG, PG and PhD programmes near Erode, Tamil Nadu.",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "JKKN College of Arts and Science",
    title:
      "JKKN College of Arts and Science | Autonomous | 35 Programmes",
    description:
      "Autonomous institution offering 35 UG, PG and PhD programmes. Affiliated to Periyar University, near Erode, Tamil Nadu.",
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
      "JKKN College of Arts and Science | Autonomous | 35 Programmes",
    description:
      "Autonomous institution offering 35 UG, PG and PhD programmes. Near Erode, Tamil Nadu.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — Autonomous Institution near Erode, Tamil Nadu",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // iPhone Safari turns any phone number in plain text into a dial link of its own, which skipped
  // the Call / WhatsApp form gate (2026-11-04, same as the Dental site: those taps must also go
  // form -> dialer). Off here; EnquiryModal's plain-number tap listener takes those taps instead.
  formatDetection: { telephone: false },
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
    <html lang="en-IN" className={poppins.variable}>
      <body className={poppins.className} suppressHydrationWarning>
        {/* Analytics load only in a real production build (2026-11-04): a local test - the Call /
            WhatsApp gate test included - must not write test taps into the live GA4 property or the
            Meta pixel. Vercel production and preview builds are unaffected. */}
        {IS_PRODUCTION_BUILD && <GoogleAnalytics />}
        <ConversionTracking />
        {IS_PRODUCTION_BUILD && <MetaPixel />}
        <OrganizationSchema />
        <WebSiteSchema />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}

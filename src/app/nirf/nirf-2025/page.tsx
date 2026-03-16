import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NIRF 2025 | JKKN College of Arts and Science",
  description:
    "NIRF 2025 ranking data and institutional performance of JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/nirf/nirf-2025",
  },
  openGraph: {
    title: "NIRF 2025 | JKKN College of Arts and Science",
    description:
      "NIRF 2025 ranking data and institutional performance of JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/nirf/nirf-2025",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const nirfData = [
  { title: "OVERAll", pdfPath: "/documents/nirf/NIRF-2025-OVER-All.pdf" },
  { title: "SDG", pdfPath: "/documents/nirf/NIRF-2025-SDG.pdf" },
  { title: "NIRF 2025 COLLEGE", pdfPath: "/documents/nirf/NIRF-2025-COLLEGE.pdf" },
];

export default function Nirf2025Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "NIRF", url: "https://cas.jkkn.ac.in/nirf" },
        { name: "NIRF 2025", url: "https://cas.jkkn.ac.in/nirf/nirf-2025" },
      ]} />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-green flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-green font-medium">NIRF-2025</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          NIRF-2025
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {nirfData.map((item, index) => (
            <Link
              key={index}
              href={item.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-brand-green hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg p-8 h-full flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

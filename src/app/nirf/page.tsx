import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NIRF Rankings",
  description:
    "NIRF (National Institutional Ranking Framework) ranking data for JKKN College of Arts and Science — transparency in institutional performance and quality indicators.",
  alternates: { canonical: "https://cas.jkkn.ac.in/nirf" },
  openGraph: {
    title: "NIRF Rankings | JKKN Arts & Science",
    description:
      "NIRF (National Institutional Ranking Framework) ranking data for JKKN College of Arts and Science — transparency in institutional performance and quality indicators.",
    url: "https://cas.jkkn.ac.in/nirf",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function NirfPage() {
  return (
    <div className="bg-[#fbfbee] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "NIRF Rankings", url: "https://cas.jkkn.ac.in/nirf" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6d41] mb-2">
            Institutional Ranking
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
            NIRF Rankings
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mb-4" />
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
            The National Institutional Ranking Framework (NIRF) is a
            methodology adopted by the Ministry of Education, Government of
            India, to rank institutions of higher education. JKKN College
            of Arts and Science participates in NIRF to maintain full
            transparency in institutional performance, teaching quality, and
            research outcomes.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/nirf/nirf-2025"
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between group"
          >
            <div>
              <h2 className="text-lg font-semibold text-[#0b6d41] mb-2 group-hover:text-[#004d28] transition-colors">
                NIRF 2025
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                National Institutional Ranking Framework data for 2025
              </p>
            </div>
            <div className="mt-4 flex items-center text-[#0b6d41] font-medium text-sm">
              <span>View ranking data</span>
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

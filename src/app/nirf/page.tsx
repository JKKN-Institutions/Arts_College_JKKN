import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NIRF Submitted Data",
  description:
    "JKKN College of Arts and Science submitted its data to NIRF. Open the NIRF 2025 and NIRF 2026 data files the college filed with the ranking framework.",
  alternates: { canonical: "https://cas.jkkn.ac.in/nirf" },
  openGraph: {
    title: "NIRF Data | JKKN Arts & Science",
    description:
      "JKKN College of Arts and Science submitted its data to NIRF. Open the NIRF 2025 and NIRF 2026 data files the college filed with the ranking framework.",
    url: "https://cas.jkkn.ac.in/nirf",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

// Same files the site menu links under "NIRF 2026".
const nirf2026Files = [
  { label: "Overall", href: "/documents/nirf/J.K.K Nataraja College of Arts & Science20260402- Overall.pdf" },
  { label: "College", href: "/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-college.pdf" },
  { label: "SDG", href: "/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-  Sustainable Institutions.pdf" },
];

export default function NirfPage() {
  return (
    <div className="bg-[#fbfbee] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "NIRF Data", url: "https://cas.jkkn.ac.in/nirf" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6d41] mb-2">
            Data submitted to NIRF
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
            NIRF Data
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mb-4" />
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
            The National Institutional Ranking Framework (NIRF) is a
            methodology adopted by the Ministry of Education, Government of
            India, to rank institutions of higher education. JKKN College
            of Arts and Science submitted its data to NIRF 2025 and NIRF 2026.
            The files linked below are the data the college filed.
          </p>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed mt-3">
            UGC, NAAC, AICTE and university details, each with its official
            source:{" "}
            <Link href="/approvals" className="font-medium text-[#0b6d41] underline underline-offset-2">
              Approvals &amp; Official Data
            </Link>
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
                Data submitted to NIRF 2025
              </p>
            </div>
            <div className="mt-4 flex items-center text-[#0b6d41] font-medium text-sm">
              <span>View submitted data</span>
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0b6d41] mb-2">
                NIRF 2026
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Data submitted to NIRF 2026
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm font-medium text-[#0b6d41]">
              {nirf2026Files.map((file) => (
                <li key={file.href}>
                  <a
                    href={file.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-[#004d28]"
                  >
                    {file.label}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

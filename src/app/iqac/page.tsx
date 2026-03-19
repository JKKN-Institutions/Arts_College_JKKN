import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "IQAC",
  description:
    "Internal Quality Assurance Cell — ensuring continuous quality improvement in teaching, learning, and governance at JKKN College of Arts and Science.",
  alternates: { canonical: "https://cas.jkkn.ac.in/iqac" },
  openGraph: {
    title: "IQAC | JKKN Arts & Science",
    description:
      "Internal Quality Assurance Cell — ensuring continuous quality improvement in teaching, learning, and governance at JKKN College of Arts and Science.",
    url: "https://cas.jkkn.ac.in/iqac",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const cards = [
  {
    href: "/iqac/objectives-functions",
    label: "Objectives & Functions",
    description:
      "IQAC objectives and quality improvement functions",
  },
  {
    href: "/iqac/vision-mission",
    label: "Vision & Mission",
    description:
      "Quality assurance vision and mission statements",
  },
  {
    href: "/iqac/role-responsibilities",
    label: "Roles & Responsibilities",
    description:
      "IQAC committee members and their responsibilities",
  },
  {
    href: "/iqac/minutes-of-meeting",
    label: "Minutes of Meeting",
    description:
      "Records of IQAC meetings and decisions",
  },
  {
    href: "/iqac/naac",
    label: "NAAC Accreditation",
    description:
      "NAAC accreditation status and quality assessment reports",
  },
];

export default function IqacPage() {
  return (
    <div className="bg-[#fbfbee] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6d41] mb-2">
            Quality Assurance
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
            IQAC
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mb-4" />
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Internal Quality Assurance Cell — ensuring continuous quality
            improvement in teaching, learning, and governance at JKKN
            College of Arts and Science.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between group"
            >
              <div>
                <h2 className="text-lg font-semibold text-[#0b6d41] mb-2 group-hover:text-[#004d28] transition-colors">
                  {card.label}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-[#0b6d41] font-medium text-sm">
                <span>View details</span>
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

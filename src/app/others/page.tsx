import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Other Pages",
  description:
    "Access the academic calendar, privacy policy, and other useful information from JKKN College of Arts and Science.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/others",
  },
  openGraph: {
    title: "Other Pages | JKKN College of Arts and Science",
    description:
      "Access the academic calendar, privacy policy, and other useful information from JKKN College of Arts and Science.",
    url: "https://cas.jkkn.ac.in/others",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const pages = [
  {
    title: "Academic Calendar",
    description:
      "View the current academic calendar and important dates including examination schedules, holidays, and semester timelines.",
    href: "/others/academic-calendar",
    label: "Academic",
  },
  {
    title: "Privacy Policy",
    description:
      "Our privacy policy and data protection practices — how we collect, use, and safeguard your personal information.",
    href: "/others/privacy-policy",
    label: "Legal",
  },
];

export default function OthersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Others", url: "https://cas.jkkn.ac.in/others" },
        ]}
      />

      <div className="bg-[#fbfbee] min-h-screen">
        {/* Page Header */}
        <section className="bg-[#0b6d41] py-14 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-widest mb-3">
              Resources
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Other Pages
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto text-base sm:text-lg">
              Useful resources including the academic calendar, policies, and
              institutional information.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow p-6 flex flex-col group"
              >
                {/* Label Badge */}
                <span className="inline-block text-xs font-semibold text-[#0b6d41] bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-4 self-start">
                  {page.label}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-[#0b6d41] transition-colors mb-2">
                  {page.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 flex-1 mb-5">
                  {page.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0b6d41] group-hover:gap-2.5 transition-all">
                  View Page
                  <ArrowRight className="w-4 h-4 text-[#ffde59] group-hover:text-[#0b6d41] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "IQAC Minutes of Meeting",
  description:
    "IQAC meeting minutes and resolutions at JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/iqac/minutes-of-meeting",
  },
  openGraph: {
    title: "IQAC Minutes of Meeting | JKKN Arts & Science",
    description:
      "IQAC meeting minutes and resolutions at JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/iqac/minutes-of-meeting",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

// Meeting data with years and PDF paths
const minutesData = [
  { year: "2022-2023", pdfPath: "/documents/Minutes-IQAC-Meeting/Minutes-of-Meeting-2022-2023.pdf" },
  { year: "2020-2021", pdfPath: "/documents/Minutes-IQAC-Meeting/Minutes-of-Meetings-2020-2021.pdf" },
  { year: "2019-2020", pdfPath: "/documents/Minutes-IQAC-Meeting/Minutes-of-IQAC-Meetings-2019-2020.pdf" },
  { year: "2018-2019", pdfPath: "/documents/Minutes-IQAC-Meeting/Minutes-of-Meeting-2018-2019.pdf" },
];

export default function MinutesOfMeetingPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        { name: "Minutes of Meeting", url: "https://cas.jkkn.ac.in/iqac/minutes-of-meeting" },
      ]} />
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-brand-green hover:text-brand-green/80 transition-colors flex items-center"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link
            href="/iqac"
            className="text-brand-green hover:text-brand-green/80 transition-colors"
          >
            IQAC
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Minutes of IQAC Meeting</span>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
            Minutes of IQAC Meeting
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Access minutes from Internal Quality Assurance Cell meetings for different academic years.
          </p>
        </header>

        {/* Cards Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {minutesData.map((meeting) => (
            <Link
              key={meeting.year}
              href={meeting.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={`View Minutes of IQAC meeting for ${meeting.year}`}
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full flex flex-col cursor-pointer hover:shadow-xl hover:border-brand-green hover:scale-[1.02] transition-all duration-300">
                {/* Icon */}
                <div className="bg-brand-green/10 rounded-full p-4 mb-4 w-fit">
                  <FileText className="text-brand-green h-8 w-8" aria-hidden="true" />
                </div>

                {/* Title */}
                <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-4 flex-grow">
                  Minutes of IQAC meeting - {meeting.year}
                </h2>

                {/* Metadata Badge and Arrow */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-brand-yellow/20 text-brand-green px-4 py-1.5 rounded-full text-sm font-semibold">
                    {meeting.year}
                  </span>
                  <ArrowRight
                    className="text-brand-green h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Information Notice */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-gray-700 text-sm">
            <strong className="text-brand-green">Note:</strong> Click on any card to view or download the meeting minutes PDF for the respective academic year.
          </p>
        </div>
      </div>
    </main>
  );
}

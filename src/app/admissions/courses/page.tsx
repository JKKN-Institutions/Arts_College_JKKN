import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Award } from "lucide-react";

import {
  getAllProgrammes,
  type ProgrammeInfo,
} from "@/data/programme-metadata";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Course-wise Admissions 2026-27 | JKKN College of Arts & Science",
  description:
    "Browse course-wise admission pages for all UG, PG and PhD programmes at JKKN College of Arts and Science (Autonomous). Eligibility, fees, seats and apply now — near Erode, Tamil Nadu.",
  keywords: [
    "course-wise admission",
    "JKKN course admission",
    "UG admission near Erode",
    "PG admission Tamil Nadu",
    "PhD admission Periyar University",
    "arts and science college admission",
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/admissions/courses`,
  },
  openGraph: {
    title:
      "Course-wise Admissions 2026-27 | JKKN College of Arts & Science",
    description:
      "Browse course-wise admission pages for all UG, PG and PhD programmes at JKKN College of Arts and Science.",
    url: `https://${siteConfig.domain}/admissions/courses`,
    siteName: siteConfig.name,
    type: "website",
  },
};

type GroupKey =
  | "aided-ug"
  | "aided-pg"
  | "aided-phd"
  | "sf-ug"
  | "sf-pg";

const GROUP_META: Record<
  GroupKey,
  { title: string; description: string; icon: typeof GraduationCap }
> = {
  "aided-ug": {
    title: "Aided UG Programmes",
    description:
      "Government-aided 3-year undergraduate degrees in Arts, Science and Commerce.",
    icon: GraduationCap,
  },
  "aided-pg": {
    title: "Aided PG Programmes",
    description:
      "Postgraduate master's programmes with research orientation and university affiliation.",
    icon: BookOpen,
  },
  "aided-phd": {
    title: "Aided Ph.D. Programmes",
    description:
      "Doctoral research programmes in core sciences and humanities.",
    icon: Award,
  },
  "sf-ug": {
    title: "Self-Finance UG Programmes",
    description:
      "Industry-focused undergraduate programmes in technology, management and applied sciences.",
    icon: GraduationCap,
  },
  "sf-pg": {
    title: "Self-Finance PG Programmes",
    description:
      "Advanced postgraduate programmes designed for career growth and specialisation.",
    icon: BookOpen,
  },
};

function getGroupKey(info: ProgrammeInfo): GroupKey {
  if (info.category === "Aided") {
    if (info.level === "UG") return "aided-ug";
    if (info.level === "PG") return "aided-pg";
    return "aided-phd";
  }
  if (info.level === "UG") return "sf-ug";
  return "sf-pg";
}

export default function CoursewiseAdmissionsIndexPage() {
  const grouped: Record<GroupKey, ProgrammeInfo[]> = {
    "aided-ug": [],
    "aided-pg": [],
    "aided-phd": [],
    "sf-ug": [],
    "sf-pg": [],
  };

  for (const { info } of getAllProgrammes()) {
    grouped[getGroupKey(info)].push(info);
  }

  const orderedGroups: GroupKey[] = [
    "aided-ug",
    "aided-pg",
    "aided-phd",
    "sf-ug",
    "sf-pg",
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `https://${siteConfig.domain}` },
          {
            name: "Admissions",
            url: `https://${siteConfig.domain}/admissions`,
          },
          {
            name: "Course-wise Admissions",
            url: `https://${siteConfig.domain}/admissions/courses`,
          },
        ]}
      />

      <main className="bg-[#fbfbee] min-h-screen">
        {/* Page Header */}
        <section className="bg-[#0b6d41] py-14 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-widest mb-3">
              Admissions 2026-27
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Course-wise Admissions
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto text-base sm:text-lg">
              Pick your programme and view course-specific eligibility, fees,
              seats and admission timeline. Apply online or contact the
              admissions office near Erode.
            </p>
          </div>
        </section>

        {/* Groups */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
          {orderedGroups.map((key) => {
            const group = GROUP_META[key];
            const programmes = grouped[key];
            if (programmes.length === 0) return null;

            const Icon = group.icon;

            return (
              <div key={key}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0b6d41]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#0b6d41]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0b6d41]">
                      {group.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{group.description}</p>
                    <span className="inline-block mt-2 text-xs font-semibold text-[#0b6d41] bg-green-50 border border-green-200 rounded-full px-3 py-1">
                      {programmes.length} programmes
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {programmes.map((info) => (
                    <Link
                      key={info.slug}
                      href={`/admissions/${info.slug}`}
                      className="bg-white rounded-xl border border-gray-200 hover:border-[#0b6d41]/30 hover:shadow-lg transition-all p-5 group flex flex-col"
                    >
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0b6d41] transition mb-1.5">
                        {info.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {info.fullName}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-gray-500">
                          {info.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0b6d41]">
                          Apply
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Contact CTA */}
        <section className="bg-[#0b6d41] py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need help choosing a programme?
            </h2>
            <p className="text-green-100 mb-6">
              Talk to our admissions team for personalized guidance based on
              your interests and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white text-[#0b6d41] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Call {siteConfig.phone.replace(/^\+91/, "+91 ")}
              </a>
              <a
                href={siteConfig.admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffde59] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#fcd340] transition inline-flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

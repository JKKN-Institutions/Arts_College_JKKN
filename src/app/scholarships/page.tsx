import type { Metadata } from "next";
import { Award, GraduationCap, Users, BookOpen, Trophy, Microscope } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Scholarships — JKKN College of Arts and Science",
  description:
    "Scholarship opportunities at JKKN College of Arts and Science (Autonomous). Government scholarships for BC, MBC, SC, ST students, merit-based scholarships, research fellowships and financial aid.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/scholarships",
  },
  openGraph: {
    title: "Scholarships | JKKN Arts & Science",
    description:
      "Government scholarships, merit-based awards, research fellowships and financial aid at JKKN College of Arts and Science (Autonomous).",
    url: "https://cas.jkkn.ac.in/scholarships",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const scholarshipCategories = [
  {
    title: "Government Scholarships",
    icon: Users,
    description:
      "Tamil Nadu government scholarships available for eligible students through the State Scholarship Portal. The college actively assists students through the entire application process.",
    scholarships: [
      {
        name: "BC Scholarship",
        eligibility: "Students belonging to the Backward Caste (BC) community",
      },
      {
        name: "MBC Scholarship",
        eligibility: "Students belonging to the Most Backward Caste (MBC) community",
      },
      {
        name: "SC Scholarship",
        eligibility: "Students belonging to the Scheduled Caste (SC) community",
      },
      {
        name: "ST Scholarship",
        eligibility: "Students belonging to the Scheduled Tribe (ST) community",
      },
    ],
  },
  {
    title: "Merit-Based Scholarships",
    icon: Award,
    description:
      "Scholarships awarded to students who demonstrate outstanding academic performance. The college recognises and supports academic toppers.",
    scholarships: [
      {
        name: "Merit Scholarship",
        eligibility: "Academic toppers with consistent high scores across semesters",
      },
      {
        name: "First-Generation Graduate Scholarship",
        eligibility:
          "Students who are the first in their family to pursue higher education",
      },
    ],
  },
  {
    title: "Concessions & Financial Aid",
    icon: GraduationCap,
    description:
      "Special concessions and financial assistance for students with exceptional achievements or economic need.",
    scholarships: [
      {
        name: "Sports Quota Concession",
        eligibility:
          "Students with state or national level sports achievements",
      },
      {
        name: "NCC Cadet Concession",
        eligibility: "Students enrolled in the National Cadet Corps (NCC)",
      },
      {
        name: "Financial Aid",
        eligibility:
          "Students from economically weaker sections requiring support to continue education",
      },
      {
        name: "Educational Loan Facilitation",
        eligibility:
          "All students — the institution facilitates educational loans through partner banks",
      },
    ],
  },
  {
    title: "Research Fellowships (Ph.D.)",
    icon: Microscope,
    description:
      "Research fellowships for PhD scholars providing monthly stipends and support for research grants and project funding.",
    scholarships: [
      {
        name: "UGC NET-JRF",
        eligibility:
          "PhD scholars who qualify the UGC National Eligibility Test — Junior Research Fellowship",
      },
      {
        name: "CSIR-JRF",
        eligibility:
          "PhD scholars in Science who qualify the CSIR Junior Research Fellowship",
      },
      {
        name: "DBT-JRF",
        eligibility:
          "PhD scholars in Biotechnology who qualify the DBT Junior Research Fellowship",
      },
      {
        name: "ICMR-JRF",
        eligibility:
          "PhD scholars in Medical/Health Sciences who qualify the ICMR Junior Research Fellowship",
      },
    ],
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Scholarships", url: "https://cas.jkkn.ac.in/scholarships" },
        ]}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{ backgroundColor: "#eaf1e2" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <Award className="w-4 h-4 text-[#0b6d41]" />
                Financial Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b6d41] mb-6">
                Scholarships
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                JKKN College of Arts and Science (Autonomous) is committed to
                making quality education accessible. We support students through
                government scholarships, merit awards, concessions, and research
                fellowships.
              </p>
            </div>
          </div>
        </section>

        {/* Scholarship Categories */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {scholarshipCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#0b6d41]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-5 h-5 text-[#0b6d41]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0b6d41] text-white">
                          <th className="text-left px-6 py-3.5 text-sm font-bold uppercase tracking-wider border-r border-white/20 w-64">
                            Scholarship
                          </th>
                          <th className="text-left px-6 py-3.5 text-sm font-bold uppercase tracking-wider">
                            Eligibility
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.scholarships.map((item, idx) => (
                          <tr
                            key={item.name}
                            className={
                              idx % 2 === 0 ? "bg-white" : "bg-[#fbfbee]"
                            }
                          >
                            <td className="px-6 py-4 font-semibold text-[#0b6d41] border-r border-gray-100 text-sm align-top">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                              {item.eligibility}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 bg-[#0b6d41]/5 rounded-xl p-5 border border-[#0b6d41]/10">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-800">Note:</strong> The college
                assists students through the entire scholarship application
                process including the State Scholarship Portal. For details on
                eligibility and application procedures, contact the admissions
                office at{" "}
                <a
                  href="tel:+919345855001"
                  className="text-[#0b6d41] font-medium hover:underline"
                >
                  +91 93458 55001
                </a>{" "}
                or{" "}
                <a
                  href="mailto:arts@jkkn.ac.in"
                  className="text-[#0b6d41] font-medium hover:underline"
                >
                  arts@jkkn.ac.in
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

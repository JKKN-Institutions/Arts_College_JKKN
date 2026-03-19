import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Academic departments offering quality education across Arts, Science, Commerce, and Technology at JKKN College of Arts and Science.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/departments",
  },
  openGraph: {
    title: "Departments | JKKN College of Arts and Science",
    description:
      "Academic departments offering quality education across Arts, Science, Commerce, and Technology at JKKN College of Arts and Science.",
    url: "https://cas.jkkn.ac.in/departments",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const aidedDepartments = [
  { name: "Botany", href: "/departments/aided/botany" },
  { name: "Chemistry", href: "/departments/aided/chemistry" },
  { name: "Commerce", href: "/departments/aided/commerce" },
  { name: "Computer Science", href: "/departments/aided/computer-science" },
  { name: "Economics", href: "/departments/aided/economics" },
  { name: "English", href: "/departments/aided/english" },
  { name: "Geography", href: "/departments/aided/geography" },
  { name: "History", href: "/departments/aided/history" },
  { name: "Library", href: "/departments/aided/library" },
  { name: "Mathematics", href: "/departments/aided/mathematics" },
  { name: "Physical Education", href: "/departments/aided/physical-education" },
  { name: "Physics", href: "/departments/aided/physics" },
  { name: "Tamil", href: "/departments/aided/tamil" },
  { name: "Zoology", href: "/departments/aided/zoology" },
];

const sfDepartments = [
  { name: "AI & Data Science", href: "/departments/self-finance/ai-data-science" },
  { name: "Business Administration", href: "/departments/self-finance/business-administration" },
  { name: "Commerce", href: "/departments/self-finance/commerce" },
  { name: "Computer Applications", href: "/departments/self-finance/computer-applications" },
  { name: "Computer Science", href: "/departments/self-finance/computer-science" },
  { name: "Cyber Security", href: "/departments/self-finance/cyber-security" },
  { name: "English", href: "/departments/self-finance/english" },
  { name: "Mathematics", href: "/departments/self-finance/mathematics" },
  { name: "Microbiology", href: "/departments/self-finance/microbiology" },
  { name: "Physics", href: "/departments/self-finance/physics" },
  { name: "Tamil", href: "/departments/self-finance/tamil" },
  { name: "Textile & Fashion Designing", href: "/departments/self-finance/textile-fashion-designing" },
  { name: "Visual Communication", href: "/departments/self-finance/visual-communication" },
];

export default function DepartmentsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Departments", url: "https://cas.jkkn.ac.in/departments" },
        ]}
      />

      <div className="bg-[#fbfbee] min-h-screen">
        {/* Page Header */}
        <section className="bg-[#0b6d41] py-14 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-widest mb-3">
              Academic Departments
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Departments
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto text-base sm:text-lg">
              Dedicated departments across Arts, Science, Commerce, and Technology
              — staffed by experienced faculty committed to academic excellence.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
          {/* Aided Departments */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-8 bg-[#ffde59] rounded-full" />
              <h2 className="text-xl font-bold text-[#0b6d41] uppercase tracking-wide">
                Aided Departments
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aidedDepartments.map((dept) => (
                <Link
                  key={dept.href}
                  href={dept.href}
                  className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow p-6 flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Aided
                    </p>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#0b6d41] transition-colors">
                      Dept. of {dept.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#ffde59] group-hover:text-[#0b6d41] flex-shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Self-Finance Departments */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-8 bg-[#ffde59] rounded-full" />
              <h2 className="text-xl font-bold text-[#0b6d41] uppercase tracking-wide">
                Self-Finance Departments
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sfDepartments.map((dept) => (
                <Link
                  key={dept.href}
                  href={dept.href}
                  className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow p-6 flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Self-Finance
                    </p>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#0b6d41] transition-colors">
                      Dept. of {dept.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#ffde59] group-hover:text-[#0b6d41] flex-shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

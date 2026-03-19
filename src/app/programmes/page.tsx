import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore 27+ UG, PG and PhD programmes in Arts, Science, Commerce and Management at JKKN College of Arts and Science.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes",
  },
  openGraph: {
    title: "Programmes | JKKN College of Arts and Science",
    description:
      "Explore 27+ UG, PG and PhD programmes in Arts, Science, Commerce and Management at JKKN College of Arts and Science.",
    url: "https://cas.jkkn.ac.in/programmes",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const aidedUG = [
  { name: "B.A. English", href: "/programmes/aided/ug/ba-english" },
  { name: "B.A. History", href: "/programmes/aided/ug/ba-history" },
  { name: "B.Sc. Chemistry", href: "/programmes/aided/ug/bsc-chemistry" },
  { name: "B.Sc. Mathematics", href: "/programmes/aided/ug/bsc-maths" },
  { name: "B.Sc. Zoology", href: "/programmes/aided/ug/bsc-zoology" },
  { name: "B.Com", href: "/programmes/aided/ug/bcom" },
];

const aidedPG = [
  { name: "MCA", href: "/programmes/aided/pg/mca" },
  { name: "M.Sc. Chemistry", href: "/programmes/aided/pg/msc-chemistry" },
  { name: "M.Sc. Computer Science", href: "/programmes/aided/pg/msc-computer-science" },
  { name: "M.Sc. Physics", href: "/programmes/aided/pg/msc-physics" },
  { name: "M.Sc. Zoology", href: "/programmes/aided/pg/msc-zoology" },
  { name: "M.A. History", href: "/programmes/aided/pg/ma-history" },
  { name: "M.Com", href: "/programmes/aided/pg/mcom" },
];

const aidedPhD = [
  { name: "Ph.D. Chemistry", href: "/programmes/aided/phd/chemistry" },
  { name: "Ph.D. Zoology", href: "/programmes/aided/phd/zoology" },
  { name: "Ph.D. Tamil", href: "/programmes/aided/phd/tamil" },
];

const sfUG = [
  { name: "BBA", href: "/programmes/self-finance/ug/bba" },
  { name: "BCA", href: "/programmes/self-finance/ug/bca" },
  { name: "B.Sc. Computer Science", href: "/programmes/self-finance/ug/bsc-computer-science" },
  { name: "B.Sc. AI & Data Science", href: "/programmes/self-finance/ug/bsc-ai-ds" },
  { name: "B.Com (Computer Applications)", href: "/programmes/self-finance/ug/bcom-ca" },
  { name: "B.Sc. Physics", href: "/programmes/self-finance/ug/bsc-physics" },
  { name: "B.Sc. Microbiology", href: "/programmes/self-finance/ug/bsc-microbiology" },
  { name: "B.Sc. Visual Communication", href: "/programmes/self-finance/ug/bsc-visual-communication" },
  { name: "B.Sc. Textile & Fashion Designing", href: "/programmes/self-finance/ug/bsc-textile-fashion-designing" },
  { name: "B.A. English", href: "/programmes/self-finance/ug/ba-english" },
  { name: "B.Com Banking & Insurance", href: "/programmes/self-finance/ug/bcom-banking-insurance" },
  { name: "B.Com Accounting & Finance", href: "/programmes/self-finance/ug/bcom-accounting-finance" },
  { name: "B.Sc. CS (Cyber Security)", href: "/programmes/self-finance/ug/bsc-cs-cyber-security" },
];

const sfPG = [
  { name: "M.A. English", href: "/programmes/self-finance/pg/ma-english" },
  { name: "M.Sc. Computer Science", href: "/programmes/self-finance/pg/msc-computer-science" },
  { name: "M.Sc. Mathematics", href: "/programmes/self-finance/pg/msc-mathematics" },
  { name: "M.Sc. CS (Data Analytics)", href: "/programmes/self-finance/pg/msc-cs-data-analytics" },
  { name: "M.Com", href: "/programmes/self-finance/pg/mcom" },
];

const categories = [
  {
    title: "Aided UG Programmes",
    badge: "6 Programmes",
    description: "Government-aided undergraduate degrees in Arts, Science, and Commerce.",
    programmes: aidedUG,
    accent: "#0b6d41",
  },
  {
    title: "Aided PG Programmes",
    badge: "7 Programmes",
    description: "Postgraduate programmes with deep research orientation and university affiliation.",
    programmes: aidedPG,
    accent: "#0b6d41",
  },
  {
    title: "Aided Ph.D. Programmes",
    badge: "3 Disciplines",
    description: "Doctoral research programmes in core science and humanities disciplines.",
    programmes: aidedPhD,
    accent: "#0b6d41",
  },
  {
    title: "Self-Finance UG Programmes",
    badge: "13 Programmes",
    description: "Industry-focused undergraduate programmes in technology, management, and applied sciences.",
    programmes: sfUG,
    accent: "#0b6d41",
  },
  {
    title: "Self-Finance PG Programmes",
    badge: "5 Programmes",
    description: "Advanced postgraduate courses designed for career growth and specialisation.",
    programmes: sfPG,
    accent: "#0b6d41",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
        ]}
      />

      <div className="bg-[#fbfbee] min-h-screen">
        {/* Page Header */}
        <section className="bg-[#0b6d41] py-14 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-widest mb-3">
              Academic Programmes
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Programmes Offered
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto text-base sm:text-lg">
              Explore 27+ UG, PG and Ph.D. programmes in Arts, Science, Commerce
              and Management — aided and self-finance streams available.
            </p>
          </div>
        </section>

        {/* Category Cards */}
        <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                {/* Badge */}
                <span className="inline-block text-xs font-semibold text-[#0b6d41] bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-3 self-start">
                  {cat.badge}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold text-[#0b6d41] mb-2">
                  {cat.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">{cat.description}</p>

                {/* Programme sub-links */}
                <ul className="space-y-1 flex-1">
                  {cat.programmes.map((prog) => (
                    <li key={prog.href}>
                      <Link
                        href={prog.href}
                        className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#0b6d41] transition-colors group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#ffde59] group-hover:text-[#0b6d41] flex-shrink-0" />
                        {prog.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

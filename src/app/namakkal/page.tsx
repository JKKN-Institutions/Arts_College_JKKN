import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CourseSchema } from "@/components/seo/CourseSchema";
import ViewProgrammesButton from "@/components/ViewProgrammesButton";
import {
  MapPin,
  Bus,
  Train,
  Plane,
  Home,
  GraduationCap,
  BookOpen,
  Banknote,
  TrendingUp,
  Leaf,
  Users,
  FlaskConical,
  BarChart2,
  Briefcase,
  Monitor,
  Activity,
  Wifi,
  Mountain,
  Target,
  Star,
  Award,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export const metadata: Metadata = {
  title: "Arts and Science College in Namakkal District | JKKN CAS",
  description:
    "JKKN College of Arts & Science — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 80%+ placements. Admissions 2026-27 open.",
  keywords: [
    "arts and science college in Namakkal district",
    "best college in Namakkal district",
    "JKKN CAS Namakkal",
    "college Namakkal district",
    "affordable college in Namakkal district",
    "BCA BBA B.Com B.Sc Namakkal district",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/namakkal",
  },
  openGraph: {
    title: "Arts and Science College in Namakkal District | JKKN CAS",
    description:
      "JKKN CAS in Komarapalayam — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 80%+ placements. Admissions 2026-27.",
    url: "https://cas.jkkn.ac.in/namakkal",
    siteName: "JKKN College of Arts and Science",
    type: "website",
    images: [
      {
        url: "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — modern classroom facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arts and Science College in Namakkal District | JKKN CAS",
    description: "JKKN CAS in Namakkal District — 34 programmes, NAAC-accredited, 80%+ placements. Admissions 2026-27 open.",
  },
};

export default function NamakkalPage() {
  const faqs = [
    {
      q: "What is the best arts and science college in Namakkal district?",
      a: "JKKN College of Arts and Science in Komarapalayam is Namakkal District's most programme-diverse arts and science institution — 34 programmes, NAAC-accredited, affiliated to Periyar and Bharathiar Universities, with 80%+ placement rates.",
    },
    {
      q: "How far is JKKN College from Namakkal?",
      a: "JKKN College of Arts and Science is located in Komarapalayam, Namakkal District — approximately 66 kilometres from Namakkal town and 22 kilometres from Erode via NH-544.",
    },
    {
      q: "Which courses are popular among Namakkal students at JKKN CAS?",
      a: "B.Com and BCA are the most popular choices among Namakkal students, given the district's growing commercial activity. BBA and B.Sc programmes are also in high demand. JKKN CAS offers 34 programmes across aided and self-finance streams — including B.Sc specialisations, M.Sc, MCA, and Ph.D programmes.",
    },
    {
      q: "Can BCA students from Namakkal get IT jobs?",
      a: "Yes. BCA graduates from JKKN CAS are placed at companies like TCS, Infosys BPO, and other IT firms. Namakkal's growing connectivity to Salem and Coimbatore IT hubs means BCA students have access to a wide job market. The college provides placement training, aptitude coaching, and mock interviews.",
    },
    {
      q: "Are JKKN CAS fees affordable for Namakkal families?",
      a: "Yes. JKKN CAS fees are among the most affordable in Namakkal district — significantly lower than private colleges elsewhere. Government scholarships (BC/MBC/SC/ST) and merit-based concessions are available. Contact the admission office at +91 9345855001 for the full fee structure.",
    },
    {
      q: "Does JKKN CAS provide hostel for Namakkal district students?",
      a: "Yes. JKKN CAS offers separate hostel facilities for boys and girls with furnished rooms, meals, Wi-Fi, and 24-hour security. Contact the admission office for availability and fees.",
    },
    {
      q: "How can I apply for admission at JKKN CAS?",
      a: "You can apply online through the official website at https://cas.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
    },
    {
      q: "Is there a bus from Namakkal district to JKKN CAS?",
      a: "JKKN CAS is in Namakkal District at Komarapalayam on NH-544. College transport and local buses connect the campus from Tiruchengode, Sankari, and surrounding Namakkal District towns.",
    },
    {
      q: "How much does the hostel cost for Namakkal district students at JKKN?",
      a: "Since JKKN CAS is in Namakkal District, many students from surrounding taluks commute daily. Hostel facilities with meals, Wi-Fi, and security are available. Call +91 9345855001 for fees.",
    },
    {
      q: "Why should Namakkal district students choose JKKN CAS?",
      a: "JKKN CAS is Namakkal District's most comprehensive arts and science college — 34 programmes, NAAC accreditation, 80%+ placements, 7-college campus group with a 500-bed hospital, and direct NH-544 access from Erode and Tiruchengode.",
    },
  ];

  return (
    <main>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Namakkal", url: "https://cas.jkkn.ac.in/namakkal" },
      ]} />
      <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "JKKN College of Arts and Science",
            "url": "https://cas.jkkn.ac.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Natarajapuram, NH-544, Komarapalayam",
              "addressLocality": "Komarapalayam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638183",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Namakkal District",
              "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.44518,
              "longitude": 77.726549
            }
          })
        }}
      />
      <CourseSchema
        name="B.Sc (Various Specialisations)"
        description="3-year undergraduate science programme with specialisations in Chemistry, Mathematics, Zoology, Physics, Microbiology, Computer Science, and more at JKKN CAS in Namakkal district."
        duration="PT3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-chemistry"
      />
      <CourseSchema
        name="B.Com (Bachelor of Commerce)"
        description="3-year undergraduate commerce programme with strong industry exposure and placement support at JKKN CAS, located in the heart of Namakkal district."
        duration="PT3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bcom"
      />
      <CourseSchema
        name="BBA (Bachelor of Business Administration)"
        description="3-year undergraduate management programme building future business leaders, offered at JKKN CAS, located in Komarapalayam, Namakkal District."
        duration="PT3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bba"
      />
      <CourseSchema
        name="BCA (Bachelor of Computer Applications)"
        description="3-year undergraduate IT programme with hands-on training and 80%+ placement rate at JKKN CAS, Namakkal District's most programme-diverse arts and science college."
        duration="PT3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bca"
      />

      {/* Hero Section */}
      <section aria-label="Hero" className="relative bg-gradient-to-br from-[#002309] via-[#006837] to-[#002309] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006837]/60 via-[#002309]/80 to-black/90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 text-sm text-white/90 mb-8 bg-white/10 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4" />
            <span>UGC, NAAC Approved • Admissions Open</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Arts and Science College in Namakkal District
            <br />
            <span className="text-[#7cb983]">JKKN CAS, Komarapalayam</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            JKKN College of Arts and Science is Namakkal District's most
            programme-diverse institution — 34 UG, PG, M.Phil, and Ph.D
            programmes, NAAC-accredited, on NH-544 at Komarapalayam with 80%+
            placement support.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10">
            {[
              { value: "80%+", label: "PLACEMENTS" },
              { value: "5-7", label: "LPA HIGHEST" },
              { value: "34", label: "PROGRAMMES" },
              { value: "74+", label: "YEARS LEGACY" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 mt-1 tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-8 py-3 rounded-full text-base transition-colors w-full sm:w-auto text-center"
            >
              Apply Now — 2026-27
            </a>
            <a
              href="tel:+919345855001"
              className="bg-[#006837] hover:bg-[#002309] text-white font-semibold px-8 py-3 rounded-full text-base transition-colors w-full sm:w-auto text-center"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="relative bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="bg-[#FBFBEE] text-[#006837] font-semibold px-3 py-1 rounded-full text-xs">
                ✓ UGC
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="bg-[#FBFBEE] text-[#006837] font-semibold px-3 py-1 rounded-full text-xs">
                ✓ NAAC
              </span>
            </span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="text-gray-500 text-xs sm:text-sm">
              Affiliated to Periyar University / Bharathiar University
            </span>
          </div>
        </div>
      </section>

      {/* Campus Location Card */}
      <section aria-label="Campus Location — Namakkal District" className="bg-[#FBFBEE] py-10 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-12 h-12 text-[#006837] flex-shrink-0" />
              <div>
                <div className="font-bold text-gray-800 text-base sm:text-lg">
                  Namakkal District Campus
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Komarapalayam, NH-544 — 22 km from Erode • 15 km from Tiruchengode
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/bsLumyHe3JeaTAZ18"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006837] hover:bg-[#002309] text-white text-center px-4 py-4 rounded-xl text-sm font-medium transition-colors flex-shrink-0 flex flex-col items-center gap-1 min-w-[90px] w-full sm:w-auto"
            >
              <MapPin className="w-5 h-5" />
              <span>View on Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Namakkal Students Choose JKKN CAS */}
      <section aria-label="Why choose JKKN" className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why JKKN CAS Is Namakkal's Top Choice
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              JKKN CAS is in Namakkal District at Komarapalayam on NH-544 — the
              district's most programme-diverse arts and science institution.
              Students from Tiruchengode, Sankari, and across Namakkal District
              access world-class education with hostel or daily commute options.
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                Icon: BookOpen,
                title: "Wide Range",
                desc: "Wide range of UG and PG programmes — something for every student",
              },
              {
                Icon: Banknote,
                title: "Affordable Fees",
                desc: "Affordable fees compared to city-based colleges",
              },
              {
                Icon: TrendingUp,
                title: "High Demand",
                desc: "BCA and B.Com are in high demand — strong employability",
              },
              {
                Icon: Leaf,
                title: "Green Campus",
                desc: "Green, spacious campus with modern library and computer labs",
              },
              {
                Icon: Users,
                title: "Student Life",
                desc: "Cultural activities, NSS, NCC, and active student clubs",
              },
              {
                Icon: Bus,
                title: "Easy Commute",
                desc: "On NH-544 in Namakkal District. College transport from Tiruchengode, Sankari, and nearby towns — daily commute or hostel, your choice.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#FBFBEE] rounded-2xl p-6 text-center flex flex-col items-center gap-3"
              >
                <item.Icon className="w-8 h-8 text-[#006837]" />
                <div className="font-bold text-gray-800">{item.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Offered */}
      <section aria-label="Programmes offered" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Programmes in Namakkal District
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Choose the right programme for your career goals
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                Icon: FlaskConical,
                name: "B.Sc (various specialisations)",
                duration: "3 years",
                level: "UG",
                intake: "200+ seats",
                eligibility: "10+2 with relevant subjects",
                href: "/programmes/aided/ug/bsc-chemistry",
              },
              {
                Icon: BarChart2,
                name: "B.Com",
                duration: "3 years",
                level: "UG",
                intake: "150 seats",
                eligibility: "10+2 (Commerce preferred)",
                href: "/programmes/aided/ug/bcom",
              },
              {
                Icon: Briefcase,
                name: "BBA (Bachelor of Business Administration)",
                duration: "3 years",
                level: "UG",
                intake: "60 seats",
                eligibility: "10+2 (any stream)",
                href: "/programmes/self-finance/ug/bba",
              },
              {
                Icon: Monitor,
                name: "BCA (Bachelor of Computer Applications)",
                duration: "3 years",
                level: "UG",
                intake: "60 seats",
                eligibility: "10+2 with Maths",
                href: "/programmes/self-finance/ug/bca",
              },
            ].map((prog) => (
              <div
                key={prog.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col"
              >
                <div className="mb-3">
                  <prog.Icon className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-4 leading-snug">
                  {prog.name}
                </h3>
                <div className="space-y-2 text-sm flex-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-gray-700 font-medium">
                      {prog.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level</span>
                    <span className="text-gray-700 font-medium">
                      {prog.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Intake</span>
                    <span className="text-gray-700 font-medium">
                      {prog.intake}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
                  {prog.eligibility}
                </div>
                <Link
                  href={prog.href}
                  className="mt-3 text-[#006837] hover:text-[#004d28] font-medium text-sm text-center transition-colors"
                >
                  View Programme Details →
                </Link>
                <a
                  href="tel:+919345855001"
                  className="mt-2 bg-[#FBFBEE] hover:bg-[#7cb983]/20 text-[#006837] font-medium text-sm px-4 py-2.5 rounded-xl text-center transition-colors"
                >
                  Call Us
                </a>
              </div>
            ))}
          </div>

          {/* Complete Programme List */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
              All 34 Programmes Available in Namakkal District
            </h3>
            <p className="text-gray-500 text-sm text-center mb-8">
              Grouped by stream — click any programme for full details
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Aided UG */}
              <div>
                <h4 className="text-xs font-bold text-[#006837] tracking-wider mb-3 uppercase">Aided — UG</h4>
                <ul className="space-y-1.5">
                  {[
                    { name: "B.A. English", href: "/programmes/aided/ug/ba-english" },
                    { name: "B.A. History", href: "/programmes/aided/ug/ba-history" },
                    { name: "B.Com", href: "/programmes/aided/ug/bcom" },
                    { name: "B.Sc Chemistry", href: "/programmes/aided/ug/bsc-chemistry" },
                    { name: "B.Sc Mathematics", href: "/programmes/aided/ug/bsc-maths" },
                    { name: "B.Sc Zoology", href: "/programmes/aided/ug/bsc-zoology" },
                  ].map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} className="text-sm text-gray-600 hover:text-[#006837] flex items-center gap-1.5 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Self-Finance UG */}
              <div>
                <h4 className="text-xs font-bold text-[#006837] tracking-wider mb-3 uppercase">Self-Finance — UG</h4>
                <ul className="space-y-1.5">
                  {[
                    { name: "B.A. English", href: "/programmes/self-finance/ug/ba-english" },
                    { name: "BBA", href: "/programmes/self-finance/ug/bba" },
                    { name: "BCA", href: "/programmes/self-finance/ug/bca" },
                    { name: "B.Com (Accounting & Finance)", href: "/programmes/self-finance/ug/bcom-accounting-finance" },
                    { name: "B.Com (Banking & Insurance)", href: "/programmes/self-finance/ug/bcom-banking-insurance" },
                    { name: "B.Com (CA)", href: "/programmes/self-finance/ug/bcom-ca" },
                    { name: "B.Sc (AI & Data Science)", href: "/programmes/self-finance/ug/bsc-ai-ds" },
                    { name: "B.Sc Computer Science", href: "/programmes/self-finance/ug/bsc-computer-science" },
                    { name: "B.Sc (Cyber Security)", href: "/programmes/self-finance/ug/bsc-cs-cyber-security" },
                    { name: "B.Sc Microbiology", href: "/programmes/self-finance/ug/bsc-microbiology" },
                    { name: "B.Sc Physics", href: "/programmes/self-finance/ug/bsc-physics" },
                    { name: "B.Sc Textile & Fashion Design", href: "/programmes/self-finance/ug/bsc-textile-fashion-designing" },
                    { name: "B.Sc Visual Communication", href: "/programmes/self-finance/ug/bsc-visual-communication" },
                  ].map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} className="text-sm text-gray-600 hover:text-[#006837] flex items-center gap-1.5 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PG + Ph.D */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#006837] tracking-wider mb-3 uppercase">Aided — PG</h4>
                  <ul className="space-y-1.5">
                    {[
                      { name: "M.A. History", href: "/programmes/aided/pg/ma-history" },
                      { name: "MCA", href: "/programmes/aided/pg/mca" },
                      { name: "M.Com", href: "/programmes/aided/pg/mcom" },
                      { name: "M.Sc Chemistry", href: "/programmes/aided/pg/msc-chemistry" },
                      { name: "M.Sc Computer Science", href: "/programmes/aided/pg/msc-computer-science" },
                      { name: "M.Sc Physics", href: "/programmes/aided/pg/msc-physics" },
                      { name: "M.Sc Zoology", href: "/programmes/aided/pg/msc-zoology" },
                    ].map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="text-sm text-gray-600 hover:text-[#006837] flex items-center gap-1.5 transition-colors">
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#006837] tracking-wider mb-3 uppercase">Self-Finance — PG</h4>
                  <ul className="space-y-1.5">
                    {[
                      { name: "M.A. English", href: "/programmes/self-finance/pg/ma-english" },
                      { name: "M.Com", href: "/programmes/self-finance/pg/mcom" },
                      { name: "M.Sc Computer Science", href: "/programmes/self-finance/pg/msc-computer-science" },
                      { name: "M.Sc (Data Analytics)", href: "/programmes/self-finance/pg/msc-cs-data-analytics" },
                      { name: "M.Sc Mathematics", href: "/programmes/self-finance/pg/msc-mathematics" },
                    ].map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="text-sm text-gray-600 hover:text-[#006837] flex items-center gap-1.5 transition-colors">
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#006837] tracking-wider mb-3 uppercase">Research — Ph.D</h4>
                  <ul className="space-y-1.5">
                    {[
                      { name: "Ph.D Chemistry", href: "/programmes/aided/phd/chemistry" },
                      { name: "Ph.D Tamil", href: "/programmes/aided/phd/tamil" },
                      { name: "Ph.D Zoology", href: "/programmes/aided/phd/zoology" },
                    ].map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="text-sm text-gray-600 hover:text-[#006837] flex items-center gap-1.5 transition-colors">
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section aria-label="Placement highlights" className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Where Namakkal Graduates Are Working Now
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Our placement cell connects you with India&apos;s top employers
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "80%+", label: "PLACEMENT RATE" },
              { value: "5-7", label: "LPA HIGHEST" },
              { value: "2-3.5", label: "LPA AVERAGE" },
              { value: "7+", label: "TOP RECRUITERS" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-100 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#006837]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-2 tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="text-xs text-gray-400 font-semibold tracking-widest mb-4">
              COMPANIES THAT HIRE FROM US
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TCS",
                "Infosys BPO",
                "HDFC Bank",
                "ICICI Bank",
                "Amazon",
                "Flipkart",
                "Jio",
              ].map((company) => (
                <span
                  key={company}
                  className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section aria-label="Admission process" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How to Apply — Admission Process
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              5 simple steps to start your journey at JKKN CAS
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Visit Website or Campus",
                desc: "Explore programmes, facilities, and campus life at cas.jkkn.ac.in or visit the campus in person for a tour.",
              },
              {
                step: 2,
                title: "Fill the Application Form",
                desc: "Apply online at admission.jkkn.ac.in or collect the application form from the campus admission office.",
              },
              {
                step: 3,
                title: "Submit Documents",
                desc: "Upload or submit 10th and 12th mark sheets, transfer certificate, community certificate, and passport-size photos.",
              },
              {
                step: 4,
                title: "Counseling & Seat Allocation",
                desc: "Attend the counseling session (in-person or online). Seats are allotted based on eligibility and availability.",
              },
              {
                step: 5,
                title: "Fee Payment & Enrollment",
                desc: "Pay the semester fees, collect your ID card, and complete enrollment. Hostel booking available at this stage.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-4"
              >
                <div className="bg-[#006837] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-8 py-3 rounded-full text-base transition-colors"
            >
              Apply Online Now
            </a>
            <a
              href="tel:+919345855001"
              className="bg-[#006837] hover:bg-[#002309] text-white font-semibold px-8 py-3 rounded-full text-base transition-colors"
            >
              Call Admission Office
            </a>
          </div>
        </div>
      </section>

      {/* Scholarships & Financial Aid */}
      <section aria-label="Scholarships and financial aid" className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Scholarships &amp; Financial Aid
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Multiple scholarship options to make quality education affordable
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100">
              <Award className="w-8 h-8 text-[#006837] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Government Scholarships</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tamil Nadu government scholarships for BC, MBC, SC, and ST students.
                Covers tuition fees partially or fully depending on community and income.
                Applied through the State Scholarship Portal.
              </p>
            </div>
            <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100">
              <CheckCircle className="w-8 h-8 text-[#006837] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Merit-Based Concessions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fee concessions for students with outstanding academic performance in
                10th and 12th examinations. Sports achievers and NCC cadets may also
                be eligible for special concessions.
              </p>
            </div>
            <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100">
              <Banknote className="w-8 h-8 text-[#006837] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Affordable Fee Structure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                JKKN CAS fees are among the most affordable in the region — significantly
                lower than city-based private colleges. EMI payment options available.
                Contact the admission office for the complete fee breakdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach from Namakkal */}
      <section aria-label="How to reach" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How to Reach from Namakkal
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Multiple transport options to get to campus easily
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Route Header */}
            <div className="bg-[#006837] text-white px-6 py-4 flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-base">
                  Namakkal → JKKN CAS Campus
                </div>
                <div className="text-[#7cb983] text-sm">
                  Namakkal District • NH-544 Campus
                </div>
              </div>
            </div>

            {/* Route Details */}
            <div className="divide-y divide-gray-100">
              {[
                {
                  Icon: MapPin,
                  label: "ROUTE",
                  info: "NH-544 (Salem-Coimbatore Highway)",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Bus,
                  label: "BY BUS",
                  info: "Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Train,
                  label: "NEAREST RAILWAY STATION",
                  info: "Salem Junction (~40 km from campus)",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Plane,
                  label: "NEAREST AIRPORT",
                  info: "Coimbatore International Airport (Code: CJB) (~110 km)",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Home,
                  label: "CAMPUS ADDRESS",
                  info: (<address className="not-italic inline">JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183</address>),
                  bg: "bg-[#FBFBEE]",
                },
              ].map(({ Icon, label, info, bg }) => (
                <div key={label} className="flex items-start gap-4 px-6 py-4">
                  <div className={`${bg} p-2 rounded-lg flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-[#006837]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold tracking-wide mb-0.5">
                      {label}
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {info}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus & Facilities */}
      <section aria-label="Campus facilities" className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Campus &amp; Facilities
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Everything you need for a world-class education experience
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                Icon: FlaskConical,
                title: "Modern Labs",
                desc: "State-of-the-art laboratories and smart classrooms",
                bg: "bg-[#FBFBEE]",
              },
              {
                Icon: BookOpen,
                title: "Digital Library",
                desc: "Well-stocked library with digital access and journals",
                bg: "bg-[#FBFBEE]",
              },
              {
                Icon: Home,
                title: "Hostel",
                desc: "Separate hostels for boys and girls with mess facility",
                bg: "bg-[#FBFBEE]",
              },
              {
                Icon: Bus,
                title: "Transport",
                desc: "College buses connecting to Namakkal and surrounding areas",
                bg: "bg-[#FBFBEE]",
              },
              {
                Icon: Activity,
                title: "Sports",
                desc: "Playground, indoor games, gym, and annual sports events",
                bg: "bg-[#FBFBEE]",
              },
              {
                Icon: Wifi,
                title: "WiFi Campus",
                desc: "High-speed internet across the entire campus",
                bg: "bg-[#FBFBEE]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 border border-gray-100 rounded-2xl p-5"
              >
                <div className={`${item.bg} p-2.5 rounded-lg flex-shrink-0`}>
                  <item.Icon className="w-5 h-5 text-[#006837]" />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — hidden until real testimonials are collected */}
      {false && (
      <section className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Students from Namakkal Love JKKN CAS
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Hear from students who made the right choice
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-[#7cb983] text-5xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                [Student testimonial from Namakkal to be added here. Include
                their experience at JKKN CAS, what they liked about the campus,
                and their career outcomes.]
              </p>
              <div className="mt-4">
                <div className="font-bold text-gray-800 text-sm">
                  [Student Name]
                </div>
                <div className="text-gray-400 text-xs mt-0.5">
                  [Course], Batch of [Year] • Now at [Company]
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-[#7cb983] text-5xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                [Second student testimonial from Namakkal to be added here.
                Focus on the ease of commute/hostel life and the quality of
                education.]
              </p>
              <div className="mt-4">
                <div className="font-bold text-gray-800 text-sm">
                  [Student Name]
                </div>
                <div className="text-gray-400 text-xs mt-0.5">
                  [Course], Batch of [Year]
                </div>
              </div>
            </div>

            {/* Placeholder Card */}
            <div className="rounded-2xl p-6 border-2 border-dashed border-[#7cb983] bg-[#FBFBEE] flex items-center justify-center">
              <p className="text-[#006837] text-sm font-medium text-center leading-relaxed">
                Add 2-3 real student testimonials from Namakkal or nearby areas
                before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      <section aria-label="Frequently asked questions" className="bg-white py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Arts and Science College in Namakkal — Your Questions Answered
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-2xl px-5 data-[state=open]:border-[#7cb983] data-[state=open]:border-2 overflow-hidden"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-gray-800 text-left py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Explore More Cities */}
      <nav aria-label="Other city pages" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Explore More Cities
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Find the best arts and science college near your city
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { Icon: Bus, name: "Salem", km: "40-50 km", href: "/salem" },
              { Icon: Mountain, name: "Erode", km: "30-40 km", href: "/erode" },
              { Icon: Target, name: "Tiruppur", km: "80-90 km", href: "/tiruppur" },
              { Icon: Star, name: "Coimbatore", km: "100-110 km", href: "/coimbatore" },
            ].map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="bg-white rounded-2xl border border-gray-100 px-5 py-4 flex items-center gap-3 hover:border-[#7cb983] transition-colors"
              >
                <city.Icon className="w-5 h-5 text-[#006837] flex-shrink-0" />
                <span className="font-bold text-gray-800 text-sm flex-1">
                  {city.name}
                </span>
                <span className="text-gray-400 text-sm">{city.km}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <ViewProgrammesButton />
          </div>
        </div>
      </nav>
    </main>
  );
}

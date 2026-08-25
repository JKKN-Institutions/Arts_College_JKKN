import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
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
  title: "Arts and Science College near Bhavani | JKKN CAS",
  // 49 chars — within 60 limit

  description:
    "JKKN CAS — NAAC-accredited arts and science college ~4-5 km from Bhavani across the Cauvery bridge. 34 programmes, 90%+ placements. Admissions 2026–27.",
  // ~151 chars — within 155 limit

  keywords: [
    "arts and science college near bhavani",
    "colleges near bhavani",
    "best college near bhavani",
    "degree college near bhavani",
    "JKKN CAS Bhavani",
    "BCA college near Bhavani",
    "BBA college near Bhavani",
    "B.Com college near Bhavani",
    "affordable college near Bhavani",
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://cas.jkkn.ac.in/bhavani",
  },

  openGraph: {
    title: "Arts and Science College Near Bhavani — JKKN CAS",
    description:
      "JKKN CAS — NAAC-accredited, 34 programmes, 90%+ placements. Just ~4-5 km from Bhavani across the Cauvery bridge. Admissions open 2026–27.",
    url: "https://cas.jkkn.ac.in/bhavani",
    siteName: "JKKN College of Arts and Science",
    type: "website",
    images: [
      {
        url: "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — campus near Bhavani on NH-544",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arts and Science College Near Bhavani — JKKN CAS",
    description:
      "NAAC-accredited arts college ~4-5 km from Bhavani. 34 programmes, 90%+ placements, easy day-scholar commute. Admissions 2026–27 open.",
  },
};

export default function BhavaniPage() {
  const faqs = [
    {
      q: "What is the best arts and science college near Bhavani?",
      a: "JKKN College of Arts and Science, located just ~4-5 km from Bhavani across the Cauvery bridge in Komarapalayam, is a NAAC-accredited institution with 34 programmes and 90%+ placement rates. It is affiliated to Periyar University and Bharathiar University and approved by UGC. For Bhavani students it is effectively the nearest major arts and science college.",
    },
    {
      q: "How far is JKKN CAS from Bhavani?",
      a: "JKKN CAS is approximately 4-5 km from Bhavani — about 10-15 minutes by road. Bhavani and Komarapalayam are twin towns facing each other across the Cauvery river, connected by bridge. Town buses and autos cross the bridge continuously throughout the day, making the commute trivial.",
    },
    {
      q: "Is there a direct bus or auto from Bhavani to JKKN CAS?",
      a: "Yes. Continuous town buses and autos run between Bhavani and Komarapalayam across the Cauvery bridge throughout the day. All NH-544 corridor buses also stop at Komarapalayam. The JKKN campus sits directly on NH-544 at Natarajapuram, so the ~4-5 km journey takes just 10-15 minutes.",
    },
    {
      q: "Which courses are popular among Bhavani students at JKKN CAS?",
      a: "JKKN CAS near Bhavani offers BCA, BBA, B.Com, B.Sc across 8 specialisations, MCA, M.Com, M.Sc, and Ph.D programmes — 34 courses in total. All programmes are UGC-approved and affiliated to Periyar University or Bharathiar University. BCA and B.Com are the most popular among students from the Bhavani region.",
    },
    {
      q: "Are JKKN CAS fees affordable for Bhavani students?",
      a: "JKKN CAS fees are lower than most private colleges in Erode city. Tamil Nadu government scholarships for BC, MBC, SC, and ST students are available. Merit-based concessions are also offered. Contact the admission office at +91 9345855001 for the current fee structure.",
    },
    {
      q: "Does JKKN CAS provide hostel for Bhavani students?",
      a: "JKKN CAS provides separate hostel accommodation for boys and girls on the main campus, with furnished rooms, three meals per day, WiFi, and 24/7 security. That said, most Bhavani students commute daily as day scholars — the campus is just ~4-5 km away, a 10-15 minute ride across the Cauvery bridge.",
    },
    {
      q: "How can I apply for admission at JKKN CAS?",
      a: "Applications for JKKN CAS are submitted online at jkkn.ai/apply/jkkn-admission-2026 or in person at the campus admission office. Admissions for 2026–27 are currently open. Call +91 9345855001 for guidance on the application process.",
    },
    {
      q: "Is JKKN College of Arts and Science accredited?",
      a: "JKKN College of Arts and Science is NAAC-accredited and UGC-approved. The college is affiliated to Periyar University and Bharathiar University. It is part of the JKKN Group of Institutions, which includes 7 colleges, 2 schools, and a 500-bed teaching hospital.",
    },
    {
      q: "What placement rate does JKKN CAS achieve for Bhavani students?",
      a: "JKKN CAS achieves a 90%+ placement rate for graduating students. Recruiters include TCS, Infosys BPO, HDFC Bank, ICICI Bank, Amazon, Flipkart, and Jio. The highest package recorded is 5–7 LPA. The college provides dedicated placement training and aptitude coaching.",
    },
    {
      q: "Why should Bhavani students choose JKKN CAS over colleges in Erode city?",
      a: "For Bhavani students, JKKN CAS is just ~4-5 km away across the Cauvery bridge, while Erode city colleges are ~15-20 km away. JKKN offers NAAC accreditation, affordable fees, 34 programmes, and 90%+ placements with national recruiters — without the long daily commute. Hostel facilities are also available for those who prefer on-campus living.",
    },
  ];

  const schemaFaqs = [
    {
      question: "What is the best arts and science college near Bhavani?",
      answer:
        "JKKN College of Arts and Science, located approximately 4-5 km from Bhavani across the Cauvery bridge in Komarapalayam, is a NAAC-accredited institution with 34 programmes and 90%+ placement rates. It is affiliated to Periyar University and Bharathiar University and approved by UGC.",
    },
    {
      question: "How far is JKKN CAS from Bhavani?",
      answer:
        "JKKN CAS is approximately 4-5 km from Bhavani, about 10 to 15 minutes by road. Bhavani and Komarapalayam are twin towns facing each other across the Cauvery river, connected by bridge, with town buses and autos crossing continuously throughout the day.",
    },
    {
      question: "Is there a direct bus or auto from Bhavani to JKKN CAS?",
      answer:
        "Continuous town buses and autos run between Bhavani and Komarapalayam across the Cauvery bridge throughout the day. All NH-544 corridor buses also stop at Komarapalayam. The campus sits directly on NH-544 at Natarajapuram, so the journey takes 10 to 15 minutes.",
    },
    {
      question: "Does JKKN CAS offer hostel facilities for students from Bhavani?",
      answer:
        "JKKN CAS provides separate hostel accommodation for boys and girls on the main campus, with furnished rooms, three meals per day, WiFi, and 24/7 security. Most Bhavani students commute daily as day scholars since the campus is approximately 4-5 km away.",
    },
    {
      question: "Are fees at JKKN CAS affordable for Bhavani students?",
      answer:
        "JKKN CAS fees are lower than most private colleges in Erode city. Tamil Nadu government scholarships for BC, MBC, SC, and ST students are available, along with merit-based concessions. Contact the admission office at +91 9345855001 for the current fee structure.",
    },
    {
      question: "Is JKKN College of Arts and Science accredited?",
      answer:
        "JKKN College of Arts and Science is NAAC-accredited and UGC-approved. The college is affiliated to Periyar University and Bharathiar University. It is part of the JKKN Group of Institutions, which includes 7 colleges, 2 schools, and a 500-bed teaching hospital.",
    },
    {
      question: "What placement rate does JKKN CAS achieve for Bhavani students?",
      answer:
        "JKKN CAS achieves a 90%+ placement rate for graduating students. Recruiters include TCS, Infosys BPO, HDFC Bank, ICICI Bank, Amazon, Flipkart, and Jio. The highest package recorded is 5–7 LPA, with dedicated placement training and aptitude coaching provided.",
    },
    {
      question: "How can students from Bhavani apply to JKKN CAS?",
      answer:
        "Applications for JKKN CAS are submitted online at jkkn.ai/apply/jkkn-admission-2026 or in person at the campus admission office, a short ride from Bhavani across the Cauvery bridge. Admissions for 2026–27 are currently open. Call +91 9345855001 for guidance.",
    },
    {
      question: "Which courses are available at arts and science colleges near Bhavani?",
      answer:
        "JKKN CAS near Bhavani offers BCA, BBA, B.Com, B.Sc across 8 specialisations, MCA, M.Com, M.Sc, and Ph.D programmes — 34 courses in total. All programmes are UGC-approved and affiliated to Periyar University or Bharathiar University.",
    },
    {
      question: "Why should Bhavani students choose JKKN CAS over colleges in Erode city?",
      answer:
        "For Bhavani students, JKKN CAS is approximately 4-5 km away across the Cauvery bridge, while Erode city colleges are approximately 15-20 km away. JKKN offers NAAC accreditation, affordable fees, 34 programmes, and 90%+ placements without the long daily commute.",
    },
  ];

  return (
    <main>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Bhavani", url: "https://cas.jkkn.ac.in/bhavani" },
      ]} />
      <FAQSchema faqs={schemaFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Arts and Science College Near Bhavani — JKKN CAS",
            "url": "https://cas.jkkn.ac.in/bhavani",
            "description": "JKKN College of Arts and Science — NAAC-accredited arts and science college approximately 4-5 km from Bhavani across the Cauvery bridge. 34 programmes, 90%+ placements, hostel available.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "JKKN College of Arts and Science",
              "url": "https://cas.jkkn.ac.in"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cas.jkkn.ac.in" },
                { "@type": "ListItem", "position": 2, "name": "Bhavani", "item": "https://cas.jkkn.ac.in/bhavani" }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".snippet-answer-paragraph", "#faq-section"]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "JKKN College of Arts and Science",
            "alternateName": "JKKN CAS",
            "url": "https://cas.jkkn.ac.in",
            "foundingDate": "1952",
            "description": "JKKN College of Arts and Science is a NAAC-accredited institution on NH-544 in Komarapalayam, approximately 4-5 km from Bhavani across the Cauvery bridge, offering 34 UG, PG, and Ph.D programmes in arts, science, commerce, and computer applications, affiliated to Periyar University and Bharathiar University.",
            "telephone": "+919345855001",
            "email": "info@jkkn.ac.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Natarajapuram, NH-544, Komarapalayam",
              "addressLocality": "Komarapalayam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638183",
              "addressCountry": "IN"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Bhavani",
                "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
              },
              {
                "@type": "City",
                "name": "Komarapalayam",
                "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.44518,
              "longitude": 77.726549
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Programmes at JKKN CAS",
              "numberOfItems": 34
            },
            "accreditation": "NAAC Accredited",
            "memberOf": [
              { "@type": "Organization", "name": "University Grants Commission (UGC)" },
              { "@type": "Organization", "name": "Periyar University" },
              { "@type": "Organization", "name": "Bharathiar University" }
            ],
            "parentOrganization": {
              "@type": "Organization",
              "name": "JKKN Group of Institutions",
              "url": "https://jkkn.ac.in"
            },
            "sameAs": [
              "https://cas.jkkn.ac.in",
              "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7",
              "https://jkkn.ac.in"
            ]
          })
        }}
      />
      <CourseSchema
        name="B.Sc (Various Specialisations)"
        description="3-year undergraduate science programme with specialisations in Chemistry, Mathematics, Zoology, Physics, Microbiology, Computer Science, and more at JKKN CAS near Bhavani."
        duration="PT3Y"
        educationalLevel="UG"
        category="Aided"
        url="https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry"
      />
      <CourseSchema
        name="B.Com (Bachelor of Commerce)"
        description="3-year undergraduate commerce programme with strong industry exposure and placement support at JKKN CAS, just across the Cauvery bridge from Bhavani."
        duration="PT3Y"
        educationalLevel="UG"
        category="Aided"
        url="https://cas.jkkn.ac.in/programmes/aided/ug/bcom"
      />
      <CourseSchema
        name="BBA (Bachelor of Business Administration)"
        description="3-year undergraduate management programme building future business leaders, offered at JKKN CAS — approximately 4-5 km from Bhavani."
        duration="PT3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="https://cas.jkkn.ac.in/programmes/self-finance/ug/bba"
      />
      <CourseSchema
        name="BCA (Bachelor of Computer Applications)"
        description="3-year undergraduate IT programme with hands-on training and 90%+ placement rate at JKKN CAS, easily reachable from Bhavani."
        duration="PT3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="https://cas.jkkn.ac.in/programmes/self-finance/ug/bca"
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
            Arts and Science College near Bhavani — JKKN CAS
          </h1>

          {/* Featured Snippet Paragraph */}
          <h2 className="text-xl font-semibold text-white mb-3">
            Arts and Science College Near Bhavani — JKKN CAS
          </h2>
          <p className="snippet-answer-paragraph text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            JKKN College of Arts and Science, located approximately 4-5 km
            from Bhavani across the Cauvery bridge in Komarapalayam, is a
            NAAC-accredited institution offering 34 UG and PG programmes
            including BCA, BBA, B.Com, and B.Sc specialisations. Affiliated
            to Periyar University and Bharathiar University, it achieves 90%+
            placement rates with recruiters including TCS, Infosys, HDFC
            Bank, and Amazon.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bhavani and Komarapalayam are twin towns facing each other across
            the Cauvery river — JKKN CAS is just a 10-15 minute ride over the
            bridge. NAAC-accredited arts and science programmes with 90%+
            placement support, effectively the nearest major college for
            Bhavani students.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10">
            {[
              { value: "90%+", label: "PLACEMENTS" },
              { value: "5-7", label: "LPA HIGHEST" },
              { value: "5km", label: "FROM BHAVANI" },
              { value: "34", label: "PROGRAMMES" },
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bhavani"
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

      {/* Distance Card */}
      <section aria-label="Distance from Bhavani" className="bg-[#FBFBEE] py-10 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none">
                5<span className="text-2xl font-semibold text-[#006837]">km</span>
              </span>
              <div>
                <div className="font-bold text-gray-800 text-base sm:text-lg">
                  From Bhavani to JKKN CAS
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  ~4-5 km • 10-15 minutes across the Cauvery bridge — Bhavani and Komarapalayam are twin towns
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7"
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

      {/* Why Bhavani Students Choose JKKN CAS */}
      <section aria-label="Why choose JKKN" className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Learners from Bhavani Prefer JKKN CAS
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Bhavani — famous for Jamakkalam handloom carpet weaving and the
              Sangameshwarar Temple at Kooduthurai — sits directly across the
              Cauvery river from Komarapalayam. For Bhavani students, JKKN CAS
              is effectively the nearest major arts and science college: just
              ~4-5 km over the bridge, a trivial day-scholar commute.
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            JKKN College of Arts and Science (cas.jkkn.ac.in) is a NAAC-accredited institution established in 1952, located on NH-544 at Natarajapuram, Komarapalayam, Namakkal District, Tamil Nadu 638183. The college is affiliated to Periyar University and Bharathiar University and approved by UGC. It offers 34 programmes spanning UG, PG, and Ph.D levels across arts, science, commerce, and computer applications. The college is part of the JKKN Group of Institutions, which operates 7 colleges, 2 schools, and a 500-bed multi-specialty teaching hospital on a single campus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                Icon: BookOpen,
                title: "Wide Range",
                desc: "Wide range of UG and PG programmes — something for every learner",
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
                desc: "Green, spacious campus with modern learning commons and digital learning labs",
              },
              {
                Icon: Users,
                title: "Learner Life",
                desc: "Cultural activities, NSS, NCC, and active learner clubs",
              },
              {
                Icon: Bus,
                title: "Easy Commute",
                desc: "Just ~4-5 km from Bhavani across the Cauvery bridge — town buses and autos run continuously.",
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
              UG &amp; PG Programmes Near Bhavani
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
                name: "B.Sc College Near Bhavani — JKKN CAS",
                duration: "3 years",
                level: "UG",
                intake: "200+ seats",
                eligibility: "10+2 with relevant subjects",
                href: "/programmes/aided/ug/bsc-chemistry",
              },
              {
                Icon: BarChart2,
                name: "B.Com College Near Bhavani — JKKN CAS",
                duration: "3 years",
                level: "UG",
                intake: "150 seats",
                eligibility: "10+2 (Commerce preferred)",
                href: "/programmes/aided/ug/bcom",
              },
              {
                Icon: Briefcase,
                name: "BBA College Near Bhavani — JKKN CAS",
                duration: "3 years",
                level: "UG",
                intake: "60 seats",
                eligibility: "10+2 (any stream)",
                href: "/programmes/self-finance/ug/bba",
              },
              {
                Icon: Monitor,
                name: "BCA College Near Bhavani — JKKN CAS",
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
              All 34 Programmes Available Near Bhavani
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
              Where Bhavani Graduates Are Working Now
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Our placement cell connects you with India&apos;s top employers
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "90%+", label: "PLACEMENT RATE — 2024–25" },
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
            <div className="text-center mt-8">
              <Link href="/placements" className="text-[#006837] hover:text-[#004d28] font-medium text-sm">View Full Placement Report →</Link>
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
                desc: "Apply online at jkkn.ai/apply/jkkn-admission-2026 or collect the application form from the campus admission office.",
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bhavani"
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
                Tamil Nadu government scholarships for BC, MBC, SC, and ST learners.
                Covers tuition fees partially or fully depending on community and income.
                Applied through the State Scholarship Portal.
              </p>
            </div>
            <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100">
              <CheckCircle className="w-8 h-8 text-[#006837] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Merit-Based Concessions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fee concessions for learners with outstanding academic performance in
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

      {/* How to Reach from Bhavani */}
      <section aria-label="How to reach" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How to Reach from Bhavani
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
                  Bhavani → JKKN CAS Campus
                </div>
                <div className="text-[#7cb983] text-sm">
                  ~4-5 km • 10-15 minutes
                </div>
              </div>
            </div>

            {/* Route Details */}
            <div className="divide-y divide-gray-100">
              {[
                {
                  Icon: MapPin,
                  label: "ROUTE",
                  info: "Cross the Bhavani–Komarapalayam bridge; campus is on NH-544 at Natarajapuram",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Bus,
                  label: "BY BUS",
                  info: "Continuous town buses and autos between Bhavani and Komarapalayam; all NH-544 corridor buses stop at Komarapalayam",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Train,
                  label: "NEAREST RAILWAY STATION",
                  info: "Erode Junction (~22 km from campus)",
                  bg: "bg-[#FBFBEE]",
                },
                {
                  Icon: Plane,
                  label: "NEAREST AIRPORT",
                  info: "Coimbatore International Airport (Code: CJB) (~80 km)",
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
              Everything you need for a well-equipped education experience
            </p>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                Icon: FlaskConical,
                title: "Modern Learning Labs",
                desc: "State-of-the-art learning labs and smart learning studios",
                bg: "bg-[#FBFBEE]",
              },
              {
                Icon: BookOpen,
                title: "Digital Learning Commons",
                desc: "Well-stocked learning commons with digital access and journals",
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
                desc: "College buses connecting to Bhavani and surrounding areas",
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
          <div className="text-center mt-8">
            <Link href="/facilities" className="text-[#006837] hover:text-[#004d28] font-medium text-sm">Explore Campus Facilities →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials — hidden until real testimonials are collected */}
      {false && (
      <section className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Learners from Bhavani Love JKKN CAS
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Hear from learners who made the right choice
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
                [Learner testimonial from Bhavani to be added here. Include their
                experience at JKKN CAS, what they liked about the campus, and
                their career outcomes.]
              </p>
              <div className="mt-4">
                <div className="font-bold text-gray-800 text-sm">
                  [Learner Name]
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
                [Second learner testimonial from Bhavani to be added here. Focus
                on the ease of the short bridge commute and the quality of
                education.]
              </p>
              <div className="mt-4">
                <div className="font-bold text-gray-800 text-sm">
                  [Learner Name]
                </div>
                <div className="text-gray-400 text-xs mt-0.5">
                  [Course], Batch of [Year]
                </div>
              </div>
            </div>

            {/* Placeholder Card */}
            <div className="rounded-2xl p-6 border-2 border-dashed border-[#7cb983] bg-[#FBFBEE] flex items-center justify-center">
              <p className="text-[#006837] text-sm font-medium text-center leading-relaxed">
                Add 2-3 real learner testimonials from Bhavani or nearby areas
                before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Comparison Table */}
      <section aria-label="Comparison with Erode city colleges" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              JKKN CAS vs Travelling to Erode City Colleges — Quick Comparison
            </h2>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="p-3 text-left font-semibold">Feature</th>
                  <th className="p-3 text-left font-semibold">JKKN CAS</th>
                  <th className="p-3 text-left font-semibold">Typical Erode City College</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Accreditation</td>
                  <td className="p-3 text-gray-800 font-medium">NAAC Accredited, UGC Approved</td>
                  <td className="p-3 text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FBFBEE]">
                  <td className="p-3 text-gray-600">Distance from Bhavani</td>
                  <td className="p-3 text-gray-800 font-medium">~4-5 km across the Cauvery bridge</td>
                  <td className="p-3 text-gray-500">~15-20 km</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Placement Rate</td>
                  <td className="p-3 text-gray-800 font-medium">90%+</td>
                  <td className="p-3 text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FBFBEE]">
                  <td className="p-3 text-gray-600">Key Recruiters</td>
                  <td className="p-3 text-gray-800 font-medium">TCS, Infosys, HDFC, Amazon</td>
                  <td className="p-3 text-gray-500">Local / regional</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Campus Type</td>
                  <td className="p-3 text-gray-800 font-medium">Residential + Day Scholar</td>
                  <td className="p-3 text-gray-500">Day Scholar only (most)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FBFBEE]">
                  <td className="p-3 text-gray-600">Hostel</td>
                  <td className="p-3 text-gray-800 font-medium">Available (boys + girls)</td>
                  <td className="p-3 text-gray-500">Limited</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600">Programmes</td>
                  <td className="p-3 text-gray-800 font-medium">34 (UG + PG + Ph.D)</td>
                  <td className="p-3 text-gray-500">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" aria-label="Frequently asked questions" className="bg-white py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Arts and Science College near Bhavani — Your Questions Answered
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
              { Icon: MapPin, name: "Komarapalayam", km: "Campus town", href: "/komarapalayam" },
              { Icon: MapPin, name: "Pallipalayam", km: "~14 km", href: "/pallipalayam" },
              { Icon: MapPin, name: "Sankagiri", km: "~15-20 km", href: "/sankagiri" },
              { Icon: MapPin, name: "Tiruchengode", km: "~20 km", href: "/tiruchengode" },
              { Icon: MapPin, name: "Erode", km: "~22 km", href: "/erode" },
              { Icon: MapPin, name: "Perundurai", km: "~27-30 km", href: "/perundurai" },
              { Icon: MapPin, name: "Gobichettipalayam", km: "~35-40 km", href: "/gobichettipalayam" },
              { Icon: MapPin, name: "Salem", km: "~40-50 km", href: "/salem" },
              { Icon: MapPin, name: "Namakkal", km: "~55-60 km", href: "/namakkal" },
              { Icon: MapPin, name: "Rasipuram", km: "~60 km", href: "/rasipuram" },
              { Icon: MapPin, name: "Tiruppur", km: "~80-90 km", href: "/tiruppur" },
              { Icon: MapPin, name: "Coimbatore", km: "~100-110 km", href: "/coimbatore" },
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
      <p className="text-xs text-gray-400 text-center py-4">Page last updated: July 2026</p>
    </main>
  );
}

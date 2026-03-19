import type { Metadata } from "next";
import {
  GraduationCap,
  FileText,
  ClipboardCheck,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Admissions 2026 — Apply Now",
  description:
    "Apply to JKKN College of Arts and Science (Autonomous). 27+ UG, PG & PhD programmes. Admission process, eligibility, documents & dates. Near Erode, TN.",
  keywords: [
    "JKKN College admission",
    "arts and science college admission near Erode",
    "CAS JKKN admission 2026",
    "college admission Namakkal",
    "Periyar University affiliated admission",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/admissions",
  },
  openGraph: {
    title: "Admissions 2026 — Apply Now | JKKN Arts & Science",
    description:
      "Apply to JKKN College of Arts and Science (Autonomous). 27+ programmes, step-by-step process, eligibility and documents.",
    url: "https://cas.jkkn.ac.in/admissions",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const admissionFAQs = [
  {
    question:
      "What are the eligibility criteria for UG programmes at JKKN College of Arts and Science?",
    answer:
      "Candidates must have passed the Higher Secondary Examination (12th standard) from a recognized board with relevant subjects. Minimum percentage requirements vary by programme — typically 50% aggregate for aided programmes and 45% for self-finance programmes. Contact the admissions office for programme-specific eligibility details.",
  },
  {
    question: "How can I apply for admission to JKKN CAS?",
    answer:
      "You can apply online through the JKKN admissions portal at admission.jkkn.ac.in or visit the campus in person. Fill out the application form, upload required documents, and pay the application fee. Our admissions team will guide you through every step.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Required documents include: 10th and 12th mark sheets and certificates, transfer certificate from the previous institution, community certificate (for reservation category), Aadhaar card, 4 passport-size photographs, migration certificate (if applicable), and income certificate (for scholarship applicants).",
  },
  {
    question: "Does JKKN College offer scholarships?",
    answer:
      "Yes, JKKN College of Arts and Science offers merit-based scholarships for academic toppers. Students can also avail government scholarships including BC/MBC/SC/ST scholarships and first-generation graduate scholarships. The college assists students with all scholarship application processes.",
  },
  {
    question:
      "What is the fee structure for programmes at JKKN College of Arts and Science?",
    answer:
      "Fee structures vary by programme and category (Aided vs Self-Finance). Aided programmes have government-regulated fees that are significantly lower. Self-finance programmes have competitive fees with flexible payment options. Contact the admissions office at +91 93458 55001 for detailed fee information.",
  },
  {
    question: "Is hostel accommodation available for outstation students?",
    answer:
      "Yes, JKKN provides separate hostel facilities for boys and girls with 24/7 security, hygienic mess, Wi-Fi connectivity, and recreational areas. Hostel admission is on a first-come, first-served basis. Transport facilities are also available from Erode, Salem, Namakkal and surrounding areas.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description:
      "Review the eligibility criteria for your chosen programme. UG requires 12th pass, PG requires relevant bachelor's degree, PhD requires master's degree with qualifying score.",
    icon: ClipboardCheck,
  },
  {
    step: 2,
    title: "Fill Application Form",
    description:
      "Complete the online application form at admission.jkkn.ac.in with your personal details, academic history, and programme preference. You can also apply in person at the campus.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Submit Documents",
    description:
      "Upload or submit required documents including mark sheets, transfer certificate, community certificate, Aadhaar card, photographs, and income certificate.",
    icon: BookOpen,
  },
  {
    step: 4,
    title: "Merit List & Counselling",
    description:
      "Shortlisted candidates are notified based on merit. Attend the counselling session for programme allocation and seat confirmation at the campus.",
    icon: Users,
  },
  {
    step: 5,
    title: "Pay Fees & Confirm Admission",
    description:
      "Complete the fee payment to confirm your admission. Collect your admission letter, student ID, and hostel allotment (if applicable). Welcome to JKKN!",
    icon: Award,
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Admission at JKKN College of Arts and Science",
  description:
    "Step-by-step guide to apply for admission at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University, near Erode, Tamil Nadu.",
  totalTime: "P7D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: "500",
  },
  step: admissionSteps.map((s) => ({
    "@type": "HowToStep",
    position: s.step,
    name: s.title,
    text: s.description,
  })),
};

export default function AdmissionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FAQSchema faqs={admissionFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Admissions", url: "https://cas.jkkn.ac.in/admissions" },
        ]}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{ backgroundColor: "#eaf1e2" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <Calendar className="w-4 h-4 text-[#0b6d41]" />
                Admissions Open 2026-27
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b6d41] mb-6">
                Admissions at JKKN College of Arts and Science
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Join an autonomous institution offering 27+ programmes in Arts,
                Science and Commerce. Affiliated to Periyar University with
                strong placement support and campus facilities near Erode, Tamil
                Nadu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0b6d41] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#095c37] transition text-center inline-flex items-center justify-center gap-2"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919345855001"
                  className="bg-white text-[#0b6d41] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition border border-gray-300 text-center inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Programmes", value: "27+", icon: GraduationCap },
                { label: "Highest Package", value: "₹18 LPA", icon: Award },
                { label: "Placement Rate", value: "95%+", icon: Users },
                {
                  label: "Status",
                  value: "Autonomous",
                  icon: CheckCircle2,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#fbfbee] rounded-2xl p-6 text-center border border-gray-100"
                >
                  <item.icon className="w-8 h-8 text-[#0b6d41] mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-[#0b6d41]">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process — HowTo */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <FileText className="w-3.5 h-3.5" />
                Step-by-Step Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Apply for Admission
              </h2>
              <p className="text-lg text-gray-600">
                Follow these 5 simple steps to secure your seat at JKKN College
                of Arts and Science
              </p>
            </div>

            <div className="space-y-6">
              {admissionSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b6d41] text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-[#0b6d41]" />
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Documents Required
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "10th Mark Sheet and Certificate",
                "12th / HSC Mark Sheet and Certificate",
                "Transfer Certificate (TC)",
                "Community Certificate",
                "Aadhaar Card (photocopy)",
                "4 Passport-Size Photographs",
                "Migration Certificate (if applicable)",
                "Income Certificate (for scholarships)",
                "UG Degree Certificate (for PG admission)",
                "PG Degree Certificate (for PhD admission)",
              ].map((doc) => (
                <div
                  key={doc}
                  className="flex items-center gap-3 bg-[#fbfbee] rounded-xl p-4 border border-gray-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0b6d41] flex-shrink-0" />
                  <span className="text-gray-800">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programmes Overview */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Programmes Offered
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#0b6d41]/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#0b6d41]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Undergraduate (UG)
                </h3>
                <p className="text-gray-600 mb-4">
                  3-year degree programmes in Arts, Science, Commerce and
                  Computer Applications
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> B.A.
                    English, History
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> B.Sc.
                    Chemistry, Physics, Zoology, Maths
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> B.Com,
                    BBA, BCA
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> B.Sc.
                    AI & Data Science, Cyber Security
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> B.Sc.
                    Visual Communication, Fashion Design
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#0b6d41]/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#0b6d41]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Postgraduate (PG)
                </h3>
                <p className="text-gray-600 mb-4">
                  2-year master&apos;s programmes with research orientation and
                  specializations
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> M.A.
                    History, English
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> M.Sc.
                    Chemistry, Physics, Zoology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> M.Sc.
                    Computer Science, Data Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> M.Com,
                    MCA
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> M.Sc.
                    Mathematics
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#0b6d41]/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#0b6d41]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Doctoral (Ph.D.)
                </h3>
                <p className="text-gray-600 mb-4">
                  Research programmes leading to Doctor of Philosophy degree
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> Ph.D.
                    Chemistry
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> Ph.D.
                    Tamil
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" /> Ph.D.
                    Zoology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Admission FAQs
            </h2>
            <div className="space-y-4">
              {admissionFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-[#fbfbee] rounded-xl border border-gray-200 group"
                >
                  <summary className="px-6 py-4 cursor-pointer text-base font-semibold text-gray-900 hover:text-[#0b6d41] transition list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-[#0b6d41] text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-[#0b6d41] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Get in touch with our admissions team for personalized guidance on
              choosing the right programme for your career goals.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <a
                href="tel:+919345855001"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
              >
                <Phone className="w-6 h-6 mx-auto mb-3" />
                <div className="font-semibold">+91 93458 55001</div>
                <div className="text-sm text-white/70 mt-1">Call Us</div>
              </a>
              <a
                href="mailto:arts@jkkn.ac.in"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
              >
                <Mail className="w-6 h-6 mx-auto mb-3" />
                <div className="font-semibold">arts@jkkn.ac.in</div>
                <div className="text-sm text-white/70 mt-1">Email Us</div>
              </a>
              <a
                href="https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
              >
                <MapPin className="w-6 h-6 mx-auto mb-3" />
                <div className="font-semibold">Komarapalayam</div>
                <div className="text-sm text-white/70 mt-1">Visit Campus</div>
              </a>
            </div>
            <a
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition"
            >
              Apply for Admission <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

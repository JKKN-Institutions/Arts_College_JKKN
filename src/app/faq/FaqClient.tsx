"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "About the College",
    faqs: [
      {
        q: "What is JKKN College of Arts and Science?",
        a: "JKKN College of Arts and Science is an autonomous institution founded by J.K.K. Rangammal Charitable Trust, Komarapalayam. It was started as Alamelu Angappan College for Women in 1974 with the motto \"Love, Learn and Serve\" by philanthropist Kodaivallal J.K.K. Nataraja Chettiyar. The college converted to a co-educational institution in 2008 and is affiliated to Periyar University.",
      },
      {
        q: "Is JKKN College of Arts and Science an autonomous institution?",
        a: "Yes. JKKN College of Arts and Science is an autonomous institution affiliated to Periyar University. This grants the college the authority to design its own curriculum, conduct examinations, and award degrees under Periyar University.",
      },
      {
        q: "Who manages the college?",
        a: "The college is managed by J.K.K. Rangammal Charitable Trust, Komarapalayam. Smt. N. Sendamaraai serves as the Secretary, and Mr. Ommsharravana serves as the Managing Director, steering the institution with innovative ideas and untiring enthusiasm.",
      },
      {
        q: "What is the motto of JKKN College of Arts and Science?",
        a: "The motto of JKKN College of Arts and Science is \"Love, Learn and Serve\".",
      },
      {
        q: "Is JKKN College a donation-free institution?",
        a: "Yes. JKKN College of Arts and Science is a proud donation-free institution that offers merit-based admissions to all students.",
      },
    ],
  },
  {
    category: "Programmes & Courses",
    faqs: [
      {
        q: "How many programmes does JKKN College of Arts and Science offer?",
        a: "The college offers 27+ programmes across UG, PG, and PhD levels in Arts, Science, and Commerce disciplines — including both Government-Aided and Self-Finance streams.",
      },
      {
        q: "What Aided UG programmes are available?",
        a: "Aided UG programmes include: B.A. English, B.A. History, B.Com, B.Sc. Chemistry, B.Sc. Mathematics, and B.Sc. Zoology — all 3-year programmes affiliated to Periyar University.",
      },
      {
        q: "What Self-Finance UG programmes are available?",
        a: "Self-Finance UG programmes include: BBA, BCA, B.Sc. Computer Science, B.Sc. AI & Data Science, B.Sc. CS (Cyber Security), B.Sc. Microbiology, B.Sc. Physics, B.Sc. Textile & Fashion Designing, B.Sc. Visual Communication, B.A. English, B.Com (Accounting & Finance), B.Com (Banking & Insurance), and B.Com (Computer Applications) — all 3-year programmes.",
      },
      {
        q: "What PG programmes are offered?",
        a: "Aided PG programmes: M.A. History, MCA, M.Com, M.Sc. Chemistry, M.Sc. Computer Science, M.Sc. Physics, M.Sc. Zoology. Self-Finance PG programmes: M.A. English, M.Com, M.Sc. Computer Science, M.Sc. CS (Data Analytics), M.Sc. Mathematics — all 2-year programmes.",
      },
      {
        q: "Are PhD programmes available?",
        a: "Yes. PhD programmes in Chemistry, Tamil, and Zoology are available under the Aided category, affiliated to Periyar University. The duration is 3–5 years.",
      },
      {
        q: "What is the difference between Aided and Self-Finance programmes?",
        a: "Aided programmes are government-funded with government-regulated, significantly lower fees. Self-Finance programmes are institution-funded with competitive fees and flexible payment options. Both streams offer degrees affiliated to Periyar University with the same quality of education.",
      },
      {
        q: "What is the duration of UG, PG, and PhD programmes?",
        a: "UG programmes are 3 years. PG programmes are 2 years. PhD programmes take 3–5 years depending on the research area.",
      },
    ],
  },
  {
    category: "Admissions & Eligibility",
    faqs: [
      {
        q: "What are the eligibility criteria for UG programmes?",
        a: "Candidates must have passed the Higher Secondary Examination (12th standard) from a recognized board with relevant subjects. Minimum percentage requirements vary by programme — typically 50% aggregate for Aided programmes and 45% for Self-Finance programmes. Contact the admissions office for programme-specific eligibility details.",
      },
      {
        q: "What are the eligibility criteria for PG programmes?",
        a: "Candidates must hold a relevant Bachelor's degree from a recognized university. For PhD programmes, a Master's degree with a qualifying score is required. Specific eligibility varies by programme — please contact the admissions office.",
      },
      {
        q: "How can I apply for admission to JKKN CAS?",
        a: "You can apply online through the JKKN admissions portal at jkkn.ai/apply/jkkn-admission-2026, or visit the campus in person. Fill the application form, upload the required documents, and complete the application process. Our admissions team will guide you through every step.",
      },
      {
        q: "What documents are required for admission?",
        a: "Required documents include: 10th and 12th mark sheets and certificates, transfer certificate from the previous institution, community certificate (for reservation categories), Aadhaar card, 4 passport-size photographs, migration certificate (if applicable), and income certificate (for scholarship applicants).",
      },
    ],
  },
  {
    category: "Fees & Scholarships",
    faqs: [
      {
        q: "What is the fee structure for programmes at JKKN College?",
        a: "Fee structures vary by programme and category. Aided programmes have government-regulated fees that are significantly lower. Self-Finance programmes have competitive fees with flexible payment options. Contact the admissions office at +91 93458 55001 or arts@jkkn.org for detailed fee information.",
      },
      {
        q: "Does JKKN College offer scholarships?",
        a: "Yes. JKKN College of Arts and Science offers merit-based scholarships for academic toppers. Students can also avail government scholarships including BC/MBC/SC/ST scholarships and first-generation graduate scholarships. The college actively assists students with all scholarship application processes.",
      },
    ],
  },
  {
    category: "Campus & Facilities",
    faqs: [
      {
        q: "Where is JKKN College of Arts and Science located?",
        a: "The college is located at Natarajapuram, NH-544 (Salem–Coimbatore Highway), Komarapalayam, Namakkal District, Tamil Nadu – 638183. It is situated on the National Highway between Salem and Coimbatore, near Erode.",
      },
      {
        q: "What is the campus area?",
        a: "The total campus area is 15 acres, situated along National Highway-544 between Salem and Coimbatore.",
      },
      {
        q: "Is hostel accommodation available?",
        a: "Yes. JKKN provides separate hostel facilities for boys and girls with 24/7 security, hygienic mess, Wi-Fi connectivity, and recreational areas. Hostel admission is on a first-come, first-served basis. Transport facilities are also available from Erode, Salem, Namakkal, and surrounding areas.",
      },
      {
        q: "What sports and extracurricular activities are available?",
        a: "The campus has a well-equipped gymnasium and indoor stadium. Sports activities include Basketball, Handball, and Volleyball. Students can participate in NSS, NCC, RRC, YRC, and Atchayam Trust programmes. Various associations for Tamil, English, History, Commerce, Mathematics, Chemistry, Biology, Computer Science, and Fine Arts conduct regular competitions.",
      },
      {
        q: "What student support cells does the college have?",
        a: "The college has an Anti-Ragging Committee, Campus Monitoring Flying Squad, and Student Grievance Redressal Cell for a safe environment. It also has an Entrepreneurship cum Skill Development Centre, Placement Cell, and Incubation Centre to support students' career and entrepreneurial growth.",
      },
      {
        q: "What clubs and social awareness programmes are available?",
        a: "The college runs several clubs: Creative Club, Legal Literacy Club, Heritage Club, Citizen Consumer Club, Gender Champions Club, and Readers Club — all focused on promoting social awareness and holistic development among students.",
      },
    ],
  },
  {
    category: "Contact & Location",
    faqs: [
      {
        q: "How can I contact JKKN College of Arts and Science?",
        a: "Phone: +91 93458 55001 | Email: arts@jkkn.org | Address: JKKN College of Arts and Science, Natarajapuram, NH-544 (Salem–Coimbatore Highway), Komarapalayam, Namakkal (DT), Tamil Nadu – 638183.",
      },
      {
        q: "What are the college office hours?",
        a: "The college administrative office is open on all working days. For the most up-to-date office hours and holiday schedule, please call us at +91 93458 55001 or email arts@jkkn.org.",
      },
    ],
  },
];

const ALL = "All Topics";

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const tabs = [ALL, ...faqCategories.map((c) => c.category)];

  const visibleCategories =
    activeCategory === ALL
      ? faqCategories
      : faqCategories.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fbfbee]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0b6d41] via-[#0e8a52] to-[#1aab68] py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mx-auto mb-4"></div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about JKKN College of Arts and Science — admissions, programmes, campus, and more.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${
                  activeCategory === tab
                    ? "bg-[#0b6d41] text-white"
                    : "border border-gray-300 text-gray-600 hover:border-[#0b6d41] hover:text-[#0b6d41] bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Body */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-10">
          {visibleCategories.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ffde59] inline-block rounded-full"></span>
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${section.category}-${idx}`}
                    className="bg-white border border-gray-200 rounded-xl px-5 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-800 hover:text-[#0b6d41] hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-14 bg-[#0b6d41] rounded-2xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6">
            Our admissions team is happy to help you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919345855001"
              className="inline-flex items-center gap-2 bg-[#ffde59] text-[#002309] font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors text-sm md:text-base"
            >
              +91 93458 55001
            </a>
            <a
              href="mailto:arts@jkkn.org"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              arts@jkkn.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

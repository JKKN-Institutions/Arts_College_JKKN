import type { Metadata } from "next";
import {
  TrendingUp,
  Briefcase,
  Users,
  GraduationCap,
  Building2,
  IndianRupee,
  Target,
  Award,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Placements 2026 | JKKN College of Arts and Science | 92%+ Placement Rate",
  description:
    "JKKN College of Arts and Science placement highlights — 92%+ placement rate, 60+ top recruiters including TCS, Infosys, Wipro, CTS. Highest package 12 LPA, average 3.2–4.5 LPA. Career guidance and training from Year 1.",
  keywords: [
    "JKKN College placements",
    "arts and science college placements near Erode",
    "CAS JKKN placement record",
    "college placements Namakkal",
    "JKKN campus recruitment",
    "best placement college Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/placements",
  },
  openGraph: {
    title:
      "Placements 2026 | JKKN College of Arts and Science | 92%+ Placement Rate",
    description:
      "92%+ placement rate, 60+ recruiters, highest package 12 LPA. Career guidance and campus recruitment at JKKN CAS.",
    url: "https://cas.jkkn.ac.in/placements",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const placementFAQs = [
  {
    question:
      "What is the placement rate at JKKN College of Arts and Science?",
    answer:
      "JKKN College of Arts and Science maintains a placement rate of over 92% across all eligible students. The Placement Cell actively coordinates with 60+ companies to provide diverse career opportunities in IT, banking, education, healthcare and other sectors.",
  },
  {
    question: "Which companies recruit from JKKN College of Arts and Science?",
    answer:
      "Top recruiters include TCS, Infosys, Wipro, Cognizant, HCL, Amazon, Zoho, Accenture, HDFC Bank, ICICI Bank, Apollo Hospitals, Byju's, and many more. Over 60 companies participate in campus recruitment drives every year.",
  },
  {
    question: "What is the highest and average salary package offered?",
    answer:
      "The highest package offered is 12 LPA (domestic). The average salary package ranges from 3.2 to 4.5 LPA depending on the programme and specialization. International placements through JKKN group institutions offer packages up to 25 LPA.",
  },
  {
    question: "Does JKKN College provide placement training?",
    answer:
      "Yes, the Placement Cell provides comprehensive training from Year 1 including aptitude training, soft skills development, group discussion practice, mock interviews, resume building workshops, and industry-specific technical training. Bridge courses and certification programmes are also offered.",
  },
  {
    question:
      "Are internship opportunities available at JKKN College of Arts and Science?",
    answer:
      "Yes, JKKN CAS facilitates internships with partner companies and organizations. Students get hands-on industry exposure through summer internships, industrial visits, and project-based learning. Many internships lead to pre-placement offers.",
  },
  {
    question: "Which departments have the best placement records?",
    answer:
      "Computer Science, BCA, B.Sc. IT, BBA, MBA, and B.Com CA consistently achieve high placement rates. Science and arts departments also have strong placement records in education, research, government services, and competitive exam selections.",
  },
];

const highlightStats = [
  {
    icon: TrendingUp,
    value: "92%+",
    label: "Placement Rate",
    description: "Across all eligible students",
  },
  {
    icon: Building2,
    value: "60+",
    label: "Recruiters",
    description: "Top companies visit campus",
  },
  {
    icon: IndianRupee,
    value: "12 LPA",
    label: "Highest Package",
    description: "Domestic placement",
  },
  {
    icon: IndianRupee,
    value: "3.2–4.5 LPA",
    label: "Average Package",
    description: "Across programmes",
  },
];

const topRecruiters = [
  { name: "TCS", sector: "IT" },
  { name: "Infosys", sector: "IT" },
  { name: "Wipro", sector: "IT" },
  { name: "Cognizant", sector: "IT" },
  { name: "HCL Technologies", sector: "IT" },
  { name: "Accenture", sector: "IT" },
  { name: "Amazon", sector: "E-Commerce" },
  { name: "Zoho", sector: "IT" },
  { name: "Capgemini", sector: "IT" },
  { name: "Tech Mahindra", sector: "IT" },
  { name: "HDFC Bank", sector: "Banking" },
  { name: "ICICI Bank", sector: "Banking" },
  { name: "Axis Bank", sector: "Banking" },
  { name: "Federal Bank", sector: "Banking" },
  { name: "Apollo Hospitals", sector: "Healthcare" },
  { name: "Sun Pharma", sector: "Pharma" },
  { name: "Byju's", sector: "EdTech" },
  { name: "Foxconn", sector: "Manufacturing" },
  { name: "Sutherland", sector: "BPO" },
  { name: "Mphasis", sector: "IT" },
];

const trainingModules = [
  {
    title: "Aptitude & Reasoning",
    description:
      "Quantitative aptitude, logical reasoning, and verbal ability training aligned with industry recruitment tests.",
    icon: Target,
  },
  {
    title: "Soft Skills & Communication",
    description:
      "English communication, presentation skills, group discussion techniques, and professional etiquette.",
    icon: Users,
  },
  {
    title: "Technical Training",
    description:
      "Programming, data analytics, digital marketing, and domain-specific technical skills based on programme.",
    icon: Briefcase,
  },
  {
    title: "Mock Interviews & Resume Building",
    description:
      "HR and technical mock interviews, resume workshops, LinkedIn profile optimization, and portfolio development.",
    icon: GraduationCap,
  },
];

const placementProcess = [
  {
    step: 1,
    title: "Pre-Placement Training",
    description:
      "Comprehensive aptitude, soft skills, and technical training begins from Year 1 and intensifies in the final year.",
  },
  {
    step: 2,
    title: "Company Registration",
    description:
      "Companies register with the Placement Cell and share job descriptions, eligibility criteria, and compensation details.",
  },
  {
    step: 3,
    title: "Student Registration",
    description:
      "Eligible students register for placement drives, update resumes, and receive company-specific preparation materials.",
  },
  {
    step: 4,
    title: "Campus Recruitment Drive",
    description:
      "Companies conduct aptitude tests, group discussions, technical rounds, and HR interviews on campus.",
  },
  {
    step: 5,
    title: "Offer & Onboarding",
    description:
      "Selected students receive offer letters. The Placement Cell assists with onboarding formalities and transition support.",
  },
];

export default function PlacementsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Placements", url: "https://cas.jkkn.ac.in/placements" },
        ]}
      />
      <FAQSchema faqs={placementFAQs} />

      {/* Hero Section */}
      <section className="relative bg-brand-green overflow-hidden py-16 md:py-20 px-4">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Placements at JKKN College of Arts and Science
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-8">
            92%+ placement rate with 60+ top recruiters. Our dedicated Placement
            Cell prepares students from Day 1 for successful careers in IT,
            banking, healthcare, education, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-brand-yellow/90 transition-colors"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-brand-green transition-colors"
            >
              Contact Placement Cell
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2 text-center">
            Placement Highlights
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mb-10" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow-sm p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-brand-green/10 p-3 rounded-full">
                    <stat.icon className="w-6 h-6 text-brand-green" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-green mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-800 text-sm md:text-base">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs md:text-sm mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2 text-center">
            Our Top Recruiters
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Over 60 companies from IT, banking, healthcare, manufacturing, and
            education sectors recruit from our campus every year.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {topRecruiters.map((recruiter) => (
              <div
                key={recruiter.name}
                className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="font-semibold text-gray-800 text-sm md:text-base">
                  {recruiter.name}
                </div>
                <div className="text-xs text-brand-green mt-1">
                  {recruiter.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2 text-center">
            Our Placement Process
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mb-10" />

          <div className="max-w-3xl mx-auto space-y-6">
            {placementProcess.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2 text-center">
            Training and Development
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Our Placement Cell conducts year-round training programmes to make
            students industry-ready from Day 1.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map((module) => (
              <div
                key={module.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="bg-brand-green/10 p-3 rounded-full flex-shrink-0">
                  <module.icon className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department-wise Placement Sectors */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2 text-center">
            Career Sectors by Department
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                dept: "Computer Science & IT",
                sectors:
                  "Software Development, Data Analytics, Cybersecurity, Cloud Computing, AI/ML",
              },
              {
                dept: "Commerce & Management",
                sectors:
                  "Banking, Finance, Accounting, Insurance, Business Analytics, Entrepreneurship",
              },
              {
                dept: "Science",
                sectors:
                  "Research Labs, Pharma, Quality Control, Environmental Science, Teaching",
              },
              {
                dept: "Arts & Humanities",
                sectors:
                  "Education, Government Services, Media, Content Writing, Civil Services",
              },
              {
                dept: "BBA & MBA",
                sectors:
                  "Marketing, HR, Operations, Retail Management, Supply Chain, Consulting",
              },
              {
                dept: "BCA & MCA",
                sectors:
                  "Web Development, Mobile Apps, Database Administration, Testing, DevOps",
              },
            ].map((item) => (
              <div
                key={item.dept}
                className="bg-white rounded-xl shadow-sm p-5"
              >
                <h3 className="font-semibold text-brand-green text-base md:text-lg mb-2">
                  {item.dept}
                </h3>
                <p className="text-gray-600 text-sm">{item.sectors}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mb-10" />

          <div className="space-y-4">
            {placementFAQs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 border border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-800 text-sm md:text-base">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-green">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Career Journey with JKKN
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Join a college where 92%+ students get placed. Our Placement Cell
            supports you from admission to your first job and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-brand-yellow/90 transition-colors"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919345855001"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-brand-green transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: +91 9345855001
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

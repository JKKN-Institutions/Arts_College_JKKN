import type { Metadata } from 'next';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Briefcase,
  Code,
  BarChart,
  Cpu,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AcademicProgramsSection from '@/components/home/AcademicProgramsSection';
import ScrollOnLoad from '@/components/ScrollOnLoad';
import EventsSection from '@/components/home/EventsSection';
import Image from 'next/image';
import { Suspense } from 'react';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { AllCoursesSchema } from '@/components/seo/AllCoursesSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { ItemListSchema } from '@/components/seo/ItemListSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import ScrollToSection from '@/components/ScrollToSection';
import AdmissionPopup from '@/components/home/AdmissionPopup';

export const metadata: Metadata = {
  title: {
    absolute: 'JKKN College of Arts and Science (Autonomous), Komarapalayam',
  },
  description:
    'JKKN College of Arts and Science (Autonomous), Komarapalayam — NAAC accredited, Periyar University. 38 UG, PG & PhD programmes, placement record published in NIRF 2025. Apply 2026-27.',
  keywords: [
    'best arts and science college in Tamil Nadu',
    'JKKN College of Arts and Science',
    'arts and science college near Erode',
    'autonomous college Tamil Nadu',
    'top arts college Namakkal',
    'best science college Tamil Nadu placements',
    'NAAC accredited college Komarapalayam',
    'UG PG programmes Tamil Nadu',
    'BCA BSc BCom college near Erode',
    'arts college with highest placement Tamil Nadu',
  ],
  alternates: {
    canonical: 'https://cas.jkkn.ac.in',
  },
  openGraph: {
    title: 'JKKN College of Arts and Science (Autonomous), Komarapalayam',
    description:
      'JKKN College of Arts and Science (Autonomous), Komarapalayam — NAAC accredited, Periyar University. 38 UG, PG & PhD programmes, placement record published in NIRF 2025. Apply 2026-27.',
    url: 'https://cas.jkkn.ac.in',
    siteName: 'JKKN College of Arts and Science',
    type: 'website',
  },
};

const homepageFAQs = [
  {
    question: "Why is JKKN considered the best arts and science college in Tamil Nadu?",
    answer:
      "JKKN College of Arts and Science stands out as a top arts and science college in Tamil Nadu due to its 74+ year legacy, NAAC accreditation, UGC-recognized autonomous status, placement record published in NIRF 2025 and industry partnerships with 60+ recruiters including TCS, Infosys, and Wipro. The college offers 38 programmes with AI/IoT labs and in-built internship pathways.",
  },
  {
    question: "What makes JKKN different from other arts and science colleges in Tamil Nadu?",
    answer:
      "Unlike many arts and science colleges in Tamil Nadu, JKKN offers an industry-integrated curriculum with collaborations from NASSCOM, CII, and leading MNCs. Students benefit from dedicated AI and IoT research labs, 121 faculty on roll (52 with a PhD, NIRF 2025), and a training and placement cell that delivers measurable outcomes — placement support and career opportunities across India and abroad.",
  },
  {
    question: "What programmes does JKKN Arts and Science College offer in Tamil Nadu?",
    answer:
      "JKKN College offers 38 programmes including B.Sc Computer Science, BCA, B.Sc AI & Data Science, B.Com, BBA, B.Sc Cyber Security, B.Sc Visual Communication, B.Sc Microbiology, and more. Postgraduate options include M.Sc Computer Science, M.Com, and MA English. All programmes are affiliated to Periyar University and designed for career readiness.",
  },
  {
    question: "What are the admission requirements for undergraduate programs?",
    answer:
      "Students must have completed their 12th standard with relevant subjects and minimum required percentage. Specific requirements vary by program. Please contact our admissions office for detailed eligibility criteria.",
  },
  {
    question: "Does JKKN College provide placement assistance?",
    answer:
      "Yes, we have a dedicated placement cell that works year-round to connect students with top employers. We maintain strong industry partnerships and publish our placement record each year in the NIRF submission.",
  },
  {
    question: "What facilities are available on campus?",
    answer:
      "Our campus features modern computer labs, a well-stocked library, smart classrooms, research centers, sports facilities, hostel accommodation, cafeteria, and much more to support your academic and personal development.",
  },
  {
    question: "Are scholarships available for students?",
    answer:
      "Yes, we offer various merit-based and need-based scholarships to deserving students. Additionally, we assist students in applying for government scholarships and financial aid programs.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our website by filling out the admission form. Alternatively, you can visit our campus to complete the application process in person. Our admissions team is available to guide you through every step.",
  },
  {
    question: "What are the fees at JKKN College of Arts and Science?",
    answer:
      "JKKN College offers affordable education with fees varying by programme and type. Aided programme fees are government-regulated and among the lowest in Tamil Nadu. Self-finance programme fees are competitive, from ₹24,500 to ₹34,000 per year for 2026-27 depending on the course. Contact the admissions office at +91-93458-55001 for the latest fee structure.",
  },
  {
    question: "What is the cut-off for admission to JKKN College?",
    answer:
      "Admission to JKKN College is based on 12th standard marks. Cut-off percentages vary by programme — science programmes typically require 50–60% in relevant subjects, while commerce and arts programmes require 45–55%. As an autonomous institution, JKKN conducts its own admission process. Early application is recommended as seats fill quickly.",
  },
  {
    question: "How does JKKN compare to other arts and science colleges in Tamil Nadu?",
    answer:
      "JKKN stands out with its autonomous status (UGC-recognized), NAAC accreditation, placement record published in NIRF 2025 — metrics that match or exceed many top-ranked colleges. Unlike most arts colleges, JKKN offers AI/IoT research labs, NASSCOM and CII industry partnerships, and 38 programmes. The 74+ year institutional legacy and 60+ recruiting companies further distinguish JKKN from peers.",
  },
  {
    question: "What are the career options after completing a degree from JKKN?",
    answer:
      "JKKN graduates pursue diverse careers across IT (TCS, Infosys, Wipro), banking (ICICI, HDFC), manufacturing (Foxconn, TVS), healthcare, education, and government services. Computer science graduates enter software development, data analytics, and cybersecurity. Commerce graduates join accounting firms, banks, and corporate finance. Science graduates pursue research, pharmaceuticals, or higher education. Our placement cell supports all career paths.",
  },
  {
    question: "Does JKKN College have hostel facilities?",
    answer:
      "Yes, JKKN provides separate hostel facilities for men and women within the campus. Hostels feature modern amenities including Wi-Fi connectivity, 24/7 security, hygienic mess with nutritious meals, laundry service, and recreational areas. The campus location on NH-544 ensures easy accessibility from Erode, Salem, Namakkal, and Coimbatore. Contact the hostel office for availability and current fees.",
  },
  {
    question: "Is JKKN College of Arts and Science an autonomous college?",
    answer:
      "Yes, JKKN College holds autonomous status conferred by the University Grants Commission (UGC). This means the college designs its own curriculum, conducts examinations, and awards degrees through Periyar University. Autonomous status allows JKKN to update syllabi regularly to match industry requirements, introduce new-age subjects like AI and Data Science, and offer flexible credit-based programmes.",
  },
  {
    question: "What is JKKN College's placement record and highest package?",
    answer:
      "JKKN College published a UG placement figure of 135 of 373 graduates for 2023-24 in NIRF 2025. Over 60 companies recruit from campus annually, including TCS, Infosys, Wipro, Foxconn, TVS, and Sakthi Group. The dedicated Training and Placement Cell provides aptitude training, mock interviews, and industry certifications year-round.",
  },
  {
    question: "Which top companies recruit from JKKN College?",
    answer:
      "JKKN's top recruiters include TCS, Infosys, Wipro, Foxconn, TVS, Sakthi Group, Cognizant, Premier, Rinex, and Infronex among 60+ companies. Recruitment spans IT services, manufacturing, BFSI, healthcare, and education sectors. The placement cell also facilitates internship opportunities with NASSCOM and CII partner companies, giving students industry exposure before graduation.",
  },
  {
    question: "How to reach JKKN College from Erode, Salem, or Coimbatore?",
    answer:
      "JKKN College is located at Natarajapuram on NH-544 (Salem–Coimbatore Highway) in Komarapalayam, Namakkal District. Distance from nearby cities: Erode — 22 km (35 minutes), Salem — 58 km (1 hour), Tiruchengode — 15 km (20 minutes), Coimbatore — 105 km (2 hours). Regular bus services from Erode and Salem stop near the campus. The nearest railway station is Erode Junction.",
  },
  {
    question: "Does JKKN College offer distance education or online programmes?",
    answer:
      "JKKN College currently focuses on full-time, on-campus programmes across 38 UG, PG, and doctoral courses. The college does not offer distance education at present. However, students have access to NPTEL online courses, digital library resources, and SWAYAM platform integration as supplementary learning. For full-time programme details, visit the admissions portal or contact +91-93458-55001.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <AdmissionPopup />
      <FAQSchema faqs={homepageFAQs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
      ]} />
      <AllCoursesSchema />
      <HowToSchema
        name="How to Apply for Admission at JKKN College of Arts and Science"
        description="Step-by-step guide to apply for UG, PG, and PhD programmes at JKKN College of Arts and Science, Komarapalayam, Tamil Nadu."
        steps={[
          { name: "Choose Your Program", text: "Browse 38 UG, PG, and PhD programmes across Science, Commerce, IT, and Management streams. Check eligibility criteria and course details on the programmes page." },
          { name: "Apply Online", text: "Fill out the online admission form at jkkn.ai/apply/jkkn-admission-2026 with your personal details, academic records, and preferred programme. Upload required documents." },
          { name: "Get Admitted", text: "Receive your admission confirmation via email and SMS. Pay the admission fee online or at the campus office to secure your seat." },
          { name: "Start Learning", text: "Attend the orientation programme, collect your ID card, and begin classes at the JKKN campus on NH-544, Komarapalayam." },
        ]}
      />
      <ItemListSchema
        name="Top Programmes at JKKN College of Arts and Science"
        description="Most popular UG, PG, and PhD programmes offered at JKKN College, an autonomous institution affiliated to Periyar University, Tamil Nadu."
        items={[
          { name: "B.Sc Computer Science", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science", description: "3-year self-finance UG programme in computer science" },
          { name: "BCA (Bachelor of Computer Applications)", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca", description: "3-year self-finance UG programme in computer applications" },
          { name: "B.Com (Bachelor of Commerce)", url: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom", description: "3-year aided UG programme in commerce with accounting, finance, and taxation" },
          { name: "B.Sc Artificial Intelligence & Data Science", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds", description: "3-year self-finance UG programme in AI and data science" },
          { name: "B.Sc Computer Science (Cyber Security)", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security", description: "3-year self-finance UG programme in computer science with cyber security" },
          { name: "B.Sc Visual Communication", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication", description: "3-year self-finance UG programme in visual communication" },
          { name: "M.Sc Computer Science", url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-computer-science", description: "2-year aided PG programme in computer science" },
          { name: "BBA (Bachelor of Business Administration)", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba", description: "3-year self-finance UG programme in business administration" },
        ]}
      />
      <WebPageSchema
        name="Best Arts and Science College in Tamil Nadu — JKKN College (Autonomous)"
        description="JKKN College of Arts and Science is the best arts and science college in Tamil Nadu. Autonomous, NAAC accredited, placement record published in NIRF 2025, 38 UG, PG & PhD programmes near Erode."
        url="https://cas.jkkn.ac.in"
        lastReviewed="2026-03-28"
        speakable={["h1", ".hero-description", "[data-speakable]"]}
      />
      <Suspense fallback={null}><ScrollToSection /></Suspense>
      {/* Screen-reader overview for voice assistants and AI crawlers */}
      <p className="sr-only">
        JKKN College of Arts and Science is an autonomous, NAAC-accredited institution located on NH-544 in Komarapalayam, near Erode, Tamil Nadu. Affiliated to Periyar University and part of J.K.K. Nattraja Educational Institutions established in 1952, the college offers 38 UG, PG, and PhD programmes across Science, Commerce, IT, and Management. With a placement record published in NIRF 2025, 60+ recruiters including TCS, Infosys, and Wipro, and 1,685 students on a 15-acre campus, JKKN is widely regarded as one of the best arts and science colleges in Tamil Nadu.
      </p>
      {/* Hero Section - Fits exactly one screen */}
      <HeroSection />

      {/* Stats Section - Counting animation */}
      <StatsSection />

      {/* About JKKN Arts & Science Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left - Content */}
            <div className="order-1 lg:order-1">
              {/* Section Label */}
              <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
                ABOUT JKKN ARTS &amp; SCIENCE
              </div>

              {/* Main Title */}
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6" data-speakable>
                Nurturing Future Leaders Through Progressive Education
              </h2>

              {/* Description Paragraphs - keyword-rich with local landmarks */}
              <div className="space-y-4 text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[29.25px] lg:leading-[28px] text-black font-normal">
                <p>
                  Located on <strong>NH-544 (Salem–Coimbatore Highway)</strong> in Komarapalayam, just 22 km from Erode and 20 km from Tiruchengode, JKKN College of Arts and Science is one of the most accessible and well-connected arts and science colleges in Tamil Nadu. The 15-acre campus serves learners from Erode, Salem, Namakkal, Tiruchengode, Coimbatore, and Tiruppur districts.
                </p>
                <p>
                  Established in 1974 as part of <strong>J.K.K. Nattraja Educational Institutions</strong> (est. 1952), JKKN blends 74+ years of academic heritage with a modern, industry-integrated learning framework. Our NAAC accreditation and UGC-recognized autonomous status empower us to design programmes aligned with current industry demands.
                </p>
                <p>
                  With 121 Senior Learners, 52 of them PhD-qualified, AI and IoT research labs, partnerships with NASSCOM and CII, and a placement record published in NIRF 2025, we prepare Learners not just for jobs — but for successful careers across India and abroad.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2.5 rounded-lg flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">35 Programmes</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">Science, Commerce, IT &amp; Management</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2.5 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">121 Senior Learners</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">PhD &amp; Industry Experts</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2.5 rounded-lg flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">Industry Partnerships</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">TCS, Infosys, Wipro &amp; More</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2.5 rounded-lg flex-shrink-0">
                    <Globe className="h-5 w-5 text-[#0b6d41]" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-0.5">Global Alumni</div>
                    <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-black/60">Alumni across India and abroad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative order-2 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                {/* [UPDATE] Replace Unsplash stock image with actual JKKN campus photo */}
                <Image
                  src="/images/homepage/arts-home-hero.webp"
                  alt="JKKN College Campus"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-yellow rounded-2xl -z-10 hidden lg:block"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-green/10 rounded-2xl -z-10 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why JKKN is the Best — Keyword-Rich Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              WHY WE STAND OUT
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6" data-speakable>
              Why JKKN Is the Best Arts and Science College in Tamil Nadu
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-gray-700">
            {/* Snippet definition paragraph — optimized for Google Featured Snippet */}
            <p>
              <strong>JKKN College of Arts and Science</strong> is widely recognized as one of the best arts and science colleges in Tamil Nadu. With five decades of academic heritage, NAAC accreditation, UGC-recognized autonomous status, and a placement record published in NIRF 2025, JKKN offers 38 industry-aligned programmes near Erode on the Salem–Coimbatore Highway.
            </p>

            {/* Numbered list — optimized for Google List Snippet */}
            <div>
              <p className="font-semibold text-gray-900 mb-3">Top 7 Reasons JKKN Is Tamil Nadu&apos;s Best Arts and Science College:</p>
              <ol className="list-decimal list-inside space-y-2 text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-gray-700 pl-2">
                <li>College established 1974 — part of JKKN Institutions (Est. 1952)</li>
                <li>Autonomous Status — UGC Recognized</li>
                <li>NAAC Accredited Institution</li>
                <li>Placement record published in NIRF 2025</li>
                <li>38 UG, PG &amp; PhD Programmes</li>
                <li>AI/IoT Learning Labs + NASSCOM &amp; CII Industry Partnerships</li>
                <li>60+ Recruiters Including TCS, Infosys, Wipro</li>
              </ol>
            </div>

            <p>
              With over seven decades of academic heritage, JKKN College of Arts and Science has earned its reputation as one of the <strong>best arts and science colleges in Tamil Nadu</strong>. Located on the Salem–Coimbatore Highway in Komarapalayam, the college combines the strength of a well-established institution with a forward-looking, industry-aligned learning framework that prepares learners for real-world careers.
            </p>
            <p>
              What sets JKKN apart from other arts and science colleges in Tamil Nadu is the focus on measurable outcomes. A <strong>placement record published in NIRF 2025</strong>, and partnerships with 60+ recruiters — including TCS, Infosys, Wipro, and Foxconn — demonstrate that academic quality here translates directly into career success. Learners from across Tamil Nadu, Kerala, and Karnataka choose JKKN for this proven track record.
            </p>
            <p>
              The college offers 38 UG, PG, and doctoral programmes across Science, Commerce, IT, and Management — all affiliated to Periyar University and backed by <strong>NAAC accreditation</strong> and <strong>UGC recognition</strong>. Industry-integrated features like AI/IoT research learning labs, NASSCOM and CII collaborations, and in-built internship pathways make JKKN a <strong>top arts college near Erode</strong> for learners seeking future-ready education in Tamil Nadu.
            </p>

            {/* Key Differentiators Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                <div className="text-[24px] font-bold text-[#0b6d41] mb-1">74+</div>
                <div className="text-[14px] text-gray-600">Years of Group Legacy (Est. 1952)</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                <div className="text-[24px] font-bold text-[#0b6d41] mb-1">Autonomous</div>
                <div className="text-[14px] text-gray-600">UGC Recognized &amp; NAAC Accredited</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                <div className="text-[24px] font-bold text-[#0b6d41] mb-1">35</div>
                <div className="text-[14px] text-gray-600">Programmes in Arts, Science &amp; Commerce</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How JKKN Compares — Data-Driven Comparison Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]" data-speakable>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              HOW JKKN COMPARES
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              What Makes JKKN Stand Out Among Tamil Nadu&apos;s Arts &amp; Science Colleges
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Compare key parameters that matter most when choosing the best arts and science college in Tamil Nadu
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#0b6d41] text-white">
                  <th className="px-4 py-3 text-[14px] font-semibold rounded-tl-lg">Parameter</th>
                  <th className="px-4 py-3 text-[14px] font-semibold">JKKN College</th>
                  <th className="px-4 py-3 text-[14px] font-semibold rounded-tr-lg">Average TN Arts &amp; Science College</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-gray-700">
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Autonomous Status</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">Yes — UGC Recognized</td>
                  <td className="px-4 py-3 text-gray-500">Mostly Affiliated</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">NAAC Accreditation</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">Accredited</td>
                  <td className="px-4 py-3 text-gray-500">Many Unaccredited</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Placement Rate</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">36%</td>
                  <td className="px-4 py-3 text-gray-500">40–60%</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Highest Package</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">Published by the placement cell</td>
                  <td className="px-4 py-3 text-gray-500">₹3–5 LPA</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Programmes Offered</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">35 (UG, PG, PhD)</td>
                  <td className="px-4 py-3 text-gray-500">8–15</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">AI/IoT Learning Labs</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">Yes — Dedicated Research Learning Lab</td>
                  <td className="px-4 py-3 text-gray-500">Rare</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Industry Partnerships</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">NASSCOM, CII, 60+ Recruiters</td>
                  <td className="px-4 py-3 text-gray-500">Limited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium rounded-bl-lg">Institutional Legacy</td>
                  <td className="px-4 py-3 text-[#0b6d41] font-semibold">College 1974 · Group 1952</td>
                  <td className="px-4 py-3 text-gray-500 rounded-br-lg">10–30 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Academic Programs Section - With Category Tabs */}
      <ScrollOnLoad />
      <div id="academic-excellence">
        <AcademicProgramsSection />
      </div>

      {/* Why Choose JKKN Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              WHY CHOOSE JKKN
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              Your Success Is Our Mission
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Experience the JKKN advantage — industry-aligned education, modern infrastructure,<br className="hidden md:block" />
              and dedicated career support that sets us apart from other colleges in Tamil Nadu
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: NAAC Accredited */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">NAAC Accredited</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Nationally recognized excellence in teaching and infrastructure.
              </p>
            </div>

            {/* Card 2: Placement record */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Placement Record</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Exceptional placement record with 60+ recruiters across Tamil Nadu and India — TCS, Infosys, Wipro, and leading MNCs
              </p>
            </div>

            {/* Card 3: Modern Labs */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Modern Learning Labs</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                State-of-the-art digital learning labs, language learning labs, IoT learning lab, and AI/ML research facilities
              </p>
            </div>

            {/* Card 4: Industry Partnerships */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Industry Partnerships</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Collaborations with TCS, Infosys, NASSCOM, CII for internships, certifications, and placements
              </p>
            </div>

            {/* Card 5: Expert Senior Learners */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Expert Senior Learners</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                121 Senior Learners on roll, 52 with a PhD (NIRF 2025 submission)
              </p>
            </div>

            {/* Card 6: Skill Development */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Skill Development</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Integrated soft skills, aptitude training, and professional certifications for career readiness
              </p>
            </div>

            {/* Card 7: Digital Library */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Digital Learning Commons</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                27,000+ books, e-journals, NPTEL courses, and online learning resources accessible 24/7
              </p>
            </div>

            {/* Card 8: Hostel Facilities */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-[#0b6d41] p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3">Hostel Facilities</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Separate hostels for men and women with modern amenities, Wi-Fi, and 24/7 security
              </p>
            </div>

            {/* Did You Know? — Micro-fact for AI citation */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-6 text-center hover:shadow-lg transition md:col-span-2 lg:col-span-4">
              <div className="text-[14px] font-semibold text-[#0b6d41] uppercase tracking-wide mb-2">Did You Know?</div>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-gray-800 max-w-3xl mx-auto">
                JKKN College of Arts and Science is part of <strong>J.K.K. Nattraja Educational Institutions</strong>, one of the oldest educational groups in Tamil Nadu with a <strong>74+ year legacy since 1952</strong>. The group operates 7 colleges and 2 schools — including Dental, Pharmacy, Nursing, Engineering, and Allied Health Sciences — all on a single integrated campus on NH-544.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Success Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-[12px] leading-[16px] font-semibold tracking-wide uppercase px-4 py-2 bg-green-100 rounded-full border border-green-200 text-brand-green">
                CAREER SUCCESS
              </span>
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] mb-6 text-brand-green">
              Outstanding Placement Record
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Our dedicated Training and Placement Cell ensures every Learner is industry-ready with<br className="hidden md:block" />
              exceptional career opportunities across Tamil Nadu and beyond.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16" data-speakable>
            {/* Stat 1: Placement Rate */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">36%</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Placement Rate</div>
            </div>

            {/* Stat 2: Programmes (34 = 19 UG + 12 PG + 3 PhD) */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">35</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">UG, PG &amp; PhD Programmes</div>
            </div>

            {/* Stat 3: Learners (NIRF 2025 submission, AY 2023-24) */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">1,685</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Learners</div>
            </div>

            {/* Stat 4: Recruiters */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-2">60+</div>
              <div className="text-[14px] leading-[20px] font-medium text-gray-600">Recruiters</div>
            </div>
          </div>

          {/* Top Recruiters */}
          <div>
            <h3 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-center mb-8 text-brand-green">Our Top Recruiters</h3>

            {/* Marquee */}
            <div className="overflow-hidden" role="marquee" aria-label="Logos of top recruiters at JKKN College including Foxconn, Infronex, Premier, Rinex, Sakthi, and TVS">
              <style>{`
                @keyframes marquee-scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-track {
                  display: flex;
                  width: max-content;
                  animation: marquee-scroll 18s linear infinite;
                }
                .marquee-track:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="marquee-track">
                {[
                  { src: '/images/recruiters/Foxconn.png', alt: 'Foxconn' },
                  { src: '/images/recruiters/Infronex.jpg', alt: 'Infronex' },
                  { src: '/images/recruiters/premier.png', alt: 'Premier' },
                  { src: '/images/recruiters/Rinex (2).png', alt: 'Rinex' },
                  { src: '/images/recruiters/sakthi.png', alt: 'Sakthi' },
                  { src: '/images/recruiters/TVS.jpg', alt: 'TVS' },
                  { src: '/images/recruiters/Foxconn.png', alt: 'Foxconn' },
                  { src: '/images/recruiters/Infronex.jpg', alt: 'Infronex' },
                  { src: '/images/recruiters/premier.png', alt: 'Premier' },
                  { src: '/images/recruiters/Rinex (2).png', alt: 'Rinex' },
                  { src: '/images/recruiters/sakthi.png', alt: 'Sakthi' },
                  { src: '/images/recruiters/TVS.jpg', alt: 'TVS' },
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 mx-6 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center"
                    style={{ width: 160, height: 80 }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={130}
                      height={56}
                      className="max-h-14 max-w-[130px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Overview Section */}
      {/* [UPDATE — Confirm exact fee amounts with admin] */}
      <section className="py-16 md:py-24 bg-[#fbfbee]" data-speakable>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              FEE STRUCTURE
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              Affordable Quality Education in Tamil Nadu
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              JKKN College offers one of the most affordable fee structures among top arts and science colleges in Tamil Nadu — with government-aided programmes, scholarships, and flexible payment options to make quality education accessible to all.
            </p>
          </div>

          {/* Fee Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Aided UG */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[14px] font-semibold text-[#0b6d41] uppercase tracking-wide mb-3">Aided UG</div>
              <div className="text-[28px] md:text-[32px] font-bold text-[#0b6d41] leading-tight mb-2">As per Govt norms</div>
              <div className="text-[13px] text-gray-500 mb-3">per year</div>
              <p className="text-[13px] leading-[18px] text-gray-600">Government-regulated fees. Includes tuition and basic amenities. Scholarship eligible.</p>
            </div>

            {/* Self-Finance UG */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[14px] font-semibold text-[#0b6d41] uppercase tracking-wide mb-3">Self-Finance UG</div>
              <div className="text-[28px] md:text-[32px] font-bold text-[#0b6d41] leading-tight mb-2">₹24,500 – ₹34,000</div>
              <div className="text-[13px] text-gray-500 mb-3">per year</div>
              <p className="text-[13px] leading-[18px] text-gray-600">Competitive fees for self-finance UG programmes. Merit scholarships available.</p>
            </div>

            {/* PG Programmes */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[14px] font-semibold text-[#0b6d41] uppercase tracking-wide mb-3">PG Programmes</div>
              <div className="text-[28px] md:text-[32px] font-bold text-[#0b6d41] leading-tight mb-2">₹20,000 – ₹25,000</div>
              <div className="text-[13px] text-gray-500 mb-3">per year</div>
              <p className="text-[13px] leading-[18px] text-gray-600">Postgraduate programmes with industry-aligned learning framework and placement support.</p>
            </div>

            {/* Doctoral / PhD */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-[14px] font-semibold text-[#0b6d41] uppercase tracking-wide mb-3">Doctoral (PhD)</div>
              <div className="text-[28px] md:text-[32px] font-bold text-[#0b6d41] leading-tight mb-2">Contact Us</div>
              <div className="text-[13px] text-gray-500 mb-3">for details</div>
              <p className="text-[13px] leading-[18px] text-gray-600">Full-time and part-time doctoral programmes. Research fellowships and grants available.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-[14px] text-gray-500 mb-4">Fee structures are subject to change. Contact admissions for the latest confirmed amounts.</p>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0b6d41] hover:bg-[#095c37] text-white px-8 py-3 rounded-full text-[16px] leading-[24px] font-semibold transition"
            >
              Apply Now — Check Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* Campus Infrastructure Section */}
      <section className="py-16 md:py-24 bg-[#fbfbee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              CAMPUS INFRASTRUCTURE
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
              World-Class Facilities for Holistic<br />
              Development
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
              Experience learning in a modern, technology-enabled campus in Tamil Nadu designed for academic<br className="hidden md:block" />
              excellence and personal growth
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Advanced Computer Labs */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Advanced Digital Learning Labs</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                500+ high-performance systems with latest software, high-speed internet, and 24/7 access for project work
              </p>
            </div>

            {/* Card 2: Science Laboratories */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Science Learning Labs</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Well-equipped Physics, Chemistry, Microbiology, and Biotechnology learning labs with modern instruments
              </p>
            </div>

            {/* Card 3: AI & IoT Research Lab */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">AI & IoT Research Learning Lab</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Dedicated learning lab for AI/ML, IoT projects with Raspberry Pi, Arduino, sensors, and cloud computing access
              </p>
            </div>

            {/* Card 4: Digital Library */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Digital Learning Commons</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                27,000+ books, e-journals, NPTEL courses, and online databases with comfortable reading space
              </p>
            </div>

            {/* Card 5: Smart Learning Studios */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Smart Learning Studios</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Technology-enabled learning studios with projectors, smart boards, and video conferencing facilities
              </p>
            </div>

            {/* Card 6: Sports Complex */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-[#0b6d41]" />
              </div>
              <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-[#0b6d41] mb-4">Sports Complex</h3>
              <p className="text-[14px] leading-[20px] font-normal text-gray-600">
                Indoor and outdoor sports facilities including cricket ground, basketball court, and yoga center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <Suspense fallback={null}>
        <EventsSection />
      </Suspense>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              LEARNER STORIES
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-gray-900 mb-4">
              What Our <span className="text-[#0b6d41]">Learners Say</span>
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal text-gray-600 max-w-3xl mx-auto">
              Hear from our learners about their transformative experiences at JKKN College
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  SK
                </div>
                <div>
                  <h4 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900">Santhosh Kumar R</h4>
                  <p className="text-[14px] leading-[20px] font-normal text-gray-600">B.Sc Computer Science, Batch of 2024</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-gray-700 italic mb-4">
                "The faculty at JKKN College are exceptional. They not only teach but also mentor us, helping us develop both academically and professionally. The hands-on projects prepared me well for my career."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b6d41] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  DM
                </div>
                <div>
                  <h4 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900">Deepika M</h4>
                  <p className="text-sm text-gray-600">B.Com Commerce, Batch of 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "JKKN College provided me with excellent opportunities for internships and industry exposure. The placement support was outstanding, and I secured a great job even before graduation."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#ffde59] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  KP
                </div>
                <div>
                  <h4 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900">Karthikeyan P</h4>
                  <p className="text-sm text-gray-600">BCA Computer Applications, Batch of 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The infrastructure and facilities at JKKN are world-class. The computer labs, library, and sports facilities made my college experience memorable and enriching."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white" data-speakable>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
                HOW TO APPLY
              </div>
              <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-gray-900 mb-6">
                How to Apply for Admission<br />
                at <span className="text-[#0b6d41]">JKKN College</span>
              </h2>
              <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal text-gray-600 mb-8">
                Join thousands of successful learners who have transformed their careers through quality education at JKKN College
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0b6d41] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Choose Your Program</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Select from our wide range of undergraduate and postgraduate programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0b6d41] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Apply Online</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Complete your application through our simple online admission process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#ffde59] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Get Admitted</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Receive your admission confirmation and join our vibrant community</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0b6d41] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold tracking-[-0.45px] md:tracking-[-0.6px] text-gray-900 mb-2">Start Learning</h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal text-gray-600">Begin your transformative educational journey with expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">

                <div className="inline-flex items-center gap-2 bg-[#0b6d41] text-white text-[13px] font-semibold px-4 py-2 rounded-full mb-6">
                  <span>🎓</span>
                  <span>Admissions Open 2026–27</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Limited Seats Available",
                    "NAAC Accredited Programs",
                    "Merit Scholarships Available",
                    "Industry-Integrated Learning Framework",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[16px] leading-[24px] text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e6f4ed] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-[#0b6d41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0b6d41] hover:bg-[#095c37] text-white text-center py-4 rounded-xl text-[16px] leading-[24px] font-semibold transition mb-6"
                >
                  Apply Now – Admissions Open
                </a>

                <div className="flex flex-col sm:flex-row gap-4 text-[14px] text-gray-600">
                  <a href="tel:+919345855001" className="flex items-center gap-2 hover:text-[#0b6d41] transition">
                    <span>📞</span>
                    <span>+91 9345855001</span>
                  </a>
                  <a href="mailto:arts@jkkn.org" className="flex items-center gap-2 hover:text-[#0b6d41] transition">
                    <span>📧</span>
                    <span>arts@jkkn.org</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box — Optimized for AI Overview citation */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-[#fbfbee]" data-speakable>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#0b6d41] rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#0b6d41] mb-3">
              Quick Answer: Best Arts and Science College in Tamil Nadu
            </h3>
            <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-gray-700">
              <strong>JKKN College of Arts and Science</strong> (Autonomous) in Komarapalayam, Tamil Nadu, is consistently ranked among the best arts and science colleges in the state. Key highlights: <strong>NAAC accredited</strong>, <strong>UGC-recognized autonomous status</strong>, <strong>placement record published in NIRF 2025</strong>, <strong>38 UG/PG/PhD programmes</strong>, and partnerships with <strong>60+ recruiters</strong> including TCS, Infosys, and Wipro. Affiliated to Periyar University; established 1974 within a group founded in 1952.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-speakable>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-gray-900 mb-4">
              Have Questions? We Have <span className="text-[#0b6d41]">Answers</span>
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal text-gray-600">
              Find answers to commonly asked questions about admissions, programs, and campus life at JKKN Arts and Science College, Tamil Nadu
            </p>
          </div>
          {/*
            Rendered from homepageFAQs, the same array that feeds FAQSchema above.

            These 18 items used to be written out by hand here while the schema
            read the array. The counts matched, so the drift was invisible - but
            measured on the live site 2026-09-19, after the first fix shipped, 3
            of the 18 answers in JSON-LD still had no counterpart in the page
            text, because the hand-written copy said something different. One
            array, one render: the two cannot diverge again.
          */}
          <Accordion type="single" collapsible className="space-y-4">
            {homepageFAQs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#fbfbee] rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-[16px] leading-[24px] font-semibold text-gray-900 hover:text-[#0b6d41] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-[20px] font-normal text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] mb-6 text-brand-green">
            Ready to Transform Your Future?
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[29.25px] md:leading-[28px] font-normal mb-8 text-gray-700">
            Join JKKN College today and start your journey towards a successful career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-8 py-4 rounded-full text-[16px] leading-[24px] font-semibold hover:bg-[#095c37] transition text-center"
            >
              Apply for Admission
            </a>
            <a href="/pdf/brochure.pdf" download className="bg-white text-brand-green px-8 py-4 rounded-full text-[16px] leading-[24px] font-semibold hover:bg-gray-100 transition border border-gray-300">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Users,
  Award,
  Briefcase,
  Library,
  Building2,
  Lightbulb,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Target,
  DollarSign,
  BarChart,
  Calculator,
  Shield,
  Database,
  Building,
  UserCheck,
  Calendar
} from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';

/* ─── Scroll-reveal hook ─── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* ─── Reveal wrapper ─── */
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── GlassCard component ─── */
function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60 ${hover ? 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

/* ─── Section badge ─── */
function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-green/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-green/15 text-brand-green mb-4">
      <Sparkles className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

export default function BComAccountingFinancePage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const facultyMembers = [
    {
      name: "Mrs.M.S.Punithamalar",
      designation: "HOD & Assistant Professor",
      education: "M.Com(CA), MBA, M.Phil.,(Ph.D)",
      image: "/images/faculties/Mrs.M.S.Punithamalar-300x199.png"
    },
    {
      name: "Ms.G.Buvaneswari",
      designation: "Assistant Professor",
      education: "M.Com, B.ED, M.Phil",
      image: "/images/faculties/Ms.G.Buvaneswari-300x199.png"
    },
    {
      name: "Mrs.N.Lingameena",
      designation: "Assistant Professor",
      education: "M.Com.,M.Phil.",
      image: "/images/faculties/Mrs.N.Lingameena-300x199.png"
    },
    {
      name: "Mr.A.Jegadishkumar",
      designation: "Assistant Professor",
      education: "M.Com.,B.Ed.,MBA",
      image: "/images/faculties/Mr.A.Jegadishkumar-300x199.png"
    },
    {
      name: "Ms.C.Agalya",
      designation: "Assistant Professor",
      education: "M.Com(CA).",
      image: "/images/faculties/Ms.C.Agalya-300x199.png"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between B.Com and B.Com Accounting and Finance?",
      answer: "B.Com Accounting and Finance is a specialized commerce programme with deeper focus on financial accounting, corporate finance, taxation, and auditing compared to general B.Com. It includes advanced subjects like Financial Statement Analysis, Investment Management, and Strategic Financial Management, providing stronger foundation for CA/CMA and finance careers."
    },
    {
      question: "Can I pursue CA after B.Com Accounting and Finance?",
      answer: "Yes, B.Com Accounting and Finance graduates are well-prepared for CA (Chartered Accountancy). The programme curriculum aligns with CA Foundation syllabus, and our department provides additional coaching support. Graduates can directly appear for CA Intermediate after completing their degree, with exemptions available for certain papers."
    },
    {
      question: "What software training is provided during the programme?",
      answer: "The programme includes hands-on training in Tally Prime (with GST), Advanced Microsoft Excel, SAP FICO basics, financial modeling using Excel, and data analysis tools. Learners also get exposure to e-filing portals for Income Tax and GST returns, making them industry-ready from day one."
    },
    {
      question: "What is the average placement package for graduates?",
      answer: "Entry-level positions for B.Com Accounting and Finance graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the sector and role. Positions in Big 4 firms, investment banks, and top corporates offer higher packages. With CA/CMA qualification and experience, salaries can range from ₹10-25 lakhs per annum."
    },
    {
      question: "Is internship mandatory in the programme?",
      answer: "Yes, the programme includes mandatory internship during the final year. The department facilitates internship placements with CA firms, corporate finance departments, banks, and financial institutions. This provides practical exposure to real-world accounting and finance operations, enhancing employability."
    },
    {
      question: "What competitive exams can I prepare for alongside the degree?",
      answer: "Learners can simultaneously prepare for CA Foundation, CMA Foundation, CFA Level 1, banking examinations (IBPS, SBI PO), RBI Grade B, SSC CGL, and UPSC. The department provides guidance and study materials for these examinations through its dedicated coaching center."
    },
    {
      question: "What are the higher education options after this programme?",
      answer: "Graduates can pursue M.Com, MBA (Finance), M.Phil, Ph.D. in Commerce, or specialized programmes like Master in Financial Management (MFM). Professional qualifications include CA, CMA, CFA, ACCA, CFP, and CAIA. Many graduates also pursue dual specializations combining finance with analytics or fintech."
    },
    {
      question: "Are scholarships available for this programme?",
      answer: "Yes, multiple scholarship options are available including merit scholarships for top performers (covering up to 50% tuition), government scholarships for SC/ST/OBC categories, financial aid for economically weaker sections, and sports quota benefits. The college also has tie-ups with various scholarship foundations for deserving learners."
    }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Bachelor of Commerce in Accounting and Finance",
            "description": "A comprehensive 3-year undergraduate programme in Accounting and Finance covering financial accounting, corporate finance, taxation, auditing, cost accounting, and financial management designed to develop analytical thinking, professional competence, and practical business skills.",
            "provider": {
              "@type": "CollegeOrUniversity",
              "name": "JKKN College of Arts and Science",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Komarapalayam",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              }
            },
            "educationalCredentialAwarded": "Bachelor of Commerce in Accounting and Finance",
            "timeToComplete": "P3Y",
            "occupationalCredentialAwarded": "UGC Recognized Degree"
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Banner Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12" style={{ backgroundColor: '#eaf1e2' }}>
          <div className="container mx-auto px-4 relative z-10">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                  <GraduationCap className="w-4 h-4 text-brand-green" />
                  UGC Recognized Programme
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                  Bachelor of Commerce in{' '}
                  <span className="text-brand-green">
                    Accounting and Finance
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                  Master the Art of Financial Excellence and Strategic Business Management
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                    <Clock className="w-5 h-5 text-brand-green" />
                    <span>3 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                    <FileText className="w-5 h-5 text-brand-green" />
                    <span>6 Semesters</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                    <Users className="w-5 h-5 text-brand-green" />
                    <span>Full-Time Programme</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#curriculum" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                    View Curriculum
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="relative z-10 -mt-12 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited Institution', desc: 'Quality assured education' },
                { icon: <DollarSign className="w-7 h-7" />, stat: 'CA/CMA', title: 'Foundation Ready', desc: 'Professional exam preparation' },
                { icon: <Briefcase className="w-7 h-7" />, stat: '90%+', title: 'Placement Record', desc: 'Top corporate recruiters' },
                { icon: <CheckCircle2 className="w-7 h-7" />, stat: 'Industry', title: 'Internships', desc: 'Real-world exposure' },
              ].map((card, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green">
                      {card.icon}
                    </div>
                    <span className="block text-3xl font-bold text-brand-green mb-1">{card.stat}</span>
                    <h3 className="font-bold text-brand-green mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
              <RevealSection className="lg:col-span-3">
                <SectionBadge text="About the Programme" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Programme{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Overview
                  </span>
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  The Bachelor of Commerce in Accounting and Finance is a comprehensive three-year undergraduate programme designed to provide learners with in-depth knowledge of financial accounting, corporate finance, taxation, auditing, and financial management. This UGC-recognized programme offers a perfect blend of theoretical foundations and practical business experience, preparing graduates for diverse career pathways in the financial sector.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our progressive education philosophy ensures that learners develop analytical thinking, professional competence, and ethical values through experiential learning. The curriculum integrates classical accounting principles with modern financial technologies including Tally, SAP, and financial modeling software, equipping graduates with skills demanded by accounting firms, banks, corporations, and financial institutions.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {['Industry-Aligned Curriculum with Tally & SAP', 'CA/CMA/CFA Foundation Preparation', 'Mandatory Internship with Leading Firms', 'Guest Lectures by Industry Professionals'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection className="lg:col-span-2" delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
                  <Image
                    src="/images/faculties/self/bcom A&F/JKKN B.Com Accounting and Finance (1).png"
                    alt="B.Com Accounting and Finance Programme"
                    fill
                    className="object-cover"
                  />
                  {/* <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Since 1952
                  </span> */}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Eligibility & Admission Criteria */}
        <section className="py-16 bg-white" id="eligibility">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection className="text-center mb-12">
                <SectionBadge text="Admission" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Admission Criteria
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Requirements and pathways to join our B.Com Accounting and Finance programme
                </p>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-7 h-7" />,
                    title: "Academic Qualification",
                    points: [
                      "Higher Secondary +2 from recognized board",
                      "Commerce/Science/Arts stream eligible",
                      "Minimum 50% aggregate marks",
                      "45% for OBC, 40% for SC/ST"
                    ]
                  },
                  {
                    icon: <Calendar className="w-7 h-7" />,
                    title: "Accepted Streams",
                    points: [
                      "Commerce stream preferred",
                      "Science with basic mathematics",
                      "Arts with accounting knowledge",
                      "Basic computer literacy required"
                    ]
                  },
                  {
                    icon: <FileText className="w-7 h-7" />,
                    title: "Required Documents",
                    points: [
                      "10th,11th & 12th Mark Sheets",
                      "Transfer Certificate",
                      "Community Certificate",
                      "Passport Size Photographs",
                      "Aadhaar Card Copy",
                      "Bank Details"
                    ]
                  }


                ].map((card, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 h-full">
                      <div className="w-14 h-14 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 border border-brand-green/15 text-brand-green">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold text-brand-green mb-4">{card.title}</h3>
                      <ul className="space-y-2.5 text-gray-700 text-sm">
                        {card.points.map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-16 bg-brand-cream" id="curriculum">
          <div className="container mx-auto px-4">
            <RevealSection className="text-center mb-12">
              <SectionBadge text="Curriculum" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Course{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Curriculum
                </span>
              </h2>
            </RevealSection>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-1 shadow-lg">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all ${activeYear === year
                      ? 'bg-brand-green text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                      }`}
                  >
                    Year {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {activeYear === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Semester I */}
                  <RevealSection>
                    <GlassCard hover={false} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h3 className="text-xl font-bold">Semester I</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: "Tamil - I", code: "19UETA01" },
                          { name: "English - I", code: "20UENC01" },
                          { name: "Principles of Accounting", code: "19UVE01" },
                          { name: "Banking Theory", code: "19UCB02" },
                          { name: "Business Economics", code: "19UECA07" },
                          { name: "Value Education", code: "19UVE01" },
                          { name: "Professional English for Commerce and Management - I", code: "20UPEC01" }
                        ].map((subject, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200/50 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-gray-700 font-medium">{subject.name}</span>
                            </div>
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </RevealSection>

                  {/* Semester II */}
                  <RevealSection delay={100}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h3 className="text-xl font-bold">Semester II</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: "Tamil - II", code: "19UFTA02" },
                          { name: "English - II", code: "20UENC02" },
                          { name: "EVS", code: "19UES01" },
                          { name: "Financial Accounting", code: "19UAF03" },
                          { name: "Banking Theory Law & Practice", code: "19UAF04" },
                          { name: "Indian Economy", code: "19UECA08" },
                          { name: "Professional English for Commerce Management - II", code: "20UPEC02" }
                        ].map((subject, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200/50 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-gray-700 font-medium">{subject.name}</span>
                            </div>
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </RevealSection>
                </div>
              )}

              {activeYear === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Semester III */}
                  <RevealSection>
                    <GlassCard hover={false} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h3 className="text-xl font-bold">Semester III</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: "Business law", code: "19UAF05" },
                          { name: "Corporate Accounting - I", code: "19UAF06" },
                          { name: "Indian Financial Services", code: "19UAF07" },
                          { name: "Capital Market", code: "19UAES01" },
                          { name: "Business Statistical Method", code: "19USTA10" },
                          { name: "Salaipathukappu Vithikal", code: "19UTLN01" },
                          { name: "Business Management", code: "19UAFS02" }
                        ].map((subject, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200/50 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-gray-700 font-medium">{subject.name}</span>
                            </div>
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </RevealSection>

                  {/* Semester IV */}
                  <RevealSection delay={100}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h3 className="text-xl font-bold">Semester IV</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: "Company law", code: "19UAF08" },
                          { name: "Corporate Accounting - II", code: "19UAF09" },
                          { name: "Tally Practicals", code: "19USFP01" },
                          { name: "Project Methodology", code: "19UAFS03" },
                          { name: "Fund Management", code: "19UAF04" },
                          { name: "Business Statistical Decision Techniques", code: "19USTA18" },
                          { name: "Vilambarakkalai", code: "19UTLN02" }
                        ].map((subject, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200/50 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-gray-700 font-medium">{subject.name}</span>
                            </div>
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </RevealSection>
                </div>
              )}

              {activeYear === 3 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Semester V */}
                  <RevealSection>
                    <GlassCard hover={false} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h3 className="text-xl font-bold">Semester V</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: "Cost Accounting", code: "19UAF10" },
                          { name: "Auditing", code: "19UAF11" },
                          { name: "Income Tax Law and Practice", code: "19UAF12" },
                          { name: "Financial Control System", code: "19UAF13" },
                          { name: "Principles of Marketing", code: "19UAFE02" }
                        ].map((subject, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200/50 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-gray-700 font-medium">{subject.name}</span>
                            </div>
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </RevealSection>

                  {/* Semester VI */}
                  <RevealSection delay={100}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h3 className="text-xl font-bold">Semester VI</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: "Management Accounting", code: "19UAF14" },
                          { name: "Financial Management", code: "19UAF15" },
                          { name: "Income Tax Law and Practice - II", code: "19UAF16" },
                          { name: "Fundamental of Insurance", code: "19UAFE04" },
                          { name: "Commerce Practicals", code: "19UAFP02" }
                        ].map((subject, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200/50 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-gray-700 font-medium">{subject.name}</span>
                            </div>
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </RevealSection>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Programme Learning Outcomes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection className="text-center mb-12">
                <SectionBadge text="Learning Outcomes" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Programme Learning{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Outcomes
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Skills and competencies you will develop through this programme
                </p>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    number: "01",
                    title: "Financial Expertise",
                    desc: "Master comprehensive accounting principles, financial reporting standards, and advanced bookkeeping techniques following Indian Accounting Standards (Ind AS) and IFRS."
                  },
                  {
                    icon: <BarChart className="w-6 h-6" />,
                    number: "02",
                    title: "Analytical Proficiency",
                    desc: "Develop strong analytical skills for financial statement analysis, ratio analysis, budgeting, forecasting, and strategic financial decision-making."
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    number: "03",
                    title: "Taxation Knowledge",
                    desc: "Acquire comprehensive understanding of direct and indirect taxation including Income Tax, GST, tax planning strategies, and compliance requirements."
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    number: "04",
                    title: "Auditing Competence",
                    desc: "Learn systematic approaches to internal and external auditing, risk assessment, internal controls, and audit documentation as per auditing standards."
                  },
                  {
                    icon: <Database className="w-6 h-6" />,
                    number: "05",
                    title: "Technology Proficiency",
                    desc: "Apply modern accounting software including Tally Prime, SAP, Excel advanced functions, and financial modeling tools for efficient financial management."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    number: "06",
                    title: "Professional Ethics",
                    desc: "Develop strong ethical foundation, professional communication skills, and leadership qualities essential for finance professionals and chartered accountants."
                  }
                ].map((outcome, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green">
                          {outcome.icon}
                        </div>
                        <span className="text-emerald-500 text-sm font-bold">{outcome.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-3">{outcome.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{outcome.desc}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection className="text-center mb-12">
                <SectionBadge text="Career Paths" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Career{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Opportunities
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Diverse career pathways await B.Com Accounting and Finance graduates
                </p>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <DollarSign className="w-7 h-7" />, title: "Chartered Accountant", desc: "CA Foundation & Intermediate preparation" },
                  { icon: <Building className="w-7 h-7" />, title: "Banking Professional", desc: "Public & Private sector banks" },
                  { icon: <BarChart className="w-7 h-7" />, title: "Financial Analyst", desc: "Investment research & analysis" },
                  { icon: <FileText className="w-7 h-7" />, title: "Tax Consultant", desc: "Income Tax & GST advisory" },
                  { icon: <Shield className="w-7 h-7" />, title: "Auditor", desc: "Internal & External auditing" },
                  { icon: <Calculator className="w-7 h-7" />, title: "Cost Accountant", desc: "CMA professional pathway" },
                  { icon: <Briefcase className="w-7 h-7" />, title: "Corporate Finance", desc: "Finance manager roles in MNCs" },
                  { icon: <GraduationCap className="w-7 h-7" />, title: "Academia", desc: "Teaching & Research positions" },
                ].map((career, idx) => (
                  <RevealSection key={idx} delay={idx * 50}>
                    <GlassCard className="p-6 text-center h-full">
                      <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green">
                        {career.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{career.title}</h3>
                      <p className="text-gray-600 text-sm">{career.desc}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>

              <RevealSection delay={200}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-brand-green">Recruiting Sectors</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Big 4 Accounting Firms",
                      "Commercial Banks",
                      "Investment Banks",
                      "Insurance Companies",
                      "Mutual Fund Houses",
                      "Stock Broking Firms",
                      "Manufacturing Industries",
                      "IT & ITeS Companies",
                      "Government Sector (PSUs)",
                      "Consulting Firms",
                      "E-commerce Companies",
                      "Healthcare Sector"
                    ].map((sector, idx) => (
                      <span
                        key={idx}
                        className="bg-white/40 backdrop-blur-xl border border-white/60 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/60 hover:shadow-md transition-all"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Department Facilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection className="text-center mb-12">
                <SectionBadge text="Infrastructure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Department{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  State-of-the-art infrastructure for comprehensive learning
                </p>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Computer Lab",
                    subtitle: "Computer Lab with Accounting Software",
                    desc: "Fully equipped labs with Tally Prime, SAP, Advanced Excel, and financial modeling software for hands-on practical training.",
                    gradient: "from-brand-green to-emerald-500"
                  },
                  {
                    title: "Digital Library",
                    subtitle: "Digital Library & E-Resources",
                    desc: "Access to ICAI study materials, financial databases, e-journals, and online resources for research and competitive exam preparation.",
                    gradient: "from-emerald-500 to-brand-green"
                  },
                  {
                    title: "Smart Classroom",
                    subtitle: "Smart Learning Studios",
                    desc: "Air-conditioned learning studios equipped with smart boards, projectors, and modern teaching aids for interactive learning.",
                    gradient: "from-brand-green to-emerald-500"
                  },
                  {
                    title: "Seminar Hall",
                    subtitle: "Seminar Hall & Conference Room",
                    desc: "Dedicated spaces for seminars, guest lectures by industry experts, workshops, and professional development programs.",
                    gradient: "from-emerald-500 to-brand-green"
                  },
                  {
                    title: "Placement Cell",
                    subtitle: "Placement & Career Guidance Cell",
                    desc: "Dedicated placement cell facilitating campus recruitment, career counseling, resume building, and interview preparation.",
                    gradient: "from-brand-green to-emerald-500"
                  },
                  {
                    title: "CA Study Center",
                    subtitle: "CA/CMA Study Center",
                    desc: "Dedicated coaching facility for CA Foundation, CMA Foundation, and other professional certification examinations.",
                    gradient: "from-emerald-500 to-brand-green"
                  }
                ].map((facility, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard hover={false} className="overflow-hidden h-full">
                      <div className={`bg-gradient-to-r ${facility.gradient} p-8 text-center`}>
                        <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-brand-green mb-3">{facility.subtitle}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{facility.desc}</p>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-20 bg-white relative overflow-hidden" id="faculty">
          <div className="container mx-auto px-4 md:px-6 relative">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <SectionBadge text="Our Team" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                  Expert Faculty Members
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn from experienced faculty with expertise in accounting and finance.
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="max-w-7xl mx-auto">
                <Marquee pauseOnHover className="[--duration:40s]">
                  {facultyMembers.map((faculty, index) => (
                    <GlassCard key={index} className="w-80 mx-4">
                      <div className="p-6">
                        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-green/20">
                          <Image
                            src={faculty.image}
                            alt={faculty.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-brand-green mb-2">{faculty.name}</h3>
                          <p className="text-sm font-semibold text-gray-600 mb-2">{faculty.designation}</p>
                          <p className="text-xs text-gray-500">{faculty.education}</p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </Marquee>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/programmes/Campus Life.png"
                    alt="Campus Life at JKKN"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <SectionBadge text="Why JKKN" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                    Why Choose Our B.Com{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Accounting and Finance
                    </span>{' '}
                    Programme?
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <GraduationCap className="w-6 h-6" />,
                        title: "70+ Years of Academic Excellence",
                        desc: "Part of J.K.K. Nattraja Educational Institutions with proven legacy in progressive education since 1954."
                      },
                      {
                        icon: <CheckCircle2 className="w-6 h-6" />,
                        title: "Industry-Integrated Curriculum",
                        desc: "Curriculum designed in consultation with CA/CMA professionals and corporate finance experts."
                      },
                      {
                        icon: <Users className="w-6 h-6" />,
                        title: "Experienced Learning Facilitators",
                        desc: "Faculty with CA/CMA qualifications and industry experience providing practical insights."
                      },
                      {
                        icon: <Target className="w-6 h-6" />,
                        title: "Strong Placement Record",
                        desc: "90%+ placement with top recruiters including Big 4 firms, banks, and MNCs visiting campus annually."
                      },
                      {
                        icon: <Award className="w-6 h-6" />,
                        title: "Professional Certification Support",
                        desc: "In-house coaching for CA, CMA, CFA, and banking examinations with dedicated study center."
                      },
                      {
                        icon: <Briefcase className="w-6 h-6" />,
                        title: "Industry Internships",
                        desc: "Mandatory internship program with leading accounting firms and corporate finance departments."
                      }
                    ].map((reason, idx) => (
                      <RevealSection key={idx} delay={idx * 100}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white/40 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/60 text-brand-green">
                            {reason.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-brand-green mb-2">{reason.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                          </div>
                        </div>
                      </RevealSection>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-brand-cream to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <SectionBadge text="Got Questions?" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full"></div>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <GlassCard key={index} className="overflow-hidden" hover={false}>
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/60 transition-colors"
                      aria-expanded={activeFAQ === index}
                    >
                      <h3 className="font-semibold text-brand-green pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform ${activeFAQ === index ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-96' : 'max-h-0'
                        }`}
                    >
                      <div className="p-6 pt-0 text-gray-600">
                        {faq.answer}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-white relative overflow-hidden" id="admission">
          <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative">
            <RevealSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-3xl font-bold text-brand-green mb-6">
                  Ready to Start Your Accounting & Finance Journey?
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Join JKKN&apos;s B.Com Accounting and Finance programme and build a successful career in accounting, finance, and business management
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="group bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="bg-white border-2 border-brand-green hover:bg-brand-green text-brand-green hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                    Schedule Campus Visit
                  </button>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </>
  );
}

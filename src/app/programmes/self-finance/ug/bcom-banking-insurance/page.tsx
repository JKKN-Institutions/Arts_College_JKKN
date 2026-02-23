'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Users,
  Award,
  Briefcase,
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
  Calendar,
  CreditCard,
  LineChart,
  Activity,
  BookOpen,
  TrendingUp
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

export default function BComBankingInsurancePage() {
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
      question: "What is the duration and structure of the B.Com Banking and Insurance programme?",
      answer: "The B.Com Banking and Insurance programme is a 3-year full-time undergraduate degree comprising six semesters. Each year includes two semesters with a combination of core banking subjects, insurance papers, financial accounting, practical software training, and skill-based electives. The final semester includes a mandatory internship and project work component."
    },
    {
      question: "What are the higher education options after B.Com Banking and Insurance?",
      answer: "After completing B.Com Banking and Insurance, learners can pursue M.Com in Banking & Finance, MBA in Finance or Banking Management, Master in Financial Management (MFM), Chartered Accountancy (CA), Company Secretary (CS), CFA, or CAIIB certification. Post-graduation options also include specialized programmes in Risk Management, Investment Banking, and Actuarial Science."
    },
    {
      question: "What competitive exams can I appear for after B.Com Banking and Insurance?",
      answer: "B.Com Banking and Insurance graduates can appear for various competitive examinations including IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B Officer, LIC AAO/ADO, SEBI Grade A, NABARD Grade A/B, Insurance Company recruitment exams, UPSC Civil Services, and State PSC examinations. The programme also prepares learners for professional certifications like IRDA Agent Exam, NISM certifications, and NCFM modules."
    },
    {
      question: "Are internships and practical training included in the curriculum?",
      answer: "Yes, the programme includes mandatory internships with banks, insurance companies, or financial institutions during the final year. Regular industrial visits to RBI, SEBI, NSE/BSE, insurance companies, and commercial banks are organized throughout the programme. The department also conducts banking software training, stock market simulation exercises, and workshops by industry professionals."
    },
    {
      question: "What makes this B.Com Banking and Insurance programme unique?",
      answer: "Our B.Com Banking and Insurance programme stands out due to its industry-aligned curriculum, strong bank and insurance company tie-ups for placements, integrated professional certification training (IRDA, NISM, NCFM), dedicated banking simulation lab, expert Learning Facilitators with industry experience, specialized coaching for bank competitive exams, and focus on fintech and digital banking trends. The programme also offers electives in emerging areas like mutual funds, derivatives, and micro-insurance."
    },
    {
      question: "What is the average salary package for B.Com Banking and Insurance graduates?",
      answer: "Entry-level positions for B.Com Banking and Insurance graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the employer and role. Bank Probationary Officers start at ₹4-6 lakhs, while insurance sector positions offer ₹3-4.5 lakhs initially. With experience and additional certifications like CA, CFA, or CAIIB, professionals can command packages of ₹10-20 lakhs per annum in senior roles."
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
            "name": "Bachelor of Commerce in Banking and Insurance",
            "description": "A comprehensive 3-year undergraduate programme in Banking and Insurance covering financial management, risk assessment, insurance principles, banking operations, and investment strategies designed to develop analytical thinking, financial expertise, and professional skills for the BFSI sector.",
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
            "educationalCredentialAwarded": "Bachelor of Commerce (B.Com) in Banking and Insurance",
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                  Bachelor of Commerce in{' '}
                  <span className="text-brand-green">
                    Banking and Insurance
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                  Shape Your Future in the Financial Services Industry
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
                { icon: <CreditCard className="w-7 h-7" />, stat: 'BFSI', title: 'Industry Focus', desc: 'Banking & insurance sector' },
                { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Top BFSI recruiters' },
                { icon: <Award className="w-7 h-7" />, stat: '₹4.5L', title: 'Average Package', desc: 'Competitive starting salary' },
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
                  The Bachelor of Commerce in Banking and Insurance is a specialized three-year undergraduate programme designed to equip learners with comprehensive knowledge of banking operations, insurance principles, financial management, and risk assessment. This UGC-recognized programme offers an ideal foundation for careers in the rapidly growing Banking, Financial Services, and Insurance (BFSI) sector.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our progressive education philosophy ensures that learners develop analytical thinking, financial acumen, and professional competencies through experiential learning. The curriculum integrates theoretical foundations with practical applications in banking technology, investment management, and regulatory compliance, preparing graduates for diverse roles in commercial banks, insurance companies, NBFCs, and financial institutions.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {['Industry-Aligned Curriculum with Banking Software', 'Expert Learning Facilitators with Industry Background', 'Industrial Visits & Mandatory Internships', 'IRDA, NISM & NCFM Certification Training'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection className="lg:col-span-2" delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://placehold.co/600x450/0b6d41/FFFFFF?text=Banking+%26+Insurance"
                    alt="Banking and Insurance"
                    className="w-full h-auto"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Since 1952
                  </span>
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
                  Requirements and pathways to join our B.Com Banking and Insurance programme
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
                    icon: <BookOpen className="w-7 h-7" />,
                    title: "Accepted Streams",
                    points: [
                      "Commerce with Accountancy",
                      "Science stream (PCM/PCB)",
                      "Arts and Humanities",
                      "Vocational Commerce courses"
                    ]
                  },
                  {
                    icon: <FileText className="w-7 h-7" />,
                    title: "Required Documents",
                    points: [
                      "10th & 12th Mark Sheets",
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
                          { name: "English - II", code: "20UFEN02" },
                          { name: "Financial Accounting", code: "19UCB03" },
                          { name: "Banking Law & Practice", code: "19UCB04" },
                          { name: "Indian Economy", code: "19UECA08" },
                          { name: "Environmental Studies", code: "19UES01" },
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
                          { name: "Business law", code: "19UCB05" },
                          { name: "Corporate Accounting - I", code: "19UCB06" },
                          { name: "E - Banking", code: "19UCB07" },
                          { name: "Marketing of Banking Service", code: "19UCBS02" },
                          { name: "Statistics", code: "19USTA10" },
                          { name: "Capital Market", code: "19UCBS01" },
                          { name: "Road Safety", code: "19UTLN01" }
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
                          { name: "Company law", code: "19UCB09" },
                          { name: "Corporate Accounting - II", code: "19UCB10" },
                          { name: "Bank Management", code: "19UCB08" },
                          { name: "Project Management", code: "19UCBS03" },
                          { name: "Credit Management", code: "19UCBS04" },
                          { name: "Business Statistical Decision & Techniques", code: "19USTA18" },
                          { name: "Advertising", code: "19UTLN02" }
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
                          { name: "Cost Accounting", code: "19UCB11" },
                          { name: "Financial Marketing and Services", code: "19UCB12" },
                          { name: "Income Tax Law and Practice - I", code: "19UCB13" },
                          { name: "Fundamental of Insurance", code: "19UCB14" },
                          { name: "Office Organisation", code: "19UCBE01" }
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
                          { name: "Management Accounting", code: "19UCB15" },
                          { name: "Insurance Management System", code: "19UCB16" },
                          { name: "Income Tax Law and Practice - II", code: "19UCB17" },
                          { name: "Secretary Practice", code: "19UCBE05" },
                          { name: "Commerce Practical", code: "19UCBP01" }
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
                    icon: <Building className="w-6 h-6" />,
                    title: "Banking Operations Expertise",
                    desc: "Master comprehensive banking operations including deposits, loans, credit management, foreign exchange, and treasury functions in commercial banking environments."
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,

                    title: "Insurance Product Knowledge",
                    desc: "Develop thorough understanding of life, general, health, and motor insurance products, underwriting principles, claims processing, and actuarial concepts."
                  },
                  {
                    icon: <BarChart className="w-6 h-6" />,

                    title: "Financial Analysis Skills",
                    desc: "Acquire proficiency in financial statement analysis, ratio analysis, investment evaluation, portfolio management, and risk assessment techniques."
                  },
                  {
                    icon: <Activity className="w-6 h-6" />,

                    title: "Risk Management Competency",
                    desc: "Understand risk identification, measurement, mitigation strategies, and regulatory compliance requirements in the BFSI sector with practical applications."
                  },
                  {
                    icon: <Database className="w-6 h-6" />,

                    title: "Digital Banking Proficiency",
                    desc: "Gain hands-on experience with core banking systems, fintech applications, digital payment platforms, and emerging technologies transforming the financial industry."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,

                    title: "Professional Communication",
                    desc: "Effectively communicate financial concepts, prepare professional reports, presentations, and engage with diverse stakeholders in banking and insurance contexts."
                  }
                ].map((outcome, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 h-full">
                      <div className="w-12 h-12 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 border border-brand-green/15 text-brand-green">
                        {outcome.icon}
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
                  Diverse career pathways await B.Com Banking and Insurance graduates
                </p>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <Building className="w-7 h-7" />, title: "Bank Probationary Officer", desc: "Public/private sector banks" },
                  { icon: <Shield className="w-7 h-7" />, title: "Insurance Advisor", desc: "Life & general insurance companies" },
                  { icon: <LineChart className="w-7 h-7" />, title: "Investment Analyst", desc: "Mutual funds & stock broking" },
                  { icon: <Calculator className="w-7 h-7" />, title: "Credit Analyst", desc: "Loan processing & risk evaluation" },
                  { icon: <FileText className="w-7 h-7" />, title: "Claims Officer", desc: "Insurance claims processing" },
                  { icon: <DollarSign className="w-7 h-7" />, title: "Financial Consultant", desc: "Wealth management services" },
                  { icon: <Award className="w-7 h-7" />, title: "Government Services", desc: "RBI, SEBI, IRDA, LIC, GIC" },
                  { icon: <Briefcase className="w-7 h-7" />, title: "NBFC Executive", desc: "NBFCs & fintech firms" },
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
                  <h3 className="text-2xl font-bold mb-6 text-brand-green">Key Employment Sectors</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Commercial Banks",
                      "Insurance Companies",
                      "Investment Banking",
                      "Mutual Funds",
                      "Stock Broking",
                      "NBFCs & MFIs",
                      "Fintech Companies",
                      "Wealth Management",
                      "Credit Rating Agencies",
                      "Regulatory Bodies",
                      "Corporate Finance",
                      "Financial Consultancy"
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
                    title: "Banking Simulation Lab",
                    subtitle: "Banking Simulation Lab",
                    desc: "Fully equipped computer lab with core banking software, tally, and financial modeling tools for practical hands-on training.",
                    gradient: "from-brand-green to-emerald-500"
                  },
                  {
                    title: "Digital Library",
                    subtitle: "Digital Finance Library",
                    desc: "Extensive collection of banking, insurance, and finance journals, e-books, databases, and research materials with online access.",
                    gradient: "from-emerald-500 to-brand-green"
                  },
                  {
                    title: "Seminar Hall",
                    subtitle: "Seminar Hall",
                    desc: "Modern audio-visual equipped seminar hall for industry expert sessions, workshops, and certification programmes.",
                    gradient: "from-brand-green to-emerald-500"
                  },
                  {
                    title: "Stock Market Lab",
                    subtitle: "Stock Market Lab",
                    desc: "Live stock market terminals with trading simulation software for practical experience in securities trading and analysis.",
                    gradient: "from-emerald-500 to-brand-green"
                  },
                  {
                    title: "Placement Cell",
                    subtitle: "Placement & Career Cell",
                    desc: "Dedicated placement cell with industry connections, interview preparation facilities, and career counseling services.",
                    gradient: "from-brand-green to-emerald-500"
                  },
                  {
                    title: "Smart Studios",
                    subtitle: "Smart Learning Studios",
                    desc: "Technology-enabled learning studios with smart boards, video conferencing, and digital learning resources.",
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
                  Learn from experienced faculty with industry expertise in banking and insurance.
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
        <section className="py-16 bg-white">
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
                      Banking and Insurance
                    </span>{' '}
                    Programme?
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Users className="w-6 h-6" />,
                        title: "Expert Learning Facilitators",
                        desc: "Learn from experienced faculty with industry background in banking, insurance, and financial services."
                      },
                      {
                        icon: <Building className="w-6 h-6" />,
                        title: "Bank Industry Partnerships",
                        desc: "MoUs with leading banks and insurance companies ensuring internships and placement opportunities."
                      },
                      {
                        icon: <Award className="w-6 h-6" />,
                        title: "Professional Certifications",
                        desc: "Integrated IRDA, NISM, and NCFM certification training programs enhancing employability."
                      },
                      {
                        icon: <Globe className="w-6 h-6" />,
                        title: "Industrial Visits & Internships",
                        desc: "Regular visits to banks, insurance companies, stock exchanges, and mandatory industry internships."
                      },
                      {
                        icon: <TrendingUp className="w-6 h-6" />,
                        title: "Strong Placement Support",
                        desc: "Dedicated placement cell with 90%+ placement record in BFSI sector companies."
                      },
                      {
                        icon: <Target className="w-6 h-6" />,
                        title: "Competitive Exam Coaching",
                        desc: "Special coaching for bank exams (IBPS, SBI PO), insurance exams, and other competitive examinations."
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
                  Ready to Start Your Banking & Insurance Journey?
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Join JKKN&apos;s B.Com Banking and Insurance programme and build a successful career in the BFSI sector
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

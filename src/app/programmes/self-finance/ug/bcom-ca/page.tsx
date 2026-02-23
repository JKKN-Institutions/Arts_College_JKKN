'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Building,
  BarChart,
  FileText,
  Shield,
  Database,
  Briefcase,
  UserCheck,
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';

// Helper function for scroll reveal animation
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Reusable reveal section component
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Glassmorphism card component
function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60 ${hover ? 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

// Section badge component
function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-green/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-green/15 text-brand-green mb-4">
      <Sparkles className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

export default function BComCAPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Faculty data
  const facultyMembers = [
    {
      name: "Mrs.M.S.Punithamalar",
      designation: "HOD & Assistant Professor",
      education: "M.Com(CA), MBA, M.Phil.,(Ph.D)",
      image: "/images/faculties/Mrs.M.S.Punithamalar-300x199.png"
    },
    {
      name: "Ms.G.Buvaneswari ",
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
    },
    {
      name: "Mrs.M.Sangeetha",
      designation: "Assistant Professor",
      education: "M.Com(CA)., B.Ed.",
      image: "/images/faculties/Mrs.M.Sangeetha-300x199.png"
    },
    {
      name: "Mr.S.Govindharaj",
      designation: "Assistant Professor",
      education: "M.Com., M.Phil., (Ph.D)",
      image: "/images/faculties/Mr.S.Govindharaj-300x199.png"
    },
    {
      name: "Dr.M.Palanisamy",
      designation: "Assistant Professor",
      education: "MA(ECO).,M.Phil.,Ph.D.",
      image: "/images/faculties/Dr.M.Palanisamy-300x199.png"
    },
    {
      name: "Mrs.G. Manimegalai",
      designation: "Assistant Professor",
      education: "M.COM,B.ED",
      image: "/images/faculties/Manimegalai.jpg"
    }

  ];

  // Curriculum data
  const curriculum = {
    1: {
      year: "First Year",
      semesters: [
        {
          semester: "Semester I",
          subjects: [
            { code: "24UGTA01", name: "Tamil - I" },
            { code: "24UGEN01", name: "English - I" },
            { code: "24UCCC01", name: "Financial Accounting - I" },
            { code: "24UCCC02", name: "Principal of Management" },
            { code: "24UCSGEP04", name: "Python Programming And Lab" },
            { code: "24UBANM1", name: "Basics of Event Management" },
            { code: "24UCCS01", name: "Elements of Industry 4.0" }
          ]
        },
        {
          semester: "Semester II",
          subjects: [
            { code: "24UGTA02", name: "Tamil - II" },
            { code: "24UGEN02", name: "English - II" },
            { code: "24UCCC03", name: "Financial Accounting - II" },
            { code: "24UCCC04", name: "Business law" },
            { code: "24UCSGEP05", name: "Office Automation Lab" },
            { code: "24UBANM2", name: "Managerial Skill Development" },
            { code: "25UCCS02", name: "Industrial law" },
            { code: "25UDIM01", name: "Disaster Management" }
          ]
        }
      ]
    },
    2: {
      year: "Second Year",
      semesters: [
        {
          semester: "Semester III",
          subjects: [
            { code: "24UGTA03", name: "Tamil - III" },
            { code: "24UGEN03", name: "English - III" },
            { code: "24UCCC05", name: "Corporate Accounting - I" },
            { code: "24UCCC06", name: "Business Mathematics And Statistics" },
            { code: "24UCSGEP08", name: "Web Technology (PHP) And Lab" },
            { code: "24UCCS03", name: "Personal Selling" },
            { code: "24UCCS04", name: "Capital Market" },
            { code: "24UHAWP01", name: "Health and Wellness" },
            { code: "24UEVS01A", name: "Environmental Studies" }
          ]
        },
        {
          semester: "Semester IV",
          subjects: [
            { code: "24UGTA04", name: "Tamil - IV" },
            { code: "24UGEN04", name: "English - IV" },
            { code: "24UCCC07", name: "Corporate Accounting - II" },
            { code: "24UCCC08", name: "Company law" },
            { code: "24UCSGEP09", name: "Relational Databases Management System" },
            { code: "24UCCS05", name: "Service Marketing" },
            { code: "24UCCSP01", name: "Commerce Practical" },
            { code: "24UEVS01", name: "Environmental Studies" }
          ]
        }
      ]
    },
    3: {
      year: "Third Year",
      semesters: [
        {
          semester: "Semester V",
          subjects: [
            { code: "23UCC08", name: "Cost Accounting - I" },
            { code: "23UCC09", name: "Banking Law and Practice" },
            { code: "23UCC10", name: "Income Tax Law and Practice - I" },
            { code: "23UCCE02", name: "Indirect Taxation" },
            { code: "23UCCEP07", name: "Software Engineer UML Lab" },
            { code: "23UCCIT1", name: "Internship Training" },
            { code: "NMAST51", name: "Accounting and Trading Essentials Employment" },
            { code: "23UVE01", name: "Yoga for Human Excellence" },
            { code: "23UCCPR1", name: "Project Viva Voce" }
          ]
        },
        {
          semester: "Semester VI",
          subjects: [
            { code: "", name: "Cost Accounting" },
            { code: "", name: "Management Accounting" },
            { code: "", name: "Income Tax Law and Practice" },
            { code: "", name: "Human Resources Management" },
            { code: "", name: "General Awareness for Competitive Examinations" },
            { code: "", name: "Tally Practicals" }
          ]
        }
      ]
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between B.Com CA and regular B.Com?",
      answer: "B.Com CA integrates computer applications with commerce education, providing specialized training in accounting software, database management, and business analytics alongside traditional commerce subjects. This makes graduates more employable in the digital economy."
    },
    {
      question: "Can I pursue CA after B.Com CA?",
      answer: "Yes, absolutely! B.Com CA graduates can register for CA (Chartered Accountant) course. The strong foundation in accounting and finance provided by this programme helps in clearing CA examinations. Many of our students successfully pursue CA alongside or after graduation."
    },
    {
      question: "What accounting software will I learn during the programme?",
      answer: "Students receive hands-on training in Tally ERP, SAP, Microsoft Excel (advanced), QuickBooks, and other industry-standard accounting and business intelligence tools. We also cover emerging technologies in fintech and digital accounting."
    },
    {
      question: "Are internships mandatory in this programme?",
      answer: "Yes, students must complete a mandatory internship during the final year. The college has tie-ups with accounting firms, banks, corporate houses, and financial institutions to provide quality internship opportunities. This practical exposure is crucial for career readiness."
    },
    {
      question: "What are the placement opportunities after B.Com CA?",
      answer: "Our placement cell actively works with accounting firms, banks, insurance companies, IT firms, and corporate organizations. Graduates are placed in roles such as Accountant, Tax Consultant, Financial Analyst, Business Analyst, MIS Executive, and Audit Assistant with competitive salary packages."
    },
    {
      question: "Is mathematics mandatory for admission to B.Com CA?",
      answer: "While not strictly mandatory, having Mathematics or Accountancy at +2 level is preferred as it provides a strong foundation. However, students from other streams can also apply if they meet the minimum eligibility criteria and are willing to put in extra effort."
    }
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12" style={{ backgroundColor: '#eaf1e2' }}>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <GraduationCap className="w-4 h-4 text-brand-green" />
                Self-Finance Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                Bachelor of Commerce in{' '}
                <span className="text-brand-green">
                  Computer Application
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Master Financial Excellence & Strategic Business Management
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>3 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <BookOpen className="w-5 h-5 text-brand-green" />
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
              { icon: <Users className="w-7 h-7" />, stat: '15:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized attention' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Career opportunities assured' },
              { icon: <Award className="w-7 h-7" />, stat: '₹4.5L', title: 'Average Package', desc: 'Competitive starting salary' },
            ].map((card, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green transition-colors">
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

      {/* Quick Stats Section */}
      {/* <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">
                    <CountUp end={70} duration={2000} />+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">
                    <CountUp end={90} duration={2000} />%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Placement Record</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">CA/CMA</div>
                  <div className="text-sm text-gray-600 font-medium">Foundation Ready</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">Big 4</div>
                  <div className="text-sm text-gray-600 font-medium">Firm Placements</div>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section> */}

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
                The Bachelor of Commerce in Computer Application is a comprehensive three-year undergraduate programme designed to provide learners with in-depth knowledge of financial accounting, corporate finance, taxation, auditing, and financial management integrated with advanced computer applications. This UGC-recognized programme offers a perfect blend of theoretical foundations and practical business experience, preparing graduates for diverse career pathways in the financial and technology sectors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that learners develop analytical thinking, professional competence, and ethical values through experiential learning. The curriculum integrates classical accounting principles with modern financial technologies including Tally, SAP, and financial modeling software, equipping graduates with skills demanded by accounting firms, banks, corporations, and financial institutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'Tally & SAP Training', 'CA/CMA Foundation Support', 'Mandatory Internships'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="lg:col-span-2" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/faculties/self/bcomca/JKKN B.Com CA (1).png"
                  alt="Commerce Computer Lab"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission Criteria */}
      <section className="py-16 bg-white" id="eligibility">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Admissions" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Admission Criteria
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Requirements for joining the B.Com Computer Application programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary +2 from recognized board', 'Commerce/Science/Arts stream eligible', 'Minimum 50% aggregate marks', '45% for OBC, 40% for SC/ST']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Commerce stream preferred', 'Science with basic mathematics', 'Arts with accounting knowledge', 'Basic computer literacy required']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th,11th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photos', 'Aadhaar Card Copy', 'Bank Details']
                }
              ].map((card, idx) => (
                <RevealSection key={idx} delay={idx * 150}>
                  <GlassCard className="p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-green mb-4">{card.title}</h3>
                    <ul className="space-y-2 text-gray-700">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{item}</span>
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

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-brand-cream to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Academic Structure" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Course Curriculum
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full"></div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              {/* Year Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all ${activeYear === year
                      ? 'bg-brand-green text-white shadow-xl shadow-brand-green/25 scale-105'
                      : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
                      }`}
                  >
                    Year {year}
                  </button>
                ))}
              </div>

              {/* Semesters Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {curriculum[activeYear as keyof typeof curriculum].semesters.map((sem, idx) => (
                  <GlassCard key={idx} className="p-8" hover={false}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-green">{sem.semester}</h3>
                    </div>
                    <div className="space-y-3">
                      {sem.subjects.map((subject, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors border border-white/60"
                        >
                          <span className="text-gray-700 font-medium">{subject.name}</span>
                          <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="What You'll Gain" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Programme Learning Outcomes
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                Skills and competencies you will develop through this programme
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Financial Expertise */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Financial Expertise</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Master comprehensive accounting principles, financial reporting standards, and advanced bookkeeping techniques following Indian Accounting Standards (Ind AS) and IFRS.
                  </p>
                </GlassCard>

                {/* Analytical Proficiency */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Analytical Proficiency</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Develop strong analytical skills for financial statement analysis, ratio analysis, budgeting, forecasting, and strategic financial decision-making.
                  </p>
                </GlassCard>

                {/* Taxation Knowledge */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Taxation Knowledge</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Acquire comprehensive understanding of direct and indirect taxation including Income Tax, GST, tax planning strategies, and compliance requirements.
                  </p>
                </GlassCard>

                {/* Auditing Competence */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Auditing Competence</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Learn systematic approaches to internal and external auditing, risk assessment, internal controls, and audit documentation as per auditing standards.
                  </p>
                </GlassCard>

                {/* Technology Proficiency */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Technology Proficiency</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Apply modern accounting software including Tally Prime, SAP, Excel advanced functions, and financial modeling tools for efficient financial management.
                  </p>
                </GlassCard>

                {/* Professional Ethics */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Professional Ethics</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Develop strong ethical foundation, professional communication skills, and leadership qualities essential for finance professionals and chartered accountants.
                  </p>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-brand-cream via-emerald-50/30 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Future Prospects" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Career Opportunities
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                Diverse career pathways await B.Com Accounting and Finance graduates
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Chartered Accountant */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Chartered Accountant</h3>
                  <p className="text-gray-600 text-sm">CA Foundation & Intermediate preparation</p>
                </GlassCard>

                {/* Banking Professional */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Banking Professional</h3>
                  <p className="text-gray-600 text-sm">Public & Private sector banks</p>
                </GlassCard>

                {/* Financial Analyst */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Financial Analyst</h3>
                  <p className="text-gray-600 text-sm">Investment research & analysis</p>
                </GlassCard>

                {/* Tax Consultant */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Tax Consultant</h3>
                  <p className="text-gray-600 text-sm">Income Tax & GST advisory</p>
                </GlassCard>

                {/* Auditor */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Auditor</h3>
                  <p className="text-gray-600 text-sm">Internal & External auditing</p>
                </GlassCard>

                {/* Cost Accountant */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Cost Accountant</h3>
                  <p className="text-gray-600 text-sm">CMA professional pathway</p>
                </GlassCard>

                {/* Corporate Finance */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Corporate Finance</h3>
                  <p className="text-gray-600 text-sm">Finance manager roles in MNCs</p>
                </GlassCard>

                {/* Academia */}
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Academia</h3>
                  <p className="text-gray-600 text-sm">Teaching & Research positions</p>
                </GlassCard>
              </div>

              {/* Recruiting Sectors */}
              <GlassCard className="p-8" hover={false}>
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Recruiting Sectors</h3>
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
                      className="bg-white/60 backdrop-blur-sm border border-brand-green/20 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/80 hover:shadow-md transition-all"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Infrastructure" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Department Facilities
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                State-of-the-art infrastructure for comprehensive learning
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Computer Lab */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Computer Lab</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Computer Lab with Accounting Software
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully equipped labs with Tally Prime, SAP, Advanced Excel, and financial modeling software for hands-on practical training.
                    </p>
                  </div>
                </GlassCard>

                {/* Digital Library */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Digital Library</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Digital Library & E-Resources
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access to ICAI study materials, financial databases, e-journals, and online resources for research and competitive exam preparation.
                    </p>
                  </div>
                </GlassCard>

                {/* Smart Classroom */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Smart Classroom</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Smart Learning Studios
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Air-conditioned learning studios equipped with smart boards, projectors, and modern teaching aids for interactive learning.
                    </p>
                  </div>
                </GlassCard>

                {/* Seminar Hall */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Seminar Hall</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Seminar Hall & Conference Room
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated spaces for seminars, guest lectures by industry experts, workshops, and professional development programs.
                    </p>
                  </div>
                </GlassCard>

                {/* Placement Cell */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Placement Cell</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Placement & Career Guidance Cell
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated placement cell facilitating campus recruitment, career counseling, resume building, and interview preparation.
                    </p>
                  </div>
                </GlassCard>

                {/* CA Study Center */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">CA Study Center</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      CA/CMA Study Center
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated coaching facility for CA Foundation, CMA Foundation, and other professional certification examinations.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cream via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/programmes/Campus Life.png"
                    alt="Campus Life at JKKN"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Side */}
                <div>
                  <SectionBadge text="Our Advantages" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
                    Why Choose Our B.Com Accounting and Finance Programme?
                  </h2>
                  <div className="w-16 h-1 bg-brand-green rounded-full mb-8"></div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          31+ Years of Academic Excellence
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Part of JKKN Educational Institutions with proven legacy in progressive education since 1954.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Industry-Integrated Curriculum
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Curriculum designed in consultation with CA/CMA professionals and corporate finance experts.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Experienced Learning Facilitators
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Faculty with CA/CMA qualifications and industry experience providing practical insights.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Strong Placement Record
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          90%+ placement with top recruiters including Big 4 firms, banks, and MNCs visiting campus annually.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Professional Certification Support
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          In-house coaching for CA, CMA, CFA, and banking examinations with dedicated study center.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Industry Internships
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mandatory internship program with leading accounting firms and corporate finance departments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Our Team" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Expert Faculty Members
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Learn from experienced faculty with CA/CMA qualifications and industry experience.
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
                    onClick={() => toggleFAQ(index)}
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-3xl font-bold text-brand-green mb-6">
                Ready to Start Your Accounting & Finance Journey?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join JKKN's B.Com CA programme and build a successful career in accounting, finance, and technology
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
    </>
  );
}

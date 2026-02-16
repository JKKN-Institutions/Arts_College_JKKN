'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ChevronDown,
  DollarSign,
  Building,
  BarChart,
  FileText,
  Shield,
  Database,
  Briefcase,
  Sparkles,
  ArrowRight,
  Clock,
  Globe,
  Target,
  Lightbulb
} from 'lucide-react';
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
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
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

export default function MComPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Curriculum data
  const curriculum = {
    1: {
      year: "First Year",
      semesters: [
        {
          semester: "Semester I",
          subjects: [
            { code: "MCO101", name: "Business Finance" },
            { code: "MCO102", name: "Digital Marketing" },
            { code: "MCO103", name: "Banking & Insurance" },
            { code: "MCO104", name: "Operation Research" },
            { code: "MCO105", name: "Strategic HRM" }
          ]
        },
        {
          semester: "Semester II",
          subjects: [
            { code: "MCO201", name: "Strategic Cost Management" },
            { code: "MCO202", name: "Corporate Accounting" },
            { code: "MCO203", name: "Settings up of Business Entities" },
            { code: "MCO204", name: "Audit and Due Diligence" },
            { code: "MCO205", name: "Logistics and Supply Chain Management" },
            { code: "MCO206", name: "Fundamental of Human Rights" },
            { code: "MCO207", name: "Principles of Information Technology" }
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
            { code: "MCO301", name: "Taxation" },
            { code: "MCO302", name: "Research Methodology" },
            { code: "MCO303", name: "Computer Application in Business" },
            { code: "MCO304", name: "International Business" },
            { code: "MCO305", name: "International Financial Management" }
          ]
        },
        {
          semester: "Semester IV",
          subjects: [
            { code: "MCO401", name: "Corporate and Economic Law" },
            { code: "MCO402", name: "Human Resources Analysis" },
            { code: "MCO403", name: "Insolvency Law and Practice" },
            { code: "MCO404", name: "E-Filling & Gst Return" },
            { code: "MCO405", name: "Project Work" },
            { code: "MCO406", name: "Extension Activities" }
          ]
        }
      ]
    }
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

  // FAQ data
  const faqs = [
    {
      question: "What is the duration of the M.Com programme?",
      answer: "The M.Com (Master of Commerce) programme is a 2-year full-time postgraduate degree comprising four semesters. The programme provides advanced knowledge in commerce, accounting, finance, and business research methodology, preparing graduates for senior management positions and academic careers."
    },
    {
      question: "Who is eligible for M.Com admission?",
      answer: "Candidates with a Bachelor's degree in Commerce (B.Com), Business Administration (BBA), Business Management (BBM), or equivalent from a recognized university are eligible. The minimum aggregate marks requirement is typically 50% (45% for reserved categories). Learners with B.Com (CA), B.Com (Honours), or related degrees are also eligible."
    },
    {
      question: "What career opportunities are available after M.Com?",
      answer: "M.Com graduates have diverse career options including Finance Manager, Investment Analyst, University Professor, Management Consultant, Chief Financial Officer (CFO), Tax Consultant, Research Analyst, and Corporate Strategist. Graduates can work in sectors like investment banking, consulting firms, academia, corporate finance, and research institutions with higher salary packages compared to undergraduate degree holders."
    },
    {
      question: "Can I pursue Ph.D. after M.Com?",
      answer: "Yes, M.Com is an excellent foundation for pursuing a Ph.D. in Commerce, Accounting, Finance, or related fields. After clearing the UGC NET examination, you become eligible for the position of Assistant Professor in colleges and universities. Many M.Com graduates pursue doctoral research in specialized areas like taxation, financial management, or business analytics."
    },
    {
      question: "What is the average salary after M.Com?",
      answer: "M.Com graduates typically command higher salaries than B.Com graduates. The average starting package ranges from ₹5-7 LPA for entry-level positions. With experience and additional certifications like CA, CFA, or CMA, professionals can earn ₹10-20 LPA or more. Senior roles like CFO and Finance Directors in large corporations can command packages exceeding ₹50 LPA."
    },
    {
      question: "Is dissertation/project mandatory in M.Com?",
      answer: "Yes, the programme includes a mandatory dissertation or project work in the final semester. Learners conduct research under the guidance of experienced Learning Facilitators on topics related to commerce, accounting, finance, or business management. This research component develops critical thinking, analytical skills, and prepares Learners for advanced academic pursuits or research-oriented careers."
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
                Self-Finance Postgraduate Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Master of Commerce{' '}
                <span className="text-brand-green">(M.Com)</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Advanced Expertise in Commerce, Finance & Business Research
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>2 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <BookOpen className="w-5 h-5 text-brand-green" />
                  <span>4 Semesters</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Users className="w-5 h-5 text-brand-green" />
                  <span>Full-Time Programme</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#admission" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
              { icon: <Users className="w-7 h-7" />, stat: '12:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized mentoring' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Premium opportunities' },
              { icon: <Award className="w-7 h-7" />, stat: '₹7L', title: 'Average Package', desc: 'Competitive compensation' },
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
                The Master of Commerce (M.Com) is an advanced two-year postgraduate programme designed to develop expert professionals with comprehensive knowledge in accounting, finance, taxation, business research, and strategic management. This UGC-recognized programme builds upon undergraduate foundations to create industry-ready leaders capable of driving organizational excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures Learners receive specialized training through research-oriented learning, advanced case studies, and industry partnerships. The curriculum is aligned with professional certifications such as CA, CMA, CS, CFA, and UGC NET, preparing graduates for senior management positions, academic careers, and research-based roles in diverse sectors.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Research-Oriented Curriculum', 'UGC NET Preparation Support', 'Advanced Financial Analytics', 'Corporate Internship Programme'].map((item, idx) => (
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
                  src="/images/programmes/mcom-hero.jpg"
                  alt="M.Com Research Studio"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1954
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
                  Requirements for joining the M.Com postgraduate programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ["Bachelor's Degree from recognized university", 'B.Com / BBA / BBM / B.Com (CA)', 'Minimum 50% aggregate marks', '45% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Preferred Background',
                  items: ['B.Com with Accounting specialization', 'BBA with Finance major', 'Commerce with Mathematics', 'CA/CMA Foundation completed']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['All Degree Certificates & Mark Sheets', 'Transfer Certificate', 'Migration Certificate', 'Passport Size Photographs', 'Aadhaar Card & Community Certificate']
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-brand-cream to-blue-50 relative overflow-hidden" id="curriculum">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Academic Structure" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Programme Curriculum
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                Advanced syllabus designed to build expertise in commerce research, advanced accounting, and strategic management
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              {/* Year Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[1, 2].map((year) => (
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
                          className="flex items-center py-3 px-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors border border-white/60"
                        >
                          <span className="text-gray-700 font-medium">{subject.name}</span>
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
                Skills and competencies you will develop during the M.Com programme
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Advanced Financial Analysis</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Master complex financial statements, ratio analysis, and strategic financial decision-making techniques.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Research Competency</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Develop strong research methodologies, statistical analysis skills, and academic writing capabilities.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Leadership Excellence</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Build strategic thinking, team management, and organizational leadership capabilities.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Global Business Perspective</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Understand international financial systems, cross-border transactions, and global market dynamics.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Technology Integration</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Leverage advanced accounting software, ERP systems, and business analytics tools effectively.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Ethical Decision Making</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Apply corporate governance principles, ethical standards, and professional responsibility in business.
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
                Premium career pathways available for M.Com graduates
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <DollarSign className="w-7 h-7 text-white" />, title: 'Finance Manager', salary: '₹8-15 LPA' },
                  { icon: <BarChart className="w-7 h-7 text-white" />, title: 'Investment Analyst', salary: '₹7-12 LPA' },
                  { icon: <GraduationCap className="w-7 h-7 text-white" />, title: 'University Professor', salary: 'Academic Career' },
                  { icon: <Award className="w-7 h-7 text-white" />, title: 'Chief Financial Officer', salary: '₹20-50 LPA' },
                  { icon: <FileText className="w-7 h-7 text-white" />, title: 'Senior Tax Consultant', salary: '₹6-10 LPA' },
                  { icon: <Lightbulb className="w-7 h-7 text-white" />, title: 'Management Consultant', salary: '₹10-18 LPA' },
                  { icon: <Building className="w-7 h-7 text-white" />, title: 'Corporate Strategist', salary: '₹12-20 LPA' },
                  { icon: <Target className="w-7 h-7 text-white" />, title: 'Research Analyst', salary: '₹5-9 LPA' }
                ].map((career, idx) => (
                  <GlassCard key={idx} className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {career.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">{career.title}</h3>
                    <p className="text-gray-600 text-sm">{career.salary}</p>
                  </GlassCard>
                ))}
              </div>

              <GlassCard className="p-8" hover={false}>
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Top Recruiting Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Investment Banking", "Asset Management", "Big Four Accounting", "Corporate Finance",
                    "Management Consulting", "Higher Education", "Research Institutions", "Government Services",
                    "FinTech Companies", "Multinational Corporations", "Private Equity", "Insurance Sector"
                  ].map((sector, idx) => (
                    <span key={idx} className="bg-white/60 backdrop-blur-sm border border-brand-green/20 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/80 hover:shadow-md transition-all">
                      {sector}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Choose Your Path" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Available Specializations
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                Choose your area of advanced expertise for premium career prospects
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <DollarSign className="w-7 h-7 text-white" />, title: 'Finance & Accounting', desc: 'Advanced financial reporting, corporate finance, and strategic accounting practices' },
                  { icon: <BarChart className="w-7 h-7 text-white" />, title: 'Investment & Portfolio', desc: 'Securities analysis, portfolio management, and wealth advisory services' },
                  { icon: <Building className="w-7 h-7 text-white" />, title: 'Banking & Financial Services', desc: 'Commercial banking, financial markets, and insurance management' },
                  { icon: <FileText className="w-7 h-7 text-white" />, title: 'Taxation & Compliance', desc: 'Direct & indirect taxation, GST compliance, and tax advisory' },
                  { icon: <Globe className="w-7 h-7 text-white" />, title: 'International Business', desc: 'Global trade, foreign exchange, and multinational corporate management' },
                  { icon: <Database className="w-7 h-7 text-white" />, title: 'Business Analytics', desc: 'Data-driven decision making, financial modeling, and predictive analytics' }
                ].map((spec, idx) => (
                  <GlassCard key={idx} className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      {spec.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-green mb-3">{spec.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{spec.desc}</p>
                  </GlassCard>
                ))}
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
                Learn from experienced faculty with advanced qualifications and industry experience in commerce and finance.
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
                    <ChevronDown className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
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
                Elevate Your Career in Commerce & Finance
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join JKKN's M.Com programme and unlock premium opportunities in corporate finance, academia, and research
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white border-2 border-brand-green hover:bg-brand-green text-brand-green hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                  Download Brochure
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, Building2, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, TrendingUp, BarChart, DollarSign, UserCheck, LineChart, Lightbulb, ShoppingCart, Rocket, Package, Calendar } from 'lucide-react';
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

export default function BBAPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  // Faculty data
  const facultyMembers = [
    {
      name: "Mrs. M. Umarani",
      designation: "Assistant Professor",
      education: "M.Com., MBA., M.Phil.",
      image: "/images/faculties/self/bba/Mrs.M.Umarani-300x199.png"
    },
    {
      name: "Mrs. P. Mathiananthi",
      designation: "Assistant Professor",
      education: "MBA.",
      image: "/images/faculties/self/bba/Mrs.P.Mathiananthi-300x199.png"
    },
    {
      name: "Mr. A. K. Prithiviraja",
      designation: "Assistant Professor",
      education: "MBA., M.Phil.",
      image: "/images/faculties/self/bba/Mr.A.K.Prithiviraja-300x199.png"
    },
    {
      name: "Mr. A. Jegadishkumar",
      designation: "Assistant Professor",
      education: "M.Com., B.Ed., MBA.",
      image: "/images/faculties/self/bba/Mr.A.Jegadishkumar-300x199 (1).png"
    }
  ];

  const faqs = [
    {
      question: "What is the duration of the BBA programme?",
      answer: "The BBA (Bachelor of Business Administration) programme is a 3-year full-time undergraduate degree comprising six semesters with practical projects, internships, and industry exposure."
    },
    {
      question: "What are the career opportunities after BBA?",
      answer: "BBA graduates can pursue careers in corporate management, marketing, finance, banking, human resources, entrepreneurship, business consulting, retail management, supply chain management, and can also pursue higher studies like MBA, CA, CMA, and other professional courses."
    },
    {
      question: "What is the eligibility criteria for BBA admission?",
      answer: "Candidates must have completed Higher Secondary (10+2) from any recognized board with a minimum of 50% aggregate marks. Students from any stream (Science, Commerce, or Arts) can apply for BBA admission."
    },
    {
      question: "Is BBA better than B.Com for a management career?",
      answer: "BBA offers a broader management-focused curriculum covering all business functions, making it ideal for those aiming for general management roles or entrepreneurship. B.Com is more focused on accounting and commerce. BBA provides better exposure to marketing, HR, and strategic management from the undergraduate level."
    },
    {
      question: "What is the average salary after completing BBA?",
      answer: "Entry-level positions for BBA graduates typically offer packages ranging from ₹3 to ₹6 lakhs per annum depending on the role and company. With experience and an MBA, salaries can significantly increase to ₹10-25 lakhs per annum in senior management positions."
    },
    {
      question: "Are internships part of the BBA programme?",
      answer: "Yes, internships are mandatory in the BBA programme. Students complete a summer internship project after the fourth semester and a final project in the sixth semester. The college has tie-ups with leading companies across various industries to provide quality internship opportunities."
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
            "name": "Bachelor of Business Administration (BBA)",
            "description": "A comprehensive 3-year undergraduate programme in Business Administration covering management principles, marketing, finance, human resources, entrepreneurship, and business analytics designed to develop leadership, strategic thinking, and professional management skills.",
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
            "educationalCredentialAwarded": "Bachelor of Business Administration (BBA)",
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
                  Bachelor of{' '}
                  <span className="text-brand-green">
                    Business Administration
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                  Master the Art of Strategic Management and Business Leadership
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
                { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited', desc: 'Quality assured education' },
                { icon: <Rocket className="w-7 h-7" />, stat: 'MBA', title: 'Pathway Ready', desc: 'Direct MBA preparation' },
                { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Rate', desc: 'Top corporate recruiters' },
                { icon: <CheckCircle2 className="w-7 h-7" />, stat: 'Industry', title: 'Internships', desc: 'Real-world experience' },
              ].map((card, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-brand-green/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-brand-green/15 text-brand-green group-hover:text-emerald-600 transition-colors">
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
                  The Bachelor of Business Administration (BBA) is a comprehensive three-year undergraduate programme designed to provide Learners with a solid foundation in business management, leadership, and entrepreneurship. This UGC-recognized programme offers an ideal blend of theoretical knowledge and practical application, preparing graduates for successful careers in corporate management, startups, and business consulting.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our progressive education philosophy ensures that Learners develop strategic thinking, analytical capabilities, and leadership skills through experiential learning. The curriculum integrates core management disciplines with contemporary business practices including digital marketing, business analytics, e-commerce, and sustainable business strategies, equipping graduates with competencies demanded by multinational corporations, SMEs, and entrepreneurial ventures.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {['Industry-integrated curriculum with live projects', 'Expert learning facilitators with corporate experience', 'Mandatory corporate internships and summer projects', 'Guest lectures by industry leaders and entrepreneurs'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection className="lg:col-span-2" delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/faculties/self/bba/JKKN BBA.png"
                    alt="BBA - Business Administration Programme"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
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
                    Requirements and pathways to join our BBA programme
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-8 h-8 text-white" />,
                    title: 'Academic Qualification',
                    items: ['Higher Secondary (10+2) from any recognized board in any stream', 'Students from Science, Commerce, or Arts are eligible', 'Equivalent qualifications recognized by UGC']
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-white" />,
                    title: 'Minimum Marks',
                    items: ['General Category: 50% aggregate', 'OBC Category: 45% aggregate', 'SC/ST Category: 40% aggregate', 'Differently Abled: 40% aggregate']
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-white" />,
                    title: 'Required Documents',
                    items: ['10th & 12th Mark Sheets & Certificates', 'Transfer Certificate (TC)', 'Community Certificate (if applicable)', 'Passport Size Photographs']
                  }
                ].map((card, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
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

        {/* Programme Curriculum */}
        <section className="py-16 bg-brand-cream" id="curriculum">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Curriculum" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Programme{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Curriculum
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive business management curriculum with practical industry exposure
                  </p>
                </div>
              </RevealSection>

              <RevealSection>
                <div className="flex justify-center gap-2 mb-8">
                  {[1, 2, 3].map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeYear === year
                        ? 'bg-gradient-to-r from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/25'
                        : 'bg-white text-brand-green hover:bg-brand-green/5'
                        }`}
                    >
                      Year {year}
                    </button>
                  ))}
                </div>
              </RevealSection>

              {activeYear === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Semester I',
                      subjects: [
                        { name: 'General Tamil - I', code: '24UGTA01' },
                        { name: 'General English – I', code: '24UGEN01' },
                        { name: 'Principles of Management', code: '24UBAC01' },
                        { name: 'Accounting for Managers I', code: '24UBAC02' },
                        { name: 'Managerial Economics', code: '24UECGE3' },
                        { name: 'Basics of Event Management', code: '24UBANM1' },
                        { name: 'Managerial Communication', code: '24UBAS01' }
                      ]
                    },
                    {
                      title: 'Semester II',
                      subjects: [
                        { name: 'General Tamil – II', code: '24UGTA02' },
                        { name: 'General English – II', code: '24UGEN02' },
                        { name: 'Marketing Management', code: '24UBAC03' },
                        { name: 'Accounting for Managers - II', code: '24UBAC04' },
                        { name: 'International Business', code: '24UECGE5' },
                        { name: 'Managerial Skill Development', code: '24UBANM2' },
                        { name: 'Business Etiquette and Corporate Grooming', code: '24UBAS02' }
                      ]
                    }
                  ].map((sem, idx) => (
                    <RevealSection key={idx} delay={idx * 150}>
                      <GlassCard className="overflow-hidden" hover={false}>
                        <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                          <h4 className="text-xl font-bold">{sem.title}</h4>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {sem.subjects.map((subject, i) => (
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </RevealSection>
                  ))}
                </div>
              )}

              {activeYear === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Semester III',
                      subjects: [
                        { name: 'General Tamil - III', code: '24UGTA03' },
                        { name: 'General English - III', code: '24UGENO3' },
                        { name: 'Organizational Behaviour', code: '24UBACO5' },
                        { name: 'Financial Management', code: '24UBACO6' },
                        { name: 'Business Statistics', code: '24UBADE1' },
                        { name: 'Computer Application in Business - Practical', code: '24UBASP01' },
                        { name: 'Business Entrepreneurial Skill New Venture Management', code: '24UBAS03' },
                        { name: 'Environmental Studies', code: '24UEVS01' },
                        { name: 'Health & Wellness', code: '24UHAWP01' }
                      ]
                    },
                    {
                      title: 'Semester IV',
                      subjects: [
                        { name: 'General Tamil - IV', code: '24UGTA04' },
                        { name: 'General English - IV', code: '24UGENO4' },
                        { name: 'Business Environment', code: '24UBACO7' },
                        { name: 'Business Regulatory Frame Work', code: '24UBACO8' },
                        { name: 'Operations Research', code: '24UBADE2' },
                        { name: 'Tally Practical', code: '24UBASP02' },
                        { name: 'Intellectual Property Rights', code: '24UBAS04' },
                        { name: 'Environmental Studies', code: '24UEVS01' }
                      ]
                    }
                  ].map((sem, idx) => (
                    <RevealSection key={idx} delay={idx * 150}>
                      <GlassCard className="overflow-hidden" hover={false}>
                        <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                          <h4 className="text-xl font-bold">{sem.title}</h4>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {sem.subjects.map((subject, i) => (
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span className="text-sm">{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-xs ml-2 whitespace-nowrap">{subject.code}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </RevealSection>
                  ))}
                </div>
              )}

              {activeYear === 3 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Semester V',
                      subjects: [
                        { name: 'Human Resource Management', code: '24UBAC09' },
                        { name: 'Research Methodology', code: '24UBAC10' },
                        { name: 'Business Taxation', code: '24UBAC11' },
                        { name: 'Management Information System', code: '24UBAC12' },
                        { name: 'Digital Marketing', code: '24UBADE3' },
                        { name: 'Industrial Relations', code: '24UBADE4' },
                        { name: 'Financial Services', code: '24UBADE5' },
                        { name: 'Project with Viva – Voce-Value Education', code: '24UBAPRO01' },
                        { name: 'Summer Internship / Industrial Training', code: '24UBASI001' }
                      ]
                    },
                    {
                      title: 'Semester VI',
                      subjects: [
                        { name: 'Entrepreneurial Development', code: '24UBAC13' },
                        { name: 'Services Marketing', code: '24UBAC14' },
                        { name: 'Production and Materials Management', code: '24UBAC15' },
                        { name: 'Consumer Behaviour', code: '24UBADE6' },
                        { name: 'Innovation Management', code: '24UBADE7' },
                        { name: 'Security Analysis & Portfolio Management', code: '24UBADE8' },
                        { name: 'Fundamentals of Logistics', code: '24UBADE9' },
                        { name: 'E-Business', code: '24UBADE10' },
                        { name: 'Strategic Management', code: '24UBADE11' },
                        { name: 'Quantitative Aptitude - I', code: '24UBAPCE001' },
                        { name: 'Quantitative Aptitude - II', code: '24UBAPCE002' }
                      ]
                    }
                  ].map((sem, idx) => (
                    <RevealSection key={idx} delay={idx * 150}>
                      <GlassCard className="overflow-hidden" hover={false}>
                        <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                          <h4 className="text-xl font-bold">{sem.title}</h4>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {sem.subjects.map((subject, i) => (
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span className="text-sm">{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-xs ml-2 whitespace-nowrap">{subject.code}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </RevealSection>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Programme Learning Outcomes */}
        <section className="py-16 bg-white" id="outcomes">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Outcomes" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Programme Learning{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Outcomes
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Skills and competencies you will develop through this programme
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Target className="w-6 h-6 text-white" />, title: 'Strategic Leadership', description: 'Develop visionary leadership capabilities with the ability to formulate and execute business strategies, lead diverse teams, and drive organizational success.' },
                  { icon: <LineChart className="w-6 h-6 text-white" />, title: 'Analytical Decision Making', description: 'Master data-driven decision making using business analytics, financial analysis, and market research to solve complex business problems.' },
                  { icon: <DollarSign className="w-6 h-6 text-white" />, title: 'Financial Acumen', description: 'Acquire comprehensive understanding of financial management, accounting principles, investment strategies, and corporate finance for business growth.' },
                  { icon: <Users className="w-6 h-6 text-white" />, title: 'Human Resource Management', description: 'Build expertise in human resource management, talent acquisition, employee development, and creating high-performance organizational cultures.' },
                  { icon: <ShoppingCart className="w-6 h-6 text-white" />, title: 'Marketing Excellence', description: 'Develop proficiency in marketing strategies, consumer behavior analysis, digital marketing, brand management, and customer relationship building.' },
                  { icon: <Lightbulb className="w-6 h-6 text-white" />, title: 'Entrepreneurial Mindset', description: 'Cultivate innovative thinking, business planning skills, startup ecosystem knowledge, and the ability to identify and capitalize on market opportunities.' }
                ].map((outcome, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="relative p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        {outcome.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{outcome.title}</h3>
                      <p className="text-gray-600 text-sm">{outcome.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-brand-cream" id="careers">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Careers" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Career{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Opportunities
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Diverse career pathways await BBA graduates
                  </p>
                </div>
              </RevealSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <Briefcase className="w-6 h-6" />, title: 'Business Manager', desc: 'Lead business operations in MNCs' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Marketing Executive', desc: 'Drive brand growth & campaigns' },
                  { icon: <BarChart className="w-6 h-6" />, title: 'Financial Analyst', desc: 'Analyze investments & portfolios' },
                  { icon: <Users className="w-6 h-6" />, title: 'HR Manager', desc: 'Manage talent & development' },
                  { icon: <Rocket className="w-6 h-6" />, title: 'Entrepreneur', desc: 'Start your own venture' },
                  { icon: <Globe className="w-6 h-6" />, title: 'Business Consultant', desc: 'Advise corporate clients' },
                  { icon: <ShoppingCart className="w-6 h-6" />, title: 'Sales Manager', desc: 'Drive revenue & growth' },
                  { icon: <Package className="w-6 h-6" />, title: 'Operations Executive', desc: 'Optimize business processes' }
                ].map((career, idx) => (
                  <RevealSection key={idx} delay={idx * 80}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white group-hover:shadow-lg group-hover:shadow-brand-green/20 transition-all">
                        {career.icon}
                      </div>
                      <h3 className="font-bold text-brand-green mb-2">{career.title}</h3>
                      <p className="text-sm text-gray-600">{career.desc}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>

              <RevealSection>
                <GlassCard className="p-8" hover={false}>
                  <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Industry Sectors for BBA Graduates</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Banking & Finance', 'IT & Technology', 'FMCG', 'Startup',
                      'E-Commerce', 'Healthcare', 'Manufacturing',
                      'Retail', 'Consulting', 'Media & Advertising',
                      'Hospitality', 'Real Estate', 'Government Sector'
                    ].map((sector, idx) => (
                      <span key={idx} className="px-4 py-2 bg-brand-green/5 hover:bg-gradient-to-r hover:from-brand-green hover:to-emerald-500 hover:text-white text-brand-green rounded-full text-sm font-medium transition-all cursor-default border border-brand-green/15">
                        {sector}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Department Facilities */}
        <section className="py-16 bg-white" id="facilities">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Infrastructure" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Department{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Facilities
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    State-of-the-art infrastructure for comprehensive learning
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Computer Lab with Business Software', description: 'Fully equipped labs with MS Office Suite, business analytics tools, and ERP software for hands-on practical training.' },
                  { title: 'Digital Library & E-Resources', description: 'Access to business journals, case studies, e-books, and online databases for research and project work.' },
                  { title: 'Smart Learning Studios', description: 'Air-conditioned learning studios equipped with smart boards, projectors, and modern teaching aids for interactive learning.' },
                  { title: 'Seminar Hall & Conference Room', description: 'Dedicated spaces for seminars, guest lectures by industry experts, workshops, and business conferences.' },
                  { title: 'Placement & Career Guidance Cell', description: 'Dedicated placement cell facilitating campus recruitment, career counseling, resume building, and interview preparation.' },
                  { title: 'Entrepreneurship & Incubation Center', description: 'Support for budding entrepreneurs with mentorship, funding guidance, and resources to launch their startups.' }
                ].map((facility, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <RevealSection>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/programmes/Campus Life.png"
                    alt="Campus Life at JKKN"
                    fill
                    className="object-cover"
                  />
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <SectionBadge text="Why JKKN" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    BBA Programme?
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    { icon: <GraduationCap className="w-6 h-6" />, title: '70+ Years of Academic Excellence', description: 'Part of J.K.K. Nattraja Educational Institutions with proven legacy in progressive education since 1954.' },
                    { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Industry-Integrated Curriculum', description: 'Curriculum designed in consultation with business leaders and corporate professionals for real-world relevance.' },
                    { icon: <Users className="w-6 h-6" />, title: 'Expert Learning Facilitators', description: 'Faculty with MBA qualifications and industry experience providing practical insights and mentorship.' },
                    { icon: <TrendingUp className="w-6 h-6" />, title: 'Strong Placement Record', description: '90%+ placement with leading MNCs, startups, and corporate giants recruiting from campus annually.' },
                    { icon: <Award className="w-6 h-6" />, title: 'MBA Preparation Support', description: 'In-house coaching for CAT, MAT, XAT, and other MBA entrance exams with dedicated preparation programs.' },
                    { icon: <Briefcase className="w-6 h-6" />, title: 'Industry Internships', description: 'Mandatory internship program with leading companies providing hands-on business experience and networking opportunities.' }
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/60 text-brand-green">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">{reason.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 bg-white" id="faculty">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="Our Team" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Expert{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Faculty Members
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Learn from industry-certified professionals with expertise in business management, entrepreneurship, and corporate leadership
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-brand-cream" id="faq">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealSection>
                <div className="text-center mb-12">
                  <SectionBadge text="FAQs" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Questions
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Common queries about the BBA programme
                  </p>
                </div>
              </RevealSection>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <RevealSection key={idx} delay={idx * 50}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <button
                        onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/20 transition-colors"
                      >
                        <span className="font-semibold text-brand-green pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeFAQ === idx ? 'max-h-96' : 'max-h-0'
                          }`}
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-white" id="admission">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Start Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Business Management Journey?
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Join JKKN's BBA programme and build a successful career in business, management, and entrepreneurship
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                    Schedule Campus Visit
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </>
  );
}

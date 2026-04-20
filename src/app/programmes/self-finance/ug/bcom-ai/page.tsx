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
  TrendingUp,
  DollarSign,
  Building,
  BarChart,
  FileText,
  Shield,
  Database,
  Briefcase,
  Brain,
  Cpu,
  Bot,
  Sparkles,
  ArrowRight,
  Clock,
  LineChart,
  Code2,
} from 'lucide-react';

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

function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60 ${hover ? 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-green/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-green/15 text-brand-green mb-4">
      <Sparkles className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

export default function BComAIPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const curriculum = {
    1: {
      year: 'First Year',
      semesters: [
        {
          semester: 'Semester I',
          subjects: [
            { code: '', name: 'Tamil / Language - I' },
            { code: '', name: 'English - I' },
            { code: '', name: 'Financial Accounting - I' },
            { code: '', name: 'Principles of Management' },
            { code: '', name: 'Fundamentals of Artificial Intelligence' },
            { code: '', name: 'Python Programming for Business' },
            { code: '', name: 'Business Communication' },
          ],
        },
        {
          semester: 'Semester II',
          subjects: [
            { code: '', name: 'Tamil / Language - II' },
            { code: '', name: 'English - II' },
            { code: '', name: 'Financial Accounting - II' },
            { code: '', name: 'Business Law' },
            { code: '', name: 'Statistics for Business & AI' },
            { code: '', name: 'Data Structures & Algorithms' },
            { code: '', name: 'Environmental Studies' },
          ],
        },
      ],
    },
    2: {
      year: 'Second Year',
      semesters: [
        {
          semester: 'Semester III',
          subjects: [
            { code: '', name: 'Corporate Accounting - I' },
            { code: '', name: 'Business Mathematics' },
            { code: '', name: 'Machine Learning Foundations' },
            { code: '', name: 'Database Management Systems (SQL)' },
            { code: '', name: 'Financial Management' },
            { code: '', name: 'Marketing Analytics' },
          ],
        },
        {
          semester: 'Semester IV',
          subjects: [
            { code: '', name: 'Corporate Accounting - II' },
            { code: '', name: 'Company Law' },
            { code: '', name: 'Applied Machine Learning in Finance' },
            { code: '', name: 'Business Analytics with Power BI / Tableau' },
            { code: '', name: 'Cost Accounting' },
            { code: '', name: 'Internship - I' },
          ],
        },
      ],
    },
    3: {
      year: 'Third Year',
      semesters: [
        {
          semester: 'Semester V',
          subjects: [
            { code: '', name: 'Income Tax Law & Practice' },
            { code: '', name: 'Auditing & AI-Powered Audit Tools' },
            { code: '', name: 'Deep Learning & Neural Networks' },
            { code: '', name: 'FinTech & Blockchain Basics' },
            { code: '', name: 'Robotic Process Automation (RPA)' },
            { code: '', name: 'Business Intelligence Lab' },
          ],
        },
        {
          semester: 'Semester VI',
          subjects: [
            { code: '', name: 'Management Accounting' },
            { code: '', name: 'GST & Indirect Taxation' },
            { code: '', name: 'Algorithmic Trading & Financial Modelling' },
            { code: '', name: 'AI in Fraud Detection & Risk Analytics' },
            { code: '', name: 'Capstone Project (AI + Commerce)' },
            { code: '', name: 'Industry Internship - II' },
          ],
        },
      ],
    },
  };

  const faqs = [
    {
      question: 'What is B.Com (Artificial Intelligence) and how is it different from regular B.Com?',
      answer: 'B.Com (AI) is a future-ready undergraduate programme that blends core commerce subjects — accounting, finance, taxation, auditing — with Artificial Intelligence, Machine Learning, and Business Analytics. Unlike a traditional B.Com, graduates learn to build AI-driven financial models, automate accounting workflows using RPA, and apply data science to business decisions.',
    },
    {
      question: 'Do I need a programming or science background to apply?',
      answer: 'No. The programme is open to students from any stream (Commerce, Science, or Arts) with 50% aggregate in 10+2. Programming, Python, and AI concepts are taught from the basics — no prior coding experience is required. A curious mind and willingness to learn is enough.',
    },
    {
      question: 'What are the career opportunities after B.Com AI?',
      answer: 'Graduates can pursue roles like AI Financial Analyst, Business Intelligence Analyst, FinTech Associate, Data Analyst, RPA Developer, Risk Analytics Executive, Algorithmic Trading Assistant, AI Audit Consultant, and Digital Transformation Executive. They can also pursue higher studies in MBA (Analytics), M.Sc. Data Science, or CA with an analytics specialisation.',
    },
    {
      question: 'What tools and technologies will I learn?',
      answer: 'Students get hands-on training in Python, SQL, Excel (advanced), Power BI, Tableau, Tally, machine learning libraries (scikit-learn, TensorFlow basics), RPA tools (UiPath / Automation Anywhere basics), and AI-powered accounting platforms. Capstone projects involve solving real business problems with AI.',
    },
    {
      question: 'Is there an internship in this programme?',
      answer: 'Yes. The programme includes two structured internships — one in the second year focused on business analytics, and one in the final year with FinTech firms, accounting & audit firms, or corporate finance teams. This ensures graduates have real-world AI + Commerce exposure before they step into the job market.',
    },
    {
      question: 'How do I know the admission fee for B.Com AI?',
      answer: 'For the latest fee structure, scholarships, and seat availability, please contact our admissions office directly or fill out the enquiry form on the Apply Now page. Our team will guide you through the complete fee breakdown and payment options.',
    },
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
                  Artificial Intelligence
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Where Commerce Meets Intelligence — Build the Future of Finance
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
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
              { icon: <Brain className="w-7 h-7" />, stat: 'AI+', title: 'Future-Ready Curriculum', desc: 'Commerce meets Artificial Intelligence' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '2x', title: 'Internships Included', desc: 'Analytics + FinTech exposure' },
              { icon: <Award className="w-7 h-7" />, stat: 'Hybrid', title: 'Dual-Skill Graduate', desc: 'Commerce + AI employability' },
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
                The Bachelor of Commerce in Artificial Intelligence is a pioneering three-year undergraduate programme designed for the AI-driven economy. It integrates the timeless foundations of commerce — accounting, finance, taxation, and auditing — with cutting-edge knowledge of Artificial Intelligence, Machine Learning, and Business Analytics.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Learners are trained to automate financial workflows, analyse data at scale, and build AI-driven decision models used in modern banks, FinTech firms, accounting practices, and corporate finance teams. Graduates emerge as a new kind of commerce professional — equally comfortable with a balance sheet and a Python notebook.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'Python, SQL & Power BI Training', 'AI + FinTech Focus', 'Mandatory Internships'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="lg:col-span-2" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-green to-emerald-600 aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Brain className="w-20 h-20 mx-auto mb-4 opacity-90" />
                  <p className="text-2xl font-bold">Commerce × AI</p>
                  <p className="text-sm opacity-90 mt-2">The future of finance is intelligent</p>
                </div>
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
                  Requirements for joining the B.Com Artificial Intelligence programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: [
                    'Higher Secondary +2 from a recognized board',
                    'Open to Commerce, Science, and Arts streams',
                    'Minimum 50% aggregate marks',
                    '45% for OBC, 40% for SC/ST (as per norms)',
                  ],
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Recommended Background',
                  items: [
                    'Any +2 stream is welcome',
                    'Basic comfort with mathematics is helpful',
                    'No prior programming knowledge needed',
                    'Curiosity about technology and business',
                  ],
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: [
                    '10th, 11th & 12th Mark Sheets',
                    'Transfer Certificate',
                    'Community Certificate',
                    'Passport Size Photos',
                    'Aadhaar Card Copy',
                    'Bank Details',
                  ],
                },
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
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Academic Structure" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Course Curriculum
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full"></div>
              <p className="text-lg text-gray-700 mt-6">
                A balanced blend of core commerce, AI foundations, analytics, and FinTech specialisations
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
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
                          {subject.code && (
                            <span className="text-brand-green font-semibold text-sm">{subject.code}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>

              <p className="text-center text-sm text-gray-600 mt-8 italic">
                Indicative curriculum — subject codes and titles are updated as per the latest university syllabus.
              </p>
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
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Core Commerce Mastery</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Build a strong foundation in financial accounting, corporate accounting, taxation, auditing, business law, and cost & management accounting.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">AI & Machine Learning</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Understand core AI concepts, Python programming, ML algorithms, and neural networks — and apply them to real business problems.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Business Analytics</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Master data-driven decision making using SQL, Excel (advanced), Power BI, and Tableau to turn business data into actionable insight.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <LineChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">FinTech & AI in Finance</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Learn algorithmic trading, AI-driven fraud detection, risk analytics, and the use of AI in auditing and corporate finance.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Process Automation (RPA)</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Apply Robotic Process Automation to accounting, reconciliation, compliance and reporting — the fastest-growing skill in commerce today.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Ethics & Communication</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Develop professional communication, ethical decision-making, and an understanding of responsible AI usage in business contexts.
                  </p>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-brand-cream via-emerald-50/30 to-blue-50 relative overflow-hidden" id="careers">
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Future Prospects" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Career Opportunities
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700">
                A hybrid Commerce + AI graduate unlocks careers that neither a pure B.Com nor a pure B.Sc. can reach
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <LineChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">AI Financial Analyst</h3>
                  <p className="text-gray-600 text-sm">AI-driven forecasting & reporting</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Business Intelligence Analyst</h3>
                  <p className="text-gray-600 text-sm">Dashboards & data storytelling</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">FinTech Associate</h3>
                  <p className="text-gray-600 text-sm">Digital banking & payments</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">RPA Developer</h3>
                  <p className="text-gray-600 text-sm">Automation of finance workflows</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Risk & Fraud Analyst</h3>
                  <p className="text-gray-600 text-sm">AI-powered risk detection</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Data Analyst</h3>
                  <p className="text-gray-600 text-sm">SQL, Python & visualization roles</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">AI Audit Consultant</h3>
                  <p className="text-gray-600 text-sm">Digital audit & compliance</p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Algorithmic Trading Associate</h3>
                  <p className="text-gray-600 text-sm">Quant finance entry roles</p>
                </GlassCard>
              </div>

              <GlassCard className="p-8" hover={false}>
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Recruiting Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'FinTech Companies',
                    'Big 4 Accounting Firms',
                    'Commercial & Investment Banks',
                    'Insurance & InsurTech',
                    'Mutual Fund & Wealth Management',
                    'Stock Broking & Trading Firms',
                    'AI & Analytics Firms',
                    'E-commerce & D2C Brands',
                    'IT & ITeS Companies',
                    'Consulting Firms',
                    'Government & PSUs',
                    'Startups',
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
                Modern infrastructure for a Commerce + AI learning experience
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">AI & Analytics Lab</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Python, ML & Visualisation Workstations
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      High-spec systems pre-loaded with Python, Jupyter, scikit-learn, Power BI and Tableau for hands-on AI and analytics practice.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Accounting Software Lab</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Tally, Excel & ERP Training
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated lab for Tally Prime, advanced Excel, and ERP exposure — linking core commerce workflows with AI-powered tooling.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Smart Classrooms</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Interactive Learning Studios
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Air-conditioned studios with smart boards, projectors and modern teaching aids for interactive, case-based learning.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Digital Library</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      E-Journals & AI/Commerce Resources
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access to financial databases, AI/ML e-books, research journals and online learning platforms for continuous self-learning.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Seminar Hall</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Industry Guest Lectures
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated spaces for seminars, FinTech industry talks, AI workshops and startup showcases by guest experts.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Placement Cell</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Career Guidance & Campus Drives
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated placement cell facilitating campus recruitment, internships, resume building and interview preparation.
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
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-gradient-to-br from-brand-green via-emerald-600 to-emerald-800 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Cpu className="w-24 h-24 mx-auto mb-6 opacity-90" />
                    <p className="text-3xl font-bold mb-2">Future-Ready</p>
                    <p className="text-lg opacity-90">Commerce graduates the AI economy is hiring</p>
                  </div>
                </div>

                <div>
                  <SectionBadge text="Our Advantages" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
                    Why Choose Our B.Com Artificial Intelligence Programme?
                  </h2>
                  <div className="w-16 h-1 bg-brand-green rounded-full mb-8"></div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          First-of-its-kind Hybrid Curriculum
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          A rare programme that genuinely blends accounting, taxation, finance with AI, ML and analytics — not a bolt-on.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Hands-on Tool Exposure
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Python, SQL, Power BI, Tableau, Tally, RPA and ML libraries — taught through labs and capstone projects.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Two Industry Internships
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Structured internships with FinTech firms, audit houses, and corporate finance teams — you graduate with real CV-ready experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Expert, Interdisciplinary Faculty
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from commerce faculty with industry exposure alongside AI / Data Science specialists — one programme, two worlds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Higher Studies & Certification Ready
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          A strong foundation for MBA (Analytics), M.Sc. Data Science, CA with analytics, CFA, and global certifications in AI and FinTech.
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-brand-cream to-blue-50 relative overflow-hidden">
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
      <section className="py-20 bg-white relative overflow-hidden" id="admission">
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-3xl font-bold text-brand-green mb-6">
                Ready to Pioneer Commerce in the AI Era?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join JKKN's B.Com Artificial Intelligence programme and become the kind of commerce graduate the future economy is actively hiring.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="group bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/pdf/brochure.pdf" download className="bg-white border-2 border-brand-green hover:bg-brand-green text-brand-green hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                  Download Brochure
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, DollarSign, TrendingUp, BarChart3, Calculator, PieChart, LineChart, Code } from 'lucide-react';
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

export default function MComAidedPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
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
                Master of{' '}
                <span className="text-brand-green">
                  Commerce
                </span>{' '}
                (M.Com)
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Advance Your Expertise in Finance, Accounting & Business Research
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>2 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <FileText className="w-5 h-5 text-brand-green" />
                  <span>4 Semesters</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Users className="w-5 h-5 text-brand-green" />
                  <span>Full-Time Programme</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Award className="w-5 h-5 text-brand-green" />
                  <span>NAAC Accredited</span>
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
              { icon: <Users className="w-7 h-7" />, stat: '12:1', title: 'Learner-Facilitator Ratio', desc: 'Enhanced personal attention' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '98%+', title: 'Placement Record', desc: 'Premium career opportunities' },
              { icon: <Award className="w-7 h-7" />, stat: '₹6.5L', title: 'Average Package', desc: 'Higher starting salary' },
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
                The Master of Commerce (M.Com) is an advanced two-year postgraduate programme designed to develop expert professionals with comprehensive knowledge in accounting, finance, taxation, business research, and strategic management. This UGC-recognized programme builds upon undergraduate foundations to create industry-ready leaders capable of driving organizational excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures Learners receive specialized training through research-oriented learning, advanced case studies, and industry partnerships. The curriculum is aligned with professional certifications such as CA, CMA, CS, CFA, and UGC NET, preparing graduates for senior management positions, academic careers, and research-based roles in diverse sectors.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Research-Oriented Curriculum', 'UGC NET Preparation Support', 'Advanced Financial Analytics', 'Corporate Internship Programme'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=M.Com+Research+Studio"
                  alt="M.Com Research Studio"
                  className="w-full h-auto"
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
                  items: ['Bachelor\'s Degree from recognized university', 'B.Com / BBA / BBM / B.Com (CA)', 'Minimum 50% aggregate marks', '45% for reserved categories']
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
                  Advanced syllabus designed to build expertise in commerce research, advanced accounting, and strategic management
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2].map((year) => (
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
                      { name: 'Advanced Financial Accounting', code: 'MCO101' },
                      { name: 'Managerial Economics', code: 'MCO102' },
                      { name: 'Organizational Behaviour', code: 'MCO103' },
                      { name: 'Business Research Methods', code: 'MCO104' },
                      { name: 'Statistical Analysis for Business', code: 'MCO105' },
                      { name: 'Corporate Governance & Ethics', code: 'MCO106' }
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      { name: 'Advanced Cost & Management Accounting', code: 'MCO201' },
                      { name: 'Financial Management', code: 'MCO202' },
                      { name: 'Corporate Tax Planning', code: 'MCO203' },
                      { name: 'Strategic Management', code: 'MCO204' },
                      { name: 'E-Business & Digital Commerce', code: 'MCO205' },
                      { name: 'Advanced Business Law', code: 'MCO206' }
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
                            <li key={i} className="flex items-start justify-between gap-2 text-gray-700">
                              <span className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">•</span>
                                <span>{subject.name}</span>
                              </span>
                              <span className="text-sm text-gray-500 whitespace-nowrap">{subject.code}</span>
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
                      { name: 'Advanced Auditing & Assurance', code: 'MCO301' },
                      { name: 'International Financial Management', code: 'MCO302' },
                      { name: 'Investment Analysis & Portfolio Management', code: 'MCO303' },
                      { name: 'Elective I: Banking & Financial Services', code: 'MCO304' },
                      { name: 'Elective II: GST & Indirect Taxation', code: 'MCO305' },
                      { name: 'Summer Internship / Field Study', code: 'INT301' }
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      { name: 'Financial Derivatives & Risk Management', code: 'MCO401' },
                      { name: 'Advanced Business Analytics', code: 'MCO402' },
                      { name: 'Elective III: Mergers, Acquisitions & Corporate Restructuring', code: 'MCO403' },
                      { name: 'Elective IV: Forensic Accounting', code: 'MCO404' },
                      { name: 'Comprehensive Viva-Voce', code: 'MCO405' },
                      { name: 'Dissertation / Project Work', code: 'PRJ401' }
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
                            <li key={i} className="flex items-start justify-between gap-2 text-gray-700">
                              <span className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">•</span>
                                <span>{subject.name}</span>
                              </span>
                              <span className="text-sm text-gray-500 whitespace-nowrap">{subject.code}</span>
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

      {/* Specializations Section */}
      <section className="py-16 bg-white" id="specializations">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Specializations" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Available{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Specializations
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose your area of advanced expertise for premium career prospects
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <DollarSign className="w-6 h-6 text-white" />, title: 'Finance & Accounting', description: 'Advanced financial reporting, corporate finance, and strategic accounting practices' },
                { icon: <TrendingUp className="w-6 h-6 text-white" />, title: 'Investment & Portfolio', description: 'Securities analysis, portfolio management, and wealth advisory services' },
                { icon: <Building2 className="w-6 h-6 text-white" />, title: 'Banking & Financial Services', description: 'Commercial banking, financial markets, and insurance management' },
                { icon: <FileText className="w-6 h-6 text-white" />, title: 'Taxation & Compliance', description: 'Direct & indirect taxation, GST compliance, and tax advisory' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'International Business', description: 'Global trade, foreign exchange, and multinational corporate management' },
                { icon: <Code className="w-6 h-6 text-white" />, title: 'Business Analytics', description: 'Data-driven decision making, financial modeling, and predictive analytics' }
              ].map((spec, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="relative p-6 group h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">{spec.title}</h3>
                    <p className="text-gray-600 text-sm">{spec.description}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Learning Outcomes */}
      <section className="py-16 bg-brand-cream" id="outcomes">
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
                  Skills and competencies you will develop during the M.Com programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <BarChart3 className="w-6 h-6 text-white" />, title: 'Advanced Financial Analysis', description: 'Master complex financial statements, ratio analysis, and strategic financial decision-making techniques.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Research Competency', description: 'Develop strong research methodologies, statistical analysis skills, and academic writing capabilities.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Leadership Excellence', description: 'Build strategic thinking, team management, and organizational leadership capabilities.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Global Business Perspective', description: 'Understand international financial systems, cross-border transactions, and global market dynamics.' },
                { icon: <Code className="w-6 h-6 text-white" />, title: 'Technology Integration', description: 'Leverage advanced accounting software, ERP systems, and business analytics tools effectively.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Ethical Decision Making', description: 'Apply corporate governance principles, ethical standards, and professional responsibility in business.' }
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
      <section className="py-16 bg-white" id="careers">
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
                  Premium career pathways available for M.Com graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <DollarSign className="w-6 h-6" />, title: 'Finance Manager', salary: '₹8-15 LPA' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Investment Analyst', salary: '₹7-12 LPA' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'University Professor', salary: 'Academic Career' },
                { icon: <Award className="w-6 h-6" />, title: 'Chief Financial Officer', salary: '₹20-50 LPA' },
                { icon: <Calculator className="w-6 h-6" />, title: 'Senior Tax Consultant', salary: '₹6-10 LPA' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Management Consultant', salary: '₹10-18 LPA' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Corporate Strategist', salary: '₹12-20 LPA' },
                { icon: <LineChart className="w-6 h-6" />, title: 'Research Analyst', salary: '₹5-9 LPA' }
              ].map((career, idx) => (
                <RevealSection key={idx} delay={idx * 80}>
                  <GlassCard className="p-6 group h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white group-hover:shadow-lg group-hover:shadow-brand-green/20 transition-all">
                      {career.icon}
                    </div>
                    <h3 className="font-bold text-brand-green mb-2">{career.title}</h3>
                    <p className="text-sm text-gray-600">{career.salary}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>

            <RevealSection>
              <GlassCard className="p-8" hover={false}>
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Top Recruiting Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Investment Banking', 'Asset Management', 'Big Four Accounting', 'Corporate Finance',
                    'Banking & Insurance', 'Taxation Consultancy', 'Business Consulting', 'Financial Planning',
                    'Government Sector', 'Academic Institutions', 'Research Organizations', 'Fintech Companies'
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

      {/* Professional Courses Section */}
      <section className="py-16 bg-brand-cream" id="professional">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Career Advancement" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Professional{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Certifications
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Recommended professional courses to complement your M.Com degree
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Ph.D. in Commerce', desc: 'Pursue doctoral research for academic careers' },
                { title: 'UGC NET', desc: 'Qualify for Assistant Professor positions' },
                { title: 'CA (Chartered Accountant)', desc: 'Premier accounting certification in India' },
                { title: 'CMA (Cost Management)', desc: 'Specialize in cost and management accounting' },
                { title: 'CFA (Chartered Financial)', desc: 'Global investment management credential' },
                { title: 'FRM (Financial Risk)', desc: 'Risk management professional certification' },
                { title: 'ACCA', desc: 'International accounting qualification' },
                { title: 'CFP (Certified Financial)', desc: 'Financial planning and wealth management' }
              ].map((course, idx) => (
                <RevealSection key={idx} delay={idx * 80}>
                  <GlassCard className="p-6 group h-full text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white group-hover:shadow-lg group-hover:shadow-brand-green/20 transition-all">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-brand-green mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.desc}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-16 bg-white" id="facilities">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Infrastructure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Learning{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure to support your academic journey
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Research Laboratory', description: 'Advanced research facilities with access to financial databases, statistical software, and analytical tools for commerce research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Lab' },
                { title: 'Digital Library', description: 'Comprehensive collection of commerce journals, e-books, and research publications with 24/7 digital access.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Digital+Library' },
                { title: 'Conference Hall', description: 'State-of-the-art auditorium for seminars, guest lectures, and academic conferences with modern AV facilities.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Conference+Hall' },
                { title: 'Finance Laboratory', description: 'Equipped with Bloomberg terminals, accounting software, and financial modeling tools for practical learning.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Finance+Lab' },
                { title: 'Career Development Center', description: 'Dedicated placement cell with corporate tie-ups, interview preparation, and career counseling services.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Career+Center' },
                { title: 'Smart Learning Studios', description: 'Technology-enabled classrooms with interactive boards, projectors, and collaborative learning spaces.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Smart+Classroom' }
              ].map((facility, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-cream" id="why-choose">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x500/0b6d41/FFFFFF?text=Campus+Life"
                  alt="Campus Life"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-green/95 to-transparent p-8">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div>
                      <h4 className="text-3xl font-bold text-emerald-300 mb-1">
                        <CountUp end={70} suffix="+" />
                      </h4>
                      <p className="text-xs">Years of Excellence</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-emerald-300 mb-1">
                        <CountUp end={5000} suffix="+" />
                      </h4>
                      <p className="text-xs">Active Learners</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-emerald-300 mb-1">
                        <CountUp end={500} suffix="+" />
                      </h4>
                      <p className="text-xs">Learning Facilitators</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <SectionBadge text="Why Us" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  M.Com Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in academics and career.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Research Excellence', description: 'Focus on research-oriented learning with opportunities for paper publications and conference presentations.' },
                  { title: 'Corporate Internships', description: 'Mandatory industry internships with leading companies for practical exposure and networking.' },
                  { title: 'Industry Experts', description: 'Guest lectures and workshops by CA, CMA, CFA professionals and corporate leaders.' },
                  { title: 'UGC NET Coaching', description: 'Specialized coaching and guidance for UGC NET exam preparation for academic careers.' },
                  { title: 'Premium Placements', description: 'Strong placement record with top companies offering competitive salary packages.' },
                  { title: 'Professional Certification', description: 'Guidance and support for professional courses like CA, CMA, CFA, and CFP.' }
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/80 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-green/15">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">{reason.title}</h4>
                      <p className="text-sm text-gray-600">{reason.description}</p>
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
                <SectionBadge text="Faculty" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Learning{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilitators
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meet our experienced and dedicated department team
                </p>
              </div>
            </RevealSection>

            <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
              {[
                { name: 'Dr. S. Gokila', designation: 'Associate Professor & Head', qualification: 'M.Com., M.Phil., PGDCA., Ph.D.', image: '/images/faculties/aided/bcom/Dr.-S.-Gokila-240x300.png' },
                { name: 'Dr. V. K. Sasikala', designation: 'Assistant Professor', qualification: 'M.Com., M.Phil., Ph.D., PGDCA', image: '/images/faculties/aided/bcom/Dr.-V.-K.-Sasikala-240x300.png' },
                { name: 'Dr. M. Boovathi', designation: 'Assistant Professor', qualification: 'M.Com., M.Phil., PGDCA., Ph.D., NET', image: '/images/faculties/aided/bcom/Dr.-M.-Boovathi-240x300.png' },
                { name: 'Dr. S. Thenmozhi', designation: 'Assistant Professor', qualification: 'M.Com., M.Phil., Ph.D., PGDCA., M.B.A., SET', image: '/images/faculties/aided/bcom/Dr.-S.-Thenmozhi-240x300.png' },
                { name: 'Dr. L. Kavitha', designation: 'Assistant Professor', qualification: 'M.Com., M.Phil., Ph.D., SET', image: '/images/faculties/aided/bcom/Dr.-L.-Kavitha-240x300.png' },
                { name: 'Dr. S. V. Ramesh', designation: 'Assistant Professor', qualification: 'M.Com., M.Phil., Ph.D., NET', image: '/images/faculties/aided/bcom/Dr.-S.-V.-Ramesh-240x300.png' },
                { name: 'Dr. R. Mubeen', designation: 'Assistant Professor', qualification: 'M.Com (CA)., M.Phil., Ph.D.', image: '/images/faculties/aided/bcom/Dr.-R.-Mubeen-240x300.png' },
                { name: 'Dr. S. Pavithra', designation: 'Assistant Professor', qualification: 'M.Com (CA)., B.Ed., M.Phil., Ph.D., SET', image: '/images/faculties/aided/bcom/Dr.-S.-Pavithra-240x300.png' }
              ].map((faculty, idx) => (
                <div key={idx} className="w-[260px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 text-center flex-1 flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-brand-green mb-1">{faculty.name}</h4>
                    <p className="text-sm font-semibold text-emerald-500 mb-1">{faculty.designation}</p>
                    <p className="text-xs text-gray-600">{faculty.qualification}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-brand-cream" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="FAQ" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Questions
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Find answers to common queries about the M.Com programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the M.Com programme?', answer: 'The M.Com (Master of Commerce) programme is a 2-year full-time postgraduate degree comprising four semesters. Each academic year consists of two semesters, with examinations conducted at the end of each semester. The programme follows the Choice Based Credit System (CBCS) pattern as prescribed by the UGC.' },
                { question: 'Who is eligible for M.Com admission?', answer: 'Candidates must have completed a Bachelor\'s degree (B.Com/BBA/BBM) from a recognized university with a minimum of 50% aggregate marks (45% for reserved categories). Candidates with B.Com with Accounting specialization, BBA with Finance major, or those who have completed CA/CMA Foundation are preferred.' },
                { question: 'What career opportunities are available after M.Com?', answer: 'M.Com graduates have diverse career opportunities including Finance Manager, Investment Analyst, Tax Consultant, Management Consultant, Corporate Strategist, Research Analyst, and academic positions as University Professor. Graduates can also pursue professional certifications like CA, CMA, CFA, or doctoral programmes like Ph.D.' },
                { question: 'Can I pursue Ph.D. after M.Com?', answer: 'Yes, M.Com graduates are eligible to pursue Ph.D. in Commerce, Management, or related fields. We also provide UGC NET coaching to help learners qualify for research fellowships and Assistant Professor positions. Many of our alumni have successfully pursued doctoral programmes at premier institutions.' },
                { question: 'What is the average salary after M.Com?', answer: 'The average starting salary for M.Com graduates ranges from ₹5-9 LPA depending on the role and organization. With experience and professional certifications, salaries can increase significantly. Senior positions like Finance Manager (₹8-15 LPA), Management Consultant (₹10-18 LPA), and CFO (₹20-50 LPA) offer premium packages.' },
                { question: 'Is dissertation/project mandatory in M.Com?', answer: 'Yes, the M.Com programme includes mandatory components: Summer Internship/Field Study in Semester III and a comprehensive Dissertation/Project Work in Semester IV. These practical components provide hands-on experience and help develop research and analytical skills essential for advanced commerce careers.' },
                { question: 'Are internships part of the M.Com programme?', answer: 'Yes, a mandatory summer internship/field study is included in Semester III. Learners gain practical experience with leading companies, banks, financial institutions, or research organizations. The department assists in securing quality internship placements and monitors the learning outcomes throughout the internship period.' }
              ].map((faq, idx) => (
                <RevealSection key={idx} delay={idx * 60}>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/80 hover:border-brand-green/20 transition-all overflow-hidden">
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-brand-green/5 transition-colors"
                    >
                      <span className="font-semibold text-brand-green">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ${activeFAQ === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-white relative overflow-hidden" id="admission">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionBadge text="Enroll Now" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Elevate Your Career in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Commerce & Finance
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our M.Com programme and unlock advanced opportunities in finance, accounting, research, and management.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Brochure
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Related Programmes */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Explore More" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Explore Related{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Programmes
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Discover other commerce and business programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Com (3 Years)', description: 'Comprehensive undergraduate programme in commerce, accounting, and business studies', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=B.Com' },
                { title: 'MBA (2 Years)', description: 'Master of Business Administration with specializations in various management domains', duration: '2 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=MBA' },
                { title: 'BBA (3 Years)', description: 'Bachelor of Business Administration focusing on management and entrepreneurship', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BBA' }
              ].map((programme, idx) => (
                <RevealSection key={idx} delay={idx * 150}>
                  <a href="#" className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={programme.image}
                        alt={programme.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-green mb-2 group-hover:text-emerald-500 transition-colors">{programme.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{programme.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{programme.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>Full-time</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

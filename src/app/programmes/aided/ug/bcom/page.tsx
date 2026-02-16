'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, TrendingUp, BarChart3, Calculator, DollarSign, PieChart, Banknote } from 'lucide-react';
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

export default function BComPage() {
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
                Bachelor of Commerce{' '}
                <span className="text-brand-green">
                  (B.Com)
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Build Your Foundation in Business, Finance & Accounting
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
              { icon: <Users className="w-7 h-7" />, stat: '15:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized attention' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%+', title: 'Placement Record', desc: 'Career opportunities assured' },
              { icon: <Award className="w-7 h-7" />, stat: '₹4.5L', title: 'Average Package', desc: 'Competitive starting salary' },
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
                The Bachelor of Commerce (B.Com) is a comprehensive three-year undergraduate programme designed to develop skilled professionals with expertise in accounting, finance, taxation, banking, and business management. This UGC-recognized programme provides a strong foundation in commerce principles while integrating practical skills essential for today&apos;s dynamic business environment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Learners receive holistic development through experiential learning, industry exposure, and professional skill-based training. The curriculum is aligned with industry requirements and professional certification needs such as CA, CMA, CS, and CFA, preparing graduates for diverse career pathways in corporate finance, banking, taxation, and entrepreneurship.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'CA/CMA/CS Foundation Support', 'Practical Training in Tally & GST', 'Internship with Leading Firms'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=Commerce+Learning+Studio"
                  alt="Commerce Learning Studio"
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
                  Requirements for joining the B.Com programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Commerce, Science, or Arts stream', 'Minimum 50% aggregate marks', '45% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Preferred Subjects',
                  items: ['Accountancy / Commerce preferred', 'Business Studies / Economics', 'Mathematics / Statistics', 'Computer Applications']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy']
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
                  Comprehensive syllabus designed to build expertise in commerce, accounting, and business management
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
                    subjects: ['Financial Accounting - I', 'Business Organisation', 'Business Economics - I', 'Business Mathematics', 'Business Communication', 'Environmental Studies']
                  },
                  {
                    title: 'Semester II',
                    subjects: ['Financial Accounting - II', 'Business Law', 'Business Economics - II', 'Business Statistics', 'Principles of Management', 'Value Education']
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
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-emerald-500 mt-1">•</span>
                              <span>{subject}</span>
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
                    subjects: ['Corporate Accounting', 'Company Law', 'Cost Accounting - I', 'Banking Theory & Practice', 'Marketing Management', 'Computer Applications in Business']
                  },
                  {
                    title: 'Semester IV',
                    subjects: ['Advanced Corporate Accounting', 'Cost Accounting - II', 'Income Tax Law & Practice - I', 'Financial Management', 'Human Resource Management', 'E-Commerce']
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
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-emerald-500 mt-1">•</span>
                              <span>{subject}</span>
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
                    subjects: ['Management Accounting', 'Income Tax Law & Practice - II', 'Auditing & Corporate Governance', 'Goods & Services Tax (GST)', 'Elective: Investment Analysis', 'Practical Training / Internship']
                  },
                  {
                    title: 'Semester VI',
                    subjects: ['Financial Markets & Services', 'Entrepreneurship Development', 'International Business', 'Business Research Methods', 'Elective: Stock Market Operations', 'Project Work']
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
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-emerald-500 mt-1">•</span>
                              <span>{subject}</span>
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

      {/* Specializations */}
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
                  Choose your area of expertise to enhance career prospects
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <DollarSign className="w-6 h-6 text-white" />, title: 'Accounting & Finance', description: 'Master financial reporting, analysis, and corporate finance principles' },
                { icon: <Calculator className="w-6 h-6 text-white" />, title: 'Taxation', description: 'Expertise in direct and indirect taxation, GST compliance' },
                { icon: <Building2 className="w-6 h-6 text-white" />, title: 'Banking & Insurance', description: 'Comprehensive knowledge of banking operations and insurance products' },
                { icon: <TrendingUp className="w-6 h-6 text-white" />, title: 'Investment Management', description: 'Stock market analysis, portfolio management, and wealth planning' },
                { icon: <FileText className="w-6 h-6 text-white" />, title: 'Corporate Law', description: 'Company law, business regulations, and corporate governance' },
                { icon: <BarChart3 className="w-6 h-6 text-white" />, title: 'Business Analytics', description: 'Data-driven decision making and business intelligence tools' }
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
                  Skills and competencies you will develop during the programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Financial Expertise', description: 'Master accounting principles, financial analysis, and corporate finance management for business decision-making.' },
                { icon: <Calculator className="w-6 h-6 text-white" />, title: 'Taxation Knowledge', description: 'Comprehensive understanding of direct and indirect taxes including Income Tax, GST, and compliance procedures.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Business Acumen', description: 'Develop strategic thinking, market analysis, and entrepreneurial skills for modern business environments.' },
                { icon: <BarChart3 className="w-6 h-6 text-white" />, title: 'Analytical Skills', description: 'Apply quantitative and qualitative analysis techniques for data-driven business decisions.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Professional Ethics', description: 'Understand corporate governance, ethical practices, and professional standards in commerce and finance.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Technology Proficiency', description: 'Master accounting software (Tally, SAP), spreadsheets, and digital tools for modern commerce operations.' }
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
                  Diverse career pathways for B.Com graduates in finance, banking, and corporate sectors
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <DollarSign className="w-6 h-6" />, title: 'Chartered Accountant', desc: 'Pursue CA after B.Com' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Bank Officer', desc: 'Public & Private Banking' },
                { icon: <Calculator className="w-6 h-6" />, title: 'Tax Consultant', desc: 'Direct & Indirect Taxation' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Financial Analyst', desc: 'Investment & Portfolio Analysis' },
                { icon: <FileText className="w-6 h-6" />, title: 'Auditor', desc: 'Internal & External Auditing' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Company Secretary', desc: 'Corporate Governance' },
                { icon: <BarChart3 className="w-6 h-6" />, title: 'Business Analyst', desc: 'Corporate Strategy & Planning' },
                { icon: <Award className="w-6 h-6" />, title: 'Government Jobs', desc: 'SSC, UPSC, Bank PO' }
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
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Top Recruiting Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Banking & Finance', 'Insurance Sector', 'Accounting Firms', 'IT Companies',
                    'E-Commerce', 'Consulting Firms', 'Government Sector', 'Manufacturing',
                    'Stock Markets', 'Startups', 'Audit Firms', 'MNCs'
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

      {/* Professional Courses */}
      <section className="py-16 bg-brand-cream" id="professional">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Professional Qualifications" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Professional Courses{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    After B.Com
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Enhance your credentials with globally recognized professional qualifications
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { badge: 'CA', title: 'Chartered Accountancy', desc: 'ICAI certified accounting professional' },
                { badge: 'CMA', title: 'Cost & Management Accountant', desc: 'ICMAI certified cost professional' },
                { badge: 'CS', title: 'Company Secretary', desc: 'ICSI certified governance expert' },
                { badge: 'CFA', title: 'Chartered Financial Analyst', desc: 'Global investment certification' },
                { badge: 'MBA', title: 'Master of Business Admin', desc: 'Advanced management degree' },
                { badge: 'M.Com', title: 'Master of Commerce', desc: 'Postgraduate commerce studies' },
                { badge: 'CFP', title: 'Certified Financial Planner', desc: 'Wealth management certification' },
                { badge: 'ACCA', title: 'ACCA Qualification', desc: 'UK-based global accounting' }
              ].map((course, idx) => (
                <RevealSection key={idx} delay={idx * 80}>
                  <GlassCard className="p-6 text-center group h-full">
                    <span className="inline-block text-2xl font-bold text-white bg-gradient-to-r from-brand-green to-emerald-500 px-4 py-2 rounded-lg mb-4">
                      {course.badge}
                    </span>
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
                  World-Class{' '}
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
                { title: 'Commerce Library', description: 'Over 10,000 books covering accounting, finance, taxation, and business management with digital access to journals.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Commerce+Library' },
                { title: 'Computer Lab with Tally', description: 'Advanced computer lab with Tally ERP, SAP, and other accounting software for practical training.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Computer+Lab' },
                { title: 'Finance Lab', description: 'Stock market simulation lab with live trading terminals for investment analysis and portfolio management practice.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Finance+Lab' },
                { title: 'Seminar Hall', description: 'Air-conditioned seminar hall with modern presentation facilities for guest lectures and workshops.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Seminar+Hall' },
                { title: 'Research Center', description: 'Dedicated research facilities with access to business databases and research journals for project work.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Research+Center' },
                { title: 'Smart Learning Studios', description: 'Technology-enabled learning studios with interactive boards, projectors, and high-speed internet connectivity.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Smart+Classroom' }
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
                  B.Com Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in academics and career.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured education meeting national standards with excellent academic reputation.' },
                  { title: 'CA/CMA/CS Foundation Support', description: 'Integrated coaching for professional certification courses within the curriculum.' },
                  { title: 'Strong Placement Support', description: 'Dedicated placement cell with industry partnerships ensuring excellent career opportunities.' },
                  { title: 'Industry-Aligned Curriculum', description: 'Regularly updated syllabus incorporating current industry trends and skill requirements.' },
                  { title: 'Practical Training & Internships', description: 'Hands-on experience with Tally, GST software, and mandatory internships with leading firms.' }
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
                  Find answers to common queries about the B.Com programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the B.Com programme?', answer: 'The B.Com (Bachelor of Commerce) programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters with examinations at the end of each semester. The programme provides comprehensive knowledge in commerce, accounting, finance, taxation, and business management.' },
                { question: 'What are the career opportunities after B.Com?', answer: 'B.Com graduates have diverse career opportunities including Chartered Accountant, Company Secretary, Cost Accountant, Financial Analyst, Bank Officer, Tax Consultant, Auditor, Business Analyst, and various positions in corporate finance. They can also pursue government jobs through competitive exams like SSC, UPSC, and Bank PO examinations. Top sectors hiring B.Com graduates include Banking, Insurance, IT, Consulting, E-Commerce, and Manufacturing.' },
                { question: 'Can Science or Arts students pursue B.Com?', answer: 'Yes, students from any stream (Commerce, Science, or Arts) who have completed their Higher Secondary (10+2) from a recognized board are eligible to pursue B.Com. While Commerce stream students may have an advantage in foundational subjects like accountancy, students from other streams receive additional support to bridge any knowledge gaps in the first year.' },
                { question: 'What professional courses can I pursue after B.Com?', answer: 'After B.Com, you can pursue several prestigious professional qualifications including CA (Chartered Accountancy) from ICAI, CMA (Cost and Management Accountancy) from ICMAI, CS (Company Secretary) from ICSI, CFA (Chartered Financial Analyst), MBA, M.Com, CFP (Certified Financial Planner), and ACCA. Our department provides foundation coaching support for CA and CMA courses integrated with the regular curriculum.' },
                { question: 'Is there practical training included in the B.Com programme?', answer: 'Yes, our B.Com programme includes extensive practical training. This includes hands-on experience with accounting software like Tally Prime and SAP, practical sessions in taxation and GST filing, a mandatory internship in the fifth semester with CA firms, banks, or corporate finance departments, and project work in the final semester. We also have a finance lab with stock market simulation for investment analysis practice.' },
                { question: 'What makes this B.Com programme different from others?', answer: 'Our B.Com programme stands out due to its industry-aligned curriculum, integrated CA/CMA foundation coaching, state-of-the-art computer and finance labs, experienced Learning Facilitators with industry expertise, strong placement cell with 95%+ placement record, and partnerships with leading CA firms, banks, and corporates for internships. We also offer specializations in Accounting & Finance, Taxation, Banking & Insurance, and Business Analytics.' },
                { question: 'What is the fee structure for the B.Com programme?', answer: 'The fee structure for our B.Com programme is competitive and affordable. The annual tuition fee is structured to be accessible to students from all backgrounds. Scholarships are available for meritorious students and those from economically weaker sections. For detailed fee information and scholarship details, please contact the admission office or download the fee brochure from our website.' },
                { question: 'Are internships mandatory in the B.Com programme?', answer: 'Yes, internships are a mandatory component of the programme. Students undergo practical training in the fifth semester, typically lasting 4-6 weeks. Our placement cell assists in securing internships with reputed CA firms, banks, corporate finance departments, and other financial institutions. This hands-on experience provides valuable industry exposure and often leads to placement opportunities.' }
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
                Begin Your Journey in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Commerce
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Com programme and unlock a world of opportunities in accounting, banking, and business management.
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
                { title: 'M.Com', description: 'Advanced postgraduate studies in Commerce and Business Management', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=M.Com' },
                { title: 'B.Com (CA)', description: 'B.Com with Computer Applications and IT skills', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=B.Com+CA' },
                { title: 'BBA', description: 'Bachelor of Business Administration for management careers', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BBA' }
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

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Shield, Lock, Search, Server, Cloud, Code, DollarSign } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import { bscCyberFaqs } from './faqs';

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

export default function BScCSCyberSecurityPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const faqs = bscCyberFaqs;

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                Bachelor of Science in{' '}
                <span className="text-brand-green">
                  Computer Science (Cyber Security)
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Ethical Hacking, Network Security and Cyber Security Tools
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
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-cs-cyber-security" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#curriculum" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                  View Learning Framework
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
              { icon: <DollarSign className="w-7 h-7" />, stat: '₹32,000', title: 'Annual Fee (MQ)', desc: '2026-27 · GQ as per Govt norms' },
              { icon: <Building2 className="w-7 h-7" />, stat: 'Periyar', title: 'University Affiliation', desc: 'Autonomous college, Salem region' },
              { icon: <Code className="w-7 h-7" />, stat: 'No Maths?', title: 'Still Eligible', desc: '+2 with CS, Statistics or Business Maths' },
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited Institution', desc: 'Autonomous, UGC recognised' },
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
                The Bachelor of Science in Computer Science (Cyber Security) is a three-year undergraduate programme that builds programming foundations in C, Data Structures, Java and PHP, then moves to Tools and Techniques for Cyber Security, Essentials of Cyber Security, Ethical Hacking and Network Security, with a practical lab in each core subject. It is a B.Sc (arts and science) degree, not a B.E. or B.Tech.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                JKKN College of Arts and Science is an autonomous college affiliated to Periyar University, on NH-544 at Komarapalayam in Namakkal district, Tamil Nadu, between Salem and Erode. B.Sc Cyber Security here is a self-finance programme with an annual management-quota fee of ₹32,000 for 2026-27. Comparing options across the state? Read our{' '}
                <a href="/bsc-cyber-security-colleges-in-tamil-nadu" className="text-brand-green font-semibold underline">guide to B.Sc Cyber Security colleges in Tamil Nadu</a>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Cyber Security Lab and Ethical Hacking Lab', 'Network Security in the final year', 'Project with viva voce', 'Summer internship or industrial training'].map((item, idx) => (
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
                  src="/images/programmes/computerscience/JKKN B.Sc Cyber Security.webp"
                  alt="Cyber Security Laboratory"
                  className="w-full h-auto"
                width={2048}
                height={2048}
              />
                {/* <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 2010
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
                  Requirements for joining the B.Sc CS (Cyber Security) programme, as set by the Periyar University regulations
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Pass in the Higher Secondary (+2) examination', 'Any one of Mathematics, Business Mathematics, Computer Science or Statistics', 'Tamil Nadu board or an equivalent examination', 'Merit-based admission; reservation as per Tamil Nadu Government norms']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Science group with Mathematics or Computer Science', 'Commerce group with Business Mathematics or Statistics', 'Vocational stream with one of these subjects', 'Maths is not compulsory if +2 had Computer Science, Statistics or Business Maths']
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

      {/* Programme Learning Framework */}
      <section className="py-16 bg-brand-cream" id="curriculum">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Learning Framework" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Programme{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Learning Framework
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive learning pathway designed with industry requirements and global standards
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

            {/* All three years are rendered so crawlers see all six semesters; tabs only toggle visibility. */}
            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 1 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period I',
                    courses: [
                      { code: '24UGTA01', name: 'General Tamil – I' },
                      { code: '24UGEN01', name: 'General English – I' },
                      { code: '24UCYC01', name: 'Core – I – Programming in C' },
                      { code: '24UCYCP01', name: 'Core Practical – I - Programming in C Lab' },
                      { code: '24UMAGE3 / 24UMAGE5 / 24UMAGE7 / 24UMAGE9', name: 'Generic Elective – I (Discrete Mathematics-I / Introduction to Linear Algebra / Optimization Techniques / Numerical Methods-I)' },
                      { code: '24UCSNM1', name: 'NME – I – Fundamentals of Information Technology' },
                      { code: '24UCSS01', name: 'SEC – I - Problem Solving Techniques' },
                    ]
                  },
                  {
                    title: 'Learning Period II',
                    courses: [
                      { code: '24UGTA02', name: 'General Tamil – II' },
                      { code: '24UGEN02', name: 'General English – II' },
                      { code: '24UCYC02', name: 'Core – II – Data Structures and Algorithms' },
                      { code: '24UCYCP02', name: 'Core Practical – II - Data Structures and Algorithms Lab' },
                      { code: '24UMAGE4 / 24UMAGE6 / 24UMAGE8 / 24UMAGE10', name: 'Generic Elective – II (Discrete Mathematics-II / Numerical Methods / Graph Theory and its Applications / Numerical Methods-II)' },
                      { code: '24UMAGEP02 / 24UMAGEP03 / 24UMAGEP04 / 24UMAGEP05 / 24UMAGEP06', name: 'Generic Elective - Practical - I (Discrete Mathematics / Introduction to Linear Algebra / Optimization Techniques / Graph Theory and its Applications / Numerical Methods)' },
                      { code: '24UCSNM2', name: 'NME - II - Advanced Excel' },
                      { code: '24UCSS02', name: 'SEC – II - Introduction to HTML' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-brand-green/10">
                              <th className="text-left py-2 px-2 text-brand-green font-semibold w-2/5">Course Code</th>
                              <th className="text-left py-2 px-2 text-brand-green font-semibold">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.courses.map((course, i) => (
                              <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-brand-green/[0.02]' : ''}`}>
                                <td className="py-2 px-2 text-gray-500 font-mono text-xs align-top">{course.code}</td>
                                <td className="py-2 px-2 text-gray-700 align-top">{course.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
            </div>

            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 2 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period III',
                    courses: [
                      { code: '24UGTA03', name: 'General Tamil – III' },
                      { code: '24UGEN03', name: 'General English – III' },
                      { code: '24UCYC03', name: 'Core III - Object Oriented Programming with Java' },
                      { code: '24UCYCP03', name: 'Core Practical – III - Object Oriented Programming with Java Lab' },
                      { code: '24USTAGE1', name: 'Generic Elective – III - Statistical Methods and its Application-I' },
                      { code: '24UCSS03', name: 'SEC III - Web Designing' },
                      { code: '24UCSS04', name: 'SEC IV - Advanced Excel' },
                      { code: '24UEVS01', name: 'Environmental Studies' },
                      { code: '24UHAWP01', name: 'Health and Wellness' },
                    ]
                  },
                  {
                    title: 'Learning Period IV',
                    courses: [
                      { code: '24UGTA04', name: 'General Tamil – IV' },
                      { code: '24UGEN04', name: 'General English – IV' },
                      { code: '24UCYC04', name: 'Core IV - Tools and Techniques for Cyber Security' },
                      { code: '24UCYCP04', name: 'Core Practical IV - Cyber Security Lab' },
                      { code: '24USTAGE2', name: 'Generic Elective – IV Statistical Methods and its Application-II' },
                      { code: '24USTAGEP01', name: 'Statistical Practical' },
                      { code: '24UCSS05', name: 'SEC V - PHP Programming' },
                      { code: '24UCSS06', name: 'SEC VI - Multimedia Systems' },
                      { code: '24UEVS01', name: 'Environmental Studies' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-brand-green/10">
                              <th className="text-left py-2 px-2 text-brand-green font-semibold w-2/5">Course Code</th>
                              <th className="text-left py-2 px-2 text-brand-green font-semibold">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.courses.map((course, i) => (
                              <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-brand-green/[0.02]' : ''}`}>
                                <td className="py-2 px-2 text-gray-500 font-mono text-xs align-top">{course.code}</td>
                                <td className="py-2 px-2 text-gray-700 align-top">{course.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
            </div>

            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 3 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period V',
                    courses: [
                      { code: '24UCYC05', name: 'Core V - Relational Database Management System' },
                      { code: '24UCYCP05', name: 'Core Practical V - Practical: RDBMS using ORACLE Lab' },
                      { code: '24UCYC06', name: 'Core VI - Essentials of Cyber Security' },
                      { code: '24UCYCPR1', name: 'Core VII - Project with Viva Voce' },
                      { code: '24UCYCDSE', name: 'Elective Course - V (Discipline Specific)' },
                      { code: '24UCYCDSE', name: 'Elective Course - VI (Discipline Specific)' },
                      { code: '24UVED01', name: 'Value Education - Yoga' },
                      { code: '24UCYCTR1', name: 'Summer Internship / Industrial Training' },
                    ]
                  },
                  {
                    title: 'Learning Period VI',
                    courses: [
                      { code: '24UCYC06', name: 'Core VI - Ethical Hacking and Cyber Security' },
                      { code: '24UCYCP06', name: 'Core Practical VI - Practical: Ethical Hacking Lab' },
                      { code: '24UCYC07', name: 'Core VII - Network Security' },
                      { code: '24UCYCDSE', name: 'Elective Course - VII (Discipline Specific)' },
                      { code: '24UCYCDSE', name: 'Elective Course - VIII (Discipline Specific)' },
                      { code: '—', name: 'Professional Competency Skill Enhancement Course' },
                      { code: '24UEXA01', name: 'Extension Activity' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-brand-green/10">
                              <th className="text-left py-2 px-2 text-brand-green font-semibold w-2/5">Course Code</th>
                              <th className="text-left py-2 px-2 text-brand-green font-semibold">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.courses.map((course, i) => (
                              <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-brand-green/[0.02]' : ''}`}>
                                <td className="py-2 px-2 text-gray-500 font-mono text-xs align-top">{course.code}</td>
                                <td className="py-2 px-2 text-gray-700 align-top">{course.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
            </div>
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
                { icon: <Code className="w-6 h-6 text-white" />, title: 'Programming Foundations', description: 'Write programs in C, Java and PHP, and work with data structures and algorithms.' },
                { icon: <Shield className="w-6 h-6 text-white" />, title: 'Cyber Security Tools', description: 'Use security tools and techniques through the Tools and Techniques for Cyber Security course and its lab (Semester IV).' },
                { icon: <Search className="w-6 h-6 text-white" />, title: 'Ethical Hacking', description: 'Understand authorised security testing through the Ethical Hacking and Cyber Security course and its lab (Semester VI).' },
                { icon: <Server className="w-6 h-6 text-white" />, title: 'Network Security', description: 'Learn how networks are protected through the Network Security core course (Semester VI).' },
                { icon: <Lock className="w-6 h-6 text-white" />, title: 'Databases', description: 'Design and query relational databases through the RDBMS course and its Oracle lab (Semester V).' },
                { icon: <FileText className="w-6 h-6 text-white" />, title: 'Project Work', description: 'Carry out a project with viva voce and a summer internship or industrial training in the final year.' }
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
                  High-demand career pathways for B.Sc CS (Cyber Security) graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'Cyber Security Analyst', desc: 'Monitor, detect, and respond to security threats' },
                { icon: <Lock className="w-6 h-6" />, title: 'Ethical Hacker / Pentester', desc: 'Conduct authorized security assessments' },
                { icon: <Search className="w-6 h-6" />, title: 'Digital Forensics Investigator', desc: 'Investigate cyber crimes and recover evidence' },
                { icon: <Server className="w-6 h-6" />, title: 'Network Security Engineer', desc: 'Design and implement secure network infrastructure' },
                { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Security Specialist', desc: 'Secure cloud infrastructure (AWS, Azure, GCP)' },
                { icon: <Users className="w-6 h-6" />, title: 'Security Consultant', desc: 'Advise organizations on security strategy' },
                { icon: <Code className="w-6 h-6" />, title: 'SOC Analyst', desc: 'Monitor threats 24/7 in Security Operations Centers' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Government Cyber Roles', desc: 'CERT-In, NIA, IB, DRDO positions' }
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
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Key Employment Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'IT & Software Companies', 'Banking & Finance (BFSI)', 'Government & Defense', 'Healthcare',
                    'E-commerce', 'Telecommunications', 'Consulting Firms', 'Cyber Security Startups',
                    'Insurance Companies', 'Manufacturing', 'Educational Institutions', 'Research Organizations'
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

      {/* Learning Facilities */}
      <section className="py-16 bg-white" id="facilities">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Laboratory Work" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Practical{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Labs
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The core practical courses in the B.Sc CS (Cyber Security) syllabus
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Programming in C Lab', description: 'Core Practical I (24UCYCP01), Semester I.' },
                { title: 'Data Structures and Algorithms Lab', description: 'Core Practical II (24UCYCP02), Semester II.' },
                { title: 'Java Programming Lab', description: 'Core Practical III (24UCYCP03), Semester III.' },
                { title: 'Cyber Security Lab', description: 'Core Practical IV (24UCYCP04), Semester IV, with Tools and Techniques for Cyber Security.' },
                { title: 'RDBMS using Oracle Lab', description: 'Core Practical V (24UCYCP05), Semester V.' },
                { title: 'Ethical Hacking Lab', description: 'Core Practical VI (24UCYCP06), Semester VI.' }
              ].map((facility, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="p-6 group h-full">
                    <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </GlassCard>
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
              <SectionBadge text="Why Us" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our B.Sc CS{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  (Cyber Security) Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Facts a family can check before choosing: fee, eligibility, affiliation and what the syllabus covers.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Published Fee', description: '₹32,000 a year under the management quota for 2026-27; government quota seats follow Government norms.' },
                  { title: 'Maths Not Compulsory', description: '+2 with Computer Science, Statistics or Business Mathematics also qualifies under the Periyar University regulation.' },
                  { title: 'Security Courses with Labs', description: 'Tools and Techniques for Cyber Security, Ethical Hacking and Network Security, each core course with a practical lab.' },
                  { title: 'Autonomous, Periyar University Degree', description: 'The college sets its own syllabus and examinations; the degree is awarded by Periyar University, Salem.' },
                  { title: 'PG on the Same Campus', description: 'M.Sc Computer Science (aided and self-finance) and an aided MCA are offered at the college.' }
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
                  Find answers to common queries about the B.Sc CS (Cyber Security) programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
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
                  Cyber Security
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Sc CS (Cyber Security) programme and become a skilled cybersecurity professional.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-cs-cyber-security" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/pdf/brochure.pdf" download className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Brochure
                </a>
              </div>
              <p className="text-gray-600">
                <a href="/admissions/bsc-cs-cyber-security-self-finance" className="text-brand-green underline">B.Sc Cyber Security admission 2026-27</a>
                {' · '}
                <a href="/fee-structure" className="text-brand-green underline">Fee structure</a>
                {' · '}
                <a href="/bsc-cyber-security-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Cyber Security colleges in Tamil Nadu</a>
              </p>
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
                  Discover other computer science and technology programmes
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'BCA', description: 'Bachelor of Computer Applications', href: '/programmes/self-finance/ug/bca' },
                { title: 'B.Sc Computer Science', description: 'Python, Java, PHP, .NET and DBMS with labs', href: '/programmes/self-finance/ug/bsc-computer-science' },
                { title: 'B.Sc CS (AI & Data Science)', description: 'Computer science with AI and data science', href: '/programmes/self-finance/ug/bsc-ai-ds' }
              ].map((programme, idx) => (
                <RevealSection key={idx} delay={idx * 150}>
                  <a href={programme.href} className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-brand-cream group">
                    <h3 className="text-xl font-bold text-brand-green mb-2 group-hover:text-emerald-500 transition-colors">{programme.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{programme.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3 Years</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Full-time</span>
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

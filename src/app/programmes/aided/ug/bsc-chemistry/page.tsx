'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, FlaskConical, Microscope, TestTube, Atom, Building2, Beaker, Brain, Lightbulb, School } from 'lucide-react';
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

export default function BScChemistryPage() {
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
                Bachelor of Science in{' '}
                <span className="text-brand-green">
                  Chemistry
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Exploring Matter, Reactions & Innovations
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
              { icon: <Users className="w-7 h-7" />, stat: '15:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized attention' },
              { icon: <Briefcase className="w-7 h-7" />, stat: 'Good', title: 'Placement Record', desc: 'Career opportunities assured' },
              { icon: <Award className="w-7 h-7" />, stat: '₹3.5L', title: 'Average Package', desc: 'Competitive starting salary' },
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
                The Bachelor of Science in Chemistry programme offers a comprehensive study of chemical sciences, exploring the composition, structure, properties, and reactions of matter. Our curriculum combines theoretical knowledge with extensive practical training in modern laboratories equipped with advanced instrumentation and research facilities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Student develop strong analytical, research, and problem-solving skills through hands-on experiments, project work, and industry exposure. The programme for diverse careers in chemical industries, pharmaceuticals, research institutions, environmental sciences, quality control, and education sectors.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['State-of-the-art Labs', 'Expert Learning Facilitators', 'Research Opportunities', 'Industry Collaborations'].map((item, idx) => (
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
                  src="/images/programmes/chemistry/JKKN B.Sc Chemistry.png"
                  alt="Chemistry Laboratory"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1980
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
                  Requirements for joining the B.Sc Chemistry programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <School className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Minimum aggregate marks as per norms', 'Reserved categories as per government nomrs', 'Science stream students']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Subject Requirements',
                  items: ['Chemistry as mandatory subject', 'Any science stream and Science stream with Chemistry', 'Laboratory experience beneficial']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
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
                  Comprehensive syllabus designed to build expertise in chemical sciences
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
                      { code: '24UGTA01', name: 'General Tamil-I' },
                      { code: '24UGEN01', name: 'General English-I' },
                      { code: '24UCHC01', name: 'Core-1 General Chemistry-1' },
                      { code: '24UCHS01', name: 'SEC-1 Foundation Course in Chemistry' },
                      { code: '24UCHNM1', name: 'NME-1 Food Chemistry (For other major)' },
                      { code: '24UMAGE1 / 24UZOGE1', name: 'Generic Elective Mathematics I: Algebra and Calculus / Generic Elective Zoology-1' },
                      { code: '24UMAGEP01 / 24UZOGEP01', name: 'Generic Elective Mathematics Practical / Generic Elective Zoology Practical' },
                      { code: '24UCHCP01', name: 'Core Practical-1 Quantitative Inorganic Estimations (Titrimetry) and Inorganic Preparations' },
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      { code: '24UGTA02', name: 'General Tamil-II' },
                      { code: '24UGEN02', name: 'General English-II' },
                      { code: '24UCHC02', name: 'Core-2 General Chemistry-II' },
                      { code: '24UCHNM2', name: 'NME-2 Dairy Chemistry (For other major)' },
                      { code: '24UCHS02', name: 'SEC-2 Cosmetics and Personal Care Products' },
                      { code: '24UMAGE2 / 24UZOGE2', name: 'Generic Elective Mathematics II: Differential Equations and Laplace Transforms / Generic Elective Zoology-2' },
                      { code: '24UMAGEP01 / 24UZOGEP01', name: 'Generic Elective Mathematics Practical / Generic Elective Zoology Practical' },
                      { code: '24UCHCP02', name: 'Core Practical-2 Qualitative Organic Analysis and Preparation of Organic Compounds' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-0">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-brand-green/8 border-b border-brand-green/15">
                              <th className="text-left px-4 py-2.5 font-semibold text-brand-green w-[38%]">Course Code</th>
                              <th className="text-left px-4 py-2.5 font-semibold text-brand-green">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.subjects.map((subject, i) => (
                              <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-green/3'}`}>
                                <td className="px-4 py-2.5 font-mono text-xs text-brand-green font-medium align-top">{subject.code}</td>
                                <td className="px-4 py-2.5 text-gray-700 align-top">{subject.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
                      { code: '24UGTA03', name: 'General Tamil-III' },
                      { code: '24UGEN03', name: 'General English-III' },
                      { code: '24UCHC03', name: 'Core-3 General Chemistry-III' },
                      { code: '24UPHGE1', name: 'Generic Elective Physics-I' },
                      { code: '24UPHGEP01', name: 'Generic Elective Physics Practical-I' },
                      { code: '24UCHCP03', name: 'Core Practical-3: Quantitative Inorganic Analysis' },
                      { code: '24UCHS03', name: 'SEC-3 Entrepreneurial Skills in Chemistry' },
                      { code: '24UCHS04', name: 'SEC-4 Agricultural Chemistry' },
                      { code: '24UEVS01', name: 'Environmental Studies' },
                      { code: '24UHAWP01', name: 'Health and Wellness' },
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      { code: '24UGTA04', name: 'General Tamil-IV' },
                      { code: '24UGEN04', name: 'General English-IV' },
                      { code: '24UCHC04', name: 'Core-4 General Chemistry-IV' },
                      { code: '24UPHGE2', name: 'Generic Elective Physics-II' },
                      { code: '24UPHGEP02', name: 'Generic Elective Physics Practical-II' },
                      { code: '24UCHCP04', name: 'Core Practical-4: Physical Chemistry Practical' },
                      { code: '24UCHS05', name: 'SEC-5: Instrumental Methods of Chemical Analysis' },
                      { code: '24UCHS06', name: 'SEC-6 Water Pollution and Management' },
                      { code: '24UEVS01', name: 'Environmental Studies' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-0">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-brand-green/8 border-b border-brand-green/15">
                              <th className="text-left px-4 py-2.5 font-semibold text-brand-green w-[38%]">Course Code</th>
                              <th className="text-left px-4 py-2.5 font-semibold text-brand-green">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.subjects.map((subject, i) => (
                              <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-green/3'}`}>
                                <td className="px-4 py-2.5 font-mono text-xs text-brand-green font-medium align-top">{subject.code}</td>
                                <td className="px-4 py-2.5 text-gray-700 align-top">{subject.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
                      { code: '23UCHCC09', name: 'Organic Chemistry-I (CC9)' },
                      { code: '23UCHCC10', name: 'Inorganic Chemistry-I (CC10)' },
                      { code: '23UCHCC11', name: 'Physical Chemistry-I (CC11)' },
                      { code: '23UCHEC05', name: 'Biochemistry (EC5)' },
                      { code: '23UCHEC06', name: 'Industrial Chemistry (EC6)' },
                      { code: '23UCHCC12', name: 'Physical Chemistry Practical-II (CC12)' },
                      { code: '23UCHCC13', name: 'Project with Viva-Voce (CC13)' },
                      { code: '23UCHSI01', name: 'Internship / Industrial Visit / Field Visit (Carried out in II Year Summer Vacation – 2 Weeks)' },
                    ]
                  },
                  {
                    title: 'Semester VI',
                    subjects: [
                      { code: '23UCHCC14', name: 'Organic Chemistry-II (CC14)' },
                      { code: '23UCHCC15', name: 'Inorganic Chemistry-II (CC15)' },
                      { code: '23UCHCC16', name: 'Physical Chemistry-II (CC16)' },
                      { code: '23UCHCC17', name: 'Gravimetric Estimation Practical (CC17)' },
                      { code: '23UCHEC07', name: 'Fundamentals of Spectroscopy (EC7)' },
                      { code: '23UCHEC08A', name: 'NanoScience – Elective based (EC8A)' },
                      { code: '23UCHEC08B', name: 'Polymer Science – Elective based (EC8B)' },
                      { code: '23UCHEC08C', name: 'Pharmaceutical Chemistry – Elective based (EC8C)' },
                      { code: '23UCHPC01', name: 'Professional Competency Skill' },
                      { code: '23UEX01', name: 'Extension Activity' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-0">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-brand-green/8 border-b border-brand-green/15">
                              <th className="text-left px-4 py-2.5 font-semibold text-brand-green w-[38%]">Course Code</th>
                              <th className="text-left px-4 py-2.5 font-semibold text-brand-green">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.subjects.map((subject, i) => (
                              <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-green/3'}`}>
                                <td className="px-4 py-2.5 font-mono text-xs text-brand-green font-medium align-top">{subject.code}</td>
                                <td className="px-4 py-2.5 text-gray-700 align-top">{subject.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
                { icon: <Atom className="w-6 h-6 text-white" />, title: 'Chemistry Knowledge', description: 'Comprehensive understanding of chemistry principles, reactions, and molecular structures across all chemistry branches.' },
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Analytical Skills', description: 'Proficiency in using modern analytical instruments and techniques for chemical analysis and research.' },
                { icon: <TestTube className="w-6 h-6 text-white" />, title: 'Laboratory Expertise', description: 'Hands-on experience with chemical experiments, safety protocols, and laboratory management practices.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'Research Aptitude', description: 'Ability to design experiments, conduct research, and contribute to scientific knowledge in chemistry.' },
                { icon: <Lightbulb className="w-6 h-6 text-white" />, title: 'Problem Solving', description: 'Critical thinking and analytical problem-solving skills for chemical and industrial challenges.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Industry Readiness', description: 'Practical knowledge and skills needed for careers in chemical industries and pharmaceutical sectors.' }
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
                  Diverse career paths in chemical sciences, pharmaceuticals, research, and industry
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Chemical Analyst', desc: 'Quality control and analysis in laboratories' },
                { icon: <Beaker className="w-6 h-6" />, title: 'Research Scientist', desc: 'R&D in research institutions and labs' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Production Chemist', desc: 'Chemical manufacturing and production' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Chemistry Teacher', desc: 'Teaching at schools and colleges' },
                { icon: <TestTube className="w-6 h-6" />, title: 'Pharmaceutical Analyst', desc: 'Drug development and quality control' },
                { icon: <Microscope className="w-6 h-6" />, title: 'Lab Technician', desc: 'Laboratory testing and analysis' },
                { icon: <Target className="w-6 h-6" />, title: 'Quality Controller', desc: 'Quality assurance in industries' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Environmental Chemist', desc: 'Environmental analysis and protection' }
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
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Employment Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Pharmaceutical Companies', 'Chemical Industries', 'Research Institutions', 'Quality Control Labs',
                    'Environmental Agencies', 'Food & Beverage Industry', 'Cosmetics Industry', 'Petroleum Sector',
                    'Academic Institutions', 'Forensic Laboratories', 'Government Departments', 'Biotechnology Firms', 'Textile', 'Healthcare', 'Agrochemicals', 'Water Board', 'Thermal power station', 'Steel Industries', 'Soilan', 'Paint industries(Polymer)'
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
                { title: 'Advanced Laboratories', description: 'Modern chemistry labs with latest equipment for organic, inorganic, physical, and analytical chemistry with safety protocols.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Chemistry+Lab' },
                { title: 'Department Library', description: 'Extensive chemistry research resources, journals, reference books, and digital databases for academic study.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Digital+Library' },
                { title: 'Research Center', description: 'Dedicated research and project facilities with modern instruments for undergraduate and postgraduate research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Center' },
                // { title: 'Seminar Hall', description: 'Air-conditioned seminar hall with modern presentation facilities for academic discussions, guest lectures, and workshops.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Seminar+Hall' },
                // { title: 'Smart Learning Studios', description: 'Technology-enabled learning spaces with interactive boards, projectors, and high-speed internet connectivity.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Smart+Classroom' }
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
                Why Choose Our B.Sc{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Chemistry Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in academics and career.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured education meeting national standards with excellent academic reputation.' },
                  { title: 'Comprehensive Curriculum', description: 'Balance of theoretical knowledge and hands-on laboratory experience with modern equipment.' },
                  { title: 'Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, research publications, and industry experience.' },
                  { title: 'Advanced Laboratory Infrastructure', description: 'Well-equipped labs with suffficient instruments for organic, inorganic, physical, and practical.' },
                  { title: 'Industry Collaborations', description: 'Partnerships with chemical and pharmaceutical companies providing real-world exposure and placements.' }
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
                { name: 'Dr. B. Palanisamy', designation: 'Assistant Professor & Head', qualification: 'M.Sc., Ph.D.', image: '/images/faculties/aided/chemistry/Dr.-B.-Palanisamy-240x300.png' },
                { name: 'Dr. R. Mohan Raj', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D. (SET, NET)', image: '/images/faculties/aided/chemistry/Dr.-R.-Mohan-Raj-240x300.png' },
                { name: 'Dr. S. Tamilselvi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D.', image: '/images/faculties/aided/chemistry/Dr.-S.-Tamilselvi-240x300.png' },
                { name: 'Dr. K. Kalaiselvi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D.', image: '/images/faculties/aided/chemistry/Dr.-K.-Kalaiselvi-240x300.png' },
                { name: 'Dr. D. Navaneethan', designation: 'Assistant Professor', qualification: 'M.Sc., Ph.D. (SET)', image: '/images/faculties/aided/chemistry/Dr.-D.-Navaneethan-240x300.png' },
                { name: 'Dr. V. Gopalakannan', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D.', image: '/images/faculties/aided/chemistry/Dr.-V.-Gopalakannan-240x300.png' },
                { name: 'Dr. G. Devagi', designation: 'Assistant Professor', qualification: 'M.Sc., Ph.D.', image: '/images/faculties/aided/chemistry/Dr.-G.-Devagi-240x300.png' },
                { name: 'Dr. N. Madankumar', designation: 'Assistant Professor', qualification: 'M.Sc., Ph.D. (NET, GATE)', image: '/images/faculties/aided/chemistry/Dr.-N.-Madankumar-240x300.png' }
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
                  Find answers to common queries about the B.Sc Chemistry programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the B.Sc Chemistry programme?', answer: 'The B.Sc Chemistry programme is a 3-year full-time undergraduate degree comprising six semesters with both theoretical and practical components. Each academic year consists of two semesters, with examinations conducted at the end of each semester following the Choice Based Credit System (CBCS) pattern.' },
                { question: 'What are the career opportunities after B.Sc Chemistry?', answer: 'Graduates can pursue careers in pharmaceutical companies, chemical industries, quality control laboratories, research institutions, environmental agencies, teaching, and can also opt for higher studies like M.Sc Chemistry, Ph.D., or professional courses in pharmaceutical sciences, analytical chemistry, and environmental sciences.' },
                { question: 'What is the eligibility criteria for admission?', answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board with Chemistry as a mandatory subject and preferably Physics or Mathematics. Science stream students with minimum aggregate marks are eligible to apply. The minimum percentage varies by category (General/OBC/SC/ST).' },
                { question: 'What laboratory facilities are available?', answer: 'The department has well-equipped laboratories for Organic, Inorganic, Physical, and Analytical Chemistry with  pH meters, centrifuges, chromatography equipment for hands-on learning and research projects.' },
                { question: 'Are there opportunities for research and projects?', answer: 'Yes, students undertake research projects in the end of 2nd year and are encouraged to participate in scientific research, paper presentations, and academic conferences. The department provides research facilities and guidance from experienced faculty members to develop research aptitude and analytical skills.' },
                { question: 'Does the college provide placement assistance?', answer: 'Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, soft skills training, resume building workshops, mock interviews, and industry interaction sessions. We have partnerships with leading chemical, pharmaceutical, and research companies for internships and career opportunities.' },
                { question: 'What makes this B.Sc Chemistry programme unique?', answer: 'Our programme stands out due to its comprehensive curriculum balancing theory and practice, state-of-the-art laboratory infrastructure, expert learning facilitators with research experience, strong industry collaborations, emphasis on research projects, and holistic development through co-curricular activities in chemistry clubs and scientific societies.' }
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
                  Chemical Sciences
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Sc Chemistry programme and unlock exciting opportunities in research, industry, and innovation.
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
      {/* <section className="py-16 bg-brand-cream">
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
                  Discover other science programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Sc Physics', description: 'Explore the fundamental laws of nature and physical phenomena', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Physics' },
                { title: 'B.Sc Mathematics', description: 'Master mathematical concepts and computational techniques', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=BSc+Mathematics' },
                { title: 'B.Sc Zoology', description: 'Study animal biology, biodiversity, and life sciences', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Zoology' }
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
      </section> */}
    </div>
  );
}

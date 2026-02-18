'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, TestTube, Droplet } from 'lucide-react';
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

export default function MScChemistryPage() {
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
                UGC Recognized Postgraduate Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Master of Science in{' '}
                <span className="text-brand-green">
                  Chemistry
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Advanced Research & Scientific Excellence in Chemical Sciences
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
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'UGC', title: 'Recognized Programme', desc: 'Quality postgraduate education' },
              { icon: <Microscope className="w-7 h-7" />, stat: '10:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized research guidance' },
              { icon: <Award className="w-7 h-7" />, stat: 'Good', title: 'Research Placement', desc: 'Industry & academic positions' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '₹5.5L', title: 'Average Package', desc: 'Competitive starting salary' },
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
                The Master of Science in Chemistry is a rigorous two-year postgraduate programme designed to provide Learners with advanced knowledge in Organic, Inorganic, Physical, and Analytical Chemistry. This UGC-recognized programme offers comprehensive training in modern chemical research methodologies, spectroscopic techniques, and industrial applications, preparing graduates for careers in research, academia, and chemical industries.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our programme emphasizes hands-on laboratory experience, research dissertation. The curriculum integrates theoretical concepts with practical applications, fostering scientific temper and research excellence.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Advanced Instrumentation Training', 'Research Dissertation Mandatory', 'Expert Research Supervisors', 'Industry Collaboration'].map((item, idx) => (
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
                  src="/images/programmes/chemistry/JKKN M.Sc Chemistry.png"
                  alt="Chemistry Laboratory"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1983
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
                  Requirements for joining the M.Sc Chemistry programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['B.Sc Chemistry from recognized university', 'B.Sc with Chemistry as major subject', 'Minimum 50% aggregate marks', 'Reserved categories as per government norms']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Degrees',
                  items: ['B.Sc Chemistry Major', 'B.Sc Applied Chemistry']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['B.Sc Degree & Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Conduct Certificate']
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
                  Comprehensive syllabus covering all branches of chemistry with advanced topics
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
                      { code: '24PCHC01', type: 'Core-I', name: 'Organic Reaction Mechanism-I' },
                      { code: '24PCHC02', type: 'Core-II', name: 'Structure and Bonding in Inorganic Compounds' },
                      { code: '24PCHE01 / 24PCHE02', type: 'Elective-I', name: 'Pharmaceutical Chemistry / Nanomaterials and Nanotechnology' },
                      { code: '24PCHE03 / 24PCHE04', type: 'Elective-II', name: 'Electrochemistry / Molecular Spectroscopy' },
                      { code: '24PCHCP01', type: 'Core Practical-I', name: 'Organic Chemistry Practical' },
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      { code: '24PCHC03', type: 'Core-III', name: 'Organic Reaction Mechanism-II' },
                      { code: '24PCHC04', type: 'Core-IV', name: 'Physical Chemistry-I' },
                      { code: '24PCHE05 / 24PCHE06', type: 'Elective-III', name: 'Medicinal Chemistry / Green Chemistry' },
                      { code: '24PCHE07 / 24PCHE08', type: 'Elective-IV', name: 'Bio Inorganic Chemistry / Material Science' },
                      { code: '24PCHED1', type: 'EDC-1', name: 'Chemistry for Food Preservation' },
                      { code: '24PHR001', type: '', name: 'Fundamental Study of Human Rights' },
                      { code: '24PCHCP02', type: 'Core Practical-II', name: 'Inorganic Chemistry Practical' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2">
                          {sem.subjects.map((subject, i) => (
                            <div key={i} className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
                              <span className="text-xs font-mono bg-brand-green/10 text-brand-green px-2 py-1 rounded shrink-0 self-start mt-0.5 whitespace-nowrap">{subject.code}</span>
                              <div>
                                {subject.type && <span className="text-xs font-semibold text-emerald-600 block mb-0.5">{subject.type}</span>}
                                <span className="text-sm text-gray-700">{subject.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
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
                      { code: '24PCHC05', type: 'Core-V', name: 'Organic Synthesis and Photochemistry' },
                      { code: '24PCHC06', type: 'Core-VI', name: 'Coordination Chemistry-I' },
                      { code: '24PCHE09 / 24PCHE10', type: 'Elective-V', name: 'Pharmacognosy and Phytochemistry / Biomolecules and Heterocyclic Compounds' },
                      { code: '24PCHED2', type: 'EDC-2', name: 'Chemistry in Consumer Products' },
                      { code: '24PCHCP03', type: 'Core Practical-III', name: 'Physical Chemistry Practical' },
                      { code: '24PCHS01', type: 'Skill Enhancement Course-I', name: 'Preparation of Consumer Products' },
                      { code: '24PCHIT1', type: '', name: 'Internship / Industrial Activity' },
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      { code: '24PCHC07', type: 'Core-VII', name: 'Coordination Chemistry-II' },
                      { code: '24PCHC08', type: 'Core-VIII', name: 'Physical Chemistry-II' },
                      { code: '24PCHCP04', type: 'Core Practical-IV', name: 'Analytical Instrumentation Technique Practical (Industry Entrepreneurship)' },
                      { code: '24PCHS02', type: 'Skill Enhancement Course-II', name: 'Professional Competency Skill Enhancement Course' },
                      { code: '24PCHPR1', type: '', name: 'Core Project with Viva Voce' },
                      { code: '24PEXTN1', type: '', name: 'Extension Activity' },
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{sem.title}</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2">
                          {sem.subjects.map((subject, i) => (
                            <div key={i} className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
                              <span className="text-xs font-mono bg-brand-green/10 text-brand-green px-2 py-1 rounded shrink-0 self-start mt-0.5 whitespace-nowrap">{subject.code}</span>
                              <div>
                                {subject.type && <span className="text-xs font-semibold text-emerald-600 block mb-0.5">{subject.type}</span>}
                                <span className="text-sm text-gray-700">{subject.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
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
                { icon: <Droplet className="w-6 h-6 text-white" />, title: 'Advanced Chemical Knowledge', description: 'Master complex concepts in organic, inorganic, physical, and analytical chemistry with deep theoretical understanding.' },
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Laboratory Proficiency', description: 'Develop expertise in advanced laboratory techniques, instrumentation, and safety protocols for chemical research.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Research Competence', description: 'Conduct independent research, analyze data, and contribute to scientific knowledge through dissertation work.' },
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Analytical Thinking', description: 'Apply critical thinking and problem-solving skills to complex chemical problems and industrial applications.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Scientific Communication', description: 'Communicate research findings effectively through scientific writing, presentations, and peer discussions.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Industry Readiness', description: 'Prepare for careers in pharmaceutical, chemical, environmental, and research industries with practical skills.' }
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
                  Diverse pathways await M.Sc Chemistry graduates across industries
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Microscope className="w-6 h-6" />, title: 'Research Scientist', desc: 'Conduct research in academic and industrial laboratories' },
                { icon: <TestTube className="w-6 h-6" />, title: 'Quality Control Analyst', desc: 'Ensure product quality in pharmaceutical and chemical industries' },
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Pharmaceutical Researcher', desc: 'Develop new drugs and pharmaceutical formulations' },
                { icon: <Droplet className="w-6 h-6" />, title: 'Production Chemist', desc: 'Chemical manufacturing process handling.' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Chemist', desc: 'Monitor and protect environmental quality' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Forensic Scientist', desc: 'Analyze evidence for law enforcement agencies' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Academic Professor', desc: 'Teach and research in universities and colleges' },
                { icon: <Award className="w-6 h-6" />, title: 'CSIR-NET / GATE', desc: 'Qualify for research fellowships and academic positions' }
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
                    'Pharmaceutical Industry', 'Chemical Manufacturing', 'Research & Development', 'Quality Control Labs',
                    'Environmental Agencies', 'Forensic Laboratories', 'Academic Institutions',
                    'Petrochemical Industry', 'Food & Beverage Industry'
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
                  State-of-the-art laboratories and research infrastructure
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Organic Laboratory', description: 'Advanced organic lab with fume hoods, distillation units, and synthesis equipment for organic reactions and purification.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Organic+Lab' },
                // { title: 'Analytical Instrumentation Lab', description: 'Equipped with HPLC, GC, UV-Vis, AAS, and other analytical instruments for chemical analysis and research.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Analytical+Lab' },
                { title: 'Physical Chemistry Laboratory', description: 'Modern equipment for thermodynamics, kinetics, electrochemistry, and surface chemistry experiments.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Physical+Lab' },
                { title: 'PG Research Laboratory', description: 'Dedicated research space for M.Sc students with individual workstations and advanced research equipment.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Lab' },
                // { title: 'Spectroscopy Suite', description: 'NMR, FTIR, UV-Vis, and Mass spectrometry facilities for structural elucidation and molecular characterization.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Spectroscopy' },
                // { title: 'Digital Library & Journals', description: 'Access to international chemistry journals, e-books, and research databases like SciFinder and PubChem.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Digital+Library' }
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
                Why Choose Our M.Sc{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Chemistry Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our research-oriented approach ensures comprehensive scientific training and career readiness.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Advanced Research Infrastructure', description: 'State-of-the-art laboratories with modern instrumentation for cutting-edge research.' },
                  { title: 'Expert Research Supervisors', description: 'Highly qualified faculty members with Ph.D. degrees and active research publications.' },
                  { title: 'Industry Collaborations', description: 'Partnerships with pharmaceutical and chemical industries for internships and placements.' },
                  { title: 'Research Publication Support', description: 'Guidance and support for publishing research papers in reputed journals.' },
                  { title: 'CSIR-NET / GATE Coaching', description: 'Preparation support for national-level examinations and research fellowships.' }
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
                  Our Research{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Supervisors
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
                  Find answers to common queries about the M.Sc Chemistry programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the M.Sc Chemistry programme?', answer: 'The M.Sc Chemistry programme is a 2-year full-time postgraduate degree comprising four semesters with intensive laboratory sessions and a mandatory research dissertation in the final semester.' },
                { question: 'What are the career opportunities after M.Sc Chemistry?', answer: 'Graduates can pursue careers as Research Scientists, Quality Control Analysts, Pharmaceutical Researchers, Chemical Engineers, Environmental Chemists, Forensic Scientists, Academic Professors, and can appear for competitive examinations like CSIR-NET, GATE, and UPSC.' },
                { question: 'What is the eligibility criteria for M.Sc Chemistry admission?', answer: 'Candidates must have completed B.Sc in Chemistry or B.Sc with Chemistry as a major subject from a recognized university with minimum 50% aggregate marks (Reserved categories as per government norms).' },
                { question: 'Is research dissertation mandatory?', answer: 'Yes, a research dissertation is mandatory in the fourth semester. Students work under the guidance of faculty supervisors on original research projects, conduct experiments, analyze data, and submit a comprehensive thesis followed by viva-voce examination.' },
                // { question: 'What instrumentation facilities are available?', answer: 'The department is equipped with advanced instruments including NMR, FTIR, UV-Vis Spectrophotometer, HPLC, GC, AAS, pH meters, centrifuges, and other modern analytical equipment. Students receive hands-on training on all major instruments.' },
                { question: 'Can I pursue Ph.D. after M.Sc Chemistry?', answer: 'Yes, M.Sc Chemistry graduates are eligible to pursue Ph.D. in Chemistry or related fields. Our programme prepares students for research careers through comprehensive training in research methodology, literature review, and scientific writing.' },
                { question: 'Does the programme offer specializations?', answer: 'The programme covers all major branches of Chemistry - Organic, Inorganic, Physical, and Analytical. In the first three semesters, students can choose electives in specialized areas like Polymer Chemistry, Pharmaceutical Chemistry, Environmental Chemistry, or Materials Science based on their research interests.' },
                { question: 'What is the placement support for M.Sc Chemistry?', answer: 'Our placement cell actively connects students with pharmaceutical companies, chemical industries, research laboratories, and quality control labs. We also provide training for CSIR-NET, GATE,Competitive exams and conducted hands on training, supported by ours MOU companies/Lab. The placement rate for M.Sc Chemistry is consistently above 90%.' }
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
                Begin Your Research Journey in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Chemistry
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our M.Sc Chemistry programme and unlock a world of research and innovation.
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
                { title: 'B.Sc Chemistry', description: 'Comprehensive undergraduate programme in chemistry with laboratory training', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Chemistry' },
                { title: 'M.Sc Physics', description: 'Advanced postgraduate studies in theoretical and applied physics', duration: '2 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=MSc+Physics' },
                { title: 'M.Sc Mathematics', description: 'Rigorous programme in pure and applied mathematics', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MSc+Maths' }
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

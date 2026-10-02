'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, TestTube, Dna, Activity, Pill, DollarSign } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';
import { bscMicrobiologyFaqs } from './faqs';

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

export default function BSCMicrobiologyPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const faqs = bscMicrobiologyFaqs;

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
                  Microbiology
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                A three-year Periyar University degree · Komarapalayam, Tamil Nadu
              </p>
              <p className="text-base text-gray-700 mb-6">
                Open to +2 students with any one of Botany, Zoology or Biology. No entrance test, no NEET.
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
                  <span>Self-Finance Programme</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-microbiology" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
              { icon: <DollarSign className="w-7 h-7" />, stat: '₹34,000', title: 'Annual Fee (MQ)', desc: '2026-27 · GQ as per Govt norms' },
              { icon: <Microscope className="w-7 h-7" />, stat: 'Any 1', title: 'Biology Subject', desc: 'Botany, Zoology or Biology in +2' },
              { icon: <TestTube className="w-7 h-7" />, stat: 'Lab', title: 'Practical Every Core', desc: 'A practical in each core subject' },
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'Periyar', title: 'University Degree', desc: 'Autonomous, NAAC accredited college' },
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
                B.Sc Microbiology is a three-year arts and science degree on microorganisms and their uses. Year 1 covers Fundamentals of Microbiology, Microbial Physiology and Metabolism, biochemistry and bioinstrumentation; Year 2 covers Molecular Biology and Microbial Genetics, Immunology and Immunotechnology, clinical laboratory technology and food processing; Year 3 covers Bacteriology and Mycology, Virology and Parasitology, Recombinant DNA Technology, environmental, agricultural, food and pharmaceutical microbiology, a project with viva voce and an internship or industrial visit.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                JKKN College of Arts and Science is an autonomous college affiliated to Periyar University, on NH-544 at Komarapalayam in Namakkal district, Tamil Nadu, between Salem and Erode. B.Sc Microbiology here is a self-finance programme with an annual management-quota fee of ₹34,000 for 2026-27. Comparing colleges across the state? Read our{' '}
                <a href="/bsc-microbiology-colleges-in-tamil-nadu" className="text-brand-green font-semibold underline">guide to B.Sc Microbiology colleges in Tamil Nadu</a>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['A practical in every core subject', 'Project with viva voce', 'Internship or industrial visit', 'Any one biology subject in +2'].map((item, idx) => (
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
                  src="/images/programmes/bsc-microbiology/Bachelor of Science in Microbiology.webp"
                  alt="B.Sc Microbiology at JKKN College of Arts and Science, Komarapalayam"
                  className="w-full h-auto"
                width={2048}
                height={2048}
              />
                {/* <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1995
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
                  Requirements for joining B.Sc Microbiology, as set by the{' '}
                  <a href="https://www.periyaruniversity.ac.in/Documents/2023/CDC/Affiliated/ug/B.Sc.%20Microbiology.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-green underline">Periyar University regulations</a>
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Pass in the Higher Secondary (+2) examination', 'Any one of Botany, Zoology or Biology', 'No minimum percentage in the regulation', 'Merit-based admission; reservation as per Tamil Nadu Government norms']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Academic stream with Botany, Zoology or Biology', 'Vocational stream: Agriculture, Home Science or Poultry', 'Chemistry is not required by the regulation', 'No entrance test - NEET is not needed']
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
                  Comprehensive learning pathway designed to develop expertise in microbiological sciences
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
                    subjects: [
                      { name: 'Fundamental of Microbiology and Microbial Diversity', code: '24UMBC01' },
                      { name: 'Fundamental of Microbiology Practicals', code: '24UMBCP01' },
                      { name: 'Basic and Clinical Biochemistry', code: '24UMBDE01' },
                      { name: 'Foundation Course - Introduction to Microbial World', code: '24UMBFC01' },
                    ]
                  },
                  {
                    title: 'Learning Period II',
                    subjects: [
                      { name: 'Microbial Physiology and Metabolism', code: '24UMBC02' },
                      { name: 'Microbial Physiology and Metabolism Practicals', code: '24UMBCP02' },
                      { name: 'Bioinstrumentation', code: '24UMBDE02' },
                      { name: 'Sericulture', code: '24UMBSE01' },
                      { name: 'AI Acceleration with Microbiology', code: '24UMBSE02' },
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
                            <li key={i} className="flex items-start justify-between gap-3 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">•</span>
                                <span>{subject.name}</span>
                              </div>
                              <span className="flex-shrink-0 text-xs font-mono bg-brand-green/10 text-brand-green px-2 py-0.5 rounded border border-brand-green/20 mt-0.5">{subject.code}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
            </div>

            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 2 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period III',
                    subjects: [
                      { name: 'Molecular Biology and Microbial Genetics', code: '24UMBC03' },
                      { name: 'Molecular Biology and Microbial Genetics Practicals', code: '24UMBCP03' },
                      { name: 'Clinical Laboratory Technology', code: '24UMBDE03' },
                      { name: 'Aquaculture', code: '24UMBSE03' },
                      { name: 'Organic Farming and Biofertiliser', code: '24UMBSE04' },
                    ]
                  },
                  {
                    title: 'Learning Period IV',
                    subjects: [
                      { name: 'Immunology and Immunotechnology', code: '24UMBC04' },
                      { name: 'Immunology and Immunotechnology Practicals', code: '24UMBCP04' },
                      { name: 'Food Processing Technology', code: '24UMBDE04' },
                      { name: 'Vaccine Technology', code: '24UMBSE05' },
                      { name: 'Apiculture', code: '24UMBSE06' },
                      { name: 'Environmental Studies', code: '24EVS01' },
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
                            <li key={i} className="flex items-start justify-between gap-3 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">•</span>
                                <span>{subject.name}</span>
                              </div>
                              <span className="flex-shrink-0 text-xs font-mono bg-brand-green/10 text-brand-green px-2 py-0.5 rounded border border-brand-green/20 mt-0.5">{subject.code}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
            </div>

            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 3 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period V',
                    subjects: [
                      { name: 'Bacteriology and Mycology', code: '24UMBC05' },
                      { name: 'Virology and Parasitology', code: '24UMBC06' },
                      { name: 'Core Practical-V', code: '24UMBCP05' },
                      { name: 'Project Viva Voce', code: '—' },
                      { name: 'Recombinant DNA Technology', code: '24UMBDE05' },
                      { name: 'Bio-Safety and Bioethics', code: '24UMBDE06' },
                      { name: 'Value Education', code: '24UMBVE01' },
                      { name: 'Internship / Industrial Visit / Field Visit', code: '—' },
                    ]
                  },
                  {
                    title: 'Learning Period VI',
                    subjects: [
                      { name: 'Environmental and Agriculture Microbiology', code: '24UMBC07' },
                      { name: 'Food, Dairy and Probiotic Microbiology', code: '24UMBC08' },
                      { name: 'Core Practical-VI', code: '24UMBCP06' },
                      { name: 'Pharmaceutical Microbiology', code: '24UMBDE07' },
                      { name: 'Entrepreneurship and Bio-Business', code: '24UMBDE08' },
                      { name: 'Microbial Quality Control and Testing', code: '24UMBPCS01' },
                      { name: 'Extension Activity', code: '—' },
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
                            <li key={i} className="flex items-start justify-between gap-3 text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">•</span>
                                <span>{subject.name}</span>
                              </div>
                              <span className="flex-shrink-0 text-xs font-mono bg-brand-green/10 text-brand-green px-2 py-0.5 rounded border border-brand-green/20 mt-0.5">{subject.code}</span>
                            </li>
                          ))}
                        </ul>
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
                  Core competencies you will develop through this programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Microbiological Expertise', description: 'Comprehensive understanding of bacteria, viruses, fungi, and parasites including their classification, morphology, physiology, genetics, and pathogenicity.' },
                { icon: <TestTube className="w-6 h-6 text-white" />, title: 'Laboratory Practice', description: 'Work with aseptic technique, microscopy, culture methods, staining and biochemical tests through the practical in each core subject.' },
                { icon: <Activity className="w-6 h-6 text-white" />, title: 'Immunological Knowledge', description: 'Understand immune system components, antigen-antibody reactions, immunological disorders, and vaccine development.' },
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Industrial Applications', description: 'Apply microbial processes in fermentation technology, antibiotic production, enzyme manufacturing, and quality control.' },
                { icon: <Dna className="w-6 h-6 text-white" />, title: 'Molecular Biology Skills', description: 'Understand DNA/RNA structure, gene expression, recombinant DNA technology, cloning techniques, and genetic engineering.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Project Work', description: 'Carry out a project with viva voce and an internship, industrial visit or field visit in the final year.' }
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
                  Diverse career pathways for B.Sc Microbiology graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Microscope className="w-6 h-6" />, title: 'Clinical Microbiologist', desc: 'Work in hospitals, diagnostic labs, and healthcare centers' },
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Research Associate', desc: 'Universities, CSIR labs, and research institutions' },
                { icon: <TestTube className="w-6 h-6" />, title: 'Quality Control Analyst', desc: 'Pharmaceutical and food industries' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Food Microbiologist', desc: 'Food processing, FSSAI, and quality testing labs' },
                { icon: <Pill className="w-6 h-6" />, title: 'Pharma Executive', desc: 'Drug companies, biotech firms, and CROs' },
                { icon: <Activity className="w-6 h-6" />, title: 'Lab Technician', desc: 'Pathology labs, blood banks, and clinics' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Scientist', desc: 'Pollution control boards and environmental agencies' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'M.Sc / Ph.D Scholar', desc: 'Higher studies at universities and research institutes' }
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
                    'Hospitals & Diagnostic Labs', 'Pharmaceutical Companies', 'Biotech Industries', 'Food Processing Units',
                    'CSIR Laboratories', 'Agriculture Sector', 'Environmental Agencies', 'Government Health Departments',
                    'Clinical Research Organizations', 'Vaccine Manufacturing'
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
                <SectionBadge text="Practical Work" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Practical{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Courses
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The core practical courses in the B.Sc Microbiology syllabus
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Fundamentals of Microbiology Practicals', description: 'Core Practical (24UMBCP01), Semester I.' },
                { title: 'Microbial Physiology and Metabolism Practicals', description: 'Core Practical (24UMBCP02), Semester II.' },
                { title: 'Molecular Biology and Microbial Genetics Practicals', description: 'Core Practical (24UMBCP03), Semester III.' },
                { title: 'Immunology and Immunotechnology Practicals', description: 'Core Practical (24UMBCP04), Semester IV.' },
                { title: 'Core Practical V', description: 'Semester V (24UMBCP05), with Bacteriology and Mycology and Virology and Parasitology.' },
                { title: 'Core Practical VI', description: 'Semester VI (24UMBCP06), with environmental, agricultural, food and dairy microbiology.' },
              ].map((facility, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group h-full">
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
                Why Choose Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Microbiology Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Facts a family can check before choosing: fee, eligibility, affiliation and what the syllabus covers.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Published Fee', description: '₹34,000 a year under the management quota for 2026-27; government quota seats follow Government norms.' },
                  { title: 'Any One Biology Subject', description: 'Botany, Zoology or Biology in +2 qualifies under the Periyar University regulation; Chemistry and a minimum percentage are not required.' },
                  { title: 'A Practical in Every Core Subject', description: 'From Fundamentals of Microbiology in Semester I to Core Practical VI in the final year.' },
                  { title: 'Project and Internship', description: 'A project with viva voce and an internship, industrial visit or field visit in the final year.' },
                  { title: 'Autonomous, Periyar University Degree', description: 'The college sets its own syllabus and examinations; the degree is awarded by Periyar University, Salem. NAAC accredited.' }
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
                <SectionBadge text="Senior Learners" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Senior{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Learners
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meet our experienced and dedicated department team
                </p>
              </div>
            </RevealSection>

            {/* Department faculty, confirmed by the college 2026-10-02 (GL6-384). No photos yet, so initials are shown. */}
            <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
              {[
                { name: 'Dr.D.Hemalatha', designation: 'Head of Department', qualification: 'P.hD., Microbial Genetics' },
                { name: 'S. Kayathri', designation: 'Assistant Professor', qualification: 'M.Sc,B.Ed,M.Phil.,Life Science' },
                { name: 'S. Kamali', designation: 'Assistant Professor', qualification: 'M.Sc., Biochemistry' }
              ].map((faculty, idx) => (
                <div key={idx} className="w-[260px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center bg-brand-green/10 text-brand-green text-4xl font-bold" aria-hidden="true">
                      {faculty.name.replace(/^(Mrs?|Ms|Dr)\.\s*/, '').replace(/^[A-Z]\.\s*/, '').charAt(0)}
                    </div>
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
                  Common queries about B.Sc Microbiology
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
                  Microbiology
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                B.Sc Microbiology admission for 2026-27 is open to +2 students with any one of Botany, Zoology or Biology.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-microbiology" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/pdf/brochure.pdf" download className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Brochure
                </a>
              </div>
              <p className="text-gray-600">
                <a href="/admissions/bsc-microbiology-self-finance" className="text-brand-green underline">B.Sc Microbiology admission 2026-27</a>
                {' · '}
                <a href="/fee-structure" className="text-brand-green underline">Fee structure</a>
                {' · '}
                <a href="/bsc-microbiology-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Microbiology colleges in Tamil Nadu</a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  );
}

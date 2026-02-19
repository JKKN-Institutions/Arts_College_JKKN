'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, TestTube, Dna, Activity, Pill } from 'lucide-react';
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

export default function BSCMicrobiologyPage() {
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
                  Microbiology
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Explore the Microscopic World & Life Sciences
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
              { icon: <Briefcase className="w-7 h-7" />, stat: '85%+', title: 'Placement Record', desc: 'Career opportunities assured' },
              { icon: <Award className="w-7 h-7" />, stat: '₹4L', title: 'Average Package', desc: 'Competitive starting salary' },
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
                The Bachelor of Science in Microbiology is a comprehensive three-year undergraduate programme offering in-depth study of microorganisms, immunology, molecular biology, industrial microbiology, and biotechnology. This UGC-recognized programme is designed to develop scientific expertise, laboratory skills, and professional competency for careers in healthcare, research, pharmaceuticals, and food industries.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy emphasizes practical learning and research orientation, enabling Learners to develop expertise in immunology, molecular biology, genetic engineering, industrial microbiology, and clinical diagnostics. The curriculum integrates theoretical foundations with extensive laboratory training, industry internships, and a final year research project that prepares graduates for immediate employment or advanced studies.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'State-of-the-Art Laboratories', 'Expert Learning Facilitators', 'Research & Internship Opportunities'].map((item, idx) => (
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
                  src="/images/programmes/bsc-microbiology/Bachelor of Science in Microbiology.png"
                  alt="Microbiology Laboratory"
                  className="w-full h-auto"
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
                  Requirements for joining the B.Sc Microbiology programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Biology (Botany & Zoology) and Chemistry required', 'Minimum 50% aggregate marks', '45% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Science stream with Biology', 'PCB (Physics, Chemistry, Biology)', 'PCM with Biology as additional', 'Vocational courses with Biology']
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
                  Comprehensive syllabus designed to develop expertise in microbiological sciences
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
                      { name: 'Fundamental of Microbiology and Microbial Diversity', code: '24UMBC01' },
                      { name: 'Fundamental of Microbiology Practicals', code: '24UMBCP01' },
                      { name: 'Basic and Clinical Biochemistry', code: '24UMBDE01' },
                      { name: 'Foundation Course - Introduction to Microbial World', code: '24UMBFC01' },
                    ]
                  },
                  {
                    title: 'Semester II',
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
            )}

            {activeYear === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Semester III',
                    subjects: [
                      { name: 'Molecular Biology and Microbial Genetics', code: '24UMBC03' },
                      { name: 'Molecular Biology and Microbial Genetics Practicals', code: '24UMBCP03' },
                      { name: 'Clinical Laboratory Technology', code: '24UMBDE03' },
                      { name: 'Aquaculture', code: '24UMBSE03' },
                      { name: 'Organic Farming and Biofertiliser', code: '24UMBSE04' },
                    ]
                  },
                  {
                    title: 'Semester IV',
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
            )}

            {activeYear === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Semester V',
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
                    title: 'Semester VI',
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
                  Core competencies you will develop through this programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Microbiological Expertise', description: 'Comprehensive understanding of bacteria, viruses, fungi, and parasites including their classification, morphology, physiology, genetics, and pathogenicity.' },
                { icon: <TestTube className="w-6 h-6 text-white" />, title: 'Laboratory Proficiency', description: 'Master aseptic techniques, microscopy, culture methods, staining, biochemical tests, and modern diagnostic techniques including ELISA and PCR.' },
                { icon: <Activity className="w-6 h-6 text-white" />, title: 'Immunological Knowledge', description: 'Understand immune system components, antigen-antibody reactions, immunological disorders, and vaccine development.' },
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Industrial Applications', description: 'Apply microbial processes in fermentation technology, antibiotic production, enzyme manufacturing, and quality control.' },
                { icon: <Dna className="w-6 h-6 text-white" />, title: 'Molecular Biology Skills', description: 'Understand DNA/RNA structure, gene expression, recombinant DNA technology, cloning techniques, and genetic engineering.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Research & Communication', description: 'Design and execute research experiments, analyze data statistically, and communicate findings effectively.' }
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
                <SectionBadge text="Infrastructure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Laboratory{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure supporting hands-on microbiological training
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'General Microbiology Laboratory', description: 'Equipped with autoclaves, laminar flow hoods, BOD incubators, colony counters, and precision balances for basic microbiological techniques.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=General+Microbiology+Lab' },
                { title: 'Molecular Biology Laboratory', description: 'PCR thermal cyclers, gel electrophoresis systems, UV transilluminators, and DNA extraction equipment for molecular diagnostic studies.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Molecular+Biology+Lab' },
                { title: 'Immunology Laboratory', description: 'ELISA readers, microplate washers, serological testing equipment, and blood banking supplies for immunological assays and procedures.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Immunology+Lab' },
                { title: 'Fermentation Technology Lab', description: 'Laboratory-scale bioreactors, fermenters, downstream processing equipment, and media preparation facilities for industrial training.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Fermentation+Lab' },
                { title: 'Advanced Microscopy Center', description: 'Compound microscopes, phase contrast microscopes, dark field microscopy, and digital imaging systems for microbial observation.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Microscopy+Center' },
                { title: 'Research Library', description: 'Comprehensive collection of microbiology journals, reference books, PubMed access, and e-resources supporting academic research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Library' }
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
                Why Choose Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Microbiology Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in healthcare, research, and biotechnology industries.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'NAAC Accredited Institution', description: 'Quality assured education with recognized academic standards and continuous improvement.' },
                  { title: 'Modern Laboratory Infrastructure', description: 'Well-equipped labs with latest instruments for hands-on practical training in all domains.' },
                  { title: 'Experienced Learning Facilitators', description: 'Qualified and research-active Learning Facilitators with industry and academic experience.' },
                  { title: 'Industry Internships & Placements', description: 'Mandatory industrial training and strong placement support with top companies.' },
                  { title: 'Research-Oriented Education', description: 'Emphasis on independent research with guided projects and publication opportunities.' }
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
                { name: 'Dr. Lakshmi Narayan', designation: 'Head of Department', qualification: 'Ph.D. in Microbiology' },
                { name: 'Dr. Ramesh Kumar', designation: 'Associate Professor', qualification: 'Ph.D. in Medical Microbiology' },
                { name: 'Ms. Priya Venkatesh', designation: 'Assistant Professor', qualification: 'M.Phil., NET Qualified' },
                { name: 'Mr. Arun Subramanian', designation: 'Assistant Professor', qualification: 'M.Sc., GATE Qualified' }
              ].map((faculty, idx) => (
                <div key={idx} className="w-[260px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/faculties/placeholder-avatar.jpg"
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
                  Find answers to common queries about the B.Sc Microbiology programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the B.Sc Microbiology programme?', answer: 'The B.Sc Microbiology programme is a 3-year full-time undergraduate degree comprising six semesters with comprehensive coursework covering general microbiology, immunology, molecular biology, industrial microbiology, and biotechnology applications, along with extensive laboratory practical training and a final year project.' },
                { question: 'What are the career opportunities after B.Sc Microbiology?', answer: 'B.Sc Microbiology graduates can pursue careers as Microbiologists, Quality Control Analysts, Clinical Laboratory Technicians, Research Associates, Food Microbiologists, Pharmaceutical Scientists, Environmental Microbiologists, and Biotechnology Executives in hospitals, diagnostic labs, pharmaceutical companies, food industries, research institutions, and government agencies.' },
                { question: 'What is the eligibility criteria for B.Sc Microbiology admission?', answer: 'Candidates must have completed Higher Secondary (10+2) or equivalent examination with Biology (Botany and Zoology) and Chemistry as core subjects from a recognized board with minimum 50% aggregate marks (45% for reserved categories). Students with Physics, Chemistry, Mathematics (PCM) background with Biology as an additional subject may also be eligible.' },
                { question: 'What competitive exams can I appear for after B.Sc Microbiology?', answer: 'After B.Sc Microbiology, you can appear for various competitive examinations including CSIR-NET (Life Sciences) for JRF and lecturership, GATE (Life Sciences) for M.Tech and PSU jobs, ICMR-JRF for research fellowships, DBT-JRF for biotechnology research, State SET for lectureship eligibility, and UPSC for civil services.' },
                { question: 'What is the difference between B.Sc Microbiology and B.Sc Biotechnology?', answer: 'B.Sc Microbiology focuses specifically on the study of microorganisms including bacteria, viruses, fungi, and their applications in medicine, industry, and environment. B.Sc Biotechnology is broader, covering genetic engineering, tissue culture, bioinformatics, and industrial applications across plants, animals, and microbes.' },
                { question: 'Are internship and placement opportunities available?', answer: 'Yes, the programme includes mandatory internship training with pharmaceutical companies, diagnostic laboratories, research institutions, and food processing industries. Our placement cell facilitates campus recruitment drives with top employers including Biocon, Dr. Reddy\'s Laboratories, Cipla, Apollo Hospitals, and CSIR laboratories.' },
                { question: 'What is the scope of B.Sc Microbiology in India?', answer: 'B.Sc Microbiology has excellent scope in India with growing demand in pharmaceutical industries, healthcare sector, food processing, biotechnology companies, and research institutions. The expansion of diagnostic labs, vaccine manufacturing units, and increasing focus on food safety has created numerous job opportunities.' },
                { question: 'What is the average salary for B.Sc Microbiology freshers?', answer: 'The starting salary for B.Sc Microbiology freshers typically ranges from ₹2.5 to ₹4.5 lakhs per annum depending on the sector and company. Quality Control Analysts in pharma companies may start at ₹3-4 lakhs, while clinical lab positions offer ₹2.5-3.5 lakhs. With experience and additional certifications, salaries can increase significantly.' }
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
                  Microbiology
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Sc Microbiology programme and build a rewarding career in healthcare, pharmaceuticals, research, and biotechnology industries.
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
                  Discover other science programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Sc Chemistry', description: 'Advanced studies in organic, inorganic, analytical, and physical chemistry', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Chemistry' },
                { title: 'B.Sc Zoology', description: 'Comprehensive study of animal biology, physiology, and ecology', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=BSc+Zoology' },
                { title: 'B.Sc Physics', description: 'Exploration of classical and modern physics with practical applications', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Physics' }
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

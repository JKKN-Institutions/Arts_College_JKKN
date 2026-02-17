'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, CheckCircle2, Clock, FileText, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, Fish, Database, Leaf, MapPin, Building2, Globe, Brain, TrendingUp, Atom } from 'lucide-react';
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

export default function BScZoologyPage() {
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [activeYear, setActiveYear] = useState(1);

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green drop-shadow-lg">
                Bachelor of Science in{' '}
                <span className="text-brand-green">
                  Zoology
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-brand-green drop-shadow-md">
                Explore the Fascinating World of Animal Sciences
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white shadow-lg text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span className="font-semibold">3 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white shadow-lg text-gray-900">
                  <FileText className="w-5 h-5 text-brand-green" />
                  <span className="font-semibold">6 Semesters</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white shadow-lg text-gray-900">
                  <Users className="w-5 h-5 text-brand-green" />
                  <span className="font-semibold">Full-Time Programme</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 text-white px-7 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#curriculum" className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 border-2 border-white px-7 py-3 rounded-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
              { icon: <Microscope className="w-7 h-7" />, stat: '6+', title: 'Specialized Labs', desc: 'Advanced research facilities' },
              { icon: <TrendingUp className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Career opportunities assured' },
              { icon: <MapPin className="w-7 h-7" />, stat: 'Annual', title: 'Field Study Trips', desc: 'Wildlife sanctuary visits' },
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
                The Bachelor of Science in Zoology programme is a comprehensive 3-year undergraduate degree designed to provide in-depth knowledge of animal biology, diversity, evolution, ecology, and conservation. The curriculum blends theoretical learning with extensive practical laboratory sessions and field studies.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Students explore fascinating topics including animal physiology, genetics, biotechnology, entomology, wildlife conservation, and environmental biology. Our department is equipped with state-of-the-art laboratories, a zoological museum, aquarium facilities, and molecular biology research units. Graduates are well-prepared for careers in research, healthcare, biotechnology, environmental consulting, and wildlife conservation.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Advanced Laboratory Facilities', 'Comprehensive Curriculum', 'Expert Faculty Members', 'Field Study Opportunities'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=Zoology+Lab"
                  alt="Zoology Laboratory"
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
                  Requirements for joining the B.Sc Zoology programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) with Biology', 'Minimum 50% aggregate marks', '45% for reserved categories', 'Merit-based admission process']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Subject Requirements',
                  items: ['Biology as mandatory subject', 'Physics and Chemistry preferred', 'Biology with Maths/Computer Science', 'State/CBSE/ICSE board recognized']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy', 'Bank Pass Book Copy', 'Income Certificate', 'First Graduation Certificate']
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
                  Comprehensive syllabus covering fundamental to advanced topics in zoology
                </p>
              </div>
            </RevealSection>

            {/* Year Tabs */}
            <RevealSection delay={100}>
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-white/60 backdrop-blur-sm rounded-xl p-1.5 border border-white/80 shadow-lg">
                  {[1, 2, 3].map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeYear === year
                          ? 'bg-gradient-to-r from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/30'
                          : 'text-gray-600 hover:text-brand-green hover:bg-white/50'
                        }`}
                    >
                      Year {year}
                    </button>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Year 1 Content */}
            {activeYear === 1 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    semester: 'I',
                    courses: [
                      { code: 'ZOO101', name: 'Non-Chordates I (Theory)' },
                      { code: 'ZOO101P', name: 'Non-Chordates I (Practical)' },
                      { code: 'ALL101', name: 'Allied Paper I (Theory)' },
                      { code: 'ALL101P', name: 'Allied Paper I (Practical)' },
                      { code: 'LANG101', name: 'Language Paper I' },
                      { code: 'EVS101', name: 'Environmental Studies' }
                    ]
                  },
                  {
                    semester: 'II',
                    courses: [
                      { code: 'ZOO102', name: 'Non-Chordates II & Chordata (Theory)' },
                      { code: 'ZOO102P', name: 'Non-Chordates II & Chordata (Practical)' },
                      { code: 'ALL102', name: 'Allied Paper II (Theory)' },
                      { code: 'ALL102P', name: 'Allied Paper II (Practical)' },
                      { code: 'LANG102', name: 'Language Paper II' },
                      { code: 'VE102', name: 'Value Education' }
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">Semester {sem.semester}</h4>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {sem.courses.map((course, i) => (
                            <div key={i} className="border-l-2 border-emerald-500 pl-3 py-1">
                              <div className="text-xs font-semibold text-emerald-600 mb-0.5">{course.code}</div>
                              <div className="text-sm text-gray-700">{course.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            )}

            {/* Year 2 Content */}
            {activeYear === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    semester: 'III',
                    courses: [
                      { code: 'ZOO201', name: 'Animal Physiology (Theory)' },
                      { code: 'ZOO201P', name: 'Animal Physiology (Practical)' },
                      { code: 'ALL201', name: 'Allied Paper III (Theory)' },
                      { code: 'ALL201P', name: 'Allied Paper III (Practical)' },
                      { code: 'ELEC201', name: 'Core Elective' },
                      { code: 'SBC201', name: 'Skill-Based Course' }
                    ]
                  },
                  {
                    semester: 'IV',
                    courses: [
                      { code: 'ZOO202', name: 'Genetics & Evolution (Theory)' },
                      { code: 'ZOO202P', name: 'Genetics & Evolution (Practical)' },
                      { code: 'ZOO203', name: 'Cell Biology & Developmental Biology (Theory)' },
                      { code: 'ZOO203P', name: 'Cell Biology & Developmental Biology (Practical)' },
                      { code: 'ELEC202', name: 'Core Elective' },
                      { code: 'EXT202', name: 'Extension Activities' }
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">Semester {sem.semester}</h4>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {sem.courses.map((course, i) => (
                            <div key={i} className="border-l-2 border-emerald-500 pl-3 py-1">
                              <div className="text-xs font-semibold text-emerald-600 mb-0.5">{course.code}</div>
                              <div className="text-sm text-gray-700">{course.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            )}

            {/* Year 3 Content */}
            {activeYear === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    semester: 'V',
                    courses: [
                      { code: 'ZOO301', name: 'Ecology & Ethology (Theory)' },
                      { code: 'ZOO301P', name: 'Ecology & Ethology (Practical)' },
                      { code: 'ZOO302', name: 'Biotechnology & Microbiology (Theory)' },
                      { code: 'ZOO302P', name: 'Biotechnology & Microbiology (Practical)' },
                      { code: 'ELEC301', name: 'Elective Paper' },
                      { code: 'PROJ301', name: 'Project Work' }
                    ]
                  },
                  {
                    semester: 'VI',
                    courses: [
                      { code: 'ZOO303', name: 'Applied Zoology & Immunology (Theory)' },
                      { code: 'ZOO303P', name: 'Applied Zoology & Immunology (Practical)' },
                      { code: 'ZOO304', name: 'Molecular Biology & Bioinformatics (Theory)' },
                      { code: 'ZOO304P', name: 'Molecular Biology & Bioinformatics (Practical)' },
                      { code: 'ELEC302', name: 'Elective Paper' },
                      { code: 'PROJ302', name: 'Project & Viva-Voce' }
                    ]
                  }
                ].map((sem, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">Semester {sem.semester}</h4>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {sem.courses.map((course, i) => (
                            <div key={i} className="border-l-2 border-emerald-500 pl-3 py-1">
                              <div className="text-xs font-semibold text-emerald-600 mb-0.5">{course.code}</div>
                              <div className="text-sm text-gray-700">{course.name}</div>
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
                  Competencies and skills developed through the programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'Scientific Methodology', description: 'Master scientific research methods, experimental design, data collection, statistical analysis, and critical evaluation of zoological literature.' },
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Taxonomic Expertise', description: 'Identify, classify, and understand the diversity of animal species from invertebrates to vertebrates using modern taxonomic approaches.' },
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Laboratory Proficiency', description: 'Gain hands-on experience with microscopy, dissection, molecular techniques, histological preparations, and advanced analytical instruments.' },
                { icon: <Leaf className="w-6 h-6 text-white" />, title: 'Ecological Understanding', description: 'Comprehend ecosystem dynamics, biodiversity conservation, wildlife management, and environmental impact assessment methodologies.' },
                { icon: <Database className="w-6 h-6 text-white" />, title: 'Biotechnological Skills', description: 'Apply biotechnology techniques including genetic engineering, tissue culture, PCR, gel electrophoresis, and bioinformatics tools.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Professional Communication', description: 'Develop scientific writing, presentation skills, research documentation, and ability to communicate complex biological concepts effectively.' }
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
                  Diverse career paths for zoology graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Microscope className="w-6 h-6" />, title: 'Research Scientist', desc: 'Universities, CSIR labs, ICMR, pharmaceutical R&D' },
                { icon: <Leaf className="w-6 h-6" />, title: 'Wildlife Biologist', desc: 'Forest departments, wildlife sanctuaries, conservation NGOs' },
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Medical Lab Technician', desc: 'Hospitals, diagnostic centers, pathology labs' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Educator / Lecturer', desc: 'Schools, colleges, coaching institutes' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Pharmaceutical Researcher', desc: 'Drug development, clinical trials, quality control' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Consultant', desc: 'Impact assessment, conservation projects' },
                { icon: <Award className="w-6 h-6" />, title: 'Government Services', desc: 'Forest Service, UPSC, state PSC examinations' },
                { icon: <Database className="w-6 h-6" />, title: 'Biotechnology Specialist', desc: 'Biotech firms, genetic research, bioinformatics' }
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
                    'Pharmaceutical Industry', 'Biotechnology Firms', 'Research Institutes', 'Wildlife Conservation',
                    'Healthcare Sector', 'Academic Institutions', 'Government Agencies', 'Environmental NGOs',
                    'Aquaculture Industry', 'Forensic Laboratories', 'Veterinary Services', 'Biological Surveys'
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
                  State-of-the-art infrastructure for zoological learning
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Zoology Laboratory', description: 'Advanced compound microscopes, stereo microscopes for dissection, specimen preservation units, and digital imaging systems for detailed study.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Zoology+Lab' },
                { title: 'Zoological Museum', description: 'Preserved animal specimens, taxidermy collections, skeletal displays, and educational models for comprehensive taxonomic understanding.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Museum' },
                { title: 'Molecular Biology Lab', description: 'PCR & electrophoresis units, centrifuges, incubators, gel documentation systems, and genetic analysis equipment for advanced research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Molecular+Lab' },
                { title: 'Aquarium & Fish Culture', description: 'Freshwater aquarium setups, marine ecosystem models, fish breeding facilities, and water quality monitoring systems.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Aquarium' },
                { title: 'Bioinformatics Lab', description: 'High-speed computers with sequence analysis software, phylogenetic tools, protein modeling applications, and database access.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Bioinformatics' },
                { title: 'Animal House Facility', description: 'Small animal breeding facility with ethical research protocols following CPCSEA guidelines under veterinary supervision.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Animal+House' }
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
                  Zoology Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in academics and career.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured education meeting national standards with excellent academic reputation.' },
                  { title: 'Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, active research publications, and extensive field experience.' },
                  { title: 'Strong Placement Support', description: 'Dedicated placement cell with tie-ups with leading research institutes, pharmaceutical companies, and NGOs.' },
                  { title: 'Field Study Excursions', description: 'Annual trips to wildlife sanctuaries, marine biology stations, biodiversity parks, and research centers.' },
                  { title: 'Modern Infrastructure', description: 'Well-equipped laboratories, zoological museum, aquarium facilities, and molecular biology research units.' }
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
                { name: 'Dr. S. Umavathi', designation: 'Associate Professor & Head', qualification: 'M.Sc., Ph.D., PGDCA.', image: '/images/faculties/aided/zoology/Dr.-S.-Umavathi-240x300.png' },
                { name: 'Dr. Y. Thangam', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., M.Ed., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-Y.-Thangam-240x300.png' },
                { name: 'Dr. R. Sowdeswari', designation: 'Assistant Professor', qualification: 'M.Sc., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-R.-Sowdeswari-240x300.png' },
                { name: 'Dr. K. M. Syed Ali Fathima', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D., D.C.A.', image: '/images/faculties/aided/zoology/Dr.-K.-M.-Syed-Ali-Fathima-240x300.png' },
                { name: 'Dr. P. Madhiyazhagan', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-P.-Madhiyazhagan-240x300.png' },
                { name: 'Dr. S. Umamaheswari', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-S.-Umamaheswari-240x300.png' },
                { name: 'Dr. K. Shenkani', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D., PGDBI., (SET)', image: '/images/faculties/aided/zoology/Dr.-K.-Shenkani-240x300.png' },
                { name: 'Dr. S. Kalaimani', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., M.Ed., Ph.D., DCA., (SET)', image: '/images/faculties/aided/zoology/Dr.-S.-Kalaimani-240x300.png' },
                { name: 'Mrs. S. Kowsalya', designation: 'Assistant Professor', qualification: 'M.Sc., M.Ed., (SET)', image: '/images/faculties/aided/zoology/Mrs.-S.-Kowsalya-240x300.png' }
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
                  Find answers to common queries about the B.Sc Zoology programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the B.Sc Zoology programme?', answer: 'The B.Sc Zoology programme is a 3-year full-time undergraduate degree comprising six semesters with practical laboratory sessions.' },
                { question: 'What are the career opportunities after B.Sc Zoology?', answer: 'Graduates can pursue careers in wildlife conservation, pharmaceutical research, biotechnology, environmental consulting, teaching, forensic science, healthcare, and government services including Forest Service and UPSC examinations.' },
                { question: 'What is the eligibility criteria for B.Sc Zoology admission?', answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board with Biology as a mandatory subject. Minimum aggregate marks requirement is typically 50% for general category.' }
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
                  Zoological Sciences
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our prestigious B.Sc Zoology programme and unlock endless career opportunities
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
    </div>
  );
}

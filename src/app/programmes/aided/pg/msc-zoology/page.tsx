'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, Dna, Bug, Leaf } from 'lucide-react';
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

export default function MScZoologyPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12" style={{ backgroundColor: '#eaf1e2' }}>
        {/* Background gradient instead of image */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-emerald-600 to-emerald-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <GraduationCap className="w-4 h-4 text-brand-green" />
                UGC Recognized Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Master of Science in{' '}
                <span className="text-brand-green">
                  Zoology
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-white/95">
                Advanced Study in Animal Sciences, Molecular Biology & Wildlife Management
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
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-brand-green px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#curriculum" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white text-white hover:text-brand-green border-2 border-white/80 hover:border-white px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
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
              { icon: <Users className="w-7 h-7" />, stat: '10:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized mentorship' },
              { icon: <Microscope className="w-7 h-7" />, stat: '100%', title: 'Research Oriented', desc: 'Dissertation project' },
              { icon: <Award className="w-7 h-7" />, stat: '₹6.5L+', title: 'Average Package', desc: 'Competitive starting salary' },
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
                The Master of Science in Zoology is a rigorous two-year postgraduate programme designed to provide advanced knowledge and specialized expertise in animal sciences, molecular biology, wildlife management, and research methodology. This UGC-recognized programme prepares Learners for leadership roles in academic institutions, research organizations, and industries through intensive coursework and independent research.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy emphasizes research-driven learning, enabling Learners to develop expertise in specialized areas such as molecular genetics, animal biotechnology, conservation biology, and advanced animal physiology. The curriculum integrates theoretical foundations with hands-on research experience, culminating in a comprehensive dissertation project that contributes to scientific knowledge.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Research-Intensive Curriculum', 'Specialized Electives', 'Dissertation Project', 'Industry Collaborations'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=MSc+Zoology+Research+Lab"
                  alt="MSc Zoology Research Lab"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1952
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
                  Requirements for joining the M.Sc Zoology postgraduate programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['B.Sc Zoology from recognized university', 'Minimum 50% aggregate marks', '45% for reserved categories', 'Valid entrance examination score (if applicable)']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Eligible Degrees',
                  items: ['B.Sc Zoology (Primary eligibility)']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['B.Sc Degree Certificate & Mark Sheets', '10th & 12th Certificates', 'Transfer & Migration Certificates', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy']
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
                  Advanced syllabus designed to develop specialized expertise in zoological sciences
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
                    courses: [
                      { code: '24PZOC01', name: 'Core-I, Structure and Function of Invertebrates' },
                      { code: '24PZOC02', name: 'Core-II, Comparative Anatomy of Vertebrates' },
                      { code: '24PZOCP01', name: 'Core Lab I, Invertebrates and Vertebrates' },
                      { code: '24PZOE01 / 24PZOE02', name: 'Elective-I, Molecules their Interaction to Biology / Microbiology' },
                      { code: '24PZOE03 / 24PZOE04', name: 'Elective-II, Biostatistics / Bioinstrumentation' },
                    ]
                  },
                  {
                    title: 'Semester II',
                    courses: [
                      { code: '24PZOC03', name: 'Core-III, Cell and Molecular Biology' },
                      { code: '24PZOC04', name: 'Core-IV, Developmental Biology' },
                      { code: '24PZOCP02', name: 'Core Lab-II, Cell Biology and Developmental Biology' },
                      { code: '24PZOE05 / 24PZOE06', name: 'Elective-III, Economic Entomology / Medical Parasitology' },
                      { code: '24PZOE07 / 24PZOE08', name: 'Elective-IV, Research Methodology / Bioethics & Biosafety' },
                      { code: '24PZOED1 / 24PZOED2', name: 'EDC-I, Poultry Farming / Apiculture' },
                      { code: '24PHR001', name: 'Fundamental Study of Human Rights' },
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
                            <tr className="border-b border-brand-green/15">
                              <th className="text-left py-2 px-3 font-semibold text-brand-green w-[38%]">Course Code</th>
                              <th className="text-left py-2 px-3 font-semibold text-brand-green">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.courses.map((course, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-brand-green/5' : ''}>
                                <td className="py-2.5 px-3 font-mono text-xs text-emerald-700 font-semibold align-top">{course.code}</td>
                                <td className="py-2.5 px-3 text-gray-700 align-top">{course.name}</td>
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
                    courses: [
                      { code: '24PZOC05', name: 'Core-V, Genetics' },
                      { code: '24PZOC06', name: 'Core-VI, Evolution' },
                      { code: '24PZOC07', name: 'Core-VII, Animal Physiology' },
                      { code: '24PZOCP03', name: 'Core Lab Course-III, Genetics, Evolution and Animal Physiology' },
                      { code: '24PZOE09', name: 'Elective-V, Medical Laboratory Techniques' },
                      { code: '24PZOED3 / 24PZOED4', name: 'EDC-II, Dairy Farming / Vermiculture' },
                      { code: '24PZOIN01', name: 'Internship / Field Survey / Industrial Activity' },
                    ]
                  },
                  {
                    title: 'Semester IV',
                    courses: [
                      { code: '24PZOC08', name: 'Core-VIII, Immunology' },
                      { code: '24PZOC09', name: 'Core-IX, Ecology' },
                      { code: '24PZOCP04', name: 'Core Lab Course-IV, Immunology & Ecology' },
                      { code: '24PZOPR1', name: 'Project Viva Voce' },
                      { code: '24PZOE10', name: 'Elective-VI, Aquaculture' },
                      { code: '24PZOSEC1', name: 'Skill Enhancement Course, Animal Behaviour' },
                      { code: '24PEXA01', name: 'Extension Activity' },
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
                            <tr className="border-b border-brand-green/15">
                              <th className="text-left py-2 px-3 font-semibold text-brand-green w-[38%]">Course Code</th>
                              <th className="text-left py-2 px-3 font-semibold text-brand-green">Course Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.courses.map((course, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-brand-green/5' : ''}>
                                <td className="py-2.5 px-3 font-mono text-xs text-emerald-700 font-semibold align-top">{course.code}</td>
                                <td className="py-2.5 px-3 text-gray-700 align-top">{course.name}</td>
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
                  Advanced competencies you will develop through this postgraduate programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Advanced Research Skills', description: 'Master sophisticated research methodologies, experimental design, and data analysis for zoological investigations.' },
                { icon: <Dna className="w-6 h-6 text-white" />, title: 'Molecular Expertise', description: 'Develop proficiency in molecular biology techniques, genetic analysis, and biotechnology applications.' },
                { icon: <Leaf className="w-6 h-6 text-white" />, title: 'Conservation Biology', description: 'Understand wildlife management, conservation strategies, and biodiversity assessment methodologies.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Critical Analysis', description: 'Analyze complex biological data, evaluate scientific literature, and synthesize research findings.' },
                { icon: <FileText className="w-6 h-6 text-white" />, title: 'Scientific Communication', description: 'Present research findings through publications, presentations, and scientific discourse.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Global Perspective', description: 'Understand global biodiversity challenges and international conservation frameworks.' }
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
                  Advanced career pathways for M.Sc Zoology postgraduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Microscope className="w-6 h-6" />, title: 'Senior Research Scientist', desc: 'Lead research projects in universities, CSIR labs, and R&D institutions' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'University Lecturer', desc: 'Teaching positions in colleges, universities, and higher education' },
                { icon: <Leaf className="w-6 h-6" />, title: 'Wildlife Officer', desc: 'Conservation departments, national parks, and wildlife sanctuaries' },
                { icon: <Dna className="w-6 h-6" />, title: 'Biotechnology Scientist', desc: 'Pharmaceutical R&D, biotech companies, and diagnostic laboratories' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Consultant', desc: 'EIA studies, environmental agencies, and consulting firms' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Forest Service Officer', desc: 'IFS through UPSC, state forest departments, and conservation bodies' },
                { icon: <FileText className="w-6 h-6" />, title: 'Science Writer / Editor', desc: 'Scientific publications, journals, and science communication' },
                { icon: <Award className="w-6 h-6" />, title: 'Ph.D Research Scholar', desc: 'Doctoral programs in national and international universities' }
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
                    'Research Institutes (CSIR, ICMR, DBT)', 'Universities & Colleges', 'Wildlife Conservation',
                    'Pharmaceutical Industry', 'Biotechnology Companies', 'Environmental Agencies',
                    'Diagnostic Laboratories', 'Government Services', 'NGOs & International Organizations',
                    'Science Museums & Zoos'
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
      {/* <section className="py-16 bg-white" id="facilities">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Infrastructure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Research{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure supporting advanced research
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Research Lab', description: 'Extensive collection of journals, books, and digital resources with access to academic databases for literature review and research.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Research+Library' },
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
      </section> */}

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
                  Zoology Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures research excellence, specialized training, and excellent career prospects in zoological sciences.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured postgraduate education meeting national standards with excellent academic reputation.' },
                  { title: 'Research-Focused Curriculum', description: 'Emphasis on hands-on research experience, dissertation projects, and scientific publication opportunities.' },
                  { title: 'Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, research publications, and specialized expertise in zoology.' },
                  { title: 'Advanced Research Facilities', description: 'State-of-the-art laboratories, modern instrumentation, and access to global research databases.' },
                  { title: 'Excellent Career Outcomes', description: 'Strong placement support with connections to academic institutions, research organizations, and industries.' }
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
                { name: 'Dr. S. Umavathi', designation: 'Assistant Professor & Head', qualification: 'M.Sc., Ph.D., PGDCA.', image: '/images/faculties/aided/zoology/Dr.-S.-Umavathi-240x300.png' },
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
                  Find answers to common queries about the M.Sc Zoology programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the M.Sc Zoology programme?', answer: 'The M.Sc Zoology programme is a 2-year full-time postgraduate degree comprising four semesters with advanced coursework, specialized electives, and a mandatory dissertation project.' },
                { question: 'What are the career opportunities after M.Sc Zoology?', answer: 'M.Sc Zoology graduates can pursue careers as Research Scientists, Wildlife Biologists, University Lecturers, Conservation Officers, Biotechnology Researchers, Environmental Consultants, and positions in pharmaceutical R&D. The degree also qualifies candidates for Ph.D programs and competitive examinations like CSIR-NET, GATE, and UPSC.' },
                { question: 'What is the eligibility criteria for M.Sc Zoology admission?', answer: 'Candidates must have completed B.Sc in Zoology or equivalent degree in Life Sciences from a recognized university with minimum 50% aggregate marks (45% for reserved categories). ' },
                { question: 'Is dissertation project mandatory in M.Sc Zoology?', answer: 'Yes, the dissertation project is a mandatory component of the M.Sc Zoology programme conducted in the final semester. Learners undertake independent research under faculty supervision, culminating in a thesis submission and viva-voce examination.' },
                // { question: 'What research facilities are available for M.Sc learners?', answer: 'The department provides advanced research facilities including molecular biology lab with PCR and electrophoresis equipment, cell culture facility, bioinformatics center, animal house facility, and access to scientific journals and databases for research work.' },
                { question: 'Can I pursue Ph.D after M.Sc Zoology?', answer: 'Yes, M.Sc Zoology graduates are eligible to pursue Ph.D programs in Zoology, Wildlife Biology, Biotechnology, Ecology, and related fields in Indian and international universities. Many learners also qualify for research fellowships through CSIR-NET, GATE, and other examinations.' },
                { question: 'Are there opportunities for research publications?', answer: 'Yes, learners are encouraged to publish their research work in peer-reviewed journals. The department supports learners in preparing manuscripts, participating in conferences, and presenting research papers at national and international symposia.' },
                { question: 'What is the placement scenario for M.Sc Zoology graduates?', answer: 'M.Sc Zoology graduates have excellent placement opportunities in research institutions, pharmaceutical companies, biotechnology firms, environmental agencies, and academic institutions. The placement cell provides training, internship opportunities, and campus recruitment drives to facilitate career placement.' }
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
                Advance Your Career in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Zoological Sciences
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our M.Sc Zoology programme and gain specialized expertise for leadership roles in research, academia, and industry.
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
                  Discover other postgraduate science programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Sc Zoology', description: 'Undergraduate programme in Zoology with foundation in animal sciences', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Zoology' },
                { title: 'M.Sc Chemistry', description: 'Advanced postgraduate studies in Chemical Sciences and Research', duration: '2 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=MSc+Chemistry' },
                { title: 'M.Sc Mathematics', description: 'Postgraduate programme in Pure and Applied Mathematics', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MSc+Mathematics' }
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

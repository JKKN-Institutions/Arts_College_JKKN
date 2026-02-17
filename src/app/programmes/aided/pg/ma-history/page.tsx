'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, BookMarked, Scroll, Landmark, Archive, Map, History } from 'lucide-react';
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

export default function MAHistoryPage() {
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
                Master of Arts in{' '}
                <span className="text-brand-green">
                  History
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Explore the Past, Shape the Future Through Historical Research
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
                  <Lightbulb className="w-5 h-5 text-brand-green" />
                  <span>Research-Oriented</span>
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
              { icon: <Users className="w-7 h-7" />, stat: '12:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized mentorship' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement & Higher Studies', desc: 'Career success rate' },
              { icon: <Award className="w-7 h-7" />, stat: 'PhD', title: 'Research Pathway', desc: 'Direct doctoral eligibility' },
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
                The Master of Arts in History is an advanced two-year postgraduate programme designed to provide comprehensive knowledge of Indian and World History, historiographical methods, and research methodologies. This UGC-recognized programme prepares scholars for careers in academia, research, civil services, heritage management, and museum studies through rigorous academic training and practical fieldwork.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy emphasizes critical analysis of historical events, interpretation of primary sources, and development of independent research capabilities. Learners engage with diverse historical periods from ancient civilizations to contemporary global history, developing expertise in archival research, archaeological studies, and historical documentation.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['UGC Recognized Curriculum', 'Research-Oriented Learning', 'Field Visit Opportunities', 'Heritage & Museum Studies'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=MA+History+Programme"
                  alt="MA History Programme Overview"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Postgraduate Excellence
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
                  Requirements to pursue our MA History programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Educational Qualification',
                  items: ['Bachelor\'s degree in History', 'Or any related discipline', 'Minimum 50% aggregate marks', '45% for reserved category candidates', 'Recognized university degree']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Academic Requirements',
                  items: ['Valid entrance exam scores (where applicable)', 'Merit-based selection process', 'Personal interview for shortlisted candidates']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th and 12th Marksheet', 'Graduation mark sheets & degree certificate', 'Transfer & migration certificates', 'Conduct certificate from institution', 'Valid photo ID & passport size photos', 'Community Certificate']
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
                  Comprehensive syllabus designed to build expertise in historical research and analysis
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
                      '24PHIC01: Core –1: History of Ancient and Early Medieval India - Prehistory to 1206 Common Era (CE)',
                      '24PHIC02: Core – 2: Socio Cultural History of Tamil Nadu up to 1565 CE',
                      '24PHIC03: Core – 3: History of World Civilizations (Excluding India)',
                      '24PHIE01/02: Elective-I: Freedom Struggle in Tamil Nadu / Indian Art and Architecture',
                      '24PHIE03/04: Elective-II: Administrative History of Tamil Nadu / Cultural Heritage of India'
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      '24PHIC04: Core – 4: History of Medieval India - 1206 - 1707 CE',
                      '24PHIC05: Core –5: Socio Cultural History of Tamil Nadu - 1565 - 1956',
                      '24PHIC06: Core – 6: Historiography and Historical Methods',
                      '24PHIE05/06: Elective-III: History of Journalism / International Migrations and Diasporic Studies',
                      '24PHIE07/08: Elective-IV: Indian Constitution / Environmental History of India',
                      '24PENED1: EDC: Intellectual History of Tamil Nadu',
                      '24PHR001: Common Paper: Fundamental Study of Human Rights'
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
                    subjects: [
                      '24PHIC07: Colonialism and Nationalism in India',
                      '24PHIC08: Intellectual History of India',
                      '24PHIC09: Economic History of India since 1857 C.E',
                      '24PHIC10: Tourism in Tamil Nadu',
                      '24PHIE09/10: Principles and Techniques of Archaeology/Peasant and Labour Movement in India',
                      '24PHIED2: Temples in Tamil Nadu',
                      'Internship/Industrial Activity: Internship/Industrial Activity'
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      '24PHIC11: Contemporary India',
                      '24PHIC12: International Relations since 1945 C.E',
                      'Project',
                      '24PHIED3/24PHIED4: Women in India through the Ages/Science and Technology in India since 1947 C.E',
                      'Professional Competency Skill: Archival Management/Model Question Papers SET/NET',
                      'Extension Activity: Extension Activity'
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
                { icon: <BookMarked className="w-6 h-6 text-white" />, title: 'Historical Analysis', description: 'Develop advanced skills in analyzing historical events, interpreting sources, and understanding cause-effect relationships across periods.' },
                { icon: <Scroll className="w-6 h-6 text-white" />, title: 'Research Expertise', description: 'Master research methodologies including archival research, oral history, epigraphy, and numismatic analysis for independent scholarly work.' },
                { icon: <Library className="w-6 h-6 text-white" />, title: 'Historiographical Knowledge', description: 'Understand diverse historical interpretations, theoretical frameworks, and scholarly debates in Indian and World historiography.' },
                { icon: <Landmark className="w-6 h-6 text-white" />, title: 'Heritage Management', description: 'Gain expertise in museum curation, archaeological site management, and cultural heritage preservation methodologies.' },
                { icon: <Archive className="w-6 h-6 text-white" />, title: 'Documentation Skills', description: 'Develop proficiency in archival documentation, manuscript analysis, and preservation of historical records and artifacts.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Academic Communication', description: 'Master scholarly writing, presentation skills, and effective communication of historical research to diverse audiences.' }
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
                  Diverse career pathways await MA History graduates across multiple sectors
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Research Scholar', desc: 'Academic & Research' },
                { icon: <Landmark className="w-6 h-6" />, title: 'Museum Curator', desc: 'Heritage Management' },
                { icon: <Archive className="w-6 h-6" />, title: 'Archivist', desc: 'Documentation Specialist' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Civil Services', desc: 'Government Positions' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Lecturer/Professor', desc: 'Higher Education' },
                { icon: <Map className="w-6 h-6" />, title: 'Archaeology Consultant', desc: 'Field Research' },
                { icon: <Globe className="w-6 h-6" />, title: 'Heritage Manager', desc: 'Cultural Tourism' },
                { icon: <FileText className="w-6 h-6" />, title: 'Documentary Filmmaker', desc: 'Media & Content' }
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
                    'Universities & Colleges', 'Research Institutions', 'Museums & Archives', 'Archaeological Survey',
                    'Heritage Organizations', 'Civil Services', 'Media & Publishing', 'Cultural Tourism',
                    'Documentation Centers', 'Government Departments'
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
                  Department{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Advanced infrastructure supporting historical research and learning
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Research Library', description: 'Extensive collection of rare books, manuscripts, journals, and digital resources for comprehensive historical research', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Library' },
                { title: 'Archive & Museum', description: 'Dedicated archival facility with historical documents, artifacts, and museum specimens for hands-on learning', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Archive+Museum' },
                { title: 'Field Study Programs', description: 'Regular field visits to historical sites, excavation sites, museums, and heritage locations for practical exposure', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Field+Studies' }
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
                  MA History Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in research, academia, and heritage management.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'NAAC Accredited Excellence', description: 'Top-tier recognition ensuring quality education, superior infrastructure, and academic standards' },
                  { title: 'Expert Learning Facilitators', description: 'PhD-qualified faculty with extensive research experience and active scholarly contributions' },
                  { title: 'Research-Focused Curriculum', description: 'Comprehensive training in historiography, archival research, and field methodologies' },
                  { title: 'Field Study Opportunities', description: 'Regular visits to historical sites, museums, archives, and archaeological excavations' },
                  { title: 'Career & Higher Studies Support', description: 'Strong track record in placements, NET/SET coaching, and PhD admissions guidance' }
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
                { name: 'Dr. R. Kalpana Devi Priya', designation: 'Head of Department', qualification: 'M.A., M.Phil., Ph.D.', image: '/images/faculties/aided/history/Dr.-R.-Kalpana-Devi-Priya-240x300.png' },
                { name: 'Dr. P. Vennila', designation: 'Assistant Professor', qualification: 'M.A., M.Phil., Ph.D.', image: '/images/faculties/aided/history/Dr.-B.-Suresh-240x300.png' },
                { name: 'Mrs. S. Sarala', designation: 'Assistant Professor', qualification: 'M.A., M.Phil., B.Ed., (SET)', image: '/images/faculties/aided/history/Mrs.-S.-Sarala-240x300.png' },
                { name: 'Mrs. E. Jaya', designation: 'Assistant Professor', qualification: 'B.Sc., M.A., M.Phil., M.Ed., (SET)', image: '/images/faculties/aided/history/Mrs.-E.-Jaya-240x300.png' },
                { name: 'Dr. C. Jothi', designation: 'Assistant Professor', qualification: 'M.A., Ph.D.', image: '/images/faculties/aided/history/Dr.-C.-Jothi-240x300.png' },
                { name: 'Dr. M. Samyuktha', designation: 'Assistant Professor', qualification: 'M.A., Ph.D.', image: '/images/faculties/aided/history/Dr.-M.-Samyuktha-240x300.png' },
                { name: 'Dr. S. Abirami', designation: 'Assistant Professor', qualification: 'M.A., M.Phil., Ph.D., (SET)', image: '/images/faculties/aided/history/Dr.-S.-Abirami-240x300.png' },
                { name: 'Mrs. C. Rathipriya', designation: 'Assistant Professor', qualification: 'M.A., M.Phil., (SET)', image: '/images/faculties/aided/history/Mrs.-C.-Rathipriya-240x300.png' }
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
                  Find answers to common queries about the MA History programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration and structure of the MA History programme?', answer: 'The MA History programme is a 2-year full-time postgraduate degree comprising four semesters. The curriculum includes core papers in Indian and World History, specialization electives, research methodology, and a mandatory dissertation project in the final semester.' },
                { question: 'Can I pursue PhD after completing MA History?', answer: 'Yes, MA History graduates are eligible to pursue M.Phil and PhD programmes in History, Ancient Indian Culture, Archaeology, and related fields. Our programme provides strong research training that prepares learners for doctoral studies at universities across India and abroad. We also offer NET/SET coaching to help learners qualify for research fellowships.' },
                { question: 'What are the career prospects after MA History?', answer: 'Graduates can pursue careers as historians, research scholars, museum curators, archivists, civil services officers, lecturers, archaeology consultants, heritage managers, and documentary filmmakers. The programme also prepares learners for competitive examinations like UPSC, NET, and SET.' },
                { question: 'Does the MA History programme include fieldwork?', answer: 'Yes, the programme includes mandatory field visits to historical sites, museums, archives, and archaeological excavation sites as part of experiential learning. These field studies provide hands-on experience in historical research, artifact analysis, and heritage documentation.' },
                { question: 'What research opportunities are available in the programme?', answer: 'Learners engage in extensive research through the dissertation project in the final semester. Additionally, they have access to research libraries, archival resources, and opportunities to participate in faculty-led research projects, seminars, and conferences.' },
                { question: 'Can I specialize in a particular period or theme in history?', answer: 'Yes, the programme offers elective papers in the final semester allowing learners to specialize in areas such as ancient history, medieval studies, modern history, cultural history, economic history, or gender studies based on their research interests.' }
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
                  Historical Research
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our MA History programme and embark on a rewarding career in research, academia, and heritage management.
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

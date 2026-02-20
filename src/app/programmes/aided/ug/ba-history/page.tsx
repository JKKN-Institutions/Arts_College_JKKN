'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Landmark, MapPin, Calendar, UserCheck, MessageCircle, Monitor, TrendingUp } from 'lucide-react';
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

export default function BAHistoryPage() {
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
                Bachelor of Arts in{' '}
                <span className="text-brand-green">
                  History
                </span>{' '}

              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Explore the Past, Shape the Future
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
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Civil services & careers' },
              { icon: <Award className="w-7 h-7" />, stat: '500+', title: 'UPSC Selections', desc: 'Successful alumni' },
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
                The Bachelor of Arts in History is a comprehensive three-year undergraduate programme designed to develop critical thinking, analytical skills, and deep understanding of historical events, civilizations, and their impact on contemporary society. This UGC-recognized programme offers an in-depth study of ancient, medieval, and modern history with special focus on Indian and World History.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Students engage with primary sources, archaeological evidence, and historiographical debates while developing research methodologies essential for historical scholarship. The curriculum combines theoretical knowledge with practical fieldwork, heritage site visits, and archival research training, preparing graduates for competitive examinations like UPSC Civil Services, careers in teaching, research, museums, archaeology, and heritage management.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'Expert Learning Facilitators', 'Practical Skill Development', 'Research Opportunities'].map((item, idx) => (
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
                  src="/images/programmes/ba-history/Bachelor of Arts in History.png"
                  alt="History Archive Library"
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
                  Requirements for joining the BA History (Honours) programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Any subject combination accepted', 'Minimum 50% aggregate marks', '45% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Arts / Humanities stream preferred', 'Science stream eligible', 'Commerce stream eligible', 'Vocational courses accepted']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy', 'Income Certificate', 'Bank Passbook Xerox']
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
                  Comprehensive syllabus designed to build expertise in historical studies
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
                      { code: '24UGTA01', title: 'General Tamil – I' },
                      { code: '24UGEN01', title: 'General English –I' },
                      { code: '24UHIC01', title: 'Core – I: History of Ancient India upto 1206 CE' },
                      { code: '24UHIC02', title: 'Core – II: History of Tamil Nadu upto 1311 CE' },
                      { code: '24UHIDE1', title: 'Discipline Specific Course-I: Outlines of Comparative Governments-I / Generic Elective Course-1: Geography of India' },
                      { code: '24UHINM1', title: 'NME – I: Indian Polity' },
                      { code: '24UHIS01', title: 'SEC-I: Introduction to Tourism' }
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      { code: '24UGTA02', title: 'General Tamil – II' },
                      { code: '24UGEN02', title: 'General English – II' },
                      { code: '24UHIC03', title: 'Core - III: History of Medieval India 1206-1707 CE' },
                      { code: '24UHIC04', title: 'Core – IV: History of Tamil Nadu 1311 -1801 CE' },
                      { code: '24UHIDE2', title: 'Discipline Specific Course-II: Outlines of Comparative Governments-II / Generic Elective Course-2: Geography of Tamil Nadu' },
                      { code: '24UHINM2', title: 'NME – II: Basic Journalism' },
                      { code: '25UHIS02', title: 'SEC - II: Indian Constitution' },
                      { code: '25UDIM01', title: 'Disaster Management' }
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
                            <li key={i} className="text-gray-700">
                              <span className="font-semibold text-brand-green">{subject.code}</span>
                              <br />
                              <span className="text-sm">{subject.title}</span>
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
                      { code: '24UGTA03', title: 'General Tamil – III' },
                      { code: '24UGEN03', title: 'General English –III' },
                      { code: '24UHIC05', title: 'Core - V: History of India from 1707 CE to 1857 CE' },
                      { code: '24UHIC06', title: 'Core - VI: History of Tamil Nadu since 1801 CE' },
                      { code: '24UHIDE3', title: 'Discipline Specific Course-III: Evolution of Indian Constitution from 1773 to 1947 CE / Generic Elective Course-III: Indian Economy Problems and Policies –I' },
                      { code: '24UHIS03', title: 'SEC-III: Museology' },
                      { code: '24UHIS04/05', title: 'SEC-IV: Basic Concepts of Archaeology / IKS in Architecture and Town Planning' },
                      { code: '24UEVS01', title: 'EVS' },
                      { code: '24UHAWP01', title: 'Health & Wellness' }
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      { code: '24UGTA04', title: 'General Tamil – IV' },
                      { code: '24UGEN04', title: 'General English – IV' },
                      { code: '24UHIC07', title: 'Core - VII: Freedom Struggle in India' },
                      { code: '24UHIC08', title: 'Core - VIII: History of Modern Europe from 1789 CE to 1919 CE' },
                      { code: '24UHIDE4', title: 'Discipline Specific Course-IV: Evolution of Indian Constitution Since1947 CE / Generic Elective Course-IV: Indian Economy Problems and Policies –II' },
                      { code: '24UHIS06', title: 'SEC – V: Computer Training' },
                      { code: '24UHIS07', title: 'SEC - VI: Introduction to Journalism' },
                      { code: '24UEVS01', title: 'EVS' }
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
                            <li key={i} className="text-gray-700">
                              <span className="font-semibold text-brand-green">{subject.code}</span>
                              <br />
                              <span className="text-sm">{subject.title}</span>
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
                      { code: '24UHIC09', title: 'Core – IX History of the World Since 1919 to 2020 CE' },
                      { code: '24UHIC10', title: 'Core – X Selected Themes in History of U.S.A' },
                      { code: '24UHIC11', title: 'Core – XI: Regional History (History of Kongu Nadu)' },
                      { code: '24UHIPR1', title: 'Core – XII: Project (With viva voce)' },
                      { code: '24UHIED5', title: 'Discipline Specific Course-V: Elements of Human Rights / Women Studies' },
                      { code: '24UHIED6', title: 'Discipline Specific Elective VI: History of Dravidian Movements' },
                      { code: '24UVED01', title: 'Value Education' },
                      { code: '24UHIIN01', title: 'Summer Internship /Ind. Training' }
                    ]
                  },
                  {
                    title: 'Semester VI',
                    subjects: [
                      { code: '24UHIC13', title: 'Core – XIII Contemporary History of India' },
                      { code: '24UHIC14', title: 'Core – XIV India and Her Neighbours' },
                      { code: '24UHIC15', title: 'Core – XV: History of Science and Technology in India' },
                      { code: '24UHIED7', title: 'Discipline Specific Elective VII: International Relations since 1919' },
                      { code: '24UHIED8', title: 'Discipline Specific Elective VIII: History of China Japan' },
                      { code: '24UHIPC1', title: 'General Studies for Competitive Examination' },
                      { code: '24UEXA01', title: 'Extension Activity' }
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
                            <li key={i} className="text-gray-700">
                              <span className="font-semibold text-brand-green">{subject.code}</span>
                              <br />
                              <span className="text-sm">{subject.title}</span>
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
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Critical Analysis', description: 'Develop analytical abilities to evaluate historical sources, events, and interpretations from multiple perspectives and theoretical frameworks.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Research Competence', description: 'Master primary and secondary source analysis, archival research methods, and academic writing for historical scholarship.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Global Perspective', description: 'Understand diverse civilizations, cultural exchanges, and interconnections between local, national, and global historical developments.' },
                { icon: <MessageCircle className="w-6 h-6 text-white" />, title: 'Communication Skills', description: 'Articulate complex historical arguments effectively through written essays, oral presentations, and digital media.' },
                { icon: <Landmark className="w-6 h-6 text-white" />, title: 'Heritage Appreciation', description: 'Develop understanding of archaeological sites, monuments, museums, and heritage conservation practices for cultural preservation.' },
                { icon: <UserCheck className="w-6 h-6 text-white" />, title: 'Civic Engagement', description: 'Apply historical knowledge to understand contemporary issues, democratic values, and informed citizenship responsibilities.' }
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
                  Diverse pathways await BA History graduates across sectors
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Landmark className="w-6 h-6" />, title: 'Civil Services', desc: 'IAS, IPS, IFS, and State Civil Services through UPSC/TNPSC' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'History Teacher', desc: 'Teach history at schools after completing B.Ed.' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Museum Curator', desc: 'Manage collections and exhibitions in museums' },
                { icon: <MapPin className="w-6 h-6" />, title: 'Archaeologist', desc: 'Excavate and analyze historical sites and artifacts' },
                { icon: <Library className="w-6 h-6" />, title: 'Archivist', desc: 'Preserve and organize historical records and documents' },
                { icon: <FileText className="w-6 h-6" />, title: 'Journalist', desc: 'Historical research and writing for media houses' },
                { icon: <Award className="w-6 h-6" />, title: 'Heritage Manager', desc: 'Manage cultural heritage sites and tourism' },
                { icon: <Target className="w-6 h-6" />, title: 'Research Analyst', desc: 'Historical research for think tanks and policy institutes' }
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
                    'Government Services', 'Educational Institutions', 'Museums & Archives', 'Archaeological Survey',
                    'Media & Publishing', 'Tourism Industry', 'Heritage Conservation', 'Research Organizations',
                    'Cultural Institutions', 'NGOs', 'Documentary Production', 'Digital Humanities'
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
                { title: 'Historical Archives & Library', description: 'Over 20,000 books covering Indian, World, and Regional History with digital access to JSTOR, Project MUSE, and historical databases.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=History+Library' },
                { title: 'Departmental Museum', description: 'Mini museum housing replicas, artifacts, numismatic collections, and historical models for hands-on learning experiences.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Museum' },
                { title: 'Map Room & Resource Centre', description: 'Extensive collection of historical maps, charts, and geographical resources for spatial understanding of historical events.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Map+Room' },
                { title: 'Seminar Hall', description: 'Air-conditioned seminar hall with modern presentation facilities for historical discussions, guest lectures, and workshops.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Seminar+Hall' },
                { title: 'Digital History Lab', description: 'Computer lab with specialized historical software, GIS mapping tools, and access to digitized archival collections worldwide.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Digital+Lab' },
                { title: 'Smart Learning Studios', description: 'Technology-enabled learning studios with interactive boards, documentary screening facilities, and high-speed internet connectivity.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Smart+Classroom' }
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
                Why Choose Our BA{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  History Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in civil services, academics, and heritage careers.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured education meeting national standards with excellent academic reputation.' },
                  { title: 'Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, archaeological experience, and research publications.' },
                  { title: 'UPSC & Competitive Exam Coaching', description: 'Dedicated coaching for civil services with proven track record of successful candidates.' },
                  { title: 'Heritage Tours & Fieldwork', description: 'Regular excursions to archaeological sites, museums, and historical monuments across India.' },
                  { title: 'Research & Publication Support', description: 'Opportunities for archival research, paper presentations, and academic publications in reputed journals.' }
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
                  Find answers to common queries about the BA History programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the BA History programme?', answer: 'The BA History (Honours) programme is a 3-year full-time undergraduate degree comprising six semesters.' },
                { question: 'What are the career opportunities after BA History?', answer: 'Graduates can pursue careers in Civil Services (IAS, IPS, IFS through UPSC), State Public Service Commission Jobs, Museum Curator and Archivist, Teaching (after B.Ed.), Archaeology and Heritage Management, Journalism and Historical Research, Tourism and Travel Industry, and Documentary Film Production.' },
                { question: 'What is the eligibility criteria for BA History admission?', answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board. Minimum aggregate marks requirement is 50% (45% for reserved categories). All streams are eligible.' },
                { question: 'Is there coaching available for UPSC preparation?', answer: 'Yes, our college provides dedicated UPSC coaching and guidance with experienced faculty. We have a proven track record with 500+ UPSC selections from our alumni.' },
                { question: 'What are the higher education options after BA History?', answer: 'After completing BA History, students can pursue MA History (Ancient/Medieval/Modern), M.Phil. and Ph.D. in History, B.Ed. for teaching career, MA Archaeology, MBA (Management Studies), Diploma in Museology, Diploma in Archives & Records Management, and Law (LLB).' }
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
                  Historical Studies
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our BA History programme and unlock a world of opportunities in civil services, heritage management, and academic research.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
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
                  Discover other arts and humanities programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'MA History', description: 'Advanced postgraduate studies in Indian and World History', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MA+History' },
                { title: 'BA English', description: 'Study of English literature, language, and communication skills', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=BA+English' },
                { title: 'BA Political Science', description: 'Comprehensive study of governance, political theory, and international relations', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BA+Political+Science' }
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

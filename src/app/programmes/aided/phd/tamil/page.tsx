'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Pen, Mic, Search, BookMarked, Languages, Newspaper } from 'lucide-react';
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

export default function PhDTamilPage() {
  const [activePhase, setActivePhase] = useState(1);
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
                UGC Recognized Doctoral Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Doctor of Philosophy (Ph.D) in{' '}
                <span className="text-brand-green">
                  Tamil
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Advanced Research in Tamil Language, Literature & Linguistics
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>3-5 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <FileText className="w-5 h-5 text-brand-green" />
                  <span>Full-time / Part-time</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Users className="w-5 h-5 text-brand-green" />
                  <span>Research Programme</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#research-areas" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                  View Research Areas
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
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited Institution', desc: 'Quality assured research' },
              { icon: <Users className="w-7 h-7" />, stat: '1:1', title: 'Supervisor-Scholar Ratio', desc: 'Personalized guidance' },
              { icon: <BookOpen className="w-7 h-7" />, stat: 'UGC', title: 'NET/SLET Exemption', desc: 'For qualified candidates' },
              { icon: <Award className="w-7 h-7" />, stat: '9+', title: 'Research Areas', desc: 'Diverse specializations' },
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
                The Doctor of Philosophy (Ph.D) in Tamil is a prestigious doctoral research programme designed to develop advanced research scholars with deep expertise in Tamil language, literature, and linguistics. This UGC-recognized programme offers comprehensive research training spanning classical Sangam literature, medieval devotional poetry, modern Tamil prose and poetry, comparative Dravidian studies, and contemporary Tamil digital humanities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Research Scholars receive rigorous academic training combined with practical research skills under the guidance of experienced Learning Facilitators. The programme integrates traditional textual scholarship with modern research methodologies, preparing scholars for distinguished careers in academia, research institutions, government language bodies, and cultural organizations.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Expert Research Supervisors', 'UGC-CARE Journal Publications', 'National & International Conferences', 'Manuscript Research Training'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=Tamil+Research+Library"
                  alt="Tamil Research Library"
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
                  Requirements for joining the Ph.D Tamil doctoral research programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['M.A. / M.Phil in Tamil from recognized university', 'Minimum 55% aggregate marks', '50% for SC/ST/OBC categories', 'Relaxation as per UGC norms']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Entrance Requirements',
                  items: ['UGC NET/SLET qualified (preferred)', 'University entrance examination', 'Research aptitude interview', 'Synopsis presentation']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['All Academic Mark Sheets & Certificates', 'UGC NET/SLET Certificate (if applicable)', 'Research Proposal Synopsis', 'Published Papers (if any)', 'NOC from Employer (for Part-time)', 'Aadhaar & Photo ID Proof']
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

      {/* Research Areas & Specializations */}
      <section className="py-16 bg-brand-cream" id="research-areas">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Research Areas" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Research Areas &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Specializations
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Diverse research domains for doctoral study in Tamil language and literature
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <BookMarked className="w-6 h-6 text-white" />, title: 'Classical Tamil Literature', description: 'Research on Sangam literature, Tirukkural, Silappadikaram, Manimekalai, and other classical masterpieces with textual criticism and comparative analysis.' },
                { icon: <Languages className="w-6 h-6 text-white" />, title: 'Tamil Linguistics', description: 'Study of Tamil grammar evolution, phonology, morphology, syntax, semantics, and computational linguistics with focus on Tolkappiyam principles.' },
                { icon: <Pen className="w-6 h-6 text-white" />, title: 'Modern Tamil Literature', description: 'Contemporary Tamil fiction, poetry, drama, Dalit literature, feminist writing, diaspora literature, and post-colonial Tamil studies.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Comparative Dravidian Studies', description: 'Comparative analysis of Tamil with other Dravidian languages, proto-Dravidian reconstruction, and South Indian literary traditions.' },
                { icon: <Mic className="w-6 h-6 text-white" />, title: 'Tamil Folk Literature', description: 'Oral traditions, folk songs, ballads, proverbs, folk drama, regional dialects, and ethnographic documentation of Tamil cultural heritage.' },
                { icon: <Building2 className="w-6 h-6 text-white" />, title: 'Tamil Digital Humanities', description: 'Digital archiving, corpus linguistics, natural language processing for Tamil, digital editions of manuscripts, and computational literary analysis.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Tamil Translation Studies', description: 'Literary translation theory, translation of classical texts, comparative translation studies, and localization practices in Tamil.' },
                { icon: <Newspaper className="w-6 h-6 text-white" />, title: 'Tamil Media Studies', description: 'Tamil journalism history, cinema studies, broadcast media, social media Tamil usage, and media\'s influence on Tamil language evolution.' },
                { icon: <Library className="w-6 h-6 text-white" />, title: 'Tamil Epigraphy & Manuscripts', description: 'Paleography, inscriptional Tamil, manuscript studies, critical editions of palm-leaf manuscripts, and archival research methodologies.' }
              ].map((area, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="relative p-6 group h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-16 bg-white" id="structure">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Programme Structure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Doctoral{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Training Structure
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive doctoral training in research methodology and Tamil studies
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3].map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setActivePhase(phase)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activePhase === phase
                        ? 'bg-gradient-to-r from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/25'
                        : 'bg-white text-brand-green hover:bg-brand-green/5'
                      }`}
                  >
                    Phase {phase}
                  </button>
                ))}
              </div>
            </RevealSection>

            {activePhase === 1 && (
              <RevealSection>
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Phase I: Coursework (6 months)</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Research Methodology and Techniques',
                        'Advanced Tamil Literature Studies',
                        'Tamil Linguistics and Grammar',
                        'Computer Applications in Tamil Research',
                        'Research Ethics and Publication',
                        'Dissertation Planning and Proposal Writing'
                      ].map((subject, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </RevealSection>
            )}

            {activePhase === 2 && (
              <RevealSection>
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Phase II: Research Work (2-3 years)</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Literature Review and Theoretical Framework',
                        'Data Collection and Field Research',
                        'Manuscript and Archival Research',
                        'Conference Paper Presentations',
                        'Journal Article Publications',
                        'Pre-submission Seminar Presentation'
                      ].map((subject, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </RevealSection>
            )}

            {activePhase === 3 && (
              <RevealSection>
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Phase III: Thesis Submission & Defence (6 months)</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Thesis Writing and Compilation',
                        'Synopsis Preparation',
                        'Submission to University',
                        'External Examiner Review',
                        'Viva Voce Examination',
                        'Degree Award and Convocation'
                      ].map((subject, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </RevealSection>
            )}
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
                  Distinguished career pathways for Ph.D Tamil scholars
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: 'University Professor', desc: 'Teach and research in Tamil departments at universities' },
                { icon: <Search className="w-6 h-6" />, title: 'Research Scientist', desc: 'Lead research projects in Tamil studies institutions' },
                { icon: <Languages className="w-6 h-6" />, title: 'Tamil Linguist', desc: 'Work on language development and preservation' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Academic Author', desc: 'Write scholarly books and research publications' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Government Tamil Officer', desc: 'Work in Tamil Development departments' },
                { icon: <Globe className="w-6 h-6" />, title: 'Translation Expert', desc: 'Professional translation of literary and scholarly works' },
                { icon: <Library className="w-6 h-6" />, title: 'Cultural Consultant', desc: 'Advise on Tamil cultural and heritage projects' },
                { icon: <Newspaper className="w-6 h-6" />, title: 'Publishing Director', desc: 'Lead Tamil academic and literary publishing houses' }
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
                    'Universities & Colleges', 'Research Institutions', 'Government Language Departments', 'Tamil Development Boards',
                    'Publishing Houses', 'Cultural Organizations', 'Translation Services', 'Media Houses',
                    'Educational Boards', 'Heritage Departments'
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
                  Research{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure to support your research journey
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Tamil Research Library', description: 'Extensive collection of classical Tamil texts, modern literature, and research journals with digital archive access.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Tamil+Library' },
                { title: 'Manuscript Research Center', description: 'Specialized facility for studying palm-leaf manuscripts, inscriptions, and rare Tamil texts with preservation equipment.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Manuscript+Center' },
                { title: 'Digital Humanities Lab', description: 'Equipped with tools for corpus linguistics, computational analysis, and digital archiving of Tamil literature.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Digital+Lab' },
                { title: 'Research Scholar Rooms', description: 'Dedicated workspace for research scholars with computer facilities, internet access, and quiet study environment.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Scholar+Rooms' },
                { title: 'Seminar Hall', description: 'Modern conference facility for research presentations, symposiums, guest lectures, and doctoral defenses.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Seminar+Hall' },
                { title: 'Archive & Documentation', description: 'Comprehensive archival facility with microfilm readers, scanners, and preservation technology for rare documents.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Archive' }
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
                Why Choose Our Ph.D{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Tamil Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our doctoral programme provides comprehensive research training with experienced supervisors and excellent facilities.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & Accredited', description: 'Quality-assured doctoral programme meeting national research standards.' },
                  { title: 'Experienced Research Guides', description: 'Highly qualified supervisors with Ph.D. degrees and extensive research publications.' },
                  { title: 'Publication Support', description: 'Guidance for publishing in UGC-CARE listed journals and international conferences.' },
                  { title: 'Comprehensive Library', description: 'Access to extensive Tamil literature collection and digital research databases.' },
                  { title: 'Fellowship Opportunities', description: 'Support for UGC NET/JRF fellowships and research grants.' }
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
                    Guides
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meet our experienced research supervisors
                </p>
              </div>
            </RevealSection>

            <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
              {[
                { name: 'Dr. S. Uma', designation: 'Associate Professor & Head', qualification: 'M.A., M.Phil., Ph.D.', image: '/images/faculties/aided/tamil/Dr.-S.-Uma-240x300.png' },
                { name: 'Mrs. S. Umarani', designation: 'Assistant Professor', qualification: 'M.A., M.Phil., B.Ed., PGDCA', image: '/images/faculties/aided/tamil/Mrs.-S.-Umarani-240x300.png' },
                { name: 'Mr. A. R. Sathiyaprakash', designation: 'Assistant Professor', qualification: 'M.A., B.Ed., NET., SET., PGDTTM', image: '/images/faculties/aided/tamil/Mr.-A.-R.-Sathiyaprakash-240x300.png' },
                { name: 'Dr. D. Sathiya', designation: 'Assistant Professor', qualification: 'M.A., M.A (Ling)., M.Phil., Ph.D. (SET)', image: '/images/faculties/aided/tamil/Dr.-D.-Sathiya-240x300.png' }
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
                  Find answers to common queries about the Ph.D Tamil programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the Ph.D Tamil programme?', answer: 'The Ph.D Tamil programme is a minimum 3-year and maximum 5-year doctoral research programme. Full-time scholars typically complete in 3-4 years, while part-time scholars may take 4-5 years. The programme includes coursework (6 months), research work (2-3 years), and thesis submission with viva voce examination.' },
                { question: 'What are the career opportunities after Ph.D in Tamil?', answer: 'Ph.D Tamil graduates can pursue careers as University Professors, Research Scientists, Tamil Linguists, Academic Authors, Government Tamil Officers, Translation Experts, Cultural Consultants, Publishing Directors, and Policy Researchers in language development. They can work in universities, research institutions, government language departments, and cultural organizations.' },
                { question: 'What is the eligibility criteria for Ph.D Tamil admission?', answer: 'Candidates must have completed M.A./M.Phil in Tamil or related discipline from a recognized university with minimum 55% aggregate marks (50% for reserved categories). Candidates must also qualify UGC NET/SLET or pass the university entrance examination followed by a research aptitude interview and synopsis presentation.' },
                { question: 'What research areas are available in Ph.D Tamil?', answer: 'Research areas include Classical Tamil Literature (Sangam Literature), Modern Tamil Literature, Tamil Linguistics and Grammar, Comparative Dravidian Studies, Tamil Folk Literature, Tamil Translation Studies, Tamil Media and Digital Humanities, Tamil Diaspora Studies, Tamil Epigraphy & Manuscripts, and Tamil Cultural Studies.' },
                { question: 'Is UGC NET mandatory for Ph.D Tamil admission?', answer: 'UGC NET/SLET qualified candidates are given preference and may be exempted from the entrance examination. Candidates without NET/SLET must qualify the university-conducted entrance test followed by an interview for admission. NET/JRF holders are also eligible for fellowships.' },
                { question: 'What is the coursework component of the Ph.D programme?', answer: 'The coursework is mandatory for all Ph.D scholars and typically lasts 6 months. It includes Research Methodology, Advanced Tamil Literature, Tamil Linguistics, Computer Applications in Tamil Research, Research Ethics, and Dissertation Planning. Successful completion of coursework is required before progressing to the research phase.' },
                { question: 'Are there fellowship opportunities for Ph.D scholars?', answer: 'Yes, UGC NET-JRF qualified scholars are eligible for Junior Research Fellowship (JRF) which provides monthly stipend for 5 years (2 years JRF + 3 years SRF). The college also assists scholars in applying for various research grants, project fellowships, and scholarships from UGC, ICSSR, and other funding agencies.' },
                { question: 'What is the publication requirement for Ph.D degree?', answer: 'As per UGC norms, scholars are required to publish at least one research paper in a UGC-CARE listed journal before thesis submission. Additionally, presentation of research papers in national/international conferences and participation in seminars is encouraged. The department provides guidance and support for publication processes.' }
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
                Begin Your Doctoral Journey in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Tamil Studies
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our Ph.D Tamil programme and contribute to the advancement of Tamil language, literature, and linguistics research.
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
                  Discover other Tamil and language programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'M.A. Tamil', description: 'Advanced postgraduate studies in Tamil Literature and Linguistics', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MA+Tamil' },
                { title: 'M.Phil Tamil', description: 'Pre-doctoral research programme in Tamil studies', duration: '1 Year', image: 'https://placehold.co/400x180/059669/FFFFFF?text=MPhil+Tamil' },
                { title: 'B.A. Tamil', description: 'Undergraduate programme in Tamil language and literature', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BA+Tamil' }
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

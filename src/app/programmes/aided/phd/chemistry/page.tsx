'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, Atom, TestTube2 } from 'lucide-react';
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

export default function PhDChemistryPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                Doctor of Philosophy (Ph.D) in{' '}
                <span className="text-brand-green">
                  Chemistry
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Advanced Research in Chemical Sciences for Academic & Industrial Excellence
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>3-5 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <FileText className="w-5 h-5 text-brand-green" />
                  <span>Full-Time / Part-Time</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Users className="w-5 h-5 text-brand-green" />
                  <span>Research Scholars</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#research-areas" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                  Research Areas
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
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'UGC', title: 'Recognized Programme', desc: 'Nationally accredited' },
              { icon: <Users className="w-7 h-7" />, stat: '1:8', title: 'Scholar-Guide Ratio', desc: 'Dedicated mentorship' },
              { icon: <FlaskConical className="w-7 h-7" />, stat: '10+', title: 'Research Labs', desc: 'Advanced facilities' },
              { icon: <Award className="w-7 h-7" />, stat: 'Good', title: 'Career Placement', desc: 'Academia & research positions' },
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
                The Doctor of Philosophy (Ph.D) in Chemistry is a prestigious doctoral research programme designed to develop advanced research scholars with deep expertise in organic, inorganic, physical, analytical, and applied chemistry. This UGC-recognized programme offers comprehensive research training spanning synthetic chemistry, materials science, nanochemistry, green chemistry, medicinal chemistry, and computational chemistry approaches.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Research Scholars receive rigorous academic and laboratory training combined with practical research skills under the guidance of experienced Learning Facilitators. The programme integrates fundamental chemical principles with cutting-edge research methodologies, preparing scholars for distinguished careers in academia, research institutions, pharmaceutical industries, chemical manufacturing, and government research organizations.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Advanced Research Infrastructure', 'Experienced Research Supervisors', 'Publication Support', 'Industry Collaborations'].map((item, idx) => (
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
                  alt="Chemistry Research Lab"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 2020
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
                  Requirements for joining the Ph.D Chemistry doctoral research programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['M.Sc./M.Phil in Chemistry or related discipline', 'Reserved Categories - As per Government Norms', 'From recognized university', 'Biochemistry, Industrial Chemistry, Pharmaceutical Chemistry accepted']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Entrance Examination',
                  items: ['UGC NET/SLET qualified preferred', 'GATE qualified candidates eligible', 'University entrance test mandatory for non-NET candidates', 'Personal interview required']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['Master\'s Degree certificates', 'Mark sheets of all semesters', 'NET/GATE scorecard (if applicable)', 'Research proposal outline', 'No Objection Certificate (for employed candidates)']
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

      {/* Research Areas */}
      <section className="py-16 bg-brand-cream" id="research-areas">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Research" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Research{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Areas
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Specialized research domains available for doctoral studies
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Organic Synthesis', description: 'Natural products chemistry, heterocyclic compounds, and organic reaction mechanisms.' },
                { icon: <Atom className="w-6 h-6 text-white" />, title: 'Inorganic Chemistry', description: 'Coordination chemistry, organometallics, and bioinorganic chemistry studies.' },
                { icon: <TestTube2 className="w-6 h-6 text-white" />, title: 'Physical Chemistry', description: 'Thermodynamics, quantum chemistry, spectroscopy, and theoretical chemistry.' },
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Analytical Chemistry', description: 'Instrumental analysis, chromatography, and environmental chemistry.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Green Chemistry', description: 'Sustainable synthesis, waste minimization, and eco-friendly processes.' },
                { icon: <Atom className="w-6 h-6 text-white" />, title: 'Nanochemistry', description: 'Nanoparticle synthesis, characterization, and applications.' },
                { icon: <Lightbulb className="w-6 h-6 text-white" />, title: 'Medicinal Chemistry', description: 'Drug design, synthesis of bioactive compounds, and pharmaceutical chemistry.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Polymer Chemistry', description: 'Polymer synthesis, characterization, and applications in materials science.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Electrochemistry and Material Science', description: 'Study of materials using electrochemical reactions.' }
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

      {/* Career Opportunities */}
      <section className="py-16 bg-white" id="careers">
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
                  Diverse career pathways for Ph.D Chemistry graduates in academia and industry
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: 'University Professor', desc: 'Teach and conduct research at universities and colleges' },
                { icon: <Microscope className="w-6 h-6" />, title: 'Research Scientist', desc: 'Lead research projects in government and private labs' },
                { icon: <Building2 className="w-6 h-6" />, title: 'R&D Manager', desc: 'Manage research teams in pharmaceutical and chemical industries' },
                { icon: <Award className="w-6 h-6" />, title: 'Quality Control Director', desc: 'Ensure quality standards in manufacturing industries' },
                { icon: <FileText className="w-6 h-6" />, title: 'Patent Scientist', desc: 'Work on patent filing and intellectual property rights' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Consultant', desc: 'Advise on environmental protection and sustainability' },
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Forensic Chemist', desc: 'Analyze evidence for law enforcement agencies' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'Product Development Scientist', desc: 'Develop new products and formulations' }
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
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Industry Sectors for Ph.D Chemistry Graduates</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Pharmaceutical Industry', 'Petrochemical Sector', 'Chemical Manufacturing', 'Environmental Sciences',
                    'Research Institutions (CSIR, DRDO, ISRO)', 'Food & Beverage Industry', 'Cosmetics & Personal Care',
                    'Academic Institutions', 'Government Laboratories', 'Biotechnology Companies'
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

      {/* Research Facilities */}
      {/* <section className="py-16 bg-brand-cream" id="facilities">
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
                  State-of-the-art research infrastructure and analytical facilities
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Advanced Research Laboratories', description: 'Well-equipped organic, inorganic, physical, and analytical chemistry research labs with modern facilities and safety equipment.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Labs' },
                { title: 'Instrumentation Centre', description: 'Access to UV-Vis, FTIR, NMR, GC-MS, HPLC, and other advanced analytical instruments for research characterization.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Instrumentation' },
                { title: 'Computational Lab', description: 'High-performance computing facilities for molecular modeling, quantum chemistry calculations, and data analysis.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Computational+Lab' },
                { title: 'Central Library', description: 'Comprehensive collection of chemistry journals, books, e-resources, and online databases including SciFinder and Web of Science.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Library' },
                { title: 'Synthesis Laboratory', description: 'Dedicated synthesis labs with fume hoods, inert atmosphere facilities, and specialized equipment for organic and inorganic synthesis.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Synthesis+Lab' },
                { title: 'Seminar Hall', description: 'Air-conditioned seminar hall for research presentations, invited lectures, conferences, and symposia.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Seminar+Hall' }
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
      <section className="py-16 bg-white" id="why-choose">
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
                Why Choose JKKN for Ph.D{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Chemistry?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for distinguished careers in research and academia.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured doctoral education meeting national standards with excellent academic reputation.' },
                  { title: 'Experienced Research Supervisors', description: 'Highly qualified guides with Ph.D., postdoctoral experience, and strong publication records.' },
                  { title: 'Advanced Research Infrastructure', description: 'Modern laboratories with sophisticated instruments for cutting-edge research.' },
                  { title: 'Publication & Presentation Support', description: 'Comprehensive assistance for publishing research in international journals and presenting at conferences.' },
                  { title: 'Industry & Institutional Collaborations', description: 'Strong partnerships with research organizations, industries, and academic institutions.' }
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-brand-cream/60 backdrop-blur-sm rounded-xl border border-brand-cream hover:shadow-lg hover:-translate-y-0.5 transition-all">
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
      <section className="py-16 bg-brand-cream" id="faculty">
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
                  Meet our experienced research supervisors and mentors
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
      <section className="py-16 bg-white" id="faq">
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
                  Find answers to common queries about the Ph.D Chemistry programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the Ph.D Chemistry programme?', answer: 'The Ph.D Chemistry programme is a minimum 3-year and maximum 5-year doctoral research programme. Full-time scholars typically complete in 3-4 years, while part-time scholars may take 4-5 years depending on research complexity, publication requirements, and thesis completion. Extensions may be granted as per UGC regulations in exceptional cases.' },
                { question: 'What is the eligibility criteria for Ph.D Chemistry admission?', answer: 'Candidates must have completed M.Sc./M.Phil in Chemistry or related discipline (Biochemistry, Industrial Chemistry, Pharmaceutical Chemistry) from a recognized university with minimum 55% aggregate marks (50% for reserved categories). Candidates must also qualify UGC NET/SLET/GATE or pass the university entrance examination followed by a personal interview.' },
                { question: 'Is UGC NET/GATE mandatory for Ph.D Chemistry admission?', answer: 'UGC NET/SLET/GATE qualified candidates are given preference and may be exempted from the entrance examination. Candidates without NET/SLET/GATE must qualify the university-conducted entrance test followed by an interview for admission. GATE qualified candidates may also be eligible for CSIR/UGC fellowships providing monthly stipend.' },
                { question: 'What research areas are available for Ph.D in Chemistry?', answer: 'Research areas include Organic Synthesis and Natural Products Chemistry, Inorganic Coordination Chemistry, Physical and Theoretical Chemistry, Analytical and Environmental Chemistry, Nanochemistry and Materials Science, Green and Sustainable Chemistry, Medicinal Chemistry and Drug Design, Polymer Chemistry, and Computational Chemistry.' },
                { question: 'What are the publication requirements for Ph.D Chemistry?', answer: 'Research scholars must publish a minimum of 2 research papers in UGC-approved or Scopus/Web of Science indexed journals during their doctoral programme. At least one publication should be in a peer-reviewed international journal. Publication requirements must be fulfilled before submission of the doctoral thesis for evaluation.' },
                { question: 'What career prospects exist after Ph.D in Chemistry?', answer: 'Ph.D Chemistry graduates can pursue careers as University Professors, Research Scientists in CSIR/DRDO/ISRO labs, R&D Managers in pharmaceutical and chemical industries, Quality Control Directors, Patent Scientists, Environmental Consultants, Forensic Chemists, and Product Development Scientists. They can also pursue postdoctoral research positions in India and abroad.' },
                { question: 'Is there financial support available for Ph.D scholars?', answer: 'Yes, UGC NET/GATE qualified scholars are eligible for Junior Research Fellowship (JRF) with a monthly stipend of ₹31,000 for the first two years, which increases to ₹35,000 as Senior Research Fellowship (SRF) for the remaining period. The fellowship also includes an annual contingency grant for research expenses.' },
                { question: 'What is the course work requirement for Ph.D Chemistry?', answer: 'All Ph.D scholars must complete a mandatory course work in the first year consisting of Research Methodology, Advanced Chemistry topics, Computer Applications in Chemistry, and soft skills development. The course work must be completed with a minimum grade before proceeding to the comprehensive examination and full-time research.' }
              ].map((faq, idx) => (
                <RevealSection key={idx} delay={idx * 60}>
                  <div className="bg-brand-cream/60 backdrop-blur-sm rounded-xl border border-brand-cream hover:border-brand-green/20 transition-all overflow-hidden">
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
      <section className="py-16 bg-brand-cream relative overflow-hidden" id="admission">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionBadge text="Enroll Now" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Begin Your Doctoral Journey in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Chemistry
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our Ph.D Chemistry programme and contribute to the advancement of chemical sciences through innovative research.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Prospectus
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Related Programmes */}
      {/* <section className="py-16 bg-white">
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
                { title: 'M.Sc Chemistry', description: 'Postgraduate studies in organic, inorganic, physical, and analytical chemistry', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MSc+Chemistry' },
                { title: 'B.Sc Chemistry', description: 'Undergraduate foundation in chemistry with laboratory training', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=BSc+Chemistry' },
                { title: 'M.Phil Chemistry', description: 'Pre-doctoral research programme in chemistry', duration: '1 Year', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MPhil+Chemistry' }
              ].map((programme, idx) => (
                <RevealSection key={idx} delay={idx * 150}>
                  <a href="#" className="block bg-brand-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group">
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

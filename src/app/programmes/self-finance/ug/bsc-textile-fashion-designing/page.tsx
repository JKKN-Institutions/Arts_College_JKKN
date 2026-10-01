'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, Building2, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Palette, Scissors, Ruler, Shirt, PenTool, Layers, TrendingUp, Calendar, UserCheck, DollarSign, Database, LineChart } from 'lucide-react';
import Marquee from '@/components/ui/Marquee';
import { bscTfdFaqs } from './faqs';

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

export default function BSCTextileFashionDesigningPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faqs = bscTfdFaqs;

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
                    Textile and Fashion Designing
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                  A three-year fashion design degree (B.Sc TFD) · Periyar University · Komarapalayam, Tamil Nadu
                </p>
                <p className="text-base text-gray-700 mb-6">
                  TFD full form: Textile and Fashion Designing. Open to +2 students from any group.
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
                  <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-textile-fashion-designing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
                { icon: <DollarSign className="w-7 h-7" />, stat: '₹32,000', title: 'Annual Fee (MQ)', desc: '2026-27 · GQ as per Govt norms' },
                { icon: <BookOpen className="w-7 h-7" />, stat: 'Any +2', title: 'Group Eligible', desc: 'Science, Commerce, Arts or vocational' },
                { icon: <Award className="w-7 h-7" />, stat: 'Diploma', title: 'Direct 2nd Year', desc: 'As per Periyar University regulation' },
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
                  B.Sc Textile and Fashion Designing (B.Sc TFD) is a three-year fashion design degree. It starts with Fiber and Yarn Science, Woven Fabric Science, illustration and basic apparel designing, moves to Textile Wet Processing, Textile Finishing and children&apos;s and women&apos;s apparel, and ends with Apparel Costing and Merchandising, Men&apos;s Apparel, Textile Testing and Quality Control, and CAD in Garment Designing. Every year has practicals, and the final year carries an internship project and a fashion portfolio presentation, both with viva voce.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  JKKN College of Arts and Science is an autonomous college affiliated to Periyar University, on NH-544 at Komarapalayam in Namakkal district, Tamil Nadu, between Salem and Erode. B.Sc Textile and Fashion Designing here is a self-finance programme with an annual management-quota fee of ₹32,000 for 2026-27. Comparing options across the state? Read our{' '}
                  <a href="/bsc-fashion-designing-colleges-in-tamil-nadu" className="text-brand-green font-semibold underline">guide to B.Sc Fashion Designing colleges in Tamil Nadu</a>.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {['Apparel practicals in every year', 'CAD in Garment Designing (Semester VI)', 'Internship project with viva voce', 'Fashion portfolio presentation'].map((item, idx) => (
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
                    src="/images/programmes/tfd/JKKN B.Sc Textile and Fashion Designing.webp"
                    alt="B.Sc Textile and Fashion Designing at JKKN College of Arts and Science, Komarapalayam"
                    className="w-full h-auto"
                width={2048}
                height={2048}
              />
                  {/* <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Since 1952
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
                    Requirements for joining B.Sc Textile and Fashion Designing, as set by the{' '}
                    <a href="https://www.periyaruniversity.ac.in/Documents/2026/syllabus/nanmudh/23-24even/B.Sc.%20TEXTILE%20AND%20FASHION%20DESIGNING.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-green underline">Periyar University regulations</a>
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Award className="w-8 h-8 text-white" />,
                    title: 'Basic Eligibility',
                    items: ['Pass in any Higher Secondary (+2) course, academic or vocational', 'State Board, CBSE, ICSE or an equivalent examination', 'Merit-based admission; reservation as per Tamil Nadu Government norms']
                  },
                  {
                    icon: <BookOpen className="w-8 h-8 text-white" />,
                    title: 'Stream Acceptance',
                    items: ['Science, Commerce, Arts and vocational groups are all eligible', 'No particular +2 subject is required']
                  },
                  {
                    icon: <UserCheck className="w-8 h-8 text-white" />,
                    title: 'Diploma Holders',
                    items: ['A pass in a three-year Diploma in a Fashion, Costume, Textile or Apparel course qualifies for direct admission to the second year, as per the Periyar University regulation', 'Contact the admissions office to confirm second-year seat availability']
                  },


                ].map((card, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
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
                    Comprehensive 6-semester curriculum covering design, technology, and business aspects
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
                        { name: 'General Tamil - I', code: '24UGTA01' },
                        { name: 'General English - I', code: '24UGEN01' },
                        { name: 'Core - I, Fiber and Yarn Science', code: '24UTFC01' },
                        { name: 'Core - II, Basic Apparel Designing Practical', code: '24UTFCP01' },
                        { name: 'DSE - I, Pattern Making and Grading / Basic Apparel Designing / Fashion Forecasting', code: '24UTFDE01 / 24UTFDE02 / 24UTFDE03' },
                        { name: 'NME - I, E-Designing Practical', code: '24UTFNMP01' },
                        { name: 'SEC - I (Foundation Course), Basic Illustration and Sketching Practical', code: '24UTFFP01' }
                      ]
                    },
                    {
                      title: 'Learning Period II',
                      subjects: [
                        { name: 'General Tamil - II', code: '24UGTA02' },
                        { name: 'General English - II', code: '24UGEN02' },
                        { name: 'Core - III, Woven Fabric Science', code: '24UTFC02' },
                        { name: 'Core - IV, Fiber to Fabric Science Practical', code: '24UTFCP02' },
                        { name: 'DSE - II, Apparel Manufacturing Machineries and Equipments / Care and Maintenance of Textiles / Garment Accessories and Trims', code: '24UTFDE04 / 24UTFDE05 / 24UTFDE06' },
                        { name: 'NME - II, Needle Craft and Fabric Painting Practical', code: '24UTFNMP02' },
                        { name: 'SEC - II, Basic Pattern Making Practical', code: '25UTFSP01' },
                        {name: 'Disaster Management', code: '25UDIM01'}                      ]
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
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
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
                        { name: 'General Tamil - III', code: '24UGTA03' },
                        { name: 'General English - III', code: '24UGEN03' },
                        { name: 'Core - V, Textile Wet Processing', code: '24UTFC03' },
                        { name: 'Core - VI, Children\'s Apparel Practical', code: '24UTFCP03' },
                        { name: 'DSE - III, Fashion Draping Practical / Fashion Business Communication / Basics of Cosmetology', code: '24UTFDEP01 / 24UTFDE07 / 24UTFDE08' },
                        { name: 'SEC - III (Entrepreneurial Skill), Beauty Care Practical', code: '24UTFSP02' },
                        { name: 'SEC - IV, Textile Wet Processing Practical', code: '24UTFSP03' },
                        { name: 'Environmental Studies', code: '24UEVS01' }
                      ]
                    },
                    {
                      title: 'Learning Period IV',
                      subjects: [
                        { name: 'General Tamil - IV', code: '24UGTA04' },
                        { name: 'General English - IV', code: '24UGEN04' },
                        { name: 'Core - VII, Textile Finishing', code: '24UTFC04' },
                        { name: 'Core - VIII, Women\'s Apparel Practical', code: '24UTFCP04' },
                        { name: 'DSE - IV, Fashion Designing Practical / Costumes and Textiles of India / Fashion Appreciation', code: '24UTFDEP02 / 24UTFDE09 / 24UTFDE10' },
                        { name: 'SEC - V, Fashion Designing', code: '24UTFS01' },
                        { name: 'SEC - VI, Boutique Management', code: '24UTFS02' },
                        { name: 'Environmental Studies', code: '24UEVS01' }
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
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
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
                        { name: 'Core - IX, Apparel Costing and Merchandising', code: '24UTFC05' },
                        { name: 'Core - X, Knitting and Non-woven', code: '24UTFC06' },
                        { name: 'Core - XI, Surface Embellishment and Fashion Accessories Practical', code: '24UTFCP05' },
                        { name: 'Core - XII, Men\'s Apparel Practical', code: '24UTFCP06' },
                        { name: 'DSE - V, Home Textile Practical / Organization of Garment Unit / Computer Application in Garment Designing', code: '24UTFDEP03 / 24UTFDE11 / 24UTFDE12' },
                        { name: 'DSE - VI, Entrepreneurship Development / Fashion Photography / Eco Textile', code: '24UTFDE13 / 24UTFDE14 / 24UTFDE15' },
                        { name: 'Value Education', code: '24UVED01' },
                        { name: 'Internship Project - Viva-Voce', code: '24UTFSI01' }
                      ]
                    },
                    {
                      title: 'Learning Period VI',
                      subjects: [
                        { name: 'Core - XIII, Textile Testing and Quality Control', code: '24UTFC07' },
                        { name: 'Core - XIV, CAD in Garment Designing Practical', code: '24UTFCP07' },
                        { name: 'Core - XV, Fashion Portfolio Presentation Viva Voce', code: '24UTFCP08' },
                        { name: 'DSE - VII, Apparel Production Management / Technical Textiles / Fashion Marketing', code: '24UTFDE16 / 24UTFDE17 / 24UTFDE18' },
                        { name: 'DSE - VIII, International Trade and Documentation / Industrial Engineering / Apparel Brand Management', code: '24UTFDE19 / 24UTFDE20 / 24UTFDE21' },
                        { name: 'Professional Competency Skill, Employability Readiness (Naandi/Unnati/Quest/Izapy/IBM Skillbuild)', code: '—' },
                        { name: 'Extension Activity', code: '24UEX01' }
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
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
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
                    Skills and competencies you will develop
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Palette className="w-6 h-6 text-white" />, title: 'Illustration and Design', description: 'Sketch and illustrate garments, from Basic Illustration and Sketching in Semester I to the Fashion Designing course and the final-year fashion portfolio.' },
                  { icon: <Ruler className="w-6 h-6 text-white" />, title: 'Pattern Making and Construction', description: 'Make patterns and construct children\'s, women\'s and men\'s apparel through the apparel practicals in each year.' },
                  { icon: <Layers className="w-6 h-6 text-white" />, title: 'Computer-Aided Design', description: 'Use computers for garment design through E-Designing Practical (Semester I) and CAD in Garment Designing Practical (Semester VI).' },
                  { icon: <Sparkles className="w-6 h-6 text-white" />, title: 'Textile Science', description: 'Understand fibres, yarns and fabrics, wet processing, finishing, knitting and non-wovens, and textile testing and quality control.' },
                  { icon: <PenTool className="w-6 h-6 text-white" />, title: 'Merchandising and Business', description: 'Learn apparel costing and merchandising and boutique management, with electives such as Fashion Marketing and Apparel Brand Management.' },
                  { icon: <Users className="w-6 h-6 text-white" />, title: 'Industry Exposure', description: 'Complete an internship project with viva voce in the final year.' }
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
                    Diverse career paths in the fashion and textile industry
                  </p>
                </div>
              </RevealSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <Palette className="w-6 h-6" />, title: 'Fashion Designer', desc: 'Create original clothing and accessory designs for fashion houses and brands' },
                  { icon: <Layers className="w-6 h-6" />, title: 'Textile Designer', desc: 'Design patterns, prints, and textures for fabrics and textile products' },
                  { icon: <Ruler className="w-6 h-6" />, title: 'Costume Designer', desc: 'Design costumes for film, television, theater, and media productions' },
                  { icon: <Briefcase className="w-6 h-6" />, title: 'Fashion Stylist', desc: 'Style outfits for photoshoots, celebrities, events, and editorial content' },
                  { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Visual Merchandiser', desc: 'Create attractive product displays and store layouts for retail brands' },
                  { icon: <Sparkles className="w-6 h-6" />, title: 'Apparel Merchandiser', desc: 'Manage product development, sourcing, and supply chain for fashion brands' },
                  { icon: <Shirt className="w-6 h-6" />, title: 'Fashion Entrepreneur', desc: 'Launch your own fashion label, boutique, or online fashion business' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Production Manager', desc: 'Oversee garment manufacturing, quality control, and production processes' }
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
                      'Fashion Houses', 'Textile Mills', 'Export Houses',
                      'Retail Brands', 'E-commerce Platforms', 'Film & Television',
                      'Advertising Agencies', 'Fashion Magazines', 'Design Studios',
                      'Event Management', 'Bridal & Couture', 'Sustainable Fashion Brands'
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

        {/* Department Facilities */}
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
                    The core practical courses in the B.Sc Textile and Fashion Designing syllabus
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Basic Apparel Designing Practical', description: 'Core Practical (24UTFCP01), Semester I.' },
                  { title: 'Fiber to Fabric Science Practical', description: 'Core Practical (24UTFCP02), Semester II.' },
                  { title: "Children's Apparel Practical", description: 'Core Practical (24UTFCP03), Semester III, with the Textile Wet Processing Practical.' },
                  { title: "Women's Apparel Practical", description: 'Core Practical (24UTFCP04), Semester IV.' },
                  { title: "Surface Embellishment and Men's Apparel", description: 'Core Practicals (24UTFCP05, 24UTFCP06), Semester V.' },
                  { title: 'CAD in Garment Designing Practical', description: 'Core Practical (24UTFCP07), Semester VI, with the Fashion Portfolio Presentation.' },
                ].map((facility, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        <Palette className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 bg-brand-cream">
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
                <SectionBadge text="Why JKKN" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose JKKN for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Fashion Design?
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    { icon: <DollarSign className="w-6 h-6" />, title: 'Published Fee', description: '₹32,000 a year under the management quota for 2026-27; government quota seats follow Government norms.' },
                    { icon: <BookOpen className="w-6 h-6" />, title: 'Any +2 Group Can Join', description: 'Science, Commerce, Arts and vocational students are all eligible under the Periyar University regulation.' },
                    { icon: <Award className="w-6 h-6" />, title: 'Diploma Holders: Second Year', description: 'A three-year Fashion, Costume, Textile or Apparel diploma qualifies for direct second-year admission under the regulation.' },
                    { icon: <Ruler className="w-6 h-6" />, title: 'Practicals Every Year', description: 'Children\'s, women\'s and men\'s apparel, textile processing and CAD in Garment Designing, each as a practical course.' },
                    { icon: <Users className="w-6 h-6" />, title: 'Named Faculty', description: 'The department is led by Mr. G. Arulkumar, Head of Department, with the faculty listed below.' },
                    { icon: <GraduationCap className="w-6 h-6" />, title: 'Autonomous, Periyar University Degree', description: 'The college sets its own syllabus and examinations; the degree is awarded by Periyar University, Salem.' }
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/60 text-brand-green">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">{reason.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
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

              <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
                {[
                  { name: 'Mr. G.Arulkumar', designation: 'Head of Department', qualification: ' M.Sc.,PGDCA.,', image: '/images/programmes/tfd/Mr.-G.Arulkumar-300x199 (1).png' },
                  { name: 'Mrs. R.Sindhupriyadharshini', designation: 'Assistant Professor', qualification: 'M.Sc.,', image: '/images/programmes/tfd/Mrs.-R.Sindhupriyadharshini-300x199 (2).png' },
                  { name: 'Mrs.Keerthika', designation: 'Assistant Professor', qualification: 'M.SC (T&FD)', image: '/images/programmes/tfd/MRS.KEERTHIKA-300x199 (1).png' }
                ].map((faculty, idx) => (
                  <div key={idx} className="w-[260px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={faculty.image || '/images/faculties/placeholder-avatar.jpg'}
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
                  <SectionBadge text="FAQs" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Questions
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Common queries about B.Sc Textile and Fashion Designing (B.Sc TFD)
                  </p>
                </div>
              </RevealSection>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <RevealSection key={idx} delay={idx * 50}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <button
                        onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/20 transition-colors"
                      >
                        <span className="font-semibold text-brand-green pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeFAQ === idx ? 'max-h-96' : 'max-h-0'
                          }`}
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-brand-cream" id="admission">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Begin Your Creative Journey in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Fashion Design
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  B.Sc Textile and Fashion Designing admission for 2026-27 is open to +2 students from any group
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-textile-fashion-designing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Apply for Admission
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="/pdf/brochure.pdf" download className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                    Download Brochure
                  </a>
                </div>
                <p className="text-gray-600 mt-6">
                  <a href="/admissions/bsc-textile-fashion-designing-self-finance" className="text-brand-green underline">B.Sc Textile and Fashion Designing admission 2026-27</a>
                  {' · '}
                  <a href="/fee-structure" className="text-brand-green underline">Fee structure</a>
                  {' · '}
                  <a href="/bsc-fashion-designing-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Fashion Designing colleges in Tamil Nadu</a>
                </p>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
  );
}

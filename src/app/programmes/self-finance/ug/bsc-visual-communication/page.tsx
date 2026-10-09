'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, CheckCircle2, Clock, FileText, ChevronDown, ArrowRight, Sparkles, Camera, Video, Palette, Film, Monitor, Globe, DollarSign } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import { bscViscomFaqs } from './faqs';

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

export default function BScVisualCommunicationPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const faqs = bscViscomFaqs;

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
                  Visual Communication
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                B.Sc Viscom · a three-year Periyar University degree · Komarapalayam, Tamil Nadu
              </p>
              <p className="text-base text-gray-700 mb-6">
                Viscom full form: Visual Communication. Open to +2 students from any group.
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
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-visual-communication" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
              { icon: <Camera className="w-7 h-7" />, stat: 'Studio', title: 'Photography & Editing', desc: 'Practicals in every year' },
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
                B.Sc Visual Communication (B.Sc Viscom) is a three-year degree in graphic design, photography and videography, editing, animation, advertising and film. Year 1 covers communication, graphic design, digital drawing, storytelling, photography and image editing; Year 2 adds audio and visual editing, 2D and 3D modelling, animation and visual effects; Year 3 covers advertising and brand communication, user experience design, immersive and extended reality media, short film making, an internship and a capstone project.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                JKKN College of Arts and Science is an autonomous college affiliated to Periyar University, on NH-544 at Komarapalayam in Namakkal district, Tamil Nadu, between Salem and Erode. B.Sc Visual Communication here is a self-finance programme with an annual management-quota fee of ₹32,000 for 2026-27. Comparing Viscom colleges across the state? Read our{' '}
                <a href="/bsc-visual-communication-colleges-in-tamil-nadu" className="text-brand-green font-semibold underline">guide to B.Sc Visual Communication colleges in Tamil Nadu</a>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Practicals in every year', 'Internship in Semester V', 'Short film and capstone project', 'Photography studio and editing lab'].map((item, idx) => (
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
                  src="/images/programmes/visual/JKKN B.Sc Visual Communication.webp"
                  alt="B.Sc Visual Communication at JKKN College of Arts and Science, Komarapalayam"
                  className="w-full h-auto"
                width={2048}
                height={2048}
              />
                {/* <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Modern Facilities
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
                  Requirements for joining B.Sc Visual Communication, as set by the{' '}
                  <a href="https://www.periyaruniversity.ac.in/Documents/2021/syllabus/2021/Affiliated/ug1/B.Sc.%20Visual%20Communication.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-green underline">Periyar University regulations</a>
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Pass in the Higher Secondary (+2) examination or an equivalent', 'Or a 10+3 year Diploma', 'No minimum percentage in the regulation', 'Merit-based admission; reservation as per Tamil Nadu Government norms']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Science, Commerce, Arts and vocational groups are all eligible', 'No particular +2 subject is required', 'No portfolio or entrance test']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy', 'Income Certificate', 'Bank Details']
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
                  Comprehensive learning pathway covering graphic design, photography, video production, and digital media
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
                      'Introduction to Human Communication - 24UVCC01',
                      'Visual Arts and Aesthetics - 24UVCC02',
                      'Graphic Design & Aesthetics (Practical) - 24UVCDEP01',
                      'Digital & Drawing and Painting (Practical) - 24UVCSEFP01',
                      'Digital Storytelling and Script Writing (Practical) - 24UVCSECP01'
                    ]
                  },
                  {
                    title: 'Learning Period II',
                    subjects: [
                      'Understanding Visual Communication - 24UVCC03',
                      'Photography & Videography (Practical) - 24UVCCP04',
                      'Publication Design (Practical) - 24UVCDEP02',
                      'Image Editing and Colour Management (Practical) - 24UVCSECP02',
                      'Digital Photography - 24UVCSECP03'
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

            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 2 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period III',
                    subjects: [
                      'Multimedia Technologies & Standards - 24UVCC05',
                      'Audio & Visual Editing (Practical) - 24UVCCP06',
                      '2D & 3D Modelling (Practical) - 24UVCDEP06',
                      'Multimedia Content Packaging (Practical) - 24UVCSECP04',
                      'Design Thinking - 24UVCSEC03',
                      'EVS - 24UEVS01'
                    ]
                  },
                  {
                    title: 'Learning Period IV',
                    subjects: [
                      'Film Appreciation and Analysis - 24UVCC07',
                      'Animation and Character Design (Practical) - 24UVCCP08',
                      'Compositing and Visual Effects (Practical) - 24UVCDEP07',
                      'Script Writing and Storyboard Development (Practical) - 24UVCSEP05',
                      'Digital Skill for Employability (Practical) - 24UVCSECP6',
                      'EVS - 24UEVS01'
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

            <div className={`grid md:grid-cols-2 gap-6 ${activeYear === 3 ? '' : 'hidden'}`}>
                {[
                  {
                    title: 'Learning Period V',
                    subjects: [
                      'Advertising and Brand Communication - 24UVCCP09',
                      'User Experience Design - 24UVCCP09',
                      'Advanced 3D Texturing and Sculpting (Practical) - 24UVCCP10',
                      '3D Environment Design (Practical) - 24UVCCP12',
                      'Immersive Media Design - 24UVCDSE08',
                      'Shortfilm Making - 24UVCDEP09',
                      'Internship - 24UVCSI01'
                    ]
                  },
                  {
                    title: 'Learning Period VI',
                    subjects: [
                      'Media Culture in TamilNadu - 24UVCC13',
                      'Media Entrepreneurship - 24UVCC14',
                      'Extended Reality Design (Practical) - 24UVCCP15',
                      'Capstone Project - 24UVCDEP08',
                      'Cyber Security - 24UVCDE09',
                      'Extension Activity - 24UEX01'
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
                { icon: <Palette className="w-6 h-6 text-white" />, title: 'Design Thinking', description: 'Master systematic approaches to creative problem-solving, concept development, and visual research for effective communication solutions.' },
                { icon: <Monitor className="w-6 h-6 text-white" />, title: 'Digital Media Skills', description: 'Work on image editing, publication design, audio and visual editing, 2D and 3D modelling, and compositing and visual effects through the practical courses.' },
                { icon: <Camera className="w-6 h-6 text-white" />, title: 'Visual Storytelling', description: 'Acquire expertise in crafting compelling narratives through photography, videography, and multimedia content creation.' },
                { icon: <Video className="w-6 h-6 text-white" />, title: 'Brand Communication', description: 'Understand brand identity development, corporate communication strategies, and creating cohesive visual systems.' },
                { icon: <Film className="w-6 h-6 text-white" />, title: 'Media Production', description: 'Apply modern production techniques for video, animation, motion graphics, and interactive media creation.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Professional Practice', description: 'Present creative work through professional portfolios, client presentations, and industry-standard documentation.' }
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
                  Exciting career pathways await B.Sc Visual Communication graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Palette className="w-6 h-6" />, title: 'Graphic Designer', desc: 'Design branding, advertising, and marketing materials' },
                { icon: <Film className="w-6 h-6" />, title: 'Video Editor', desc: 'Edit videos for films, TV shows, and digital platforms' },
                { icon: <Monitor className="w-6 h-6" />, title: 'UI/UX Designer', desc: 'Design user interfaces for websites and applications' },
                { icon: <Camera className="w-6 h-6" />, title: 'Photographer', desc: 'Commercial, fashion, and editorial photography' },
                { icon: <Video className="w-6 h-6" />, title: 'Motion Graphics Artist', desc: 'Create animations and visual effects for media' },
                { icon: <Globe className="w-6 h-6" />, title: 'Digital Marketer', desc: 'Social media content and brand communication' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Film Director', desc: 'Lead creative teams in advertising agencies' },
                { icon: <Award className="w-6 h-6" />, title: 'Web Designer', desc: 'Design websites for IT companies and startups' }
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
                    'Advertising Agencies', 'Film & Television', 'Digital Marketing', 'Animation Studios',
                    'Publishing Industry', 'Corporate Communications', 'E-commerce Companies', 'Gaming Industry',
                    'News Media', 'Photography Studios', 'Event Management', 'Freelance Creative Work'
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
                  Studio and{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Practicals
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The department has a photography studio and an editing lab. These are the practical courses in the syllabus.
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Graphic Design & Aesthetics', description: 'Practical (24UVCDEP01), Semester I, with Digital Drawing and Painting.' },
                { title: 'Photography & Videography', description: 'Practical (24UVCCP04), Semester II, with Image Editing and Colour Management.' },
                { title: 'Audio & Visual Editing', description: 'Practical (24UVCCP06), Semester III, with 2D & 3D Modelling.' },
                { title: 'Animation and Character Design', description: 'Practical (24UVCCP08), Semester IV, with Compositing and Visual Effects.' },
                { title: 'Short Film Making and Internship', description: 'Semester V (24UVCDEP09, 24UVCSI01), with 3D Environment Design.' },
                { title: 'Extended Reality Design and Capstone Project', description: 'Semester VI (24UVCCP15, 24UVCDEP08).' },
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
                Why Choose Our B.Sc{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Visual Communication Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Facts a family can check before choosing: fee, eligibility, affiliation and what the syllabus covers.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Published Fee', description: '₹32,000 a year under the management quota for 2026-27; government quota seats follow Government norms.' },
                  { title: 'Any +2 Group Can Join', description: 'The Periyar University regulation asks for a pass in +2 or a 10+3 year Diploma, with no minimum percentage and no subject rule.' },
                  { title: 'Practicals Every Year', description: 'Photography and videography, editing, animation, visual effects, short film making and extended reality design, each as a practical course.' },
                  { title: 'Internship and Capstone', description: 'An internship in Semester V and a capstone project in Semester VI.' },
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

            <div className="flex justify-center">
              {[
                { name: 'Mr.B.Baranidharan', designation: 'Head of Department', qualification: 'M.SC (EM).,' }
              ].map((faculty, idx) => (
                <div key={idx} className="w-[260px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/faculties/self/visual/MR.B.BARANIDHARAN-300x199.png"
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
            </div>
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
                  Common queries about B.Sc Visual Communication (B.Sc Viscom)
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
                  Visual Communication
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                B.Sc Visual Communication admission for 2026-27 is open to +2 students from any group.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=programmes-self-finance-ug-bsc-visual-communication" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/pdf/brochure.pdf" download className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Brochure
                </a>
              </div>
              <p className="text-gray-600">
                <a href="/admissions/bsc-visual-communication-self-finance" className="text-brand-green underline">B.Sc Visual Communication admission 2026-27</a>
                {' · '}
                <a href="/fee-structure" className="text-brand-green underline">Fee structure</a>
                {' · '}
                <a href="/bsc-visual-communication-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Visual Communication colleges in Tamil Nadu</a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>


    </div>
  );
}

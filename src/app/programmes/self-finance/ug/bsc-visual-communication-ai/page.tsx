'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, CheckCircle2, Clock, FileText, ChevronDown, ArrowRight, Sparkles, Camera, Video, Palette, Film, Monitor, Globe, Cpu, Wand2, Brain, AlertCircle, MailQuestion } from 'lucide-react';

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

export default function BScVisualCommunicationAIPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Approval Pending Banner */}
      <div className="bg-amber-50 border-b-2 border-amber-300 py-3 px-4" role="alert">
        <div className="container mx-auto flex items-start sm:items-center gap-3 max-w-5xl">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-sm md:text-base text-amber-900 leading-relaxed">
            <span className="font-semibold">Proposed Programme:</span>{' '}
            This programme is currently awaiting official approval from the affiliating university. Admissions will open once approval is received. You are welcome to{' '}
            <a href="/contact" className="underline font-semibold hover:text-amber-950">register your interest</a>{' '}
            and we will keep you informed.
          </p>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12" style={{ backgroundColor: '#eaf1e2' }}>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold border border-white/90 text-gray-900">
                  <GraduationCap className="w-4 h-4 text-brand-green" />
                  Self-Finance Programme
                </span>
                <span className="inline-flex items-center gap-2 bg-amber-100 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold border border-amber-300 text-amber-900">
                  <AlertCircle className="w-4 h-4" />
                  Subject to University Approval
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                Bachelor of Science in{' '}
                <span className="text-brand-green">
                  Visual Communication (AI)
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Future-Ready Creators — Where Creativity Meets Artificial Intelligence
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
                  <Cpu className="w-5 h-5 text-brand-green" />
                  <span>AI-Integrated Learning Framework</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <MailQuestion className="w-4 h-4" />
                  Register Interest
                </a>
                <a href="#curriculum" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                  View Learning Framework
                </a>
              </div>
              <p className="text-xs text-gray-600 mt-4 italic">
                Admissions open after university approval. Register your interest to receive updates.
              </p>
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
              { icon: <Users className="w-7 h-7" />, stat: '15:1', title: 'Learners per Senior Learner', desc: 'Personalized attention' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '85%+', title: 'Placement Record', desc: 'AI-forward career pipeline' },
              { icon: <Brain className="w-7 h-7" />, stat: 'AI-First', title: 'Industry-First Focus', desc: 'Emerging-tech creative roles' },
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
                The Bachelor of Science in Visual Communication (AI) is a pioneering three-year undergraduate programme that prepares creators for the age of generative intelligence. This UGC-recognized degree fuses core visual communication craft — design, typography, photography, videography, motion graphics — with an AI layer covering prompt engineering, generative image and video tools, AI-augmented UI/UX, and machine learning fundamentals for designers.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our curriculum is built for the new creative economy where human imagination collaborates with AI systems. Learners graduate with a strong aesthetic foundation and practical mastery of industry-defining AI tools — Midjourney, Stable Diffusion, Adobe Firefly, Figma AI, Runway, Sora, Pika — positioning them for high-growth roles across advertising, OTT, product design, motion studios, and AI-first content platforms.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Generative AI Toolchain', 'AI-Augmented Creative Workflow', 'Hybrid Human-AI Studio Practice', 'Industry GPU Lab', 'Live Client AI Projects'].map((item, idx) => (
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
                  src="/images/programmes/visual/JKKN B.Sc Visual Communication.png"
                  alt="Visual Communication AI Studio"
                  className="w-full h-auto"
                width={2048}
                height={2048}
              />
                <span className="absolute top-4 right-4 bg-amber-100 border border-amber-300 text-amber-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg inline-flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  Pending Approval
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
                  Open to every curious creator — no coding or portfolio prerequisites
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Any stream — Arts, Science, or Commerce', 'No minimum stream restriction', 'Reserved category norms as per state rules']
                },
                {
                  icon: <Wand2 className="w-8 h-8 text-white" />,
                  title: 'No Entrance / Portfolio Required',
                  items: ['No entrance examination', 'No prior design portfolio needed', 'No coding / ML background expected', 'Interest in design, storytelling & tech is all that matters']
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
                  Core visual communication craft layered with industry-defining AI tools, workflows, and ML fundamentals
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
                    title: 'Learning Period I',
                    subjects: [
                      'Introduction to Human Communication',
                      'Visual Arts & Aesthetics',
                      'Design Fundamentals & Colour Theory (Practical)',
                      'Digital Drawing & Painting (Practical)',
                      'Introduction to AI for Creatives',
                      'Prompt Engineering I — Text-to-Image Foundations (Practical)'
                    ]
                  },
                  {
                    title: 'Learning Period II',
                    subjects: [
                      'Understanding Visual Communication',
                      'Photography & Videography (Practical)',
                      'Typography & Publication Design (Practical)',
                      'Image Editing & Colour Management (Practical)',
                      'Generative AI Studio I — Midjourney, Stable Diffusion, Firefly (Practical)',
                      'Digital Storytelling & Script Writing (Practical)'
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
                    title: 'Learning Period III',
                    subjects: [
                      'Multimedia Technologies & Standards',
                      'Audio & Visual Editing (Practical)',
                      '2D & 3D Modelling (Practical)',
                      'Generative AI Studio II — Advanced Prompting & ControlNet (Practical)',
                      'AI Video & Animation — Runway, Sora, Pika Labs (Practical)',
                      'Design Thinking with AI Tools',
                      'EVS'
                    ]
                  },
                  {
                    title: 'Learning Period IV',
                    subjects: [
                      'Film Appreciation & Analysis',
                      'Motion Graphics & VFX (Practical)',
                      'AI-Augmented UI/UX Design — Figma AI, Uizard (Practical)',
                      'Compositing & AI-Driven Visual Effects (Practical)',
                      'Machine Learning Fundamentals for Designers',
                      'Ethics, Copyright & Responsible AI',
                      'EVS'
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

            {activeYear === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Learning Period V',
                    subjects: [
                      'Advertising & Brand Communication with AI',
                      'AI-Augmented Product & UX Design (Practical)',
                      'Immersive Media Design — AR / VR / XR',
                      'AI Shortfilm & Music Video Production (Practical)',
                      '3D Environment Design (Practical)',
                      'Industry Internship'
                    ]
                  },
                  {
                    title: 'Learning Period VI',
                    subjects: [
                      'Media Culture in Tamil Nadu',
                      'AI Creative Entrepreneurship & Portfolio Studio',
                      'Capstone AI Project',
                      'Extended Reality (XR) Design (Practical)',
                      'AI Content Strategy & Deployment',
                      'Extension Activity'
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
                  Craft, cognition, and AI fluency — what you will walk out with
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Palette className="w-6 h-6 text-white" />, title: 'Design Thinking + AI Co-Pilot', description: 'Solve creative problems using a hybrid toolkit of classical design methods and modern AI ideation workflows.' },
                { icon: <Wand2 className="w-6 h-6 text-white" />, title: 'Prompt Craft Mastery', description: 'Engineer precise, production-ready prompts for text-to-image, text-to-video, and multimodal generation systems.' },
                { icon: <Cpu className="w-6 h-6 text-white" />, title: 'AI Tool Fluency', description: 'Hands-on mastery of Midjourney, Stable Diffusion, Firefly, Runway, Sora, Pika, Figma AI, Adobe Creative Suite, and Blender.' },
                { icon: <Camera className="w-6 h-6 text-white" />, title: 'Visual Storytelling', description: 'Create compelling narratives across photography, videography, motion, and AI-generated media.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'Ethical & Critical AI Use', description: 'Navigate copyright, authorship, bias, and responsibility when deploying generative systems in creative work.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Industry-Ready Portfolio', description: 'Graduate with a live-client portfolio, capstone AI project, and professional presentation skills for creative roles.' }
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
                  New-age AI-first roles alongside every traditional visual communication career
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Wand2 className="w-6 h-6" />, title: 'AI Content Creator', desc: 'Produce AI-generated visuals and campaigns across brands and platforms' },
                { icon: <Brain className="w-6 h-6" />, title: 'Prompt Designer', desc: 'Engineer production prompts for studios, ad agencies, and AI labs' },
                { icon: <Monitor className="w-6 h-6" />, title: 'AI-Augmented UI/UX Designer', desc: 'Design products with AI tooling for SaaS, fintech, and edtech' },
                { icon: <Film className="w-6 h-6" />, title: 'AI Motion & VFX Artist', desc: 'Generate and composite AI-driven video for OTT, ads, and film' },
                { icon: <Palette className="w-6 h-6" />, title: 'Graphic Designer', desc: 'Branding, advertising, and visual identity design' },
                { icon: <Camera className="w-6 h-6" />, title: 'Photographer / Videographer', desc: 'Commercial, editorial, fashion, and event shoots' },
                { icon: <Globe className="w-6 h-6" />, title: 'Digital / Social Media Creative', desc: 'AI-powered content for brand and performance marketing' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Art Director / Brand Designer', desc: 'Lead creative at advertising agencies and in-house brand teams' }
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
                    'AI Design Studios', 'Advertising Agencies', 'OTT & Streaming', 'Animation & VFX Studios',
                    'SaaS & Product Companies', 'Edtech & Fintech', 'Gaming Industry', 'Digital Marketing',
                    'Publishing & Media', 'AI Content Platforms', 'Film & Television', 'Freelance Creative Practice'
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
                  GPU-powered AI Design Lab alongside complete creative infrastructure
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'AI Design Lab (GPU Workstations)', description: 'High-end GPU workstations for local Stable Diffusion, ControlNet, AI video rendering, and Blender + Cinema 4D workflows. Curated pipelines for Midjourney, Firefly, Runway, Sora, and Pika.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=AI+Design+Lab' },
                { title: 'Motion Graphics & VFX Studio', description: 'Dedicated studio with green screen, motion-capture setup, high-performance compositing suites, and industry-standard After Effects, Nuke, DaVinci Resolve workflows.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Motion+%26+VFX' },
                { title: 'Photography & Videography Studio', description: 'Professional studio with DSLR + mirrorless cameras, cinema lenses, studio lighting, backdrops, and post-processing stations for commercial shoots.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Photo+%26+Video' },
                { title: 'Mac Lab & Adobe Creative Suite', description: 'Apple workstations fully licensed with the Adobe Creative Cloud — Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, XD, and Firefly.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Mac+Lab' },
                { title: 'Sound & Voice Recording Room', description: 'Acoustically treated room with professional microphones and DAW setups for voiceover, podcast, and soundtrack production.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Sound+Room' },
                { title: 'Library & Digital Asset Archive', description: 'Extensive collection of design books, journals, subscription databases, and a digital asset archive for references, stock, and AI training inspiration.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Library' },
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
                Why Choose Our B.Sc.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Visual Communication (AI) Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                An industry-first curriculum, real GPU infrastructure, and a placement network built for the AI-first creative economy.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'First-Mover AI Learning Framework', description: 'Region-first integration of Generative AI, prompt engineering, and AI-augmented design into a UGC-recognized UG degree.' },
                  { title: 'GPU Infrastructure + AI Tool Stack', description: 'Dedicated GPU workstations, licensed creative software, and subscriptions to Midjourney, Firefly, Runway, and Figma AI.' },
                  { title: 'Hybrid Faculty — Design + Tech', description: 'Faculty with industry experience across design studios, production houses, and emerging AI-creative workflows.' },
                  { title: 'Live Client & Capstone Projects', description: 'Real brand briefs, AI-driven campaigns, and a final-year capstone designed for portfolio-grade impact.' },
                  { title: 'AI-Forward Placement Network', description: 'Active partnerships with AI design studios, OTT creators, product teams, and traditional agencies alike.' }
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
                  Everything you need to know about the B.Sc. Visual Communication (AI) programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'Is this programme approved by the university? Can I apply right now?', answer: 'B.Sc. Visual Communication (AI) is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open only after approval is received. In the meantime, you can register your interest via our Contact page and we will notify you as soon as applications open — no payment or commitment is required at this stage.' },
                { question: 'What is the duration of the B.Sc. Visual Communication (AI) programme?', answer: 'The B.Sc. Visual Communication (AI) programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters with theoretical courses, practical studio sessions, AI tool labs, and hands-on industry projects.' },
                { question: 'How is this programme different from the regular B.Sc. Visual Communication?', answer: 'The AI variant blends all core visual communication subjects (design, typography, photography, videography, motion graphics) with an AI layer — Generative AI (Midjourney, Stable Diffusion, Firefly), Prompt Engineering, AI-powered video (Runway, Sora, Pika), AI-augmented UI/UX, and fundamentals of Machine Learning for designers. Graduates are prepared for emerging AI-first creative roles in addition to traditional VC careers.' },
                { question: 'What is the eligibility criteria for admission?', answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board in any stream — Arts, Science, or Commerce. No coding background or entrance test is required. Passion for design, storytelling, and emerging technology is what matters.' },
                { question: 'Do I need prior programming or ML knowledge?', answer: 'No. The programme is designed for creative learners. Machine Learning and AI concepts are taught from scratch with a designer-first lens — focusing on tools, workflows, ethical use, and prompt craft rather than heavy mathematics or coding.' },
                { question: 'What AI tools and software will I learn?', answer: 'You will work hands-on with Midjourney, Stable Diffusion, DALL-E, Adobe Firefly, Figma AI, Runway, Sora, Pika Labs, ChatGPT and Claude for creative workflows, alongside industry-standard Adobe Creative Suite (Photoshop, Illustrator, Premiere, After Effects), Figma, Blender, and Cinema 4D.' },
                { question: 'Are internships mandatory and what industries will I work in?', answer: 'Yes, a final-semester industry internship is mandatory. Our placement cell connects learners with AI-forward design studios, advertising agencies, OTT platforms, SaaS/product companies, edtech, fintech, gaming, and film production houses — giving you portfolio-ready live project experience.' },
                { question: 'What career roles can I target after graduating?', answer: 'Graduates can pursue emerging roles like AI Content Creator, Prompt Designer, AI Visual Artist, AI Motion Designer, AI-Augmented UI/UX Designer, AI Video Editor, alongside traditional careers — Graphic Designer, Art Director, Brand Designer, Photographer, Videographer, Digital Marketer, and Animator.' },
                { question: 'Can I pursue higher studies after B.Sc. Visual Communication (AI)?', answer: 'Yes. Graduates can pursue M.Sc. in Visual Communication, M.A. in Mass Communication, M.Des in Interaction/Graphic/Motion Design, MBA in Marketing or Media Management, or specialized programmes in AI, Animation, Film Studies, or Digital Media. Industry certifications in Generative AI, UI/UX, and Motion Design also add strong career leverage.' },
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
      <section className="py-16 bg-brand-cream relative overflow-hidden" id="admission">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionBadge text="Proposed Programme" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Be Among the First{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  AI Creators
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                This programme is proposed for the upcoming academic year and is currently awaiting official approval from the affiliating university. Register your interest today and we will notify you the moment admissions open.
              </p>
              <p className="text-sm text-gray-500 mb-8 italic">
                No admission fee or commitment required at this stage — this is a free interest registration.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-500 hover:from-brand-green/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-brand-green/25 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <MailQuestion className="w-5 h-5" />
                  Register Interest
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-green text-brand-green hover:text-white border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                  Talk to Admissions
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}

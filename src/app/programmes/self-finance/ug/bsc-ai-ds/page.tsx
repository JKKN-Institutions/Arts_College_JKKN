'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Code2, Database, Brain, Cpu, TrendingUp, Eye, MessageSquare, BarChart, Radio } from 'lucide-react';
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

export default function BScAIDSPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  // Faculty data (placeholder)
  const facultyMembers = [
    {
      name: "Mrs.S.Priyanga",
      designation: "Head of Department",
      education: "M.C.A., M.Phil.,",
      image: "/images/programmes/computerscience/Mrs.S.Priyanga-300x199.png"
    },
    {
      name: "Ms.K.Epshiba",
      designation: "Assistant Professor",
      education: "M.Sc.",
      image: "/images/programmes/computerscience/Ms.K.Epshiba-300x199.png"
    },
    {
      name: "Dr.A.Kamalaveni",
      designation: "Assistant Professor",
      education: "MCA., MEd., NET., SET., M.Phil., PhD., M.Sc.,NET.,",
      image: "/images/programmes/computerscience/Dr.A.Kamalaveni-300x199.png"
    },
    {
      name: "Ms.P.Subashini",
      designation: "Assistant Professor",
      education: "MCA ",
      image: "/images/faculties/placeholder-avatar.jpg"
    }
  ];

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
                  Artificial Intelligence & Data Science
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Shape the Future with AI, Machine Learning & Data Analytics
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
              { icon: <Cpu className="w-7 h-7" />, stat: 'GPU', title: 'High-Performance Labs', desc: 'NVIDIA RTX workstations' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'AI/ML career opportunities' },
              { icon: <Award className="w-7 h-7" />, stat: '₹5L', title: 'Average Package', desc: 'Competitive starting salary' },
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
                The Bachelor of Science in Artificial Intelligence and Data Science is a cutting-edge three-year undergraduate programme designed to prepare Learners for the rapidly evolving AI and data-driven industry. This UGC-recognized programme combines rigorous theoretical foundations with extensive hands-on training in machine learning, deep learning, natural language processing, computer vision, big data analytics, and cloud computing technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our industry-aligned curriculum emphasizes practical skill development through GPU-accelerated computing labs, real-world projects, and capstone implementations. Learners master Python, R, Java programming languages along with AI/ML frameworks like TensorFlow, PyTorch, and cloud platforms (AWS, Azure, GCP). Graduates emerge as industry-ready professionals capable of designing intelligent systems, building predictive models, and solving complex data challenges across healthcare, finance, e-commerce, and autonomous technologies.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Specialized AI/ML Curriculum', 'GPU Computing Labs', 'Industry Capstone Projects', 'Cloud Platform Training'].map((item, idx) => (
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
                  src="/images/programmes/computerscience/JKKN B.Sc Artificial Intelligence and Data Science.png"
                  alt="AI & Data Science Laboratory"
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
                  Requirements for joining the B.Sc AI & Data Science programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Mathematics as a compulsory subject', 'Minimum 50% aggregate marks', '45% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Science stream (PCM) preferred', 'Computer Science background advantageous', 'Commerce with Mathematics', 'Strong mathematical aptitude required']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy', 'Income Certificate']
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
                  Comprehensive AI & Data Science syllabus covering foundational to advanced topics
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
                      'General Tamil - I (24UGTA01)',
                      'General English - I (24UGEN01)',
                      'Core – I - Data Structures (24UADC01)',
                      'Core Practical - I – Computer Programming Lab (24UADCP01)',
                      'Generic Elective – I: Discrete Mathematics-I / Introduction to Linear Algebra / Optimization Techniques / Numerical Methods-I (24UMAGE3 / 24UMAGE5 / 24UMAGE7 / 24UMAGE9)',
                      'NME – I – Fundamentals of Information Technology (24UCSNM1)',
                      'SEC-I - Fundamentals of Computer Programming (24UADS01)',
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      'General Tamil – II (24UGTA02)',
                      'General English – II (24UGEN02)',
                      'Core – II - Introduction on Python (24UADC02)',
                      'Core Practical – II - Python Programming Lab (24UADCP02)',
                      'Generic Elective – II: Discrete Mathematics-II / Numerical Methods / Graph Theory and its Applications / Numerical Methods-II (24UMAGE4 / 24UMAGE6 / 24UMAGE8 / 24UMAGE10)',
                      'Generic Elective - Practical - I: Discrete Mathematics / Introduction to Linear Algebra / Optimization Techniques / Graph Theory and its Applications / Numerical Methods (24UMAGEP02 / 24UMAGEP03 / 24UMAGEP04 / 24UMAGEP05 / 24UMAGEP06)',
                      'NME - II - Advanced Excel (24UCSNM2)',
                      'SEC- II - Introduction to HTML (24UCSS02)',
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
                      'General Tamil - III (24UGTA03)',
                      'General English - III (24UGEN03)',
                      'Core - III - Foundation of Artificial Intelligence (24UADC03)',
                      'Core Practical - III: Internet Programming Lab (24UADCP03)',
                      'Generic Elective – III - Statistical Methods and its Application - I (24USTAGE1)',
                      'SEC III - Web Designing (24UCSS03)',
                      'SEC IV - Advanced Excel (24UCSS04)',
                      'Environmental Studies (24UEVS01)',
                      'Health and Wellness (24UHAWP01)',
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      'General Tamil - IV (24UGTA04)',
                      'General English - IV (24UGEN04)',
                      'Core - IV: Fundamental of Data Science (24UADC04)',
                      'Practical - IV: Database Programming Lab (24UADCP04)',
                      'Generic Elective – IV: Statistical Methods and its Application - II (24USTAGE2)',
                      'Statistical Practical (24USTAGEP01)',
                      'SEC V - PHP Programming (24UCSS05)',
                      'SEC VI - Multimedia Systems (24UCSS06)',
                      'Environmental Studies (24UEVS01)',
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
                    title: 'Semester V',
                    subjects: [
                      'Core V - Database Design and Management (24UADC05)',
                      'Core Practical VI - Data Science Lab (24UADCP05)',
                      'Core VI - Ethics of Artificial Intelligence (24UADC06)',
                      'Core VII - Project with Viva Voce (24UADCPR1)',
                      'Elective Course - V (Discipline Specific) (24UADCDSE)',
                      'Elective Course - VI (Discipline Specific) (24UADCSDSE)',
                      'Value Education - Yoga (24UVED01)',
                      'Summer Internship / Industrial Training (24UADCTR1)',
                    ]
                  },
                  {
                    title: 'Semester VI',
                    subjects: [
                      'Core VI - Natural Language Processing (24UADC06)',
                      'Core Practical VI - Practical: Programming in UI Path Automation Lab (24UADCP06)',
                      'Core VII - Robotic Process Automation (24UADC07)',
                      'Elective Course - VII (Discipline Specific) (24UADCDSE)',
                      'Elective Course - VIII (Discipline Specific) (24UADCDSE)',
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
                { icon: <Code2 className="w-6 h-6 text-white" />, title: 'Programming Mastery', description: 'Achieve proficiency in Python, R, Java, and SQL with expertise in data structures, algorithms, and object-oriented programming principles for scalable AI solutions.' },
                { icon: <TrendingUp className="w-6 h-6 text-white" />, title: 'Machine Learning Expertise', description: 'Design, implement, and optimize machine learning models using supervised, unsupervised, and reinforcement learning techniques with industry-standard frameworks like TensorFlow and PyTorch.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'Deep Learning & Neural Networks', description: 'Build and train neural networks including CNNs, RNNs, Transformers, and GANs for computer vision, NLP, and generative AI applications with real-world deployment.' },
                { icon: <BarChart className="w-6 h-6 text-white" />, title: 'Data Analytics Proficiency', description: 'Extract actionable insights from complex datasets using statistical analysis, data visualization tools like Tableau and Power BI, and data storytelling techniques.' },
                { icon: <Radio className="w-6 h-6 text-white" />, title: 'Cloud & Big Data Technologies', description: 'Deploy and manage AI/ML solutions on cloud platforms (AWS, Azure, GCP) and process large-scale data using Hadoop, Spark, and distributed computing frameworks.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Industry-Ready AI Skills', description: 'Work effectively in agile teams, communicate technical concepts to stakeholders, and deliver production-ready AI solutions following MLOps best practices and industry standards.' }
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
                  High-demand career pathways await B.Sc AI & Data Science graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Data Scientist', desc: 'Analyze complex data and build predictive models at tech giants' },
                { icon: <Brain className="w-6 h-6" />, title: 'Machine Learning Engineer', desc: 'Design and deploy machine learning systems at scale' },
                { icon: <Code2 className="w-6 h-6" />, title: 'AI Developer', desc: 'Build intelligent applications using cutting-edge AI technologies' },
                { icon: <BarChart className="w-6 h-6" />, title: 'Data Analyst', desc: 'Transform business data into actionable insights and strategies' },
                { icon: <MessageSquare className="w-6 h-6" />, title: 'NLP Engineer', desc: 'Develop language models, chatbots, and text analytics applications' },
                { icon: <Eye className="w-6 h-6" />, title: 'Computer Vision Engineer', desc: 'Build image recognition and video analytics systems' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'AI Research Scientist', desc: 'Advance AI research at labs and academic institutions' }
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
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Key Employment Sectors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'IT Services & Consulting', 'FinTech & Banking', 'Healthcare AI', 'E-Commerce Platforms',
                    'Startups & Innovation Labs', 'Manufacturing Automation', 'Media & Entertainment', 'Government & PSUs',
                    'Consulting Firms', 'Research Organizations', 'EdTech Companies', 'Autonomous Vehicles'
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
                  State-of-the-art infrastructure supporting cutting-edge AI education
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'AI & ML Computing Lab', description: 'Equipped with GPU workstations featuring NVIDIA RTX GPUs, high-RAM systems, and cloud computing access for training deep learning models and neural networks.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=AI+Computing+Lab' },
                { title: 'Data Analytics Center', description: 'Modern workstations with Tableau, Power BI, Apache Spark, and big data tools for real-time analytics, visualization projects, and business intelligence applications.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Analytics+Center' },
                { title: 'Cloud Computing Lab', description: 'Access to AWS, Microsoft Azure, and Google Cloud Platform with credits for Learners to deploy and manage AI/ML applications in production cloud environments.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Cloud+Lab' },
                { title: 'Innovation & Research Hub', description: 'Collaborative workspace for AI research projects, hackathons, and industry-sponsored challenges with mentorship from experts and research publication opportunities.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Hub' },
                { title: 'IoT & Robotics Lab', description: 'Hands-on laboratory with sensors, microcontrollers, drones, and robotic kits for developing AI-powered IoT solutions and autonomous systems with practical integration.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=IoT+Lab' },
                { title: 'Digital Library & Resources', description: 'Access to IEEE, ACM digital libraries, online courses (Coursera, edX), research papers, AI/ML documentation, and subscription to leading technical journals.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Digital+Library' }
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
                  AI & Data Science Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our specialized programme focuses 70% on AI/ML technologies, providing industry-ready skills and hands-on experience with cutting-edge tools and frameworks.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Specialized AI/ML Curriculum', description: '70% focus on AI, machine learning, deep learning, and data science technologies with industry-aligned projects and practical implementations.' },
                  { title: 'GPU-Accelerated Computing Labs', description: 'High-performance NVIDIA RTX GPU workstations for training deep neural networks, computer vision, and generative AI model development.' },
                  { title: 'Cloud Platform Integration', description: 'Hands-on training and credits for AWS, Azure, and Google Cloud Platform with real-world cloud deployment and MLOps implementation.' },
                  { title: 'Industry Partnerships & Placements', description: 'Tie-ups with 100+ companies including tech giants, AI startups, and research labs ensuring excellent placement opportunities with premium packages.' },
                  { title: 'Capstone Projects & Research', description: 'Industry-sponsored capstone projects, research paper publications, hackathons, and AI competitions for portfolio building and practical experience.' }
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
                  Meet our experienced AI & Data Science department team
                </p>
              </div>
            </RevealSection>

            <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
              {facultyMembers.map((faculty, idx) => (
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
                    <p className="text-xs text-gray-600">{faculty.education}</p>
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
                  Find answers to common queries about the B.Sc AI & Data Science programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration and structure of the B.Sc AI & Data Science programme?', answer: 'The B.Sc Artificial Intelligence and Data Science programme is a 3-year full-time undergraduate degree comprising six semesters. Each year includes two semesters with a combination of core AI/ML subjects, programming labs, practical projects, and skill-based electives. The final semester includes an industry capstone project for real-world implementation experience.' },
                { question: 'What are the higher education options after B.Sc AI & Data Science?', answer: 'After completing B.Sc AI & Data Science, Learners can pursue M.Sc in Data Science, M.Tech in AI/ML, MCA, M.Sc in Computer Science, or specialized programmes in Machine Learning and Deep Learning. Additional options include MBA in Business Analytics, integrated Ph.D programmes in Computer Science, or professional courses in cloud computing and cybersecurity. Many Learners also pursue international masters programmes at top universities.' },
                { question: 'Do I need prior coding experience to join this programme?', answer: 'No prior coding experience is required. The programme starts with foundational programming courses in Python, teaching Learners from scratch. However, having studied Computer Science in 12th grade or having basic programming knowledge can be beneficial. The curriculum is designed to take Learners from beginner to advanced level in programming and AI/ML concepts through structured learning.' },
                { question: 'What is the expected salary for B.Sc AI & Data Science graduates?', answer: 'Entry-level positions for B.Sc AI & Data Science graduates typically offer packages ranging from ₹4 to ₹8 lakhs per annum depending on skills and company. Positions at top tech companies, product startups, and data science roles often offer ₹6-12 lakhs for freshers. With experience and specialization, salaries can increase significantly, with senior AI/ML roles commanding ₹15-40 lakhs per annum. Graduates with strong portfolios and certifications often receive premium offers.' },
                { question: 'What programming languages and tools will I learn?', answer: 'The programme covers Python (primary language), R for statistical computing, Java for enterprise applications, and SQL for databases. You\'ll learn AI/ML frameworks including TensorFlow, PyTorch, Scikit-learn, Keras, and OpenCV. Big data tools like Apache Spark, Hadoop, and visualization tools like Tableau and Power BI are also covered. Cloud platforms (AWS, Azure, GCP) and version control (Git) are integral parts of the curriculum.' },
                { question: 'Are there internship and placement opportunities?', answer: 'Yes, the programme includes mandatory internship components where Learners work with IT companies, startups, and research organizations. Our dedicated placement cell has tie-ups with 100+ companies including TCS, Infosys, Wipro, Cognizant, Accenture, Tech Mahindra, HCL, and numerous AI startups. We also facilitate participation in campus recruitment drives, hackathons, and industry networking events to maximize placement opportunities.' },
                { question: 'What makes B.Sc AI & Data Science different from B.Sc Computer Science?', answer: 'While B.Sc Computer Science provides broad computing knowledge, B.Sc AI & Data Science is specifically designed for the AI and data science domain. Our curriculum has 70% focus on AI/ML, deep learning, data analytics, and related technologies. You\'ll work extensively with neural networks, NLP, computer vision, and big data tools that are not typically covered in depth in general CS programmes. The programme prepares you specifically for the booming AI industry with specialized skills and projects.' }
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
                  AI & Data Science
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Sc AI & Data Science programme and become part of the AI revolution transforming industries worldwide.
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

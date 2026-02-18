'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Cpu, Cloud, Shield, Database, Code, Brain } from 'lucide-react';
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

export default function MCAPage() {
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
                UGC & AICTE Approval Recognized Postgraduate Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Master of Computer Applications{' '}
                <span className="text-brand-green">
                  (MCA)
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Elevate Your Tech Career with Advanced Specializations
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
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited Excellence', desc: 'Top-tier quality education' },
              { icon: <Brain className="w-7 h-7" />, stat: 'AI/ML', title: 'Advanced Labs', desc: 'Cutting-edge research facilities' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Success', desc: 'Premium IT recruiters' },
              { icon: <Award className="w-7 h-7" />, stat: '₹6L+', title: 'Avg. Package', desc: 'Industry-leading salaries' },
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
                The Master of Computer Applications (MCA) is an intensive two-year postgraduate programme designed to develop advanced computing professionals with expertise in software engineering, artificial intelligence, machine learning, cloud computing, and data science. This UGC-recognized programme transforms Learners into technology leaders capable of driving digital innovation across industries.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our MCA curriculum integrates theoretical foundations with extensive hands-on experience through industry projects, research dissertations, and internship opportunities. Learners gain mastery in advanced programming paradigms, software architecture, enterprise systems, and emerging technologies while developing critical research and leadership competencies essential for senior technical roles.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'Research-Oriented Learning', 'Mandatory Industry Internship', 'AI/ML & Cloud Specialization'].map((item, idx) => (
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
                  src="/images/programmes/mca/JKKN MCA.png"
                  alt="MCA Programme Overview"
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
                  Requirements to pursue our MCA programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Educational Qualification',
                  items: ['BCA / B.Sc Computer Science / B.Sc IT', 'B.E. / B.Tech in any discipline', 'Any Bachelor\'s degree with Mathematics/Statistics/Business Mathematics at 12th level (or) at graduation level', 'Minimum 50% aggregate marks']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Academic Requirements',
                  items: ['Valid entrance exam scores (where applicable)', '45% for reserved category candidates', 'Recognized university degree']
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

      {/* Specializations */}
      <section className="py-16 bg-brand-cream" id="specializations">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Specializations" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Specialization{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Tracks
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose your path to expertise with our focused specializations
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Brain className="w-6 h-6" />, title: 'Artificial Intelligence & ML', desc: 'Deep learning, neural networks, natural language processing, and intelligent systems development' },
                { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Computing', desc: 'AWS, Azure, Google Cloud platforms, containerization, serverless architecture, and DevOps practices' },
                { icon: <Database className="w-6 h-6" />, title: 'Data Science & Analytics', desc: 'Big data technologies, statistical analysis, data visualization, and predictive modeling techniques' },
                { icon: <Shield className="w-6 h-6" />, title: 'Cybersecurity', desc: 'Ethical hacking, network security, cryptography, and enterprise security management systems' },
                { icon: <Code className="w-6 h-6" />, title: 'Full-Stack Development', desc: 'Modern frameworks, microservices architecture, RESTful APIs, and enterprise application development' },
                { icon: <Cpu className="w-6 h-6" />, title: 'Mobile & IoT Development', desc: 'Cross-platform mobile apps, embedded systems, IoT protocols, and connected device ecosystems' }
              ].map((spec, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-brand-green/20">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">{spec.title}</h3>
                    <p className="text-gray-600 text-sm">{spec.desc}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Curriculum */}
      <section className="py-16 bg-white" id="curriculum">
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
                  Comprehensive coursework designed for advanced computing expertise
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
                      { code: '24PCAC01', name: 'Core I: Discrete Mathematics' },
                      { code: '24PCAC02', name: 'Core II: Linux and Shell Programming' },
                      { code: '24PCAC03', name: 'Core III: Python Programming' },
                      { code: '24PCACP01', name: 'Core IV Lab \u2013 I: Linux and Shell Programming Lab' },
                      { code: '24PCACP02', name: 'Core V Lab \u2013 II: Python Programming Lab' },
                      { code: '24PCAE01', name: 'Elective \u2013 I: Data Engineering and Management' },
                      { code: '24PCAE02', name: 'Elective \u2013 I: Architecture and Frameworks' },
                      { code: '24PCAE03', name: 'Elective \u2013 I: Software Development Technologies' },
                      { code: '24PCAE04', name: 'Elective \u2013 I: Soft Computing' },
                      { code: '24PCAEP01', name: 'Elective \u2013 II: Data Engineering and Management Lab' },
                      { code: '24PCAEP02', name: 'Elective \u2013 II: Architecture and Frameworks Lab' },
                      { code: '24PCAEP03', name: 'Elective \u2013 II: Software Development Technologies Lab' },
                      { code: '24PCAEP04', name: 'Elective \u2013 II: Soft Computing Lab' },
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      { code: '24PCAC04', name: 'Core VI: Data Structures and Algorithms' },
                      { code: '24PCAC05', name: 'Core VII: Data Mining and Warehousing' },
                      { code: '24PCACP03', name: 'Core VIII Lab III: Data Structures and Algorithms Lab' },
                      { code: '24PCACP04', name: 'Core IX Industry Dynamics Technology \u2013 I: Data Visualisation Lab (Self-Study Course)' },
                      { code: '24PCAE05', name: 'Elective \u2013 III: Internet of Things' },
                      { code: '24PCAE06', name: 'Elective \u2013 III: Computer Vision' },
                      { code: '24PCAE07', name: 'Elective \u2013 III: Cyber Security' },
                      { code: '24PCAE08', name: 'Elective \u2013 III: Block Chain Technologies' },
                      { code: '24PCAEP05', name: 'Elective \u2013 IV: Internet of Things Lab' },
                      { code: '24PCAEP06', name: 'Elective \u2013 IV: Computer Vision Lab' },
                      { code: '24PCAEP07', name: 'Elective \u2013 IV: Cyber Security Lab' },
                      { code: '24PCAEP08', name: 'Elective \u2013 IV: Block Chain Technologies Lab' },
                      { code: '24P--ED-', name: 'Extra Disciplinary Course [EDC] \u2013 I' },
                      { code: '24PHR001', name: 'Fundamental Study of Human Rights' },
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
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-mono font-semibold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">{subject.code}</span>
                              <span className="text-sm">{subject.name}</span>
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
                      { code: '24PCAC06', name: 'Core X: Advanced Java Programming' },
                      { code: '24PCAC07', name: 'Core XI: Web Technology' },
                      { code: '24PCAC08', name: 'Core XII: Advanced Machine Learning' },
                      { code: '24PCACP05', name: 'Core XIII Lab \u2013 IV: Advanced Java Programming Lab' },
                      { code: '24PCACP06', name: 'Core XIV Lab \u2013 V: Web Technology Lab' },
                      { code: '24PCAE09', name: 'Elective \u2013 V: Social Networks' },
                      { code: '24PCAE10', name: 'Elective \u2013 V: High Performance Computing' },
                      { code: '24PCAE11', name: 'Elective \u2013 V: Digital Marketing' },
                      { code: '24PCAE12', name: 'Elective \u2013 V: Agile Methodologies' },
                      { code: '24P--ED-', name: 'Extra Disciplinary Course [EDC] \u2013 II' },
                      { code: '24PINT001', name: 'Internship / Industrial Activity' },
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      { code: '24PCAC09', name: 'Core XV: Dot Net Programming' },
                      { code: '24PCAC10', name: 'Core XVI: Big Data Analytics' },
                      { code: '24PCAPR1', name: 'Project Work and Viva-Voce' },
                      { code: '24PCAEP09', name: 'Elective \u2013 VI: Social Networks Lab' },
                      { code: '24PCAEP10', name: 'Elective \u2013 VI: High Performance Computing Lab' },
                      { code: '24PCAEP11', name: 'Elective \u2013 VI: Advanced Machine Learning Lab' },
                      { code: '24PCAEP12', name: 'Elective \u2013 VI: Dot Net Programming Lab' },
                      { code: '24PCASE01', name: 'Skill Enhancement Course \u2013 Lab: Generative AI Tools' },
                      { code: '24PEXA01', name: 'Extension Activity' },
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
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-mono font-semibold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">{subject.code}</span>
                              <span className="text-sm">{subject.name}</span>
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
      <section className="py-16 bg-brand-cream" id="outcomes">
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
                  Advanced skills and competencies you will develop through our MCA programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Code className="w-6 h-6 text-white" />, title: 'Advanced Programming Mastery', description: 'Expert-level proficiency in multiple programming paradigms, design patterns, and enterprise frameworks for building scalable software solutions.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'AI/ML Implementation', description: 'Design and deploy machine learning models, neural networks, and intelligent systems for real-world business applications and automation.' },
                { icon: <Cloud className="w-6 h-6 text-white" />, title: 'Cloud Architecture', description: 'Architect, deploy, and manage cloud-native applications using AWS, Azure, and GCP with containerization and serverless technologies.' },
                { icon: <Shield className="w-6 h-6 text-white" />, title: 'Security Engineering', description: 'Implement comprehensive cybersecurity strategies, conduct vulnerability assessments, and develop secure enterprise applications.' },
                { icon: <Database className="w-6 h-6 text-white" />, title: 'Data Science & Analytics', description: 'Extract insights from big data using advanced analytics, statistical modeling, and visualization to drive data-informed decision making.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Technical Leadership', description: 'Lead development teams, manage complex projects, and communicate technical solutions effectively to diverse stakeholders.' }
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
                  Premium career pathways await MCA graduates in the technology industry
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Brain className="w-6 h-6" />, title: 'AI/ML Engineer', desc: '₹8-25 LPA' },
                { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Architect', desc: '₹12-30 LPA' },
                { icon: <Database className="w-6 h-6" />, title: 'Data Scientist', desc: '₹10-28 LPA' },
                { icon: <Shield className="w-6 h-6" />, title: 'Security Analyst', desc: '₹7-20 LPA' },
                { icon: <Code className="w-6 h-6" />, title: 'Software Architect', desc: '₹15-35 LPA' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Technical Manager', desc: '₹12-30 LPA' },
                { icon: <Cpu className="w-6 h-6" />, title: 'DevOps Engineer', desc: '₹8-22 LPA' },
                { icon: <Globe className="w-6 h-6" />, title: 'Mobile Lead', desc: '₹10-25 LPA' }
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
                    'IT Services & Consulting', 'Product Companies', 'Fintech & Banking', 'E-commerce Giants',
                    'Healthcare Tech', 'Research & Academia', 'Government IT', 'Startups & Unicorns',
                    'MNC Tech Divisions', 'Cloud Service Providers'
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
      <section className="py-16 bg-brand-cream" id="facilities">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Infrastructure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  World-Class{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Advanced infrastructure supporting postgraduate excellence
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'AI/ML Research Lab', description: 'High-performance computing cluster with GPU workstations for deep learning, TensorFlow, and PyTorch development', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=AI+ML+Lab' },
                { title: 'Digital Resource Center', description: 'Access to IEEE, ACM digital libraries, O\'Reilly Learning, and research databases for academic excellence', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Digital+Library' },
                { title: 'Innovation & Startup Hub', description: 'Incubation center with mentorship programs, funding support, and industry collaboration opportunities', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Innovation+Hub' }
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
                Why Choose Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  MCA Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in advanced technical roles and research.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'NAAC  Accredited Excellence', description: 'Top-tier recognition ensuring quality education, superior infrastructure, and academic standards' },
                  { title: 'Industry-Driven Curriculum', description: 'Curriculum co-designed with tech industry leaders covering AI, cloud, and emerging technologies' },
                  { title: 'Premium Placements', description: '95% placement rate with average packages of 6+ LPA and top recruiters from Fortune 500 companies' },
                  { title: 'Expert Learning Facilitators', description: 'PhD-qualified and industry-experienced Learning Facilitators with active research contributions' },
                  { title: 'Global Industry Connections', description: 'MoUs with leading tech companies, international certifications, and global internship opportunities' }
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
      <section className="py-16 bg-brand-cream" id="faculty">
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
                { name: 'Dr. S. Aranganayagi', designation: 'Head of Department', qualification: 'M.C.A., Ph.D.', image: '/images/faculties/aided/Dr.-S.-Aranganayagi-240x300.png' },
                { name: 'Dr. E. Haripriya', designation: 'Assistant Professor', qualification: 'M.C.A., M.Phil., M.E., Ph.D.,NET', image: '/images/faculties/aided/Dr.-E.-Haripriya-240x300.png' },
                { name: 'Mrs. K. Veena', designation: 'Assistant Professor', qualification: 'M.C.A., M.Phil., SET', image: '/images/faculties/aided/Mrs.-K.-Veena-240x300.png' },
                { name: 'Dr. V. Sasirekha', designation: 'Assistant Professor', qualification: 'M.C.A., M.Phil., Ph.D.', image: '/images/faculties/aided/Dr.-V.-Sasirekha-240x300.png' }
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
                  Everything you need to know about our MCA programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the MCA programme?', answer: 'The MCA programme is a 2-year full-time postgraduate degree comprising four semesters. The curriculum includes advanced coursework in the first three semesters, followed by a mandatory industry internship 15days and research dissertation in the final semester. This structure ensures comprehensive theoretical knowledge along with practical industry experience.' },
                { question: 'What is the eligibility for MCA admission?', answer: 'Candidates must have completed BCA, B.Sc Computer Science, B.Sc Information Technology, B.E./B.Tech, or any bachelor\'s degree from a recognized university with Mathematics at 10+2 or graduation level. Minimum aggregate marks of 50% (45% for reserved categories) are required. Candidates with relevant programming experience are given preference during the selection process.' },
                { question: 'How is MCA different from BCA?', answer: 'MCA is a postgraduate programme offering advanced specializations, research opportunities, and deeper technical expertise. While BCA provides foundational computer application knowledge, MCA focuses on advanced topics like AI/ML, cloud architecture, and software engineering. MCA graduates typically command 40-60% higher salaries, qualify for senior technical and managerial positions, and can pursue doctoral studies or research careers.' },
                { question: 'What are the career prospects after MCA?', answer: 'MCA graduates have excellent career prospects with opportunities as Software Architects, AI/ML Engineers, Data Scientists, Cloud Solutions Architects, Technical Project Managers, and Cybersecurity Analysts. Average starting packages range from 6-10 LPA, with top performers receiving 15-25 LPA offers from leading product companies. Graduates can also pursue higher education (Ph.D.) or start technology ventures.' },
                { question: 'Is industry internship mandatory in MCA?', answer: 'Yes, a mandatory 15days industry internship is an integral part of our MCA programme. The internship provides hands-on experience in real-world projects, industry exposure, and networking opportunities. Many Learners receive pre-placement offers from their internship companies. The placement cell assists in securing internships with leading IT companies, startups, and research organizations.' },
                { question: 'Can I pursue MCA without computer science background?', answer: 'Yes, candidates from non-computer science backgrounds can pursue MCA if they have studied Mathematics at 10+2 or graduation level. The programme includes foundational courses in the first semester to bring all Learners to a common level. However, candidates with prior programming knowledge or IT-related qualifications may find the initial transition smoother. Bridge courses and additional support are provided for Learners who need extra preparation.' }
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
              <SectionBadge text="Enroll Now" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Advance Your Career with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  MCA Excellence
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our MCA programme and unlock premium career opportunities in technology leadership.
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

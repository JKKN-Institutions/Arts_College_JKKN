'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Code, Database, Cloud, Shield, Brain, Cpu } from 'lucide-react';
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

export default function MScComputerSciencePage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                Master of Science in{' '}
                <span className="text-brand-green">
                  Computer Science
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Transform Your Career with Advanced Computing Excellence
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
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited Institution', desc: 'Quality assured education' },
              { icon: <Users className="w-7 h-7" />, stat: '10:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized attention' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Industry opportunities' },
              { icon: <Award className="w-7 h-7" />, stat: '₹6L+', title: 'Average Package', desc: 'Competitive salary' },
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
                The Master of Science in Computer Science is a rigorous two-year postgraduate programme designed to provide Learners with advanced knowledge in cutting-edge technologies including Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, and Cybersecurity. This UGC-recognized programme offers an optimal blend of theoretical depth and practical application, preparing graduates for leadership roles in the technology industry.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Learners develop advanced programming skills, research aptitude, and analytical thinking through experiential learning. The curriculum integrates core computer science fundamentals with emerging technologies, industry projects, and research opportunities, equipping graduates with competencies demanded by multinational corporations, research institutions, and technology startups.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum with Latest Technologies', 'Hands-on AI/ML and Data Science Projects', 'Research-Oriented Dissertation Work', 'Expert Learning Facilitators from Industry'].map((item, idx) => (
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
                  src="/images/programmes/computerscience/JKKN M.Sc Computer Science.png"
                  alt="MSc Computer Science Laboratory"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Established Excellence
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
                  Requirements for joining the M.Sc Computer Science programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Educational Qualification',
                  items: ['B.Sc Computer Science', 'Bachelor of Computer Applications (BCA)', 'B.Sc Information Technology', 'B.E/B.Tech in CS/IT or equivalent', 'Minimum 50% aggregate marks']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Subject Requirements',
                  items: ['Programming fundamentals knowledge', 'Mathematics/Statistics background', 'Computer Science core subjects', 'Basic understanding of algorithms', 'Database concepts familiarity']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Admission Process',
                  items: ['Online/Offline application submission', 'Merit-based selection process', 'Entrance test (if applicable)', 'Personal interview round', 'Document verification']
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
                  Comprehensive coursework designed for industry relevance and research excellence
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
                      '25PCSC01: Core I - Analysis and Design of Algorithms',
                      '25PCSC02: Core II - Object Oriented Programming using C++',
                      '25PCSC03: Core III - Python Programming',
                      '25PCSCP01: Core Practical I - Algorithm and OOPS Lab',
                      '25PCSCP02: Core Practical II - Python Programming Lab',
                      '25PCSE01/02/03: Elective I (Choose any one) - Advanced Operating Systems / Advanced Software Engineering / Multimedia and its Applications',
                      '25PCSE04/05/06: Elective II (Choose any one) - Artificial Intelligence and Machine Learning / Internet of Things / Mobile Computing'
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      '25PCSC04: Core IV - Data Mining and Warehousing',
                      '25PCSC05: Core V - Advanced Java Programming',
                      '25PCSCP03: Core Practical III - Data Mining Lab using R',
                      '25PCSCP04: Core Practical IV - Advanced Java Programming Lab',
                      '25PCSE07/08/09: Elective III (Choose any one) - Critical Thinking, Design Thinking and Problem Solving / Compiler Design / Robotic Process Automation for Business',
                      '25PCSE10/11/12: Elective IV (Choose any one) - Big Data Analytics / Discrete Mathematics for Computing / Operations Research',
                      '25P______: Extra Disciplinary Course (EDC) - I',
                      '25PHR001: Fundamental Study of Human Rights'
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
                      '24PCSC06: Core VI - Digital Image Processing',
                      '24PCSC07: Core VII - Cloud Computing',
                      '24PCSC08: Core VIII - Network Security and Cryptography',
                      '24PCSC09: Core IX - Data Science & Analytics',
                      '24PCSE13/14/15: Elective V (Choose any one) - Grid Computing / Block Chain Technology / Web Services',
                      '24P______: Extra Disciplinary Course (EDC-II)',
                      '24PCSCP05: Core Practical V - Digital Image Processing Lab',
                      '24PCSCP06: Core Practical VI - Cloud Computing Lab',
                      'Internship: Industrial Activity (15 Days - First Year Even Semester Vacation)'
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      '24PCSC10: Core X - PHP Programming',
                      '24PCSC11: Core XI - Advanced DBMS',
                      '23PCSEP01/02/03: Elective VI Practical (Choose any one) - PHP Programming Lab / Advanced DBMS Lab / Web Technologies Lab',
                      '24PCSPR01: Project Work and Viva-Voce',
                      '24PCSSECP01/02: Skill Enhancement Course - Professional Competency Skill (Choose any one) - Data Visualization Lab / Soft Skill Development Lab',
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
                  Skills and competencies you will develop through this programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Code className="w-6 h-6 text-white" />, title: 'Advanced Programming', description: 'Master multiple programming paradigms, advanced algorithms, and data structures to develop efficient, scalable software solutions.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'AI & Machine Learning', description: 'Apply artificial intelligence and machine learning techniques to solve complex real-world problems and build intelligent systems.' },
                { icon: <Database className="w-6 h-6 text-white" />, title: 'Data Science Expertise', description: 'Analyze large datasets using statistical methods, visualization tools, and big data technologies to derive actionable insights.' },
                { icon: <Cloud className="w-6 h-6 text-white" />, title: 'Cloud & DevOps Skills', description: 'Design and deploy applications on cloud platforms using modern DevOps practices, containerization, and CI/CD pipelines.' },
                { icon: <Shield className="w-6 h-6 text-white" />, title: 'Cybersecurity Awareness', description: 'Understand security threats, implement protective measures, and design secure software systems following best practices.' },
                { icon: <Lightbulb className="w-6 h-6 text-white" />, title: 'Research & Innovation', description: 'Conduct independent research, publish scholarly papers, and contribute to technological innovation in computer science.' }
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
                  Diverse career pathways await M.Sc Computer Science graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Code className="w-6 h-6" />, title: 'Software Developer', desc: 'Design and build applications at top tech companies and startups' },
                { icon: <Database className="w-6 h-6" />, title: 'Data Scientist', desc: 'Extract insights from big data using advanced analytics techniques' },
                { icon: <Brain className="w-6 h-6" />, title: 'ML Engineer', desc: 'Build and deploy machine learning models at scale' },
                { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Architect', desc: 'Design and manage enterprise cloud infrastructure solutions' },
                { icon: <Shield className="w-6 h-6" />, title: 'Cybersecurity Analyst', desc: 'Protect organizations from cyber threats and vulnerabilities' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Research Scientist', desc: 'Pursue Ph.D. and academic careers at premier institutions' },
                { icon: <Cpu className="w-6 h-6" />, title: 'Database Administrator', desc: 'Manage and optimize enterprise database systems' },
                { icon: <Award className="w-6 h-6" />, title: 'AI/NLP Engineer', desc: 'Develop intelligent chatbots and language processing systems' }
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
                    'Information Technology', 'Software Development', 'Data Analytics', 'Artificial Intelligence',
                    'Cloud Services', 'Cybersecurity', 'FinTech', 'Healthcare IT',
                    'E-Commerce', 'EdTech', 'Research & Academia', 'Government IT Services'
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
                  State-of-the-art infrastructure supporting world-class education
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Advanced Computing Laboratory', description: 'High-performance workstations with latest processors, GPUs for deep learning, and cutting-edge development environments for hands-on learning.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Computer+Lab' },
                { title: 'AI & Machine Learning Lab', description: 'Dedicated laboratory with GPU clusters, TensorFlow, PyTorch frameworks, and specialized hardware for AI model training and deployment.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=AI+ML+Lab' },
                { title: 'Cloud Computing Lab', description: 'Access to AWS, Azure, and Google Cloud platforms with virtualization infrastructure for cloud-native application development and deployment.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Cloud+Lab' },
                { title: 'Networking & Security Lab', description: 'Cisco networking equipment, firewall configurations, penetration testing tools, and security monitoring systems for practical cybersecurity training.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Networking+Lab' },
                { title: 'Software Development Lab', description: 'Modern IDEs, version control systems, agile project management tools, and collaboration platforms for full-stack development projects.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Software+Lab' },
                { title: 'Digital Library & Research Center', description: 'Access to IEEE, ACM digital libraries, research databases, online courses, and dedicated spaces for collaborative research work.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Digital+Library' }
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
                Why Choose Our M.Sc{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Computer Science Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in technology careers and research.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured education meeting national standards with excellent academic reputation.' },
                  { title: 'Industry-Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, research publications, and industry experience in emerging technologies.' },
                  { title: 'Advanced Laboratory Facilities', description: 'State-of-the-art labs with GPU clusters, cloud access, and cutting-edge development tools.' },
                  { title: 'Strong Industry Partnerships', description: 'Internship opportunities with top tech companies, startups, and research institutions.' },
                  { title: 'Research & Innovation Focus', description: 'Opportunities for research publications, project presentations, and collaborative research work.' }
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
                { name: 'Dr.n.chandrakala', designation: 'Head of Department', qualification: 'M.SC.,M.PHIL.,PH.D', image: '/images/faculties/DR.N.CHANDRAKALA-300x199.png' },
                { name: 'Mrs.P.Priyanka', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.,B.Ed.,', image: '/images/faculties/Mrs.P.Priyanka-300x199.png' },
                { name: 'Mrs.P.Kowsalya', designation: 'Assistant Professor', qualification: 'M.C.A.,', image: '/images/faculties/Mrs.P.Kowsalya-300x199.png' },
                { name: 'Mrs.A.Vennila', designation: 'Assistant Professor', qualification: 'M.C.A.,', image: '/images/faculties/Mrs.A.Vennila-300x199.png' },
                { name: 'Mr.R.Pugalendhi', designation: 'Assistant Professor', qualification: 'M.Sc.,', image: '/images/faculties/MR.R.PUGALENDHI-300x199.png' },
                { name: 'Mrs.D.Savietha', designation: 'Assistant Professor', qualification: ' M.SC (CS).,', image: '/images/faculties/MRS.D.SAVIETHA-300x199.png' },
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
                <SectionBadge text="FAQ" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Questions
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Find answers to common queries about the M.Sc Computer Science programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the M.Sc Computer Science programme?', answer: 'The M.Sc Computer Science programme is a 2-year full-time postgraduate degree comprising four semesters with practical laboratory sessions, project work, and industry internship. Each academic year consists of two semesters, with comprehensive examinations conducted at the end of each semester. The programme follows a credit-based system with continuous assessment and semester-end evaluations.' },
                { question: 'What are the career opportunities after M.Sc Computer Science?', answer: 'Graduates can pursue diverse careers as Software Developers, Data Scientists, Machine Learning Engineers, Cloud Architects, Cybersecurity Analysts, AI Researchers, Database Administrators, System Architects, and DevOps Engineers. Additionally, graduates can pursue Ph.D. programmes at prestigious institutions, work in research organizations, or join academia as faculty members.' },
                { question: 'What is the eligibility criteria for M.Sc Computer Science admission?', answer: 'Candidates must have completed Bachelor\'s degree (B.Sc Computer Science, BCA, B.Sc IT, B.E/B.Tech in CS/IT, or equivalent) from a recognized university with minimum 50% aggregate marks. Basic knowledge of programming, mathematics, and computer science fundamentals is required. Some institutions may conduct entrance tests or interviews for admission.' },
                { question: 'What is the fee structure for M.Sc Computer Science?', answer: 'The fee structure varies based on the category of admission. Please contact the admission office for the current academic year\'s detailed fee structure. The college offers various scholarship opportunities for meritorious students and those from economically weaker sections. Government scholarships and educational loans are also facilitated through the institution.' },
                { question: 'Does the programme include practical projects and internships?', answer: 'Yes, the programme includes extensive practical components including laboratory sessions in every semester, mini-projects, a major dissertation project, and a mandatory industry internship. Learners work on real-world projects involving AI/ML, data science, cloud computing, and software development. The department maintains partnerships with leading tech companies for internship placements.' },
                { question: 'What specializations are available in the M.Sc Computer Science programme?', answer: 'The programme offers elective courses allowing specialization in areas including Artificial Intelligence & Machine Learning, Data Science & Big Data Analytics, Cloud Computing & DevOps, Cybersecurity & Information Security, Internet of Things (IoT), Blockchain Technology, Natural Language Processing, and Computer Vision. Learners can choose electives based on their career interests.' },
                { question: 'Are there research opportunities in the M.Sc Computer Science programme?', answer: 'Yes, the programme emphasizes research and innovation. Learners undertake a research-oriented dissertation in the final semester, have opportunities to publish papers in conferences and journals, participate in hackathons and coding competitions, and collaborate with faculty on ongoing research projects. The department encourages learners to pursue Ph.D. programmes after completion.' },
                { question: 'What is the placement support provided by the college?', answer: 'Our dedicated Placement Cell actively supports learners through campus recruitment drives with top tech companies, technical interview preparation, resume building workshops, soft skills training, and industry interaction sessions. We have partnerships with leading IT companies, startups, and multinational corporations. The placement rate for M.Sc Computer Science graduates consistently exceeds 90% with excellent salary packages.' }
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
                  Advanced Computing
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our M.Sc Computer Science programme and unlock a world of opportunities in technology, AI, and innovation.
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
                  Discover other technology programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Sc Computer Science', description: 'Undergraduate programme in computer science fundamentals and programming', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+CS' },
                { title: 'BCA', description: 'Bachelor of Computer Applications with focus on software development', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=BCA' },
                { title: 'M.Com', description: 'Postgraduate programme in commerce with IT applications', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MCom' }
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

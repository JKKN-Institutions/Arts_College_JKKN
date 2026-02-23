'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Code2, Database, Shield, Cloud, Smartphone, Brain } from 'lucide-react';
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

export default function BScComputerSciencePage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  // Faculty data
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department",
      education: "Ph.D. in Computer Science",
      image: "/images/faculties/placeholder-avatar.jpg"
    },
    {
      name: "Dr. Priya Sundaram",
      designation: "Associate Professor",
      education: "Ph.D. in Artificial Intelligence",
      image: "/images/faculties/placeholder-avatar.jpg"
    },
    {
      name: "Mr. Vikram Subramanian",
      designation: "Assistant Professor",
      education: "M.Tech., Industry Expert",
      image: "/images/faculties/placeholder-avatar.jpg"
    },
    {
      name: "Ms. Anitha Ramachandran",
      designation: "Assistant Professor",
      education: "M.Phil., Research Scholar",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-green">
                Bachelor of Science in{' '}
                <span className="text-brand-green">
                  Computer Science
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Transform Ideas into Digital Innovation
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
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Career opportunities assured' },
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
                The Bachelor of Science in Computer Science is a comprehensive three-year undergraduate programme designed to provide Learners with in-depth knowledge of programming languages, data structures, algorithms, software engineering, artificial intelligence, and database management. This UGC-recognized programme offers a perfect blend of theoretical foundations and practical hands-on experience, preparing graduates for dynamic careers in the rapidly evolving technology industry.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Learners develop computational thinking, problem-solving abilities, and industry-ready skills through project-based learning. The curriculum integrates core computer science fundamentals with emerging technologies like cloud computing, machine learning, cybersecurity, and web development, equipping graduates with competencies demanded by leading IT companies, startups, and research institutions worldwide.
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
                  src="/images/faculties/self/cs/JKKN B.Sc Computer Science.png"
                  alt="Computer Science Laboratory"
                  className="w-full h-auto"
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
                  Requirements for joining the B.Sc Computer Science programme
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
                  items: ['Science stream with PCM preferred', 'Computer Science as a subject', 'Commerce with Mathematics', 'Candidates with strong mathematical aptitude']
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
                  Comprehensive syllabus designed to build expertise in computer science and technology
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
                      '25UGTA01 - General Tamil-I',
                      '25UGEN01 - General English-I',
                      '25UCSC01 - Core - I - Python Programming',
                      '25UCSCP01 - Core Practical – I - Python Programming Lab',
                      '25UCSNM1 - NME - I - Digital Advertising and Strategies',
                      '25UCSS01 - SEC – I Computer Science with AI Acceleration – Foundations'
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      '25UGTA02 - General Tamil-II',
                      '25UGEN02 - General English-II',
                      '25UCSC02 - Core – II - Data Structure and Algorithms',
                      '25UCSCP02 - Core Practical - II - Data Structure and Algorithms Lab',
                      '25UCSNM2 - NME - II - Digital Skills for Employability',
                      '25UCSS02 - SEC – II - Computer Science with AI Acceleration Implementation'
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
                      '24UGTA03 - General Tamil – III',
                      '24UGEN03 - General English – III',
                      '24UCSC03 - Core - III – Microprocessor and Microcontroller',
                      '24UCSCP03 - Core Practical - III – Microprocessor and Microcontroller Lab',
                      '24USTAGE1 - Generic Elective – III: Statistical Methods and its Applications - I',
                      '24UCSS03 - SEC III – Web Designing',
                      '24UCSS04 - SEC IV – Advanced Excel',
                      '24UEVS01 - Environmental Studies'
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      '24UGTA04 - General Tamil – IV',
                      '24UGEN04 - General English – IV',
                      '24UCSC04 - Core-IV – Java Programming',
                      '24UCSCP04 - Core Practical – IV – Java Programming Lab',
                      '24USTAGE2 - Generic Elective – IV: Statistical Methods and its Applications - II',
                      '24UCSS05 - SEC V – PHP Programming',
                      '24UCSS06 - SEC VI – Multimedia Systems',
                      '24UEVS01 - Environmental Studies'
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
                      '23UCSCC05 - CC9 - Software Engineering',
                      '23UCSCC06 - CC10 - Database Management System',
                      '23UCSCCP05 - CC11 - Practical: Database Management System Lab',
                      'Elective Course - EC5 (Discipline Specific)',
                      'Elective Course - EC6 (Discipline Specific)',
                      '23UCSCCPR1 - CC12 - Project with Viva voce',
                      'Value Education',
                      'Internship / Industrial Training'
                    ]
                  },
                  {
                    title: 'Semester VI',
                    subjects: [
                      '23UCSCC07 - CC13 - Computer Networks',
                      '23UCSCC08 - CC14 - .NET Programming',
                      '23UCSCCP06 - CC15 - Practical: .NET Programming Lab',
                      'Elective Course – EC7 (Discipline Specific)',
                      'Elective Course – EC8 (Discipline Specific)',
                      'Skill Enhancement Course - SEC8',
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
                { icon: <Code2 className="w-6 h-6 text-white" />, title: 'Programming Proficiency', description: 'Master multiple programming languages including C, C++, Java, Python, and modern frameworks for developing robust software applications.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Problem-Solving Skills', description: 'Develop computational thinking and algorithmic problem-solving abilities to design efficient solutions for complex technical challenges.' },
                { icon: <Database className="w-6 h-6 text-white" />, title: 'Database Management', description: 'Acquire expertise in designing, implementing, and managing relational and NoSQL databases with SQL, optimization, and data integrity skills.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Web & App Development', description: 'Build responsive websites and mobile applications using modern technologies like HTML5, CSS3, JavaScript, React, and Android development.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'AI & Machine Learning', description: 'Apply artificial intelligence and machine learning algorithms to solve real-world problems including data analysis and predictive modeling.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Professional Communication', description: 'Effectively communicate technical concepts through documentation, presentations, and collaborate in agile team environments.' }
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
                  Diverse career pathways await B.Sc Computer Science graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Code2 className="w-6 h-6" />, title: 'Software Developer', desc: 'Design and develop applications for top IT companies and startups' },
                { icon: <Globe className="w-6 h-6" />, title: 'Web Developer', desc: 'Create responsive websites and web applications for global clients' },
                { icon: <Database className="w-6 h-6" />, title: 'Data Analyst', desc: 'Analyze data patterns and provide business intelligence insights' },
                { icon: <Building2 className="w-6 h-6" />, title: 'System Administrator', desc: 'Manage IT infrastructure, networks, and server systems' },
                { icon: <Shield className="w-6 h-6" />, title: 'Cybersecurity Analyst', desc: 'Protect organizations from cyber threats and security breaches' },
                { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Engineer', desc: 'Design and manage cloud-based solutions on AWS, Azure, GCP' },
                { icon: <Brain className="w-6 h-6" />, title: 'AI/ML Engineer', desc: 'Develop intelligent systems and machine learning models' },
                { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile App Developer', desc: 'Build iOS and Android applications for diverse industries' }
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
                    'Software Development', 'IT Services & Consulting', 'E-Commerce', 'Banking & FinTech',
                    'Healthcare IT', 'Cybersecurity', 'Cloud Computing', 'Data Science',
                    'Gaming Industry', 'Education & EdTech', 'Government IT', 'Startups & Innovation'
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
                { title: 'Advanced Computer Laboratory', description: 'State-of-the-art computer labs with 100+ high-performance workstations, latest software tools, and high-speed internet connectivity for hands-on programming and development work.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Computer+Lab' },
                { title: 'AI & Machine Learning Lab', description: 'Specialized laboratory equipped with GPU workstations, TensorFlow, PyTorch frameworks, and cloud computing resources for advanced AI and ML projects.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=AI+Lab' },
                { title: 'Project Development Center', description: 'Dedicated space for final year projects, internship work, and collaborative development with modern tools and infrastructure for software engineering.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Development+Center' },
                { title: 'Network & Security Lab', description: 'Advanced networking lab with routers, switches, firewalls, and cybersecurity tools for practical training in network administration and security.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Network+Lab' },
                { title: 'Digital Library Resources', description: 'Access to ACM Digital Library, IEEE Xplore, Springer, and other research databases with extensive collection of computer science books and journals.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Digital+Library' },
                { title: 'Smart Learning Studios', description: 'Technology-enabled learning studios with interactive boards, projectors, recording facilities, and collaborative learning spaces for modern education.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Smart+Classroom' }
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
                  Computer Science Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in the technology industry and beyond.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured education meeting national standards with excellent academic reputation and industry recognition.' },
                  { title: 'Industry-Aligned Curriculum', description: 'Curriculum designed in consultation with IT industry experts covering latest technologies and market demands.' },
                  { title: 'Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, industry experience, and research publications in computer science.' },
                  { title: 'Strong Placement Support', description: 'Dedicated placement cell with partnerships with leading tech companies ensuring excellent career opportunities.' },
                  { title: 'Hands-on Project Experience', description: 'Real-world project work, internships, and industry collaborations providing practical experience and portfolio building.' }
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
                { name: 'Mrs.D.Savietha', designation: 'Assistant Professor', qualification: ' M.SC (CS).,', image: '/images/faculties/MRS.D.SAVIETHA-300x199.png' }
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
                  Find answers to common queries about the B.Sc Computer Science programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the B.Sc Computer Science programme?', answer: 'The B.Sc Computer Science programme is a 3-year full-time undergraduate degree comprising six semesters. Each semester includes theoretical coursework, practical laboratory sessions, and project work. The programme follows a progressive curriculum that builds foundational skills in the first year, advances to specialized topics in the second year, and focuses on emerging technologies and capstone projects in the final year.' },
                { question: 'What are the career opportunities after B.Sc Computer Science?', answer: 'Graduates can pursue diverse careers in software development, web development, data science, artificial intelligence, cybersecurity, cloud computing, IT consulting, database administration, and mobile app development. They can work in top tech companies like TCS, Infosys, Wipro, Cognizant, startups, government IT departments, and research institutions. Career roles include Software Engineer, Data Analyst, AI/ML Engineer, Cloud Architect, Cybersecurity Analyst, and Full-Stack Developer.' },
                { question: 'What is the eligibility criteria for B.Sc Computer Science admission?', answer: 'Candidates must have completed Higher Secondary (10+2) from a recognized board with Mathematics as a compulsory subject. The minimum aggregate marks requirement is typically 50% for general category and 45% for reserved categories. Candidates from Science stream with Physics, Chemistry, Mathematics (PCM) or those with Computer Science as a subject are preferred. Commerce students with Mathematics can also apply.' },
                { question: 'What is the expected salary for B.Sc Computer Science graduates?', answer: 'Entry-level positions for B.Sc Computer Science graduates typically offer packages ranging from ₹3 to ₹6 lakhs per annum depending on the company, role, and skills. Positions in product-based companies, data science, AI/ML, and cloud computing often offer higher packages ranging from ₹6 to ₹12 lakhs. With experience and additional certifications, salaries can increase significantly, with senior positions commanding ₹15-25 lakhs per annum or more.' },
                { question: 'Can I pursue higher studies after B.Sc Computer Science?', answer: 'Yes, graduates have multiple higher education pathways. Popular options include M.Sc in Computer Science, MCA (Master of Computer Applications), MBA in IT Management, M.Tech in specialized areas, and MS programs abroad. Learners can also pursue specialized master\'s programs in Data Science, Artificial Intelligence, Cybersecurity, or Cloud Computing. The department provides guidance for competitive exams like GATE, CAT, GRE, and university entrance tests.' },
                { question: 'Does the college provide placement assistance?', answer: 'Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, technical training workshops, resume building sessions, mock interviews, and coding competitions. We have partnerships with leading IT companies including TCS, Infosys, Wipro, Cognizant, and numerous startups. The placement rate for B.Sc Computer Science graduates has consistently been above 95% with competitive packages.' },
                { question: 'What programming languages will I learn in this programme?', answer: 'The programme covers multiple programming languages including C, C++, Java, Python, JavaScript, and SQL. You will also learn modern frameworks and technologies like React, Angular, Node.js, Django, Spring Boot, Android development, and cloud platforms (AWS, Azure). The curriculum is regularly updated to include emerging technologies and industry-relevant tools.' },
                { question: 'Are internships mandatory in the B.Sc Computer Science programme?', answer: 'Yes, the programme includes a mandatory internship component or project work in the final year. Learners gain practical industry experience through internships at IT companies, startups, research labs, or by working on real-world software development projects. The department assists in securing internship placements with reputed organizations and provides guidance throughout the internship period.' }
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
                  Computer Science
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our B.Sc Computer Science programme and transform yourself into a technology professional ready to shape the digital future.
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

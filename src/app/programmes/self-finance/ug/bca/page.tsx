'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ChevronDown,
  TrendingUp,
  Code,
  Cloud,
  Database,
  Smartphone,
  Briefcase,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
  Globe,
  FileText
} from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';

// Helper function for scroll reveal animation
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Reusable reveal section component
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Glassmorphism card component
function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(11,109,65,0.08)] border border-white/60 ${hover ? 'hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(11,109,65,0.15)] hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

// Section badge component
function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-green/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-green/15 text-brand-green mb-4">
      <Sparkles className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

export default function BCAPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Faculty data
  const facultyMembers = [
    {
      name: "Dr. M. Malathi",
      designation: "Assistant Professor & HOD",
      education: "M.Sc., M.Phil., Ph.D.",
      image: "/images/faculties/self/bca/DR.M.MALATHI-300x199.png"
    },
    {
      name: "Mr. T. Sathes Kumar",
      designation: "Assistant Professor",
      education: "M.C.A., M.Phil.",
      image: "/images/faculties/self/bca/Mr.T.Sathes-kumar-300x199.png"
    },
    {
      name: "Mrs. J. Devi",
      designation: "Assistant Professor",
      education: "M.Sc., M.Phil.",
      image: "/images/faculties/self/bca/Mrs.J.Devi_-300x199.png"
    }
  ];

  // Curriculum data
  const curriculum = {
    1: {
      year: "First Year",
      semesters: [
        {
          semester: "Semester I",
          subjects: [
            { code: "24UGTA01", name: "General Tamil-I" },
            { code: "24UGEN01", name: "General English-I" },
            { code: "24UCAC01", name: "Python Programming" },
            { code: "24UCACP01", name: "Python Programming Lab" },
            { code: "24UMAGE3/6/7/9", name: "Discrete Mathematics-I / Optimization Techniques / Introduction to Linear Algebra / Numerical Methods-I" },
            { code: "24UCSNM1", name: "Fundamentals of Information Technology" },
            { code: "24UCAS01", name: "Structured Programming in C" }
          ]
        },
        {
          semester: "Semester II",
          subjects: [
            { code: "24UGTA02", name: "General Tamil-II" },
            { code: "24UGEN02", name: "General English-II" },
            { code: "24UCAC02", name: "Object Oriented Programming using C++" },
            { code: "24UCACP02", name: "C++ Programming Lab" },
            { code: "24UMAGE4/5/8/10", name: "Discrete Mathematics-II / Numerical Methods / Graph Theory and its Applications / Numerical Methods-II" },
            { code: "24UMAGEP02-06", name: "Discrete Mathematics / Numerical Methods / Optimization Techniques / Introduction to Linear Algebra / Graph Theory and its Applications" },
            { code: "24UCSNM2", name: "Advanced Excel" },
            { code: "24UCSS02", name: "Introduction to HTML" }
          ]
        }
      ]
    },
    2: {
      year: "Second Year",
      semesters: [
        {
          semester: "Semester III",
          subjects: [
            { code: "BCA301", name: "Java Programming" },
            { code: "BCA302", name: "Database Management Systems (MySQL)" },
            { code: "BCA303", name: "Operating Systems" },
            { code: "BCA304", name: "Software Engineering" },
            { code: "BCA305", name: "Object Oriented Analysis and Design" },
            { code: "BCA306", name: "Mathematics - III (Statistics & Probability)" }
          ]
        },
        {
          semester: "Semester IV",
          subjects: [
            { code: "BCA401", name: "Advanced Java (J2EE, Servlets, JSP)" },
            { code: "BCA402", name: "Python Programming" },
            { code: "BCA403", name: "Computer Graphics & Multimedia" },
            { code: "BCA404", name: "Mobile Application Development (Android)" },
            { code: "BCA405", name: "Full Stack Development - I (MERN Stack Basics)" },
            { code: "BCA406", name: "Entrepreneurship Development" }
          ]
        }
      ]
    },
    3: {
      year: "Third Year",
      semesters: [
        {
          semester: "Semester V",
          subjects: [
            { code: "23UCACC05", name: "CC9 – Operating System" },
            { code: "23UCACC06", name: "CC10 - ASP.Net Programming" },
            { code: "23UCACCP05", name: "CC11 - Practical: ASP.Net Programming Lab" },
            { code: "EC5", name: "Elective Course – EC5 (Discipline Specific)" },
            { code: "EC6", name: "Elective Course – EC6 (Discipline Specific)" },
            { code: "23UCACCPR1", name: "CC12 - Project with Viva voce" },
            { code: "VE", name: "Value Education" },
            { code: "IT", name: "Internship / Industrial Training" }
          ]
        },
        {
          semester: "Semester VI",
          subjects: [
            { code: "23UCACC07", name: "CC13 - Computer Networks" },
            { code: "23UCACC08", name: "CC14 – Data Analytics using R Programming" },
            { code: "23UCACCP06", name: "CC15 - Practical: R Programming Lab" },
            { code: "EC7", name: "Elective Course – EC7 (Discipline Specific)" },
            { code: "EC8", name: "Elective Course – EC8 (Discipline Specific)" },
            { code: "SEC8", name: "Skill Enhancement Course - SEC8" },
            { code: "EA", name: "Extension Activity" }
          ]
        }
      ]
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "What programming languages will I learn in BCA?",
      answer: "You'll learn C, C++, Java, Python, JavaScript, and modern frameworks like React, Node.js, and React Native. The curriculum covers both fundamental and advanced programming concepts."
    },
    {
      question: "What are the career prospects after BCA?",
      answer: "BCA graduates can work as Software Developers, Web Developers, Mobile App Developers, Data Analysts, Cloud Engineers, DevOps Engineers, Database Administrators, and System Analysts. Average starting packages range from ₹3.5 to 6 LPA."
    },
    {
      question: "Does the programme include cloud computing and modern technologies?",
      answer: "Yes! The curriculum includes AWS, Azure, Cloud Computing, DevOps, Docker, Kubernetes, Machine Learning, AI, Blockchain, and Full Stack Development (MERN Stack)."
    },
    {
      question: "Are there internship opportunities?",
      answer: "Yes, internships are integrated into the programme in Semester VI. Students work on live industry projects and gain hands-on experience with leading tech companies and startups."
    },
    {
      question: "What certifications can I pursue alongside BCA?",
      answer: "We support preparation for AWS Certified Cloud Practitioner, Azure Fundamentals, Oracle Java SE Certification, MongoDB Certified Developer, and Google Cloud certifications through dedicated training."
    },
    {
      question: "Is there placement support?",
      answer: "Yes, we have a dedicated placement cell with 90%+ placement record. Top recruiters include TCS, Infosys, Wipro, Cognizant, Accenture, and various startups and product-based companies."
    },
    {
      question: "Can Commerce or Arts students join BCA?",
      answer: "Yes! BCA is open to students from Science (PCM/PCB/Computer Science), Commerce, Arts, and Diploma holders. Mathematics in 10+2 is preferred but not mandatory at JKKN."
    },
    {
      question: "What is the difference between BCA and B.Sc Computer Science?",
      answer: "BCA focuses more on application development, programming, and software engineering, while B.Sc CS has a stronger theoretical foundation. BCA is more industry-oriented with practical training."
    },
    {
      question: "Will I learn mobile app development?",
      answer: "Yes! The curriculum includes Android development, React Native, and Flutter for building cross-platform mobile applications."
    },
    {
      question: "Are there hackathons and coding competitions?",
      answer: "Yes, students regularly participate in national hackathons, coding competitions, and tech fests. We also organize internal hackathons and project showcases."
    }
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12" style={{ backgroundColor: '#eaf1e2' }}>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <GraduationCap className="w-4 h-4 text-brand-green" />
                Self-Finance Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Bachelor of{' '}
                <span className="text-brand-green">
                  Computer Applications
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Build a Successful Career in Software Development & Technology
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>3 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <BookOpen className="w-5 h-5 text-brand-green" />
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

      {/* Quick Stats Section */}
      {/* <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">
                    <CountUp end={70} duration={2000} />+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">
                    <CountUp end={90} duration={2000} />%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Placement Record</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">
                    <CountUp end={6} duration={2000} />+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Specialized Labs</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">
                    <CountUp end={100} duration={2000} />+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Industry Partners</div>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section> */}

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
                The Bachelor of Computer Applications (BCA) is a comprehensive three-year undergraduate programme designed to prepare learners for exciting careers in software development, cloud computing, and emerging technologies. This programme offers an in-depth exploration of programming languages, web development, mobile applications, database management, and modern technologies like AI/ML, cloud computing, and DevOps.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that learners receive holistic development through experiential learning, industry exposure, and skill-based training. The curriculum integrates theoretical foundations with practical applications, preparing graduates for diverse career pathways in IT services, software development, and technology innovation with hands-on experience through 10+ live projects and industry internships.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'AWS & Azure Certified Labs', 'Expert Learning Facilitators', 'Live Projects & Internships'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="lg:col-span-2" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/programmes/bca/JKKN BCA.png"
                  alt="BCA Computer Lab"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                {/* <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1954
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
                  Requirements for joining the BCA programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Higher Secondary (10+2) from recognized board', 'Science/Commerce/Arts stream eligible', 'Minimum 50% aggregate marks', '45% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Streams',
                  items: ['Science (PCM/PCB/CS) preferred', 'Commerce with Mathematics', 'Arts with basic computer literacy', 'Diploma holders eligible for lateral entry']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy']
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

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-brand-cream to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Academic Structure" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Comprehensive Curriculum
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A carefully designed 3-year programme with modern technology stack covering programming, development, cloud computing, and emerging technologies.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              {/* Year Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[1, 2, 3].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all ${activeYear === year
                      ? 'bg-brand-green text-white shadow-xl shadow-brand-green/25 scale-105'
                      : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
                      }`}
                  >
                    {curriculum[year as keyof typeof curriculum].year}
                  </button>
                ))}
              </div>

              {/* Semesters Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {curriculum[activeYear as keyof typeof curriculum].semesters.map((sem, idx) => (
                  <GlassCard key={idx} className="p-8" hover={false}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-green">{sem.semester}</h3>
                    </div>
                    <div className="space-y-3">
                      {sem.subjects.map((subject, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors border border-white/60"
                        >
                          <div className="w-6 h-6 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-brand-green">{subIdx + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-brand-green/70 mb-1">{subject.code}</div>
                            <div className="text-sm font-semibold text-gray-700 leading-snug">{subject.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="What You'll Gain" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Learning Outcomes
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full"></div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Outcome 1 */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Programming Mastery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Proficiency in C, C++, Java, Python, JavaScript, and modern frameworks like React and Node.js.
                  </p>
                </GlassCard>

                {/* Outcome 2 */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Full Stack Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ability to build complete web applications using MERN stack (MongoDB, Express, React, Node.js).
                  </p>
                </GlassCard>

                {/* Outcome 3 */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Cloud Computing Skills</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hands-on experience with AWS, Azure, serverless architecture, Docker, and Kubernetes.
                  </p>
                </GlassCard>

                {/* Outcome 4 */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Mobile App Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create native and cross-platform mobile applications using Android, React Native, and Flutter.
                  </p>
                </GlassCard>

                {/* Outcome 5 */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Database Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Design and manage databases using MySQL, MongoDB, and understanding of Big Data technologies.
                  </p>
                </GlassCard>

                {/* Outcome 6 */}
                <GlassCard className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-3">Problem Solving & Logic</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strong analytical thinking, data structures, algorithms, and software engineering principles.
                  </p>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-brand-cream via-emerald-50/30 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Future Prospects" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Career Opportunities
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                BCA graduates have diverse career paths in software development, IT services, and emerging technology sectors with competitive packages (₹3.5-6 LPA average starting).
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Career 1 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Software Developer</h3>
                  <p className="text-sm text-gray-600">
                    Design and develop software applications for various platforms and industries.
                  </p>
                </GlassCard>

                {/* Career 2 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Web Developer</h3>
                  <p className="text-sm text-gray-600">
                    Create dynamic websites and web applications using modern frameworks.
                  </p>
                </GlassCard>

                {/* Career 3 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Mobile App Developer</h3>
                  <p className="text-sm text-gray-600">
                    Build native and cross-platform mobile applications for iOS and Android.
                  </p>
                </GlassCard>

                {/* Career 4 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Data Analyst</h3>
                  <p className="text-sm text-gray-600">
                    Analyze data trends and provide insights using statistical tools and visualization.
                  </p>
                </GlassCard>

                {/* Career 5 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Cloud Engineer</h3>
                  <p className="text-sm text-gray-600">
                    Design and manage cloud infrastructure on AWS, Azure, or Google Cloud.
                  </p>
                </GlassCard>

                {/* Career 6 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">DevOps Engineer</h3>
                  <p className="text-sm text-gray-600">
                    Automate deployment pipelines and manage CI/CD infrastructure.
                  </p>
                </GlassCard>

                {/* Career 7 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Database Administrator</h3>
                  <p className="text-sm text-gray-600">
                    Manage and maintain database systems ensuring data security and performance.
                  </p>
                </GlassCard>

                {/* Career 8 */}
                <GlassCard className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">System Analyst</h3>
                  <p className="text-sm text-gray-600">
                    Analyze business requirements and design technical solutions.
                  </p>
                </GlassCard>
              </div>

              {/* Top Recruiters */}
              <GlassCard className="p-8" hover={false}>
                <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">Top Recruiting Companies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="text-gray-700 font-semibold">TCS</div>
                  <div className="text-gray-700 font-semibold">Infosys</div>
                  <div className="text-gray-700 font-semibold">Wipro</div>
                  <div className="text-gray-700 font-semibold">Cognizant</div>
                  <div className="text-gray-700 font-semibold">Accenture</div>
                  <div className="text-gray-700 font-semibold">HCL Technologies</div>
                  <div className="text-gray-700 font-semibold">Tech Mahindra</div>
                  <div className="text-gray-700 font-semibold">Capgemini</div>
                </div>
              </GlassCard>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Infrastructure" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                State-of-the-Art Facilities
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full"></div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Facility 1 */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Computer Lab</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Advanced Computing Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      100+ high-performance workstations with latest hardware, dual monitors, licensed software (VS Code, IntelliJ IDEA, PyCharm), and 24/7 internet access.
                    </p>
                  </div>
                </GlassCard>

                {/* Facility 2 */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Cloud Lab</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Cloud Computing Lab
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      AWS Academy certified lab with Azure student access, hands-on training in Docker, Kubernetes, serverless computing, and cloud deployment.
                    </p>
                  </div>
                </GlassCard>

                {/* Facility 3 */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Software Library</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Software & Dev Tools Access
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      GitHub Education Pack, JetBrains licenses, Microsoft Azure Dev Tools for Teaching, and access to premium learning platforms.
                    </p>
                  </div>
                </GlassCard>

                {/* Facility 4 */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Innovation Center</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Innovation & Incubation Hub
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated space for hackathons, project incubation, startup ideation, maker activities, and collaborative coding sessions.
                    </p>
                  </div>
                </GlassCard>

                {/* Facility 5 */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-white/60 backdrop-blur-sm p-8 text-center border-b-4 border-brand-green">
                    <h3 className="text-2xl font-bold text-brand-green">Tech Seminars</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Industry Expert Sessions
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Regular guest lectures by software architects, tech meetups, coding competitions, and workshops on emerging technologies.
                    </p>
                  </div>
                </GlassCard>

                {/* Facility 6 */}
                <GlassCard className="overflow-hidden" hover={false}>
                  <div className="bg-gradient-to-br from-brand-green to-emerald-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Placement Cell</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-brand-green mb-3">
                      Career Support & Placement
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated placement cell with job portal access, mock technical interviews, resume building, coding test preparation, and company connections.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cream via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image/Graphic Box */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/programmes/Campus Life.png"
                    alt="Campus Life at JKKN"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Side - Content */}
                <div>
                  <SectionBadge text="Our Advantages" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
                    Why Choose Our BCA Programme?
                  </h2>
                  <div className="w-16 h-1 bg-brand-green rounded-full mb-8"></div>

                  <div className="space-y-6">
                    {/* Reason 1 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          70+ Years of Academic Excellence
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Part of J.K.K. Nattraja Educational Institutions with proven legacy in progressive education and technology training since 1954.
                        </p>
                      </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Industry-Aligned Curriculum
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Curriculum designed with input from software industry experts, covering latest technologies and market-demanded skills.
                        </p>
                      </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Expert Faculty & Mentors
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from faculty with industry experience, research scholars, and visiting software architects from leading tech companies.
                        </p>
                      </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Strong Placement Record
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          90%+ placement rate with top IT companies including TCS, Infosys, Wipro, Cognizant, startups, and product-based companies.
                        </p>
                      </div>
                    </div>

                    {/* Reason 5 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Hands-on Project Experience
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Build 10+ live projects, participate in national hackathons, contribute to open-source, and develop a professional GitHub portfolio.
                        </p>
                      </div>
                    </div>

                    {/* Reason 6 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">
                          Industry Certifications
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Support for AWS, Azure, Oracle Java, MongoDB, Google Cloud certifications through training programs and exam preparation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Our Team" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Expert Faculty Members
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Learn from industry-certified professionals with expertise in software development, cloud computing, and emerging technologies.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-7xl mx-auto">
              <Marquee pauseOnHover className="[--duration:40s]">
                {facultyMembers.map((faculty, index) => (
                  <GlassCard key={index} className="w-80 mx-4">
                    <div className="p-6">
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-green/20">
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-brand-green mb-2">{faculty.name}</h3>
                        <p className="text-sm font-semibold text-gray-600 mb-2">{faculty.designation}</p>
                        <p className="text-xs text-gray-500">{faculty.education}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </Marquee>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-brand-cream to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionBadge text="Got Questions?" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 mx-auto rounded-full"></div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <GlassCard key={index} className="overflow-hidden" hover={false}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/60 transition-colors"
                    aria-expanded={activeFAQ === index}
                  >
                    <h3 className="font-semibold text-brand-green pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform ${activeFAQ === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-96' : 'max-h-0'
                      }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <RevealSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-3xl font-bold text-brand-green mb-6">
                Ready to Start Your Software Development Journey?
              </h2>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Join JKKN's BCA programme and build a successful career in software development, cloud computing, and technology innovation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="group bg-white hover:bg-brand-cream text-brand-green px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="bg-transparent   bg-white hover:bg-brand-cream text-brand-green px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                  Download Brochure
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

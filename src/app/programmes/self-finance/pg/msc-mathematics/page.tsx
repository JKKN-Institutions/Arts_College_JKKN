'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Calculator, Brain, Code, TrendingUp, Database, Lock } from 'lucide-react';
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

export default function MScMathematicsPage() {
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
                UGC Recognized Postgraduate Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Master of Science in{' '}
                <span className="text-brand-green">
                  Mathematics
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Master the Language of the Universe Through Advanced Mathematical Sciences
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
              { icon: <Award className="w-7 h-7" />, stat: 'NET/SET', title: 'Exam Preparation', desc: 'Competitive exam coaching' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement Record', desc: 'Career opportunities assured' },
              { icon: <Brain className="w-7 h-7" />, stat: 'Research', title: 'Oriented Learning', desc: 'Dissertation & publications' },
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
                The Master of Science in Mathematics is a rigorous two-year postgraduate programme designed to provide Learners with advanced knowledge in pure and applied mathematics. This UGC-recognized programme offers comprehensive training in mathematical analysis, abstract algebra, topology, differential equations, and computational methods, preparing graduates for careers in research, academia, data science, and quantitative fields.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Learners develop deep analytical thinking, rigorous proof-writing abilities, and problem-solving expertise through research-oriented learning. The curriculum integrates classical mathematical theories with modern computational techniques and applications in emerging fields such as machine learning, cryptography, and financial mathematics, equipping graduates with skills demanded by research institutions, technology companies, and financial organizations.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Advanced Pure & Applied Mathematics', 'Research Dissertation Project', 'NET/SET/GATE Exam Coaching', 'Computational Mathematics Lab'].map((item, idx) => (
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
                  src="/images/programmes/bsc-maths/JKKN M.Sc Mathematics.png"
                  alt="MSc Mathematics Learning"
                  className="w-full h-auto"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Since 1985
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
                  Requirements for joining the M.Sc Mathematics programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Bachelor\'s Degree (B.Sc) in Mathematics', 'B.Sc with Mathematics as major subject', 'Equivalent degree recognized by UGC', 'B.A/B.Sc with Statistics/Computer Science (with Mathematics papers)']
                },
                {
                  icon: <Award className="w-8 h-8 text-white" />,
                  title: 'Minimum Marks Requirement',
                  items: ['50% aggregate in qualifying degree (General)', '45% aggregate for SC/ST/OBC candidates', 'Relaxation as per government norms', 'Preference for candidates with research aptitude']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Admission Process',
                  items: ['Online application through college portal', 'Merit-based selection on UG marks', 'Entrance test (where applicable)', 'Personal interview for final selection']
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
                  Comprehensive coursework designed to build advanced mathematical expertise
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
                      'Algebraic Structure',
                      'Real Analysis - I',
                      'Ordinary Differential Equation',
                      'Number Theory and Cryptography',
                      'Graph Theory and Applications',
                      'Formal Languages and Automata Theory',
                      'Programming in C++ and Numerical Methods',
                      'Lie Groups and Lie Algebras',
                      'Mathematical Programming',
                      'Fuzzy Sets and Their Applications'
                    ]
                  },
                  {
                    title: 'Semester II',
                    subjects: [
                      'Advanced Algebra',
                      'Real Analysis - II',
                      'Partial Differential Equation',
                      'Algebraic Topology',
                      'Mathematical Statistics',
                      'Statistical Data Analysis using R Programming',
                      'Tensor Analysis and Relativity',
                      'Wavelets',
                      'Modelling and Simulation with Excel',
                      'Machine Learning and Artificial Intelligence',
                      'Neural Networks',
                      'Fundamental Study of Human Rights',
                      'Mathematics for Life Sciences',
                      'Mathematics for Social Sciences',
                      'Statistics for Life and Social Sciences',
                      'Game Theory and Strategy',
                      'History of Mathematics'
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
                      'Complex Analysis',
                      'Probability Theory',
                      'Topology',
                      'Machine Learning',
                      'Algebraic Number Theory',
                      'Fluid Dynamics',
                      'Stochastic Processes',
                      'Mathematical Python',
                      'Internship'
                    ]
                  },
                  {
                    title: 'Semester IV',
                    subjects: [
                      'Functional Analysis',
                      'Differential Geometry',
                      'Algebraic Geometry',
                      'Financial Mathematics',
                      'Resource Management Techniques',
                      'Mathematical Python',
                      'Core Project with Viva-Voce'
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
                  Advanced skills and competencies you will develop through this programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Calculator className="w-6 h-6 text-white" />, title: 'Advanced Mathematical Reasoning', description: 'Develop rigorous proof-writing skills, construct and analyze complex mathematical arguments, and apply abstract reasoning to solve theoretical and applied problems.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'Research Competence', description: 'Acquire ability to identify research problems, conduct literature surveys, formulate hypotheses, and contribute original findings to mathematical knowledge through dissertation work.' },
                { icon: <Code className="w-6 h-6 text-white" />, title: 'Computational Proficiency', description: 'Master mathematical software tools including MATLAB, Python, LaTeX, and specialized packages for numerical computation, symbolic mathematics, and data visualization.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Applied Problem Solving', description: 'Apply mathematical modeling techniques to real-world problems in physics, engineering, finance, biology, and data science, bridging theory with practical applications.' },
                { icon: <GraduationCap className="w-6 h-6 text-white" />, title: 'Teaching Readiness', description: 'Develop pedagogical skills to effectively communicate mathematical concepts, prepare for teaching positions, and clear competitive examinations like NET/SET/GATE.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Interdisciplinary Collaboration', description: 'Work effectively in multidisciplinary teams, communicate mathematical findings to diverse audiences, and apply quantitative methods across various domains.' }
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
                  Diverse career pathways await M.Sc Mathematics graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Academic Career', desc: 'Teaching positions in colleges and universities' },
                { icon: <Brain className="w-6 h-6" />, title: 'Research Scientist', desc: 'Research institutions like TIFR, ISI, IISC' },
                { icon: <Database className="w-6 h-6" />, title: 'Data Scientist', desc: 'Analytics roles in tech companies' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Quantitative Analyst', desc: 'Financial modeling in banks & firms' },
                { icon: <Lock className="w-6 h-6" />, title: 'Cryptographer', desc: 'Security & encryption specialists' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Government Services', desc: 'UPSC, SSC, State PSC positions' },
                { icon: <Code className="w-6 h-6" />, title: 'Software Developer', desc: 'Algorithm & computational roles' },
                { icon: <Award className="w-6 h-6" />, title: 'Actuarial Analyst', desc: 'Insurance & risk assessment' }
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
                    'Research Institutions', 'Banks & Finance', 'IT & Software', 'Data Analytics',
                    'Insurance Companies', 'Government Organizations', 'Defense Research', 'Space Research (ISRO)',
                    'Educational Institutions', 'Consulting Firms', 'Machine Learning', 'Fintech Companies'
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
                  State-of-the-art infrastructure supporting mathematical research and learning
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Computational Mathematics Lab', description: 'Equipped with MATLAB, Mathematica, Python, R, LaTeX, and specialized mathematical software for numerical computations and research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Computer+Lab' },
                { title: 'Mathematics Library', description: 'Extensive collection of mathematics textbooks, research journals, digital resources, and access to online databases like MathSciNet and JSTOR.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Digital+Library' },
                { title: 'Seminar Hall', description: 'Modern seminar facility for mathematical presentations, guest lectures, workshops, and academic conferences with smart board technology.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Seminar+Hall' },
                { title: 'Research Center', description: 'Dedicated space for doctoral research, collaborative projects, and advanced mathematical investigations with high-performance computing resources.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Center' },
                { title: 'Smart Learning Studios', description: 'Technology-enabled learning studios with interactive displays, digital whiteboards, and multimedia capabilities for enhanced mathematical instruction.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Smart+Classroom' },
                { title: 'Discussion Rooms', description: 'Dedicated spaces for group studies, peer learning, problem-solving sessions, and collaborative research activities among Learners.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Discussion+Room' }
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
                  Mathematics Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for success in research, academia, and industry.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'UGC Recognized & NAAC Accredited', description: 'Quality-assured postgraduate education meeting national standards with excellent academic reputation.' },
                  { title: 'Research-Oriented Curriculum', description: 'Advanced coursework integrating pure mathematics with computational methods and real-world applications.' },
                  { title: 'Expert Learning Facilitators', description: 'Highly qualified faculty with doctoral degrees, research publications, and expertise in specialized areas.' },
                  { title: 'Computational Excellence', description: 'State-of-the-art labs equipped with MATLAB, Python, and advanced mathematical software for hands-on learning.' },
                  { title: 'Competitive Exam Preparation', description: 'Specialized coaching and guidance for NET/SET/GATE examinations and civil services.' }
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
                { name: 'Mrs.R.Poongodi', designation: 'HOD & Assistant Professor', qualification: 'M.Sc ., B.Ed', image: '/images/faculties/self/maths/Mrs.R.Poongodi-300x199.png' },
                { name: 'Mr.K.Murugan', designation: 'Assistant Professor', qualification: 'M.Sc ., B.Ed', image: '/images/faculties/self/maths/Mr.K.Murugan-300x199.png' },
                { name: 'Mrs.N.Sathya', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil', image: '/images/faculties/self/maths/Mrs.N.Sathya-300x199.png' }
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
                  Find answers to common queries about the M.Sc Mathematics programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration and structure of the M.Sc Mathematics programme?', answer: 'The M.Sc Mathematics programme is a 2-year full-time postgraduate degree comprising four semesters. The curriculum includes core courses in advanced mathematics, elective specializations, practical laboratory sessions, seminars, and a mandatory dissertation project in the final semester.' },
                { question: 'What are the career opportunities after M.Sc Mathematics?', answer: 'M.Sc Mathematics graduates have diverse career options including academic positions in colleges and universities, research scientist roles in premier institutions (TIFR, ISI, IISC), data scientist positions in technology companies, quantitative analyst roles in banking and finance, actuarial careers in insurance, software development, cryptography, government services through UPSC/SSC, and further research through PhD programmes.' },
                { question: 'What is the eligibility criteria for M.Sc Mathematics admission?', answer: 'Candidates must have completed Bachelor\'s Degree (B.Sc) in Mathematics or equivalent from a recognized university with minimum 50% aggregate marks for general category. Relaxation in marks as per government norms for reserved categories. Students with Mathematics as a major subject in their undergraduate degree are eligible to apply.' },
                { question: 'Does the programme offer specialization options?', answer: 'The programme offers elective courses allowing specialization in areas such as Pure Mathematics (Algebra, Analysis, Topology), Applied Mathematics (Differential Equations, Mathematical Modeling), Computational Mathematics (Numerical Methods, Algorithms), Discrete Mathematics (Graph Theory, Combinatorics), and emerging fields like Financial Mathematics, Cryptography, and Data Science.' },
                { question: 'Does M.Sc Mathematics prepare for competitive examinations?', answer: 'Yes, the curriculum is designed to prepare Learners for competitive examinations including NET/SET, GATE, UPSC, and other government services. Special coaching and guidance are provided for these examinations. Many of our alumni have successfully cleared these examinations and secured prestigious positions.' },
                { question: 'What is the expected salary for M.Sc Mathematics graduates?', answer: 'Entry-level positions for M.Sc Mathematics graduates typically offer packages ranging from ₹4 to ₹8 lakhs per annum depending on the sector and role. Positions in data science, quantitative finance, and software development often command higher packages (₹8-15 lakhs). Academic positions with NET qualification and government services offer competitive salaries with benefits. With experience and additional qualifications, senior positions can command ₹15-30 lakhs per annum.' },
                { question: 'Can I pursue PhD after completing M.Sc Mathematics?', answer: 'Absolutely! M.Sc Mathematics is the standard pathway to doctoral research. Graduates can apply for PhD programmes in mathematics at universities in India (IITs, IISc, Central Universities, IISERs) and abroad. The programme prepares Learners for entrance examinations like CSIR-NET, GATE, and institution-specific tests. Many of our alumni have successfully pursued doctoral research at prestigious institutions.' },
                { question: 'What research opportunities are available during the programme?', answer: 'The programme includes a mandatory dissertation project in the final semester where Learners work on original research problems under faculty guidance. Additionally, students can participate in departmental seminars, present papers at conferences, and collaborate on faculty research projects. The department also facilitates internships at research institutions like TIFR, IMSc, and ISI.' }
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
                  Advanced Mathematics
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our M.Sc Mathematics programme and unlock the power of mathematical reasoning for a rewarding career in research, academia, or industry.
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
                  Discover other science programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Sc Mathematics', description: 'Undergraduate programme in pure and applied mathematics', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Mathematics' },
                { title: 'M.Sc Statistics', description: 'Advanced studies in statistical theory and data analytics', duration: '2 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=MSc+Statistics' },
                { title: 'M.Sc Computer Science', description: 'Postgraduate programme in computational sciences and algorithms', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MSc+CS' }
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

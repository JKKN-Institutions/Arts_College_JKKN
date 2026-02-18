'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Cpu, Database, Brain, BarChart3, Cloud, Code } from 'lucide-react';
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
                UGC Recognized Postgraduate Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Master of Science in{' '}
                <span className="text-brand-green">
                  Computer Science
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Specialization in Data Analytics & Machine Learning
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
              { icon: <Users className="w-7 h-7" />, stat: '12:1', title: 'Learner-Facilitator Ratio', desc: 'Personalized mentorship' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '95%+', title: 'Placement Record', desc: 'Industry-ready graduates' },
              { icon: <Award className="w-7 h-7" />, stat: '₹8L', title: 'Average Package', desc: 'Data science roles' },
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
                The Master of Science in Computer Science with specialization in Data Analytics is a comprehensive two-year postgraduate programme designed to transform Learners into skilled data professionals. This UGC-recognized programme offers an intensive blend of advanced computer science concepts, statistical analysis, machine learning algorithms, and cutting-edge big data technologies, preparing graduates for leadership roles in the rapidly evolving field of data science.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy emphasizes experiential learning through industry projects, research dissertations, and hands-on work with real-world datasets. The curriculum integrates theoretical foundations with practical applications using Python, R, SQL, TensorFlow, and cloud platforms like AWS and Azure, equipping graduates with the analytical skills demanded by leading technology companies, consulting firms, and research organizations worldwide.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Industry-Aligned Curriculum', 'Expert Learning Facilitators', 'GPU-Powered Lab Infrastructure', 'Industry Internship Programme'].map((item, idx) => (
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
                  alt="Data Analytics Lab"
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
                  Requirements for joining the M.Sc Computer Science (Data Analytics) programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['Bachelor\'s degree from recognized university', 'B.Sc Computer Science / IT / BCA', 'Minimum 55% aggregate marks', '50% for reserved categories']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Accepted Disciplines',
                  items: ['B.Sc Computer Science / IT', 'BCA / B.Sc Mathematics', 'B.Sc Statistics / Physics', 'B.E/B.Tech (Any branch with Mathematics)']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['UG Degree Certificate & Mark Sheets', 'Transfer Certificate', 'Migration Certificate', 'Community Certificate', 'Passport Size Photographs', 'Aadhaar Card Copy']
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
                  Comprehensive syllabus designed to build expertise in data analytics and machine learning
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
                    subjects: ['Advanced Data Structures & Algorithms', 'Statistical Methods for Data Analytics', 'Python for Data Science', 'Database Management Systems', 'Practical: Python & Statistics Lab', 'Research Methodology']
                  },
                  {
                    title: 'Semester II',
                    subjects: ['Machine Learning Fundamentals', 'Big Data Technologies', 'Data Visualization & Business Intelligence', 'R Programming for Analytics', 'Practical: ML & Big Data Lab', 'Soft Skills & Professional Communication']
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
                    subjects: ['Deep Learning & Neural Networks', 'Natural Language Processing', 'Cloud Computing & Data Engineering', 'Time Series Analysis & Forecasting', 'Practical: Deep Learning Lab', 'Elective: Computer Vision / Reinforcement Learning']
                  },
                  {
                    title: 'Semester IV',
                    subjects: ['Advanced Analytics & AI Applications', 'Data Ethics & Privacy', 'Elective: IoT Analytics / Healthcare Analytics', 'Industry Internship', 'Dissertation & Research Project', 'Comprehensive Viva Voce']
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
                { icon: <Database className="w-6 h-6 text-white" />, title: 'Data Engineering Expertise', description: 'Design and implement robust data pipelines, ETL processes, and data warehousing solutions using modern big data technologies like Hadoop, Spark, and cloud platforms.' },
                { icon: <Brain className="w-6 h-6 text-white" />, title: 'Machine Learning Proficiency', description: 'Build, train, and deploy machine learning models for classification, regression, clustering, and predictive analytics using scikit-learn, TensorFlow, and PyTorch frameworks.' },
                { icon: <BarChart3 className="w-6 h-6 text-white" />, title: 'Statistical Analysis Skills', description: 'Apply advanced statistical methods, hypothesis testing, regression analysis, and probability theory to derive actionable insights from complex datasets.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Data Visualization Mastery', description: 'Create compelling visualizations and interactive dashboards using Tableau, Power BI, Matplotlib, and D3.js to communicate insights effectively to stakeholders.' },
                { icon: <Cpu className="w-6 h-6 text-white" />, title: 'Deep Learning Capabilities', description: 'Implement deep neural networks, CNNs for computer vision, RNNs for sequence modeling, and transformers for NLP applications using cutting-edge frameworks.' },
                { icon: <Users className="w-6 h-6 text-white" />, title: 'Professional Communication', description: 'Effectively communicate analytical findings through technical reports, executive presentations, and data storytelling while collaborating in cross-functional teams.' }
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
                  Diverse career pathways await M.Sc Data Analytics graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Database className="w-6 h-6" />, title: 'Data Scientist', desc: 'Build predictive models and derive insights at tech giants' },
                { icon: <Code className="w-6 h-6" />, title: 'ML Engineer', desc: 'Design and deploy machine learning systems at scale' },
                { icon: <BarChart3 className="w-6 h-6" />, title: 'Business Intelligence Analyst', desc: 'Transform data into strategic business decisions' },
                { icon: <Cloud className="w-6 h-6" />, title: 'Data Engineer', desc: 'Build robust data pipelines and infrastructure' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'Research Scientist', desc: 'Advance AI research at labs and universities' },
                { icon: <Globe className="w-6 h-6" />, title: 'Analytics Consultant', desc: 'Strategic consulting at Big 4 and tech consultancies' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Product Analyst', desc: 'Drive product decisions with data at tech companies' },
                { icon: <Brain className="w-6 h-6" />, title: 'AI Specialist', desc: 'Develop cutting-edge AI solutions for enterprises' }
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
                    'Information Technology', 'Banking & Finance', 'Healthcare & Pharma', 'E-commerce & Retail',
                    'Consulting Firms', 'Telecommunications', 'Insurance & Actuarial', 'Manufacturing & Supply Chain',
                    'Media & Entertainment', 'Government & Public Sector', 'Research & Academia', 'Startups & Unicorns'
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
                  State-of-the-art infrastructure supporting world-class data science education
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'High-Performance Computing Lab', description: 'GPU-powered workstations with NVIDIA Tesla cards, 128GB RAM systems, and high-speed SSD storage for deep learning and big data processing.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=HPC+Lab' },
                { title: 'Cloud Computing Infrastructure', description: 'Access to AWS, Azure, and Google Cloud Platform with dedicated educational credits for Learners to deploy and scale analytics solutions.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Cloud+Lab' },
                { title: 'Big Data Analytics Cluster', description: 'Dedicated Hadoop and Spark cluster for processing terabytes of data, enabling hands-on experience with distributed computing frameworks.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Big+Data+Cluster' },
                { title: 'Enterprise Software Suite', description: 'Licensed access to Tableau, Power BI, SAS, SPSS, MATLAB, and industry-standard analytics tools for comprehensive learning experience.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Software+Suite' },
                { title: 'Research & Innovation Center', description: 'Dedicated space for dissertation work, industry collaborations, and research projects with mentorship from industry experts and Learning Facilitators.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Research+Center' },
                { title: 'Digital Library & E-Resources', description: 'Access to IEEE Xplore, ACM Digital Library, Springer, and Coursera/edX subscriptions for continuous learning beyond the curriculum.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Digital+Library' }
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
                Our progressive education approach ensures holistic development, preparing you for success in data science and AI careers.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Expert Learning Facilitators', description: 'Learn from PhD-qualified Learning Facilitators with industry experience at companies like Google, Microsoft, and Amazon.' },
                  { title: 'Hands-on Practical Learning', description: '60% practical curriculum with real-world datasets, Kaggle competitions, and capstone projects on live business problems.' },
                  { title: 'Industry Partnerships', description: 'Collaborations with TCS, Infosys, Wipro, and startups for guest lectures, internships, and placement opportunities.' },
                  { title: 'Mandatory Internship Programme', description: '6-month industry internship with leading companies to gain real-world experience before graduation.' },
                  { title: 'Exceptional Placement Support', description: 'Dedicated placement cell with 95%+ placement record and average packages of ₹6-8 LPA for data science roles.' }
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
                { name: 'Dr. Rajesh Kumar', designation: 'Head of Department', qualification: 'Ph.D. in Computer Science (AI/ML)' },
                { name: 'Dr. Priya Lakshmi', designation: 'Associate Professor', qualification: 'Ph.D. in Data Science' },
                { name: 'Mr. Venkatesh Babu', designation: 'Assistant Professor', qualification: 'M.Tech, NET Qualified' },
                { name: 'Ms. Anjali Sharma', designation: 'Assistant Professor', qualification: 'M.Sc CS, SLET Qualified' }
              ].map((faculty, idx) => (
                <div key={idx} className="w-[260px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-brand-cream group flex flex-col h-[340px]">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/faculties/placeholder-avatar.jpg"
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
                  Find answers to common queries about the M.Sc Computer Science (Data Analytics) programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration and structure of the M.Sc Computer Science (Data Analytics) programme?', answer: 'The M.Sc Computer Science (Data Analytics) programme is a 2-year full-time postgraduate degree comprising four semesters. The first three semesters focus on coursework combining theoretical concepts with practical lab sessions, while the fourth semester is dedicated to industry internship and dissertation work. Each semester includes core subjects, practical labs, and elective courses.' },
                { question: 'What are the higher education options after M.Sc Data Analytics?', answer: 'After completing M.Sc Computer Science (Data Analytics), Learners can pursue Ph.D. in Computer Science, Artificial Intelligence, Machine Learning, or Data Science from prestigious universities globally. Additional options include specialized MBA programmes in Business Analytics, post-doctoral research positions, and executive education programmes from institutions like IIMs, ISB, and international universities.' },
                { question: 'What programming languages and tools are covered in the curriculum?', answer: 'The programme provides comprehensive training in Python (primary language), R, SQL, and exposure to Scala. Learners gain proficiency in libraries like NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch, and Keras. Big data tools include Hadoop, Spark, and Kafka. Visualization tools covered include Tableau, Power BI, and D3.js. Cloud platforms AWS, Azure, and GCP are integrated throughout the curriculum.' },
                { question: 'Is prior coding experience required for this programme?', answer: 'While prior programming experience is beneficial, it is not mandatory. The programme begins with foundational courses in Python and data structures. However, candidates should have strong mathematical aptitude, particularly in statistics and linear algebra. A background in computer science, mathematics, or statistics is highly recommended. Bridge courses are available for Learners from non-CS backgrounds.' },
                { question: 'What is the placement scenario for M.Sc Data Analytics graduates?', answer: 'Our M.Sc Data Analytics programme boasts a 95%+ placement record. Entry-level packages range from ₹4.5 to ₹8 lakhs per annum for Data Analyst roles. Machine Learning Engineers and Data Scientists command packages of ₹8-15 lakhs. Top performers have secured positions at companies like TCS, Infosys, Wipro, Accenture, and tech startups with packages exceeding ₹12 lakhs. The highest package recorded was ₹18 LPA.' },
                { question: 'Are industry certifications included in the programme?', answer: 'Yes, the programme includes preparation for industry-recognized certifications at no additional cost. Learners are trained for AWS Certified Data Analytics, Microsoft Azure Data Scientist Associate, Google Cloud Professional Data Engineer, and Tableau Desktop Specialist certifications. The department conducts mock exams and provides study materials to ensure Learners are well-prepared for these valuable certifications.' },
                { question: 'How does the internship programme work?', answer: 'The mandatory industry internship in the fourth semester spans 4-6 months. The placement cell facilitates internships at partner companies including IT majors, consulting firms, and data-driven startups. Learners work on real business problems, applying their data science skills under industry mentor guidance. Many internships convert to pre-placement offers (PPOs), giving Learners a head start in their careers.' }
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
                Launch Your Career in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Data Science
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our M.Sc Computer Science (Data Analytics) programme and transform into a skilled data professional ready for the AI-driven future.
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
      <section className="py-16 bg-brand-cream">
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
                  Discover other computer science programmes at our college
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'B.Sc Computer Science', description: 'Foundation programme in computer science with programming and software development', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+Computer+Science' },
                { title: 'MCA', description: 'Advanced programme in software development and application design', duration: '2 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=MCA' },
                { title: 'B.Sc Information Technology', description: 'Comprehensive programme in IT infrastructure, networking, and systems management', duration: '3 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=BSc+IT' }
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
      </section>
    </div>
  );
}

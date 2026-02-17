'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, Library, GraduationCap, Building2, Lightbulb, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Microscope, FlaskConical, Dna, Bug } from 'lucide-react';
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

export default function PhDZoologyPage() {
  const [activePhase, setActivePhase] = useState(1);
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
                UGC Recognized Doctoral Programme
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-brand-green">
                Doctor of Philosophy (Ph.D) in{' '}
                <span className="text-brand-green">
                  Zoology
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                Advanced Research in Animal Sciences & Biodiversity Conservation
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <span>3-5 Years Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <FileText className="w-5 h-5 text-brand-green" />
                  <span>Full-time/Part-time</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
                  <Award className="w-5 h-5 text-brand-green" />
                  <span>Research Programme</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#research-areas" className="inline-flex items-center gap-2 bg-white/70 hover:bg-brand-green text-gray-900 hover:text-white border-2 border-white/80 hover:border-brand-green px-7 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
                  View Research Areas
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
              { icon: <GraduationCap className="w-7 h-7" />, stat: 'UGC', title: 'Recognized Programme', desc: 'Quality doctoral education' },
              { icon: <Users className="w-7 h-7" />, stat: '8+', title: 'Research Supervisors', desc: 'Expert guidance available' },
              { icon: <BookOpen className="w-7 h-7" />, stat: '50+', title: 'Ph.D Awarded', desc: 'Strong research legacy' },
              { icon: <Briefcase className="w-7 h-7" />, stat: '100%', title: 'Career Placement', desc: 'Academia & research positions' },
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
                The Doctor of Philosophy (Ph.D) in Zoology is a prestigious doctoral research programme designed to develop advanced research scholars with deep expertise in animal sciences, biodiversity conservation, molecular biology, and ecological research. This UGC-recognized programme offers comprehensive research training spanning animal physiology, genetics, entomology, environmental biology, wildlife conservation, and contemporary areas like bioinformatics and toxicology.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our progressive education philosophy ensures that Research Scholars receive rigorous academic training combined with practical laboratory skills under the guidance of experienced Learning Facilitators. The programme integrates traditional zoological sciences with modern research methodologies including molecular techniques, computational biology, and advanced microscopy, preparing scholars for distinguished careers in academia, research institutions, pharmaceutical industries, and conservation organizations.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {['Expert Research Supervisors', 'Scopus & UGC-CARE Publications', 'State-of-the-Art Research Labs', 'Field Research & Biodiversity Surveys'].map((item, idx) => (
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
                  src="https://placehold.co/600x450/0b6d41/FFFFFF?text=Zoology+Research+Lab"
                  alt="Zoology Research Laboratory"
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
                  Requirements for joining the Ph.D Zoology doctoral research programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-white" />,
                  title: 'Academic Qualification',
                  items: ['M.Sc. / M.Phil in Zoology from recognized university', 'Minimum 55% aggregate marks', '50% for SC/ST/OBC categories', 'Relaxation as per UGC norms']
                },
                {
                  icon: <FileText className="w-8 h-8 text-white" />,
                  title: 'Entrance Requirements',
                  items: ['UGC NET/SLET/GATE qualified (preferred)', 'University entrance examination', 'Research aptitude interview', 'Synopsis presentation']
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: 'Documents Required',
                  items: ['All Academic Mark Sheets & Certificates', 'UGC NET/SLET/GATE Certificate (if applicable)', 'Research Proposal Synopsis', 'Published Papers (if any)', 'NOC from Employer (for Part-time)', 'Aadhaar & Photo ID Proof']
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

      {/* Research Areas & Specializations */}
      <section className="py-16 bg-brand-cream" id="research-areas">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Research" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Research Areas &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Specializations
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Diverse research domains for doctoral study in Zoological Sciences
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FlaskConical className="w-6 h-6 text-white" />, title: 'Animal Physiology & Biochemistry', description: 'Research on metabolic pathways, hormonal regulation, neurophysiology, comparative physiology, and stress biology in animals.' },
                { icon: <Dna className="w-6 h-6 text-white" />, title: 'Molecular Biology & Genetics', description: 'DNA/RNA analysis, gene expression studies, molecular markers, population genetics, and biotechnological applications in animal sciences.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Ecology & Environmental Biology', description: 'Ecosystem dynamics, ecological modeling, climate change impact, pollution biology, and environmental assessment studies.' },
                { icon: <Bug className="w-6 h-6 text-white" />, title: 'Entomology & Pest Management', description: 'Insect taxonomy, agricultural pest control, integrated pest management, vector biology, and beneficial insect research.' },
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Immunology & Toxicology', description: 'Immune response mechanisms, vaccine development, ecotoxicology, biomarkers, and toxicity assessment in aquatic and terrestrial organisms.' },
                { icon: <Award className="w-6 h-6 text-white" />, title: 'Marine & Freshwater Biology', description: 'Aquatic biodiversity, fisheries biology, marine ecology, aquaculture research, and freshwater ecosystem conservation.' },
                { icon: <Library className="w-6 h-6 text-white" />, title: 'Wildlife Biology & Conservation', description: 'Wildlife ecology, endangered species management, habitat conservation, human-wildlife conflict, and biodiversity monitoring.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Cell Biology & Histology', description: 'Cellular mechanisms, histopathological techniques, tissue culture, cytogenetics, and ultrastructural studies using electron microscopy.' },
                { icon: <Lightbulb className="w-6 h-6 text-white" />, title: 'Parasitology & Disease Biology', description: 'Parasite-host interactions, disease epidemiology, zoonotic diseases, drug resistance studies, and parasitic control strategies.' }
              ].map((area, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <GlassCard className="relative p-6 group h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-16 bg-white" id="curriculum">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Structure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Programme{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Structure
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive doctoral training in research methodology and zoological sciences
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3].map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setActivePhase(phase)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activePhase === phase
                        ? 'bg-gradient-to-r from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/25'
                        : 'bg-white text-brand-green hover:bg-brand-green/5'
                      }`}
                  >
                    Phase {phase}
                  </button>
                ))}
              </div>
            </RevealSection>

            {activePhase === 1 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Research Methodology (Semester I)',
                    subjects: [
                      'Research Methodology in Life Sciences (4 Credits)',
                      'Biostatistics & Data Analysis (4 Credits)',
                      'Scientific Writing & Publication Ethics (2 Credits)',
                      'Bioinformatics & Computational Tools (2 Credits)',
                      'Literature Review & Documentation (2 Credits)',
                      'Research Seminar Presentation (2 Credits)'
                    ]
                  },
                  {
                    title: 'Specialization Courses (Semester II)',
                    subjects: [
                      'Advanced Techniques in Zoology (4 Credits)',
                      'Molecular & Cellular Biology (4 Credits)',
                      'Ecological Research Methods (2 Credits)',
                      'Elective: Area of Specialization (4 Credits)',
                      'Research Synopsis Development (2 Credits)',
                      'Comprehensive Examination (Qualifying)'
                    ]
                  }
                ].map((phase, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{phase.title}</h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {phase.subjects.map((subject, i) => (
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

            {activePhase === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Research Work (Year 2-3)',
                    subjects: [
                      'Topic Finalization & RAC Approval (Milestone)',
                      'Experimental Design & Pilot Studies (Ongoing)',
                      'Data Collection & Laboratory Work (Ongoing)',
                      'Field Research & Sample Collection (Ongoing)',
                      'Progress Seminar Presentations (Bi-annual)',
                      'RAC Review Meetings (6 Monthly)'
                    ]
                  },
                  {
                    title: 'Publication Requirements',
                    subjects: [
                      'Minimum 2 Research Papers in UGC-CARE/Scopus (Mandatory)',
                      'National/International Conference Papers (Minimum 2)',
                      'Book Chapter/Edited Volume (Optional)',
                      'Workshop/FDP/Training Participation (Mandatory)',
                      'Plagiarism Check & Compliance (Required)',
                      'Pre-Submission Seminar (Milestone)'
                    ]
                  }
                ].map((phase, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{phase.title}</h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {phase.subjects.map((subject, i) => (
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

            {activePhase === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Thesis Submission (Year 3-5)',
                    subjects: [
                      'Thesis Draft Completion (Milestone)',
                      'Guide Review & Revisions (Iterative)',
                      'Plagiarism Check Below 10% (Mandatory)',
                      'Pre-Submission Seminar (Required)',
                      'RAC Final Approval (Clearance)',
                      'University Thesis Submission (Final)'
                    ]
                  },
                  {
                    title: 'Viva Voce & Degree Award',
                    subjects: [
                      'External Examiner Evaluation (Review)',
                      'Open Viva Voce Examination (Defense)',
                      'Thesis Corrections if required (As Needed)',
                      'Doctoral Committee Approval (Final)',
                      'University Notification (Official)',
                      'Convocation & Degree Award (Graduation)'
                    ]
                  }
                ].map((phase, idx) => (
                  <RevealSection key={idx} delay={idx * 150}>
                    <GlassCard className="overflow-hidden" hover={false}>
                      <div className="bg-gradient-to-r from-brand-green to-emerald-500 text-white px-6 py-4">
                        <h4 className="text-xl font-bold">{phase.title}</h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {phase.subjects.map((subject, i) => (
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
                  Competencies and skills developed through the Ph.D Zoology programme
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Microscope className="w-6 h-6 text-white" />, title: 'Advanced Research Skills', description: 'Master sophisticated laboratory techniques, experimental design, and data analysis methods specific to zoological research.' },
                { icon: <Target className="w-6 h-6 text-white" />, title: 'Critical Thinking', description: 'Develop analytical abilities to critically evaluate scientific literature, formulate hypotheses, and interpret complex biological data.' },
                { icon: <BookOpen className="w-6 h-6 text-white" />, title: 'Scientific Communication', description: 'Effectively communicate research findings through publications, presentations, and scholarly discussions at national and international platforms.' },
                { icon: <Globe className="w-6 h-6 text-white" />, title: 'Ecological Understanding', description: 'Comprehend complex ecological relationships, biodiversity patterns, and environmental conservation principles.' },
                { icon: <Briefcase className="w-6 h-6 text-white" />, title: 'Project Management', description: 'Lead independent research projects, manage resources efficiently, and collaborate effectively in multidisciplinary teams.' },
                { icon: <Award className="w-6 h-6 text-white" />, title: 'Ethical Research Practice', description: 'Demonstrate commitment to research ethics, animal welfare guidelines, biosafety protocols, and scientific integrity standards.' }
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
                  Diverse career pathways for Ph.D Zoology graduates
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: 'University Professor', desc: 'Teaching and research positions in universities and colleges across India and abroad' },
                { icon: <FlaskConical className="w-6 h-6" />, title: 'Research Scientist', desc: 'Lead research at CSIR, ICAR, DBT labs, and international research institutes' },
                { icon: <Library className="w-6 h-6" />, title: 'Wildlife Biologist', desc: 'Conservation research at WII, ZSI, forest departments, and wildlife sanctuaries' },
                { icon: <Microscope className="w-6 h-6" />, title: 'Pharmaceutical Scientist', desc: 'Drug development, toxicology testing, and R&D in pharmaceutical companies' },
                { icon: <Globe className="w-6 h-6" />, title: 'Environmental Consultant', desc: 'EIA studies, biodiversity assessments, and sustainability consulting' },
                { icon: <Award className="w-6 h-6" />, title: 'Forensic Scientist', desc: 'Wildlife forensics, DNA analysis, and forensic biology in government labs' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Aquaculture Scientist', desc: 'Fish breeding, aquatic research at CIFA, CMFRI, and aquaculture industries' },
                { icon: <Dna className="w-6 h-6" />, title: 'Bioinformatics Analyst', desc: 'Genomic data analysis, computational biology in biotech companies' }
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
                    'Universities & Colleges', 'CSIR Laboratories', 'Wildlife Institute of India', 'Zoological Survey of India',
                    'Pharmaceutical Industry', 'Biotechnology Firms', 'Environmental Agencies', 'Forest Department',
                    'NGOs & Conservation Bodies', 'Agriculture Research', 'Science Museums', 'International Organizations'
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

      {/* Research Facilities */}
      <section className="py-16 bg-brand-cream" id="facilities">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <SectionBadge text="Infrastructure" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Research{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Facilities
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure supporting doctoral research in Zoological Sciences
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Advanced Research Laboratory', description: 'Fully equipped laboratory with PCR, electrophoresis, spectrophotometer, and advanced molecular biology instruments for cutting-edge research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Research+Lab' },
                { title: 'Microscopy & Imaging Center', description: 'High-resolution microscopy facility with phase contrast, fluorescence microscopes, and image analysis systems for detailed cellular studies.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Microscopy+Center' },
                { title: 'Institutional Animal House', description: 'CPCSEA-approved animal facility for maintaining research animals with proper housing, breeding, and ethical research protocols.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Animal+House' },
                { title: 'Zoology Museum', description: 'Extensive collection of preserved specimens, taxidermy mounts, skeletal systems, and comparative anatomy exhibits for teaching and research.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Zoology+Museum' },
                { title: 'Bioinformatics Laboratory', description: 'High-performance computing facility with specialized software for genomic analysis, molecular modeling, and statistical data processing.', image: 'https://placehold.co/400x200/059669/FFFFFF?text=Bioinformatics+Lab' },
                { title: 'Field Research Station', description: 'Access to biodiversity hotspots, aquatic ecosystems, and protected areas for field research, sample collection, and ecological monitoring.', image: 'https://placehold.co/400x200/0b6d41/FFFFFF?text=Field+Station' }
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
                Why Choose Our Ph.D{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Programme?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our progressive education approach ensures holistic development, preparing you for distinguished careers in research and academia.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Expert Research Supervisors', description: 'Guidance from experienced Learning Facilitators with active research profiles and international collaborations.' },
                  { title: 'Modern Research Infrastructure', description: 'Access to advanced laboratories, sophisticated instruments, and cutting-edge research technology.' },
                  { title: 'Diverse Research Opportunities', description: 'Wide range of specializations from molecular biology to wildlife conservation with interdisciplinary scope.' },
                  { title: 'Publication Support', description: 'Strong track record of publications in Scopus, UGC-CARE journals with mentorship for scholarly writing.' },
                  { title: 'Industry Connections', description: 'Collaborations with research institutions, pharmaceutical companies, and conservation organizations.' }
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
                  Research{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Supervisors
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Distinguished Learning Facilitators guiding doctoral research
                </p>
              </div>
            </RevealSection>

            <Marquee pauseOnHover draggable speed={30} className="[--gap:1.5rem]">
              {[
                { name: 'Dr. S. Umavathi', designation: 'Associate Professor & Head', qualification: 'M.Sc., Ph.D., PGDCA.', image: '/images/faculties/aided/zoology/Dr.-S.-Umavathi-240x300.png' },
                { name: 'Dr. Y. Thangam', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., M.Ed., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-Y.-Thangam-240x300.png' },
                { name: 'Dr. R. Sowdeswari', designation: 'Assistant Professor', qualification: 'M.Sc., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-R.-Sowdeswari-240x300.png' },
                { name: 'Dr. K. M. Syed Ali Fathima', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D., D.C.A.', image: '/images/faculties/aided/zoology/Dr.-K.-M.-Syed-Ali-Fathima-240x300.png' },
                { name: 'Dr. P. Madhiyazhagan', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-P.-Madhiyazhagan-240x300.png' },
                { name: 'Dr. S. Umamaheswari', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed., Ph.D.', image: '/images/faculties/aided/zoology/Dr.-S.-Umamaheswari-240x300.png' },
                { name: 'Dr. K. Shenkani', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D., PGDBI., (SET)', image: '/images/faculties/aided/zoology/Dr.-K.-Shenkani-240x300.png' },
                { name: 'Dr. S. Kalaimani', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., M.Ed., Ph.D., DCA., (SET)', image: '/images/faculties/aided/zoology/Dr.-S.-Kalaimani-240x300.png' },
                { name: 'Mrs. S. Kowsalya', designation: 'Assistant Professor', qualification: 'M.Sc., M.Ed., (SET)', image: '/images/faculties/aided/zoology/Mrs.-S.-Kowsalya-240x300.png' }
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
                  Find answers to common queries about the Ph.D Zoology programme
                </p>
              </div>
            </RevealSection>

            <div className="space-y-4">
              {[
                { question: 'What is the duration of the Ph.D Zoology programme?', answer: 'The Ph.D Zoology programme is a minimum 3-year and maximum 5-year doctoral research programme. Full-time scholars typically complete in 3-4 years, while part-time scholars may take 4-5 years.' },
                { question: 'What are the career opportunities after Ph.D in Zoology?', answer: 'Ph.D Zoology graduates can pursue careers as University Professors, Research Scientists, Wildlife Biologists, Conservation Officers, Pharmaceutical Researchers, Environmental Consultants, Forensic Scientists, Government Scientists, and Science Officers in international organizations.' },
                { question: 'What is the eligibility criteria for Ph.D Zoology admission?', answer: 'Candidates must have completed M.Sc./M.Phil in Zoology or related life science discipline from a recognized university with minimum 55% aggregate marks (50% for reserved categories). Candidates must also qualify UGC NET/SLET/GATE or pass the university entrance examination.' },
                { question: 'What research areas are available in Ph.D Zoology?', answer: 'Research areas include Animal Physiology and Biochemistry, Molecular Biology and Genetics, Ecology and Environmental Biology, Entomology and Pest Management, Immunology and Toxicology, Marine and Freshwater Biology, Wildlife Conservation, Cell Biology and Histology, Parasitology, and Evolutionary Biology.' },
                { question: 'Is UGC NET mandatory for Ph.D Zoology admission?', answer: 'UGC NET/SLET/GATE qualified candidates are given preference and may be exempted from the entrance examination. Candidates without NET/SLET/GATE must qualify the university-conducted entrance test followed by an interview for admission.' },
                { question: 'What publications are required for Ph.D completion?', answer: 'Scholars must publish a minimum of 2 research papers in UGC-CARE or Scopus-indexed journals. Additionally, presenting papers at national/international conferences and attending workshops/FDPs is mandatory for programme completion.' },
                { question: 'Are research scholarships available for Ph.D scholars?', answer: 'Yes, eligible scholars can apply for UGC NET-JRF, CSIR-JRF, DBT-JRF, ICMR-JRF, and other government fellowships. The institution also provides fee concessions and supports scholars in securing external funding for research projects.' },
                { question: 'Can I pursue Ph.D part-time while working?', answer: 'Yes, working professionals can enroll in part-time Ph.D programmes with NOC from their employer. Part-time scholars are required to maintain regular contact with their research supervisor and attend coursework, seminars, and review meetings as per university regulations.' }
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
                Begin Your Doctoral Journey in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                  Zoological Sciences
                </span>
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Join our Ph.D Zoology programme and contribute to cutting-edge research in animal sciences and conservation.
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
      <section className="py-16 bg-white">
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
                { title: 'M.Sc. Zoology', description: 'Advanced postgraduate studies in Zoology with research specializations', duration: '2 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=MSc+Zoology' },
                { title: 'B.Sc. Zoology', description: 'Comprehensive undergraduate programme in animal sciences', duration: '3 Years', image: 'https://placehold.co/400x180/059669/FFFFFF?text=BSc+Zoology' },
                { title: 'Ph.D Botany', description: 'Doctoral research programme in plant sciences and biotechnology', duration: '3-5 Years', image: 'https://placehold.co/400x180/0b6d41/FFFFFF?text=PhD+Botany' }
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

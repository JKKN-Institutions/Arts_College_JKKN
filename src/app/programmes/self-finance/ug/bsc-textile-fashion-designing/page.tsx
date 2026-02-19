'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, Briefcase, GraduationCap, Building2, CheckCircle2, Clock, FileText, Globe, ChevronDown, ArrowRight, Sparkles, Target, Palette, Scissors, Ruler, Shirt, PenTool, Layers, TrendingUp, Calendar, UserCheck, DollarSign, Database, LineChart } from 'lucide-react';
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

export default function BSCTextileFashionDesigningPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faqs = [
    {
      question: "What is the scope of B.Sc Textile and Fashion Design in India?",
      answer: "The fashion and textile industry in India is booming with excellent career opportunities in fashion houses, export companies, textile mills, retail brands, and media. Graduates can work as fashion designers, textile designers, merchandisers, stylists, or start their own fashion ventures with growing demand in both domestic and international markets."
    },
    {
      question: "Can I pursue this course after Commerce or Arts stream?",
      answer: "Yes! While Science stream students are preferred, students from Commerce and Arts backgrounds can also apply if they have a genuine interest in design and creativity. The programme focuses on developing creative and technical skills rather than requiring advanced science knowledge."
    },
    {
      question: "What software and technical skills will I learn?",
      answer: "Students receive comprehensive training in industry-standard software including Adobe Photoshop, Adobe Illustrator, CorelDRAW for design, CAD software for pattern making, and 3D design tools. You'll also learn manual techniques like draping, pattern making, embroidery, and textile printing alongside digital skills."
    },
    {
      question: "What is the average salary package for B.Sc TFD graduates?",
      answer: "Entry-level salaries range from ₹2.5-4.5 lakhs per annum depending on the role and company. Fashion designers in established brands can earn ₹4-8 lakhs, while merchandisers and production managers earn ₹3-6 lakhs annually. Successful entrepreneurs and freelance designers can earn significantly higher based on their clientele and brand value."
    },
    {
      question: "Are there industry internship opportunities during the course?",
      answer: "Yes, the programme includes a mandatory industry internship in the final year. We have partnerships with leading fashion houses, textile mills, export companies, and retail brands. Students gain hands-on experience in design studios, production units, merchandising departments, and fashion events, which significantly enhances employability."
    },
    {
      question: "Can I start my own fashion business after this course?",
      answer: "Absolutely! The curriculum includes Fashion Entrepreneurship, Marketing & Branding, and Production Management modules specifically designed to equip students with business skills. Many of our graduates have successfully launched their own fashion labels, boutiques, online stores, and design studios. The college also provides incubation support for student entrepreneurs."
    },
    {
      question: "What are the options for higher studies after B.Sc TFD?",
      answer: "Graduates can pursue M.Sc in Fashion Design, MBA in Fashion Management, specialized courses in Fashion Technology, Textile Engineering, or Fashion Communication. International options include degrees from fashion institutes in Italy, France, UK, and USA. Some students also pursue certifications in specialized areas like sustainable fashion, luxury brand management, or fashion styling."
    }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Bachelor of Science in Textile and Fashion Design",
            "description": "A comprehensive 3-year undergraduate programme combining creative design thinking with technical textile knowledge, covering fashion illustration, garment construction, CAD, merchandising, and sustainable fashion practices.",
            "provider": {
              "@type": "CollegeOrUniversity",
              "name": "JKKN College of Arts and Science",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Komarapalayam",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              }
            },
            "educationalCredentialAwarded": "Bachelor of Science in Textile and Fashion Design",
            "timeToComplete": "P3Y",
            "occupationalCredentialAwarded": "UGC Recognized Degree"
          })
        }}
      />

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
                    Textile and Fashion Designing
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                  Design Your Future in Fashion & Textile Innovation
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
                { icon: <GraduationCap className="w-7 h-7" />, stat: 'NAAC', title: 'Accredited', desc: 'Quality assured education' },
                { icon: <Palette className="w-7 h-7" />, stat: 'Design', title: 'Studios', desc: 'State-of-art facilities' },
                { icon: <Briefcase className="w-7 h-7" />, stat: '95%', title: 'Placement', desc: 'Top fashion brands' },
                { icon: <Sparkles className="w-7 h-7" />, stat: 'Fashion', title: 'Shows & Events', desc: 'Annual exhibitions' },
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
                  The B.Sc. in Textile and Fashion Designing  is a dynamic Undergraduate programme that blends creative artistry with technical expertise in textile science and fashion innovation. This comprehensive course equips students with the skills to conceptualize, design, and create fashion garments while understanding the science behind fabrics, production processes, and sustainable practices.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Students gain hands-on experience through state-of-the-art design studios, CAD laboratories, and industry internships. The curriculum covers everything from fashion illustration and pattern making to merchandising, branding, and entrepreneurship, preparing graduates for diverse roles in the global fashion and textile industry.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {['Creative & Technical Excellence', 'Industry-Standard Software Training', 'Sustainable Fashion Focus', 'Real-World Industry Exposure'].map((item, idx) => (
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
                    src="/images/programmes/tfd/JKKN B.Sc Textile and Fashion Designing.png"
                    alt="Fashion Design"
                    className="w-full h-auto"
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
                    Requirements for joining the B.Sc Textile and Fashion Design programme
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Award className="w-8 h-8 text-white" />,
                    title: 'Basic Eligibility',
                    items: ['10+2 or equivalent from a recognized board', 'Minimum Passing marks']
                  },
                  {
                    icon: <BookOpen className="w-8 h-8 text-white" />,
                    title: 'Stream Acceptance',
                    items: ['Students from Science, Commerce, Arts and Any streams are eligible to apply']
                  },
                  {
                    icon: <UserCheck className="w-8 h-8 text-white" />,
                    title: 'Age Criteria',
                    items: ['Candidates should be 17-45 years old at the time of admission']
                  },


                ].map((card, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
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
                    Comprehensive 6-semester curriculum covering design, technology, and business aspects
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
                        { name: 'General Tamil - I', code: '24UGTA01' },
                        { name: 'General English - I', code: '24UGEN01' },
                        { name: 'Core - I, Fiber and Yarn Science', code: '24UTFC01' },
                        { name: 'Core - II, Basic Apparel Designing Practical', code: '24UTFCP01' },
                        { name: 'DSE - I, Pattern Making and Grading / Basic Apparel Designing / Fashion Forecasting', code: '24UTFDE01 / 24UTFDE02 / 24UTFDE03' },
                        { name: 'NME - I, E-Designing Practical', code: '24UTFNMP01' },
                        { name: 'SEC - I (Foundation Course), Basic Illustration and Sketching Practical', code: '24UTFFP01' }
                      ]
                    },
                    {
                      title: 'Semester II',
                      subjects: [
                        { name: 'General Tamil - II', code: '24UGTA02' },
                        { name: 'General English - II', code: '24UGEN02' },
                        { name: 'Core - III, Woven Fabric Science', code: '24UTFC02' },
                        { name: 'Core - IV, Fiber to Fabric Science Practical', code: '24UTFCP02' },
                        { name: 'DSE - II, Apparel Manufacturing Machineries and Equipments / Care and Maintenance of Textiles / Garment Accessories and Trims', code: '24UTFDE04 / 24UTFDE05 / 24UTFDE06' },
                        { name: 'NME - II, Needle Craft and Fabric Painting Practical', code: '24UTFNMP02' },
                        { name: 'SEC - II, Basic Pattern Making Practical', code: '24UTFSP01' }
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
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
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
                        { name: 'General Tamil - III', code: '24UGTA03' },
                        { name: 'General English - III', code: '24UGEN03' },
                        { name: 'Core - V, Textile Wet Processing', code: '24UTFC03' },
                        { name: 'Core - VI, Children\'s Apparel Practical', code: '24UTFCP03' },
                        { name: 'DSE - III, Fashion Draping Practical / Fashion Business Communication / Basics of Cosmetology', code: '24UTFDEP01 / 24UTFDE07 / 24UTFDE08' },
                        { name: 'SEC - III (Entrepreneurial Skill), Beauty Care Practical', code: '24UTFSP02' },
                        { name: 'SEC - IV, Textile Wet Processing Practical', code: '24UTFSP03' },
                        { name: 'Environmental Studies', code: '24UEVS01' }
                      ]
                    },
                    {
                      title: 'Semester IV',
                      subjects: [
                        { name: 'General Tamil - IV', code: '24UGTA04' },
                        { name: 'General English - IV', code: '24UGEN04' },
                        { name: 'Core - VII, Textile Finishing', code: '24UTFC04' },
                        { name: 'Core - VIII, Women\'s Apparel Practical', code: '24UTFCP04' },
                        { name: 'DSE - IV, Fashion Designing Practical / Costumes and Textiles of India / Fashion Appreciation', code: '24UTFDEP02 / 24UTFDE09 / 24UTFDE10' },
                        { name: 'SEC - V, Fashion Designing', code: '24UTFS01' },
                        { name: 'SEC - VI, Boutique Management', code: '24UTFS02' },
                        { name: 'Environmental Studies', code: '24UEVS01' }
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
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
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
                        { name: 'Core - IX, Apparel Costing and Merchandising', code: '24UTFC05' },
                        { name: 'Core - X, Knitting and Non-woven', code: '24UTFC06' },
                        { name: 'Core - XI, Surface Embellishment and Fashion Accessories Practical', code: '24UTFCP05' },
                        { name: 'Core - XII, Men\'s Apparel Practical', code: '24UTFCP06' },
                        { name: 'DSE - V, Home Textile Practical / Organization of Garment Unit / Computer Application in Garment Designing', code: '24UTFDEP03 / 24UTFDE11 / 24UTFDE12' },
                        { name: 'DSE - VI, Entrepreneurship Development / Fashion Photography / Eco Textile', code: '24UTFDE13 / 24UTFDE14 / 24UTFDE15' },
                        { name: 'Value Education', code: '24UVED01' },
                        { name: 'Internship Project - Viva-Voce', code: '24UTFSI01' }
                      ]
                    },
                    {
                      title: 'Semester VI',
                      subjects: [
                        { name: 'Core - XIII, Textile Testing and Quality Control', code: '24UTFC07' },
                        { name: 'Core - XIV, CAD in Garment Designing Practical', code: '24UTFCP07' },
                        { name: 'Core - XV, Fashion Portfolio Presentation Viva Voce', code: '24UTFCP08' },
                        { name: 'DSE - VII, Apparel Production Management / Technical Textiles / Fashion Marketing', code: '24UTFDE16 / 24UTFDE17 / 24UTFDE18' },
                        { name: 'DSE - VIII, International Trade and Documentation / Industrial Engineering / Apparel Brand Management', code: '24UTFDE19 / 24UTFDE20 / 24UTFDE21' },
                        { name: 'Professional Competency Skill, Employability Readiness (Naandi/Unnati/Quest/Izapy/IBM Skillbuild)', code: '—' },
                        { name: 'Extension Activity', code: '24UEX01' }
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
                              <li key={i} className="flex items-center justify-between text-gray-700">
                                <div className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{subject.name}</span>
                                </div>
                                <span className="text-brand-green font-semibold text-sm ml-2">{subject.code}</span>
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
                    Skills and competencies you will develop
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Palette className="w-6 h-6 text-white" />, title: 'Creative Design Thinking', description: 'Develop innovative design concepts and translate creative ideas into wearable fashion collections with aesthetic appeal and market relevance.' },
                  { icon: <Ruler className="w-6 h-6 text-white" />, title: 'Technical Proficiency', description: 'Master garment construction, pattern making, draping techniques, and sewing skills to create professional-quality fashion products.' },
                  { icon: <Layers className="w-6 h-6 text-white" />, title: 'Digital Design Skills', description: 'Gain expertise in CAD/CAM software, Adobe Creative Suite, and 3D design tools for digital fashion illustration and technical drawings.' },
                  { icon: <Sparkles className="w-6 h-6 text-white" />, title: 'Textile Knowledge', description: 'Understand fiber science, fabric properties, textile testing, dyeing, printing techniques, and sustainable material sourcing.' },
                  { icon: <PenTool className="w-6 h-6 text-white" />, title: 'Business Acumen', description: 'Learn fashion merchandising, marketing strategies, retail management, branding, and visual merchandising for commercial success.' },
                  { icon: <Users className="w-6 h-6 text-white" />, title: 'Sustainable Practices', description: 'Apply eco-friendly design principles, ethical sourcing, zero-waste pattern making, and sustainable fashion business models.' }
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
                    Diverse career paths in the fashion and textile industry
                  </p>
                </div>
              </RevealSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <Palette className="w-6 h-6" />, title: 'Fashion Designer', desc: 'Create original clothing and accessory designs for fashion houses and brands' },
                  { icon: <Layers className="w-6 h-6" />, title: 'Textile Designer', desc: 'Design patterns, prints, and textures for fabrics and textile products' },
                  { icon: <Ruler className="w-6 h-6" />, title: 'Costume Designer', desc: 'Design costumes for film, television, theater, and media productions' },
                  { icon: <Briefcase className="w-6 h-6" />, title: 'Fashion Stylist', desc: 'Style outfits for photoshoots, celebrities, events, and editorial content' },
                  { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Visual Merchandiser', desc: 'Create attractive product displays and store layouts for retail brands' },
                  { icon: <Sparkles className="w-6 h-6" />, title: 'Apparel Merchandiser', desc: 'Manage product development, sourcing, and supply chain for fashion brands' },
                  { icon: <Shirt className="w-6 h-6" />, title: 'Fashion Entrepreneur', desc: 'Launch your own fashion label, boutique, or online fashion business' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Production Manager', desc: 'Oversee garment manufacturing, quality control, and production processes' }
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
                      'Fashion Houses', 'Textile Mills', 'Export Houses',
                      'Retail Brands', 'E-commerce Platforms', 'Film & Television',
                      'Advertising Agencies', 'Fashion Magazines', 'Design Studios',
                      'Event Management', 'Bridal & Couture', 'Sustainable Fashion Brands'
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

        {/* Department Facilities */}
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
                    State-of-the-art infrastructure for hands-on learning
                  </p>
                </div>
              </RevealSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Fashion Design Studio', description: 'Spacious design studio with professional mannequins, dress forms, design boards, and individual workstations for creative exploration and collection development.' },
                  { title: 'CAD/CAM Laboratory', description: 'Computer lab equipped with latest design software including Adobe Creative Suite, CorelDRAW, CAD pattern-making software, and 3D visualization tools.' },
                  { title: 'Garment Construction Lab', description: 'Modern sewing lab with industrial sewing machines, overlock machines, button-hole machines, and specialized equipment for garment production.' },
                  { title: 'Textile Testing Lab', description: 'Well-equipped lab for fabric analysis, fiber identification, quality testing, and textile performance evaluation with industry-standard instruments.' },
                  { title: 'Embroidery & Print Studio', description: 'Specialized studio for surface ornamentation techniques including hand embroidery, machine embroidery, screen printing, and textile painting.' },
                ].map((facility, idx) => (
                  <RevealSection key={idx} delay={idx * 100}>
                    <GlassCard className="p-6 group h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/30 transition-shadow">
                        <Palette className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-green mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-16 bg-brand-cream">
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
                <SectionBadge text="Why JKKN" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose JKKN for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Fashion Design?
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    { icon: <Users className="w-6 h-6" />, title: 'Industry-Experienced Learning Facilitators', description: 'Learn from faculty with extensive experience in fashion design, textile technology, and industry practices' },
                    { icon: <Building2 className="w-6 h-6" />, title: 'Strong Industry Partnerships', description: 'Collaborations with leading fashion brands, textile manufacturers, and export houses for internships and placements' },
                    { icon: <Sparkles className="w-6 h-6" />, title: 'Annual Fashion Shows', description: 'Showcase your creativity through college fashion shows, exhibitions, and participation in national design competitions' },
                    { icon: <Globe className="w-6 h-6" />, title: 'Global Design Exposure', description: 'Access to international fashion trends, guest lectures from industry experts, and exposure to global design practices' },
                    { icon: <TrendingUp className="w-6 h-6" />, title: 'Entrepreneurship Support', description: 'Incubation facilities and mentorship for students aspiring to launch their own fashion labels and businesses' },
                    { icon: <Award className="w-6 h-6" />, title: 'NAAC Accreditation', description: 'Quality-assured education with government recognition and industry partnerships ensuring excellent learning outcomes' }
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/60 text-brand-green">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-green mb-2">{reason.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
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
                  { name: 'Mr. G.Arulkumar', designation: 'Head of Department', qualification: ' M.Sc.,PGDCA.,', image: '/images/programmes/tfd/Mr.-G.Arulkumar-300x199 (1).png' },
                  { name: 'Mrs. S.Sri Tharunya', designation: 'Assistant Professor', qualification: 'M.Sc.,', image: '/images/programmes/tfd/Mrs.-S.Sri-Tharunya-300x199 (1).png' },
                  { name: 'Mrs. R.Sindhupriyadharshini', designation: 'Assistant Professor', qualification: 'M.Sc.,', image: '/images/programmes/tfd/Mrs.-R.Sindhupriyadharshini-300x199 (2).png' },
                  { name: 'Mrs.Keerthika', designation: 'Assistant Professor', qualification: 'M.SC (T&FD)', image: '/images/programmes/tfd/MRS.KEERTHIKA-300x199 (1).png' },
                  { name: 'Ms.K.Krishnapriya', designation: 'Assistant Professor', qualification: 'B.SC (T&FD)', image: '/images/programmes/tfd/MS.K.KRISHNAPRIYA-300x199 (1).png' }
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
                  <SectionBadge text="FAQs" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                      Questions
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Common queries about the B.Sc Textile and Fashion Designing  programme
                  </p>
                </div>
              </RevealSection>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <RevealSection key={idx} delay={idx * 50}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <button
                        onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/20 transition-colors"
                      >
                        <span className="font-semibold text-brand-green pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeFAQ === idx ? 'max-h-96' : 'max-h-0'
                          }`}
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-brand-cream" id="admission">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Begin Your Creative Journey in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">
                    Fashion Design
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Join our B.Sc Textile and Fashion Designing  programme and turn your creative passion into a rewarding career
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Apply for Admission
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green border-2 border-brand-green px-8 py-4 rounded-lg font-semibold transition-all">
                    Download Brochure
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </>
  );
}

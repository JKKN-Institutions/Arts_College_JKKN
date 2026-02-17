'use client';

import { useState } from 'react';
import { GraduationCap, ArrowRight, BookOpen, Briefcase, Code } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Program categories
const categories = [
  { id: 'science', label: 'SCIENCE', icon: BookOpen },
  { id: 'commerce', label: 'COMMERCE & MANAGEMENT', icon: Briefcase },
  { id: 'computer', label: 'COMPUTER APPLICATION', icon: Code }
];

// Programs data organized by category
const programsByCategory = {
  science: [
    // UG Science
    { name: 'B.Sc. Chemistry', href: '/programmes/aided/ug/bsc-chemistry', level: 'UG', type: 'Aided' },
    { name: 'B.Sc. Mathematics', href: '/programmes/aided/ug/bsc-maths', level: 'UG', type: 'Aided' },
    { name: 'B.Sc. Zoology', href: '/programmes/aided/ug/bsc-zoology', level: 'UG', type: 'Aided' },
    { name: 'B.Sc. Microbiology', href: '/programmes/self-finance/ug/bsc-microbiology', level: 'UG', type: 'Self-Finance' },
    { name: 'B.Sc. Physics', href: '/programmes/self-finance/ug/bsc-physics', level: 'UG', type: 'Self-Finance' },
    // PG Science
    { name: 'M.Sc. Chemistry', href: '/programmes/aided/pg/msc-chemistry', level: 'PG', type: 'Aided' },
    { name: 'M.Sc. Physics', href: '/programmes/aided/pg/msc-physics', level: 'PG', type: 'Aided' },
    { name: 'M.Sc. Zoology', href: '/programmes/aided/pg/msc-zoology', level: 'PG', type: 'Aided' },
    { name: 'M.Sc. Mathematics', href: '/programmes/self-finance/pg/msc-mathematics', level: 'PG', type: 'Self-Finance' },
    // PhD Science
    { name: 'Ph.D. Chemistry', href: '/programmes/aided/phd/chemistry', level: 'PhD', type: 'Aided' },
    { name: 'Ph.D. Zoology', href: '/programmes/aided/phd/zoology', level: 'PhD', type: 'Aided' }
  ],
  commerce: [
    // UG Commerce & Management
    { name: 'B.Com', href: '/programmes/aided/ug/bcom', level: 'UG', type: 'Aided' },
    { name: 'BBA', href: '/programmes/self-finance/ug/bba', level: 'UG', type: 'Self-Finance' },
    { name: 'B.Com Accounting and Finance', href: '/programmes/self-finance/ug/bcom-accounting-finance', level: 'UG', type: 'Self-Finance' },
    { name: 'B.Com Banking and Insurance', href: '/programmes/self-finance/ug/bcom-banking-insurance', level: 'UG', type: 'Self-Finance' },
    { name: 'B.Com CA', href: '/programmes/self-finance/ug/bcom-ca', level: 'UG', type: 'Self-Finance' },
    // PG Commerce
    { name: 'M.Com', href: '/programmes/aided/pg/mcom', level: 'PG', type: 'Aided' },
    { name: 'M.Com', href: '/programmes/self-finance/pg/mcom', level: 'PG', type: 'Self-Finance' }
  ],
  computer: [
    // UG Computer Application
    { name: 'BCA', href: '/programmes/self-finance/ug/bca', level: 'UG', type: 'Self-Finance' },
    { name: 'B.Sc. Computer Science', href: '/programmes/self-finance/ug/bsc-computer-science', level: 'UG', type: 'Self-Finance' },
    { name: 'B.Sc. CS (Cyber Security)', href: '/programmes/self-finance/ug/bsc-cs-cyber-security', level: 'UG', type: 'Self-Finance' },
    // PG Computer Application
    { name: 'MCA', href: '/programmes/aided/pg/mca', level: 'PG', type: 'Aided' },
    { name: 'M.Sc. Computer Science', href: '/programmes/aided/pg/msc-computer-science', level: 'PG', type: 'Aided' },
    { name: 'M.Sc. Computer Science', href: '/programmes/self-finance/pg/msc-computer-science', level: 'PG', type: 'Self-Finance' },
    { name: 'M.Sc. CS (Data Analytics)', href: '/programmes/self-finance/pg/msc-cs-data-analytics', level: 'PG', type: 'Self-Finance' }
  ]
};

export default function AcademicProgramsSection() {
  const [activeCategory, setActiveCategory] = useState<'science' | 'commerce' | 'computer'>('science');

  const currentPrograms = programsByCategory[activeCategory];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of undergraduate, postgraduate, and doctoral programs designed to shape future leaders
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id as any)}
                className={cn(
                  'flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300',
                  'border-2',
                  isActive
                    ? 'bg-brand-green text-white border-brand-green shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-brand-green hover:bg-brand-green/5'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm md:text-base">{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentPrograms.map((program, index) => (
              <motion.div
                key={program.href}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={program.href}
                  className="group block p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-brand-green hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                        {program.name}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-green/10 text-brand-green">
                          {program.level}
                        </span>
                        <span className="text-xs text-gray-500">
                          {program.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-brand-green group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-brand-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Programs</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

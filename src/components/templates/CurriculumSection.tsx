'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { responsive } from '@/lib/responsive-utils';
import { RevealSection } from './RevealSection';
import { GlassCard, SectionBadge } from './ProgrammePageHelpers';
import type { CurriculumYear } from './ProgrammePage';

export function CurriculumSection({
  curriculum
}: {
  curriculum: CurriculumYear[];
}) {
  const [activeYear, setActiveYear] = useState(1);

  return (
    <section className={cn(responsive.section(), 'bg-brand-cream')} id="curriculum">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="Curriculum" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Course Structure
              </h2>
            </div>
          </RevealSection>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {curriculum.map((year) => (
              <button
                key={year.year}
                onClick={() => setActiveYear(year.year)}
                className={cn(
                  responsive.button(),
                  activeYear === year.year
                    ? 'bg-brand-green text-white'
                    : 'bg-white/70 text-gray-700 hover:bg-white',
                  'border border-brand-green/20'
                )}
              >
                Year {year.year}
              </button>
            ))}
          </div>

          {/* Semester Content */}
          {curriculum.map((year) => year.year === activeYear && (
            <div key={year.year} className={cn(responsive.grid('features', 'lg'))}>
              {year.semesters.map((semester, idx) => (
                <RevealSection key={semester.number} delay={idx * 100}>
                  <GlassCard className={cn(responsive.card())}>
                    <h3 className={cn(responsive.heading('h3'), 'text-brand-green mb-4')}>
                      Semester {semester.number}
                    </h3>
                    <ul className="space-y-2">
                      {semester.subjects.map((subject, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealSection>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

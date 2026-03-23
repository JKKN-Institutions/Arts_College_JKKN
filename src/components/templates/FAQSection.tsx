'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { responsive } from '@/lib/responsive-utils';
import { RevealSection } from './RevealSection';
import { SectionBadge } from './ProgrammePageHelpers';
import type { FAQItem } from './ProgrammePage';

export function FAQSection({
  faq
}: {
  faq: FAQItem[];
}) {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <section className={cn(responsive.section(), 'bg-white')} id="faq">
      <div className={cn('container mx-auto', responsive.container())}>
        <div className="max-w-4xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <SectionBadge text="FAQ" />
              <h2 className={cn(responsive.heading('h1'), 'text-gray-900 mb-4')}>
                Frequently Asked Questions
              </h2>
            </div>
          </RevealSection>

          <div className="space-y-4">
            {faq.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 50}>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? -1 : idx)}
                    className={cn(
                      'w-full px-6 py-4 text-left flex items-center justify-between',
                      'hover:bg-brand-cream/50',
                      responsive.transition('colors', 'fast')
                    )}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-brand-green flex-shrink-0',
                        responsive.transition('transform', 'fast'),
                        activeFAQ === idx && 'rotate-180'
                      )}
                    />
                  </button>
                  {activeFAQ === idx && (
                    <div className="px-6 py-4 bg-brand-cream/30 border-t border-gray-200">
                      <p className={cn(responsive.text('body'), 'text-gray-700')}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

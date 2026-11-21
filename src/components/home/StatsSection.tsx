'use client';

import { GraduationCap, Users, BookOpen, UserCheck } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

const stats = [
  {
    // NIRF 2026 data submission (AY 2024-25): faculty rows marked "currently working".
    icon: UserCheck,
    end: 110,
    suffix: '',
    label: 'Faculty Members (NIRF 2026)',
  },
  {
    icon: BookOpen,
    end: 32,
    suffix: '',
    label: 'UG, PG & PhD Programmes',
  },
  {
    icon: Users,
    end: 1516,
    suffix: '',
    label: 'Learners',
  },
  {
    // NIRF 2026 data submission: 51 working faculty list a Ph.D. as highest qualification.
    icon: GraduationCap,
    end: 50,
    suffix: '+',
    label: 'Ph.D Faculty (NIRF 2026)',
  },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-cream py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-green/10 mb-3 md:mb-4 group-hover:bg-brand-green/20 transition">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-brand-green" />
                </div>
                <div className="text-[20px] sm:text-[24px] md:text-[30px] leading-[28px] sm:leading-[32px] md:leading-[36px] font-bold tracking-[-0.75px] text-brand-green mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-[14px] leading-[20px] text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

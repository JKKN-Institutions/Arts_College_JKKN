import Link from 'next/link';
import { ArrowRight, Briefcase, Clock, GraduationCap, MapPin, type LucideIcon } from 'lucide-react';
import { CAREERS_PATH } from '@/lib/careers/config';
import {
  educationLabel,
  experienceLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
} from '@/lib/careers/format';
import { descriptionToPlainText } from '@/lib/careers/sanitize';
import type { PublicJob } from '@/lib/careers/types';

interface JobCardProps {
  job: PublicJob;
}

interface Fact {
  icon: LucideIcon;
  label: string;
}

export default function JobCard({ job }: JobCardProps) {
  const href = `${CAREERS_PATH}/${job.id}`;
  const facts = [
    { icon: Briefcase, label: roleCategoryLabel(job.role_category) },
    { icon: Clock, label: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { icon: GraduationCap, label: educationLabel(job.education_level) },
    { icon: MapPin, label: locationLabel(job) },
  ].filter((fact): fact is Fact => Boolean(fact.label));
  const excerpt = descriptionToPlainText(job.description, 160);
  const positions = positionsLabel(job.positions_open);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-green/20 bg-white p-6 shadow-sm">
      {job.department && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-green">{job.department.name}</p>
      )}
      <h3 className="mb-3 text-lg font-bold text-[#002309]">
        <Link href={href} className="hover:text-brand-green hover:underline">
          {job.title}
        </Link>
      </h3>
      {facts.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {facts.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-[#002309]"
            >
              <Icon className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      )}
      {excerpt && <p className="mb-5 line-clamp-3 text-sm text-[#002309]/80">{excerpt}</p>}
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-[#002309]/70">{positions}</span>
        <Link
          href={href}
          aria-label={`View details and apply for ${job.title}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-brand-green px-5 text-sm font-semibold text-white transition-colors hover:bg-[#095c37]"
        >
          View &amp; Apply
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

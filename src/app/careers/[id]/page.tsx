import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import ApplyForm from "@/components/careers/ApplyForm";
import JsonLd from "@/components/careers/JsonLd";
import { getCollegeJob } from "@/lib/careers/api";
import { CAREERS_PATH, SITE_URL } from "@/lib/careers/config";
import {
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from "@/lib/careers/format";
import { descriptionToPlainText, sanitizeJobDescription } from "@/lib/careers/sanitize";
import { buildJobPostingSchema } from "@/lib/careers/schema";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 300;

interface CareerDetailPageProps {
  params: Promise<{ id: string }>;
}

// Job pages render on first request and are then cached by ISR (dynamicParams defaults
// to true). Not prerendering them keeps `next build` independent of MyJKKN uptime.
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = await getCollegeJob(id);
  if (!job) return { title: "Job Opening Not Found", robots: { index: false, follow: true } };
  const url = `${SITE_URL}${CAREERS_PATH}/${job.id}`;
  const description =
    descriptionToPlainText(job.description, 155) ||
    `Apply for ${job.title} at ${siteConfig.name}, Komarapalayam.`;
  return {
    title: job.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: job.title, description, url, type: "website", siteName: siteConfig.name },
  };
}

const DESCRIPTION_CLASSES =
  "text-[#002309] leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_li_p]:mb-0 [&_strong]:font-semibold [&_a]:text-brand-green [&_a]:underline [&_hr]:my-6 [&_hr]:border-brand-green/20 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-brand-green [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:font-bold [&_blockquote]:border-l-4 [&_blockquote]:border-brand-green [&_blockquote]:pl-4";

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { id } = await params;
  const job = await getCollegeJob(id);
  if (!job) notFound();

  const pageUrl = `${SITE_URL}${CAREERS_PATH}/${job.id}`;
  const descriptionHtml = sanitizeJobDescription(job.description);
  const jobPostingSchema = buildJobPostingSchema(job, pageUrl, descriptionHtml);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}${CAREERS_PATH}` },
      { "@type": "ListItem", position: 3, name: job.title, item: pageUrl },
    ],
  };

  const facts = [
    { term: "Role type", value: roleCategoryLabel(job.role_category) },
    { term: "Department", value: job.department?.name ?? null },
    { term: "Employment", value: jobTypeLabel(job.job_type) },
    { term: "Experience", value: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { term: "Education", value: educationLabel(job.education_level) },
    { term: "Qualifications", value: job.qualifications?.length ? job.qualifications.join(", ") : null },
    { term: "Skills", value: job.skills?.length ? job.skills.join(", ") : null },
    { term: "Openings", value: positionsLabel(job.positions_open) },
    { term: "Location", value: locationLabel(job) },
    { term: "Salary", value: salaryLabel(job.salary) },
    { term: "Posted on", value: formatDate(job.posted_at) },
    { term: "Apply by", value: formatDate(job.closes_at) },
    { term: "Job code", value: job.job_code },
  ].filter((fact): fact is { term: string; value: string } => Boolean(fact.value));

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {jobPostingSchema && <JsonLd data={jobPostingSchema} />}

      <div className="min-h-screen bg-brand-cream">
        <section className="bg-brand-green text-white py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-white hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <span>Careers</span>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <span aria-current="page" className="text-white">
                    {job.title}
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="text-2xl md:text-4xl font-bold mb-3">{job.title}</h1>
            <p className="text-white/90 font-medium">
              {siteConfig.name}
              {job.department ? ` · ${job.department.name}` : ""}
            </p>
            <a
              href="#apply"
              className="mt-6 inline-flex min-h-[44px] items-center rounded-lg bg-brand-yellow px-6 font-semibold text-[#002309] transition-colors hover:bg-white"
            >
              Apply for this role
            </a>
          </div>
        </section>

        <div className="px-4 py-10">
          <div className="max-w-6xl mx-auto">
            <Link
              href={CAREERS_PATH}
              className="mb-6 inline-flex min-h-[44px] items-center gap-2 font-semibold text-brand-green hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All current openings
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
              <article className="rounded-2xl border border-brand-green/20 bg-white p-6 md:p-8 lg:col-span-2">
                <h2 className="mb-4 text-xl font-bold text-brand-green">About this role</h2>
                {descriptionHtml ? (
                  <div className={DESCRIPTION_CLASSES} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                ) : (
                  <p className="text-[#002309]">Contact us for the full role description.</p>
                )}
              </article>

              <aside className="h-fit rounded-2xl border border-brand-green/20 bg-white p-6">
                <h2 className="mb-4 text-lg font-bold text-brand-green">Role at a glance</h2>
                <dl className="space-y-3">
                  {facts.map(({ term, value }) => (
                    <div key={term}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-brand-green">{term}</dt>
                      <dd className="text-[#002309]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>

            <section id="apply" aria-labelledby="apply-heading" className="mt-10 scroll-mt-28">
              <h2 id="apply-heading" className="mb-4 text-2xl font-bold text-brand-green">
                Apply for this role
              </h2>
              <ApplyForm jobId={job.id} jobTitle={job.title} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

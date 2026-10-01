'use client';

import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  APPLICATION_FIELD_ORDER,
  buildApplicationFormData,
  submitApplication,
  validateApplication,
  type ApplicationField,
  type ApplicationInput,
  type FieldErrors,
} from '@/lib/careers/apply';

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY: ApplicationInput = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  qualification: '',
  experience_years: '0',
  experience_extra_months: '0',
  current_job_title: '',
  current_company: '',
  resume: null,
  consent: false,
  company_fax: '',
};

const INPUT_CLASSES =
  'w-full min-h-[44px] rounded-lg border bg-white px-3 text-[#002309] focus:outline-none focus:ring-2 focus:ring-brand-green';

const inputBorder = (error?: string) => (error ? 'border-2 border-red-600' : 'border-brand-green/30');

/** DOM id of the input to focus for a given error field. */
const fieldInputId = (field: ApplicationField) =>
  `apply-${field === 'experience_months' ? 'experience_years' : field}`;

interface FieldErrorProps {
  id: string;
  message?: string;
}

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 flex items-center gap-1 text-sm font-semibold text-red-700">
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

interface TextFieldProps {
  name: 'first_name' | 'last_name' | 'email' | 'phone' | 'qualification' | 'current_job_title' | 'current_company';
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  maxLength: number;
  autoComplete?: string;
  hint?: ReactNode;
}

function TextField({ name, label, value, error, onChange, type = 'text', required, maxLength, autoComplete, hint }: TextFieldProps) {
  const id = `apply-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#002309]">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-[#002309]/70"> (optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(INPUT_CLASSES, inputBorder(error))}
      />
      {hint && !error && <p className="mt-1 text-xs text-[#002309]/70">{hint}</p>}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export default function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
  const [values, setValues] = useState<ApplicationInput>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof ApplicationInput>(key: K, value: ApplicationInput[K], errorKey: ApplicationField) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [errorKey]: undefined }));
  };

  const focusFirstError = (found: FieldErrors) => {
    const first = APPLICATION_FIELD_ORDER.find((field) => found[field]);
    if (first) requestAnimationFrame(() => document.getElementById(fieldInputId(first))?.focus());
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const found = validateApplication(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus('error');
      setMessage('Please correct the highlighted fields.');
      focusFirstError(found);
      return;
    }

    setStatus('submitting');
    setMessage('');
    const result = await submitApplication(jobId, buildApplicationFormData(values, window.location.hostname));

    if (result.ok) {
      setStatus('success');
      setReference(result.reference);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    const serverErrors = result.fields as FieldErrors;
    setErrors(serverErrors);
    setStatus('error');
    setMessage(result.error);
    if (Object.keys(serverErrors).length > 0) focusFirstError(serverErrors);
    else requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === 'success') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-brand-green bg-white p-6 md:p-8 focus:outline-none"
      >
        <CheckCircle2 className="mb-3 h-10 w-10 text-brand-green" aria-hidden="true" />
        <h3 className="mb-2 text-xl font-bold text-brand-green">Application submitted</h3>
        <p className="text-[#002309]">
          Thank you for applying for <strong>{jobTitle}</strong>. A confirmation email has been sent to{' '}
          <strong>{values.email.trim()}</strong>, and our team will review your application.
        </p>
        {reference && (
          <p className="mt-4 text-[#002309]">
            Your reference number: <strong className="font-mono">{reference}</strong>
          </p>
        )}
      </div>
    );
  }

  const experienceErrorId = 'apply-experience-error';
  const resumeErrorId = 'apply-resume-error';
  const consentErrorId = 'apply-consent-error';

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl border border-brand-green/20 bg-white p-6 md:p-8">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status === 'error' && message && (
          <p role="alert" className="mb-5 flex items-start gap-2 rounded-lg border-2 border-red-600 bg-red-50 p-3 font-semibold text-red-800">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <TextField name="first_name" label="First name" value={values.first_name} error={errors.first_name}
          onChange={(v) => update('first_name', v, 'first_name')} required maxLength={100} autoComplete="given-name" />
        <TextField name="last_name" label="Last name" value={values.last_name} error={errors.last_name}
          onChange={(v) => update('last_name', v, 'last_name')} required maxLength={100} autoComplete="family-name" />
        <TextField name="email" type="email" label="Email" value={values.email} error={errors.email}
          onChange={(v) => update('email', v, 'email')} required maxLength={254} autoComplete="email" />
        <TextField name="phone" type="tel" label="Phone" value={values.phone} error={errors.phone}
          onChange={(v) => update('phone', v, 'phone')} required maxLength={20} autoComplete="tel" />
        <div className="md:col-span-2">
          <TextField name="qualification" label="Highest qualification" value={values.qualification}
            error={errors.qualification} onChange={(v) => update('qualification', v, 'qualification')}
            required maxLength={200} hint="For example: M.Sc. Computer Science, Ph.D." />
        </div>

        <fieldset className="md:col-span-2" aria-describedby={errors.experience_months ? experienceErrorId : undefined}>
          <legend className="mb-1.5 text-sm font-semibold text-[#002309]">
            Total experience<span aria-hidden="true"> *</span>
          </legend>
          <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
            <div>
              <label htmlFor="apply-experience_years" className="mb-1 block text-xs text-[#002309]/80">Years</label>
              <input id="apply-experience_years" name="experience_years" type="number" inputMode="numeric" min={0} max={60}
                value={values.experience_years}
                onChange={(e) => update('experience_years', e.target.value, 'experience_months')}
                aria-invalid={errors.experience_months ? true : undefined}
                className={cn(INPUT_CLASSES, inputBorder(errors.experience_months))} />
            </div>
            <div>
              <label htmlFor="apply-experience_extra_months" className="mb-1 block text-xs text-[#002309]/80">Months</label>
              <input id="apply-experience_extra_months" name="experience_extra_months" type="number" inputMode="numeric" min={0} max={11}
                value={values.experience_extra_months}
                onChange={(e) => update('experience_extra_months', e.target.value, 'experience_months')}
                aria-invalid={errors.experience_months ? true : undefined}
                className={cn(INPUT_CLASSES, inputBorder(errors.experience_months))} />
            </div>
          </div>
          <FieldError id={experienceErrorId} message={errors.experience_months} />
        </fieldset>

        <TextField name="current_job_title" label="Current job title" value={values.current_job_title}
          error={errors.current_job_title} onChange={(v) => update('current_job_title', v, 'current_job_title')}
          maxLength={150} autoComplete="organization-title" />
        <TextField name="current_company" label="Current organisation" value={values.current_company}
          error={errors.current_company} onChange={(v) => update('current_company', v, 'current_company')}
          maxLength={150} autoComplete="organization" />

        <div className="md:col-span-2">
          <label htmlFor="apply-resume" className="mb-1.5 block text-sm font-semibold text-[#002309]">
            Resume<span aria-hidden="true"> *</span>
          </label>
          <input id="apply-resume" name="resume" type="file" required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => update('resume', e.target.files?.[0] ?? null, 'resume')}
            aria-invalid={errors.resume ? true : undefined}
            aria-describedby={errors.resume ? resumeErrorId : 'apply-resume-hint'}
            className="block w-full min-h-[44px] text-sm text-[#002309] file:mr-4 file:min-h-[44px] file:cursor-pointer file:rounded-lg file:border-0 file:bg-brand-cream file:px-4 file:font-semibold file:text-brand-green hover:file:bg-brand-green/10" />
          {!errors.resume && <p id="apply-resume-hint" className="mt-1 text-xs text-[#002309]/70">PDF, DOC or DOCX, smaller than 2 MB.</p>}
          <FieldError id={resumeErrorId} message={errors.resume} />
        </div>

        {/* Honeypot — hidden from people and assistive tech; bots fill it. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="apply-company_fax">Company fax</label>
          <input id="apply-company_fax" name="company_fax" type="text" tabIndex={-1} autoComplete="off"
            value={values.company_fax} onChange={(e) => setValues((v) => ({ ...v, company_fax: e.target.value }))} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="apply-consent" className="flex min-h-[44px] cursor-pointer items-start gap-3 text-sm text-[#002309]">
            <input id="apply-consent" name="consent" type="checkbox" checked={values.consent}
              onChange={(e) => update('consent', e.target.checked, 'consent')}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? consentErrorId : undefined}
              className="mt-0.5 h-5 w-5 shrink-0 accent-brand-green" />
            <span>
              I agree that JKKN Institutions may store and use the details and resume I submit to process my
              application.<span aria-hidden="true"> *</span>
            </span>
          </label>
          <FieldError id={consentErrorId} message={errors.consent} />
        </div>
      </div>

      <button type="submit" disabled={status === 'submitting'}
        className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-brand-green px-8 font-semibold text-white transition-colors hover:bg-[#095c37] disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  );
}

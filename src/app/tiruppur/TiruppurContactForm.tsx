'use client';

import { useState } from 'react';

export default function TiruppurContactForm() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: 'Tiruppur',
    programme: '',
    question: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // DEP-14, 2026-08-08. This form has no server side - it hands the enquiry off to WhatsApp -
    // so before this event fired, a submitted enquiry left NO trace anywhere: not in the CRM,
    // not on a server, and not in GA4 (form_submit measured 0 across all six properties over
    // the 28 days to 2026-08-08). This does not change what the form DOES; it only makes the
    // submission countable.
    // NO PII, and this is not a style preference: name and mobile are collected by this form
    // and are deliberately NOT sent to GA4. Only city, programme and path leave the page.
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "lead_form_submit", {
        form_name: "city_enquiry",
        city: form.city,
        programme: form.programme || "not_selected",
        destination: "whatsapp",
        page_path: window.location.pathname,
      });
    }

    const msg = encodeURIComponent(
      `Name: ${form.name}\nMobile: ${form.mobile}\nCity: ${form.city}\nProgramme: ${form.programme}\nQuestion: ${form.question}`
    );
    window.open(`https://wa.me/919943353353?text=${msg}`, '_blank');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60"
          />
        </div>
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            Your City
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60"
          />
        </div>
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            Programme Interested In
          </label>
          <select
            name="programme"
            value={form.programme}
            onChange={handleChange}
            className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/60 appearance-none"
          >
            <option value="" className="text-gray-800 bg-white">Select a Programme</option>
            <option value="B.Sc" className="text-gray-800 bg-white">B.Sc (various specialisations)</option>
            <option value="B.Com" className="text-gray-800 bg-white">B.Com</option>
            <option value="BBA" className="text-gray-800 bg-white">BBA</option>
            <option value="BCA" className="text-gray-800 bg-white">BCA</option>
            <option value="Other" className="text-gray-800 bg-white">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-1.5">
          Any Questions?
        </label>
        <textarea
          name="question"
          value={form.question}
          onChange={handleChange}
          rows={3}
          placeholder="e.g., What is the fee for B.Sc (various specialisations)?"
          className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-full text-base transition-colors"
      >
        Submit Enquiry — Get a Call Back
      </button>

      <p className="text-center text-white/70 text-sm">
        Or call us directly:{' '}
        <a href="tel:+919943353353" className="text-white underline">
          +91-XXXXXXXXXX
        </a>{' '}
        •{' '}
        <a
          href="https://wa.me/919943353353"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  );
}

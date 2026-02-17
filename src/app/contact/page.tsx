"use client";
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-green overflow-hidden py-16 px-4">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <Phone className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out to us for admissions, enquiries, or any other information.
          </p>
        </div>
      </section>

      {/* Get In Touch + Online Admission Form */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left — Contact Cards */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-brand-yellow mb-8" />

              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <a
                      href="tel:+919345855001"
                      className="text-brand-green hover:underline text-sm md:text-base"
                    >
                      +91 9345855001
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:alliedhealth@jkkn.ac.in"
                      className="text-brand-green hover:underline text-sm md:text-base break-all"
                    >
                      alliedhealth@jkkn.ac.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      JKKN College of Allied Health Sciences<br />
                      NH-544, Kumarapalayam (TK)<br />
                      Namakkal (DT), Tamil Nadu - 638183
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Admission Form + Office Hours */}
            <div className="space-y-6">
              {/* Online Admission CTA */}
              <div className="bg-brand-green rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-3">Online Admission</h2>
                <p className="text-white/80 text-sm md:text-base mb-6">
                  Ready to join us? Fill out our online admission form and start your journey with JKKN.
                </p>
                <a
                  href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-brand-green mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Monday – Friday</span>
                    <span className="font-medium text-gray-800">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-800">9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-800">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location — Google Maps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-2">
            Our Location
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mb-8" />
          <div className="rounded-xl overflow-hidden shadow-md w-full h-80 md:h-[450px]">
            <iframe
              title="JKKN College of Allied Health Sciences Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.832!2d77.6977!3d11.4397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96a9b0000000%3A0x0!2sJKKN+College+Kumarapalayam!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Have Questions? CTA */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Our team is ready to assist you. Reach out via phone or email and we&apos;ll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919345855001"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="mailto:alliedhealth@jkkn.ac.in"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green font-semibold px-8 py-3 rounded-lg hover:bg-brand-green hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "./faq-data";



const ALL = "All Topics";

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const tabs = [ALL, ...faqCategories.map((c) => c.category)];

  const visibleCategories =
    activeCategory === ALL
      ? faqCategories
      : faqCategories.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fbfbee]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0b6d41] via-[#0e8a52] to-[#1aab68] py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mx-auto mb-4"></div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about JKKN College of Arts and Science — admissions, programmes, campus, and more.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${
                  activeCategory === tab
                    ? "bg-[#0b6d41] text-white"
                    : "border border-gray-300 text-gray-600 hover:border-[#0b6d41] hover:text-[#0b6d41] bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Body */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-10">
          {visibleCategories.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ffde59] inline-block rounded-full"></span>
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${section.category}-${idx}`}
                    className="bg-white border border-gray-200 rounded-xl px-5 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-800 hover:text-[#0b6d41] hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-14 bg-[#0b6d41] rounded-2xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6">
            Our admissions team is happy to help you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919345855001"
              className="inline-flex items-center gap-2 bg-[#ffde59] text-[#002309] font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors text-sm md:text-base"
            >
              +91 93458 55001
            </a>
            <a
              href="mailto:arts@jkkn.org"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              arts@jkkn.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

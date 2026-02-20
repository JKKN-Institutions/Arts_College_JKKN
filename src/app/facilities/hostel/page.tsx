'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Diamond, CheckCircle2 } from 'lucide-react';

const boysHostelFeatures = [
  "Premium (Non-veg) and Classic (Veg) meal plans available",
  "24/7 security with CCTV surveillance",
  "Medical and first-aid facilities",
  "High-speed Wi-Fi connectivity",
  "Hygienic and nutritious food",
  "RO purified drinking water",
  "Well-maintained study room",
  "JKKN Institutions' Boys Hostel is a community where you can make lifelong friendships and memories",
  "The hostel's dedicated staff is always available to assist you with any issues",
  "State-of-the-art facilities and amenities ensure a memorable stay"
];

const girlsHostelFeatures = [
  "Premium (Non-veg) and Classic (Veg) meal plans available",
  "24/7 security with CCTV surveillance and women security personnel",
  "Medical and first-aid facilities",
  "High-speed Wi-Fi connectivity",
  "Hygienic and nutritious food",
  "RO purified drinking water",
  "Well-maintained study room",
  "JKKN Institutions' Girls Hostel is a community where you can make lifelong friendships and memories",
  "The hostel's dedicated staff is always available to assist you with any issues",
  "State-of-the-art facilities and amenities ensure a safe and memorable stay"
];

export default function HostelPage() {
  const [activeTab, setActiveTab] = useState<'boys' | 'girls'>('boys');

  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* FACILITIES Badge */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold tracking-wider rounded-full">
            FACILITIES
          </span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6 text-center">
          Hostel
        </h1>

        {/* Diamond Divider */}
        <div className="flex justify-center mb-8">
          <Diamond className="w-3 h-3 text-brand-green fill-brand-green" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('boys')}
            className={`px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-all ${
              activeTab === 'boys'
                ? 'bg-brand-green text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Boys Hostel
          </button>
          <button
            onClick={() => setActiveTab('girls')}
            className={`px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-all ${
              activeTab === 'girls'
                ? 'bg-brand-green text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Girls Hostel
          </button>
        </div>

        {/* Boys Hostel Content */}
        {activeTab === 'boys' && (
          <div className="animate-fadeIn">
            {/* Image Grid - 3 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/facilities/boys-hostel-1.avif"
                  alt="JKKN boys hostel building exterior view"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/facilities/boys-hostel-1 (1).avif"
                  alt="JKKN boys hostel dormitory room interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/facilities/boys-hostel-2.avif"
                  alt="JKKN boys hostel common area and facilities"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              <p className="text-justify">
                Our boys hostel is located within the campus premises, making it an ideal choice for students who prefer a hassle-free commute to their classes. The hostel is well-maintained and equipped with all the necessary amenities to cater to your needs. We offer single and shared rooms that are spacious and well-ventilated, ensuring a comfortable living experience for our residents.
              </p>
              <p className="text-justify">
                At JKKN, we understand the importance of academics, and hence we provide an environment that is conducive to studying. Our hostel provides a peaceful and quiet atmosphere, enabling students to concentrate on their studies without any distractions. With our high-speed internet connectivity, students can easily access online resources and complete their academic assignments with ease.
              </p>
            </div>

            {/* Bullet List Features */}
            <div className="space-y-3">
              {boysHostelFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Girls Hostel Content */}
        {activeTab === 'girls' && (
          <div className="animate-fadeIn">
            {/* Image Grid - 3 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/facilities/girls-hostel-1.avif"
                  alt="JKKN girls hostel building exterior view"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/facilities/girls-hostel-2.avif"
                  alt="JKKN girls hostel dormitory room interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/facilities/girls-hostel-3.avif"
                  alt="JKKN girls hostel common area and facilities"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              <p className="text-justify">
                Our girls hostel is located within the campus premises, making it an ideal choice for students who prefer a hassle-free commute to their classes. The hostel is well-maintained and equipped with all the necessary amenities to cater to your needs. We offer single and shared rooms that are spacious and well-ventilated, ensuring a comfortable and safe living experience for our residents.
              </p>
              <p className="text-justify">
                At JKKN, we understand the importance of academics, and hence we provide an environment that is conducive to studying. Our girls hostel provides a peaceful and quiet atmosphere with enhanced security measures, enabling students to concentrate on their studies without any distractions. With our high-speed internet connectivity, students can easily access online resources and complete their academic assignments with ease.
              </p>
            </div>

            {/* Bullet List Features */}
            <div className="space-y-3">
              {girlsHostelFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

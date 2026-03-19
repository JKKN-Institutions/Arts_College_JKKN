import type { Metadata } from "next";
import React from 'react';
import { Eye, Target, Sparkles, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Vision and Mission",
  description: "Discover the vision and mission of JKKN College of Arts and Science (Autonomous). Committed to holistic education, research, and community development near Erode, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/about/vision-mission" },
  openGraph: {
    title: "Vision & Mission | JKKN Arts & Science",
    description: "Discover the vision and mission of JKKN College of Arts and Science (Autonomous). Committed to holistic education, research, and community development near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/about/vision-mission",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green via-[#0a5d39] to-[#074a2e] relative overflow-hidden font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "About", url: "https://cas.jkkn.ac.in/about" },
        { name: "Vision & Mission", url: "https://cas.jkkn.ac.in/about/vision-mission" },
      ]} />
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-brand-yellow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-6">
            <Sparkles className="h-4 w-4 text-brand-yellow" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Foundation
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Vision <span className="text-brand-yellow">&</span> Mission
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence in education and innovation
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">

          {/* Vision Card */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow/30 to-brand-green/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card Content */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 sm:p-8 md:p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-brand-green" />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                Our Vision
                <Lightbulb className="h-6 w-6 text-brand-yellow animate-pulse" />
              </h2>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                To be a <span className="text-brand-yellow font-semibold">Leading Global Innovative Solutions</span> provider for the ever-changing needs of the society
              </p>

              {/* Decorative Elements */}
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
                  <span>Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Global Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/30 to-brand-yellow/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card Content */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 sm:p-8 md:p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                Our Mission
                <TrendingUp className="h-6 w-6 text-brand-yellow animate-pulse" />
              </h2>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                Our goal is to encourage students to push the limits of their fields by promoting <span className="text-brand-yellow font-semibold">interdisciplinary collaboration</span> and exploring the convergence of biology with other areas. We strive to nurture curiosity, creativity, and critical thinking in our learners, aiming for academic excellence and the development of innovative solutions to complex societal issues.
              </p>

              {/* Decorative Elements */}
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
                  <span>Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 md:mt-16">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Our <span className="text-brand-yellow">Core Values</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              The fundamental principles that guide our actions and decisions
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Value 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Student-Centric</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Placing learners at the heart of everything we do
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Innovation</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Embracing creativity and cutting-edge solutions
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Excellence</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Striving for the highest standards in education
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Transparency</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Operating with honesty and accountability
                </p>
              </div>
            </div>

            {/* Value 5 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Integrity</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Upholding strong moral and ethical principles
                </p>
              </div>
            </div>

            {/* Value 6 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Collaboration</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Working together to achieve shared goals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow to-yellow-300 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-full border border-white/30 px-8 py-4">
              <p className="text-white text-sm sm:text-base font-medium">
                Building tomorrow's leaders, <span className="text-brand-yellow font-bold">today</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

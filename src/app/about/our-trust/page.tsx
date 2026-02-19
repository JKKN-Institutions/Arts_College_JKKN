import React from 'react';
import { Calendar, Building2, GraduationCap, Users, Heart, Award, Target, Lightbulb, Shield, HandHeart } from 'lucide-react';
import Image from 'next/image';

export default function OurTrust() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green via-[#0a5d39] to-[#074a2e] font-sans">

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Page Title */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase">EST. 1952</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              OUR TRUST
            </h1>
            <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl font-medium">
              J.K.K. Rangammal Charitable Trust
            </p>
          </div>

          {/* Founder Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 mb-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Profile Image with Golden Border */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full relative">
                  <div className="absolute inset-0 rounded-full border-4 border-brand-yellow p-1 shadow-lg">
                    <div className="w-full h-full rounded-full border-4 border-yellow-600 overflow-hidden bg-white">
                      <Image
                        src="/images/about/our trust.avif"
                        alt="J.K.K. Rangammal Charitable Trust Founder"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3">
                  <div className="inline-block px-4 py-1.5 bg-brand-yellow rounded-full mb-3">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-wide">Founder</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  SHRI. J.K.K. NATARAJAH CHETTIAR
                </h2>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  Founder of J.K.K. Rangammal Charitable Trust
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Year Established */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-1 md:mb-2">1952</h3>
              <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-wide font-semibold">Year Established</p>
            </div>

            {/* Institutions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-1 md:mb-2">9</h3>
              <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-wide font-semibold">Institutions</p>
            </div>

            {/* Alumni */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-1 md:mb-2">50K+</h3>
              <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-wide font-semibold">Alumni</p>
            </div>

            {/* Current Students */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-1 md:mb-2">7K+</h3>
              <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-wide font-semibold">Current Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <span className="text-brand-yellow text-sm font-bold uppercase">● Our Legacy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl">
            <div className="space-y-4 md:space-y-6 text-white/90 text-sm md:text-base leading-relaxed">
              <p className="border-l-4 border-brand-yellow pl-4 md:pl-6">
                In the 1960s, female children in Komarapalayam had to walk 2.5 km to the nearby town of Bhavani for their schooling. Some families hesitated to send their daughters on such long journeys. Realizing the need for women's education, a visionary philanthropist of the zone, Shri. J.K.K. Natarajah Chettiar, initiated a girls' school in Komarapalayam that started functioning.
              </p>

              <p>
                The Trust, J.K.K. Rangammal Charitable Trust (Regd.) No.21 was established in 1969. With the motto of providing literacy and an emphasis on women's empowerment, it was named after the mother of Shri. N. Mahalingam, Managing Trustee. Shri. N. Sendamaraai, his daughter and daughter of Shri. N. Mahalingam, Managing Trustee, expanded the service by providing multidisciplinary education to both genders so that rural India could also be competitive with the rest of the country.
              </p>

              <p>
                With each phase, with the support of like-minded people, under the umbrella of the Trust, now there are ten institutions, inclusive of Dental College, Pharmacy College, Nursing College, Diploma College, Engineering Colleges, and Arts and Science Colleges. Through these colleges, various health camps are also held in rural areas. Study tours to gain field experience in management and teaching fields are conducted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <span className="text-brand-yellow text-sm font-bold uppercase">● What We Stand For</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {/* Value 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Empowerment</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Empowering women through quality education
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Excellence</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Striving for the highest standards
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Purpose</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Aiming for transformative impact
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrity</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Acting with honesty and transparency
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Service</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Serving society with compassion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Key Milestones
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="space-y-4">
            {/* Milestone 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-yellow mb-2">1952</h3>
                  <h4 className="text-lg font-semibold text-white mb-2">Girls School Founded</h4>
                  <p className="text-white/80 text-sm">
                    Shri. J.K.K. Natarajah Chettiar established the first girls' school in Komarapalayam
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-yellow mb-2">1969</h3>
                  <h4 className="text-lg font-semibold text-white mb-2">Trust Established</h4>
                  <p className="text-white/80 text-sm">
                    J.K.K. Rangammal Charitable Trust was officially registered
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-yellow mb-2">1995</h3>
                  <h4 className="text-lg font-semibold text-white mb-2">College Expansion</h4>
                  <p className="text-white/80 text-sm">
                    Expanded to include Arts and Science College, providing multidisciplinary education
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-yellow mb-2">2025</h3>
                  <h4 className="text-lg font-semibold text-white mb-2">Multi-Disciplinary Growth</h4>
                  <p className="text-white/80 text-sm">
                    Now operating 9 institutions including Dental, Pharmacy, Nursing, Engineering, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

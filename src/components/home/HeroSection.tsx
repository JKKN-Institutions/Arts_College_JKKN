import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-green via-[#0a5d39] to-[#074a2e] overflow-hidden min-h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] flex items-center font-sans py-8 md:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-4 sm:gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-5">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg w-fit">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-yellow" />
              <span className="text-[9px] sm:text-[11px] font-semibold text-white uppercase tracking-wide sm:tracking-wider">
                NAAC Accredited | UGC Recognized | Autonomous
              </span>
            </div>

            {/* Main Heading - Optimized Size */}
            <div>
              <h1 className="font-bold leading-tight" data-speakable>
                <span className="text-white text-[22px] sm:text-[34px] lg:text-[40px] xl:text-[44px] leading-[30px] sm:leading-[42px] lg:leading-[48px] xl:leading-[52px] block mb-1 sm:mb-1.5">
                  Shape Your Future at  JKKN College  of Arts and Science (Autonomous)
                </span>
                {/* <span className="bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-yellow bg-clip-text text-transparent text-[30px] sm:text-[38px] lg:text-[44px] xl:text-[48px] leading-[38px] sm:leading-[46px] lg:leading-[52px] xl:leading-[56px] block mb-1.5">
                  JKKN College
                </span> */}
                {/* <span className="text-white/95 text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[36px] xl:leading-[38px] block">
                  of Arts &amp; Science <span className="text-brand-yellow/90 font-light text-[18px] sm:text-[20px] lg:text-[24px]">(Autonomous)</span>
                </span> */}
              </h1>
            </div>

            {/* Description - More Compact */}
            <p className="hero-description text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[24px] lg:leading-[26px] text-white/90 font-normal max-w-xl">
              Transform your career with <span className="text-brand-yellow font-semibold">industry-integrated programs</span> in Science, Commerce, IT &amp; Management. Join <span className="text-brand-yellow font-semibold">1300+ students</span> building successful careers since 1952.
            </p>

            {/* Stats Row - Compact */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3" data-speakable>
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 sm:p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-brand-yellow text-lg sm:text-xl lg:text-2xl font-bold mb-0.5">95%</div>
                <div className="text-white/80 text-[9px] sm:text-[10px] font-medium">Placement</div>
              </div>
              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 sm:p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-brand-yellow text-lg sm:text-xl lg:text-2xl font-bold mb-0.5">1300+</div>
                <div className="text-white/80 text-[9px] sm:text-[10px] font-medium">Students</div>
              </div>
              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 sm:p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-brand-yellow text-lg sm:text-xl lg:text-2xl font-bold mb-0.5">17</div>
                <div className="text-white/80 text-[9px] sm:text-[10px] font-medium">Programs</div>
              </div>
              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 sm:p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-brand-yellow text-lg sm:text-xl lg:text-2xl font-bold mb-0.5">74+</div>
                <div className="text-white/80 text-[9px] sm:text-[10px] font-medium">Years</div>
              </div>
            </div>

            {/* Placement Highlight - Compact */}
            {/* <div className="bg-gradient-to-r from-brand-yellow/20 to-transparent border-l-4 border-brand-yellow rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-start gap-2.5">
                <div className="bg-brand-yellow rounded-lg p-1.5 mt-0.5">
                  <TrendingUp className="h-4 w-4 text-brand-green" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-0.5">Top Company Placements</div>
                  <div className="text-white/90 text-xs">TCS • Infosys • Wipro • Cognizant • HCL • Accenture</div>
                </div>
              </div>
            </div> */}

            {/* CTA Buttons - Compact */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-yellow text-brand-green px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[14px] sm:text-[15px] hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transform text-center inline-flex items-center justify-center gap-2"
              >
                Apply for 2026-27
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="group bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[14px] sm:text-[15px] hover:bg-white/20 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
              >
                Explore Programs
                <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content - Optimized Image Size */}
          <div className="flex flex-col items-center justify-center mt-4 lg:mt-0 w-full">
            {/* Main Image - Better Sized */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md xl:max-w-lg">
              {/* Glow Effect Behind - Hidden on mobile */}
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-yellow/20 to-transparent rounded-3xl blur-2xl hidden sm:block"></div>

              {/* Image Container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-white/20 sm:border-2">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/homepage/JKKN Arts - Homepage First Image (1).png"
                    alt="JKKN College Campus"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 40vw"
                    quality={75}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <div className="absolute -bottom-2 -left-2 bg-brand-yellow rounded-2xl w-20 h-20 -z-10 hidden sm:block"></div>
              <div className="absolute -top-2 -right-2 bg-white/20 rounded-2xl w-16 h-16 -z-10 hidden sm:block"></div>
            </div>

            {/* Achievement Badges - Compact */}
            {/* <div className="mt-4 grid grid-cols-2 gap-3 w-full max-w-md xl:max-w-lg">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="bg-gradient-to-br from-brand-green to-[#095c37] p-2 rounded-lg">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-brand-green font-bold text-xs">NAAC A+</div>
                    <div className="text-gray-600 text-[10px]">Accredited</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-xl p-3 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="bg-white/90 p-2 rounded-lg">
                    <Building2 className="h-4 w-4 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-brand-green font-bold text-xs">Autonomous</div>
                    <div className="text-brand-green/80 text-[10px]">Status</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Smaller */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors cursor-pointer">
          <span className="text-[9px] font-medium uppercase tracking-wider">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
    </section>
  );
}

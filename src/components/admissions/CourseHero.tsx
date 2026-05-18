import {
  Calendar,
  ArrowRight,
  Phone,
  GraduationCap,
  Clock,
  BookOpen,
  Users,
} from "lucide-react";
import type { ProgrammeInfo } from "@/data/programme-metadata";
import { siteConfig } from "@/lib/site-config";

interface CourseHeroProps {
  programme: ProgrammeInfo;
}

export function CourseHero({ programme }: CourseHeroProps) {
  const semesters =
    programme.level === "PhD"
      ? "Research"
      : programme.level === "PG"
      ? "4 Semesters"
      : "6 Semesters";

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#eaf1e2" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-white/90 text-gray-900">
              <Calendar className="w-4 h-4 text-[#0b6d41]" />
              Admissions Open 2026-27
            </span>
            <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold border border-[#0b6d41]/15 text-[#0b6d41]">
              <GraduationCap className="w-4 h-4" />
              {programme.category}
            </span>
            <span className="inline-flex items-center gap-2 bg-[#ffde59]/30 px-4 py-1.5 rounded-full text-sm font-semibold border border-[#ffde59]/50 text-gray-900">
              {programme.level} Programme
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b6d41] mb-4 leading-tight">
            {programme.fullName} Admission 2026-27
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            {programme.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
              <Clock className="w-5 h-5 text-[#0b6d41]" />
              <span className="font-medium">{programme.duration}</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
              <BookOpen className="w-5 h-5 text-[#0b6d41]" />
              <span className="font-medium">{semesters}</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/80 text-gray-900">
              <Users className="w-5 h-5 text-[#0b6d41]" />
              <span className="font-medium">Full-Time Programme</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b6d41] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#095c37] transition text-center inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-[#0b6d41] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition border border-gray-300 text-center inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

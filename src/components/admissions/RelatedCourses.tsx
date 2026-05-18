import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getAllProgrammes,
  type ProgrammeInfo,
} from "@/data/programme-metadata";

interface RelatedCoursesProps {
  currentPath: string;
  currentInfo: ProgrammeInfo;
  limit?: number;
}

export function RelatedCourses({
  currentPath,
  currentInfo,
  limit = 3,
}: RelatedCoursesProps) {
  const related = getAllProgrammes()
    .filter(
      ({ path, info }) =>
        path !== currentPath &&
        info.level === currentInfo.level &&
        info.category === currentInfo.category
    )
    .slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-[#fbfbee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other {currentInfo.category} {currentInfo.level} Programmes
          </h2>
          <p className="text-lg text-gray-600">
            Explore similar admission pages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map(({ info }) => (
            <Link
              key={info.slug}
              href={`/admissions/${info.slug}`}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#0b6d41] bg-[#0b6d41]/10 px-3 py-1 rounded-full">
                  {info.category}
                </span>
                <span className="text-xs text-gray-500">{info.duration}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0b6d41] transition">
                {info.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {info.fullName}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b6d41]">
                View admission details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

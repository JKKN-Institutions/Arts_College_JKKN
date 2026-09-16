import Link from "next/link";
import {
  Clock,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  IndianRupee,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/*
 * B.Sc. Clinical Laboratory Technology
 *
 * This page states only facts that already exist in a published source:
 *   - programme name and 2021-22 introduction: Periyar University approved
 *     programme list for affiliated colleges
 *   - self-finance MQ fee Rs 32,000 (2026-27): the college's own fee table
 *   - eligibility: the same UG rule every self-finance UG admission page carries
 * Curriculum, career paths and laboratory detail are intentionally NOT listed
 * until the department provides them — nothing here is inferred.
 */

const FACTS = [
  { icon: Clock, label: "Duration", value: "3 Years", note: "6 semesters, full-time" },
  { icon: GraduationCap, label: "Level", value: "UG", note: "Bachelor of Science" },
  { icon: BookOpen, label: "Stream", value: "Self-Finance", note: "Affiliated to Periyar University" },
  { icon: IndianRupee, label: "Annual Fee (MQ)", value: "₹ 32,000", note: "Academic Year 2026-27" },
];

const ELIGIBILITY = [
  "Pass in Higher Secondary (10+2) from a recognized board",
  "Minimum 50% aggregate marks (general category)",
  "45% for OBC, 40% for SC/ST as per government norms",
  "Science stream with Biology or Chemistry is recommended — confirm subject requirements with the admissions office",
];

export default function BscClinicalLabTechnologyPage() {
  return (
    <main className="bg-[#fbfbee]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#eaf1e2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-white/90 text-gray-900">
                <Sparkles className="w-4 h-4 text-[#0b6d41]" />
                UGC Recognized Programme
              </span>
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold border border-[#0b6d41]/15 text-[#0b6d41]">
                <GraduationCap className="w-4 h-4" />
                Self-Finance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Bachelor of Science in Clinical Laboratory Technology
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A 3-year undergraduate programme at JKKN College of Arts and Science (Autonomous),
              affiliated to Periyar University, Salem — on NH-544 at Komarapalayam, near Erode.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admissions/bsc-clinical-lab-technology-self-finance"
                className="inline-flex items-center gap-2 bg-[#0b6d41] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#095633] transition"
              >
                Admission Details <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919345855001"
                className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-6 py-3 rounded-lg font-semibold border border-[#0b6d41]/20 hover:bg-gray-50 transition"
              >
                <Phone className="w-4 h-4" /> Call Admissions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACTS.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                  <Icon className="w-8 h-8 text-[#0b6d41] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-[#0b6d41] mb-1">{f.value}</div>
                  <div className="text-sm text-gray-700 font-medium">{f.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{f.note}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            B.Sc. Clinical Laboratory Technology is offered under the college&apos;s self-finance stream.
            The programme name follows Periyar University&apos;s approved list of undergraduate programmes
            for affiliated colleges, where it was introduced in the 2021-22 academic year.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Detailed semester-wise curriculum, laboratory facilities and career pathways for this
            programme are provided by the department. Contact the admissions office for the current
            syllabus and programme brochure.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility</h2>
          <ul className="space-y-3">
            {ELIGIBILITY.map((e) => (
              <li key={e} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#0b6d41] mt-0.5 flex-shrink-0" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fees */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Fee Structure</h2>
          <p className="text-sm text-gray-500 mb-6">Academic Year 2026-27 &middot; annual tuition fee</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#0b6d41]/5 text-[#0b6d41] text-sm">
                <tr>
                  <th className="px-4 py-3 font-semibold">Quota</th>
                  <th className="px-4 py-3 font-semibold">Annual Fee</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3">Government Quota (GQ)</td>
                  <td className="px-4 py-3">As per Government Norms</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3">Management Quota (MQ)</td>
                  <td className="px-4 py-3 font-semibold">₹ 32,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Hostel, transport and examination charges are separate. Fees are subject to revision — confirm with the admissions office.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0b6d41] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Apply for B.Sc. Clinical Laboratory Technology</h2>
          <p className="text-white/85 mb-8">
            Admissions are on merit. Call the admissions office or view the course-wise admission page.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/admissions/bsc-clinical-lab-technology-self-finance"
              className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Admission Page <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919345855001"
              className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Phone className="w-4 h-4" /> +91 93458 55001
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

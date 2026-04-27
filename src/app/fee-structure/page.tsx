import type { Metadata } from "next";
import { IndianRupee } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Fee Structure 2026-27 — JKKN College of Arts and Science",
  description:
    "Annual fee structure for UG and PG programmes at JKKN College of Arts and Science (Autonomous). Government Quota and Management Quota fees for Arts, Science, Commerce and Postgraduate courses.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/fee-structure",
  },
  openGraph: {
    title: "Fee Structure 2026-27 | JKKN Arts & Science",
    description:
      "Annual fee structure for UG and PG programmes at JKKN College of Arts and Science (Autonomous).",
    url: "https://cas.jkkn.ac.in/fee-structure",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const feeStructure = [
  {
    category: "UG — Arts",
    programmes: [
      { name: "B.A. English", mq: 24500 },
    ],
  },
  {
    category: "UG — Science",
    programmes: [
      { name: "B.Sc. Computer Science", mq: 34000 },
      { name: "B.Sc. Comp. Sci. (AI & DS)", mq: 34000 },
      { name: "B.Sc. Comp. Sci. (Cyber Security)", mq: 32000 },
      { name: "B.Sc. Microbiology", mq: 34000 },
      { name: "B.Sc. Clinical Lab Technology", mq: 32000 },
      { name: "B.Sc. Mathematics", mq: 26000 },
      { name: "B.Sc. Physics", mq: 25000 },
    ],
  },
  {
    category: "UG — Commerce & Management",
    programmes: [
      { name: "B.Com (CA)", mq: 34000 },
      { name: "B.C.A.", mq: 33000 },
      { name: "B.B.A.", mq: 25500 },
      { name: "B.Com (AI) *", mq: 34000 },
    ],
  },
  {
    category: "UG — Creative & Design",
    programmes: [
      { name: "B.Sc. Textile and Fashion Designing (AI) *", mq: 34000 },
      { name: "B.Sc. Visual Communication (AI) *", mq: 34000 },
      { name: "B.Sc. Textile and Fashion Designing", mq: 32000 },
      { name: "B.Sc. Visual Communication", mq: 32000 },
    ],
  },
  {
    category: "Postgraduate",
    programmes: [
      { name: "M.A. English", mq: 20000 },
      { name: "M.Com", mq: 24000 },
      { name: "M.Sc. Computer Science", mq: 25000 },
      { name: "M.Sc. Computer Science (Data Analytics)", mq: 21000 },
      { name: "M.Sc. Mathematics", mq: 20000 },
    ],
  },
];

export default function FeeStructurePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Fee Structure", url: "https://cas.jkkn.ac.in/fee-structure" },
        ]}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{ backgroundColor: "#eaf1e2" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/90 text-gray-900">
                <IndianRupee className="w-4 h-4 text-[#0b6d41]" />
                Academic Year 2026-27
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b6d41] mb-6">
                Fee Structure
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Annual tuition fees for UG and PG programmes at JKKN College of
                Arts and Science (Autonomous), Komarapalayam.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Table */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0b6d41] text-white">
                    <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider border-r border-white/20 w-48">
                      Course
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider border-r border-white/20">
                      Programs
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-bold uppercase tracking-wider border-r border-white/20 w-40">
                      GQ
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-bold uppercase tracking-wider border-r border-white/20 w-40">
                      MQ
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-bold uppercase tracking-wider w-36">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((group, groupIdx) =>
                    group.programmes.map((prog, progIdx) => (
                      <tr
                        key={`${group.category}-${prog.name}`}
                        className={
                          (groupIdx + progIdx) % 2 === 0
                            ? "bg-white"
                            : "bg-[#fbfbee]"
                        }
                      >
                        {progIdx === 0 && (
                          <td
                            rowSpan={group.programmes.length}
                            className="px-6 py-4 font-bold text-[#0b6d41] border-r border-gray-200 align-middle text-sm"
                          >
                            {group.category}
                          </td>
                        )}
                        <td className="px-6 py-4 text-gray-800 border-r border-gray-100 text-sm">
                          {prog.name}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-500 border-r border-gray-100 text-sm whitespace-nowrap">
                          As Per Govt Norms
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-[#0b6d41] border-r border-gray-100 text-sm whitespace-nowrap">
                          ₹{prog.mq.toLocaleString("en-IN")}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-400 text-sm">
                          —
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#0b6d41]/5 rounded-xl p-5 border border-[#0b6d41]/10">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-800">Note:</strong> GQ — Government
                Quota fees are As Per Govt Norms. MQ fees shown are annual fees
                for the Management Quota category. Programmes marked with * are
                newly added courses. For hostel charges, transport fees, and
                scholarship information, contact the admissions office at{" "}
                <a
                  href="tel:+919345855001"
                  className="text-[#0b6d41] font-medium hover:underline"
                >
                  +91 93458 55001
                </a>{" "}
                or{" "}
                <a
                  href="mailto:arts@jkkn.ac.in"
                  className="text-[#0b6d41] font-medium hover:underline"
                >
                  arts@jkkn.ac.in
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

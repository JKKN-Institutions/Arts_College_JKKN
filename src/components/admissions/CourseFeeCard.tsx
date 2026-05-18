import { IndianRupee } from "lucide-react";

interface CourseFeeCardProps {
  programmeName: string;
  feesGQ: string;
  feesMQ: number | null;
  scholarshipNote: string;
  category: "Aided" | "Self-Finance";
}

export function CourseFeeCard({
  programmeName,
  feesGQ,
  feesMQ,
  scholarshipNote,
  category,
}: CourseFeeCardProps) {
  const isAided = category === "Aided";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
            <IndianRupee className="w-3.5 h-3.5" />
            Academic Year 2026-27
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fee Structure
          </h2>
          <p className="text-lg text-gray-600">
            Annual tuition fee for {programmeName} at JKKN College of Arts and
            Science
          </p>
        </div>

        <div className="bg-[#fbfbee] rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#0b6d41] px-6 py-3.5">
            <h3 className="text-lg font-bold text-white">{programmeName}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Quota
                  </th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Annual Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-800">
                    Government Quota (GQ)
                  </td>
                  <td className="px-6 py-4 text-right text-gray-700 whitespace-nowrap">
                    {feesGQ}
                  </td>
                </tr>
                {!isAided && feesMQ !== null && (
                  <tr>
                    <td className="px-6 py-4 text-gray-800">
                      Management Quota (MQ)
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-[#0b6d41] whitespace-nowrap">
                      ₹{feesMQ.toLocaleString("en-IN")}
                    </td>
                  </tr>
                )}
                {isAided && (
                  <tr>
                    <td className="px-6 py-4 text-gray-800">
                      Management Quota (MQ)
                    </td>
                    <td className="px-6 py-4 text-right text-gray-500 whitespace-nowrap">
                      Not applicable — aided programme
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-[#0b6d41]/5 rounded-xl p-5 border border-[#0b6d41]/10">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Scholarships & Aid:</strong>{" "}
            {scholarshipNote}
          </p>
        </div>
      </div>
    </section>
  );
}

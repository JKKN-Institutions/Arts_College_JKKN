import Link from "next/link";
import { Home, Bus, ArrowRight, CheckCircle2 } from "lucide-react";

export function HostelTransportCard() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
            <Home className="w-3.5 h-3.5" />
            Campus Living
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hostel & Transport
          </h2>
          <p className="text-lg text-gray-600">
            Comfortable accommodation and convenient transport for outstation
            students
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#fbfbee] rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0b6d41] rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0b6d41]">
                Hostel Accommodation
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Separate hostel facilities for boys and girls with 24/7 security,
              hygienic mess, Wi-Fi connectivity, and recreational areas.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                Separate hostels for boys and girls
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                24/7 security and warden supervision
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                Hygienic, nutritious mess
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                Wi-Fi, study rooms, recreation
              </li>
            </ul>
            <Link
              href="/facilities/hostel"
              className="inline-flex items-center gap-2 text-[#0b6d41] font-semibold hover:underline"
            >
              View hostel details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#fbfbee] rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0b6d41] rounded-xl flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0b6d41]">
                College Transport
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Dedicated bus routes covering Erode, Salem, Namakkal, Tiruppur,
              Coimbatore and surrounding towns — affordable and reliable.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                Routes from Erode, Salem, Namakkal
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                Routes from Tiruppur, Coimbatore
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                GPS-tracked safe travel
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                Affordable annual fee
              </li>
            </ul>
            <Link
              href="/facilities/transport"
              className="inline-flex items-center gap-2 text-[#0b6d41] font-semibold hover:underline"
            >
              View transport routes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

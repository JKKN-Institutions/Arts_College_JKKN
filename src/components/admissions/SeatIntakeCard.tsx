import { Users, Calendar, Award } from "lucide-react";

interface SeatIntakeCardProps {
  intakeSeats: number;
  programmeName: string;
  applicationDeadline: string;
}

export function SeatIntakeCard({
  intakeSeats,
  programmeName,
  applicationDeadline,
}: SeatIntakeCardProps) {
  return (
    <section className="py-16 md:py-20 bg-[#fbfbee]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
            <Users className="w-3.5 h-3.5" />
            Intake & Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seat Intake & Important Dates
          </h2>
          <p className="text-lg text-gray-600">
            Sanctioned seats and admission timeline for {programmeName}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
            <Users className="w-10 h-10 text-[#0b6d41] mx-auto mb-3" />
            <div className="text-4xl font-bold text-[#0b6d41] mb-2">
              {intakeSeats}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Sanctioned Seats
            </div>
            <div className="text-xs text-gray-500 mt-1">2026-27 Intake</div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
            <Calendar className="w-10 h-10 text-[#0b6d41] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#0b6d41] mb-2">
              {applicationDeadline}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Application Deadline
            </div>
            <div className="text-xs text-gray-500 mt-1">Apply before this date</div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
            <Award className="w-10 h-10 text-[#0b6d41] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#0b6d41] mb-2">Merit</div>
            <div className="text-sm text-gray-600 font-medium">
              Admission Basis
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Marks + Counselling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

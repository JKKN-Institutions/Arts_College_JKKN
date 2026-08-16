import {
  ClipboardCheck,
  FileText,
  BookOpen,
  Users,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const DEFAULT_ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Check Eligibility",
    description:
      "Review the eligibility criteria for your chosen programme. UG requires 12th pass, PG requires relevant bachelor's degree, PhD requires master's degree with qualifying score.",
    icon: ClipboardCheck,
  },
  {
    step: 2,
    title: "Fill Application Form",
    description:
      "Complete the online application form at jkkn.ai/apply/jkkn-admission-2026 with your personal details, academic history, and programme preference. You can also apply in person at the campus.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Submit Documents",
    description:
      "Upload or submit required documents including mark sheets, transfer certificate, community certificate, Aadhaar card, photographs, and income certificate.",
    icon: BookOpen,
  },
  {
    step: 4,
    title: "Merit List & Counselling",
    description:
      "Shortlisted candidates are notified based on merit. Attend the counselling session for programme allocation and seat confirmation at the campus.",
    icon: Users,
  },
  {
    step: 5,
    title: "Pay Fees & Confirm Admission",
    description:
      "Complete the fee payment to confirm your admission. Collect your admission letter, student ID, and hostel allotment (if applicable). Welcome to JKKN!",
    icon: Award,
  },
];

export function buildHowToSchema(steps: AdmissionStep[] = DEFAULT_ADMISSION_STEPS) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for Admission at JKKN College of Arts and Science",
    description:
      "Step-by-step guide to apply for admission at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University, near Erode, Tamil Nadu.",
    totalTime: "P7D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "500",
    },
    step: steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.title,
      text: s.description,
    })),
  };
}

interface AdmissionProcessProps {
  steps?: AdmissionStep[];
  includeSchema?: boolean;
  heading?: string;
  intro?: string;
  background?: "white" | "cream";
}

export function AdmissionProcess({
  steps = DEFAULT_ADMISSION_STEPS,
  includeSchema = true,
  heading = "How to Apply for Admission",
  intro = "Follow these 5 simple steps to secure your seat at JKKN College of Arts and Science",
  background = "cream",
}: AdmissionProcessProps) {
  const bgClass = background === "cream" ? "bg-[#fbfbee]" : "bg-white";

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildHowToSchema(steps)),
          }}
        />
      )}

      <section className={`py-16 md:py-20 ${bgClass}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
              <FileText className="w-3.5 h-3.5" />
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {heading}
            </h2>
            <p className="text-lg text-gray-600">{intro}</p>
          </div>

          <div className="space-y-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0b6d41] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-[#0b6d41]" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

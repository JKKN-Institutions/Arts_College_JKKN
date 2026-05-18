import { CheckCircle2 } from "lucide-react";

const DEFAULT_DOCUMENTS = [
  "10th Mark Sheet and Certificate",
  "12th / HSC Mark Sheet and Certificate",
  "Transfer Certificate (TC)",
  "Community Certificate",
  "Aadhaar Card (photocopy)",
  "4 Passport-Size Photographs",
  "Migration Certificate (if applicable)",
  "Income Certificate (for scholarships)",
  "UG Degree Certificate (for PG admission)",
  "PG Degree Certificate (for PhD admission)",
];

interface DocumentsRequiredProps {
  documents?: string[];
  heading?: string;
  background?: "white" | "cream";
}

export function DocumentsRequired({
  documents = DEFAULT_DOCUMENTS,
  heading = "Documents Required",
  background = "white",
}: DocumentsRequiredProps) {
  const bgClass = background === "white" ? "bg-white" : "bg-[#fbfbee]";

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          {heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-3 bg-[#fbfbee] rounded-xl p-4 border border-gray-100"
            >
              <CheckCircle2 className="w-5 h-5 text-[#0b6d41] flex-shrink-0" />
              <span className="text-gray-800">{doc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

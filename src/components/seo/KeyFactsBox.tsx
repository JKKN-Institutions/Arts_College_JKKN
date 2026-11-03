import Link from "next/link";
import {
  KEY_CODES,
  KEY_FACTS,
  KEY_FACTS_CHECKED_ON,
  KEY_FACTS_SUMMARY,
  type Source,
} from "@/data/official-facts";

// Key facts with their sources (plan Step 6, GEO, 2026-11-03). Short, self-contained
// lines that a reader - or an AI answer engine - can quote as they stand, each with
// the document it came from. "box" = homepage cards, "table" = /about full table.

function SourceLinks({ sources }: { sources: Source[] }) {
  return (
    <>
      {sources.map((src, i) => {
        const external = src.href.startsWith("http");
        return (
          <span key={src.href}>
            {i > 0 && "; "}
            <a
              href={src.href}
              className="underline underline-offset-2 break-words hover:text-[#0b6d41]"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {src.label}
            </a>
            {src.date ? `, ${src.date}` : ""}
          </span>
        );
      })}
    </>
  );
}

export default function KeyFactsBox({ variant = "box" }: { variant?: "box" | "table" }) {
  if (variant === "table") {
    return (
      <section aria-labelledby="key-facts-heading" className="mb-12">
        <h2 id="key-facts-heading" className="text-2xl md:text-3xl font-bold text-[#0b6d41] mb-3">
          Key Facts
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mb-6" data-speakable>
          {KEY_FACTS_SUMMARY}
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Key facts about JKKN College of Arts and Science, with sources</caption>
            <thead className="bg-[#0b6d41] text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Fact</th>
                <th scope="col" className="px-4 py-3 font-semibold">Detail</th>
                <th scope="col" className="hidden md:table-cell px-4 py-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              {KEY_FACTS.map((fact) => (
                <tr key={fact.label} className="border-t border-gray-100 align-top">
                  <th scope="row" className="w-[34%] md:w-auto px-3 md:px-4 py-3 font-semibold text-gray-900 md:whitespace-nowrap">
                    {fact.label}
                  </th>
                  <td className="px-3 md:px-4 py-3 text-gray-800">
                    <span className="font-semibold">{fact.value}</span>
                    {fact.note && <span className="block text-gray-600 mt-0.5">{fact.note}</span>}
                    <span className="md:hidden block text-xs text-gray-500 mt-1.5 leading-relaxed">
                      Source: <SourceLinks sources={fact.sources} />
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-xs text-gray-500 leading-relaxed min-w-[12rem]">
                    <SourceLinks sources={fact.sources} />
                  </td>
                </tr>
              ))}
              {KEY_CODES.map((code) => (
                <tr key={code.label} className="border-t border-gray-100 align-top">
                  <th scope="row" className="w-[34%] md:w-auto px-3 md:px-4 py-3 font-semibold text-gray-900 md:whitespace-nowrap">
                    {code.label}
                  </th>
                  <td className="px-3 md:px-4 py-3 text-gray-800">
                    <span className="font-semibold">{code.value}</span>
                    <span className="md:hidden block text-xs text-gray-500 mt-1.5 leading-relaxed">
                      Source: <SourceLinks sources={[code.source]} />
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-xs text-gray-500 leading-relaxed min-w-[12rem]">
                    <SourceLinks sources={[code.source]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Checked on {KEY_FACTS_CHECKED_ON}. Approvals with their official documents:{" "}
          <Link href="/approvals" className="underline underline-offset-2 hover:text-[#0b6d41]">
            Approvals &amp; Official Data
          </Link>
          .
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="key-facts-heading" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-3">
          KEY FACTS
        </div>
        <h2
          id="key-facts-heading"
          className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-4"
        >
          JKKN College of Arts and Science at a Glance
        </h2>
        <p className="text-[15px] md:text-[17px] leading-relaxed text-black/80 max-w-4xl mb-8" data-speakable>
          {KEY_FACTS_SUMMARY}
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEY_FACTS.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-gray-200 bg-[#fbfbee] p-4">
              <dt className="text-[12px] font-semibold uppercase tracking-wide text-[#0b6d41]">{fact.label}</dt>
              <dd className="mt-1">
                <span className="block text-[17px] font-bold text-gray-900 leading-snug">{fact.value}</span>
                {fact.note && <span className="block text-[13px] text-gray-600 mt-1 leading-snug">{fact.note}</span>}
                <span className="block text-[11px] text-gray-500 mt-2 leading-relaxed">
                  Source: <SourceLinks sources={fact.sources} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[12px] text-gray-500">
          Checked on {KEY_FACTS_CHECKED_ON}. Every approval with its official document:{" "}
          <Link href="/approvals" className="underline underline-offset-2 hover:text-[#0b6d41]">
            Approvals &amp; Official Data
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

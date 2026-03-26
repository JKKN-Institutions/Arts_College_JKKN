import Link from "next/link";

export default function ViewProgrammesButton() {
  return (
    <Link
      href="/#academic-excellence"
      className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-10 py-3 rounded-full text-base transition-colors cursor-pointer"
    >
      View All Programmes
    </Link>
  );
}

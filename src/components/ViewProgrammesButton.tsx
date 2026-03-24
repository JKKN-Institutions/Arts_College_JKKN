'use client';

import { useRouter } from 'next/navigation';

export default function ViewProgrammesButton() {
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem('scrollTo', 'academic-excellence');
    router.push('/', { scroll: false });
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-10 py-3 rounded-full text-base transition-colors cursor-pointer"
    >
      View All Programmes
    </button>
  );
}

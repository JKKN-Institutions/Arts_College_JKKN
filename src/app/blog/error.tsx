'use client';

import { useEffect } from 'react';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-[#002309] mb-3">Unable to load blog</h2>
        <p className="text-gray-600 text-sm mb-6">
          The blog content could not be loaded. Please try again.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-[#0b6d41] text-white text-sm font-semibold rounded-lg hover:bg-[#004d28] transition"
          >
            Try again
          </button>
          <a
            href="/blog"
            className="px-5 py-2.5 border border-[#0b6d41] text-[#0b6d41] text-sm font-semibold rounded-lg hover:bg-green-50 transition"
          >
            Back to blog
          </a>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect } from 'react';

export default function AdminError({
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Admin panel error</h2>
        <p className="text-gray-600 text-sm mb-6">
          An unexpected error occurred in the admin panel.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-[#0b6d41] text-white text-sm font-semibold rounded-lg hover:bg-[#004d28] transition"
          >
            Try again
          </button>
          <a
            href="/admin/dashboard"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Go to dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Loader2, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import type { SyncReport } from '@/lib/sync/types';

export default function SyncFacultyButton() {
  const router = useRouter();
  const [running, setRunning] = useState(false);
  const [report, setReport] = useState<SyncReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function runSync() {
    setRunning(true);
    setError(null);
    setReport(null);
    try {
      const res = await fetch('/api/admin/sync-faculty', { method: 'POST' });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error ?? `Sync failed (${res.status})`);
      } else {
        setReport(json as SyncReport);
        router.refresh();
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="flex flex-col items-stretch sm:items-end gap-2">
      <button
        onClick={runSync}
        disabled={running}
        className="flex items-center justify-center gap-2 bg-white border border-[#0b6d41] text-[#0b6d41] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#0b6d41] hover:text-white disabled:opacity-50 transition"
        title="Pull the latest faculty from MyJKKN"
      >
        {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
        {running ? 'Syncing…' : 'Sync from MyJKKN'}
      </button>

      {error && (
        <div className="flex items-start gap-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 max-w-md">
          <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {report && (
        <div className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 max-w-md w-full space-y-1.5">
          <div className="flex items-center gap-1.5 font-semibold text-gray-800">
            <CheckCircle2 className="w-4 h-4 text-[#0b6d41]" />
            Sync complete
          </div>
          <div className="text-gray-600">
            Fetched <b>{report.fetched}</b> · Upserted <b>{report.upserted}</b> · Published{' '}
            <b>{report.published}</b> · Hidden <b>{report.hidden}</b> · Deactivated{' '}
            <b>{report.orphansDeactivated}</b>
          </div>
          <div className="text-gray-500">
            Aided: {report.perSegment.Aided.ok ? `${report.perSegment.Aided.upserted} synced` : 'fetch failed'} ·{' '}
            Self-Finance:{' '}
            {report.perSegment['Self-Finance'].ok
              ? `${report.perSegment['Self-Finance'].upserted} synced`
              : 'fetch failed'}
          </div>

          {report.warnings.length > 0 && (
            <div className="text-amber-700">
              {report.warnings.map((w, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          )}

          {report.errors.length > 0 && (
            <div className="text-red-600">
              {report.errors.slice(0, 8).map((e, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <XCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>{e}</span>
                </div>
              ))}
              {report.errors.length > 8 && <div>…and {report.errors.length - 8} more</div>}
            </div>
          )}

          {report.rows.some((r) => r.missing.length > 0) && (
            <div className="text-gray-500 pt-1 border-t border-gray-200">
              <p className="font-medium text-gray-600 mb-0.5">Hidden — fix in MyJKKN:</p>
              {report.rows
                .filter((r) => r.missing.length > 0)
                .slice(0, 10)
                .map((r) => (
                  <div key={r.id}>
                    {r.name}: missing {r.missing.join(', ')}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

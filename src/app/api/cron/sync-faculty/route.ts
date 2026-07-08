/**
 * Vercel Cron entry for the faculty sync.
 *
 * Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}` automatically when
 * CRON_SECRET is set on the project. We verify it before running.
 *
 * Node runtime (the sync uses the service-role key + node:https). Never Edge.
 */
import { NextResponse } from 'next/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300; // sync + photo re-hosting can take a while

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'CRON_SECRET is not configured' }, { status: 500 });
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (e) {
    console.error('[cron/sync-faculty] fatal', e);
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

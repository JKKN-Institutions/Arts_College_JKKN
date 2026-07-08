/**
 * Admin trigger proxy for the faculty sync.
 *
 * Same-origin POST from the "Sync from MyJKKN" button in /admin/faculty. Auth is
 * the logged-in admin session (mirrors src/app/api/admin/switch-college/route.ts) —
 * the MyJKKN/CRON secrets never reach the browser; the sync runs inline here.
 *
 * Node runtime (service-role key + node:https). Never Edge.
 */
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

export async function POST() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Confirm the user is a real staff profile (any admin may trigger a sync;
  // /admin is already session-gated by middleware).
  const { data: profile, error: profileError } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();
  if (profileError || !profile) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (e) {
    console.error('[admin/sync-faculty] fatal', e);
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

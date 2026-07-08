/**
 * Completeness / visibility rule.
 *
 * Arts has NO `status` column — the public pages filter on `is_active` (+
 * aided_or_self) only. So instead of a draft/published enum, we compute the local
 * `is_active` from MyJKKN's active state AND profile completeness. This keeps the
 * public faculty pages 100% unchanged while still preventing half-empty cards.
 *
 * A synced row is visible (is_active = true) iff MyJKKN says the person is active
 * AND all display-critical fields are present. Anything missing → hidden, and the
 * `missing[]` list is surfaced in the admin sync report so it can be fixed in MyJKKN.
 */
import type { FacultyUpsertRow } from '@/lib/sync/types';

export function computeVisibility(
  row: FacultyUpsertRow,
  rehostedPhotoUrl: string | null,
  apiIsActive: boolean,
  apiStatus: string
): { isActive: boolean; missing: string[] } {
  const missing: string[] = [];
  if (!row.name) missing.push('name');
  if (!row.designation) missing.push('designation');
  if (!row.department) missing.push('department');
  if (!rehostedPhotoUrl) missing.push('photo');
  if (!row.aided_or_self) missing.push('aided_or_self');

  // Respect MyJKKN's editorial state: never auto-publish a MyJKKN draft. An empty
  // status is treated as published (avoids hiding everyone if the field is absent).
  const statusOk = !apiStatus || apiStatus.toLowerCase() === 'published';
  if (!statusOk) missing.push(`myjkkn-status:${apiStatus}`);

  const isActive = apiIsActive && missing.length === 0;
  return { isActive, missing };
}

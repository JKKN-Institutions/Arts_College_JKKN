/**
 * Photo re-hosting — download a faculty photo from MyJKKN's storage and re-upload
 * it to OUR `faculty-photos` bucket, so the public site never depends on MyJKKN's
 * bucket being up.
 *
 * IDEMPOTENT: fixed object key per faculty id + upsert = overwrite-in-place, no
 * orphan objects accumulate. SOFT-FAILS to null on any error (never throws) — a
 * missing photo just drafts the row via the completeness rule.
 */
import { createServiceClient } from '@/lib/supabase/service';
import { jkknFetch } from '@/lib/net/jkkn-fetch';

type ServiceClient = ReturnType<typeof createServiceClient>;

const BUCKET = 'faculty-photos';

export async function rehostFacultyPhoto(
  svc: ServiceClient,
  apiUrl: string,
  facultyId: string
): Promise<string | null> {
  if (!apiUrl || !facultyId) return null;

  try {
    const res = await jkknFetch(apiUrl); // MyJKKN photos live on *.supabase.co
    if (!res.ok) {
      console.warn(`[photo-rehost] download ${res.status} for ${facultyId} (${apiUrl})`);
      return null;
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.byteLength === 0) return null;

    // Matches the existing bucket layout used by the manual admin form.
    const key = `education/${facultyId}.jpg`;

    const { error } = await svc.storage.from(BUCKET).upload(key, buf, {
      upsert: true,
      contentType,
      cacheControl: '3600',
    });
    if (error) {
      console.warn(`[photo-rehost] upload failed for ${facultyId}: ${error.message}`);
      return null;
    }

    const { data } = svc.storage.from(BUCKET).getPublicUrl(key);
    return data.publicUrl ?? null;
  } catch (e) {
    console.warn(`[photo-rehost] error for ${facultyId}: ${(e as Error).message}`);
    return null;
  }
}

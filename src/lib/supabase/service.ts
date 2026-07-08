import { createServerClient } from '@supabase/ssr';

/**
 * Service-role Supabase client for server-only sync work (upserts + storage writes).
 *
 * Built with @supabase/ssr's createServerClient + a no-op cookie store and the
 * SERVICE ROLE key (not the anon key). With no session cookie, it authenticates
 * purely as `service_role`, which has BYPASSRLS — so RLS never blocks sync writes.
 *
 * NEVER import this from a Client Component or an Edge runtime. It reads a secret
 * that must stay server-side (Node runtime only).
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) throw new Error('[faculty-sync] NEXT_PUBLIC_SUPABASE_URL is not set');
  if (!key) throw new Error('[faculty-sync] SUPABASE_SERVICE_ROLE_KEY is not set');

  return createServerClient(url, key, {
    cookies: {
      getAll: () => [],
      setAll: () => {
        /* no-op: service client has no session cookies */
      },
    },
  });
}

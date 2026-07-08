-- ============================================================================
-- Arts & Science (college_id = 'arts') — MyJKKN faculty-sync support.
--
-- The public.faculty table is SHARED across all JKKN colleges (multi-tenant by
-- college_id). This migration is ADDITIVE and IDEMPOTENT — it only adds columns
-- and one partial index used by the sync engine. It never drops or rewrites data
-- and is safe to run against the live shared table.
--
-- Ownership model (hybrid): the sync engine only ever mutates rows where
-- synced_from_api = true. Manually-entered faculty (synced_from_api = false, the
-- default) are never touched.
--
-- HOW TO RUN: paste into the Supabase SQL editor for the shared project and run.
-- Run the "PRE-FLIGHT CHECKS" block first (read-only) to confirm the live schema,
-- then run the "MIGRATION" block.
-- ============================================================================


-- ────────────────────────────────────────────────────────────────────────────
-- PRE-FLIGHT CHECKS (read-only — run these first, they change nothing)
-- ────────────────────────────────────────────────────────────────────────────

-- 1. Confirm the faculty column set matches what the app code expects.
--    (No in-repo schema exists; the app shape is inferred from queries/forms.)
-- select column_name, data_type, is_nullable
-- from information_schema.columns
-- where table_schema = 'public' and table_name = 'faculty'
-- order by ordinal_position;

-- 2. CRITICAL: is there a UNIQUE constraint on slug? The sync writes a
--    deterministic slug of the form  <slugified-name>-<first 8 of uuid>  which is
--    unique by construction, so it is safe either way — but confirm before go-live.
-- select conname, pg_get_constraintdef(oid)
-- from pg_constraint
-- where conrelid = 'public.faculty'::regclass and contype in ('u', 'p');

-- 3. Review RLS policies (informational — the sync uses the service_role key,
--    which has BYPASSRLS, so writes are unaffected; public/admin reads keep RLS).
-- select polname, cmd, qual, with_check
-- from pg_policies
-- where schemaname = 'public' and tablename = 'faculty';


-- ────────────────────────────────────────────────────────────────────────────
-- MIGRATION (additive + idempotent)
-- ────────────────────────────────────────────────────────────────────────────

alter table public.faculty
  add column if not exists synced_from_api boolean not null default false,
  add column if not exists staff_id         text,
  add column if not exists last_synced_at    timestamptz;

comment on column public.faculty.synced_from_api is
  'True = row is owned by the MyJKKN faculty sync. The sync only ever mutates '
  'these rows; manually-entered rows (false) are never touched.';
comment on column public.faculty.staff_id is
  'MyJKKN human-readable staff display id (e.g. CAS123). For UI/debugging. Not a FK.';
comment on column public.faculty.last_synced_at is
  'Timestamp of the last successful upsert from MyJKKN for this row.';

-- Hot path: every sync tick snapshots + orphan-sweeps synced Arts rows, scoped by
-- college_id + aided_or_self. Partial index keeps that cheap.
create index if not exists faculty_arts_synced_idx
  on public.faculty (college_id, aided_or_self)
  where synced_from_api = true;


-- ────────────────────────────────────────────────────────────────────────────
-- STORAGE
-- ────────────────────────────────────────────────────────────────────────────
-- No new bucket needed. The sync reuses the existing PUBLIC `faculty-photos`
-- bucket (already used by the manual admin form). Object key for synced rows:
--   education/<faculty.id>.jpg   (id = MyJKKN staff UUID), upsert-in-place.
-- The service_role key bypasses storage RLS for writes; public read already works.


-- ────────────────────────────────────────────────────────────────────────────
-- OPTIONAL: one-time duplicate reconciliation helper (read-only)
-- ────────────────────────────────────────────────────────────────────────────
-- If faculty were hand-entered before the sync existed, a synced row (id = MyJKKN
-- UUID) can coexist with a manual row for the same person. This lists likely dupes
-- by email so an admin can deactivate/delete the manual one. The sync never
-- auto-merges (it only touches synced_from_api = true rows).
-- select a.id as manual_id, a.name as manual_name, a.email,
--        b.id as synced_id, b.staff_id
-- from public.faculty a
-- join public.faculty b
--   on lower(trim(a.email)) = lower(trim(b.email))
--  and a.email is not null and a.email <> ''
-- where a.college_id = 'arts' and a.synced_from_api = false
--   and b.college_id = 'arts' and b.synced_from_api = true;

-- ============================================================================
-- Arts & Science — draft (deactivate) manually-entered faculty.
--
-- RUN THIS *AFTER* the first successful MyJKKN sync, so synced faculty already
-- populate the public /faculty pages and there is no empty-page window.
--
-- Policy: the website shows ONLY MyJKKN-synced faculty (enforced in code by a
-- `synced_from_api = true` filter on the public faculty pages + sitemap). This
-- statement additionally flips the previously hand-entered rows to inactive so
-- they read as "Inactive" (draft) in the admin panel. The rows are preserved and
-- remain fully editable in /admin/faculty — nothing is deleted.
--
-- Reversible: re-activate any row in the admin panel (or set is_active = true).
-- ============================================================================

-- Preview first (read-only): how many manual rows are currently active?
-- select count(*) from public.faculty
-- where college_id = 'arts' and synced_from_api = false and is_active = true;

update public.faculty
set is_active = false,
    updated_at = now()
where college_id = 'arts'
  and synced_from_api = false
  and is_active = true;

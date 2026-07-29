-- ============================================================================
-- Arts & Science — shareable blog draft-preview tokens.
--
-- RUN THIS BEFORE deploying the /blog/preview/<id>?token=<secret> feature.
-- Until it runs, token-based preview returns 404 (admin-login preview still
-- works, because that path reads through normal RLS).
--
-- What it does:
--   1. Adds `blogs.preview_token` — a per-post random secret, auto-generated
--      for every new post.
--   2. Adds `public.get_blog_preview(p_id, p_token)` — a SECURITY DEFINER
--      function that returns a single blog row ONLY when the caller supplies
--      that post's exact token.
--
-- Why a SECURITY DEFINER function: RLS on `blogs` hides unpublished rows from
-- anon, and an auth check alone in the app cannot get past that. The function
-- runs as its owner, so it can hand back exactly one row after verifying the
-- token — no service-role key, no env var, nothing else opened up.
--
-- Rotating a link: update that row's preview_token; every old link dies.
-- Safe to re-run (idempotent).
-- ============================================================================

-- ── 1. preview_token column ────────────────────────────────────────────────
-- Type is `uuid` — this shared multi-college table already carries the column
-- as uuid, so we match it rather than rewriting the type (a type change would
-- touch every college's blog rows). gen_random_uuid() is built into Postgres
-- 13+, so this needs no pgcrypto extension. 122 bits of randomness per token.

alter table public.blogs
  add column if not exists preview_token uuid;

-- Backfill rows that predate the column (all colleges — the column is shared).
update public.blogs
set preview_token = gen_random_uuid()
where preview_token is null;

-- Every new post gets its own token automatically.
alter table public.blogs
  alter column preview_token set default gen_random_uuid();

alter table public.blogs
  alter column preview_token set not null;

create unique index if not exists blogs_preview_token_key
  on public.blogs (preview_token);

-- ── 2. Token-gated read function ───────────────────────────────────────────
-- Both params are text, not uuid, so a malformed id or token in the URL returns
-- "no rows" instead of raising a 22P02 cast error. The column is cast to text
-- for the comparison for the same reason.

drop function if exists public.get_blog_preview(text, text);

create function public.get_blog_preview(p_id text, p_token text)
returns setof public.blogs
language sql
stable
security definer
set search_path = public
as $$
  select b.*
  from public.blogs b
  where p_token is not null
    and length(p_token) >= 32              -- reject empty / truncated guesses
    and b.preview_token::text = p_token    -- the secret
    and b.id::text = p_id                  -- id must match the token's own post
  limit 1;
$$;

-- Callable by logged-out visitors, but only ever with a correct token.
revoke all on function public.get_blog_preview(text, text) from public;
grant execute on function public.get_blog_preview(text, text) to anon, authenticated;

-- Make PostgREST pick up the new function immediately.
notify pgrst, 'reload schema';

-- ── Verify (read-only) ─────────────────────────────────────────────────────
-- select id, title, preview_token from public.blogs order by created_at desc limit 5;
-- select * from public.get_blog_preview('<blog-id>', '<preview_token>');

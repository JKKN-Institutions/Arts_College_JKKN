// Server-only: importing node:crypto keeps this out of any client bundle.
import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Shareable draft-preview tokens.
 *
 * A token is an HMAC-SHA256 of the blog id keyed by PREVIEW_SECRET, so anyone
 * holding the link can read that one draft — and only that one. Tokens never
 * expire; rotating PREVIEW_SECRET invalidates every previously shared link.
 *
 * PREVIEW_SECRET must be a server-only env var (no NEXT_PUBLIC_ prefix). When
 * it is unset, token creation returns null and verification always fails, so
 * preview falls back to admin-login-only access rather than opening up.
 */

const TOKEN_LENGTH = 32; // hex chars we keep from the digest

function getSecret(): string | null {
  const secret = process.env.PREVIEW_SECRET;
  return secret && secret.length >= 16 ? secret : null;
}

/** True when PREVIEW_SECRET is configured and share links can be issued. */
export function isPreviewSharingEnabled(): boolean {
  return getSecret() !== null;
}

/** Build the share token for a blog id, or null if PREVIEW_SECRET is unset. */
export function createPreviewToken(blogId: string): string | null {
  const secret = getSecret();
  if (!secret) return null;
  return createHmac('sha256', secret).update(blogId).digest('hex').slice(0, TOKEN_LENGTH);
}

/** Constant-time check of a token supplied in the URL. */
export function verifyPreviewToken(blogId: string, token: string | undefined): boolean {
  if (!token) return false;
  const expected = createPreviewToken(blogId);
  if (!expected) return false;

  const a = Buffer.from(expected);
  const b = Buffer.from(token);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

import { cookies } from 'next/headers';

/**
 * Returns the college_id for admin operations.
 * Super admins / SEO users can switch colleges via cookie; falls back to env var.
 */
export async function getAdminCollegeId(): Promise<string> {
  const cookieStore = await cookies();
  const overrideId = cookieStore.get('admin_college_id')?.value;
  return overrideId || process.env.NEXT_PUBLIC_COLLEGE_ID!;
}

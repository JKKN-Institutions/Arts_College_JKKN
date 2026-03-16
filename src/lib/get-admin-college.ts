/**
 * Returns the college_id for admin operations from the environment variable.
 */
export async function getAdminCollegeId(): Promise<string> {
  return process.env.NEXT_PUBLIC_COLLEGE_ID!;
}

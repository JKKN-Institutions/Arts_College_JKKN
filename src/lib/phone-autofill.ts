// Browser autofill and the 10-digit mobile rule.
//
// Measured 2026-11-12 on the live Arts forms with Chrome 156 (CDP Autofill.trigger): Chrome fills a
// saved number into a tel-national box as "07000000001" (India trunk 0), and a saved "+91 ..." can
// arrive with the country code. The enquiry boxes and the server accept exactly 10 digits from 6-9,
// so a one-tap fill failed the pattern check and the parent had to retype. Keep digits only and
// drop a leading 91 (12 digits) or 0 (11 digits). Same helper as Dental b879bd4 / Pharmacy 38b7b9e.
export function toTenDigitMobile(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2)
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1)
  return digits
}

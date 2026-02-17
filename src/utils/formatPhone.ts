/**
 * Formats a phone number string into (XXX) XXX-XXXX format
 * @param phone - Raw phone number (digits only)
 * @returns Formatted phone number string
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format based on length
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

/**
 * Extracts raw digits from a formatted phone number
 * @param formattedPhone - Formatted phone number string
 * @returns Raw digits only
 */
export function unformatPhoneNumber(formattedPhone: string): string {
  return formattedPhone.replace(/\D/g, '');
}

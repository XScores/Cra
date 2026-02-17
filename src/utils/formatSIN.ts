/**
 * Formats a SIN (Social Insurance Number) string into XXX-XXX-XXX format
 * @param sin - Raw SIN number (digits only)
 * @returns Formatted SIN string
 */
export function formatSIN(sin: string): string {
  // Remove all non-digit characters
  const digits = sin.replace(/\D/g, '');
  
  // Format based on length
  if (digits.length === 0) return '';
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 9)}`;
}

/**
 * Extracts raw digits from a formatted SIN
 * @param formattedSIN - Formatted SIN string
 * @returns Raw digits only
 */
export function unformatSIN(formattedSIN: string): string {
  return formattedSIN.replace(/\D/g, '');
}

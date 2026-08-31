export const SITE_URL = "https://chikyu-x.co.jp";
export const X_HANDLE = "CHIKYUXken";
export const X_HANDLE_AT = `@${X_HANDLE}`;
export const X_PROFILE_URL = `https://x.com/${X_HANDLE}`;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return new URL(path, SITE_URL).toString();
}

export function xShareUrl(text: string, url: string): string {
  const params = new URLSearchParams({ text, url });
  return `https://x.com/intent/tweet?${params.toString()}`;
}

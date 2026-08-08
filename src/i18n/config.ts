export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Build a public path for the given locale (JA has no prefix). */
export function localePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

/** Detect locale from pathname and return the path without locale prefix. */
export function splitLocalePath(pathname: string): {
  locale: Locale;
  pathnameWithoutLocale: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale) && maybeLocale !== defaultLocale) {
    const rest = `/${segments.slice(1).join("/")}`;
    return {
      locale: maybeLocale,
      pathnameWithoutLocale: rest === "/" ? "/" : rest.replace(/\/$/, "") || "/",
    };
  }

  return {
    locale: defaultLocale,
    pathnameWithoutLocale: pathname || "/",
  };
}

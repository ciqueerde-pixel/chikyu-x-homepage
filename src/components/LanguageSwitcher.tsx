import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  pathnameWithoutLocale: string;
};

function JapanFlag() {
  return (
    <svg viewBox="0 0 30 30" className="h-full w-full" aria-hidden="true">
      <circle cx="15" cy="15" r="15" fill="#fff" />
      <circle cx="15" cy="15" r="6.2" fill="#bc002d" />
    </svg>
  );
}

function UkFlag() {
  return (
    <svg viewBox="0 0 30 30" className="h-full w-full" aria-hidden="true">
      <rect width="30" height="30" fill="#012169" />
      <path d="M0,0 L30,30 M30,0 L0,30" stroke="#fff" strokeWidth="5" />
      <path d="M0,0 L30,30 M30,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M15,0 V30 M0,15 H30" stroke="#fff" strokeWidth="9" />
      <path d="M15,0 V30 M0,15 H30" stroke="#C8102E" strokeWidth="5" />
    </svg>
  );
}

function FlagButton({
  href,
  label,
  active,
  children,
}: {
  href: string;
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "true" : undefined}
      className={`relative block h-7 w-7 overflow-hidden rounded-full border transition-transform duration-200 hover:scale-105 ${
        active
          ? "border-ink/50 opacity-100 ring-1 ring-ink/25"
          : "border-ink/15 opacity-70 hover:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}

export function LanguageSwitcher({ locale, pathnameWithoutLocale }: Props) {
  return (
    <div className="flex items-center gap-2" aria-label="Language">
      <FlagButton
        href={localePath("ja", pathnameWithoutLocale)}
        label="日本語"
        active={locale === "ja"}
      >
        <JapanFlag />
      </FlagButton>
      <FlagButton
        href={localePath("en", pathnameWithoutLocale)}
        label="English"
        active={locale === "en"}
      >
        <UkFlag />
      </FlagButton>
    </div>
  );
}

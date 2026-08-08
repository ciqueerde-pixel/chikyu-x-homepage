import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { localePath, type Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
};

export function SiteFooter({ locale }: Props) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <BrandMark className="h-auto w-[min(100%,280px)]" />
          <BrandMark
            variant="tagline"
            className="mt-4 h-auto w-[min(100%,280px)] opacity-80"
          />
        </div>
        <div className="flex flex-col gap-3 text-sm text-ink-soft md:items-end">
          <div className="flex gap-6 tracking-[0.16em]">
            <Link
              href={localePath(locale, "/journal")}
              className="transition-colors hover:text-ink"
            >
              JOURNAL
            </Link>
            <Link
              href={localePath(locale, "/company")}
              className="transition-colors hover:text-ink"
            >
              COMPANY
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="transition-colors hover:text-ink"
            >
              CONTACT
            </Link>
          </div>
          <p className="text-xs tracking-[0.08em]">
            © {new Date().getFullYear()} CHIKYU X Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

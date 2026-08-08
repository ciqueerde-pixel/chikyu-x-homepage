"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  localePath,
  splitLocalePath,
  type Locale,
} from "@/i18n/config";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { pathnameWithoutLocale } = splitLocalePath(pathname);

  const links = [
    { href: localePath(locale, "/#mission"), label: "MISSION", match: "/" },
    { href: localePath(locale, "/#projects"), label: "PROJECTS", match: "/" },
    {
      href: localePath(locale, "/journal"),
      label: "JOURNAL",
      match: "/journal",
    },
    {
      href: localePath(locale, "/company"),
      label: "COMPANY",
      match: "/company",
    },
    {
      href: localePath(locale, "/contact"),
      label: "CONTACT",
      match: "/contact",
    },
  ];

  const otherLocale: Locale = locale === "ja" ? "en" : "ja";
  const switchHref = localePath(otherLocale, pathnameWithoutLocale);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-[color-mix(in_oklab,var(--mist)_78%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href={localePath(locale, "/")}
          className="relative z-50 flex items-center"
          aria-label={dict.nav.homeAria}
        >
          <BrandMark className="!h-[18px] w-auto md:!h-[20px]" priority />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label={dict.nav.mainNav}>
            {links.map((link) => {
              const active =
                (link.match === "/" &&
                  (pathnameWithoutLocale === "/" ||
                    pathnameWithoutLocale === "")) ||
                (link.match !== "/" &&
                  pathnameWithoutLocale.startsWith(link.match));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-[0.72rem] tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-pine transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href={switchHref}
            className="text-[0.72rem] tracking-[0.2em] text-ink transition-opacity hover:opacity-60"
            aria-label={otherLocale === "en" ? "English" : "Japanese"}
          >
            {otherLocale === "en" ? "EN" : "JA"}
          </Link>
        </div>

        <div className="relative z-50 flex items-center gap-3 md:hidden">
          <Link
            href={switchHref}
            className="text-[0.72rem] tracking-[0.2em] text-ink"
            aria-label={otherLocale === "en" ? "English" : "Japanese"}
          >
            {otherLocale === "en" ? "EN" : "JA"}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">MENU</span>
            <span className="flex w-5 flex-col gap-[6px]">
              <span
                className={`h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[var(--header-h)] bg-mist/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col gap-8 px-8 pt-12"
          aria-label={dict.nav.mobileNav}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-2xl tracking-[0.18em]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

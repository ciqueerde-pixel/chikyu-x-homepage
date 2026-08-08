"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const links = [
  { href: "/#mission", label: "MISSION" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/company", label: "COMPANY" },
  { href: "/contact", label: "CONTACT" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="relative z-50 flex items-center"
          aria-label="CHIKYU X ホーム"
        >
          <BrandMark className="!h-[18px] w-auto md:!h-[20px]" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビ">
          {links.map((link) => {
            const active =
              link.href === pathname ||
              (link.href !== "/" &&
                !link.href.startsWith("/#") &&
                pathname.startsWith(link.href)) ||
              (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.href}
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

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
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

      <div
        className={`fixed inset-0 top-[var(--header-h)] bg-mist/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col gap-8 px-8 pt-12"
          aria-label="モバイルナビ"
        >
          {links.map((link) => (
            <Link
              key={link.href}
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

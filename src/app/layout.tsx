import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "株式会社CHIKYU X | CHIKYU X Inc.",
    template: "%s | CHIKYU X",
  },
  description:
    "人の役に立つものを創造する。NATURE × SPIRIT × TECHNOLOGY — 株式会社CHIKYU Xのコーポレートサイト。",
  metadataBase: new URL("https://chikyu-x.co.jp"),
  openGraph: {
    title: "株式会社CHIKYU X | CHIKYU X Inc.",
    description:
      "人の役に立つものを創造する。NATURE × SPIRIT × TECHNOLOGY",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full font-sans">
        <div className="site-shell">
          <div className="site-atmosphere" aria-hidden="true" />
          <SiteHeader />
          <main className="flex-1 pt-[var(--header-h)]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

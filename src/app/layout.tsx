import type { Metadata } from "next";
import { SITE_URL, X_HANDLE_AT } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "株式会社CHIKYU X | CHIKYU X Inc.",
    template: "%s | CHIKYU X",
  },
  description:
    "人の役に立つものを創造する。NATURE × SPIRIT × TECHNOLOGY — 株式会社CHIKYU Xのコーポレートサイト。",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "CHIKYU X",
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE_AT,
    creator: X_HANDLE_AT,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}

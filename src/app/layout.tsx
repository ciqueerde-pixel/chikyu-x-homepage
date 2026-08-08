import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "株式会社CHIKYU X | CHIKYU X Inc.",
    template: "%s | CHIKYU X",
  },
  description:
    "人の役に立つものを創造する。NATURE × SPIRIT × TECHNOLOGY — 株式会社CHIKYU Xのコーポレートサイト。",
  metadataBase: new URL("https://chikyu-x.co.jp"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}

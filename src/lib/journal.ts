import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/config";

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  content: string;
};

const journalDir = path.join(process.cwd(), "content", "journal");

function ensureJournalDir() {
  if (!fs.existsSync(journalDir)) {
    fs.mkdirSync(journalDir, { recursive: true });
  }
}

function pickLocalized(
  data: Record<string, unknown>,
  key: string,
  locale: Locale,
  fallback = "",
): string {
  if (locale === "en") {
    const enKey = `${key}_en`;
    if (data[enKey]) return String(data[enKey]);
  }
  if (data[key]) return String(data[key]);
  return fallback;
}

function parsePost(file: string, locale: Locale = "ja"): JournalPost {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(journalDir, file), "utf8");
  const { data, content } = matter(raw);
  const record = data as Record<string, unknown>;

  const localizedContent =
    locale === "en" && record.content_en
      ? String(record.content_en)
      : content;

  return {
    slug,
    title: pickLocalized(record, "title", locale, slug),
    date: String(record.date ?? ""),
    excerpt: pickLocalized(record, "excerpt", locale),
    cover: record.cover ? String(record.cover) : undefined,
    content: localizedContent,
  };
}

export function getJournalPosts(locale: Locale = "ja"): JournalPost[] {
  ensureJournalDir();

  const files = fs
    .readdirSync(journalDir)
    .filter(
      (file) =>
        file.endsWith(".md") && file.toLowerCase() !== "readme.md",
    );

  return files
    .map((file) => parsePost(file, locale))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getJournalPost(
  slug: string,
  locale: Locale = "ja",
): JournalPost | null {
  const filePath = path.join(journalDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parsePost(`${slug}.md`, locale);
}

export function getJournalSlugs(): string[] {
  ensureJournalDir();
  return fs
    .readdirSync(journalDir)
    .filter(
      (file) =>
        file.endsWith(".md") && file.toLowerCase() !== "readme.md",
    )
    .map((file) => file.replace(/\.md$/, ""));
}

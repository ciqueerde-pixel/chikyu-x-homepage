import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export function getJournalPosts(): JournalPost[] {
  ensureJournalDir();

  const files = fs
    .readdirSync(journalDir)
    .filter(
      (file) =>
        file.endsWith(".md") && file.toLowerCase() !== "readme.md",
    );

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(journalDir, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      excerpt: String(data.excerpt ?? ""),
      cover: data.cover ? String(data.cover) : undefined,
      content,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getJournalPost(slug: string): JournalPost | null {
  const filePath = path.join(journalDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    cover: data.cover ? String(data.cover) : undefined,
    content,
  };
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

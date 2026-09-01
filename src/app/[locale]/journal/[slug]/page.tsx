import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, isLocale, localePath, type Locale } from "@/i18n/config";
import { getJournalPost, getJournalSlugs } from "@/lib/journal";
import { X_HANDLE_AT, absoluteUrl, xShareUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getJournalSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return { title: "JOURNAL" };
  const post = getJournalPost(slug, localeParam);
  if (!post) return { title: "JOURNAL" };

  const description = post.excerpt || post.title;
  const path = localePath(localeParam, `/journal/${slug}`);
  const images = post.cover ? [{ url: post.cover }] : undefined;

  return {
    title: post.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: path,
      publishedTime: post.date ? `${post.date}T00:00:00+09:00` : undefined,
      locale: localeParam === "en" ? "en_US" : "ja_JP",
      images,
    },
    twitter: {
      card: post.cover ? "summary_large_image" : "summary",
      site: X_HANDLE_AT,
      creator: X_HANDLE_AT,
      title: post.title,
      description,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const post = getJournalPost(slug, locale);
  if (!post) notFound();
  const t = getDictionary(locale).journal;
  const pageUrl = absoluteUrl(localePath(locale, `/journal/${slug}`));
  const coverInBody = Boolean(
    post.cover && post.content.includes(`](${post.cover})`),
  );

  return (
    <article>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[760px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(JOURNAL)</p>
            <time
              dateTime={post.date}
              className="mt-6 block text-sm tracking-[0.12em] text-pine"
            >
              {post.date.replaceAll("-", ".")}
            </time>
            <h1 className="mt-4 text-[clamp(1.8rem,4.5vw,2.8rem)] font-medium leading-[1.4] tracking-[0.04em]">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {post.cover && !coverInBody ? (
        <div className="relative mx-auto aspect-[16/9] max-w-[1200px] overflow-hidden md:mt-0">
          <Image
            src={post.cover}
            alt=""
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      ) : null}

      <section>
        <div className="mx-auto max-w-[760px] px-5 py-14 md:px-8 md:py-20">
          <Reveal>
            <div className="journal-prose space-y-6 text-[1.05rem] leading-[2] text-ink-soft">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="pt-4 text-[1.35rem] font-medium tracking-[0.04em] text-ink">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => <p>{children}</p>,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="underline decoration-line underline-offset-4 transition-colors hover:text-pine"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) =>
                    typeof src === "string" ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={src}
                        alt={alt ?? ""}
                        className="my-10 w-full"
                      />
                    ) : null,
                  ul: ({ children }) => (
                    <ul className="list-disc space-y-2 pl-5">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal space-y-2 pl-5">{children}</ol>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </Reveal>

          <Reveal delayClassName="reveal-delay-1">
            <div className="mt-16 flex items-center justify-between gap-6 border-t border-line pt-10">
              <Link
                href={localePath(locale, "/journal")}
                className="text-[0.72rem] tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
              >
                ← JOURNAL
              </Link>
              <a
                href={xShareUrl(post.title, pageUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
              >
                {t.shareOnX}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

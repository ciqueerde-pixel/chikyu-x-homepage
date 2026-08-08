import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Reveal } from "@/components/Reveal";
import { getJournalPost, getJournalSlugs } from "@/lib/journal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return { title: "JOURNAL" };

  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

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

      {post.cover ? (
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
            <div className="mt-16 border-t border-line pt-10">
              <Link
                href="/journal"
                className="text-[0.72rem] tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
              >
                ← JOURNAL
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

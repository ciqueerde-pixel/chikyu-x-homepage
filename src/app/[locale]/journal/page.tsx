import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getJournalPosts } from "@/lib/journal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = getDictionary(localeParam);
  return {
    title: "JOURNAL",
    description: dict.journal.metaDescription,
  };
}

export default async function JournalPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const t = getDictionary(locale).journal;
  const posts = getJournalPosts(locale);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(JOURNAL)</p>
            <h1 className="mt-6 text-[clamp(2.2rem,6vw,4rem)] font-medium tracking-[0.06em]">
              JOURNAL
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-[1.9] text-ink-soft">
              {t.lead1}
              <br />
              {t.lead2}
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          {posts.length === 0 ? (
            <p className="text-ink-soft">{t.empty}</p>
          ) : (
            <ul className="border-t border-line">
              {posts.map((post, index) => (
                <Reveal
                  key={post.slug}
                  delayClassName={index > 0 ? "reveal-delay-1" : ""}
                >
                  <li className="border-b border-line">
                    <Link
                      href={localePath(locale, `/journal/${post.slug}`)}
                      className="group grid gap-6 py-10 md:grid-cols-[10rem_1fr_12rem] md:items-center md:gap-10 md:py-12"
                    >
                      <time
                        dateTime={post.date}
                        className="text-sm tracking-[0.12em] text-pine"
                      >
                        {post.date.replaceAll("-", ".")}
                      </time>
                      <div>
                        <h2 className="text-[1.25rem] font-medium tracking-[0.06em] transition-colors group-hover:text-pine md:text-[1.4rem]">
                          {post.title}
                        </h2>
                        {post.excerpt ? (
                          <p className="mt-3 max-w-[36rem] leading-[1.9] text-ink-soft">
                            {post.excerpt}
                          </p>
                        ) : null}
                      </div>
                      {post.cover ? (
                        <div className="relative aspect-[4/3] overflow-hidden md:justify-self-end md:w-full">
                          <Image
                            src={post.cover}
                            alt=""
                            fill
                            sizes="240px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

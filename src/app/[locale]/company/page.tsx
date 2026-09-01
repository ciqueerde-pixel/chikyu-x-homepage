import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, localePath, type Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = getDictionary(localeParam);
  return {
    title: "COMPANY",
    description: dict.company.metaDescription,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const t = getDictionary(locale).company;

  return (
    <>
      <section className="border-b border-line bg-[#0F1012] text-mist">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label !text-white/55">(COMPANY)</p>
            <h1 className="mt-6">
              <span className="sr-only">CHIKYU X Inc.</span>
              <BrandMark
                variant="inc"
                priority
                className="h-auto w-[min(100%,34rem)] max-w-full brightness-0 invert"
              />
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-[1.9] text-white/70">
              {t.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(MISSION)</p>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.6rem,3.8vw,2.6rem)] font-medium leading-[1.4] tracking-[0.04em]">
              {t.missionTitle}
            </h2>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <p className="mt-8 max-w-[40rem] text-[1.05rem] leading-[2] text-ink-soft">
              {t.missionBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-[#A6ACB4] text-ink">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label !text-[#0F1012]/70">(COMPANY PROFILE)</p>
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-medium tracking-[0.08em]">
              {t.profileTitle}
            </h2>
          </Reveal>

          <dl className="mt-12 border-t border-[#0F1012]/15">
            {t.profile.map((item, index) => (
              <Reveal
                key={item.label}
                delayClassName={index > 0 ? "reveal-delay-1" : ""}
              >
                <div className="grid gap-2 border-b border-[#0F1012]/15 py-7 md:grid-cols-[12rem_1fr] md:gap-10">
                  <dt className="text-sm tracking-[0.12em] text-[#0F1012]/70">
                    {item.label}
                  </dt>
                  <dd className="leading-[1.9] text-[#0F1012]/80">{item.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-white/15 bg-[#898F97] text-mist">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label !text-white/70">(LEADERSHIP)</p>
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-medium tracking-[0.08em] text-white">
              {t.leadershipTitle}
            </h2>
          </Reveal>

          <Reveal delayClassName="reveal-delay-1">
            <div className="mt-12 max-w-[44rem]">
              <p className="text-sm tracking-[0.16em] text-white/70">{t.role}</p>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[0.08em] text-white">
                {locale === "ja" ? "知久 健" : "Ken Chikyu"}
                <span className="ml-3 text-base tracking-[0.16em] text-white/70">
                  {locale === "ja" ? "Ken Chikyu" : "知久 健"}
                </span>
              </h3>
              <div className="mt-8 space-y-5 text-[1.02rem] leading-[2] text-white/80">
                {t.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/15 bg-[#898F97] text-mist">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label !text-white/70">(HISTORY)</p>
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-medium tracking-[0.08em] text-white">
              {t.historyTitle}
            </h2>
          </Reveal>

          <ol className="mt-12 border-t border-white/20">
            {t.history.map((item) => (
              <Reveal key={item.year}>
                <li className="grid gap-2 border-b border-white/20 py-7 md:grid-cols-[10rem_1fr] md:gap-10">
                  <p className="tracking-[0.12em] text-white/70">{item.year}</p>
                  <p className="leading-[1.9] text-white/80">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-[#2E3034] text-mist">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
          <Reveal>
            <p className="text-[1.15rem] tracking-[0.08em] text-white/80">
              {t.contactCta}
            </p>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex items-center justify-center border border-white/50 bg-transparent px-7 py-3 text-[0.72rem] tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              CONTACT
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

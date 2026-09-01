import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, localePath, type Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-mist">
        <Image
          src="/hero-space.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_82%] brightness-[1.28] contrast-[1.05] saturate-[1.08]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,28,58,0.18)_0%,rgba(40,52,92,0.08)_35%,rgba(72,68,110,0.16)_68%,rgba(236,238,233,0.55)_92%,rgba(236,238,233,1)_100%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1200px] flex-col justify-end px-5 pb-28 pt-[calc(var(--header-h)+3rem)] md:px-8 md:pb-36">
          <h1 className="hero-animate-1">
            <span className="sr-only">CHIKYU X Inc.</span>
            <BrandMark
              variant="inc"
              priority
              className="h-auto w-[min(100%,34rem)] max-w-full brightness-0 invert"
            />
          </h1>
          <div className="hero-animate-3 mt-8">
            <BrandMark
              variant="tagline"
              className="h-auto w-[min(100%,34rem)] max-w-full brightness-0 invert opacity-90"
            />
          </div>
          <p className="hero-animate-3 mt-8 max-w-[34rem] text-[clamp(1.15rem,2.6vw,1.55rem)] font-medium leading-relaxed tracking-[0.06em] text-white">
            {t.mission}
          </p>
          <div className="hero-animate-4 mt-10 flex flex-wrap gap-4">
            <Link
              href={localePath(locale, "/#mission")}
              className="inline-flex items-center justify-center border border-white/50 bg-transparent px-7 py-3 text-[0.72rem] tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              MISSION
            </Link>
            <Link
              href={localePath(locale, "/journal")}
              className="inline-flex items-center justify-center border border-white/50 bg-transparent px-7 py-3 text-[0.72rem] tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              JOURNAL
            </Link>
          </div>
        </div>
      </section>

      <section id="mission" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="section-label">(MISSION)</p>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <h2
              className={`mt-8 text-[clamp(1.05rem,4.6vw,2.8rem)] font-medium leading-[1.35] tracking-[0.04em] ${
                locale === "ja" ? "whitespace-nowrap" : "max-w-[20ch]"
              }`}
            >
              {t.missionTitle}
            </h2>
          </Reveal>
          <Reveal delayClassName="reveal-delay-2">
            <div className="mt-10 max-w-[40rem] space-y-6 text-[1.05rem] leading-[2] text-ink-soft">
              <p>{t.missionP1}</p>
              <p>{t.missionP2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-t border-line bg-[color-mix(in_oklab,var(--mist)_55%,transparent)]"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="section-label">(PROJECTS)</p>
            <h2 className="mt-6 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium tracking-[0.06em]">
              {t.projectsTitle}
            </h2>
            <p className="mt-4 max-w-[36rem] text-ink-soft">{t.projectsLead}</p>
          </Reveal>

          <div className="mt-14 grid gap-0 border-t border-line md:grid-cols-2">
            {t.projects.map((project, index) => (
              <Reveal
                key={project.title}
                delayClassName={index % 2 === 1 ? "reveal-delay-1" : ""}
                className="border-b border-line md:odd:border-r"
              >
                <article className="flex h-full flex-col py-12 pl-[1em] pr-0 md:py-14 md:pl-[calc(2rem+1em)] md:pr-8 md:odd:pl-[1em]">
                  <h3 className="text-[1.15rem] font-medium tracking-[0.14em]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-[0.98rem] leading-[1.9] text-ink-soft">
                    {project.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line text-mist">
        <Image
          src="/company/header.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[80%_72%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(22,16,12,0.58)_0%,rgba(22,16,12,0.28)_42%,rgba(22,16,12,0.08)_75%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid min-h-[22rem] max-w-[1200px] gap-12 px-5 py-24 md:min-h-[28rem] md:grid-cols-[1fr_1.1fr] md:items-end md:px-8 md:py-32">
          <Reveal>
            <p className="section-label !text-white/70">(COMPANY)</p>
            <h2 className="mt-6 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium tracking-[0.06em] text-white">
              {t.companyTitle}
            </h2>
            <p className="mt-5 max-w-[28rem] leading-[1.9] text-white/80">
              {t.companyLead}
            </p>
            <a
              href="mailto:info@chikyu-x.co.jp"
              className="mt-8 inline-block text-[1.05rem] tracking-[0.04em] text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-white"
            >
              info@chikyu-x.co.jp
            </a>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                href={localePath(locale, "/company")}
                className="inline-flex items-center justify-center border border-white/50 bg-transparent px-7 py-3 text-[0.72rem] tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                VIEW COMPANY
              </Link>
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex items-center justify-center border border-white/50 bg-transparent px-7 py-3 text-[0.72rem] tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                CONTACT
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

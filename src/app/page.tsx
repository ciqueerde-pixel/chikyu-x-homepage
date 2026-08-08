import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "THE NORTH FACE",
    body: "エキップメントデザイナーとして、テント・バックパック・ヘッドギア、グローブなどフィールドのための道具づくりに携わる。",
  },
  {
    title: "GOLDWIN",
    body: "クリエイティブ推薦室にて、ブランドの全体知の編纂と、創造性・人間性を組織に根づかせる橋渡しを担う。",
  },
  {
    title: "CHIKYU",
    body: "ベルリンで立ち上げた自身のブランド。カルチャーと生活のあいだにある体験を、プロダクトとしてかたちにする。",
  },
  {
    title: "地球を吹く in Japan",
    body: "トランペッター近藤等則とともに日本の秘境を巡り、自然（NATURE）のなかで心（SPIRIT）を開き、テクノロジー（TECHNOLOGY）の在り方を問い直す旅。地球と人との関係性を、体験として刻んだプロジェクト。",
  },
];

export default function HomePage() {
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
          <p className="hero-animate-1 text-[0.75rem] font-medium tracking-[0.18em] text-white/70">
            (HOME)
          </p>
          <h1 className="hero-animate-2 mt-8">
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
          <p className="hero-animate-3 mt-8 max-w-[28rem] text-[clamp(1.15rem,2.6vw,1.55rem)] font-medium leading-relaxed tracking-[0.06em] text-white">
            人の役に立つものを創造する
          </p>
          <div className="hero-animate-4 mt-10 flex flex-wrap gap-4">
            <Link
              href="/#mission"
              className="inline-flex items-center justify-center border border-white bg-white px-7 py-3 text-[0.72rem] tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-white"
            >
              MISSION
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/50 bg-transparent px-7 py-3 text-[0.72rem] tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              CONTACT
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
            <h2 className="mt-8 whitespace-nowrap text-[clamp(1.05rem,4.6vw,2.8rem)] font-medium leading-[1.35] tracking-[0.04em]">
              人の役に立つものを創造する
            </h2>
          </Reveal>
          <Reveal delayClassName="reveal-delay-2">
            <div className="mt-10 max-w-[40rem] space-y-6 text-[1.05rem] leading-[2] text-ink-soft">
              <p>
                自然（NATURE）から学び、心（SPIRIT）を大切にし、技術（TECHNOLOGY）を使いこなす。
                その三つが交わるところに、長く役立つものが生まれると私たちは考えています。
              </p>
              <p>
                流行を追うのではなく、フィールドで使い込み、手にした瞬間に「いいな」と感じられる体験をつくる。
                それが、株式会社CHIKYU Xの創造の起点です。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-line bg-[color-mix(in_oklab,var(--mist)_55%,transparent)]">
        <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="section-label">(PROJECTS)</p>
            <h2 className="mt-6 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium tracking-[0.06em]">
              これまでの歩み
            </h2>
            <p className="mt-4 max-w-[36rem] text-ink-soft">
              服、道具、ブランド、組織の創造性まで。人の役に立つものをめぐる実践を重ねてきました。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-0 border-t border-line md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                delayClassName={index % 2 === 1 ? "reveal-delay-1" : ""}
                className="border-b border-line md:odd:border-r"
              >
                <article className="flex h-full flex-col px-0 py-12 md:px-8 md:py-14 md:first:pl-0">
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

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-24 md:grid-cols-[1fr_1.1fr] md:items-end md:px-8 md:py-32">
          <Reveal>
            <p className="section-label">(COMPANY)</p>
            <h2 className="mt-6 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium tracking-[0.06em]">
              会社情報
            </h2>
            <p className="mt-5 max-w-[28rem] text-ink-soft leading-[1.9]">
              石川県金沢市を拠点に、デザインとクリエイティブの力で、地球と人に役立つものを創造します。
            </p>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                href="/company"
                className="inline-flex items-center justify-center border border-ink bg-ink px-7 py-3 text-[0.72rem] tracking-[0.2em] text-mist transition-colors hover:bg-pine hover:border-pine"
              >
                VIEW COMPANY
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-ink/30 px-7 py-3 text-[0.72rem] tracking-[0.2em] transition-colors hover:border-ink hover:bg-mist/60"
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

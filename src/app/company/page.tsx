import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "COMPANY",
  description: "株式会社CHIKYU Xの会社概要・代表プロフィール。",
};

const profile = [
  { label: "社名", value: "株式会社CHIKYU X（CHIKYU X Inc.）" },
  { label: "代表取締役", value: "知久 健（Ken Chikyu）" },
  {
    label: "設立",
    value: "2026年8月8日（令和八年八月八日）",
  },
  { label: "本店所在地", value: "石川県金沢市" },
  { label: "資本金", value: "930,000円" },
  {
    label: "事業内容",
    value:
      "デザインの企画・制作・コンサルティング／ブランド開発／プロダクトデザイン／クリエイティブ支援／AI・データサイエンスを活用した経営支援",
  },
];

const history = [
  {
    year: "2002",
    body: "ベルリンにて自身のブランド「CHIKYU」を始動。",
  },
  {
    year: "2004",
    body: "ザ・ノース・フェイスのエキップメントデザイナーとして、道具づくりに携わる。",
  },
  {
    year: "2008",
    body: "フリーランスのデザイナーとして独立。テント、バックパック、ウェアなど多様なプロダクトを手がける。",
  },
  {
    year: "2026.08.08",
    body: "株式会社CHIKYU Xを設立（令和八年八月八日）。",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(COMPANY)</p>
            <h1 className="mt-6 text-[clamp(2.2rem,6vw,4rem)] font-medium tracking-[0.06em]">
              COMPANY
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-[1.9] text-ink-soft">
              自然・心・技術の交点から、人の役に立つものを創造する会社です。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(MISSION)</p>
            <h2 className="mt-6 max-w-[18ch] text-[clamp(1.6rem,3.8vw,2.6rem)] font-medium leading-[1.4] tracking-[0.04em]">
              人の役に立つものを創造する
            </h2>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <p className="mt-8 max-w-[40rem] text-[1.05rem] leading-[2] text-ink-soft">
              NATURE × SPIRIT × TECHNOLOGY。
              フィールドで得た感覚と、長く愛されるものづくりの姿勢を軸に、プロダクト・ブランド・組織の創造を支えます。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-[color-mix(in_oklab,var(--mist)_55%,transparent)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(COMPANY PROFILE)</p>
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-medium tracking-[0.08em]">
              会社概要
            </h2>
          </Reveal>

          <dl className="mt-12 border-t border-line">
            {profile.map((item, index) => (
              <Reveal
                key={item.label}
                delayClassName={index > 0 ? "reveal-delay-1" : ""}
              >
                <div className="grid gap-2 border-b border-line py-7 md:grid-cols-[12rem_1fr] md:gap-10">
                  <dt className="text-sm tracking-[0.12em] text-pine">
                    {item.label}
                  </dt>
                  <dd className="leading-[1.9] text-ink-soft">{item.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(LEADERSHIP)</p>
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-medium tracking-[0.08em]">
              代表
            </h2>
          </Reveal>

          <Reveal delayClassName="reveal-delay-1">
            <div className="mt-12 max-w-[44rem]">
              <p className="text-sm tracking-[0.16em] text-pine">
                代表取締役
              </p>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[0.08em]">
                知久 健
                <span className="ml-3 text-base tracking-[0.16em] text-ink-soft">
                  Ken Chikyu
                </span>
              </h3>
              <div className="mt-8 space-y-5 text-[1.02rem] leading-[2] text-ink-soft">
                <p>
                  1978年、静岡市生まれ。文化服装学院デザイン専攻科卒業。イッセイミヤケを経て、2002年よりベルリンで自身のブランド「CHIKYU」を手がける。
                </p>
                <p>
                  2004年に帰国し、ザ・ノース・フェイスのエキップメントデザイナーに。2008年に独立後は、フリーランスとしてアウトドアプロダクトを中心に、テントからバックパック、ウェアまで幅広い製品デザインを手がけてきた。
                </p>
                <p>
                  金沢を拠点に、自然や街の美意識をプロダクトと体験へ落とし込み、長く役立つものづくりを続けている。2026年8月8日、株式会社CHIKYU Xを設立。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(HISTORY)</p>
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-medium tracking-[0.08em]">
              沿革
            </h2>
          </Reveal>

          <ol className="mt-12 border-t border-line">
            {history.map((item) => (
              <Reveal key={item.year}>
                <li className="grid gap-2 border-b border-line py-7 md:grid-cols-[10rem_1fr] md:gap-10">
                  <p className="tracking-[0.12em] text-pine">{item.year}</p>
                  <p className="leading-[1.9] text-ink-soft">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
          <Reveal>
            <p className="text-[1.15rem] tracking-[0.08em]">
              お問い合わせはこちら
            </p>
          </Reveal>
          <Reveal delayClassName="reveal-delay-1">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-ink bg-ink px-7 py-3 text-[0.72rem] tracking-[0.2em] text-mist transition-colors hover:bg-pine hover:border-pine"
            >
              CONTACT
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

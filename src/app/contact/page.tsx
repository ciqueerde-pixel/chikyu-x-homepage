import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "株式会社CHIKYU Xへのお問い合わせ。",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label">(CONTACT)</p>
            <h1 className="mt-6 text-[clamp(2.2rem,6vw,4rem)] font-medium tracking-[0.06em]">
              CONTACT
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-[1.9] text-ink-soft">
              デザイン、ブランド、クリエイティブに関するご相談は、下記までご連絡ください。
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-14 md:grid-cols-2">
            <Reveal>
              <p className="section-label">(EMAIL)</p>
              <h2 className="mt-5 text-[clamp(1.4rem,3vw,1.9rem)] font-medium tracking-[0.06em]">
                メール
              </h2>
              <a
                href="mailto:info@chikyu-x.co.jp"
                className="mt-8 inline-block text-[clamp(1.2rem,2.8vw,1.7rem)] tracking-[0.04em] underline decoration-line underline-offset-8 transition-colors hover:text-pine"
              >
                info@chikyu-x.co.jp
              </a>
              <p className="mt-6 max-w-[28rem] text-sm leading-[1.9] text-ink-soft">
                ※ ドメイン取得手続き中のため、受信開始までお時間をいただく場合があります。取得完了後、同アドレスで対応します。
              </p>
            </Reveal>

            <Reveal delayClassName="reveal-delay-1">
              <p className="section-label">(ADDRESS)</p>
              <h2 className="mt-5 text-[clamp(1.4rem,3vw,1.9rem)] font-medium tracking-[0.06em]">
                所在地
              </h2>
              <p className="mt-8 text-[1.05rem] leading-[2] text-ink-soft">
                株式会社CHIKYU X
                <br />
                石川県金沢市
              </p>
              <p className="mt-8 text-sm leading-[1.9] text-ink-soft">
                Web:
                <span className="ml-2 tracking-[0.04em]">
                  https://chikyu-x.co.jp
                </span>
                <br />
                （ドメイン取得後に公開予定）
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

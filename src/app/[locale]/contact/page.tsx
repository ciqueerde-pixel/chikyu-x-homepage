import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { X_HANDLE_AT, X_PROFILE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = getDictionary(localeParam);
  return {
    title: "CONTACT",
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const t = getDictionary(localeParam).contact;

  return (
    <>
      <section className="border-b border-line bg-[#A6ACB4] text-ink">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="section-label !text-[#0F1012]/70">(CONTACT)</p>
            <h1 className="mt-6 text-[clamp(2.2rem,6vw,4rem)] font-medium tracking-[0.06em]">
              CONTACT
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-[1.9] text-[#0F1012]/75">
              {t.lead}
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
                {t.emailTitle}
              </h2>
              <a
                href="mailto:info@chikyu-x.co.jp"
                className="mt-8 inline-block text-[clamp(1.2rem,2.8vw,1.7rem)] tracking-[0.04em] underline decoration-line underline-offset-8 transition-colors hover:text-pine"
              >
                info@chikyu-x.co.jp
              </a>
            </Reveal>

            <Reveal delayClassName="reveal-delay-1">
              <p className="section-label">(ADDRESS)</p>
              <h2 className="mt-5 text-[clamp(1.4rem,3vw,1.9rem)] font-medium tracking-[0.06em]">
                {t.addressTitle}
              </h2>
              <p className="mt-8 text-[1.05rem] leading-[2] text-ink-soft">
                {t.companyName}
                <br />
                {t.address}
              </p>
              <p className="mt-8 text-sm leading-[1.9] text-ink-soft">
                Web:
                <a
                  href="https://chikyu-x.co.jp"
                  className="ml-2 tracking-[0.04em] underline decoration-line underline-offset-4 transition-colors hover:text-pine"
                >
                  https://chikyu-x.co.jp
                </a>
                <br />
                X:
                <a
                  href={X_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 tracking-[0.04em] underline decoration-line underline-offset-4 transition-colors hover:text-pine"
                >
                  {X_HANDLE_AT}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

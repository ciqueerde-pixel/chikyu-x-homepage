import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full font-sans">
        <div className="site-shell">
          <div className="site-atmosphere" aria-hidden="true" />
          <SiteHeader locale={locale} dict={dict} />
          <main className="flex-1 pt-[var(--header-h)]">{children}</main>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}

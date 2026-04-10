import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslation } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const currentLocale = locale === 'en' ? 'en' : 'zh';
  const translations = getTranslation(currentLocale);

  return (
    <>
      <Header locale={currentLocale} translations={translations} />
      <main className="flex-1">
        {children}
      </main>
      <Footer translations={translations} />
    </>
  );
}

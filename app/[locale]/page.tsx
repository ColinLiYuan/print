import HomePageClient from './HomePageClient';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const currentLocale = locale === 'en' ? 'en' : 'zh';
  
  const messages = await import(`@/locales/${currentLocale}`).then(mod => mod.default);

  return <HomePageClient messages={messages} />;
}

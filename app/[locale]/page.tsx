import HomePageClient from './HomePageClient';
import type { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  
  return {
    title: isEn 
      ? 'HoloVerify Global - Eliminate Counterfeits. Restore Brand Integrity.'
      : 'HoloVerify Global - 消除假冒，恢复品牌完整性',
    description: isEn
      ? 'High-security holographic solutions & thermal transfer foils engineered for absolute brand protection. Premium anti-counterfeiting technology for pharmaceuticals, luxury goods, and government documents.'
      : '高安全全息解决方案和热转印箔，专为绝对品牌保护而设计。为医药、奢侈品和政府文件提供高级防伪技术。',
    keywords: isEn
      ? ['holographic security', 'anti-counterfeiting', 'brand protection', 'tamper evident', 'security labels', 'hologram foil', 'authentication']
      : ['全息安全', '防伪', '品牌保护', '防篡改', '安全标签', '全息箔', '认证'],
    openGraph: {
      title: isEn ? 'HoloVerify Global - Advanced Security Solutions' : 'HoloVerify Global - 高级安全解决方案',
      description: isEn
        ? 'Premium holographic security solutions for global brand protection'
        : '全球品牌保护的高级全息安全解决方案',
      type: 'website',
      locale: locale,
      siteName: 'HoloVerify Global',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'HoloVerify Global' : 'HoloVerify Global',
      description: isEn
        ? 'High-security holographic solutions for brand protection'
        : '品牌保护的高安全全息解决方案',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://holoverify.com/${locale}`,
      languages: {
        'en': 'https://holoverify.com/en',
        'zh': 'https://holoverify.com/zh',
        'es': 'https://holoverify.com/es',
        'ru': 'https://holoverify.com/ru',
      },
    },
  };
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  // 确保 locale 是有效的语言代码
  const validLocales = ['zh', 'en', 'es', 'ru'] as const;
  const currentLocale = validLocales.includes(locale as any) ? (locale as typeof validLocales[number]) : 'en';
  
  const messages = await import(`@/locales/${currentLocale}`).then(mod => mod.default);

  return <HomePageClient messages={messages} />;
}

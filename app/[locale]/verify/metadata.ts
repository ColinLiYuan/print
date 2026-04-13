import type { Metadata } from 'next';

interface VerifyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: VerifyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  
  return {
    title: isEn 
      ? 'Product Authentication - Verify Authenticity | HoloVerify Global'
      : '产品认证 - 真伪验证 | HoloVerify Global',
    description: isEn
      ? 'Verify the authenticity of your product using our secure digital verification system. Enter your security code to confirm genuine products.'
      : '使用我们的安全数字验证系统验证产品的真实性。输入您的安全代码以确认正品。',
    keywords: isEn
      ? ['product verification', 'authentication', 'genuine product', 'security code', 'verify authenticity']
      : ['产品验证', '认证', '正品', '安全码', '真伪验证'],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://holoverify.com/${locale}/verify`,
    },
  };
}

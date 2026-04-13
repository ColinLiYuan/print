import type { Metadata } from 'next';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  
  return {
    title: isEn 
      ? 'Contact Us - HoloVerify Global Security Solutions'
      : '联系我们 - HoloVerify 全球安全解决方案',
    description: isEn
      ? 'Get in touch with our security experts. Request consultations, sample kits, or learn more about our anti-counterfeiting solutions for your business.'
      : '联系我们的安全专家。申请咨询、样品套装，或了解更多关于我们为您的企业提供的防伪解决方案。',
    keywords: isEn
      ? ['contact', 'security consultation', 'request quote', 'business inquiry', 'customer support']
      : ['联系', '安全咨询', '请求报价', '商务咨询', '客户支持'],
    openGraph: {
      title: isEn ? 'Contact HoloVerify Global' : '联系 HoloVerify Global',
      description: isEn
        ? 'Connect with our team of security professionals'
        : '与我们的安全专业团队联系',
      type: 'website',
    },
    alternates: {
      canonical: `https://holoverify.com/${locale}/contact`,
    },
  };
}

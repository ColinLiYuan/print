import Link from 'next/link';
import type { Metadata } from 'next';

interface SampleKitPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SampleKitPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  
  return {
    title: isEn 
      ? 'Free Security Sample Kit - HoloVerify Global'
      : '免费安全样品套装 - HoloVerify Global',
    description: isEn
      ? 'Request your free sample kit containing 15+ physical samples of holographic foils, tamper evident labels, and digital security solutions. Experience our technology firsthand.'
      : '申请您的免费样品套装，包含15+种全息箔、防篡改标签和数字安全解决方案的实物样品。亲身体验我们的技术。',
    keywords: isEn
      ? ['sample kit', 'free samples', 'hologram samples', 'security testing', 'product demonstration']
      : ['样品套装', '免费样品', '全息样品', '安全测试', '产品展示'],
    openGraph: {
      title: isEn ? 'Free Security Sample Kit' : '免费安全样品套装',
      description: isEn
        ? 'Experience premium security solutions with our comprehensive sample kit'
        : '通过我们全面的样品套装体验高级安全解决方案',
      type: 'website',
    },
    alternates: {
      canonical: `https://holoverify.com/${locale}/sample-kit`,
    },
  };
}

export default async function SampleKitPage({ params }: SampleKitPageProps) {
  const { locale } = await params;
  // 确保 locale 是有效的语言代码
  const validLocales = ['zh', 'en', 'es', 'ru'] as const;
  const currentLocale = validLocales.includes(locale as any) ? (locale as typeof validLocales[number]) : 'en';
  const messages = await import(`@/locales/${currentLocale}`).then(mod => mod.default);

  const kitContents = [
    {
      category: 'Holographic Foils',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: '#00F2FE',
      items: [
        { name: 'Positioned Hologram Foil', spec: '12-16 micron, Paper/Plastic application' },
        { name: 'Wallpaper Security Film', spec: '25 micron, Anti-counterfeiting layer' },
        { name: 'Transparent HRI Overlay', spec: '20 micron, Document protection' },
        { name: 'Rainbow Holographic Foil', spec: '16 micron, Premium finish' },
        { name: '2D/3D Hologram Foil', spec: '14 micron, Multi-dimensional effect' },
      ],
    },
    {
      category: 'Tamper Evident Labels',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      color: '#FFD700',
      items: [
        { name: 'VOID Pattern Label', spec: 'Destructive on removal' },
        { name: 'Honeycomb Structure Label', spec: 'Fragile, reveals tampering' },
        { name: 'QR Security Sticker', spec: 'Encrypted, traceable' },
        { name: 'Serial Number Label', spec: 'Unique ID, verifiable' },
        { name: 'Custom Printed VOID', spec: 'Brand-specific message' },
      ],
    },
    {
      category: 'Digital Solutions',
      icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
      color: '#C0C0C0',
      items: [
        { name: 'Encrypted QR Code Demo', spec: 'Track & trace capable' },
        { name: 'NFC Tag Sample', spec: 'Mobile verification ready' },
        { name: 'Blockchain Certificate', spec: 'Immutable record' },
        { name: 'Mobile App Demo Access', spec: 'Verification platform' },
        { name: 'Analytics Dashboard Trial', spec: '30-day access' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 242, 254, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/5 mb-6">
              <span className="text-sm text-[#00F2FE] font-medium tracking-wide">Free for Qualified Buyers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#E5E5E5] mb-6">
              Security Sample Kit
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience our premium security solutions firsthand. Each kit contains carefully selected samples to demonstrate our technology capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#00F2FE] mb-2">15+</div>
              <div className="text-gray-400">Physical Samples</div>
            </div>
            <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">3</div>
              <div className="text-gray-400">Technology Categories</div>
            </div>
            <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#C0C0C0] mb-2">Free</div>
              <div className="text-gray-400">Shipping Worldwide</div>
            </div>
          </div>

          {/* Detailed Contents */}
          <div className="space-y-12">
            {kitContents.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
                {/* Category Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <svg className="w-6 h-6" style={{ color: category.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#E5E5E5]">{category.category}</h3>
                  </div>
                </div>

                {/* Items List */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: category.color }} />
                        <div>
                          <div className="font-semibold text-[#E5E5E5] mb-1">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.spec}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="py-24 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F2FE]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-6">
            Ready to Experience Our Technology?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Request your free sample kit today. Our team will prepare a customized selection based on your industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-bold text-lg hover:shadow-[0_0_40px_rgba(0,242,254,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Request Sample Kit
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-10 py-5 rounded-lg border border-white/20 text-[#E5E5E5] font-bold text-lg hover:bg-white/5 hover:border-[#00F2FE]/50 transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

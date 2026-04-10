'use client';

import { useState } from 'react';
import Link from 'next/link';
import InquiryModal from '@/components/InquiryModal';

export default function HomePageClient({ messages }: { messages: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505]" />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 242, 254, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/5">
                  <div className="w-2 h-2 rounded-full bg-[#00F2FE] mr-2 animate-pulse" />
                  <span className="text-sm text-[#00F2FE] font-medium tracking-wide">Advanced Optical Security</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-[#E5E5E5]">{messages.hero.title.split('.')[0]}</span>
                  <span className="text-[#E5E5E5]">.</span>
                  <br />
                  <span className="text-[#E5E5E5]">{messages.hero.title.split('.')[1]}</span>
                  <span className="text-[#E5E5E5]">.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                  {messages.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {messages.hero.ctaPrimary}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/20 text-[#E5E5E5] font-semibold text-lg hover:bg-white/5 hover:border-[#00F2FE]/50 transition-all duration-300"
                >
                  {messages.hero.ctaSecondary}
                </Link>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#00F2FE]">15+</div>
                    <div className="text-sm text-gray-500 mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00F2FE]">500+</div>
                    <div className="text-sm text-gray-500 mt-1">Global Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00F2FE]">99.9%</div>
                    <div className="text-sm text-gray-500 mt-1">Security Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F2FE]/20 to-[#FFD700]/20 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-96 h-96">
                    <div className="absolute inset-0 rounded-full border-2 border-[#00F2FE]/30 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 rounded-full border border-[#FFD700]/20 animate-[spin_15s_linear_infinite_reverse]" />
                    
                    <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#0A0A0A] to-[#141414] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#00F2FE]/30 via-transparent to-[#FFD700]/30 animate-[shimmer_3s_ease-in-out_infinite]" />
                      
                      {/* Scanning/Pulse Animation */}
                      <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite]">
                        <div className="absolute inset-4 rounded-full border-2 border-[#00F2FE]/40 animate-[ping_3s_ease-out_infinite]" />
                      </div>
                      <div className="absolute inset-0 animate-[spin_8s_linear_infinite] opacity-30">
                        <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00F2FE] to-transparent -translate-x-1/2" />
                      </div>
                      
                      <svg className="relative w-32 h-32 text-[#00F2FE] drop-shadow-[0_0_15px_rgba(0,242,254,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>

                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00F2FE] rounded-full shadow-[0_0_10px_#00F2FE] -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="absolute inset-0 animate-[spin_8s_linear_infinite_reverse]">
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#FFD700] rounded-full shadow-[0_0_10px_#FFD700] -translate-x-1/2 translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Product Matrix - Bento Box Layout */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              {messages.productMatrix.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00F2FE] to-[#FFD700] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Large */}
            <div className="md:col-span-2 group relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#00F2FE]/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F2FE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00F2FE]/20 to-[#00F2FE]/5 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#00F2FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#E5E5E5] mb-3">
                  {messages.productMatrix.holographic.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {messages.productMatrix.holographic.description}
                </p>
                <ul className="space-y-2">
                  {messages.productMatrix.holographic.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#00F2FE] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#FFD700]/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#E5E5E5] mb-3">
                  {messages.productMatrix.tamperEvident.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {messages.productMatrix.tamperEvident.description}
                </p>
                <ul className="space-y-2">
                  {messages.productMatrix.tamperEvident.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-xs text-gray-500">
                      <svg className="w-3 h-3 text-[#FFD700] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#00F2FE]/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F2FE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F2FE]/20 to-[#00F2FE]/5 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[#00F2FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#E5E5E5] mb-3">
                  {messages.productMatrix.digitalTraceability.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {messages.productMatrix.digitalTraceability.description}
                </p>
                <ul className="space-y-2">
                  {messages.productMatrix.digitalTraceability.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-xs text-gray-500">
                      <svg className="w-3 h-3 text-[#00F2FE] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4 - Wide */}
            <div className="md:col-span-2 group relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#C0C0C0]/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C0C0C0]/20 to-[#C0C0C0]/5 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E5E5E5] mb-3">
                    {messages.productMatrix.customLabels.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {messages.productMatrix.customLabels.description}
                  </p>
                  <ul className="space-y-2">
                    {messages.productMatrix.customLabels.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-[#C0C0C0] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#C0C0C0]/10 to-transparent border border-white/5 flex items-center justify-center">
                    <svg className="w-24 h-24 text-[#C0C0C0]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Premium security solutions engineered for global brand protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Positioned Hologram Foil',
                description: 'Precision-aligned holographic foil for high-speed industrial applications.',
                specs: {
                  material: 'PET/PVC',
                  thickness: '12-16 micron',
                  application: 'Paper/Plastic',
                },
                image: 'from-[#00F2FE]/20 to-[#00F2FE]/5',
                hoverImage: 'from-[#00C4CC]/30 to-[#00F2FE]/10',
                color: '#00F2FE',
              },
              {
                name: 'Wallpaper Security Film',
                description: 'Anti-counterfeiting layer with multi-spectral security features.',
                specs: {
                  material: 'BOPP/PET',
                  thickness: '25 micron',
                  application: 'Document Protection',
                },
                image: 'from-[#FFD700]/20 to-[#FFD700]/5',
                hoverImage: 'from-[#FFC107]/30 to-[#FFD700]/10',
                color: '#FFD700',
              },
              {
                name: 'Transparent HRI Overlay',
                description: 'High-resolution imaging overlay for ID and passport security.',
                specs: {
                  material: 'Clear PET',
                  thickness: '20 micron',
                  application: 'ID Cards/Passports',
                },
                image: 'from-[#C0C0C0]/20 to-[#C0C0C0]/5',
                hoverImage: 'from-[#E0E0E0]/30 to-[#C0C0C0]/10',
                color: '#C0C0C0',
              },
            ].map((product, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-opacity-50 transition-all duration-500" style={{ borderColor: `${product.color}30` }}>
                {/* Product Image with Hover Effect */}
                <div className="relative h-64 overflow-hidden">
                  {/* Default Image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.image} flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0`}>
                    <svg className="w-24 h-24 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* Hover Image (Holographic Shift) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.hoverImage} flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100`}>
                    <svg className="w-24 h-24 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  {/* Holographic Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#E5E5E5] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {product.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Material</span>
                      <span className="text-[#E5E5E5] font-medium">{product.specs.material}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Thickness</span>
                      <span className="text-[#E5E5E5] font-medium">{product.specs.thickness}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Application</span>
                      <span className="text-[#E5E5E5] font-medium">{product.specs.application}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Barrier Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              {messages.trustBarrier.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {messages.trustBarrier.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00F2FE] to-[#FFD700] mx-auto mt-6" />
          </div>

          {/* Security Levels */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { level: messages.trustBarrier.levels.level1, color: '#00F2FE', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
              { level: messages.trustBarrier.levels.level2, color: '#FFD700', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' },
              { level: messages.trustBarrier.levels.level3, color: '#C0C0C0', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300" style={{ borderColor: `${item.color}30` }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#E5E5E5] mb-3 text-center">
                    {item.level.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 text-center">
                    {item.level.description}
                  </p>
                  <ul className="space-y-2">
                    {item.level.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500 justify-center">
                        <svg className="w-4 h-4 mr-2" style={{ color: item.color }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Security Process Flow */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#E5E5E5] mb-12 text-center">
              {messages.trustBarrier.process.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {messages.trustBarrier.process.steps.map((step: any, index: number) => (
                <div key={index} className="relative">
                  {index < messages.trustBarrier.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#00F2FE]/50 to-transparent -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00F2FE]/20 to-[#00F2FE]/5 border-2 border-[#00F2FE]/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-[#00F2FE]">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#E5E5E5] mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              {messages.industries.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {messages.industries.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00F2FE] to-[#FFD700] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { industry: messages.industries.pharmaceuticals, gradient: 'from-blue-900/40 to-purple-900/40', bgImage: 'linear-gradient(rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.4)), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300F2FE\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
              { industry: messages.industries.luxury, gradient: 'from-yellow-900/40 to-orange-900/40', bgImage: 'linear-gradient(rgba(146, 64, 14, 0.4), rgba(194, 65, 12, 0.4)), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD700\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
              { industry: messages.industries.liquor, gradient: 'from-red-900/40 to-pink-900/40', bgImage: 'linear-gradient(rgba(127, 29, 29, 0.4), rgba(190, 24, 93, 0.4)), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23EF4444\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { industry: messages.industries.government, gradient: 'from-green-900/40 to-teal-900/40', bgImage: 'linear-gradient(rgba(20, 83, 45, 0.4), rgba(17, 94, 89, 0.4)), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310B981\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9' },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#00F2FE]/50 transition-all duration-500">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70`}
                  style={{ backgroundImage: item.bgImage }}
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/70" />
                <div className="relative p-8 md:p-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#00F2FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.industry.icon || item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E5E5E5] mb-3">
                    {item.industry.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {item.industry.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#00F2FE] font-medium hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F2FE]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-6">
            {messages.verify.title}
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            {messages.verify.subtitle}
          </p>
          <Link
            href="/verify"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-bold text-lg hover:shadow-[0_0_40px_rgba(0,242,254,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {messages.verify.button}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        translations={messages}
      />
    </div>
  );
}

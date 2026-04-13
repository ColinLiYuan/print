'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { locales, type Locale } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
  translations: any;
}

export default function Header({ locale, translations }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems = [
    { href: '/', label: translations.common.home },
    { href: '/solutions', label: translations.common.solutions },
    { href: '/verify', label: translations.common.verify },
    { href: '/products', label: translations.products.title },
    { href: `/${locale}/blog`, label: 'Blog' },
    { href: '/contact', label: translations.common.contact },
  ];

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-[#00F2FE] to-[#FFD700] p-[2px]">
              <div className="w-full h-full bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#FFD700] font-bold text-2xl">H</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wide text-[#E5E5E5] group-hover:text-[#00F2FE] transition-colors">
                HoloVerify
              </span>
              <span className="text-xs text-gray-500 tracking-wider uppercase">Global Security</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-[#00F2FE] bg-white/5'
                    : 'text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{locale.toUpperCase()}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-2xl py-2 backdrop-blur-xl">
                  <button
                    onClick={() => {
                      switchLocale('zh');
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      locale === 'zh'
                        ? 'text-[#00F2FE] bg-white/5'
                        : 'text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5'
                    }`}
                  >
                    中文 (ZH)
                  </button>
                  <button
                    onClick={() => {
                      switchLocale('en');
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      locale === 'en'
                        ? 'text-[#00F2FE] bg-white/5'
                        : 'text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5'
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => {
                      switchLocale('es');
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      locale === 'es'
                        ? 'text-[#00F2FE] bg-white/5'
                        : 'text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5'
                    }`}
                  >
                    Español (ES)
                  </button>
                  <button
                    onClick={() => {
                      switchLocale('ru');
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      locale === 'ru'
                        ? 'text-[#00F2FE] bg-white/5'
                        : 'text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5'
                    }`}
                  >
                    Русский (RU)
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/sample-kit"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300"
            >
              {translations.common.requestSample}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 mt-4 pt-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#00F2FE] bg-white/5'
                      : 'text-gray-400 hover:text-[#E5E5E5] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/sample-kit"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-semibold text-sm"
              >
                {translations.common.requestSample}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, locales } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查路径是否已经包含语言前缀
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果缺少语言前缀,重定向到默认语言
  if (pathnameIsMissingLocale) {
    // 优先从 cookie 读取用户选择的语言
    const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
    const locale = locales.includes(localeCookie as any) ? localeCookie : defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 排除 API 路由、静态文件、图片代理、favicon、sitemap、管理后台、robots
    '/((?!api|images|_next/static|_next/image|favicon.ico|placeholder-product\\.svg|sitemap|robots|admin).*)',
  ],
};

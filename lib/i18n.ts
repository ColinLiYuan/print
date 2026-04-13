import zh from '../locales/zh';
import en from '../locales/en';
import es from '../locales/es';
import ru from '../locales/ru';

export type Locale = 'zh' | 'en' | 'es' | 'ru';

export const locales: Locale[] = ['zh', 'en', 'es', 'ru'];

export const defaultLocale: Locale = 'en';

export const messages = {
  zh,
  en,
  es,
  ru,
};

// 简单的翻译函数(用于客户端组件)
export function getTranslation(locale: Locale) {
  return messages[locale];
}

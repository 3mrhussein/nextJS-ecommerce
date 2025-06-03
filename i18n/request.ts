import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { notFound } from 'next/navigation';

export type ILocale = 'ar' | 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as ILocale)) {
    // locale = routing.defaultLocale;
    notFound();
  }

  return { locale, messages: (await import(`../messages/${locale}.json`)).default };
});

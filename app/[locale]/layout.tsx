import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';

import { getMessages, setRequestLocale } from 'next-intl/server';
import React from 'react';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { ILocale } from '@/i18n/request';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: ILocale }>;
}) {
  const { locale } = await params;
  // // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as ILocale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

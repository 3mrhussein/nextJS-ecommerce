import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LocalPageParams } from './_types';

// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ar" }];
// }

export default async function Home({ params }: any) {
  // const messages = await getMessages({ locale });
  const { locale } = await params;
  /**
   * ? cannot use hooks inside async functions
   */
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return <h1>{t('amr')}</h1>;
}

import { notFound } from 'next/navigation'
import I18nProvider from '../../src/components/I18nProvider'
import { LocaleProvider } from '../../src/context/LocaleContext'
import { SUPPORTED_LOCALES } from '../../src/i18n/locales'
import ScrollTop from '../../src/components/ScrollTop'
import Nav from '../../src/components/Nav'
import Footer from '../../src/components/Footer'

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound()
  }

  return (
    <I18nProvider locale={locale}>
      <LocaleProvider locale={locale}>
        <ScrollTop />
        <Nav />
        {children}
        <Footer />
      </LocaleProvider>
    </I18nProvider>
  )
}

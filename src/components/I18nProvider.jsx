'use client'
import { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/translations.json'
import pt from '../locales/pt/translations.json'
import es from '../locales/es/translations.json'

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
}

function createI18nInstance(locale) {
  const instance = i18next.createInstance()
  instance.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false,
  })
  return instance
}

export default function I18nProvider({ locale, children }) {
  const [instance] = useState(() => createI18nInstance(locale))

  if (instance.language !== locale) {
    instance.changeLanguage(locale)
  }

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>
}

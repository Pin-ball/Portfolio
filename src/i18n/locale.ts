import { notFound } from 'next/navigation'
import type { Locale } from 'next-intl'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing } from './routing.ts'

export async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)
  return locale
}

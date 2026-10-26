import { Document } from '@src/components/Document.tsx'
import { PROFILE } from '@src/data/portfolio.ts'
import { resolveLocale } from '@src/i18n/locale.ts'
import { routing } from '@src/i18n/routing.ts'
import type { Metadata } from 'next'

const DESCRIPTION = 'Portfolio – Développeur Full-Stack'

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env['VERCEL_PROJECT_PRODUCTION_URL'] ?? 'localhost:3000'}`,
  ),
  title: PROFILE.name,
  creator: PROFILE.name,
  description: DESCRIPTION,
  keywords: [
    PROFILE.name,
    'développeur',
    'full-stack',
    'portfolio',
    'cv',
    'web',
    'SaaS',
    'React',
    'Next',
    'TypeScript',
    'Lyon',
  ],
  openGraph: {
    title: PROFILE.name,
    description: DESCRIPTION,
    siteName: PROFILE.name,
    locale: 'fr_FR',
    type: 'website',
  },
}

export const dynamicParams = false

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const locale = await resolveLocale(params)

  return <Document locale={locale}>{children}</Document>
}

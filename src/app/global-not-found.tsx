import { Document } from '@src/components/Document.tsx'
import { NotFound } from '@src/components/NotFound.tsx'
import { PROFILE } from '@src/data/portfolio.ts'
import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('notFound')
  return { title: `${t('title')} – ${PROFILE.name}` }
}

export default async function GlobalNotFound() {
  const locale = await getLocale()

  return (
    <Document locale={locale}>
      <NotFound />
    </Document>
  )
}

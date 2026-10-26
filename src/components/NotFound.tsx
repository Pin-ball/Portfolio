import { Shell } from '@src/components/Shell.tsx'
import { Link } from '@src/i18n/navigation.ts'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function NotFound() {
  const t = useTranslations('notFound')

  return (
    <Shell className="flex flex-col items-center justify-center gap-4 text-center">
      <p className="text-primary text-5xl font-semibold">404</p>
      <h1 className="text-lg font-semibold">{t('title')}</h1>
      <p className="text-muted-foreground text-sm">{t('description')}</p>
      <Link
        href="/"
        className="hover:bg-accent focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px]"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {t('back')}
      </Link>
    </Shell>
  )
}

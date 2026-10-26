import { PROFILE } from '@src/data/portfolio.ts'
import { IconLink } from '@src/ui/IconButton.tsx'
import { LinkedinIcon } from '@src/ui/LinkedinIcon.tsx'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-background flex items-center justify-between gap-4 border-t px-4 py-1">
      <p className="text-muted-foreground max-xs:invisible line-clamp-1 text-xs">
        {t('description')}
      </p>

      <div className="flex items-center gap-2">
        <IconLink
          label="LinkedIn"
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon aria-hidden="true" className="size-4" />
        </IconLink>
        <IconLink label="Email" href={`mailto:${PROFILE.email}`}>
          <Mail aria-hidden="true" className="size-4" />
        </IconLink>
      </div>
    </footer>
  )
}

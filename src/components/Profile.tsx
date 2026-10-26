import { PROFILE } from '@src/data/portfolio.ts'
import { Badge } from '@src/ui/Badge.tsx'
import { Card } from '@src/ui/Card.tsx'
import { MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Profile() {
  const t = useTranslations('profile')
  const years = new Date().getFullYear() - PROFILE.careerStartYear

  return (
    <Card>
      <header className="xs:flex-row xs:justify-between flex flex-col items-start gap-1.5">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">{PROFILE.name}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-primary font-semibold">{t('position')}</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <MapPin aria-hidden="true" className="size-3" />
              {PROFILE.location}
            </span>
          </div>
        </div>

        <Badge>{t('experience', { count: years })}</Badge>
      </header>

      <p className="text-muted-foreground line-clamp-10 text-sm">{t('description')}</p>
    </Card>
  )
}

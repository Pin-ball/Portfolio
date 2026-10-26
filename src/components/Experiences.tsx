import { CareerCard } from '@src/components/CareerCard.tsx'
import { EXPERIENCES } from '@src/data/portfolio.ts'
import { SectionTitle } from '@src/ui/SectionTitle.tsx'
import { Building } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Experiences() {
  const t = useTranslations('experience')

  return (
    <section>
      <SectionTitle icon={Building}>{t('title')}</SectionTitle>

      <div className="space-y-4">
        {EXPERIENCES.map(({ id, company, location, technologies }) => (
          <CareerCard
            key={id}
            title={t(`${id}.position`)}
            organization={company}
            location={location}
            period={t(`${id}.period`)}
            description={t(`${id}.description`)}
            achievementsTitle={t('keyAchievements')}
            achievements={t.raw(`${id}.achievements`) as string[]}
            tags={technologies}
          />
        ))}
      </div>
    </section>
  )
}

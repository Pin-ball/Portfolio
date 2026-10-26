import { CareerCard } from '@src/components/CareerCard.tsx'
import { EDUCATION } from '@src/data/portfolio.ts'
import { SectionTitle } from '@src/ui/SectionTitle.tsx'
import { Tag } from '@src/ui/Tag.tsx'
import { GraduationCap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Education() {
  const t = useTranslations('education')

  return (
    <section>
      <SectionTitle icon={GraduationCap}>{t('title')}</SectionTitle>

      <div className="space-y-4">
        {EDUCATION.map(({ id, institution, location, period, gpa }) => (
          <CareerCard
            key={id}
            title={t(`${id}.degree`)}
            organization={institution}
            location={location}
            period={period}
            badge={gpa && <Tag>{t('gpa', { gpa })}</Tag>}
            description={t(`${id}.description`)}
            achievementsTitle={t('keyAchievements')}
            achievements={t.raw(`${id}.achievements`) as string[]}
            tags={t.raw(`${id}.courses`) as string[]}
          />
        ))}
      </div>
    </section>
  )
}

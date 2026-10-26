import { SKILLS } from '@src/data/portfolio.ts'
import { BulletList } from '@src/ui/BulletList.tsx'
import { Card } from '@src/ui/Card.tsx'
import { SectionTitle } from '@src/ui/SectionTitle.tsx'
import { Code } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Skills() {
  const t = useTranslations('skills')

  return (
    <section>
      <SectionTitle icon={Code}>{t('title')}</SectionTitle>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map(({ id, icon: Icon, skills }) => (
          <Card key={id}>
            <h3 className="flex items-center gap-2 font-semibold">
              <Icon aria-hidden="true" className="text-primary size-5" />
              {t(`${id}.title`)}
            </h3>

            <BulletList items={skills} className="2xs:grid-cols-2 grid grid-cols-1" />
          </Card>
        ))}
      </div>
    </section>
  )
}

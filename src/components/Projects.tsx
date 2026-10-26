import { PROJECTS } from '@src/data/portfolio.ts'
import { Badge } from '@src/ui/Badge.tsx'
import { Card } from '@src/ui/Card.tsx'
import { SectionTitle } from '@src/ui/SectionTitle.tsx'
import { Circle, ExternalLink, LaptopMinimal } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Projects() {
  const t = useTranslations('projects')

  return (
    <section>
      <SectionTitle icon={LaptopMinimal}>{t('title')}</SectionTitle>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map(({ id, name, access, demo, languages }) => (
          <Card key={id}>
            <header className="flex items-start justify-between gap-1.5 font-semibold">
              <h3>
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-2 hover:underline"
                  >
                    {name}
                    <ExternalLink aria-hidden="true" className="text-muted-foreground size-3" />
                  </a>
                ) : (
                  <span className="text-primary">{name}</span>
                )}
              </h3>

              <Badge>{t(`access.${access}`)}</Badge>
            </header>

            <div className="flex h-full flex-col justify-between">
              <p className="text-muted-foreground mb-3 line-clamp-5 text-sm">
                {t(`${id}.description`)}
              </p>

              <ul className="text-muted-foreground flex items-center gap-3 text-xs">
                {languages.map((language) => (
                  <li key={language.name} className="flex items-center gap-1">
                    <Circle
                      aria-hidden="true"
                      fill="currentColor"
                      className="size-2"
                      style={{ color: language.color }}
                    />
                    {language.name}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

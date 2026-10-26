import { BulletList } from '@src/ui/BulletList.tsx'
import { Card } from '@src/ui/Card.tsx'
import { Tag } from '@src/ui/Tag.tsx'
import { Calendar, MapPin } from 'lucide-react'
import type { ReactNode } from 'react'

type CareerCardProps = {
  title: string
  organization: string
  location: string
  period: string
  badge?: ReactNode
  description: string
  achievementsTitle: string
  achievements: string[]
  tags: string[]
}

export function CareerCard({
  title,
  organization,
  location,
  period,
  badge,
  description,
  achievementsTitle,
  achievements,
  tags,
}: CareerCardProps) {
  return (
    <Card>
      <header className="flex flex-col items-start gap-1.5 sm:flex-row sm:justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <span className="text-primary font-semibold">{organization}</span>
            <span className="flex items-center gap-1">
              <MapPin aria-hidden="true" className="size-3" />
              {location}
            </span>
            {badge}
          </div>
        </div>

        <p className="text-muted-foreground flex items-center gap-1 text-sm font-medium">
          <Calendar aria-hidden="true" className="size-3" />
          {period}
        </p>
      </header>

      <div>
        <p className="text-muted-foreground mb-4 line-clamp-5 text-sm">{description}</p>

        <h4 className="mb-2 font-medium">{achievementsTitle}:</h4>
        <BulletList items={achievements} className="mb-4" />

        <div className="text-primary flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Card>
  )
}

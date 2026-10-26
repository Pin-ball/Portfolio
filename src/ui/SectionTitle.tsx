import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type SectionTitleProps = {
  icon: LucideIcon
  children: ReactNode
}

export function SectionTitle({ icon: Icon, children }: SectionTitleProps) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
      <Icon aria-hidden="true" className="size-5" />
      {children}
    </h2>
  )
}

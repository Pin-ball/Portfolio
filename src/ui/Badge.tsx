import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-accent text-muted-foreground rounded px-2 py-1 text-xs font-semibold">
      {children}
    </span>
  )
}

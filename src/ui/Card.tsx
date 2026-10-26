import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <article className="bg-card text-card-foreground hover:border-foreground/25 flex flex-col gap-4 rounded-xl border p-4 shadow-sm">
      {children}
    </article>
  )
}

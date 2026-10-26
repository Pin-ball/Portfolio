import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
}

export function Tag({ children }: TagProps) {
  return <span className="rounded border px-2 py-1 text-xs">{children}</span>
}

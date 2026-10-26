import { Footer } from '@src/components/Footer.tsx'
import { Header } from '@src/components/Header.tsx'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type ShellProps = {
  className: string
  children: ReactNode
}

export function Shell({ className, children }: ShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={clsx('mx-auto w-full max-w-6xl flex-1 px-4 py-8', className)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

'use client'

import { LanguageMenu } from '@src/components/LanguageMenu.tsx'
import { ThemeToggle } from '@src/components/ThemeToggle.tsx'
import { PROFILE } from '@src/data/portfolio.ts'
import clsx from 'clsx'
import { CodeXml } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const NAME_REVEAL_SCROLL_Y = 70

export function Header() {
  const t = useTranslations('profile')
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowName(window.scrollY > NAME_REVEAL_SCROLL_Y)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="bg-background sticky top-0 z-50 flex items-center gap-2 border-b px-4 py-2">
      <CodeXml aria-hidden="true" className="size-4 max-sm:hidden" />

      <p
        aria-hidden={!showName}
        className={clsx(
          'mr-auto flex flex-wrap text-sm transition-all duration-300 ease-in-out',
          showName ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <span className="font-semibold whitespace-nowrap">{PROFILE.name}</span>
        <span className="text-muted-foreground whitespace-nowrap">&nbsp;• {t('position')}</span>
      </p>

      <LanguageMenu />
      <ThemeToggle />
    </header>
  )
}

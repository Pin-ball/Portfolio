'use client'

import { IconButton } from '@src/ui/IconButton.tsx'
import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const t = useTranslations('header')
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <IconButton
      label={t('theme')}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
    </IconButton>
  )
}

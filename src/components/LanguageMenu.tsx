'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { usePathname, useRouter } from '@src/i18n/navigation.ts'
import { routing } from '@src/i18n/routing.ts'
import { IconButton } from '@src/ui/IconButton.tsx'
import { Globe } from 'lucide-react'
import type { Locale } from 'next-intl'
import { hasLocale, useLocale, useTranslations } from 'next-intl'

const LANGUAGES: Record<Locale, { name: string; flag: string }> = {
  fr: { name: 'Français', flag: '🇫🇷' },
  en: { name: 'English', flag: '🇺🇸' },
}

export function LanguageMenu() {
  const t = useTranslations('header')
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const switchTo = (next: string) => {
    if (hasLocale(routing.locales, next)) router.replace(pathname, { locale: next })
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton label={t('language')}>
          <Globe aria-hidden="true" className="size-4" />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={4}
          className="bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 z-50 min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) rounded-md border p-1 shadow-md"
        >
          <DropdownMenu.RadioGroup value={locale} onValueChange={switchTo} className="space-y-1">
            {routing.locales.map((code) => (
              <DropdownMenu.RadioItem
                key={code}
                value={code}
                className="focus:bg-accent focus:text-accent-foreground data-[state=checked]:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none"
              >
                <span className="mr-2">{LANGUAGES[code].flag}</span>
                {LANGUAGES[code].name}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

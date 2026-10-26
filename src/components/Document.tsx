import '@src/styles/index.css'
import { Geist } from 'next/font/google'
import type { Locale } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

type DocumentProps = {
  locale: Locale
  children: ReactNode
}

export function Document({ locale, children }: DocumentProps) {
  return (
    <html lang={locale} className={geistSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

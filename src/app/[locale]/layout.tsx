import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.VERCEL_URL ?? "localhost:3000"}`
  ),
  title: "Damien Herrero",
  creator: "Damien Herrero",
  description: "Portfolio – Développeur Full-Stack",
  keywords: [
    "Damien Herrero",
    "développeur",
    "full-stack",
    "portfolio",
    "cv",
    "web",
    "SaaS",
    "React",
    "Next",
    "TypeScript",
    "Lyon",
  ],
  openGraph: {
    title: "Damien Herrero",
    description: "Portfolio – Développeur Full-Stack",
    // url: "https://mywebsite.com",
    siteName: "Damien Herrero",
    // images: [
    //   {
    //     url: "/preview.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Aperçu portfolio",
    //   },
    // ],
    locale: "fr_FR",
    type: "website",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale ?? routing.defaultLocale)) notFound();

  return (
    <NextIntlClientProvider>
      <html lang={locale} className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased break-keep`}
        >
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

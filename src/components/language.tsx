"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locales } from "@/i18n/routing";
import clsx from "clsx";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

const languages = [
  { code: Locales.FR, name: "Français", flag: "🇫🇷" },
  { code: Locales.EN, name: "English", flag: "🇺🇸" },
];

export function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchTo = (locale: Locales) => {
    router.replace(pathname, { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchTo(lang.code)}
            className={clsx({ "bg-accent": currentLocale === lang.code })}
          >
            <span className="mr-2">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

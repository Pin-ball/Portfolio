"use client";

import { profile } from "@/utils/translations";
import clsx from "clsx";
import { Code2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LanguageButton } from "./language";
import { ThemeButton } from "./theme";

export function Header() {
  const t = useTranslations();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 70;
      setShowName(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center gap-2 px-4 py-2 border-b bg-background">
      <Code2 className="w-4 h-4 max-sm:hidden" />

      <div
        className={clsx(
          "transition-all duration-300 ease-in-out transform flex flex-wrap text-sm mr-auto",
          showName
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <span className="font-semibold whitespace-nowrap">{profile.name}</span>
        <span className="text-muted-foreground whitespace-nowrap">
          &nbsp;• {t(profile.positionKey)}
        </span>
      </div>

      <LanguageButton />
      <ThemeButton />
    </header>
  );
}

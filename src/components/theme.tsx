"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

import { useEffect, useState } from "react";

export function ThemeButton() {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === Theme.LIGHT || savedTheme === Theme.DARK) {
      setTheme(savedTheme);
      updateHtmlClass(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? Theme.DARK : Theme.LIGHT);
      updateHtmlClass(prefersDark ? Theme.DARK : Theme.LIGHT);
    }
  }, []);

  const updateHtmlClass = (theme: Theme) => {
    const html = window.document.documentElement;

    if (theme === Theme.DARK) html.classList.add(Theme.DARK);
    else html.classList.remove(Theme.DARK);
  };

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);
    updateHtmlClass(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <Sun
        className={clsx(
          "absolute top-1/2 left-1/2 w-4 h-4 transition-all duration-300 -translate-x-1/2 -translate-y-1/2",
          { "rotate-180 opacity-1": theme === Theme.LIGHT }
        )}
      />

      <Moon
        className={clsx(
          "absolute top-1/2 left-1/2 w-4 h-4 transition-all duration-300 -translate-x-1/2 -translate-y-1/2",
          { "-rotate-180 opacity-1": theme === Theme.DARK }
        )}
      />
    </Button>
  );
}

import { defineRouting } from "next-intl/routing";

export enum Locales {
  FR = "fr",
  EN = "en",
}

export const routing = defineRouting({
  locales: [Locales.FR, Locales.EN],
  defaultLocale: Locales.FR,
  localePrefix: "as-needed",
});

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  localePath: "./public/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  fallbackLng: {
    default: ["es"],
    en: ["en"],
    es: ["es"],
  },
  debug: false,
  saveMissing: false,
  strictMode: true,
  serializeConfig: false,
  react: {
    useSuspense: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  ns: ["common"],
  defaultNS: "common",
};

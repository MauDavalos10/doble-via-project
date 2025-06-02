/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    localeDetection: true,
  },
};

module.exports = nextConfig;

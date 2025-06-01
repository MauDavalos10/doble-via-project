/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/locales/:path*",
        destination: "/public/locales/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;

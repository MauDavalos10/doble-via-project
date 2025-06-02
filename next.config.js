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
  async headers() {
    return [
      {
        source: "/locales/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

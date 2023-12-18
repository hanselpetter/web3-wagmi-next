/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.airstack.xyz",
        pathname: "**/*.png",
      },
      {
        protocol: "https",
        hostname: "megavolt.mypinata.cloud",
        pathname: "**/*.png",
      },
    ],
  },
};

module.exports = nextConfig;

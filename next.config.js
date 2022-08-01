/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
  images: {
    domains: ['media.graphcms.com','media.graphassets.com'],
  },
};

module.exports = nextConfig;

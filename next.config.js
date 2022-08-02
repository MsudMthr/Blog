/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
};

module.exports = nextConfig;

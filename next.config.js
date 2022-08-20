/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgcdn.taaghche.com", "newcdn.fidibo.com", "img.taaghche.com"],
  },
};

module.exports = nextConfig;

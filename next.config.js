/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgcdn.taaghche.com", "newcdn.fidibo.com", "img.taaghche.com"],
  },
  env: {
    MONGO_URI:"mongodb+srv://book-store-admin:book-store-admin:@cluster0.nrclfh0.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;

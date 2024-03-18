/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fuds.pages.dev'
      }
    ]
  }
};

module.exports = nextConfig;

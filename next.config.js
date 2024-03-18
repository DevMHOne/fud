/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-bc82d38d1f284c949d384b73d66520a7.r2.dev'
      }
    ]
  }
};

module.exports = nextConfig;

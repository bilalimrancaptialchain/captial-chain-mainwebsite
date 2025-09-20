import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Enable source maps in development and production for better debugging
  productionBrowserSourceMaps: true,
  // Note: swcMinify is now enabled by default in Next.js 13+, no need to specify
  // Note: Custom headers don't work with static export, they need to be configured at the server/CDN level
  images: {
    unoptimized: true,
    domains: ['checkout.capitalchain.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'checkout.capitalchain.co',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

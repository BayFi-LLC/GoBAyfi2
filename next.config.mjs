/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/local' },
    ],
  },
  async redirects() {
    return [
      // Redirect non-www to www (works for both HTTP and HTTPS)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'gobayfi.com' }],
        destination: 'https://www.gobayfi.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

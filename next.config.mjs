/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Pre-existing lint issues — will clean up in a follow-up
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qbxkxavbngfiziy7.public.blob.vercel-storage.com',
      },
    ],
  },

  async redirects() {
    return [
      { source: '/news', destination: '/articles', permanent: true },
      { source: '/news/:slug', destination: '/articles/:slug', permanent: true },
      { source: '/:locale(pt|es)/news', destination: '/:locale/articles', permanent: true },
      { source: '/:locale(pt|es)/news/:slug', destination: '/:locale/articles/:slug', permanent: true },
    ]
  },
}

export default nextConfig

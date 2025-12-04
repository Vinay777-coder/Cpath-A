/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure all pages are server-side rendered during build
  trailingSlash: false,
  generateEtags: false,
  // Disable static optimization for pages with Clerk
  async rewrites() {
    return []
  },
}

module.exports = nextConfig
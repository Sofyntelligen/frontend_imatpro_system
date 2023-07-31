/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.sofyntelligen.com',
      },
    ],
  },
}

export default nextConfig
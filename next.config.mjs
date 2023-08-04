/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: "/mathematical",
    async redirects() {
        return [
            {
                source: '/',
                destination: '/mathematical',
                basePath: false,
                permanent: false
            }
        ]
    },
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
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'economictimes.indiatimes.com',
            port: '',
            pathname: '',
          },
        ],
      },
}

module.exports = nextConfig

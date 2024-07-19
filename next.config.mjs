/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
    env: {
        imageUrl: 'http://178.128.206.171/storage/'
        // imageUrl: 'http://127.0.0.1:8000/storage/'
    },
    images: {
        domains: ['178.128.206.171'],
        // domains: ['127.0.0.1'],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ka'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "upgrade-insecure-requests",
                    },
                ],
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://178.128.206.171/api/v1/:path*',
            },
        ];
    },
};

export default nextConfig;

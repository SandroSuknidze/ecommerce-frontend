import path from 'path'

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
        // imageUrl: 'https://www.umino.me/storage/'
        // imageUrl: 'http://178.128.206.171/storage/'
        // imageUrl: 'http://127.0.0.1:8000/storage/'
        // imageUrl: 'http://127.0.0.1:8080/'
        // imageUrl: 'http://64.226.117.75:8080/'
        imageUrl: 'https://umino.me/'
    },
    images: {
        // domains: ['www.umino.me'],
        // domains: ['178.128.206.171'],
        // domains: ['127.0.0.1'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '64.226.117.75',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'umino.me',
                pathname: '**',
            }
        ],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ka'],
    },
};

export default nextConfig;

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
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        imageUrl: 'http://127.0.0.1:8000/storage/'
    },
    images: {
        domains: ['127.0.0.1'],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ka'],
    }
};

export default nextConfig;

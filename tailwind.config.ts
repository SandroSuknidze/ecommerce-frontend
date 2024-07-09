/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'shop-banner': "url('/assets/shop-banner.webp')",
                'first-image': "url('/assets/homeSlider/slide-1.webp')",
                'second-image': "url('/assets/homeSlider/slide-2.webp')",
                'third-image': "url('/assets/homeSlider/slide-3.webp')",
                'first-grid-image': "url('/assets/homeFeatured/main-cate-1.webp')",
                'collection2': "url('/assets/collections/collection2.webp')",
                'sale-banner': "url('/assets/salePage/sale-banner.webp')",
            },
            colors: {
                '11black': '#111111',
                '55black': '#555555',
                '87black': '#878787',
                'd7red': '#D73F0F',
            },
            content: {
                'correct-icon': "url('../public/assets/correct.svg')",
            },
            cursor: {
                close: "url('../public/assets/cursor-close.png'), pointer",
            },
            screens: {
                'xs': {'max': '480px'},
                'sm': {'max': '576px'},
                'md': {'max': '768px'},
                'lg': {'max': '992px'},
                'xl': {'max': '1200px'},
            },
        },
        fontFamily: {
            Jost: ['Jost', 'sans-serif'],
        },
    },
    plugins: [],
}

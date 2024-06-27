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
                'shop-banner': "url('../public/assets/shop-banner.webp')",
                'first-image': "url('../public/assets/homeSlider/slide-1.webp')",
                'second-image': "url('../public/assets/homeSlider/slide-2.webp')",
                'third-image': "url('../public/assets/homeSlider/slide-3.webp')",
            },
            colors: {
                '11black': '#111111',
                '55black': '#555555',
                '87black': '#878787',
            },
            content: {
                'correct-icon': "url('../public/assets/correct.svg')",
            },
            cursor: {
                close: "url('../public/assets/cursor-close.png'), pointer",
            },
        },
        fontFamily: {
            Jost: ['Jost', 'sans-serif'],
        },
    },
    plugins: [],
}

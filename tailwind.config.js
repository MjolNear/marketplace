module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkTheme: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xxs': '310px',

            'xs': '500px',
            // => @media (min-width: 500px) { ... }

            // 'sm630': '630px',

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md670': '670px',


            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {

            gridTemplateColumns: {
                '1nft-300': 'repeat(1, 300px)',
                '2nft-280': 'repeat(2, 280px)',
                '2nft-300': 'repeat(2, 300px)',
                '3nft-300': 'repeat(3, 300px)',
                '4nft-350': 'repeat(4, 350px)',
            },

            colors: {
                light_white: '#f4f7fc',
                light_blue: '#4391ff',
                light_green: '#2dfd87',
                nft_collection_purple: '#25155299',
                teal: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a'
                },
                cyan: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63'
                },
                fuchsia: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f5d0fe',
                    300: '#f0abfc',
                    400: '#e879f9',
                    500: '#d946ef',
                    600: '#c026d3',
                    700: '#a21caf',
                    800: '#86198f',
                    900: '#701a75'
                },
                violet: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95'
                }
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover', 'active'],
            ringColor: ['hover', 'active']
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
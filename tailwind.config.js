// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            arquitecta: ['"Arquitecta"', 'latinotype'],
            gotham: ['"Gotham"', 'sans-serif'],
            adelia: ['"ADELIA"', 'cursive'],
            fuentegrande: ['FuenteGrande', 'sans-serif'],
        },
        animation: {
            'logo-pulse': 'logoPulse 1.6s ease-in-out infinite',
        },
        keyframes: {
            logoPulse: {
                '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
                '50%': { transform: 'scale(1.15)', opacity: '1' },
            },
        },
        },
    },
    plugins: [],
}
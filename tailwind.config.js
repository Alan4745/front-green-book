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
        },
    },
    plugins: [],
}
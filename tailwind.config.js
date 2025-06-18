// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            mifuente: ['"Gotham"', 'sans-serif'], // puedes usar el nombre que prefieras
        },
        },
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandRed: "#EA4837",
                brandBlue: "#405CC5",
                darkBg: "#0D0D0D",
                darkSecondary: "#1A1A1A",
                darkCard: "#2D2D2D",
            }
        }
    },
    plugins: [],
};

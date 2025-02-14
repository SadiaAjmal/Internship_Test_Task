/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'btn-bg-clr': '#3175DA',
            },
        },
    },
    plugins: [],
};
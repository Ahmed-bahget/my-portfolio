/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                darkTheme: "#11001f",
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
            },
        },
    },
    plugins: [],
};

export default config;
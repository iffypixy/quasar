/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "rgba(27 61 106 / <alpha-value>)",
                    contrast: "rgba(255 255 255 / <alpha-value>)",
                },
            },
            backgroundImage: {
                lightblue: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                phoenixorange:
                    "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
                solidstone:
                    "linear-gradient(to right, #243949 0%, #517fa4 100%)",
            },
            fontFamily: {
                bricolagegrotesque: "BricolageGrotesque, sans-serif",
            },
            boxShadow: {
                "even-sm": "0 0 5px 1px",
            },
        },
    },
    plugins: [],
};

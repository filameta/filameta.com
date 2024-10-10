import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";
import Animate from "tailwindcss-animate";
import Transforms from "@xpd/tailwind-3dtransforms";

export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: "Inter Variable, Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
            },
            colors: {
                brand: "#da692e",
                "brand-light": "#da692e",
                "brand-lighter": "#dc7138",
                "brand-lightest": "#cc5e24",
                "brand-dark": "#b85520",
                "brand-darker": "#ad501f",
                "brand-darkest": "#8f4219",
            }
        },
    },
    plugins: [
        Typography,
        Animate,
        Transforms,
    ],
} satisfies Config

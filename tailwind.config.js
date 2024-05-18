/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {},
    colors: {
      "brand-orange": "#dc682a",
    }
  },
  plugins: [],
  darkMode: ["class", "[data-theme=\"dark\"]"],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
}

// https://dev.to/shannonajclarke/using-tailwindcss-v3-in-docusaurus-in-5-steps-5c26#comment-27knb

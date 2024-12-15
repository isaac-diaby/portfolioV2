/** @type {import('tailwindcss').Config} */

// lightbg = # prime
// darkbg = # accent
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
        sans: ["raleway, sans-serif"],
      },
      colors: {
        theme: {
          light: "#f6f6ff",
          dark: "#02050E",
        },
        primary: {
          DEFAULT: "#050F2E",
          50: "#f6f6ff",
          100: "#143CB8",
          200: "#11339C",
          300: "#0E2A81",
          400: "#0B2165",
          500: "#08184A",
          600: "#050F2E",
          700: "#040C25",
          800: "#03091C",
          900: "#020612",
          950: "#02050E",
        },
        secondary: {
          DEFAULT: "#BE9E6B",
          50: "#E8E1CB",
          100: "#E3DBC0",
          200: "#DACDAB",
          300: "#D1BE96",
          400: "#C7AE80",
          500: "#BE9E6B",
          600: "#B58D56",
          700: "#A47A48",
          800: "#8F673F",
          900: "#795635",
          950: "#0f0d09",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')], //Can Do basic transitions
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ftvprimary: {
          DEFAULT: "#db9523",
          100: "#fef7e7",
          200: "#fdefc8",
          300: "#f5d88f",
          400: "#ecc156",
          500: "#db9523",
        },
        ftvsecondary: {
          DEFAULT: "#6360F1",
          400: "#8583f4",
        },
        ftvblack: {
          DEFAULT: "#030303",
          300: "#3B4752",
          400: "#6D7B88",
        },
        ftvgrey: {
          DEFAULT: "#909CA7",
          100: "#F9FAFB",
          500: "#909CA7",
          700: "#6D7B88",
        },
        ftvblue: "#1E3A8A",
        ftvoffwhite: "#FAFAFA",
      },
      fontFamily: {
        plusjakartasans: ['"Plus Jakarta Sans"', "sans-serif"],
        spacegrotesk: ['"Space Grotesk"', "sans-serif"],
      },
      screens: {
        mobilesm: "375px",
        mobilemd: "425px",
        mobilelg: "576px",
        mobilelandscape: "768px",
        tabletmd: "900px",
        tabletlg: "1024px",
      },
    },
  },
  plugins: [],
};

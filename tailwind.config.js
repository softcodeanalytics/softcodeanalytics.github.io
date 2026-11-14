/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      base: "320px",
      "1sm": "370px",
      sm: "420px",
      md: "768px",
      lg: "1024px",
      xl: "1340px",
      "2xl": "1560px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        dark: "#00473f",
        DEFAULT: "#044941",
        light: "#0e9484",
        lighter: "#2fe1cd",
      },
      gold: {
        dark: "#7d4b1c",
        DEFAULT: "#ac6828",
        light: "#a0754d",
        lighter: "#d4ae8b",
      },
      gray: {
        darkest: "#171717",
        dark: "#323232",
        nice: "#C7C7CC",
        DEFAULT: "#fff8e633",
        light: "#f7f7f7",
      },
      black: "#000000",
      white: {
        offWhite: "#fdfdfd",
        DEFAULT: "#ffffff",
      },
    },
    extend: {},
  },
  plugins: [],
};

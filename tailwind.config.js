/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {
    colors: {
      primary: "#175073",
      primaryLight: "#52BDFF",
      primaryDark: "#113C55",

      foreground: "#071A25",
      muted: "#6B7280",

      accent: "#E97934",
      accentLight: "#FF8439",
      accentDark: "#D85B1F",
    },

    fontFamily: {
      title: [`Roboto`, "sans-serif"],
      body: [`"Open sans"`, "sans-serif"],
    },

    animation: {
      scroll: "scroll 26s linear infinite",
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
}
export const plugins = []

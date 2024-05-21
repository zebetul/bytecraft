/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {
    colors: {
      primary: "#175073",
      primaryLight: "#CCECFF",
      textColor: "#071A25",
      accent: "#E97934",
      accentLight: "#FF8439",
    },

    fontFamily: {
      title: [`Roboto`, "sans-serif"],
      body: [`"Open sans"`, "sans-serif"],
    },
  },
}
export const plugins = []

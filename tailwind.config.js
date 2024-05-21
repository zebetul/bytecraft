/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {
    fontFamily: {
      title: [`Roboto`, "sans-serif"],
      body: [`"Open sans"`, "sans-serif"],
    },
  },
}
export const plugins = []

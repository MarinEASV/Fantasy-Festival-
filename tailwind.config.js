/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F6C567",
        dark_purple: "#181532",
        middle_purple: "#7B47B1",
        light_purple: "#DABFEC",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        title: ["CELTG", "serif"],
      },
    },
  },
}
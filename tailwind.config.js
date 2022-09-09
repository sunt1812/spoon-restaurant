// /** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        container: {
          center: true,
          padding:"15px"
        },
        fontFamily: {
          libre: ["Libre Franklin", "sans-serif"],
          ibm: ["IBM Plex Mono", "sans-serif"],
        },
        colors: {
          "primary-color":"#5ab963",
          "primary-color-hover":"#48944f",
          "gray-999":"#999",
          "gray-fa":"#fafafa",
          "gray-e6":"#e6e6e6",
          "black-0a":"#0a0e1a"
        },
        boxShadow: {
          '3xl': '0 5px 20px 0 rgb(0 0 0 / 5%)',
          '3xxl': '0 5px 20px 0 rgb(0 0 0 / 10%)',
        },
      },
    },
    plugins: [],
  }
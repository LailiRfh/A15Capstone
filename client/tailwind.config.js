/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        inter: ["Inner", "serif"],
      },
      extend: {
        colors: {
          current: "currentColor",
          blue: {
            pale: "#5B80BC",
            medium: "#3361AC",
  
            light: "#3A73D0",
            dark: "#1B3067",
            nav: "#315FB1",
          },
          orange: "#FFB703",
          "c-yellow": "#FDFEDB",
        },
  
        yellow: {
          dark: "#E8AF30",
        },
        cream: {
          pale: "#E7E6DD",
        },
        grey: {
          lighter: "#f9f9f9",
          light: "#ececec",
        },
      },
    },
  }
  
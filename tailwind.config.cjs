/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%":  {backgroundColor: "currentColor"},
          "50%":  {backgroundColor: "currentColor"},
          "51%":  {backgroundColor: "rgba(0,0,0,0)"},
          "100%":  {backgroundColor: "rgba(0,0,0,0)"},
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        blink: "blink .3s infinite alternate",
        slideIn: "slideIn 1s ease-in forwards",
      },
      fontFamily: {
        dot: ["DotGothic16"],
      },
    },
    transitionProperty: {
      "width": "width",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
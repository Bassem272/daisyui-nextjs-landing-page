// ./tailwind.config.js
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class', // Enable dark mode with utility classes
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), daisyui
    
  ], 
  // rtl: true, // Enable RTL support
  daisyui: {
    themes: ["light","luxury" ,"dark", "cupcake", "bumblebee",  "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",],
  },
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4640DE",
        "neutrals-80": "#515B6F",
      },
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oldenglish: ["Oldenglishtextmt", "sans-serif"],
        Inter: ["Inter-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

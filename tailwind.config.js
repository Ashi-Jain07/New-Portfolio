/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '1.5/3': '42%'
      },
      screens: {
        'xmd': '850px'
      }
    },
    plugins: [],
  },
};
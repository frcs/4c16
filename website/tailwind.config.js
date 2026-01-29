/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tcd: {
          blue: '#0569b9',
          'blue-dark': '#045494', // A slightly darker shade for hover states
        }
      }
    },
  },
  plugins: [],
}
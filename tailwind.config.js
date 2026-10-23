/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020B1B',
          900: '#07172D',
          850: '#0B1930',
          800: '#112240',
        },
        accent: {
          blue: '#2583FF',
          cyan: '#27D9F5',
        },
        content: {
          primary: '#F3F7FF',
          secondary: '#A9B8D0',
        },
      },
    },
  },
  plugins: [],
}

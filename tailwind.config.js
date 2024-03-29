import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amazon': '#2C7359',
        'msu-green': '#174031',
        'anti-flash-white': '#F2F2F2',
        'granite-gray': '#525252',
        'raisin-black': '#262626',
        'smoky-black': '#0D0D0D',
      },
      fontFamily: {
        'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}


/** @type {import('@tailwindcss/postcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'dark-panel': '#0b0b0c',
        'accent-red': '#ff2a2a',
      },
    },
  },
  plugins: [],
}

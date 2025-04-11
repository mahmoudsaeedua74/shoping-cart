/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    container: {
      center: true,
      padding:"1rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #f3f2fa, #eceaf6, #f3f2fa)',
      },
      backgroundColor: {
        lightBorder: '#F6F7F8',
      },
      colors: {
        main: '#33A0FF',
        second: '#FF6B6C',
        text: '#1D242D',
      },
    },
  },
  plugins: [],
}

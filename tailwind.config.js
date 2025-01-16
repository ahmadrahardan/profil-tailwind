/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        grand: '#65270c',
        piano: '#e49f72',
      },
      screens: {
        '2xl': '1320px', 
      },
    },
  },
  plugins: [],
}


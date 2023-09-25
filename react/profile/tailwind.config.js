/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FFF6EA',
        secondary: '#FDE4DB',
        menu: '#9F5C59',
      },
      textColor: {
        title: '#9F5C59',
        menu: '#FFF6EA',
      },
      fontSize: {
        title: '18px',
      },
      fontWeight: {
        title: '500',
      },
    },
    screens: {
      tablet: '680px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [],
};

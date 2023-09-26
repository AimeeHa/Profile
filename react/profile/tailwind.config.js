/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        lightbeige: '#fae5df',
        beige: '#f5cac2',
        orange: '#ed7966',
        blue: '#303179',
        darkblue: '#141850',
      },
      textColor: {
        lightbeige: '#fae5df',
        beige: '#f5cac2',
        orange: '#ed7966',
        blue: '#303179',
        darkblue: '#141850',
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

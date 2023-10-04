/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        lightbeige: '#fae5df',
        beige: '#f5a295',
        orange: '#ed7966',
        lightblue: '#3031799c',
        blue: '#303179',
        darkblue: '#141850',
      },
      textColor: {
        lightbeige: '#fae5df',
        beige: '#f5a295',
        orange: '#ed7966',
        lightblue: '#3031799c',
        blue: '#303179',
        darkblue: '#141850',
      },
      fontSize: {
        title: '18px',
      },
      fontWeight: {
        title: '500',
      },
      keyframes: {
        scrollTop: {
          '0%': { transform: 'translateY(15%)', opacity: '0' },
          '75%': { opacity: '1' },
          '100%': { transform: 'translateY(-15%)', opacity: '0.5' },
        },
        greetingSlide: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '50%': { transform: 'translateX(-5%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        greetingSlideSmall: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        heroPhotoLarge: {
          '0%': { transform: 'translateX(50%)', opacity: '0.2' },
          '50%': { transform: 'translateX(50%)', opacity: '0.6' },
          '75%': { transform: 'translateX(25%)', opacity: '0.85' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        heroPhotoSmall: {
          '0%': { transform: 'translateX(10%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
      },
      animation: {
        scrollTop: 'scrollTop 1s ease-in-out infinite',
        greetingSlide: 'greetingSlide 2s linear',
        greetingSlideSmall: 'greetingSlideSmall 1s linear',
        heroPhotoLarge: 'heroPhotoLarge 2s linear',
        heroPhotoSmall: 'heroPhotoSmall 1s linear',
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

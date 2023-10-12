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
          '0%': { transform: 'translateX(180px)', opacity: '0.2' },
          '50%': { transform: 'translateX(180px)', opacity: '0.6' },
          '75%': { transform: 'translateX(90px)', opacity: '0.85' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        heroPhotoSmall: {
          '0%': { transform: 'translateX(10%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
            background: 'linear-gradient(-45deg, #e6aca3, #faeeeb, #c7c7eb)',
            backgroundSize: '300% 300%',
            boxShadow: '-1px -1px 60px 0px rgba(199,199,235,0.5)',
          },
          '50%': {
            backgroundPosition: '100% 50%',
            boxShadow: '-1px -1px 60px 0px rgba(245,232,226,0.8)',
          },
          '100%': {
            backgroundPosition: '0% 50%',
            background: 'linear-gradient(-45deg,  #e6aca3, #faeeeb, #c7c7eb)',
            backgroundSize: '300% 300%',
            boxShadow: '-1px -1px 60px 0px rgba(199,199,235,0.5)',
          },
        },
        textReveal: {
          '0%': {
            transform: 'translate(0, -30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
        },
      },
      animation: {
        scrollTop: 'scrollTop 1s ease-in-out infinite',
        greetingSlide: 'greetingSlide 2s linear',
        greetingSlideSmall: 'greetingSlideSmall 1s linear',
        heroPhotoLarge: 'heroPhotoLarge 2s linear',
        heroPhotoSmall: 'heroPhotoSmall 1s linear',
        gradient: 'gradient 10s ease infinite',
        textReveal: 'textReveal 1s cubic-bezier(0.77,0,0.175,1)',
      },
    },
    screens: {
      tablet: '680px',
      laptop: '1274px',
      desktop: '1480px',
    },
  },
  plugins: [],
};

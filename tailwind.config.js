/** @type {import('tailwindcss').Config} */
import  colors from "./src/styles/tw-colors";
import defaultTheme from "tailwindcss/defaultTheme";
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        'fadeIn-bg': {
          "0%": { opacity: 0 },
          "100%": { opacity: .3 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-60vw)' },
          '100%': { transform: 'translateX(0vw)' }
        },
        slideRightIn: {
          '0%': { transform: 'translateX(60vw)', opacity: 0 },
          '50%': { transform: 'translateX(30vw)', opacity: 0.5 },
          '100%': { transform: 'translateX(0vw)', opacity: 1 }
        },
        slideRightOut: {
          '0%': { transform: 'translateX(0vw)', opacity: 1 },
          '50%': { transform: 'translateX(30vw)', opacity: 0.8 },
          '100%': { transform: 'translateX(60vw)', opacity: 0.5, display: 'hidden' }
        },
        width: {
          '0%': { width: '0%' },
          '25%': { width: '25%' },
          '50%': { width: '50%' },
          '100%': { width: '100%' }
        },
        wiggle: {
          '25%': { transform: 'translateX(4px)' },
          '50%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' }
        }
        ,
        rotate: {
          '0%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        collapse: {
          '0%': { height: '0px', opacity: 0.1 },
          '100%': { height: '40px', opacity: 0.3 }
        },
        expand: {
          '0%': { height: '0%' },
          '100%': { height: 'max-content' }
        },
        dropdown: {
          "0%": { opacity: 0, transform: 'scale(0.9)' },
          "100%": { opacity: 1, transform: 'scale(1)' },
        },
        slideup: {
          "0%": { opacity: 0.6, transform: 'translateY(0.6rem)' },
          "100%": { opacity: 1, transform: 'translateY(0rem)' },
        },
        slidedown: {
          "0%": { opacity: 0.6, transform: 'translateY(0rem)' },
          "100%": { opacity: 1, transform: 'translateY(0.6rem)' },
        },
        slideout: {
          "0%": { opacity: 1, right: '2rem' },
          "50%": { opacity: 0.4, right: '-20rem' },
          "100%": { opacity: 0.2, right: '-40rem', display: 'hidden' },
        },
        pop: {
          "0%": { opacity: 0.6, transform: 'scale(0.8)' },
          "100%": { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        fadeIn: "fadeIn 300ms linear",
        'pop-in': 'pop 300ms linear',
        'fadeIn-bg': "fadeIn-bg 1s linear",
        slideIn: "slideIn 0.5s ease",
        width: "width 0.3s linear",
        wiggle: "wiggle 300ms ease",
        rotate: "rotate 100ms ease",
        collapse: "collapse 100ms linear",
        expand: "expand 1s linear",
        dropdown: 'dropdown 100ms ease',
        slideup: 'slideup 400ms linear',
        slidedown: 'slidedown 400ms linear',
        slideout: 'slideout 1s linear',
        slideRightIn: 'slideRightIn 400ms linear',
        slideRightOut: 'slideRightOut 400ms linear'
      },
    
    },
  },
  plugins: [],
}


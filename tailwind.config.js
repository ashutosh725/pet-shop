/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './comps/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Josefin Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1110px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#062d3e',
          hover: '#021f2C',
        },
        cream: '#ebe3cc',
        teal: '#189cab',
        orange: {
          DEFAULT: '#ed5c01',
          hover: '#e45a03',
        },
        yellow: '#fbbd08',
      },
      backgroundImage: {
        hero: "url('/hero/hero-bg.png')",
        pets: "url('/pets/pets-bg.png')",
        services: "url('/services/bg.png')",
        adoption: "url('/adoption/bg.png')",
        newsletterYellow: "url('/newsletter/bg-yellow.svg')",
        newsletterOrange: "url('/newsletter/bg-orange.svg')",
        footer: "url('/footer/bg.svg')",
      },
    },
  },
  plugins: [],
};
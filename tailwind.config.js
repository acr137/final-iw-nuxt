module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      md: '0.938rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
    },
    fill: (theme) => ({
      transparent: 'rgba(255,255,255,0)',
      white: theme('colors.white'),
      current: 'currentColor',
      gray: theme('colors.gray.500'),
      red: theme('colors.red.500'),
      orange: theme('colors.orange.500'),
      yellow: theme('colors.yellow.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
      navy: theme('colors.navy.500'),
    }),
    stroke: (theme) => ({
      transparent: 'rgba(255,255,255,0)',
      white: theme('colors.white'),
      current: 'currentColor',
      gray: theme('colors.gray.900'),
      red: theme('colors.red.900'),
      orange: theme('colors.orange.900'),
      yellow: theme('colors.yellow.900'),
      green: theme('colors.green.900'),
      blue: theme('colors.blue.900'),
      navy: theme('colors.navy.900'),

      'gray-light': theme('colors.gray.500'),
      'red-light': theme('colors.red.500'),
      'orange-light': theme('colors.orange.500'),
      'yellow-light': theme('colors.yellow.500'),
      'green-light': theme('colors.green.500'),
      'blue-light': theme('colors.blue.500'),
      'navy-light': theme('colors.navy.500'),
    }),
    extend: {
      height: {
        108: '27rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        186: '42rem',
        fit: 'fit-content',
      },
      colors: {
        yellowIw: '#fdd835',
        yellowIwHover: '#d8b727',
      },
    },
  },
  plugins: [],
}

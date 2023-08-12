const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('node:path')

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px'
      },
      colors: {
        black: '#262217',
        white: '#FFFDF8',
        gray: {
          100: '#EAE9E8',
          200: '#D4D3D1',
          300: '#BEBDBA',
          400: '#A8A7A2',
          500: '#93918B',
          600: '#7D7A74',
          700: '#68655D',
          800: '#514E45',
          900: '#3C392F'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}

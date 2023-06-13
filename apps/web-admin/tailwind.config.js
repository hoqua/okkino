const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('node:path')

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
}

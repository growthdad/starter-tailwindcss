// calling tailwindcss
const tailwindcss = require('tailwindcss')

// optimize from unused css
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html'],
  css: ['./src/**/*.css'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

// minified css
const cssnano = require('cssnano') ({
  preset: 'default'
})

const autoprefixer = require('autoprefixer')
const postcssimport = require('postcss-import')

module.exports = {
  plugins: [
    tailwindcss,
    postcssimport,
    // purgecss,
    // ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : [],
    autoprefixer
  ]
}

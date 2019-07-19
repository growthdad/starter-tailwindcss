const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})
const cssnano = require('cssnano') ({
  preset: 'default'
})
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss,
    ...process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : [],
    autoprefixer
  ]
}

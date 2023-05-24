const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

// ------------------------------
// Helpers
// ------------------------------
function getRgbChannels(hex) {
  const {red, green, blue} = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// Generate CSS variables
function getCssVariableDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key)
    if (typeof value !== 'string') {
      getCssVariableDeclarations(value, newPath, output)
    } else {
      output[`--${newPath.join('-')}`] = getRgbChannels(value)
    }
  })
  return output
}

// Generate color extension object
function getColorUtilitiesWithCssVariableReferences(input, path = []) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const newPath = path.concat(key)
      if (typeof value !== 'string') {
        return [key, getColorUtilitiesWithCssVariableReferences(value, newPath)]
      } else {
        return [key, `rgb(var(--${newPath.join('-')}) / <alpha-value>)`]
      }
    })
  )
}

// Check for valid color themes input
function checkForValidColorThemesInput(input) {
  const isValid =
    typeof input === 'object' &&
    Object.keys(input).some((key) => typeof input[key] === 'object')
  if (!isValid) {
    throw new Error(
      'The Multi-Theme Plugin expects a `colorThemes` option passed to it, which contains at least one theme object.'
    )
  }
}

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin.withOptions(
  function (options) {
    const {colorThemes} = options
    checkForValidColorThemesInput(colorThemes)
    return function ({addBase}) {
      addBase({
        ':root': getCssVariableDeclarations(Object.values(colorThemes)[0])
      })
      Object.entries(colorThemes).forEach(([key, value]) => {
        addBase({
          [`[data-theme="${key}"]`]: getCssVariableDeclarations(value)
        })
      })
    }
  },
  function (options) {
    const {colorThemes} = options
    checkForValidColorThemesInput(colorThemes)
    return {
      theme: {
        fontFamily: {
          sans: ['LexendExaHM', 'sans']
        },
        extend: {
          borderRadius: {
            '4xl': '2rem'
          },
          fontSize: {
            xs: ['0.75rem'],
            sm: ['0.875rem'],
            base: ['1rem'],
            lg: ['1.125rem'],
            xl: ['1.25rem'],
            '2xl': ['1.375rem'],
            '3xl': ['1.75rem']
          },
          lineHeight: {
            none: '1',
            tight: '1.125',
            normal: '1.375',
            loose: '1.5',
            long: '1.625',
            'extra-loose': '2.125'
          },
          colors: getColorUtilitiesWithCssVariableReferences(
            Object.values(colorThemes)[0]
          )
        }
      }
    }
  }
)

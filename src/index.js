const plugin = require("tailwindcss/plugin");

export default plugin(function ({ addBase, addComponents, addUtilities, theme }) {
  addBase({
    'h1': {
      fontSize: theme('fontSize.2xl'),
    },
    'h2': {
      fontSize: theme('fontSize.xl'),
    },
  })
  addComponents({
    '.card': {
      backgroundColor: theme('colors.white'),
      borderRadius: theme('borderRadius.lg'),
      padding: theme('spacing.6'),
      boxShadow: theme('boxShadow.xl'),
    },
    '.section': {
      padding: theme("padding.20")
    }
  })
  addUtilities({
    '.content-auto': {
      contentVisibility: 'auto',
    }
  })
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: '#FF7C3F',
        'secondary-dark': '#0C322C',
        'secondary-light': '#30BA78',
        'secondary-lighter': '#AFEACD',
        'suse-blue': '#2251F5',
        'suse-gray': '#f7f7f7',
      },
    },
    fontFamily: {
      sans: ['SUSE', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  options: {
    // not working?
    safelist: ['bg-purple-500', 'bg-yellow-500', `bg-gray-500`],
  },
}

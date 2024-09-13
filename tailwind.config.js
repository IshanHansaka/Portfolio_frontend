/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': 'url("./stars.png")',
        'planets': 'url("./planets.png")',
        'sun': 'url("./sun.png")',
        'mountains': 'url("./mountains.png")'
      },
      fontFamily: {
        popins: ['Popins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
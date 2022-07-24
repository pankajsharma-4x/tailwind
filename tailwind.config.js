/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", './node_modules/tw-elements/dist/js/index.min.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03677E',
        txtPrimary : '#03677E',
        txtPlaceholder : '#49454F',
        formText: '#0B3C49',
        brcolor: '#03677E',
        btnbg: '#03677E',
        btnOutline: '#03677E',
        bannerTxt: '#001A42',
        bannerBorder: '#40A9FF',
        txtStatistics: '#036773',
        bgButton: '#0B3C49'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
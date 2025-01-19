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
        formBorder: '#79747E',
        brcolor: '#03677E',
        btnbg: '#03677E',
        btnOutline: '#03677E',
        bannerTxt: '#001A42',
        bannerBorder: '#40A9FF',
        txtStatistics: '#036773',
        bgButton: '#0B3C49',
        txtAsideGrey: '#70787C',
        bgTrending: '#FFEECB',
        txtTrending: '#C87D0C'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
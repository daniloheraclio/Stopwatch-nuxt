module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or false or 'class'
  theme: {
    extend: {
      fontSize: {
        '12xl': '12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

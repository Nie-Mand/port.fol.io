module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        prisma: ['Prisma', 'sans-serif'],
        sans: ['Red Hat Display', 'sans-serif'],
        serif: ['Prata', 'serif'],
      },
      colors: {
        dark: {
          bit: '#1B1B1B',
          much: '#111111',
          fine: '#1C1C1C',
        },
        light: {
          just: '#DDDDDD',
          linear:
            'linear-gradient(90deg, #1B1B1B 0.48%, rgba(27, 27, 27, 0) 99.24%)',
        },
      },
    },
  },
  plugins: [],
}

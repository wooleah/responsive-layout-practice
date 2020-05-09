module.exports = {
  purge: [],
  theme: {
    screens: {
      md: '700px',
      lg: '1000px'
    },
    fontFamily: {
      antarctican: ['antarctican-headline', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
      // headline bold
      // font-family: antarctican-headline,sans-serif;
      // font-weight: 400;
      // font-style: normal;
      // headline black
      // font-family: antarctican-headline,sans-serif;
      // font-weight: 700;
      // font-style: normal;
    },
    // fontWeight: {
    //   bold: '400',
    //   black: '700'
    // },
    extend: {
      fontSize: {
        '1.5xl': '1.3125rem',
        '7xl': '5.625rem'
      },
      colors: {
        pureblack: '#2E323F',
        dark: '#3B4050',
        marble: '#eeeeee',
        gray: '#6F737F',
        white: '#FFFFFF',
        gold: '#A59678',
      },
      width: {
        '47%': '47%'
      }
    },
  },
  variants: {},
  plugins: [],
}

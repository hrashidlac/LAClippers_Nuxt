module.exports = {
  content: [],
  theme: {
    container: {
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '992px',
          'xl': '1170px',
      }
    },
    extend: {
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        agency: ['AgencyFB Regular', 'sans-serif'],
        agencybold: ['AgencyFB Bold', 'sans-serif'],
        agencywide: ['AgencyFB BlackWide', 'sans-serif'],

      },
      colors:{
        white: '#FFF',
        black: '#000',
        red: '#da1a32',
        blue: '#00438c',
        orange: '#fd5214',
      },
      fontSize: {
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '38px',
        '6xl': '44px',
        '7xl': '48px',
        '8xl': '58px',
        '9xl': '68px',
        '10xl': '78px'
      },
      lineHeight: {        
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '38px',
        '6xl': '44px',
        '7xl': '48px',
        '8xl': '58px',
        '9xl': '68px',
        '10xl': '78px'
      },
      height: {
        '300': '300px',        
        '500': '500px',      
      },
      // screens: {
      //   xs: '480px',
      //   sm: '768px',
      //   md: '992px',
      //   lg: '1170px',
      //   xl: '1500px'
      // },
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
          sm: '15px',
          lg: '15px',
          xl: '15px',
        },
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      base: ['16px', '28px'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'card':'10px',
      '5px':'5px',
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1170px",
      }
    },
    extend: {
      gap: {
        '50px': '3.125rem',
      },

      padding: {
        '30px': '30px',
        '45px':'45px',
        '22px':'22px',
        '41px':'41px',
        '50px':'50px',
      },

      fontSize: {
        '23px': ['1.4375rem', '31.42px'],
        '13px': ['0.813rem','16.93px'],
        '40px': ['2.5rem','54.64px'],
        '16px': ['1rem','21.86px'],
        '14px': ['0.875','19.12px'],
        '16-24px':['1rem','24px'],
        '45px':['45px','64.89px'],
        '23px':['23px','33.17px'],
        '20px':['20px','28.84px'],
        '18px':['18px','25.96px'],
        '12px':['12px','15.62px'],
        '22px':['22px','28.64px'],
        '54px':['54px','73px'],
        '17px':['17px','23.22px'],
        '19px':['19px','25.95px'],

    },
    colors: {
      main:'#F85A47',
      primary:'#333333',
      secondary:'#666666',
      tertiary:'#31353B',
      bg:'#FBFCFC',
      quaternary:'#FF9900',
    },  


      fontFamily:{
        manrope:[ "Manrope", "sans-serif"],
        inter:["inter","sans-serif"],
        dmsans:["DM Sans","sans-serif"],
      },
    },
  },
  plugins: [],
}

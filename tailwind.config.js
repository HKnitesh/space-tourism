/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'new_black': '#0b0d17',
        'new_cream': '#ffffff',
        'new_gray': '#d0d6f9',
        'bg_line': '#383B4B',
      },
      backgroundImage: {
        'home-desktop': "url('/home/background-home-desktop.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-mobile': "url('/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        'Barlow': ['Barlow Condensed', 'sans-serif'],
        'Bellefair': ['Bellefair', 'serif'],
      },
      fontSize: {
        '2.5xl': '1.8rem',
        '4.5xl': '40px',
        '5.5xl': '56px',
        '7.5xl': '80px',
        '10xl': '9.375rem',
      },
      letterSpacing: {
        'ss': '1.25px',
        'xm': '2px',
        '2xm': '2.362px',
        'sm': '2.7px',
        'md': '3.375px',
        'xl': '4.725px',
      },
      spacing:{
        
        '74': '274px',
      }
    },
  },
  plugins: [],
}

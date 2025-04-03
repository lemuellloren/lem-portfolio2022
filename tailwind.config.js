module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d',
        lemon: '#baff00',
        gray94: '#f0f0f0'
      },
      keyframes: {
        flipInX: {
          '0%': {
            opacity: '0',
            transform: 'rotateX(-90deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'rotateX(0deg)'
          }
        }
      },
      animation: {
        flipInX: 'flipInX 1s cubic-bezier(0.33, 1, 0.68, 1) forwards'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

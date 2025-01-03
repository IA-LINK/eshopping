module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          colors: {
              brand: '#1E40AF', // Custom blue color
              accent: '#F59E0B', // Custom yellow color
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'], // Custom font
          },
          spacing: {
              '72': '18rem', // Custom spacing
              '84': '21rem',
              '96': '24rem',
          },
      },
  },
  plugins: [],
};

module.exports = {
  theme: {
      extend: {
          animation: {
              fadeIn: 'fadeIn 2s ease-in-out',
          },
          keyframes: {
              fadeIn: {
                  '0%': { opacity: 0 },
                  '100%': { opacity: 1 },
              },
          },
      },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#04030F',
        'midnight-100': '#1B1534',
        'midnight-200': '#282153',
        cyber: '#71FACA',
        accent: '#FF7BAC',
      },
      backgroundImage: {
        'gradient-orbit':
          'radial-gradient(circle at 20% 20%, rgba(113,250,202,0.3), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,123,172,0.3), transparent 45%), radial-gradient(circle at 50% 80%, rgba(124,116,255,0.25), transparent 45%)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(113, 250, 202, 0.25)',
      },
    },
  },
  plugins: [],
};

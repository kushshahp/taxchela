/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Oswald"', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#050314',
        'midnight-100': '#120a2c',
        'midnight-200': '#1c1040',
        magenta: '#C913CF',
        violet: '#7A22DD',
        indigo: '#2433EE',
        blush: '#F3E6FF',
      },
      backgroundImage: {
        'gradient-orbit':
          'radial-gradient(circle at 10% 20%, rgba(201,19,207,0.35), transparent 55%), radial-gradient(circle at 75% 25%, rgba(122,34,221,0.28), transparent 50%), radial-gradient(circle at 50% 80%, rgba(36,51,238,0.32), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(201,19,207,0.25)',
      },
    },
  },
  plugins: [],
};

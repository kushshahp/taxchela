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
          midnight: '#050112',
          'midnight-100': '#140638',
          'midnight-200': '#1f0d52',
          'brand-magenta': '#c913cf',
          'brand-purple': '#7a22dd',
          'brand-indigo': '#2433ee',
          'brand-iris': '#d7cbff',
        },
        backgroundImage: {
          'gradient-orbit':
            'radial-gradient(circle at 20% 20%, rgba(201,19,207,0.3), transparent 45%), radial-gradient(circle at 80% 35%, rgba(122,34,221,0.35), transparent 50%), radial-gradient(circle at 50% 80%, rgba(36,51,238,0.3), transparent 55%)',
        },
        boxShadow: {
          glow: '0 0 60px rgba(201, 19, 207, 0.35)',
        },
      },
  },
  plugins: [],
};

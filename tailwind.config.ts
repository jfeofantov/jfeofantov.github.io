import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f172a',
          accent: '#f97316'
        }
      },
      boxShadow: {
        subtle: '0 10px 25px -15px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;

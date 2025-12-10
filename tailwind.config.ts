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
          DEFAULT: '#0b0d11',
          ink: '#0b0d11',
          accent: '#EA6020',
          stone: '#f6f4f0',
          warm: '#b8b1a7'
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

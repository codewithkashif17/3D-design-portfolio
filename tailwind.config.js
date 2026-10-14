/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0b0d12',
          soft: '#12151d',
          raised: '#191d28',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f7ebc7',
          200: '#eed48c',
          300: '#e4bd5c',
          400: '#d4af37', // primary gold
          500: '#b8912a',
          600: '#8f6f1f',
          glow: '#f2cf6b',
        },
        bone: '#ece6d8',
        slate: {
          muted: '#8a8f9c',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        gold: '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 0 60px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f2cf6b 0%, #d4af37 45%, #8f6f1f 100%)',
        'radial-fade': 'radial-gradient(circle at 50% 20%, rgba(212,175,55,0.08), transparent 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

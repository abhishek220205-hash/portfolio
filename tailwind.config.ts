import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F4EF',
        ink: '#14171F',
        'ink-soft': '#2B2E38',
        signal: '#D98E2B',
        'signal-soft': '#F0C685',
        teal: '#1F4B4A',
        line: '#C9C4B7',
        muted: '#6B6A63',
        'muted-dark': '#9A978C',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        traceDraw: {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseLine: 'pulseLine 2.4s ease-in-out infinite',
        traceDraw: 'traceDraw 1.6s ease-out forwards',
        riseIn: 'riseIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;

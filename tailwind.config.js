/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF7F0',
        surface: '#F1EBDD',
        surface2: '#E7DEC8',
        border: '#DCD0AE',
        ink: '#16141F',
        muted: '#6B6456',
        keyword: '#7C3AED',
        keyword2: '#5B21B6',
        string: '#0F9D63',
        func: '#E08A1E',
        warn: '#E1483B',
        info: '#0EA5C4',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

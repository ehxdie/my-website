/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Every colour is a CSS variable (see index.css).
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
        hot: 'rgb(var(--hot) / <alpha-value>)',
        volt: 'rgb(var(--volt) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { page: '1180px' },
      keyframes: {
        rise: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        blink: { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        flicker: { '0%, 19%, 21%, 23%, 54%, 56%, 100%': { opacity: '1' }, '20%, 22%, 55%': { opacity: '0.35' } },
        scan: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(100vh)' } },
        grid: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '0 64px' } },
      },
      animation: {
        rise: 'rise .7s cubic-bezier(.2,.7,.2,1) both',
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1.1s steps(1) infinite',
        flicker: 'flicker 4s linear infinite',
        scan: 'scan 7s linear infinite',
        grid: 'grid 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};

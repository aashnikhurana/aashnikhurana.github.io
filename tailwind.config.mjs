/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0E0E10',
        surface: '#16161A',
        foreground: '#EDEAE3',
        'foreground-muted': '#8A877F',
        accent: '#9B3A4A',
        'accent-hover': '#B34458',
        border: '#252528',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

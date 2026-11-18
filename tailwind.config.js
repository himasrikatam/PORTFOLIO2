/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F6F0E8',
          alt: '#EFE6DA',
          card: '#FBF8F3',
          border: 'rgba(46, 40, 38, 0.12)',
        },
        blush: {
          light: '#FAEEEC',
          soft: '#F5DCDA',
          DEFAULT: '#E8B7B7',
          deep: '#D19292',
          dark: '#B06B6B',
        },
        charcoal: {
          DEFAULT: '#2E2826',
          muted: '#6B605B',
          light: '#91847E',
          soft: '#A89E99',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(46, 40, 38, 0.05), 0 2px 6px -1px rgba(46, 40, 38, 0.03)',
        'soft-lg': '0 12px 32px -4px rgba(46, 40, 38, 0.08), 0 4px 12px -2px rgba(46, 40, 38, 0.04)',
        'blush': '0 12px 30px -4px rgba(232, 183, 183, 0.35)',
        'blush-sm': '0 4px 14px -2px rgba(232, 183, 183, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        'content': '76rem', // 1216px container
      }
    },
  },
  plugins: [],
}


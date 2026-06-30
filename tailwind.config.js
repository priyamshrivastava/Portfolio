/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',   // Deep obsidian
        surface: '#121212',      // Slightly lighter for cards
        border: '#27272A',       // Subtle border
        primary: '#E33636',      // Spidey Red
        secondary: '#1A4F8B',    // Spidey Blue
        accent: '#F59E0B',       // Web glow / Warning
        textPrimary: '#FAFAFA',
        textMuted: '#A1A1AA',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Bebas Neue"', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'spider-gradient': 'linear-gradient(135deg, #E33636 0%, #1A4F8B 100%)',
        'web-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-54.627 54.628-.83-.83L54.627 0zM0 54.627l.83-.83 54.628 54.627-.83.83L0 54.627zM54.627 60L60 54.627l-.83-.83-54.628 54.628.83.83zM0 5.373L5.373 0l-.83-.83L0 4.543l.83.83z\' fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'web-swing': 'swing 3s ease-in-out infinite alternate',
        'web-drop': 'webDrop 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'spider-sense': 'spiderSense 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        swing: {
          '0%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
        webDrop: {
          '0%': { transform: 'translateY(-150%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        spiderSense: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(227, 54, 54, 0.1), 0 0 20px rgba(26, 79, 139, 0.1)' },
          '50%': { boxShadow: '0 0 25px rgba(227, 54, 54, 0.5), 0 0 40px rgba(26, 79, 139, 0.5)' }
        }
      }
    },
  },
  plugins: [],
}
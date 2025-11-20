/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'subheading': ['Montserrat', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        // Palette beige harmonieuse - Fonds
        cream: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F9F7F4',
          300: '#FFF9F5',
          400: '#F5F0EB',
          500: '#F4F1EC',
          600: '#EDE8E3',
        },
        // Palette beige - Textes
        beige: {
          // Titres principaux (h1, h2)
          primary: '#7D6B5A',
          // Texte courant (paragraphes, body)
          body: '#8F7A65',
          // Sous-titres et texte secondaire
          secondary: '#A89080',
          // Navigation
          nav: '#8B7355',
          navHover: '#6B5D52',
          // Boutons
          button: '#7D6B5A',
          buttonHover: '#6B5D52',
        },
        // Accents dorés/beige
        gold: {
          50: '#FAF6F0',
          100: '#F5EDE0',
          200: '#EBD9C1',
          300: '#E0C4A2',
          400: '#D4A574',
          500: '#C9B8A8',
          600: '#B89968',
          700: '#A67C52',
          800: '#8B6640',
        },
        // Bordures et séparateurs
        border: {
          light: '#E8DDD5',
          main: '#A89080',
          dark: '#8B7355',
        },
      },
      backgroundImage: {
        'subtle-gradient': 'linear-gradient(to bottom, #FAFAFA, #F9F7F4)',
        'gold-gradient': 'linear-gradient(135deg, #D4A574, #C9B8A8)',
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'ultra-wide': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 4px 25px rgba(0, 0, 0, 0.1)',
        'elegant': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
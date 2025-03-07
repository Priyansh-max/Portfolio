/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFD1DC',
        'pastel-blue': '#A8D8EA',
        'pastel-yellow': '#FFFFD1',
        'pastel-green': '#B4F8C8',
        'pastel-purple': '#E0BBE4',
      },
      fontFamily: {
        'custom' : ["customFont" , "sans-serif"],
        'comfortaa': ['comfortaa'],
        'handwritten': ['Indie Flower', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
} 
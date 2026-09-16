/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dusty-white': '#F5F5F5',
        'light-blue': '#6DB3D6',
        'dark-blue': '#5A9FB8',
        'text-dark': '#1a1a1a',
        'text-light': '#FFFFFF',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-left-delay-1': 'slideLeft 0.8s ease-out 0.1s forwards',
        'slide-left-delay-2': 'slideLeft 0.8s ease-out 0.2s forwards',
        'slide-left-delay-3': 'slideLeft 0.8s ease-out 0.3s forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
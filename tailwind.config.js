/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
    extend: {
      backgroundImage: {
        'bookNook': "url(/bookstore_upscaled_edited.jpg)"
      },
      contrast: {
        25: '.25',
      },
      brightness: {
        25: '.25',
      }

    },
  },
  plugins: [],
}
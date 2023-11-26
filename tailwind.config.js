/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.html"
  ],
  theme: {
    extend: {
      screens: {
        "md": "512px",
        'lg': '1024px',
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}


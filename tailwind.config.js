/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'humo': "url('./assets/fondo.jpg')",
        'andrea': "url('./assets/fondoSobreMi.png')"
      }
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo principal y superficies
        surtidor: {
          bg: "#050507",       // fondo app
          surface: "#0F1012",  // tarjetas, paneles
          border: "#27272F",   // bordes suaves
        },
        gold: {
          DEFAULT: "#E9B858",
          soft: "#F3C96A",
        },
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        "surtidor-soft": "0 0 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
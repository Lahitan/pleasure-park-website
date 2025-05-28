/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./*.js"], // Adjust path to your project
  theme: {
    extend: {
      colors: {
        button: '#2ECC71',       // Emerald Green
        card: '#F1C40F',     // Golden Yellow
        acent: '#E67E22',        // Sunset Orange
        dark: '#003566',          // Charcoal
        light: '#F9F9F9',         // Soft White
        sky: '#5f82ba',           // Sky Blue
      },
       backgroundImage: {
         'hero-pattern': "url('../assets/images/PP6.webp')",
        },
        fontFamily: {
         heading: ['Poppins', 'sans-serif'],
         body: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

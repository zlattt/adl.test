module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xs": "480px",
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px",
      /*...defaultTheme.screens,*/
    },
    extend: {
      fontFamily: {
        esqadero: ["'Esqadero FF CY 4F'", "sans-serif"],
      },     
    },
  },
  plugins: [],
}

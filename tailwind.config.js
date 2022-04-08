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
        trajan: ["'Trajan Pro 3'", "serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },     
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right ,  rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/images/background.jpg')",
      },
    },
  },
  plugins: [],
};

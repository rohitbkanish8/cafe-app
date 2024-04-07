/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      din: ["DIN"],
      gill: ["gill"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/images/hero.png')",
        location: "url('/public/images/location.png')",
      },
    },
  },
  plugins: [],
};

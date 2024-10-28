/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/app/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        keepcalm: ["keepcalm", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

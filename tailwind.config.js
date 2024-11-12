/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-green": "rgb(34, 111, 118)",
        "bottom-nav": "rgb(223, 240, 227)",
        "icon-green": "rgb(32, 109, 116)",
        "icon-bg": "rgb(173, 202, 204)",
        "class-color": "rgb(208, 134, 77)",
        "ticket-color": "rgb(25, 53, 63)",
      },
    },
  },
  plugins: [],
};

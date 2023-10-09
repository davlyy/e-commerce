/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        four: "grid-template-columns: auto 2fr",
      },

      backgroundImage: {
        hero: "url('../public/images/hero1.jpg')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        darkwhite: "#F2F0F1",
        semigray: "rgba(0, 0, 0, 0.60)",
      },
    },
  },
  plugins: [],
};

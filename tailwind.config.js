/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Bg-Gradient":
          "linear-gradient(180deg, rgba(6,20,57,1) 0%, rgba(38,58,112,1) 100%)",
        "Tree-Pattern": "url('/Tree-Background.svg')",
        "Tree-Bg-Mobile": "url('/Tree-Bg-Mobile.svg')",
        "Tree-Bg-Tablet": "url('/Tree-Bg-Tablet.svg')",
        "Tree-Bg-Desktop": "url('/Tree-Bg-Desktop.svg')",
        "Stars-Mobile": "url('/Stars-Mobile.svg')",
        "Moon-Mobile": "url('/Moon-Mobile.svg')",
      },
      screens: {
        "x-sm": "480px",
      },
    },
  },
  plugins: [],
};

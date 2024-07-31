/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'},
      'm': {'max': '820px'},
      'sm': {'max': '500px'},
    },
  },
  plugins: [require("daisyui")],
};

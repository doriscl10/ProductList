/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
        redhatVar: ["Red Hat Variable", "sans-serif"],
      },
      screens: {
        tablet: "640px",
      },
    },
    plugins: [],
  },
};

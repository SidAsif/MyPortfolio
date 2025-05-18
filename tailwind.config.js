/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thicccboi: ["Thicccboi", "sans-serif"],
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        swing: "swing 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

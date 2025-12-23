/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    zIndex: {
      background: "0",
      frame: "10",
      content: "20",
      carpet: "40",
      bench: "50",
      menu: "100",
      overlay: "1000",
    },
  },
  plugins: [],
};

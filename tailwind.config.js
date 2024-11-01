/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        blue_primary: "#6ec1e4",
        gray_primary: "#1a191d",
        gray_secondary: "#54595f",
        gray_text: "#7a7a7a",
        purple_primary: "#b7f",
        blue_secondary: "#2c3599",
        white_primary: "#efefef",
        yellow_primary: "#d9af23",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};

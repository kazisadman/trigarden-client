/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5016",
        secondary: "#F5F5DC",
        btn: "#7A9B57",
        bgPage: "#FFFFFF",
        btnStroke: "#CDCDCD",
        complementary: "#CC7722",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        section: "105rem",
      },
    },
  },
  plugins: [daisyui],
};

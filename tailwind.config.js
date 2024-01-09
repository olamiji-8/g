module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { 300: "#4dc8eb", 900: "#003e6b" },
        gray: {
          100: "#f5f5f5",
          700: "#6a6a6a",
          800: "#3c3744",
          "400_cc": "#b0b0b0cc",
        },
        blue: { 100: "#cae6ff" },
        white: { A700: "#ffffff" },
        red: { A700: "#e60505" },
        yellow: { 100: "#fff2c1" },
        light_blue: { 800: "#157ebf" },
      },
      fontFamily: { lora: "Lora", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

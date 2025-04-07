/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E86F8",
        secondary: "#3995FF",
        background: "#F7F7F7",
        splash: "#F9F9F6",
        accent: "#FFED62",
        text: {
          primary: "#000000",
          secondary: "#333333",
        },
      },
      maxWidth: {
        mobile: "428px",
      },
    },
  },
  plugins: [],
};

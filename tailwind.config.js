/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDEDED",
          80: "#505050",
          100: "#2358B8",
          200: "#BEBEBE",
          300: "#047EFF",
          400: "#0000004d",
        },
        secondary: {
          100: "#9DCEFF",
          200: "#A7EAFF",
          300: "#FFCB99",
          400: "#DE7700",
          500: "#FF8B04",
        },
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 5.6px 0px rgba(0, 0, 0, 0.25)",
        active: "0px 4px 23px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

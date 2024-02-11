import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      // Alfa+Slab+One: ["Alfa+Slab+One", "sans-serif"],
      hi: ["Lalezar", "sans-serif"],
      lexend : ["Lexend", "sans-serif"],
      kanit : ["Kanit", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;

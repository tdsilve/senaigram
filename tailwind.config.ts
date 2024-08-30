import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#E0F2FF",
          200: "#B3DAFF",
          300: "#80C1FF",
          400: "#4DA8FF",
          500: "#499CE2",
          600: "#397ABB",
          700: "#2A5C8C",
          DEFAULT: "#499CE2",
        },
        slateBlue: {
          DEFAULT: "#4A556E",
          50: "#F5F7FA",
          100: "#E9EBF0",
          200: "#C9CFDA",
          300: "#A8B3C4",
          400: "#8796AE",
          500: "#4A556E",
          600: "#3D4559",
          700: "#2F3543",
          800: "#22242E",
          900: "#141419",
        },
      },
    },
  },
  plugins: [],
};
export default config;

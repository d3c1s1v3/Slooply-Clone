import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "search-inset": "inset 0px -100px 80px #090d17",
      },
      colors: {
        dark1: "#0b0f19",
        dark2: "#090d17",
        dark3: "#070b12",
        white: "#ffffffd9",
        pink: "#f01b5b",
        borderThin: "#ffffff24",
        linkHover: "#ffffff0a",
      },
    },
  },
  plugins: [],
} satisfies Config;

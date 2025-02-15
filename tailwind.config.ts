import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#0b0f19",
        dark2: "#090d17",
        dark3: "#070b12",
        white: "#ffffffd9",
        pink: "#f01b5b",
        border: "#ffffff24",
      },
    },
  },
  plugins: [],
} satisfies Config;

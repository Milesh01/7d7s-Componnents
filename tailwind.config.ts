import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          orange: '#ff7a0f',
          teal: '#025f67',
          light: "#F3F4F6", 
          medium: "#16171b", 
          dark: "#000000",
          card: '#2f9d94'
        },
        secondary: {
          light: "#F87171", 
          medium: "#B91C1C", 
          teal: "#01747b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

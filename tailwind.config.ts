import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sansation", ...defaultTheme.fontFamily.sans],
        mono: ["Monomaniac One", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

export default config;

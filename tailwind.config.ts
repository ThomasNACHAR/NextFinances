import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        financesbg: "#121218",
        finances: "#1c1c26",
        myred: "#d7003a",
        myblue: "#0f52ba",
        mygreen: "#50c878",
        mygray: "#d7d7d7"
      },
    },
  },
  plugins: [],
};
export default config;

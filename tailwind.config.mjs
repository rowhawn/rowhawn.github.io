/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        /* Site-wide monospace stack */
        sans: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        sage: {
          50: "#f3f5f3",
          100: "#e6eae7",
          200: "#cdd6cf",
          300: "#a8b5ad",
          400: "#849188",
          500: "#67736b",
          600: "#525c56",
          700: "#434c47",
          800: "#383f3b",
          900: "#2f3532",
          950: "#1a1f1d",
        },
        lichen: {
          DEFAULT: "#4d6b5c",
          muted: "#5f7568",
          deep: "#3d5448",
        },
      },
    },
  },
  plugins: [],
};

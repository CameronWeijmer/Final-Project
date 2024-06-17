/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#4965d7",
      bg: "#fafafa",

      gray: {
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        350: "#d6d6d6",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        920: "#3f3d56",
        950: "#08090a",
        999: "#100c0c",
        1100: "#1f2937",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

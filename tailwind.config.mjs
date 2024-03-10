import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         colors: {
            text: "#f2f2f2",
            bg: "#111111",
            border: "#242424",
            "menu-bg": "rgba(0, 0, 0, 0.1)",
         },
         fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
         },
      },
      screens: {
         largePhone: "450px",
         tablet: "640px",
         laptop: "1024px",
         desktop: "1280px",
         xxl: "1440px",
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1.25rem",
            xxl: "4rem",
         },
         screens: {
            xxl: "728px",
         },
      },
      zIndex: {
         "-3": "-3",
         "-2": "-2",
         "-1": "-1",
         0: "0",
         1: "1",
         2: "2",
         3: "3",
         4: "4",
         5: "5",
         6: "6",
         7: "7",
         8: "8",
         9: "9",
         10: "10",
      },
   },
   plugins: [],
}

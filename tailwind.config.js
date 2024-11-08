/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        ease: "cubic-bezier(0.4, 0, 0.2, 1)", // Customize this as needed
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-text": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%) scale(0.9) rotate(2deg)",
          },
          // "50%": { opacity: "80" },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1) rotate(0)",
          },
        },
      },
      animation: {
        fade: "fade 0.5s ease-out forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "reveal-text": "reveal-text 0.8s ease-in-out forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // Add the scrollbar-hide plugin
  ],
};

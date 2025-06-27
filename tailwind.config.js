// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        world: ["WorldDiscovery", "sans-serif"], // custom font
        geist: ["var(--font-geist-sans)", "sans-serif"], // optional, if you're keeping Geist
      },
    },
  },
  plugins: [],
};

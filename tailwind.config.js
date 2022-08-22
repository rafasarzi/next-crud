module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safeList: [
    /^bg-/,
    /^from-/,
    /^to-/,
    /bg-gradient/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
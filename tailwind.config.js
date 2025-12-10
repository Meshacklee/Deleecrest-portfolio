// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#885CF6',
        secondary: '#C084FC',
        accent: '#F472B6',
        dark: '#0a0a0f',
        text: '#ffffff',
      }
    },
  },
  plugins: [],
}
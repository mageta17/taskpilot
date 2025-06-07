/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                       // Scan your main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}"      // Scan all files in /src with these extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


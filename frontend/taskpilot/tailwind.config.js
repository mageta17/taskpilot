/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                       // Scan your main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}"      // Scan all files in /src with these extensions
  ],
 theme: {
    extend: {
      colors: {
        "taskpilot-primary": "#2563EB",
        "taskpilot-secondary": "#FACC15",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}


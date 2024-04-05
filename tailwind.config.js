/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1f4851",
        "dark-secondary": "#241c2b",
        primary: "#5dd2eb",
        secondary: "#644E78",
      },
    },
  },
  plugins: [],
};

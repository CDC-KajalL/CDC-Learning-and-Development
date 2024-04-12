/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/assets/bg1.svg')",
        'bg2': "url('/assets/bg2.svg')",
      }
    },
  },
  plugins: [],
}


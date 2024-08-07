/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  //purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: ['selector','[data-mode="dark"]'], // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

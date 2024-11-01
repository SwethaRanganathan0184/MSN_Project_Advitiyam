/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/MSN_WEB_NOTRANSPARENT.png')",
      },
      height: {
        'custom-height': '720px',
      },
    },
  },
  plugins: [],
}

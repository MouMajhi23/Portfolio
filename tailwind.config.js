// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(30) forwards',
        blink: 'blink 0.75s step-end infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};

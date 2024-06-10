/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('~/assets/images/bg_gray.svg')",
        'slide': "url('~/assets/images/bg_slide.svg')",
      })
    },
  },
  plugins: [],
}


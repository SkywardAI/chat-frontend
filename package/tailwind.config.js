/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,vue}", "./components/**/*.{html,js,vue}", "./layouts/**/*.{html,js,vue}"],
  theme: {
    extend: {
      spacing: (() => {
        let i = 0
        const result = {
          'px': '1px'
        }
        while (i < 200) {
          result[i] = (i * 4) + 'px'
          i += 0.5
        }
        return result
      })
    },
  },
  plugins: [],
}


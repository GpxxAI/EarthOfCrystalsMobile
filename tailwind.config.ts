import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B2D22",
          50: "#F4EFEA",
          100: "#E9DED3",
          200: "#D0BEA8",
          300: "#B59E7D",
          400: "#987E5B",
          500: "#7C6345",
          600: "#614E38",
          700: "#4A3B2B",
          800: "#3B2D22",
          900: "#2B2119"
        }
      },
      borderRadius: {
        xl: "14px"
      }
    }
  },
  plugins: []
}
export default config

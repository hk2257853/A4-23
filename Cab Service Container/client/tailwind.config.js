/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../Driver Details Service/client/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../Driver Details Service/client/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../Cab Details Service/client/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../Cab Details Service/client/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../Cab Management Service/client/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../Cab Management Service/client/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const globalTheme = require("./src/lib/design/theme");
const textStyles = require("./src/lib/design/typography");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...textStyles.typographies,
    extend: {
      ...globalTheme,
    },
  },
  plugins: [plugin(textStyles.register)],
};

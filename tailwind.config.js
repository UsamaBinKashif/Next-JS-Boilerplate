/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define the paths to your project's source files that Tailwind CSS should scan for classes.
  // These include JavaScript/TypeScript files, MDX files, and any other file extensions listed here.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Customize your project's theme by extending Tailwind CSS's default configuration.
  theme: {
    extend: {
      // Define custom colors that you want to use in your project.
      colors: {
        // Example custom color: silver
        silver: "#737373",
      },

      // Define custom screen sizes for responsive design.
      screens: {
        sm: "640px",     // Small screens
        md: "768px",     // Medium screens
        lg: "1024px",    // Large screens
        xl: "1280px",    // Extra-large screens
        "2xl": "1536px", // 2x Extra-large screens
        "3xl": "1920px", // 3x Extra-large screens
        "4xl": "2560px", // 4x Extra-large screens
        "5xl": "3000px", // 5x Extra-large screens
      },
    },
  },

  // List any additional plugins you want to use with Tailwind CSS.
  plugins: [],
};

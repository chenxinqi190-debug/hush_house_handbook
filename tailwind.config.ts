import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // The whole app uses one serif font (Philosopher, loaded via
        // next/font/google in app/layout.tsx). Fall back to a generic
        // serif so text is never rendered in the default sans-serif.
        sans: ["var(--font-philosopher)", "Georgia", "serif"],
        serif: ["var(--font-philosopher)", "Georgia", "serif"],
      },
      colors: {
        // A small, deliberately limited palette for the "archive" look.
        // `ink` is the body text/border color, used with Tailwind's
        // opacity modifiers (e.g. text-ink/60) for hierarchy instead of
        // switching to literal gray shades.
        ink: "#3b2f2f",
      },
    },
  },
  plugins: [],
};

export default config;

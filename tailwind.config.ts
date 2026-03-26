import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B81",
        secondary: "#6C5CE7",
        accent: "#00CEC9",
        gold: "#FFD700",
        bg: "#0F0F14",
        surface: "#1A1A22",
        glass: "rgba(255,255,255,0.06)",
        muted: "rgba(255,255,255,0.55)",
        dim: "rgba(255,255,255,0.28)",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        crimson: ["Crimson Text", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        aurora: "aurora 18s ease infinite",
        twinkle: "twinkle 3s ease-in-out infinite alternate",
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        pulse2: "pulse2 2.2s ease-in-out infinite",
        blink: "blink 1.8s ease-in-out infinite",
        spin2: "spin 1.8s linear infinite",
        heartbeat: "heartbeat 0.5s ease-in-out",
        slideUp: "slideUp 0.45s ease",
        fadeIn: "fadeIn 0.3s ease",
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        twinkle: {
          "0%": { opacity: "0.1", transform: "scale(1)" },
          "100%": { opacity: "0.9", transform: "scale(1.5)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glow: {
          "0%,100%": { textShadow: "0 0 20px rgba(255,215,0,.5)" },
          "50%": { textShadow: "0 0 60px rgba(255,215,0,.9),0 0 120px rgba(255,180,0,.4)" },
        },
        pulse2: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(139,92,246,.5)" },
          "70%": { boxShadow: "0 0 0 20px rgba(139,92,246,0)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        heartbeat: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.18)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

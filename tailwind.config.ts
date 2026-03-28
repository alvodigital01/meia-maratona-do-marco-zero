import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A0F1A",
        electric: "#005BFF",
        "electric-dark": "#0037A6",
        gold: "#F5B400",
        mist: "#EAF1FF",
        steel: "#94A3B8"
      },
      boxShadow: {
        glow: "0 30px 80px rgba(0, 91, 255, 0.28)",
        card: "0 20px 60px rgba(10, 15, 26, 0.18)"
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
        "mesh-blue": "radial-gradient(circle at 20% 20%, rgba(0,91,255,.38), transparent 30%), radial-gradient(circle at 80% 0%, rgba(245,180,0,.22), transparent 28%), radial-gradient(circle at 50% 60%, rgba(255,255,255,.06), transparent 42%)"
      },
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        display: ["var(--font-barlow)", "sans-serif"]
      },
      letterSpacing: {
        hero: "-0.045em"
      },
      animation: {
        marquee: "marquee 24s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;

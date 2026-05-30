/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e14",
        bg2: "#0d1219",
        surface: "#111720",
        surface2: "#161e2b",
        orange: "#ff5f1f",
        "orange-dim": "#c94a18",
        cyan: "#00e5ff",
        "cyan-dim": "#009db3",
        green: "#39ff8a",
        text: "#e8edf5",
        "text-dim": "#8a96a8",
        border: "#1e2d40",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        mono: ['"Share Tech Mono"', "monospace"],
        body: ['"Barlow"', "sans-serif"],
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.8s ease both",
        blink: "blink 1s infinite",
        "pulse-custom": "pulse 2s infinite",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        fadeSlideUp: {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blink: {
          "50%": {
            opacity: "0",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};

import { colors } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        outfit: ["var(--font-outfit)"],
        work_sans: ["var(--font-work_sans)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        app_green: {
          DEFAULT: "#4B8957",
          100: "#0f1c12",
          200: "#1e3723",
          300: "#2e5335",
          400: "#3d6f47",
          500: "#4b8957",
          600: "#66ab74",
          700: "#8dc097",
          800: "#b3d5ba",
          900: "#d9eadc"
        },
        app_lm_green: {
          DEFAULT: "#70AD47",
          100: "#16230e",
          200: "#2d461c",
          300: "#43682b",
          400: "#5a8b39",
          500: "#70ad47",
          600: "#8cc168",
          700: "#a9d18e",
          800: "#c6e0b4",
          900: "#e2f0d9"
        },
        app_black: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc"
        }
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#4B8957",
              100: "#0f1c12",
              200: "#1e3723",
              300: "#2e5335",
              400: "#3d6f47",
              500: "#4b8957",
              600: "#66ab74",
              700: "#8dc097",
              800: "#b3d5ba",
              900: "#d9eadc",
              foreground: "#ffffff"
            },
            secondary: {
              DEFAULT: "#fffff"
            }
            // ... you can add other custom colors here
          }
        },
        // You can also customize the dark theme if needed
        dark: {
          colors: {
            primary: {
              DEFAULT: "#4B8957",
              100: "#0f1c12",
              200: "#1e3723",
              300: "#2e5335",
              400: "#3d6f47",
              500: "#4b8957",
              600: "#66ab74",
              700: "#8dc097",
              800: "#b3d5ba",
              900: "#d9eadc",
              foreground: "#ffffff"
            },
            secondary: {
              DEFAULT: "#fffff"
            }
          }
        }
      }
    })
  ]
};
export default config;

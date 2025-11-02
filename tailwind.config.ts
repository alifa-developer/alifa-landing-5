import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(calendar|dropdown|modal|button|ripple|spinner|menu|divider|popover).js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "3xl": "1920 px",
      },
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        shadeBrown: "rgba(117,35,0, 0.5)",
        customBrown: "rgba(81, 32, 11, 0.10)",
        customLightGray: "rgba(247, 242, 240, 0.50)",
        customGray: "#999999",
        customWhite: "rgba(255, 255, 255, 0.80)",
        "orange-tint": "rgba(255, 101, 0, 0.05)",
        customGreen: "#10B981",
        strokes: "#E6E6E6",
        Secondary_Deep_Brown: "#51200B",
        "background-secondary": "#51200B0D",
        "primary-text": "#FF6500",
        "icons-accent": "#FF6500",
        "highlighted-buttons": "#1A1A1A",
        "primary-content": "#1A1A1A",
        "primary-accent": "#FF65000D",
        secondary_text: "#1A1A1A",
        secondary_content_text: "#333333",
        "details-content": "#808080",
        bg_1: "#EEEEEE",
        bg_2: "#F7F2F080",
        bg_3: "#3A190B",
        bg_4: "#D3B8AD",
        tertiarry: "#752300",
        tertiary_content: "#999999",
        "button-tertiary": "#BEBEBE",
        "button-disabled": "#F5F5F5",
        "grey-text": "#B3B3B3",
        transparent: "#00000014",
        "school-name-color": "#26499C",
        required: "#AD3026",
        "grey-1":"#333333",
        "grey-2":"#8E8E8F",
        "grey-3":"#BEBEBE",
        "grey-4":"#DADADA",
        "grey-5":"#EEEEEE",
        "grey-6":"#F8F8F8",
        "orange":"#FF6500",
        "orange-2":"#E35A00",
        "orange-3":"#FFEFE5",
        "dark-brown-1":"#3A190B",
        "dark-brown-2":"#402013"
      },
      boxShadow: {
        'button-hover': '0px 8px 24px 5px #FFE7D9',
      },
      fontSize: {
        header: "40px",
        big: "32px",

        //WEB-----------------------------------------
        'page-title': ['70px', { lineHeight: '130%' }],
        'heading-1': ['40px', { lineHeight: '130%' }],
        'heading-2': ['32px', { lineHeight: '130%' }],
        'heading-3': ['24px', { lineHeight: '130%' }],
        'heading-caps': ['18px', { lineHeight: '130%' }],

        // Buttons
        'btn-default': ['18px', { lineHeight: '100%' }],
        'btn-small': ['16px', { lineHeight: '120%' }],

        // Big Body
        'body-big-sub': ['19px', { lineHeight: '120%' }],
        'body-big': ['19px', { lineHeight: '160%' }],

        // Default Body
        'body-default-sub': ['17px', { lineHeight: '160%' }],
        'body-default': ['17px', { lineHeight: '150%' }],
        'body-link': ['17px', { lineHeight: '120%' }],
        'body-field': ['17px', { lineHeight: '150%' }],

        // Small Body
        'body-small-sub': ['15px', { lineHeight: '120%' }],
        'body-small': ['15px', { lineHeight: '140%' }],

        // Extra Small Body
        'body-xs-sub': ['12px', { lineHeight: '120%' }],
        'body-xs': ['12px', { lineHeight: '120%' }],



         //TAB-------------------------------------------
        'page-title-tb': ['30px', { lineHeight: '140%' }],
        'heading-1-tb': ['24px', { lineHeight: '140%' }],
        'heading-2-tb': ['20px', { lineHeight: '140%' }],
        'heading-3-tb': ['18px', { lineHeight: '140%' }],
        'heading-caps-tb': ['13px', { lineHeight: '140%' }],

        // Buttons
        'btn-default-tb': ['15px', { lineHeight: '100%' }],
        'btn-small-tb': ['12px', { lineHeight: '100%' }],

        // Big Body
        'body-big-sub-tb': ['17px', { lineHeight: '120%' }],
        'body-big-tb': ['17px', { lineHeight: '160%' }],

        // Default Body
        'body-default-sub-tb': ['15px', { lineHeight: '140%' }],
        'body-default-tb': ['15px', { lineHeight: '150%' }],
        'body-link-tb': ['15px', { lineHeight: '120%' }],
        'body-field-tb': ['15px', { lineHeight: '150%' }],

        // Small Body
        'body-small-sub-tb': ['13px', { lineHeight: '140%' }],
        'body-small-tb': ['13px', { lineHeight: '140%' }],

        // Extra Small Body
        'body-xs-sub-tb': ['11px', { lineHeight: '120%' }],
        'body-xs-tb': ['11px', { lineHeight: '130%' }],


        //MOBILE-------------------------------------------
        'page-title-mb': ['30px', { lineHeight: '140%' }],
        'heading-1-mb': ['24px', { lineHeight: '140%' }],
        'heading-2-mb': ['20px', { lineHeight: '140%' }],
        'heading-3-mb': ['18px', { lineHeight: '140%' }],
        'heading-caps-mb': ['16px', { lineHeight: '140%' }],

        // Buttons
        'btn-default-mb': ['15px', { lineHeight: '100%' }],
        'btn-small-mb': ['12px', { lineHeight: '100%' }],

        // Big Body
        'body-big-sub-mb': ['17px', { lineHeight: '120%' }],
        'body-big-mb': ['17px', { lineHeight: '160%' }],

        // Default Body
        'body-default-sub-mb': ['15px', { lineHeight: '140%' }],
        'body-default-mb': ['15px', { lineHeight: '150%' }],
        'body-link-mb': ['15px', { lineHeight: '120%' }],
        'body-field-mb': ['15px', { lineHeight: '140%' }],

        // Small Body
        'body-small-sub-mb': ['13px', { lineHeight: '140%' }],
        'body-small-mb': ['13px', { lineHeight: '140%' }],

        // Extra Small Body
        'body-xs-sub-mb': ['11px', { lineHeight: '120%' }],
        'body-xs-mb': ['11px', { lineHeight: '130%' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        custom: "8.878px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideIn: {
          "0%": { transform: "translateY(-200px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-200px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "slide-out": "slideOut 0.5s ease-in forwards",
      },
      padding: {
        lg: "120px",
        "2xl": "300px",
        sm: "10px",
      },
      backdropBlur: {
        custom: "13.872549057006836px",
      },
      zIndex: {
        "500": "500",
      },
      screens: {
        "device-360-400": { min: "360px", max: "400px" },
        "device-401-500": { min: "401px", max: "500px" },
        "device-501-600": { min: "501px", max: "600px" },
        "device-601-767": { min: "601px", max: "767px" },
        "3xl": "1780px",
        "lg": "1025px",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          extend: "light",
          layout: {}, // light theme layout tokens
        },
      },
    }),
  ],
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        muted: "var(--color-muted)",
        danger: "var(--color-danger)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        dialog: "var(--shadow-dialog)",
      },
    },
  },
  plugins: [],
};

export default config;

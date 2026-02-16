 // tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
      },

      fontFamily: {
        body: "var(--font-body)",
        heading: "var(--font-heading)",
      },

      fontSize: {
        // Generic responsive sizes
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",

        // Combined heading styles (size + weight + line-height)
        h1: ["var(--h1-size)", { lineHeight: "1.2", fontWeight: "var(--h1-weight)" }],
        h2: ["var(--h2-size)", { lineHeight: "1.3", fontWeight: "var(--h2-weight)" }],
        h3: ["var(--h3-size)", { lineHeight: "1.4", fontWeight: "var(--h3-weight)" }],
        h4: ["var(--h4-size)", { lineHeight: "1.5", fontWeight: "var(--h4-weight)" }],
      },
      
        spacing: { 
          xs: "var(--space-xs)", 
          sm: "var(--space-sm)", 
          md: "var(--space-md)", 
          lg: "var(--space-lg)", 
          xl: "var(--space-xl)", 

        }, 

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      
      screens: {
        sm: "var(--breakpoint-sm)",
        md: "var(--breakpoint-md)",
        lg: "var(--breakpoint-lg)",
        xl: "var(--breakpoint-xl)",
      },
    },

  plugins: [],
  }
};  

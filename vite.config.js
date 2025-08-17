import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: "./index.html",
        projects: "./projects.html",
        tech: "./tech.html",
        contact: "./contact.html",
      },
    },
  },
});

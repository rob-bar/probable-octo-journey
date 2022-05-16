import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },

  plugins: [react()],
})

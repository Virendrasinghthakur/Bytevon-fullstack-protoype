import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // listen on 0.0.0.0 so Codespaces can forward the port
    port: 5173,
    strictPort: true,
    // GitHub Codespaces HMR fix — browser connects via the public *.app.github.dev URL on 443
    hmr: {
      clientPort: 443,
    },
  },
})

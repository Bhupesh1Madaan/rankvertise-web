import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/react-router/') ||
              id.includes('/react-router-dom/')
            ) {
              return 'vendor';
            }
            if (id.includes('/gsap/') || id.includes('/framer-motion/')) {
              return 'animations';
            }
            if (id.includes('/ogl/')) {
              return 'webgl';
            }
          }
        }
      }
    }
  }
});
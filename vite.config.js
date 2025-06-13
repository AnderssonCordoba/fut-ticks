// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/estadisticas': 'http://localhost:3000' // solo para desarrollo local
    }
  }
});

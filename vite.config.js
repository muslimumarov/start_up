import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Portni 3000 ga sozlash
  },
  plugins: [react()],

});

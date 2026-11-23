import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://theworldwyrm.github.io/anthonyotoide.github.io/
export default defineConfig({
  base: '/anthonyotoide.github.io/',
  plugins: [react()],
});

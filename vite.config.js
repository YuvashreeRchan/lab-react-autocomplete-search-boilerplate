import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["C:/Users/yuva/Documents/ReactKalvium/lab-react-autocomplete-search-boilerplate"]
    }
  }
});

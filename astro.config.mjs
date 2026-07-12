import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://joinacad.medcmu69.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});

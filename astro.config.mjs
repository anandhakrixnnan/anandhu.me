import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://anandhu.me',
  base: process.env.BASE_PATH || '/',
  output: 'static',
});

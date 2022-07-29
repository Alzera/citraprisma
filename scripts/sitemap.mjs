import { createSitemap } from 'svelte-sitemap/src/index.js';
createSitemap('https://www.citraprisma.com', {
  changeFreq: 'weekly',
  resetTime: true,
});
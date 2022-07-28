import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    sass: true,
    typescript: {
      tsconfigFile : './tsconfig.json'
    }
  }),

  kit: {
    adapter: adapter({
      precompress: true
	  }),
  
	  prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
	  }
	},
};

export default config;

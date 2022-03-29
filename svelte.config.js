import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'svelte-yafal': resolve('src/lib'),
				},
			},
		},
		prerender: {
			default: true,
		},
		paths: {
			base: process.env.BASE_PATH,
		},
		browser: {
			router: false,
		},
	},
};

export default config;

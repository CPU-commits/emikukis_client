import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: netlify(),
		vite: {
			server: {
				watch: {
					usePolling: true,
				},
			},
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores'),
				},
			},
		},
	}
};

export default config;

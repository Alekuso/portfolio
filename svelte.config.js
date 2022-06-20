import vercel from '@sveltejs/adapter-vercel';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: "@import './src/global.scss';"
		}
	}),

	kit: {
		adapter: vercel()
	}
};

export default config;

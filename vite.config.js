import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	noExternal: ['three', 'troika-three-text']
};

export default config;

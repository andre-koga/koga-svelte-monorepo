/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundBlendMode: ['difference'],
			colors: {},
			fontFamily: {
				jet: ['JetBrains Mono', 'sans-serif'],
				display: ['Bricolage Grotesque', 'sans-serif'],
				text: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};

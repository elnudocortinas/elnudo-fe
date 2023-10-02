/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			primary: '#D4959B',
			light: '#FCF5F5',
			black: '#000000',
			secondary: '#A34773'
		},
		fontSize: {
			default: '24px',
			large: '32px',
			subtitle: '48px',
			title: '62px'
		},
		fontFamily:{
			myriad: ['myriad-pro','sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}

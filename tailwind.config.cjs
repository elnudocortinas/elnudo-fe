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
			default: ['18px', {lineHeight: '24px', fontWeight: 400}],
			large: ['24px', {lineHeight: '48px', fontWeight: 300}],
			subtitle: ['48px', { lineHeight: '62px', fontWeight: 300}],
			title: ['62px', {lineHeight: '80px', fontWeight: 700}]
		},
		fontFamily:{
			myriad: ['myriad-pro','sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}

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
			bold: ['18px', {lineHeight: '24px', fontWeight: 700}],
			large: ['32px', {lineHeight: '48px', fontWeight: 300}],
			subtitle: ['32px', { lineHeight: '48px', fontWeight: 700}],
			custom: ['46px', {lineHeight: '32px', fontWeight: 700}],
			title: ['64px', {lineHeight: '46px', fontWeight: 700}]
		},
		fontFamily:{
			myriad: ['myriad-pro','sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}

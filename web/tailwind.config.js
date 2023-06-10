/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'dela-gothic': ['Dela Gothic One', 'cursive'],
			  },
		},
	},
	plugins: [],
}

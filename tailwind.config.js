/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}', './src/app/**/*.{html,ts}'],
	theme: {
		extend: {
			fontFamily: {
				keepcalm: ['keepcalm', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
				redhat: ['Red Hat Display', 'sans-serif']
			},
			colors: {
				primary: '#138F82', // Primary brand color
				darkBlue: '#00041B', // Dark Blue
				darkGray: '#213337', // Dark Gray
				gray: '#616161', // Medium Gray
				lightGreen: '#F3F9F8', // Light Green
				teal: '#497774' // Teal
			},
			screens: {
				'custom-lg': '1147px' // Custom breakpoint at 1147px
			}
		}
	},
	plugins: []
};

import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// colors: {
			// 	purple: '#854dff',
			// 	lightred: '#ff5757',
			// 	white: '#ffffff',
			// 	offwhite: '#f0f0f0',
			// 	lightgrey: '#dbdbdb',
			// 	smokeygrey: '#716f6f',
			// 	offblack: '#141414'
			// }

			fontFamily: {
				poppins: ['Poppins']
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio, require('daisyui')]
};

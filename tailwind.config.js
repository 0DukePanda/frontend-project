import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				purple: '#854dff',
				lightred: '#ff5757',
				red: '#ff0000',
				white: '#ffffff',
				offwhite: '#f0f0f0',
				lightgrey: '#dbdbdb',
				smokeygrey: '#716f6f',
				offblack: '#141414',
				pink: '#ff57ab',
				black: '#000000',
				blue: '#0000ff',
				lightblue: '#57aaff',
				green: '#00ff00',
				yellow: '#ffff00',
				orange: '#ff7f00',
				purple: '#7f00ff',
				cyan: '#00ffff'
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio, require('daisyui')]
};

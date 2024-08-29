import { fontFamily } from "tailwindcss/defaultTheme";
import aspectRatio from '@tailwindcss/aspect-ratio';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
				sans: [...fontFamily.sans],
        spartan: ["League Spartan", ...fontFamily.sans],
        sauce: ["Open Sauce Sans", ...fontFamily.sans],
			}
    },
	},
	plugins: [
    aspectRatio,
    require("@tailwindcss/typography"),
    addVariablesForColors
  ],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

export default config;

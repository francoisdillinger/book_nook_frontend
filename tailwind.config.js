/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			backgroundImage: {
				bookNook: "url(/bookstore_upscaled_edited.jpg)",
			},
			contrast: {
				25: ".25",
			},
			brightness: {
				25: ".25",
			},
			minWidth: {
				"1/5": "20%",
				"1/3": "33.333333%",
				"1/2": "50%",
			},
			colors: {
				logo: "#D86464",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".half-width-minus-gap": {
					width: "calc(50% - .5rem)", // Adjust the calculation as needed
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};

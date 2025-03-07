import { extendTheme } from "native-base";

const theme = extendTheme({
	fontConfig: {
		Raleway: {
			100: {
				normal: "Raleway-Light",
				italic: "Raleway-LightItalic",
			},
			200: {
				normal: "Raleway-Light",
				italic: "Raleway-LightItalic",
			},
			300: {
				normal: "Raleway-Light",
				italic: "Raleway-LightItalic",
			},
			400: {
				normal: "Raleway-Regular",
				italic: "Raleway-Italic",
			},
			500: {
				normal: "Raleway-Medium",
				italic: "Raleway-MediumItalic",
			},
			600: {
				normal: "Raleway-Medium",
				italic: "Raleway-MediumItalic",
			},
			700: {
				normal: "Raleway-Bold",
			},
			800: {
				normal: "Raleway-Bold",
				italic: "Raleway-BoldItalic",
			},
			900: {
				normal: "Raleway-Black",
				italic: "Raleway-BlackItalic",
			},
		},
	},

	// Make sure values below matches any of the keys in `fontConfig`
	fonts: {
		heading: "Raleway",
		body: "Raleway",
		mono: "Raleway",
	},
});

export default theme;

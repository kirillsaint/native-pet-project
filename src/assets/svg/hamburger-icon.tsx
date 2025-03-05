import Svg, { Rect } from "react-native-svg";

export default function HamburgerIcon() {
	return (
		<Svg width="26" height="18" viewBox="0 0 26 18" fill="none">
			<Rect x="9" y="1" width="16" height="2" rx="1" fill="#2B2B2B" />
			<Rect x="2" y="8" width="23" height="2" rx="1" fill="#2B2B2B" />
			<Rect x="2" y="15" width="11" height="2" rx="1" fill="#48B2E7" />
		</Svg>
	);
}

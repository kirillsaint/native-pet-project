import Svg, { Path, Rect } from "react-native-svg";

export default function TrashIcon() {
	return (
		<Svg width="58" height="104" viewBox="0 0 58 104" fill="none">
			<Rect width="58" height="104" rx="8" fill="#F87265" />
			<Path
				d="M20 46H22H38"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M37 46C37 45.4477 36.5523 45 36 45C35.4477 45 35 45.4477 35 46H37ZM23 46C23 45.4477 22.5523 45 22 45C21.4477 45 21 45.4477 21 46H23ZM24 46C24 46.5523 24.4477 47 25 47C25.5523 47 26 46.5523 26 46H24ZM32 46C32 46.5523 32.4477 47 33 47C33.5523 47 34 46.5523 34 46H32ZM35 46V60H37V46H35ZM35 60C35 60.5523 34.5523 61 34 61V63C35.6569 63 37 61.6569 37 60H35ZM34 61H24V63H34V61ZM24 61C23.4477 61 23 60.5523 23 60H21C21 61.6569 22.3431 63 24 63V61ZM23 60V46H21V60H23ZM26 46V44H24V46H26ZM26 44C26 43.4477 26.4477 43 27 43V41C25.3431 41 24 42.3431 24 44H26ZM27 43H31V41H27V43ZM31 43C31.5523 43 32 43.4477 32 44H34C34 42.3431 32.6569 41 31 41V43ZM32 44V46H34V44H32Z"
				fill="white"
			/>
			<Path
				d="M27 51V57"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M31 51V57"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

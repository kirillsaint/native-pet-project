import { Box, Heading, Icon, Stack } from "native-base";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HamburgerIcon from "../assets/svg/hamburger-icon";
import NotificationItem from "../components/notification-item";

export interface INotification {
	title: string;
	text: string;
	created_at: string;
}

export const notifications: INotification[] = [
	{
		title: "Example",
		text: "Lorem ipsum dolor sit amet consectetur. Venenatis pulvinar lobortis risus consectetur morbi egestas id in bibendum. Volutpat nulla urna sit sed diam nulla.",
		created_at: "27.01.2024, 15:42",
	},
	{
		title: "Example",
		text: "Lorem ipsum dolor sit amet consectetur. Venenatis pulvinar lobortis risus consectetur morbi egestas id in bibendum. Volutpat nulla urna sit sed diam nulla.",
		created_at: "27.01.2024, 15:42",
	},
	{
		title: "Example",
		text: "Lorem ipsum dolor sit amet consectetur. Venenatis pulvinar lobortis risus consectetur morbi egestas id in bibendum. Volutpat nulla urna sit sed diam nulla.",
		created_at: "27.01.2024, 15:42",
	},
	{
		title: "Example",
		text: "Lorem ipsum dolor sit amet consectetur. Venenatis pulvinar lobortis risus consectetur morbi egestas id in bibendum. Volutpat nulla urna sit sed diam nulla.",
		created_at: "27.01.2024, 15:42",
	},
	{
		title: "Example",
		text: "Lorem ipsum dolor sit amet consectetur. Venenatis pulvinar lobortis risus consectetur morbi egestas id in bibendum. Volutpat nulla urna sit sed diam nulla.",
		created_at: "27.01.2024, 15:42",
	},
];

export default function NotificationsPage() {
	useEffect(() => {
		console.log(notifications);
	}, []);

	return (
		<SafeAreaView>
			<Stack mx={"20px"} direction={"column"} space={"8px"}>
				<Stack
					alignItems={"center"}
					direction={"row"}
					justifyContent={"space-between"}
				>
					<Icon h="18px" as={<HamburgerIcon />} />
					<Heading
						color={"#2B2B2B"}
						fontSize={"16px"}
						textAlign={"center"}
						fontWeight={400}
					>
						Уведомления
					</Heading>

					<Box w="44px" h="44px" />
				</Stack>

				{notifications.map((notification, key) => (
					<NotificationItem notification={notification} key={key} />
				))}
			</Stack>
		</SafeAreaView>
	);
}

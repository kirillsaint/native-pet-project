import { Heading, Stack, Text } from "native-base";
import { INotification } from "../../pages/notifications";

export default function NotificationItem({
	notification,
}: {
	notification: INotification;
}) {
	return (
		<Stack
			direction={"column"}
			space={"16px"}
			p="16px"
			w="full"
			borderRadius={"16px"}
			background={"#F7F7F9"}
		>
			<Stack direction={"column"} space={"8px"}>
				<Heading fontSize={"16px"} fontWeight={700}>
					{notification.title}
				</Heading>
				<Text fontSize={"12px"} fontWeight={500}>
					{notification.text}
				</Text>
			</Stack>

			<Text color={"#707B81"} fontSize={"12px"} fontWeight={500}>
				{notification.created_at}
			</Text>
		</Stack>
	);
}

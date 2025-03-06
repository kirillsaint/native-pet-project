import { Center, Heading, Image, Pressable, Stack, Text } from "native-base";
import { Swipeable } from "react-native-gesture-handler";
import MinusIcon from "../../assets/svg/minus-icon";
import PlusIcon from "../../assets/svg/plus-icon";
import TrashIcon from "../../assets/svg/trash-icon";
import cart, { ICartItem } from "../../utils/cart";

export default function CartItem({
	item,
	updateData,
}: {
	item: ICartItem;
	updateData: () => void;
}) {
	return (
		<Swipeable
			renderLeftActions={() => {
				return (
					<Stack
						mr="10px"
						bgColor={"#48ABE7"}
						borderRadius={"8px"}
						direction={"column"}
						alignItems={"center"}
						h="full"
						w="58px"
						justifyContent={"space-between"}
					>
						<Pressable
							onPress={async () => {
								await cart.add(item.product);
								await updateData();
							}}
						>
							<Center w="full" h="40px">
								<PlusIcon />
							</Center>
						</Pressable>
						<Heading color={"white"} fontSize={"14px"} fontWeight={400}>
							{item.count}
						</Heading>
						<Pressable
							onPress={async () => {
								await cart.remove(item.product);
								await updateData();
							}}
						>
							<Center h="40px" w="full">
								<MinusIcon />
							</Center>
						</Pressable>
					</Stack>
				);
			}}
			renderRightActions={() => {
				return (
					<Pressable
						onPress={async () => {
							await cart.remove(item.product, true);
							await updateData();
						}}
					>
						<Center
							ml="10px"
							bgColor={"#F87265"}
							borderRadius={"8px"}
							alignItems={"center"}
							h="full"
							w="58px"
						>
							<TrashIcon />
						</Center>
					</Pressable>
				);
			}}
		>
			<Stack
				bgColor={"white"}
				borderRadius={"8px"}
				direction={"row"}
				space={"31px"}
				p="10px"
				alignItems={"center"}
				h="104px"
			>
				<Center borderRadius={"16px"} bgColor={"#F7F7F9"} w={"87px"} h="87px">
					<Image source={item.product.image} w="87px" h="55px" />
				</Center>
				<Stack direction={"column"} space={"6px"}>
					<Heading fontSize={"16px"} fontWeight={400}>
						{item.product.name}
					</Heading>
					<Text
						color={"#2B2B2B"}
						fontStyle={"italic"}
						fontSize={"14px"}
						fontWeight={400}
					>
						₽{(item.product.price * item.count).toFixed(2)}
					</Text>
				</Stack>
			</Stack>
		</Swipeable>
	);
}

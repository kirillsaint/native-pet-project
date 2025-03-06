import { Center, Heading, Icon, Image, Stack, Text } from "native-base";
import { Dimensions, ImageSourcePropType } from "react-native";
import HeartFilledIcon from "../../assets/svg/heart-filled-icon";
import HeartIcon from "../../assets/svg/heart-icon";
import PlusIcon from "../../assets/svg/plus-icon";

export interface IProduct {
	id: number;
	isBestSeller?: boolean;
	image: ImageSourcePropType;
	name: string;
	price: number;
	favorited?: boolean;
}

export default function ProductItem({ product }: { product: IProduct }) {
	return (
		<Stack
			direction={"column"}
			w={(Dimensions.get("window").width - 40) / 2 - 8}
			space={"0px"}
			pt="18px"
			bgColor={"white"}
			borderRadius={"16px"}
			overflow={"hidden"}
			position={"relative"}
		>
			<Center
				w="26px"
				h="26px"
				left={"9px"}
				top={"9px"}
				position={"absolute"}
				bgColor={"#F7F7F9"}
				borderRadius={"40px"}
				color={product.favorited ? "#F87265" : undefined}
			>
				{product.favorited ? <HeartFilledIcon /> : <HeartIcon />}
			</Center>
			<Stack pl="9px" pr="9px" direction={"column"} space={"12px"}>
				<Center>
					<Image w="117px" source={product.image} />
				</Center>

				<Stack direction={"column"} space={"8px"}>
					{product.isBestSeller && (
						<Heading
							color={"#48B2E7"}
							fontWeight={400}
							fontSize={"12px"}
							textTransform={"uppercase"}
						>
							Best Seller
						</Heading>
					)}
					<Heading color={"#6A6A6A"} fontWeight={400} fontSize={"16px"}>
						{product.name}
					</Heading>
				</Stack>
			</Stack>
			<Stack
				pl="9px"
				alignItems={"center"}
				direction={"row"}
				justifyContent={"space-between"}
			>
				<Text fontStyle={"italic"} fontSize={"14px"} fontWeight={400}>
					₽{product.price.toFixed(2)}
				</Text>
				<Center
					borderTopLeftRadius={"16px"}
					h="34px"
					w="34px"
					bgColor={"#48B2E7"}
				>
					<Icon w={"21px"} color={"white"} as={<PlusIcon />} />
				</Center>
			</Stack>
		</Stack>
	);
}

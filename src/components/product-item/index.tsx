import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	Box,
	Center,
	Heading,
	Icon,
	Image,
	Pressable,
	Stack,
	Text,
} from "native-base";
import { useEffect, useState } from "react";
import { Dimensions, ImageSourcePropType } from "react-native";
import HeartFilledIcon from "../../assets/svg/heart-filled-icon";
import HeartIcon from "../../assets/svg/heart-icon";
import PlusIcon from "../../assets/svg/plus-icon";

export interface IProduct {
	id: number;
	isBestSeller?: boolean;
	category: string;
	image: ImageSourcePropType;
	name: string;
	price: number;
}

export default function ProductItem({ product }: { product: IProduct }) {
	const [favorited, setFavorited] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			const data = JSON.parse(
				(await AsyncStorage.getItem("favorite-items")) || "[]"
			);
			if (data.includes(product.id)) {
				setFavorited(true);
			} else {
				setFavorited(false);
			}
		})();
	}, []);

	return (
		<Stack
			direction={"column"}
			w={(Dimensions.get("window").width - 40) / 2 - 8}
			space={"0px"}
			bgColor={"white"}
			borderRadius={"16px"}
			overflow={"hidden"}
			position={"relative"}
		>
			<Pressable
				onPress={async () => {
					const data = JSON.parse(
						(await AsyncStorage.getItem("favorite-items")) || "[]"
					);
					if (data.includes(product.id)) {
						await AsyncStorage.setItem(
							"favorite-items",
							JSON.stringify(data.filter((e: number) => e !== product.id))
						);
						setFavorited(false);
					} else {
						await AsyncStorage.setItem(
							"favorite-items",
							JSON.stringify([product.id, ...data])
						);
						setFavorited(true);
					}
				}}
			>
				<Center
					w="26px"
					h="26px"
					left={"9px"}
					top={"9px"}
					position={"absolute"}
					bgColor={"#F7F7F9"}
					borderRadius={"40px"}
					color={favorited ? "#F87265" : undefined}
				>
					{favorited ? <HeartFilledIcon /> : <HeartIcon />}
				</Center>
			</Pressable>
			<Stack pt="18px" pl="9px" pr="9px" direction={"column"} space={"12px"}>
				<Center>
					<Image w="117px" source={product.image} />
				</Center>

				<Stack direction={"column"} space={"8px"}>
					{product.isBestSeller ? (
						<Heading
							color={"#48B2E7"}
							fontWeight={400}
							fontSize={"12px"}
							textTransform={"uppercase"}
							h={"16px"}
						>
							Best Seller
						</Heading>
					) : (
						<Box h={"16px"}></Box>
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

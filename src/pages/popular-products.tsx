import { Heading, IconButton, SimpleGrid, Stack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import HeartIcon from "../assets/svg/heart-icon";
import ProductItem from "../components/product-item";

export default function PopularProductsPage() {
	const navigate = useNavigate();

	return (
		<SafeAreaView>
			<Stack mx={"20px"} direction={"column"} space={"24px"}>
				<Stack
					alignItems={"center"}
					direction={"row"}
					justifyContent={"space-between"}
				>
					<IconButton
						w="44px"
						h="44px"
						borderRadius={"40px"}
						bgColor={"#FFF"}
						icon={<ChevronLeftIcon />}
						onPress={() => navigate("/")}
					/>
					<Heading
						color={"#2B2B2B"}
						fontSize={"16px"}
						textAlign={"center"}
						fontWeight={400}
					>
						Популярное
					</Heading>

					<IconButton
						w="44px"
						h="44px"
						borderRadius={"40px"}
						bgColor={"#FFF"}
						icon={<HeartIcon />}
					/>
				</Stack>
				<SimpleGrid columns={2} space={4}>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
					<ProductItem
						product={{
							id: 1,
							isBestSeller: true,
							image: require("../assets/images/nike-air-max.png"),
							name: "Nike Air Max",
							price: 752,
							favorited: true,
						}}
					/>
				</SimpleGrid>
			</Stack>
		</SafeAreaView>
	);
}

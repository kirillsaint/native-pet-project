import AsyncStorage from "@react-native-async-storage/async-storage";
import { Heading, IconButton, SimpleGrid, Stack } from "native-base";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import HeartFilledIcon from "../assets/svg/heart-filled-icon";
import ProductItem from "../components/product-item";
import { products } from "../data";

export default function FavoritePage() {
	const navigate = useNavigate();
	const [favoriteProducts, setFavoriteProducts] = useState<number[]>([]);

	useEffect(() => {
		(async () => {
			const data = await AsyncStorage.getItem("favorite-items");
			const items = JSON.parse(data || "[]");
			setFavoriteProducts(items);
		})();
	}, []);

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
						onPress={() => navigate("/popular-products")}
					/>
					<Heading
						color={"#2B2B2B"}
						fontSize={"16px"}
						textAlign={"center"}
						fontWeight={400}
					>
						Избранное
					</Heading>

					<IconButton
						w="44px"
						h="44px"
						borderRadius={"40px"}
						bgColor={"#F7F7F9"}
						icon={<HeartFilledIcon />}
					/>
				</Stack>
				<SimpleGrid columns={2} space={4}>
					{products
						.filter((product) => favoriteProducts.includes(product.id))
						.map((product) => (
							<ProductItem product={product} key={product.id} />
						))}
				</SimpleGrid>
			</Stack>
		</SafeAreaView>
	);
}

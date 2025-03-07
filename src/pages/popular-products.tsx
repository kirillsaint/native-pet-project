import { Heading, IconButton, SimpleGrid, Stack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import HeartIcon from "../assets/svg/heart-icon";
import ProductItem from "../components/product-item";
import { products } from "../data";

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
						fontWeight={500}
					>
						Популярное
					</Heading>

					<IconButton
						w="44px"
						h="44px"
						borderRadius={"40px"}
						bgColor={"#FFF"}
						icon={<HeartIcon />}
						onPress={() => navigate("/favorite-products")}
					/>
				</Stack>
				<SimpleGrid columns={2} space={4}>
					{products
						.filter((product) => product.isBestSeller)
						.map((product) => (
							<ProductItem product={product} key={product.id} />
						))}
				</SimpleGrid>
			</Stack>
		</SafeAreaView>
	);
}

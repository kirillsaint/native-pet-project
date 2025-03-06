import {
	Box,
	Button,
	Heading,
	IconButton,
	SimpleGrid,
	Stack,
	Text,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate, useParams } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import ProductItem from "../components/product-item";
import { categories, products } from "../data";

export interface ICategory {
	id: string;
	name: string;
}

export default function CategoryPage() {
	const navigate = useNavigate();
	const params = useParams();
	const selectedCategory = categories.find((e) => e.id === params.category);

	if (!selectedCategory) {
		return <Heading>404</Heading>;
	}

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
						{selectedCategory.name}
					</Heading>
					<Box w="44px" />
				</Stack>
				<Stack direction={"column"} space={"19px"}>
					<Heading fontSize={"16px"} fontWeight={400}>
						Категории
					</Heading>
					<Stack direction={"row"} space={"16px"}>
						{categories.map((category) => (
							<Button
								key={category.id}
								h="40px"
								w="100px"
								onPress={() => navigate(`/category/${category.id}`)}
								bgColor={
									selectedCategory.id === category.id ? "#48B2E7" : "#FFF"
								}
								borderRadius={"8px"}
							>
								<Text
									color={
										selectedCategory.id === category.id ? "white" : "#2B2B2B"
									}
								>
									{category.name}
								</Text>
							</Button>
						))}
					</Stack>
				</Stack>
				<SimpleGrid columns={2} space={4}>
					{products
						.filter((product) => {
							return selectedCategory.id === "all"
								? true
								: product.category === selectedCategory.id;
						})
						.map((product) => (
							<ProductItem product={product} key={product.id} />
						))}
				</SimpleGrid>
			</Stack>
		</SafeAreaView>
	);
}

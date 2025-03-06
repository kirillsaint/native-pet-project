import {
	Box,
	Button,
	Heading,
	Icon,
	IconButton,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from "native-base";
import { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";
import CartIcon from "../assets/svg/cart-icon";
import FiltersIcon from "../assets/svg/filters-icon";
import HamburgerIcon from "../assets/svg/hamburger-icon";
import ProductItem from "../components/product-item";
import supabase from "../utils/supabase";

export default function HomePage() {
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const { data: products } = await supabase.get("/products", {
					params: { select: "*" },
				});
				console.log(products);
			} catch (error) {
				/** @TODO error handler */
				console.error(error);
			}
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
					<Icon h="18px" as={<HamburgerIcon />} />
					<Heading
						color={"#2B2B2B"}
						fontSize={"32px"}
						textAlign={"center"}
						fontWeight={400}
					>
						Главная
					</Heading>
					<Box position={"relative"}>
						<IconButton
							w="44px"
							h="44px"
							borderRadius={"40px"}
							bgColor={"#FFF"}
							icon={<CartIcon />}
						/>
						<Box
							position={"absolute"}
							bgColor={"#F87265"}
							w={"8px"}
							h="8px"
							borderRadius={"999px"}
							right={"2px"}
							top={"3px"}
						></Box>
					</Box>
				</Stack>

				<Stack w="full" direction={"row"} space={"14px"}>
					<TextInput style={styles.input} placeholder="Поиск" />
					<IconButton
						borderRadius={"999px"}
						bgColor={"#47B2E7"}
						icon={<FiltersIcon />}
						w={"52px"}
						h="52px"
					></IconButton>
				</Stack>

				<Stack direction={"column"} space={"19px"}>
					<Heading fontSize={"16px"} fontWeight={400}>
						Категории
					</Heading>
					<Stack direction={"row"} space={"16px"}>
						<Button h="40px" w="100px" bgColor={"#FFF"} borderRadius={"8px"}>
							<Text color={"#2B2B2B"}>Все</Text>
						</Button>
						<Button h="40px" w="100px" bgColor={"#FFF"} borderRadius={"8px"}>
							<Text color={"#2B2B2B"}>Outdoor</Text>
						</Button>
						<Button h="40px" w="100px" bgColor={"#FFF"} borderRadius={"8px"}>
							<Text color={"#2B2B2B"}>Tennis</Text>
						</Button>
					</Stack>
				</Stack>

				<Stack direction={"column"} space={"30px"}>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Heading fontSize={"16px"} fontWeight={400}>
							Популярное
						</Heading>
						<Pressable onPress={() => navigate("/popular-products")}>
							<Text fontSize={"12px"} color={"#48B2E7"} fontWeight={400}>
								Все
							</Text>
						</Pressable>
					</Stack>
					<SimpleGrid columns={2} space={4}>
						<ProductItem
							product={{
								id: 1,
								isBestSeller: true,
								image: require("../assets/images/nike-air-max.png"),
								name: "Nike Air Max",
								price: 752,
							}}
						/>
						<ProductItem
							product={{
								id: 1,
								isBestSeller: true,
								image: require("../assets/images/nike-air-max.png"),
								name: "Nike Air Max",
								price: 752,
							}}
						/>
					</SimpleGrid>
				</Stack>
				<Stack direction={"column"} space={"30px"}>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Heading fontSize={"16px"} fontWeight={400}>
							Акции
						</Heading>
						<Pressable>
							<Text fontSize={"12px"} color={"#48B2E7"} fontWeight={400}>
								Все
							</Text>
						</Pressable>
					</Stack>
					<Image
						source={require("../assets/images/promo.png")}
						w={Dimensions.get("window").width - 40}
					/>
				</Stack>
			</Stack>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		paddingLeft: 26,
		paddingRight: 26,
		paddingTop: 14,
		paddingBottom: 14,
		backgroundColor: "#FFF",
		height: 52,
		borderRadius: 14,
		width: Dimensions.get("window").width - 52 - 40 - 14,
	},
});

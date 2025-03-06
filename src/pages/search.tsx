import { Box, Heading, IconButton, SimpleGrid, Stack } from "native-base";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import ProductItem from "../components/product-item";
import { products } from "../data";

export default function SearchPage() {
	const navigate = useNavigate();
	const [search, setSearch] = useState<string>("");

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
						Поиск
					</Heading>

					<Box w="44px" h="44px" />
				</Stack>
				<TextInput
					onPress={() => navigate("/search")}
					style={styles.input}
					placeholder="Поиск"
					value={search}
					onChangeText={(e) => setSearch(e)}
				/>
				<SimpleGrid columns={2} space={4}>
					{products
						.filter((product) =>
							product.name.toLowerCase().includes(search.toLowerCase())
						)
						.map((product) => (
							<ProductItem product={product} key={product.id} />
						))}
				</SimpleGrid>
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
		width: "100%",
	},
});

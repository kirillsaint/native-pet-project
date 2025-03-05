import { Box, Heading, Icon, IconButton, Stack } from "native-base";
import { useEffect } from "react";
import { Dimensions, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartIcon from "../assets/svg/cart-icon";
import FiltersIcon from "../assets/svg/filters-icon";
import HamburgerIcon from "../assets/svg/hamburger-icon";
import supabase from "../utils/supabase";

export default function HomePage() {
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

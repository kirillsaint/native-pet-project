import {
	Box,
	Button,
	Heading,
	Image,
	Pressable,
	Stack,
	Text,
} from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomePage() {
	const [page, setPage] = useState<1 | 2 | 3>(1);

	const LineSelector = () => {
		return (
			<Stack
				w="full"
				justifyContent={"center"}
				direction={"row"}
				alignItems={"center"}
				space={"12px"}
			>
				<Pressable onPress={() => setPage(1)}>
					<Box
						borderRadius={"md"}
						w={page === 1 ? "43px" : "28px"}
						bgColor={page === 1 ? "white" : "#2B6B8B"}
						h="5px"
					></Box>
				</Pressable>
				<Pressable onPress={() => setPage(2)}>
					<Box
						borderRadius={"md"}
						w={page === 2 ? "43px" : "28px"}
						bgColor={page === 2 ? "white" : "#2B6B8B"}
						h="5px"
					></Box>
				</Pressable>
				<Pressable onPress={() => setPage(3)}>
					<Box
						borderRadius={"md"}
						w={page === 3 ? "43px" : "28px"}
						bgColor={page === 3 ? "white" : "#2B6B8B"}
						h="5px"
					></Box>
				</Pressable>
			</Stack>
		);
	};

	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			colors={["#48B2E7", "#44A9DC", "#2B6B8B"]}
			style={styles.linearGradient}
		>
			<SafeAreaView>
				{page === 1 ? (
					<Stack
						h="full"
						pt="40px"
						pb="20px"
						direction={"column"}
						justifyContent={"space-between"}
					>
						<Heading
							fontSize={"30px"}
							textAlign={"center"}
							textTransform={"uppercase"}
							color={"white"}
							fontWeight={400}
						>
							Добро
							{"\n"}
							пожаловать
						</Heading>

						<Stack direction={"column"} space={"20px"}>
							<Image
								width={"full"}
								source={require("../assets/images/leg.png")}
							/>
							<LineSelector />
						</Stack>

						<Box mx="20px">
							<Button
								onPress={() => setPage(2)}
								bgColor={"white"}
								h="50px"
								borderRadius={"13px"}
							>
								<Text color={"#2B2B2B"} fontSize={"14px"}>
									Начать
								</Text>
							</Button>
						</Box>
					</Stack>
				) : page === 2 ? (
					<Stack
						h="full"
						pt="30px"
						pb="20px"
						direction={"column"}
						justifyContent={"space-between"}
					>
						<Stack direction={"column"} space={"60px"}>
							<Image
								width={"full"}
								source={require("../assets/images/boot_1.png")}
							/>
							<Stack direction={"column"} space={"40px"}>
								<Stack
									direction={"column"}
									space={"12px"}
									alignItems={"center"}
									mx={"20px"}
								>
									<Heading
										color={"white"}
										fontSize={"34px"}
										fontWeight={400}
										textAlign={"center"}
									>
										Начнем{"\n"}путешествие
									</Heading>
									<Text
										textAlign={"center"}
										color={"#D8D8D8"}
										fontSize={"16px"}
									>
										Умная, великолепная и модная коллекция Изучите сейчас
									</Text>
								</Stack>
								<LineSelector />
							</Stack>
						</Stack>

						<Box mx="20px">
							<Button
								onPress={() => setPage(3)}
								bgColor={"white"}
								h="50px"
								borderRadius={"13px"}
							>
								<Text color={"#2B2B2B"} fontSize={"14px"}>
									Далее
								</Text>
							</Button>
						</Box>
					</Stack>
				) : (
					<Stack
						h="full"
						pt="30px"
						pb="20px"
						direction={"column"}
						justifyContent={"space-between"}
					>
						<Stack direction={"column"} space={"60px"}>
							<Image
								width={"full"}
								source={require("../assets/images/boot_2.png")}
							/>
							<Stack direction={"column"} space={"40px"}>
								<Stack
									direction={"column"}
									space={"12px"}
									alignItems={"center"}
									mx={"20px"}
								>
									<Heading
										color={"white"}
										fontSize={"34px"}
										fontWeight={400}
										textAlign={"center"}
									>
										У вас есть сила,{"\n"}чтобы
									</Heading>
									<Text
										textAlign={"center"}
										color={"#D8D8D8"}
										fontSize={"16px"}
									>
										В вашей комнате много красивых и привлекательных растений
									</Text>
								</Stack>
								<LineSelector />
							</Stack>
						</Stack>

						<Box mx="20px">
							<Button
								onPress={() => setPage(3)}
								bgColor={"white"}
								h="50px"
								borderRadius={"13px"}
							>
								<Text color={"#2B2B2B"} fontSize={"14px"}>
									Далее
								</Text>
							</Button>
						</Box>
					</Stack>
				)}
			</SafeAreaView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	linearGradient: {
		height: "100%",
		width: "100%",
	},
});

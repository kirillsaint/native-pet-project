import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	Box,
	Button,
	Center,
	FormControl,
	Heading,
	IconButton,
	Stack,
	Text,
} from "native-base";
import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import { AppContext } from "../providers/context-provider";
import auth from "../utils/auth";

export default function LoginPage() {
	const context = useContext(AppContext);

	const [error, setError] = useState<string | null>();

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	useEffect(() => {
		setError(null);
	}, [email, password]);

	return (
		<Stack
			direction={"column"}
			justifyContent={"space-between"}
			height={"full"}
			paddingBottom={"20px"}
			backgroundColor={"white"}
		>
			<Box mx="20px">
				<Stack
					alignItems={"center"}
					direction={"row"}
					justifyContent={"space-between"}
				>
					<IconButton
						w="44px"
						h="44px"
						borderRadius={"40px"}
						bgColor={"#F7F7F9"}
						icon={<ChevronLeftIcon />}
						onPress={() => navigate("/")}
					/>
				</Stack>
				<Stack direction={"column"}>
					<Stack
						direction={"column"}
						space={"8px"}
						textAlign={"center"}
						alignItems={"center"}
					>
						<Heading color={"#2B2B2B"} fontSize={"32px"}>
							Привет!
						</Heading>
						<Text
							color={"#707B81"}
							fontSize={"16px"}
							textTransform={"capitalize"}
							textAlign={"center"}
						>
							Заполните Свои данные или продолжите через социальные медиа
						</Text>
					</Stack>
				</Stack>

				<Stack mt={"35px"} space={"24px"} direction={"column"}>
					<Stack direction={"column"} space={"16px"}>
						<Stack direction={"column"} space={"26px"}>
							<FormControl>
								<Stack space={"12px"}>
									<Text color={"#2B2B2B"} fontSize={"16px"}>
										Email
									</Text>
									<TextInput
										value={email}
										onChangeText={setEmail}
										style={styles.input}
										placeholder="xyz@gmail.com"
									/>
								</Stack>
							</FormControl>
							<FormControl>
								<Stack space={"12px"}>
									<Text color={"#2B2B2B"} fontSize={"16px"}>
										Пароль
									</Text>
									<TextInput
										value={password}
										onChangeText={setPassword}
										style={styles.input}
										secureTextEntry={!showPassword}
										placeholder="••••••••"
									/>
								</Stack>
							</FormControl>
						</Stack>
						<Stack direction={"row"} justifyContent={"space-between"}>
							<Box />
							<Pressable onPress={() => navigate("/reset")}>
								<Text color={"#707B81"} fontSize={"12px"}>
									Восстановить
								</Text>
							</Pressable>
						</Stack>
					</Stack>

					{error && <Text color={"red.500"}>{error}</Text>}

					<Button
						bgColor={"#48B2E7"}
						color={"#F7F7F9"}
						fontSize={"14px"}
						height={"50px"}
						borderRadius={"14px"}
						onPress={async () => {
							if (!email.trim() || !password.trim()) {
								setError("Заполните все поля");
								return;
							}
							if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
								setError("Неправильный формат почты");
								return;
							}
							const data = await auth.login(email, password);
							if (data.error || !data.token) {
								setError(data.description || "Неизвестная ошибка");
								return;
							}
							await AsyncStorage.setItem("access_token", data.token);
							await context.updateProfile();
							navigate("/");
						}}
					>
						Войти
					</Button>
				</Stack>
			</Box>

			<Center>
				<Stack direction={"row"} space={"4px"} alignItems={"center"}>
					<Text color={"#6A6A6A"} fontSize={"16px"}>
						Вы впервые?
					</Text>
					<Pressable onPress={() => navigate("/register")}>
						<Text color={"#2B2B2B"} fontSize={"16px"}>
							Создать пользователя
						</Text>
					</Pressable>
				</Stack>
			</Center>
		</Stack>
	);
}

const styles = StyleSheet.create({
	input: {
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor: "#F7F7F9",
		height: 48,
		borderRadius: 15,
	},
});

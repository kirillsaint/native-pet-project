import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	Box,
	Button,
	FormControl,
	Heading,
	IconButton,
	Stack,
	Text,
} from "native-base";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import { AppContext } from "../providers/context-provider";
import auth from "../utils/auth";

export default function ResetPage() {
	const context = useContext(AppContext);
	const navigate = useNavigate();

	const [state, setState] = useState<"email_required" | "code_required">(
		"email_required"
	);

	const [error, setError] = useState<string | null>();
	const [email, setEmail] = useState<string>("");
	const [code, setCode] = useState<string>("");

	useEffect(() => {
		setError(null);
	}, [email]);

	return (
		<Stack
			direction={"column"}
			justifyContent={"space-between"}
			height={"full"}
			paddingBottom={"20px"}
			backgroundColor={"white"}
		>
			{state === "email_required" ? (
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
							onPress={() => navigate("/login")}
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
								Забыл пароль
							</Heading>
							<Text
								color={"#707B81"}
								fontSize={"16px"}
								textTransform={"capitalize"}
								textAlign={"center"}
							>
								Введите свою учетную запись для сброса
							</Text>
						</Stack>
					</Stack>

					<Stack mt={"35px"} space={"24px"} direction={"column"}>
						<Stack direction={"column"} space={"16px"}>
							<Stack direction={"column"} space={"26px"}>
								<FormControl>
									<Stack space={"12px"}>
										<TextInput
											value={email}
											onChangeText={setEmail}
											style={styles.input}
											placeholder="xyz@gmail.com"
										/>
									</Stack>
								</FormControl>
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
								if (!email.trim()) {
									setError("Заполните все поля");
									return;
								}
								if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
									setError("Неправильный формат почты");
									return;
								}
								const data = await auth.resetPassword(email);
								if (data.error) {
									setError(data.description || "Неизвестная ошибка");
									return;
								}
								setState("code_required");
							}}
						>
							Отправить
						</Button>
					</Stack>
				</Box>
			) : (
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
							onPress={() => navigate("/login")}
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
								OTP проверка
							</Heading>
							<Text
								color={"#707B81"}
								fontSize={"16px"}
								textTransform={"capitalize"}
								textAlign={"center"}
							>
								Пожалуйста, проверьте свою электронную почту, чтобы увидеть код
								подтверждения
							</Text>
						</Stack>
					</Stack>

					<Stack mt={"35px"} space={"24px"} direction={"column"}>
						<Stack direction={"column"} space={"16px"}>
							<Stack direction={"column"} space={"26px"}>
								<FormControl>
									<Stack space={"12px"}>
										<Text color={"#2B2B2B"} fontSize={"21px"}>
											OTP Код
										</Text>
										<TextInput
											value={code}
											onChangeText={async (e) => {
												if (e.length >= 6) {
													const data = await auth.resetPasswordCode(e);
													if (data.error || !data.token) {
														setCode("");
														setError(data.description || "Неизвестная ошибка");
														return;
													}
													await AsyncStorage.setItem(
														"access_token",
														data.token
													);
													await context.updateProfile();
													navigate("/");
													return;
												}
												setCode(e);
											}}
											style={styles.input}
											placeholder="******"
											inputMode="numeric"
										/>
									</Stack>
								</FormControl>
							</Stack>
						</Stack>

						{error && <Text color={"red.500"}>{error}</Text>}
					</Stack>
				</Box>
			)}
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

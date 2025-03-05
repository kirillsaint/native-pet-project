import {
	Box,
	Button,
	Center,
	FormControl,
	Heading,
	Stack,
	Text,
} from "native-base";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<Stack
			direction={"column"}
			justifyContent={"space-between"}
			height={"full"}
			paddingTop={"79px"}
			paddingBottom={"20px"}
			mx="20px"
			backgroundColor={"white"}
		>
			<Box>
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
										style={styles.input}
										secureTextEntry={!showPassword}
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
										style={styles.input}
										secureTextEntry={!showPassword}
										placeholder="••••••••"
									/>
								</Stack>
							</FormControl>
						</Stack>
						<Stack direction={"row"} justifyContent={"space-between"}>
							<Box />
							<Text color={"#707B81"} fontSize={"12px"}>
								Восстановить
							</Text>
						</Stack>
					</Stack>
					<Button
						bgColor={"#48B2E7"}
						color={"#F7F7F9"}
						fontSize={"14px"}
						height={"50px"}
						borderRadius={"14px"}
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
					<Text color={"#2B2B2B"} fontSize={"16px"}>
						Создать пользователя
					</Text>
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

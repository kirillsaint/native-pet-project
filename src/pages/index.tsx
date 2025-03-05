import {
	Box,
	Button,
	Center,
	FormControl,
	Heading,
	Input,
	Stack,
	Text,
} from "native-base";
import { useState } from "react";

export default function HomePage() {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<Stack
			direction={"column"}
			justifyContent={"space-between"}
			height={"full"}
			paddingTop={"79px"}
			paddingBottom={"20px"}
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
									<Input
										padding={"12px 14px"}
										backgroundColor="#F7F7F9"
										variant={"filled"}
										placeholder="xyz@gmail.com"
										height={"48px"}
										borderRadius={"15px"}
									/>
								</Stack>
							</FormControl>
							<FormControl>
								<Stack space={"12px"}>
									<Text color={"#2B2B2B"} fontSize={"16px"}>
										Пароль
									</Text>
									<Input
										padding={"12px 14px"}
										backgroundColor="#F7F7F9"
										variant={"filled"}
										type={showPassword ? "text" : "password"}
										placeholder="••••••••"
										height={"48px"}
										borderRadius={"15px"}
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

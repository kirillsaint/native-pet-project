import {
	Box,
	Button,
	Center,
	FormControl,
	Heading,
	IconButton,
	Image,
	Stack,
	Text,
} from "native-base";
import { useContext, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigate, useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import PenIcon from "../assets/svg/pen-icon";
import { AppContext } from "../providers/context-provider";

export default function ProfilePage() {
	const navigate = useNavigate();
	const context = useContext(AppContext);
	const [edit, setEdit] = useState<boolean>(false);

	if (!context.props.auth?.account) {
		return <Navigate to={"/login"} />;
	}

	return (
		<SafeAreaView>
			<Box mx={"20px"}>
				{!edit ? (
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
							Профиль
						</Heading>

						<IconButton
							w="25px"
							h="25px"
							onPress={() => setEdit(true)}
							borderRadius={"999px"}
							bgColor={"#48B2E7"}
							icon={<PenIcon />}
						/>
					</Stack>
				) : (
					<Center>
						<Button
							h={"32px"}
							w="212px"
							bgColor={"#48B2E7"}
							borderRadius={"14px"}
							pt="0"
							pb="0"
							onPress={() => setEdit(false)}
						>
							<Text color={"#F7F7F9"} fontWeight={400} fontSize={"14px"}>
								Сохранить
							</Text>
						</Button>
					</Center>
				)}

				<Stack
					alignItems={"center"}
					mt={"44px"}
					direction={"column"}
					space={"8px"}
				>
					<Image
						source={context.props.auth.account.image}
						borderRadius={"999px"}
						w="96px"
						h="96px"
					/>
					<Heading fontSize={"20px"} fontWeight={400}>
						{context.props.auth.account.first_name}{" "}
						{context.props.auth.account.last_name}
					</Heading>
				</Stack>
				{!edit ? (
					<Center
						w="full"
						mt="46px"
						bgColor={"#F7F7F0"}
						borderRadius={"16px"}
						p="8px"
					>
						<Image
							source={{
								uri: `https://quickchart.io/barcode?type=code128&text=${context.props.auth.account.id.toString()}&width=${
									Dimensions.get("window").width - 40 - 16
								}&height=51`,
							}}
							w={Dimensions.get("window").width - 40 - 16}
							h="51px"
							alt="bar code"
							bgColor={"white"}
						/>
					</Center>
				) : (
					<Center mt="11px">
						<Text fontSize={"12px"} color={"#48B2E7"}>
							Изменить фото профиля
						</Text>
					</Center>
				)}

				<Stack direction={"column"} space={"17px"} mt="19px">
					<FormControl>
						<Stack space={"12px"}>
							<Text color={"#2B2B2B"} fontSize={"16px"}>
								Имя
							</Text>
							<TextInput
								defaultValue={context.props.auth.account.first_name}
								style={styles.input}
								readOnly={!edit}
							/>
						</Stack>
					</FormControl>
					<FormControl>
						<Stack space={"12px"}>
							<Text color={"#2B2B2B"} fontSize={"16px"}>
								Фамилия
							</Text>
							<TextInput
								defaultValue={context.props.auth.account.last_name}
								style={styles.input}
								readOnly={!edit}
							/>
						</Stack>
					</FormControl>
					<FormControl>
						<Stack space={"12px"}>
							<Text color={"#2B2B2B"} fontSize={"16px"}>
								Адрес
							</Text>
							<TextInput
								defaultValue={context.props.auth.account.address}
								style={styles.input}
								readOnly={!edit}
							/>
						</Stack>
					</FormControl>
					<FormControl>
						<Stack space={"12px"}>
							<Text color={"#2B2B2B"} fontSize={"16px"}>
								Телефон
							</Text>
							<TextInput
								defaultValue={context.props.auth.account.phone}
								style={styles.input}
								readOnly={!edit}
							/>
						</Stack>
					</FormControl>
				</Stack>
			</Box>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: "#F7F7F9",
		height: 48,
		borderRadius: 14,
		width: "100%",
	},
});

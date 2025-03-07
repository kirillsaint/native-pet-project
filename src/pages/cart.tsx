import {
	Box,
	Button,
	Center,
	Heading,
	IconButton,
	Stack,
	Text,
} from "native-base";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";
import ChevronLeftIcon from "../assets/svg/chevron-left-icon";
import CartItem from "../components/cart-item";
import cart, { ICartItem } from "../utils/cart";

export default function CartPage() {
	const [items, setItems] = useState<ICartItem[]>([]);
	const navigate = useNavigate();

	const getItems = async () => {
		setItems(await cart.get());
	};

	useEffect(() => {
		getItems();
	}, []);

	return (
		<SafeAreaView>
			<Box position={"relative"} h="full">
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
							fontWeight={600}
						>
							Корзина
						</Heading>

						<Box w="44px" h="44px" />
					</Stack>

					{items.length !== 0 ? (
						<Stack direction={"column"} space={"16px"}>
							<Heading fontSize={"16px"} fontWeight={500} color={"#2B2B2B"}>
								{items.reduce((value, item) => (value += item.count), 0)}{" "}
								товаров
							</Heading>

							<Stack direction={"column"} space={"14px"}>
								{items.map((item) => (
									<CartItem
										key={item.product.id}
										item={item}
										updateData={getItems}
									/>
								))}
							</Stack>
						</Stack>
					) : (
						<Center>
							<Heading>Корзина пуста</Heading>
						</Center>
					)}
				</Stack>

				{items.length !== 0 && (
					<Stack
						p="20px"
						position={"absolute"}
						bottom={"0"}
						w="full"
						bgColor={"white"}
						direction={"column"}
						space={"32px"}
					>
						<Stack direction={"column"} space={"12px"}>
							<Stack
								alignItems={"center"}
								direction={"row"}
								justifyContent={"space-between"}
							>
								<Text color={"#707B81"} fontSize={"16px"} fontWeight={500}>
									Сумма
								</Text>
								<Text fontSize={"16px"} fontWeight={500}>
									₽
									{items.reduce(
										(value, item) => (value += item.count * item.product.price),
										0
									)}
								</Text>
							</Stack>
							<Stack
								alignItems={"center"}
								direction={"row"}
								justifyContent={"space-between"}
							>
								<Text color={"#707B81"} fontSize={"16px"} fontWeight={500}>
									Доставка
								</Text>
								<Text fontSize={"16px"} fontWeight={500}>
									₽0
								</Text>
							</Stack>
							<Box height={"2px"} bgColor={"#707B81"} opacity={"0.5"} />
							<Stack
								alignItems={"center"}
								direction={"row"}
								justifyContent={"space-between"}
							>
								<Text color={"#707B81"} fontWeight={500} fontSize={"16px"}>
									Итого
								</Text>
								<Text fontSize={"16px"} fontWeight={500} color={"#48B2E7"}>
									₽
									{items.reduce(
										(value, item) => (value += item.count * item.product.price),
										0
									)}
								</Text>
							</Stack>
						</Stack>
						<Button bgColor={"#48B2E7"} borderRadius={"12px"} height={"50px"}>
							<Text fontWeight={500} color={"white"} fontSize={"14px"}>
								Оформить Заказ
							</Text>
						</Button>
					</Stack>
				)}
			</Box>
		</SafeAreaView>
	);
}

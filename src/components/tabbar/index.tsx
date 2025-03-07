import { Box, Center, Stack } from "native-base";
import { useContext } from "react";
import { Pressable } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import BagIcon from "../../assets/svg/bag-icon";
import BellIcon from "../../assets/svg/bell-icon";
import HomeIcon from "../../assets/svg/home-icon";
import TabbarHeartIcon from "../../assets/svg/tabbar-heart-icon";
import UserIcon from "../../assets/svg/user-icon";
import { AppContext } from "../../providers/context-provider";

export default function Tabbar() {
	const context = useContext(AppContext);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<Center
			bgColor={"white"}
			h="100px"
			w="full"
			position={"fixed"}
			bottom={"0"}
			pr="30px"
			pl="30px"
		>
			<Stack direction={"row"} justifyContent={"space-between"} w="full">
				<Stack space={"41px"} alignItems={"center"} direction={"row"}>
					<Pressable onPress={() => navigate("/")}>
						<HomeIcon color={pathname !== "/" ? "#707B81" : "#48B2E7"} />
					</Pressable>
					<Pressable onPress={() => navigate("/favorite-products")}>
						<TabbarHeartIcon
							color={pathname !== "/favorite-products" ? "#707B81" : "#48B2E7"}
						/>
					</Pressable>
				</Stack>
				<Box pb="40px">
					<Pressable onPress={() => navigate("/cart")}>
						<Center
							bgColor={"#48B2E7"}
							borderRadius={"999px"}
							w="56px"
							h="56px"
						>
							<BagIcon color="white" />
						</Center>
					</Pressable>
				</Box>
				<Stack space={"41px"} alignItems={"center"} direction={"row"}>
					<Pressable
						onPress={() => {
							navigate(context.props.auth ? "/profile" : "/login");
						}}
					>
						<BellIcon
							color={pathname !== "/notifications" ? "#707B81" : "#48B2E7"}
						/>
					</Pressable>
					<Pressable
						onPress={() => {
							navigate(context.props.auth ? "/profile" : "/login");
						}}
					>
						<UserIcon
							color={!pathname.startsWith("/profile") ? "#707B81" : "#48B2E7"}
						/>
					</Pressable>
				</Stack>
			</Stack>
		</Center>
	);
}

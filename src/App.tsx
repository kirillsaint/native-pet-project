import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, View } from "native-base";
import React, { useContext, useEffect } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import TabbarProvider from "./components/tabbar/provider";
import HomePage from "./pages";
import CartPage from "./pages/cart";
import CategoryPage from "./pages/category";
import FavoritePage from "./pages/favorite";
import LoginPage from "./pages/login";
import NotificationsPage from "./pages/notifications";
import PopularProductsPage from "./pages/popular-products";
import ProfilePage from "./pages/profile";
import RegisterPage from "./pages/register";
import ResetPage from "./pages/reset";
import SearchPage from "./pages/search";
import WelcomePage from "./pages/welcome";
import AppProvider, { AppContext } from "./providers/context-provider";
import theme from "./theme";

function App(): React.JSX.Element {
	const navigate = useNavigate();
	const context = useContext(AppContext);
	useEffect(() => {
		(async () => {
			const isFirst = await AsyncStorage.getItem("visited_welcome_screen");
			if (isFirst !== "1") {
				navigate("/welcome");
			}
		})();

		context.updateProfile();
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<TabbarProvider>
						<HomePage />
					</TabbarProvider>
				}
			/>
			<Route path="/popular-products" element={<PopularProductsPage />} />
			<Route path="/favorite-products" element={<FavoritePage />} />
			<Route path="/category/:category" element={<CategoryPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route
				path="/profile"
				element={
					<TabbarProvider bgColor="white">
						<ProfilePage />
					</TabbarProvider>
				}
			/>
			<Route
				path="/notifications"
				element={
					<TabbarProvider bgColor="white">
						<NotificationsPage />
					</TabbarProvider>
				}
			/>

			<Route path="/welcome" element={<WelcomePage />} />
			<Route
				path="/login"
				element={
					<SafeAreaView>
						<LoginPage />
					</SafeAreaView>
				}
			/>
			<Route
				path="/register"
				element={
					<SafeAreaView>
						<RegisterPage />
					</SafeAreaView>
				}
			/>
			<Route
				path="/reset"
				element={
					<SafeAreaView>
						<ResetPage />
					</SafeAreaView>
				}
			/>
		</Routes>
	);
}

function Root(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView>
				<NativeRouter>
					<NativeBaseProvider theme={theme}>
						<AppProvider>
							<View
								style={{ backgroundColor: "#F7F7F9", height: "100%" }}
								color={"#2B2B2B"}
							>
								<App />
							</View>
						</AppProvider>
					</NativeBaseProvider>
				</NativeRouter>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}

export default Root;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, View } from "native-base";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import HomePage from "./pages";
import CartPage from "./pages/cart";
import CategoryPage from "./pages/category";
import FavoritePage from "./pages/favorite";
import LoginPage from "./pages/login";
import PopularProductsPage from "./pages/popular-products";
import RegisterPage from "./pages/register";
import SearchPage from "./pages/search";
import WelcomePage from "./pages/welcome";

function App(): React.JSX.Element {
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			const isFirst = await AsyncStorage.getItem("visited_welcome_screen");
			if (isFirst !== "1") {
				navigate("/welcome");
			}
		})();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/popular-products" element={<PopularProductsPage />} />
			<Route path="/favorite-products" element={<FavoritePage />} />
			<Route path="/category/:category" element={<CategoryPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/cart" element={<CartPage />} />
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
		</Routes>
	);
}

function Root(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView>
				<NativeRouter>
					<NativeBaseProvider>
						<View
							style={{ backgroundColor: "#F7F7F9", height: "100%" }}
							color={"#2B2B2B"}
						>
							<App />
						</View>
					</NativeBaseProvider>
				</NativeRouter>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}

export default Root;

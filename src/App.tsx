import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, View } from "native-base";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import HomePage from "./pages";
import CategoryPage from "./pages/category";
import LoginPage from "./pages/login";
import PopularProductsPage from "./pages/popular-products";
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
			<Route path="/category/:category" element={<CategoryPage />} />
			<Route path="/welcome" element={<WelcomePage />} />
			<Route
				path="/login"
				element={
					<SafeAreaView>
						<LoginPage />
					</SafeAreaView>
				}
			/>
		</Routes>
	);
}

function Root(): React.JSX.Element {
	return (
		<SafeAreaProvider>
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
		</SafeAreaProvider>
	);
}

export default Root;

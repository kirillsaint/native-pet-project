import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, View } from "native-base";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import HomePage from "./pages";
import LoginPage from "./pages/login";
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
					<View style={{ backgroundColor: "#F7F7F9" }}>
						<App />
					</View>
				</NativeBaseProvider>
			</NativeRouter>
		</SafeAreaProvider>
	);
}

export default Root;

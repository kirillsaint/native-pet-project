import { NativeBaseProvider, View } from "native-base";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import LoginPage from "./pages/login";
import WelcomePage from "./pages/welcome";

function App(): React.JSX.Element {
	const navigate = useNavigate();

	return (
		<Routes>
			<Route
				path="/login"
				element={
					<SafeAreaView>
						<LoginPage />
					</SafeAreaView>
				}
			/>
			<Route path="/" element={<WelcomePage />} />
		</Routes>
	);
}

function Root(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<NativeRouter>
				<NativeBaseProvider>
					<View style={{ backgroundColor: "white" }}>
						<App />
					</View>
				</NativeBaseProvider>
			</NativeRouter>
		</SafeAreaProvider>
	);
}

export default Root;

import { Button, Heading, NativeBaseProvider, Stack, View } from "native-base";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import HomePage from "./pages";

function App(): React.JSX.Element {
	const navigate = useNavigate();

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route
				path="/"
				element={
					<Stack direction={"column"} space={"3"}>
						<Heading>Test</Heading>
						<Button onPress={() => navigate("/test")}>Тестовая кнопка</Button>
					</Stack>
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
					<SafeAreaView>
						<View mx={"4"} style={{ backgroundColor: "white" }}>
							<App />
						</View>
					</SafeAreaView>
				</NativeBaseProvider>
			</NativeRouter>
		</SafeAreaProvider>
	);
}

export default Root;

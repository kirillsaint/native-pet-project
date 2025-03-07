import { ScrollView, View } from "native-base";
import React from "react";
import Tabbar from ".";

export default function TabbarProvider({
	children,
	bgColor,
}: React.PropsWithChildren & { bgColor?: string }) {
	return (
		<View h={"full"} flex={"1"} bgColor={bgColor}>
			<ScrollView>{children}</ScrollView>

			<Tabbar />
		</View>
	);
}

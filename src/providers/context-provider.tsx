import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from "react";
import { useNavigate } from "react-router-native";
import auth, { IProfile } from "../utils/auth";

export type AppContextType = {
	props: PropsType;
	setProps: Dispatch<SetStateAction<PropsType>>;
	updateProfile: () => void;
};

export type PropsType = {
	auth: {
		token: string;
		account: IProfile;
	} | null;
};

const AppContext = createContext<AppContextType>({
	props: {
		auth: null,
	},
	setProps() {},
	updateProfile() {},
});

export default function AppProvider({ children }: { children: ReactNode }) {
	const [props, setProps] = useState<PropsType>({
		auth: null,
	});
	const navigate = useNavigate();

	return (
		<AppContext.Provider
			value={{
				props,
				setProps,
				async updateProfile() {
					const token =
						props.auth?.token || (await AsyncStorage.getItem("access_token"));
					if (!token) {
						return;
					}
					const response = await auth.profile(token);
					if (response.error || !response.profile) {
						await AsyncStorage.removeItem("access_token");
						navigate("/login");
						return;
					}

					setProps({
						...props,
						auth: { account: response.profile, token: token },
					});
				},
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppContext };

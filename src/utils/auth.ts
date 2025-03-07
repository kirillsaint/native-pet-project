import { ImageSourcePropType } from "react-native";

export interface IProfile {
	id: number;
	image: ImageSourcePropType;
	email: string;
	first_name: string;
	last_name: string;
	address: string;
	phone: string;
}

/**
 * Функция для авторизации в аккаунт используя email + password
 * Возвращает accessToken
 */
async function login(email: string, password: string) {
	// API пустое, поэтому будет псевдо авторизация, которая будет проверять равна ли почта test@gmail.cpm
	if (email !== "test@gmail.com") {
		return {
			error: true,
			description:
				"Неправильный логин или пароль. (Тестовый аккаунт: test@gmail.com, любой пароль)",
		};
	}

	return { error: false, token: "test_token" };
}

async function profile(token: string) {
	if (token !== "test_token") {
		return {
			error: true,
			description: "Вы не авторизованы",
		};
	}

	return {
		error: false,
		profile: {
			id: 1,
			image: require("../assets/images/avatar.png"),
			email: "test@gmail.com",
			first_name: "Alex",
			last_name: "Gubanov",
			address: "1705 East 17th Street, Brooklyn, NY 11229",
			phone: "+12345678901",
		},
	};
}

async function register(_name: string, _email: string, _password: string) {
	return {
		error: false,
		token: "test_token",
	};
}

async function resetPassword(email: string) {
	if (email !== "test@gmail.com") {
		return {
			error: true,
			description: "Такого аккаунта не существует",
		};
	}

	return {
		error: false,
	};
}

async function resetPasswordCode(code: string) {
	if (code !== "123456") {
		return {
			error: true,
			description: "Неверный код (правильный код: 123456)",
		};
	}

	return {
		error: false,
		token: "test_token",
	};
}

export default { login, register, profile, resetPassword, resetPasswordCode };

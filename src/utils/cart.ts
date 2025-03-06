import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct } from "../components/product-item";
import { products } from "../data";

export interface ICartItemRaw {
	product_id: number;
	count: number;
}

export interface ICartItem {
	product: IProduct;
	count: number;
}

async function getRow(): Promise<ICartItemRaw[]> {
	const data = JSON.parse((await AsyncStorage.getItem("cart")) || "[]");

	return data;
}

async function get(): Promise<ICartItem[]> {
	const items = await getRow();

	return items
		.map((item) => {
			const product = products.find((e) => e.id === item.product_id);
			if (!product) {
				return null;
			}
			return { product, count: item.count };
		})
		.filter((e) => e !== null);
}

async function add(product: IProduct) {
	const items = await getRow();
	const productInCart = items.find((e) => e.product_id === product.id);
	if (productInCart) {
		productInCart.count += 1;
	} else {
		items.push({ product_id: product.id, count: 1 });
	}
	console.log(items);
	await AsyncStorage.setItem("cart", JSON.stringify(items));
}

async function remove(product: IProduct, force?: boolean) {
	let items = await getRow();
	const productInCart = items.find((e) => e.product_id === product.id);
	if (productInCart && productInCart.count > 1 && !force) {
		productInCart.count -= 1;
	} else {
		items = items.filter((e) => e.product_id !== product.id);
	}
	console.log(items);
	await AsyncStorage.setItem("cart", JSON.stringify(items));
}

export default { add, get, getRow, remove };

import { IProduct } from "./components/product-item";
import { ICategory } from "./pages/category";

export const categories: ICategory[] = [
	{ id: "all", name: "Все" },
	{ id: "outdoor", name: "Outdoor" },
	{ id: "tennis", name: "Tennis" },
];

export const products: IProduct[] = [
	{
		id: 1,
		isBestSeller: true,
		image: require("./assets/images/nike-air-max.png"),
		name: "Nike Air Max (#1)",
		price: 752,
		category: "outdoor",
	},
	{
		id: 2,
		isBestSeller: false,
		image: require("./assets/images/nike-air-max.png"),
		name: "Nike Air Max (#2)",
		price: 323,
		category: "outdoor",
	},
	{
		id: 3,
		isBestSeller: false,
		image: require("./assets/images/nike-air-max.png"),
		name: "Nike Air Max (#3)",
		price: 699,
		category: "tennis",
	},
	{
		id: 4,
		isBestSeller: true,
		image: require("./assets/images/nike-air-max.png"),
		name: "Nike Air Max (#4)",
		price: 1,
		category: "tennis",
	},
	{
		id: 5,
		isBestSeller: true,
		image: require("./assets/images/nike-air-max.png"),
		name: "Nike Air Max (#5)",
		price: 323,
		category: "outdoor",
	},
];

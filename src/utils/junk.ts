import { CombinedAuthorNameType } from "../components/ChartComponents/LineChart";

type AuthorsDataType = {
	data: {
		authors: {
			authorFirstName: string;
			authorLastName: string;
			books: {
				bookTitle: string;
				bookOrders: {
					orderId: string;
					userId: string;
					bookId: string;
					quantity: number;
					orderDate: string;
					orderAmount: number;
				}[];
			}[];
		}[];
	};
};

type CategoriesDataType = {
	data: {
		categories: {
			categoryName: string;
			books: {
				bookTitle: string;
				bookOrders: {
					orderId: string;
					quantity: number;
					orderDate: string;
					orderAmount: number;
				}[];
			}[];
		}[];
	};
};

type UsersType = {
	data: {
		users: {
			userName: string;
			orders: {
				orderId: string;
				quantity: number;
				orderDate: string;
				orderAmount: number;
				book: {
					bookTitle: string;
				};
			}[];
		}[];
	};
};
export type ChartDataType = {
	name: string;
	books: {
		bookTitle: string;
		bookOrders: {
			orderId: string;
			userId: string;
			bookId: string;
			quantity: number;
			orderDate: string;
			orderAmount: number;
		}[];
	}[];
};

type TrimmedAuthorsDataType = {
	authors: {
		authorFirstName: string;
		authorLastName: string;
		books: {
			bookTitle: string;
			bookOrders: {
				orderId: string;
				userId: string;
				bookId: string;
				quantity: number;
				orderDate: string;
				orderAmount: number;
			}[];
		}[];
	}[];
};

export type TrimmedCategoriesDataType = {
	categories: {
		categoryName: string;
		books: {
			bookTitle: string;
			bookOrders: {
				orderId: string;
				quantity: number;
				orderDate: string;
				orderAmount: number;
			}[];
		}[];
	}[];
};

export type ProcessedUserType = {
	userName: string;
	orders: {
		date: string;
		quantity: number;
		orderId: string;
		amount: number;
	}[];
};

const trimData = () => {};

export const trimAuthorsData = (
	authors: AuthorsDataType
): TrimmedAuthorsDataType => {
	return {
		authors: authors.data.authors.map((author) => author),
	};
};

export const transformAuthorsDataToChartData = (
	authors: CombinedAuthorNameType[]
): ChartDataType[] => {
	return authors.map((author) => {
		return {
			name: author.authorName,
			books: author.books.map((book) => {
				return {
					bookTitle: book.bookTitle,
					bookOrders: [...book.bookOrders],
				};
			}),
		};
	});
};

export const trimCategoriesData = (
	categories: CategoriesDataType
): TrimmedCategoriesDataType => {
	return {
		categories: categories.data.categories.map((category) => category),
	};
};

export const reformatUserData = (users: UsersType): ProcessedUserType[] => {
	return users.data.users.map((user) => {
		const processedOrders = user.orders.map((order) => ({
			...order,
			date: order.orderDate,
			amount: order.orderAmount,
		}));

		return {
			userName: user.userName,
			orders: processedOrders,
		};
	});
};

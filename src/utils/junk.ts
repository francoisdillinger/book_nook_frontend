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

export type CategoriesDataType = {
	data: {
		categories: {
			categoryName: string;
			books: {
				bookTitle: string;
				bookOrders: {
					userId: string;
					bookId: string;
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
		bookTitle?: string;
		bookOrders: {
			orderId: string;
			userId?: string;
			bookId?: string;
			quantity: number;
			orderDate: string;
			orderAmount: number;
		}[];
	}[];
};

export type TrimmedAuthorsDataType = {
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
				userId: string;
				bookId: string;
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

export type TrimmedUserType = {
	userName: string;
	orders: {
		userId?: string;
		bookId?: string;
		orderId: string;
		quantity: number;
		orderDate: string;
		orderAmount: number;
	}[];
};

export type UserOrderData = {
	orderId: string;
	quantity: number;
	orderDate: string;
	orderAmount: number;
};

// export const trimAuthorsData = (
// 	authors: AuthorsDataType
// ): TrimmedAuthorsDataType => {
// 	return {
// 		authors: authors.data.authors.map((author) => author),
// 	};
// };

// export const trimCategoriesData = (
// 	categories: CategoriesDataType
// ): TrimmedCategoriesDataType => {
// 	return {
// 		categories: categories.data.categories.map((category) => category),
// 	};
// };

// export const transformAuthorsDataToChartData = (
// 	authors: CombinedAuthorNameType[]
// ): ChartDataType[] => {
// 	return authors.map((author) => {
// 		return {
// 			name: author.authorName,
// 			books: author.books.map((book) => {
// 				return {
// 					bookTitle: book.bookTitle,
// 					bookOrders: [...book.bookOrders],
// 				};
// 			}),
// 		};
// 	});
// };

// export const transformCategoriesDataToChartData = (
// 	categories: TrimmedCategoriesDataType
// ): ChartDataType[] => {
// 	return categories.categories.map((category) => {
// 		return {
// 			name: category.categoryName,
// 			books: category.books.map((book) => {
// 				return {
// 					bookTitle: book.bookTitle,
// 					bookOrders: [...book.bookOrders],
// 				};
// 			}),
// 		};
// 	});
// };

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

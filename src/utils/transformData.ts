import {
	CombinedAuthorNameType,
	CombinedChartDataOrdersType,
} from "../components/ChartComponents/LineChart";
import { AuthorsDataType } from "../data/authors_data";
import { v4 as uuidv4 } from "uuid";
import {
	TrimmedAuthorsDataType,
	CategoriesDataType,
	TrimmedCategoriesDataType,
	ChartDataType,
	TrimmedUserType,
	UserOrderData,
} from "./junk";
import { UsersType } from "../data/users";
import { filterOutEmptyCategories, filterOutInactiveUsers } from "./filterData";

const trimAuthorsData = (authors: AuthorsDataType): TrimmedAuthorsDataType => {
	return {
		authors: authors.data.authors.map((author) => author),
	};
};

const combineName = (
	authors: TrimmedAuthorsDataType
): CombinedAuthorNameType[] => {
	return authors.authors.map((author) => {
		return {
			authorName: author.authorFirstName + " " + author.authorLastName,
			books: author.books,
		};
	});
};

const authorsDataToChartData = (
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

export const transformAuthorsToChartDataFormat = (
	chartData: AuthorsDataType
): CombinedChartDataOrdersType[] => {
	return combineOrders(
		authorsDataToChartData(combineName(trimAuthorsData(chartData)))
	);
};

const trimCategoriesData = (
	categories: CategoriesDataType
): TrimmedCategoriesDataType => {
	return {
		categories: categories.data.categories.map((category) => category),
	};
};

const categoriesDataToChartData = (
	categories: TrimmedCategoriesDataType
): ChartDataType[] => {
	return categories.categories.map((category) => {
		return {
			name: category.categoryName,
			books: category.books.map((book) => {
				return {
					bookTitle: book.bookTitle,
					bookOrders: [...book.bookOrders],
				};
			}),
		};
	});
};

export const transformCategoriesToChartDataFormat = (
	chartData: CategoriesDataType
): CombinedChartDataOrdersType[] => {
	return filterOutEmptyCategories(
		combineOrders(categoriesDataToChartData(trimCategoriesData(chartData)))
	);
};

export const trimUserData = (users: UsersType): TrimmedUserType[] => {
	return users.data.users.map((user) => user);
};

export const aggregateOrdersByOrderId = (
	users: TrimmedUserType[]
): TrimmedUserType[] => {
	return users.map((user) => {
		// Initialize a Record to track orders by their orderId and aggregate their totals.
		const aggregationById: Record<string, UserOrderData> = {};

		user.orders.forEach((order) => {
			// If an order with the same orderId already exists in the Record, aggregate its totals.
			if (aggregationById[order.orderId]) {
				aggregationById[order.orderId].quantity += order.quantity;
				aggregationById[order.orderId].orderAmount = parseFloat(
					(
						aggregationById[order.orderId].orderAmount + order.orderAmount
					).toFixed(2)
				);
			} else {
				// If an order with the same orderId does not exist, create a new entry in the Record.
				aggregationById[order.orderId] = {
					orderDate: order.orderDate,
					quantity: order.quantity,
					orderId: order.orderId,
					orderAmount: order.orderAmount,
				};
			}
		});

		const aggregatedOrders = Object.values(aggregationById).sort(
			(a, b) =>
				new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
		);

		return {
			userName: user.userName,
			orders: aggregatedOrders,
		};
	});
};

export const combineUserOrders = (
	chartData: TrimmedUserType[]
): CombinedChartDataOrdersType[] => {
	return chartData.map((item) => {
		let totalAmount = 0;
		let totalItems = 0;
		return {
			name: item.userName,
			orders: item.orders.map((order) => {
				totalAmount += order.orderAmount;
				totalItems += order.quantity;
				return { ...order, uniqueId: uuidv4() };
			}),
			totalAmount: parseFloat(totalAmount.toFixed(2)),
			totalItems: totalItems,
		};
	});
};

export const transformUsersToChartDataFormat = (
	chartData: UsersType
): CombinedChartDataOrdersType[] => {
	return combineUserOrders(
		aggregateOrdersByOrderId(filterOutInactiveUsers(trimUserData(chartData)))
	);
};

export const combineOrders = (
	chartData: ChartDataType[]
): CombinedChartDataOrdersType[] => {
	return chartData.map((item) => {
		let totalAmount = 0;
		let totalItems = 0;
		return {
			name: item.name,
			orders: item.books
				.map((book) => {
					return book.bookOrders.map((order) => {
						totalAmount += order.orderAmount;
						totalItems += order.quantity;
						return {
							bookTitle: book.bookTitle,
							...order,
							uniqueId: uuidv4(),
						};
					});
				})
				.flat(),
			totalAmount: parseFloat(totalAmount.toFixed(2)),
			totalItems: totalItems,
		};
	});
};

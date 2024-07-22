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
} from "./junk";

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
	return combineOrders(
		categoriesDataToChartData(trimCategoriesData(chartData))
	);
};

export const combineOrders = (
	chartData: ChartDataType[]
): CombinedChartDataOrdersType[] => {
	let totalAmount = 0;
	let totalItems = 0;
	return chartData.map((item) => {
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

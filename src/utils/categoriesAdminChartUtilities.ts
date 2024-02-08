import {
	ReformattedBookType,
	ReformattedCategoriesBooksType,
} from "../components/ChartComponents/CategoriesChart/CategoriesAdminChart";
import * as d3 from "d3";
import { sixMonthsAgo } from "./usersAdminChartUtilities";

export const getFilteredCategoriesData = (
	filter: string,
	categoryData: ReformattedBookType[]
): ReformattedBookType[] => {
	const now = new Date();

	switch (filter) {
		case "day":
			return categoryData.map((category) => {
				return {
					categoryName: category.categoryName,
					orders: category.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeDay.offset(now, -1)
					),
				};
			});

			break;
		case "week":
			return categoryData.map((category) => {
				return {
					categoryName: category.categoryName,
					orders: category.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeWeek.offset(now, -1)
					),
				};
			});

			break;
		case "month":
			return categoryData.map((category) => {
				return {
					categoryName: category.categoryName,
					orders: category.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeMonth.offset(now, -1)
					),
				};
			});

			break;
		case "half-year":
			return categoryData.map((category) => {
				return {
					categoryName: category.categoryName,
					orders: category.orders.filter(
						(order) =>
							new Date(order.orderDate) >= sixMonthsAgo(now.toISOString())
					),
				};
			});

			break;
		case "year":
			return categoryData.map((category) => {
				return {
					categoryName: category.categoryName,
					orders: category.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeYear.offset(now, -1)
					),
				};
			});

			break;
		case "max":
		default:
			return categoryData;
	}
};

export const previousPeriodOrders = (
	categories: ReformattedBookType[],
	timeFilter: string
) => {
	const currentDate = new Date();
	let startPreviousPeriod: number | Date, endPreviousPeriod: number | Date;

	switch (timeFilter) {
		case "day":
			startPreviousPeriod = d3.timeDay.offset(currentDate, -2);
			endPreviousPeriod = d3.timeDay.offset(currentDate, -1);
			break;
		case "week":
			startPreviousPeriod = d3.timeDay.offset(currentDate, -14);
			endPreviousPeriod = d3.timeDay.offset(currentDate, -7);
			break;
		case "month":
			startPreviousPeriod = d3.timeMonth.offset(currentDate, -2);
			endPreviousPeriod = d3.timeMonth.offset(currentDate, -1);
			break;
		case "half-year":
			startPreviousPeriod = d3.timeMonth.offset(currentDate, -12);
			endPreviousPeriod = d3.timeMonth.offset(currentDate, -6);
			break;
		case "year":
			startPreviousPeriod = d3.timeYear.offset(currentDate, -2);
			endPreviousPeriod = d3.timeYear.offset(currentDate, -1);
			break;
		default:
			return categories;
	}
	return categories.map((category) => ({
		...category,
		orders: category.orders.filter((order) => {
			const orderDate = new Date(order.orderDate);
			const filtered =
				orderDate >= startPreviousPeriod && orderDate <= endPreviousPeriod;
			return filtered;
		}),
	}));
};

export const totalsReducer = (categories: ReformattedBookType[]) => {
	// Reduces all sales amounts
	return categories
		.map((category) =>
			category.orders.reduce(
				(accumulator, order) =>
					accumulator + Math.round(order.orderAmount * 100),
				0
			)
		)
		.reduce((accumulator, categoryTotal) => accumulator + categoryTotal, 0);
};

export const totalOrdersReducer = (categories: ReformattedBookType[]) => {
	// Reduces total number of orders (not total number of books ordered)
	return categories
		.map((category) => category.orders.length)
		.reduce((accumulator, order) => accumulator + order, 0);
};

export const totalOrderedQuantityReducer = (
	categories: ReformattedBookType[]
) => {
	// Reduces total number of individual books ordered (not total number of orders)
	return categories
		.map((category) =>
			category.orders.reduce(
				(accumulator, order) => accumulator + order.quantity,
				0
			)
		)
		.reduce((accumulator, categoryTotal) => accumulator + categoryTotal, 0);
};

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

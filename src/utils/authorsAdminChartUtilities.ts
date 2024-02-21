import * as d3 from "d3";
import { sixMonthsAgo } from "./usersAdminChartUtilities";
import { CombinedAuthorsOrdersType } from "../components/ChartComponents/AuthorsChart/AuthorsAdminLineChart";

export const getFilteredAuthorsData = (
	filter: string,
	authorsData: CombinedAuthorsOrdersType[]
): CombinedAuthorsOrdersType[] => {
	const now = new Date();

	switch (filter) {
		case "day":
			return authorsData.map((author) => {
				return {
					authorName: author.authorName,
					orders: author.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeDay.offset(now, -1)
					),
				};
			});

			break;
		case "week":
			return authorsData.map((author) => {
				return {
					authorName: author.authorName,
					orders: author.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeWeek.offset(now, -1)
					),
				};
			});

			break;
		case "month":
			return authorsData.map((author) => {
				return {
					authorName: author.authorName,
					orders: author.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeMonth.offset(now, -1)
					),
				};
			});

			break;
		case "half-year":
			return authorsData.map((author) => {
				return {
					authorName: author.authorName,
					orders: author.orders.filter(
						(order) =>
							new Date(order.orderDate) >= sixMonthsAgo(now.toISOString())
					),
				};
			});

			break;
		case "year":
			return authorsData.map((author) => {
				return {
					authorName: author.authorName,
					orders: author.orders.filter(
						(order) => new Date(order.orderDate) >= d3.timeYear.offset(now, -1)
					),
				};
			});

			break;
		case "max":
		default:
			return authorsData;
	}
};

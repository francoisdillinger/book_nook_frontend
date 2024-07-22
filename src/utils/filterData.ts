import * as d3 from "d3";
import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";
import { ProcessedUserType, sixMonthsAgo } from "./usersAdminChartUtilities";
import { TrimmedCategoriesDataType, TrimmedUserType } from "./junk";

export const filterByTime = (
	filter: string,
	chartData: CombinedChartDataOrdersType[]
): CombinedChartDataOrdersType[] => {
	const now = new Date();

	switch (filter) {
		case "day":
			return chartData.map((data) => {
				let totalAmount = 0;
				let totalItems = 0;
				return {
					name: data.name,
					orders: data.orders.filter((order) => {
						if (new Date(order.orderDate) >= d3.timeDay.offset(now, -1)) {
							totalAmount += order.orderAmount;
							totalItems += order.quantity;
						}

						return new Date(order.orderDate) >= d3.timeDay.offset(now, -1);
					}),
					totalAmount: totalAmount,
					totalItems: totalItems,
				};
			});

			break;
		case "week":
			return chartData.map((data) => {
				let totalAmount = 0;
				let totalItems = 0;
				return {
					name: data.name,
					orders: data.orders.filter((order) => {
						if (new Date(order.orderDate) >= d3.timeWeek.offset(now, -1)) {
							totalAmount += order.orderAmount;
							totalItems += order.quantity;
						}
						return new Date(order.orderDate) >= d3.timeWeek.offset(now, -1);
					}),
					totalAmount: totalAmount,
					totalItems: totalItems,
				};
			});

			break;
		case "month":
			return chartData.map((data) => {
				let totalAmount = 0;
				let totalItems = 0;
				return {
					name: data.name,
					orders: data.orders.filter((order) => {
						if (new Date(order.orderDate) >= d3.timeMonth.offset(now, -1)) {
							totalAmount += order.orderAmount;
							totalItems += order.quantity;
						}
						return new Date(order.orderDate) >= d3.timeMonth.offset(now, -1);
					}),
					totalAmount: totalAmount,
					totalItems: totalItems,
				};
			});

			break;
		case "half-year":
			return chartData.map((data) => {
				let totalAmount = 0;
				let totalItems = 0;
				return {
					name: data.name,
					orders: data.orders.filter((order) => {
						if (new Date(order.orderDate) >= sixMonthsAgo(now.toISOString())) {
							totalAmount += order.orderAmount;
							totalItems += order.quantity;
						}
						return new Date(order.orderDate) >= sixMonthsAgo(now.toISOString());
					}),
					totalAmount: totalAmount,
					totalItems: totalItems,
				};
			});

			break;
		case "year":
			return chartData.map((data) => {
				let totalAmount = 0;
				let totalItems = 0;
				return {
					name: data.name,
					orders: data.orders.filter((order) => {
						if (new Date(order.orderDate) >= d3.timeYear.offset(now, -1)) {
							totalAmount += order.orderAmount;
							totalItems += order.quantity;
						}
						return new Date(order.orderDate) >= d3.timeYear.offset(now, -1);
					}),
					totalAmount: totalAmount,
					totalItems: totalItems,
				};
			});

			break;
		case "max":
		default:
			return chartData;
	}
};

export const filterOutInactiveUsers = (
	users: TrimmedUserType[]
): TrimmedUserType[] => {
	return users.filter((user) => user.orders.length > 0);
};

export const filterOutEmptyCategories = (
	categories: CombinedChartDataOrdersType[]
): CombinedChartDataOrdersType[] => {
	return categories.filter((category) => category.orders.length > 0);
};

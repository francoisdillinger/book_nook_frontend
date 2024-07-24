import * as d3 from "d3";
import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";
import { sixMonthsAgo } from "./usersAdminChartUtilities";
import { TrimmedUserType } from "./junk";

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

export const filterPreviousPeriodOrders = (
	users: CombinedChartDataOrdersType[],
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
			return users;
	}
	return users.map((user) => ({
		...user,
		orders: user.orders.filter((order) => {
			const orderDate = new Date(order.orderDate);
			const filtered =
				orderDate >= startPreviousPeriod && orderDate <= endPreviousPeriod;
			return filtered;
		}),
	}));
};

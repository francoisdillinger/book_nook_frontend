import * as d3 from "d3";
import { sixMonthsAgo } from "./usersAdminChartUtilities";
// import { CombinedAuthorsOrdersType } from "../components/ChartComponents/AuthorsChart/AuthorsAdminLineChart";
import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";

export const getTimeFilteredData = (
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

export const getFlattenedDates = (
	chartData: CombinedChartDataOrdersType[]
): string[] => {
	return chartData.flatMap((data: CombinedChartDataOrdersType) => {
		return data.orders.map((order) => order.orderDate);
	});
};

export const getFlattenedQuantities = (
	chartData: CombinedChartDataOrdersType[]
): number[] => {
	return chartData.flatMap((data: CombinedChartDataOrdersType) => {
		return data.orders.map((order) => order.quantity);
	});
};

export const getUniqueDatas = (dates: string[]): string[] => {
	return [...new Set(dates)];
};

export const getUniqueQuantities = (quantities: number[]): number[] => {
	return [...new Set(quantities)];
};

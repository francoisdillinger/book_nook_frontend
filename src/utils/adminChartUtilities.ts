// import * as d3 from "d3";
// import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";
// import { sixMonthsAgo } from "./usersAdminChartUtilities";

// export const getTimeFilteredData = (
// 	filter: string,
// 	data: CombinedChartDataOrdersType[]
// ): CombinedChartDataOrdersType[] => {
// 	const now = new Date();

// 	switch (filter) {
// 		case "day":
// 			return data.map((author) => {
// 				let totalAmount = 0;
// 				let totalItems = 0;
// 				return {
// 					name: author.name,
// 					orders: author.orders.filter((order) => {
// 						if (new Date(order.orderDate) >= d3.timeDay.offset(now, -1)) {
// 							totalAmount += order.orderAmount;
// 							totalItems += order.quantity;
// 						}

// 						return new Date(order.orderDate) >= d3.timeDay.offset(now, -1);
// 					}),
// 					totalAmount: totalAmount,
// 					totalItems: totalItems,
// 				};
// 			});

// 			break;
// 		case "week":
// 			return data.map((author) => {
// 				let totalAmount = 0;
// 				let totalItems = 0;
// 				return {
// 					name: author.name,
// 					orders: author.orders.filter((order) => {
// 						if (new Date(order.orderDate) >= d3.timeWeek.offset(now, -1)) {
// 							totalAmount += order.orderAmount;
// 							totalItems += order.quantity;
// 						}
// 						return new Date(order.orderDate) >= d3.timeWeek.offset(now, -1);
// 					}),
// 					totalAmount: totalAmount,
// 					totalItems: totalItems,
// 				};
// 			});

// 			break;
// 		case "month":
// 			return data.map((author) => {
// 				let totalAmount = 0;
// 				let totalItems = 0;
// 				return {
// 					name: author.name,
// 					orders: author.orders.filter((order) => {
// 						if (new Date(order.orderDate) >= d3.timeMonth.offset(now, -1)) {
// 							totalAmount += order.orderAmount;
// 							totalItems += order.quantity;
// 						}
// 						return new Date(order.orderDate) >= d3.timeMonth.offset(now, -1);
// 					}),
// 					totalAmount: totalAmount,
// 					totalItems: totalItems,
// 				};
// 			});

// 			break;
// 		case "half-year":
// 			return data.map((author) => {
// 				let totalAmount = 0;
// 				let totalItems = 0;
// 				return {
// 					name: author.name,
// 					orders: author.orders.filter((order) => {
// 						if (new Date(order.orderDate) >= sixMonthsAgo(now.toISOString())) {
// 							totalAmount += order.orderAmount;
// 							totalItems += order.quantity;
// 						}
// 						return new Date(order.orderDate) >= sixMonthsAgo(now.toISOString());
// 					}),
// 					totalAmount: totalAmount,
// 					totalItems: totalItems,
// 				};
// 			});

// 			break;
// 		case "year":
// 			return data.map((author) => {
// 				let totalAmount = 0;
// 				let totalItems = 0;
// 				return {
// 					name: author.name,
// 					orders: author.orders.filter((order) => {
// 						if (new Date(order.orderDate) >= d3.timeYear.offset(now, -1)) {
// 							totalAmount += order.orderAmount;
// 							totalItems += order.quantity;
// 						}
// 						return new Date(order.orderDate) >= d3.timeYear.offset(now, -1);
// 					}),
// 					totalAmount: totalAmount,
// 					totalItems: totalItems,
// 				};
// 			});

// 			break;
// 		case "max":
// 		default:
// 			return data;
// 	}
// };

// import * as d3 from "d3";
// import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";
// import { sixMonthsAgo } from "./usersAdminChartUtilities";

import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";
import { UsersType } from "../data/users";
import {
	filterByTime,
	filterOutInactiveUsers,
	filterPreviousPeriodOrders,
} from "./filterData";
import {
	combineOrders,
	combineUserOrders,
	trimUserData,
} from "./transformData";
import { ProcessedUserType, UserType } from "./usersAdminChartUtilities";

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

export const doesToolTipOverflowWindow = (e: React.MouseEvent) => {
	const tooltipWidth = 150; // Set maximum expected width of tooltip
	const tooltipHeight = 50; // Set maximum expected height of tooltip
	const windowPadding = 10; // Padding from the edge of the window

	// Calculate position
	let x = e.pageX + 10;
	let y = e.pageY + 10;

	// Adjust if tooltip overflows the window
	if (x + tooltipWidth > window.innerWidth - windowPadding) {
		x = e.pageX - tooltipWidth - windowPadding;
	}
	if (y + tooltipHeight > window.innerHeight - windowPadding) {
		y = e.pageY - tooltipHeight - windowPadding;
	}
	return { x: x, y: y };
};

// export const reformatUserData = (users: UsersType): ProcessedUserType[] => {
// 	return users.data.users.map((user) => {
// 		const processedOrders = user.orders.map((order) => ({
// 			...order,
// 			date: order.orderDate,
// 			amount: order.orderAmount,
// 		}));

// 		return {
// 			userName: user.userName,
// 			orders: processedOrders,
// 		};
// 	});
// };

export const calculatePercentageChange = (
	currentValue: number,
	previousValue: number
) => {
	if (previousValue === 0) {
		// Handle division by zero, if previous value is 0 and current is greater, it could be considered as 100% increase
		return currentValue > 0 ? 100 : 0;
	}

	return ((currentValue - previousValue) / previousValue) * 100;
};

// export const totalsReducer = (user: ProcessedUserType[]) => {
// 	// Reduces all sales amounts
// 	return user
// 		.map((user) =>
// 			user.orders.reduce(
// 				(accumulator, order) => accumulator + Math.round(order.amount * 100),
// 				0
// 			)
// 		)
// 		.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
// };

// export const totalOrdersReducer = (user: ProcessedUserType[]) => {
// 	// Reduces total number of orders (not total number of books ordered)
// 	return user
// 		.map((user) => user.orders.length)
// 		.reduce((accumulator, order) => accumulator + order, 0);
// };

// export const totalOrderedQuantityReducer = (user: ProcessedUserType[]) => {
// 	// Reduces total number of individual books ordered (not total number of orders)
// 	return user
// 		.map((user) =>
// 			user.orders.reduce(
// 				(accumulator, order) => accumulator + order.quantity,
// 				0
// 			)
// 		)
// 		.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
// };

export const totalsReducer = (user: CombinedChartDataOrdersType[]) => {
	// Reduces all sales amounts
	console.log("---------------------------");
	return user.reduce((accumulator, userTotal) => {
		console.log(`User: ${userTotal.name} Amount: ${userTotal.totalAmount}`);
		return accumulator + userTotal.totalAmount;
	}, 0);
};

export const totalOrdersReducer = (user: CombinedChartDataOrdersType[]) => {
	// Reduces total number of orders (not total number of books ordered)
	return user.reduce(
		(accumulator, order) => accumulator + order.orders.length,
		0
	);
};

export const totalOrderedQuantityReducer = (
	user: CombinedChartDataOrdersType[]
) => {
	// Reduces total number of individual books ordered (not total number of orders)
	return user.reduce(
		(accumulator, userTotal) => accumulator + userTotal.totalItems,
		0
	);
};

export const getSalesTotals = (
	previousFiltered: CombinedChartDataOrdersType[],
	filteredUserchart: CombinedChartDataOrdersType[]
) => {
	const prevTotal = totalsReducer(previousFiltered);
	const prevNumOrders = totalOrdersReducer(previousFiltered);
	const total = totalsReducer(filteredUserchart);
	const totalNumOrders = totalOrdersReducer(filteredUserchart);

	console.log("PrevTotal: ", prevTotal);
	console.log("Totals: ", total);
	console.log("TotalNumOrders: ", totalNumOrders);
	console.log("prevNumOrders: ", prevNumOrders);

	return {
		totalSales: {
			currentTotal: total,
			previousTotal: prevTotal,
			totalChange: calculatePercentageChange(total, prevTotal),
		},
		avgSales: {
			currentAverage: total / totalNumOrders || 0,
			previousAverage: prevTotal / prevNumOrders || 0,
			totalAverage:
				calculatePercentageChange(
					total / totalNumOrders,
					prevTotal / prevNumOrders
				) || 0,
		},
	};
};

export const getBookTotals = (
	previousFiltered: CombinedChartDataOrdersType[],
	filteredUserchart: CombinedChartDataOrdersType[]
) => {
	const prevNumOrders = totalOrdersReducer(previousFiltered);
	const prevTotalBooksOrdered = totalOrderedQuantityReducer(previousFiltered);
	const totalNumOrders = totalOrdersReducer(filteredUserchart);
	const totalBooksOrdered = totalOrderedQuantityReducer(filteredUserchart);

	console.log("PrevTotalBooks: ", prevTotalBooksOrdered);
	console.log("TotalBooks: ", totalBooksOrdered);
	console.log("TotalNumOrders: ", totalNumOrders);
	console.log("prevNumOrders: ", prevNumOrders);

	return {
		totalBooks: {
			currentTotal: totalBooksOrdered,
			previousTotal: prevTotalBooksOrdered,
			totalChange: calculatePercentageChange(
				totalBooksOrdered,
				prevTotalBooksOrdered
			),
		},
		avgBooks: {
			currentAverage: totalBooksOrdered / totalNumOrders || 0,
			previousAverage: prevTotalBooksOrdered / prevNumOrders || 0,
			totalAverage:
				calculatePercentageChange(
					totalBooksOrdered / totalNumOrders,
					prevTotalBooksOrdered / prevNumOrders
				) || 0,
		},
	};
};

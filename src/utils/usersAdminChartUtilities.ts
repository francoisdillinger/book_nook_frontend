import { UsersType } from "../data/users";
import * as d3 from "d3";

export type TotalSalesType = {
	currentTotal: number;
	previousTotal: number;
	totalChange: number;
};

export type AverageSalesType = {
	currentAverage: number;
	previousAverage: number;
	totalAverage: number;
};

export type TotalBooksType = TotalSalesType;

export type AverageBooksType = AverageSalesType;

export type UserType = {
	userName: string;
	orders: {
		orderId: string;
		quantity: number;
		orderDate: string; // in 'YYYY-MM-DD' format
		orderAmount: number;
		book: {
			bookTitle: string;
		};
	}[];
};

export type ProcessedOrder = {
	date: string;
	quantity: number;
	orderId: string;
	amount: number;
};

export type ProcessedUserType = {
	userName: string;
	orders: ProcessedOrder[];
};

export const reformatUserData = (users: UsersType): ProcessedUserType[] => {
	return users.data.users.map((user) => {
		const processedOrders = user.orders.map((order) => ({
			...order,
			date: order.orderDate,
			amount: order.orderAmount,
		}));

		return {
			userName: user.userName,
			orders: processedOrders,
		};
	});
};

const processDataForLineChart = (
	users: ProcessedUserType[]
): ProcessedUserType[] => {
	return users.map((user) => {
		const aggregationByDateAndId: Record<string, ProcessedOrder> = {};

		user.orders.forEach((order) => {
			const combinedKey = `${order.date}-${order.orderId}`;

			if (aggregationByDateAndId[combinedKey]) {
				aggregationByDateAndId[combinedKey].quantity += order.quantity;
				aggregationByDateAndId[combinedKey].amount += order.amount;
			} else {
				aggregationByDateAndId[combinedKey] = {
					date: order.date, // Keeping date as string
					quantity: order.quantity,
					orderId: order.orderId,
					amount: order.amount,
				};
			}
		});

		// Sort by date string. Assumes date strings are in a format that allows lexicographical sorting (like 'YYYY-MM-DD')
		const aggregatedOrders = Object.values(aggregationByDateAndId).sort(
			(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
		);

		return {
			userName: user.userName,
			orders: aggregatedOrders,
		};
	});
};

const sixMonthsAgo = (date: string) => {
	let pastDate = new Date(date);
	pastDate.setMonth(pastDate.getMonth() - 6);
	return pastDate;
};

export const getFilteredData = (
	filter: string,
	userData: ProcessedUserType[]
): ProcessedUserType[] => {
	const now = new Date();

	switch (filter) {
		case "day":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						userName: user.userName,
						orders: user.orders.filter(
							(order) => new Date(order.date) >= d3.timeDay.offset(now, -1)
						),
					};
				})
			);
			break;
		case "week":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						userName: user.userName,
						orders: user.orders.filter(
							(order) => new Date(order.date) >= d3.timeWeek.offset(now, -1)
						),
					};
				})
			);
			break;
		case "month":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						userName: user.userName,
						orders: user.orders.filter(
							(order) => new Date(order.date) >= d3.timeMonth.offset(now, -1)
						),
					};
				})
			);
			break;
		case "half-year":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						userName: user.userName,
						orders: user.orders.filter(
							(order) => new Date(order.date) >= sixMonthsAgo(now.toISOString())
						),
					};
				})
			);
			break;
		case "year":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						userName: user.userName,
						orders: user.orders.filter(
							(order) => new Date(order.date) >= d3.timeYear.offset(now, -1)
						),
					};
				})
			);
			break;
		case "max":
		default:
			return processDataForLineChart(userData);
	}
};

export const previousTime = (timeFilter: string) => {
	switch (timeFilter) {
		case "day":
			return "yesterday";
			break;
		case "month":
			return "last month";
			break;
		case "week":
			return "last week";
			break;
		case "half-year":
			return "previous six months";
			break;
		case "year":
			return "last year";
			break;
		case "max":
			return "before we existed";
			break;
		default:
			return " ";
			break;
	}
};

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

export const previousPeriodOrders = (
	users: ProcessedUserType[],
	timeFilter: string
) => {
	const currentDate = new Date();
	let startPreviousPeriod, endPreviousPeriod;

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
			const orderDate = new Date(order.date);
			const filtered =
				orderDate >= startPreviousPeriod && orderDate <= endPreviousPeriod;
			return filtered;
		}),
	}));
};

export const totalsReducer = (user: ProcessedUserType[]) => {
	// Reduces all sales amounts
	return user
		.map((user) =>
			user.orders.reduce(
				(accumulator, order) => accumulator + Math.round(order.amount * 100),
				0
			)
		)
		.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
};

import { UsersType } from "../data/users";
import * as d3 from "d3";

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

import { UsersType } from "../data/users";
import * as d3 from "d3";

export type UserType = {
	userName: string;
	orders: {
		orderId: string;
		quantity: number;
		orderDate: string; // in 'YYYY-MM-DD' format
		book: {
			bookTitle: string;
		};
	}[];
};

export type ProcessedOrder = {
	date: string;
	quantity: number;
	orderId: string;
};

export type ProcessedUserType = {
	userName: string;
	orders: ProcessedOrder[];
};

export const reformatUserData = (users: UsersType): UserType[] => {
	return users.data.users.map((user) => user);
};

const processDataForLineChart = (users: UserType[]): ProcessedUserType[] => {
	return users.map((user) => {
		const aggregationByDateAndId: Record<string, ProcessedOrder> = {};

		user.orders.forEach((order) => {
			const combinedKey = `${order.orderDate}-${order.orderId}`;

			if (aggregationByDateAndId[combinedKey]) {
				aggregationByDateAndId[combinedKey].quantity += order.quantity;
			} else {
				aggregationByDateAndId[combinedKey] = {
					date: order.orderDate, // Keeping date as string
					quantity: order.quantity,
					orderId: order.orderId,
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
	userData: UserType[]
): ProcessedUserType[] => {
	const now = new Date();

	switch (filter) {
		case "day":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						...user,
						orders: user.orders.filter(
							(order) => new Date(order.orderDate) >= d3.timeDay.offset(now, -1)
						),
					};
				})
			);
			break;
		case "week":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						...user,
						orders: user.orders.filter(
							(order) =>
								new Date(order.orderDate) >= d3.timeWeek.offset(now, -1)
						),
					};
				})
			);
			break;
		case "month":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						...user,
						orders: user.orders.filter(
							(order) =>
								new Date(order.orderDate) >= d3.timeMonth.offset(now, -1)
						),
					};
				})
			);
			break;
		case "half-year":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						...user,
						orders: user.orders.filter(
							(order) =>
								new Date(order.orderDate) >= sixMonthsAgo(now.toISOString())
						),
					};
				})
			);
			break;
		case "year":
			return processDataForLineChart(
				userData.map((user) => {
					return {
						...user,
						orders: user.orders.filter(
							(order) =>
								new Date(order.orderDate) >= d3.timeYear.offset(now, -1)
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

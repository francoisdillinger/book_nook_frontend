import { useEffect, useState } from "react";
import TableData from "./TableData";
import { orders_data, OrdersType } from "../data/orders_data";

type IndividualOrderType = {
	bookId: number;
	bookTitle: string;
	isbn: string;
	orderAmount: string;
	quantity: number;
};

type ReformatedOrdersType = {
	orderId: string;
	userId: number;
	firstName: string;
	lastName: string;
	orderDate: string;
	totalAmount: number;
	totalQuantity: number;
	orders: IndividualOrderType[];
};

type TrimmedOrdersType = {
	orderId: string;
	userId: number;
	bookId: number;
	quantity: number;
	orderDate: string;
	orderAmount: number;
	user: {
		userName: string;
		firstName: string;
		lastName: string;
	};
	book: {
		bookTitle: string;
		isbn: string;
	};
};

const trimOrders = (orders: OrdersType): TrimmedOrdersType[] => {
	return [...orders.data.orders];
};

const reformateOrders = (
	orders: TrimmedOrdersType[]
): ReformatedOrdersType[] => {
	const orderIds = orders.map((order) => order.orderId);
	const removedDuplicateIds = [...new Set(orderIds)];
	// console.log("Ids: ", new Set(orderIds));
	// console.log("Ids: ", removedDuplicateIds);

	const newOrders = removedDuplicateIds.map((id) => {
		const matchingOrders = orders.filter((order) => id === order.orderId);
		const reformatedOrder = {
			orderId: matchingOrders[0].orderId,
			userId: matchingOrders[0].userId,
			firstName: matchingOrders[0].user.firstName,
			lastName: matchingOrders[0].user.lastName,
			orderDate: matchingOrders[0].orderDate,
		};
		console.log("Matching Orders: ", matchingOrders);
	});
};

export default function AdminOrders() {
	const trimmmedOrders = trimOrders(orders_data);
	const orderedByDate = trimmmedOrders.sort(
		(a, b) => new Date(a.orderDate) - new Date(b.orderDate)
	);
	reformateOrders(orderedByDate);
	// console.log("Trimmed: ", trimmmedOrders);
	// console.log("Orders: ", orderedByDate);
	return (
		<div className="">
			<div className="">
				<table className="table-auto w-3/4 m-auto">
					<thead className="bg-gray-100 text-gray-400 text-xl text-center h-12">
						<tr className="">
							<th className="font-semibold rounded-s-lg">Order ID</th>
							<th className="font-semibold">User Name</th>
							<th className="font-semibold">Total</th>
							<th className="font-semibold">Status</th>

							<th className="font-semibold rounded-e-lg">Expand</th>
						</tr>
					</thead>
					<tbody className="text-md text-gray-500 text-center">
						<TableData />
						<TableData />
						<TableData />
					</tbody>
				</table>
			</div>
		</div>
	);
}

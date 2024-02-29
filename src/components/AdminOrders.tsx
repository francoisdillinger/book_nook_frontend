import { useEffect, useState } from "react";
import TableData from "./TableData";
import { orders_data, OrdersType } from "../data/orders_data";

type IndividualOrderType = {
	bookTitle: string;
	isbn: string;
	orderAmount: string;
};

type ReformatedOrdersType = {
	orderId: string;
	userId: number;
	firstName: string;
	lastName: string;
	orderDate: string;
	totalAmount: number;
	orders: IndividualOrderType[];
};

type TrimmedOrdersType = {
	orders: {
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
	}[];
};

export default function AdminOrders() {
	const trimmmedOrders = [...orders_data.data.orders];
	const orderedByDate = trimmmedOrders.sort(
		(a, b) => new Date(a.orderDate) - new Date(b.orderDate)
	);
	// console.log("Trimmed: ", trimmmedOrders);
	console.log("Orders: ", orderedByDate);
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

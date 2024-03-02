import { useEffect, useState } from "react";
import TableData from "./TableData";
import { orders_data, OrdersType } from "../data/orders_data";
import SearchBar from "./SearchBar";

type IndividualOrderType = {
	bookId: number;
	bookTitle: string;
	isbn: string;
	orderAmount: number;
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

	const newOrders = removedDuplicateIds.map((id) => {
		const matchingOrders = orders.filter((order) => id === order.orderId);
		const reformatedOrder = {
			orderId: matchingOrders[0].orderId,
			userId: matchingOrders[0].userId,
			firstName: matchingOrders[0].user.firstName,
			lastName: matchingOrders[0].user.lastName,
			orderDate: matchingOrders[0].orderDate,
			totalAmount: matchingOrders.reduce(
				(accumulator, order) => accumulator + order.orderAmount,
				0
			),
			totalQuantity: matchingOrders.reduce(
				(accumulator, order) => accumulator + order.quantity,
				0
			),
			orders: matchingOrders.map((order) => {
				return {
					bookId: order.bookId,
					bookTitle: order.book.bookTitle,
					isbn: order.book.isbn,
					orderAmount: order.orderAmount,
					quantity: order.quantity,
				};
			}),
		};
		return reformatedOrder;
		// console.log("Matching Orders: ", matchingOrders);
		// console.log("Reformatted Order: ", reformatedOrder);
	});
	// console.log("Orders: ", newOrders);
	return newOrders;
};

const changeHandler = (inputValue: string) => {
	console.log(inputValue);
};

export default function AdminOrders() {
	const [orders, setOrders] = useState<ReformatedOrdersType[] | null>();

	useEffect(() => {
		const trimmmedOrders = trimOrders(orders_data);
		const orderedByDate = trimmmedOrders.sort(
			(a, b) => new Date(a.orderDate) - new Date(b.orderDate)
		);
		const reformattedOrders = reformateOrders(orderedByDate);
		setOrders(reformattedOrders);
	}, [orders_data]);

	// console.log("Trimmed: ", trimmmedOrders);
	// console.log("Orders: ", orderedByDate);
	return (
		<div className="">
			<div className="w-3/4 m-auto py-4">
				<div className="w-1/2">
					<SearchBar
						options={["OrderId", "User"]}
						placeHolder="Search by Order ID or User"
						selectStyles="font-semibold form-select block w-24 py-2 px-3 border border-gray-300 bg-gray-100 text-gray-400 rounded-l-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
						buttonStyles="p-2.5 z-10 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						changeHandler={changeHandler}
					/>
				</div>
			</div>
			<div className="">
				<table className="table-auto w-3/4 m-auto">
					<thead className="bg-gray-100 text-gray-400 text-xl h-12">
						<tr className="">
							<th className="font-semibold rounded-s-lg">Order ID</th>
							<th className="font-semibold">User Name</th>
							<th className="font-semibold">Total</th>
							<th className="font-semibold">Status</th>

							<th className="font-semibold rounded-e-lg">Expand</th>
						</tr>
					</thead>
					<tbody className="text-md text-gray-500 text-center">
						{orders != null &&
							orders.map((order) => (
								<TableData
									key={order.orderId}
									orderId={order.orderId}
									firstName={order.firstName}
									lastName={order.lastName}
									total={order.totalAmount}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

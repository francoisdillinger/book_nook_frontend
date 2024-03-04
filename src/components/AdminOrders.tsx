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

export type ReformatedOrdersType = {
	orderId: string;
	userId: number;
	firstName: string;
	lastName: string;
	orderDate: string;
	totalAmount: number;
	orderStatus: string;
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
	orderStatus: string;
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

type OrdersSortType = {
	sortBy:
		| "Date: Newest"
		| "Date: Oldest"
		| "Total: Ascending"
		| "Total: Descending"
		| "Status: Processing"
		| "Status: Shipped"
		| "Status: Delivered";
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
			orderStatus: matchingOrders[0].orderStatus,
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

const sortedOrders = (
	orders: ReformatedOrdersType[],
	sortBy: OrdersSortType
) => {
	switch (sortBy.sortBy) {
		case "Date: Newest":
			return orders.sort(
				(a, b) =>
					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
			);
		case "Date: Oldest":
			return orders.sort(
				(a, b) =>
					new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
			);
		case "Total: Ascending":
			return orders.sort((a, b) => b.totalAmount - a.totalAmount);
		case "Total: Descending":
			return orders.sort((a, b) => a.totalAmount - b.totalAmount);
		case "Status: Processing":
			// console.log("Sort By: ", sortBy.sortBy)
			return orders.filter((order) => order.orderStatus === "Processing");
		case "Status: Shipped":
			return orders.filter((order) => order.orderStatus === "Shipped");
		case "Status: Delivered":
			return orders.filter((order) => order.orderStatus === "Delivered");
		default:
			return orders; // Return unsorted if no match (or handle as needed)
	}
};

export default function AdminOrders() {
	const options = [
		"Date: Newest",
		"Date: Oldest",
		"Total: Ascending",
		"Total: Descending",
		"Status: Processing",
		"Status: Shipped",
		"Status: Delivered",
	];
	const [orders, setOrders] = useState<ReformatedOrdersType[] | null>();
	// const [sortBy, setSortBy] = useState<OrdersSortType>({
	// 	sortBy: "Date: Newest",
	// });
	const [filteredOrders, setFilteredOrders] = useState<
		ReformatedOrdersType[] | null
	>();
	const [searchValues, setSearchValues] = useState({
		option: "OrderId",
		value: "",
	});

	useEffect(() => {
		const trimmmedOrders = trimOrders(orders_data);
		const orderedByDate = trimmmedOrders.sort(
			(a, b) =>
				new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
		);
		const reformattedOrders = reformateOrders(orderedByDate);
		setOrders(reformattedOrders);
		setFilteredOrders(reformattedOrders);
	}, [orders_data]);

	const selectOptionsHandler = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFilteredOrders(
			filteredOrders
				? sortedOrders([...filteredOrders], {
						sortBy: event.target.value as OrdersSortType["sortBy"],
				  })
				: []
		);
	};

	const optionsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValues({ option: event.target.value, value: "" });
		setFilteredOrders(orders);
	};

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValues({ ...searchValues, value: event.target.value });
		setFilteredOrders(
			orders?.filter((order) => {
				if (searchValues.option === "OrderId") {
					return order.orderId.includes(event.target.value);
				} else if (searchValues.option === "User") {
					const name = order.firstName + " " + order.lastName;
					return name.includes(event.target.value);
				}
			})
		);
	};

	const clickHandler = () => {
		setSearchValues({ ...searchValues, value: "" });
	};

	// console.log("Trimmed: ", trimmmedOrders);
	// console.log("Orders: ", orderedByDate);
	// console.log(sortBy);
	console.log(filteredOrders);
	return (
		<div className="">
			<div className="w-3/4 m-auto py-4 flex justify-between">
				<div className="w-1/2">
					<SearchBar
						options={["OrderId", "User"]}
						placeHolder="Search by Order ID or User"
						selectStyles="font-semibold form-select block w-24 py-2 px-3 border border-gray-300 bg-gray-100 text-gray-400 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
						buttonStyles="p-2.5 z-10 text-sm font-medium h-full text-white bg-logo rounded-r-lg border border-logo opacity-80 hover:opacity-100 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-logo dark:hover:opacity-100 dark:focus:ring-blue-800"
						values={searchValues}
						optionsHandler={optionsHandler}
						inputHandler={inputHandler}
						clickHandler={clickHandler}
					/>
				</div>
				<div className="">
					<select
						id="book-selector"
						className="font-semibold form-select block py-2.5 px-3 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
						onChange={(event) => selectOptionsHandler(event)}
					>
						{/* <option>All</option>
						<option>Author</option>
						<option>Title</option> */}
						{options.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
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
						{filteredOrders != null &&
							filteredOrders.map((order) => (
								<TableData
									key={order.orderId}
									orderId={order.orderId}
									firstName={order.firstName}
									lastName={order.lastName}
									total={order.totalAmount}
									orderStatus={order.orderStatus}
									filteredOrders={filteredOrders}
									setFilteredOrders={setFilteredOrders}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

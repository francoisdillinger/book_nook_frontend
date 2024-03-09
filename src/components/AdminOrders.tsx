import { useEffect, useState } from "react";
import TableData from "./TableData";
import { orders_data, OrdersType } from "../data/orders_data";
import SearchBar from "./SearchBar";

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
	});
	// console.log("Orders: ", newOrders);
	return newOrders;
};

const sortOrders = (
	orders: ReformatedOrdersType[],
	sortOption: OrdersSortType
) => {
	switch (sortOption.sortOption) {
		case "Date: Newest":
			return [...orders].sort(
				(a, b) =>
					new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
			);
		case "Date: Oldest":
			return [...orders].sort(
				(a, b) =>
					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
			);
		case "Total: Ascending":
			return [...orders].sort((a, b) => a.totalAmount - b.totalAmount);
		case "Total: Descending":
			return [...orders].sort((a, b) => b.totalAmount - a.totalAmount);

		case "Status: Processing":
			return [...orders].filter((order) => order.orderStatus === "Processing");
		case "Status: Shipped":
			return [...orders].filter((order) => order.orderStatus === "Shipped");
		case "Status: Delivered":
			return [...orders].filter((order) => order.orderStatus === "Delivered");
		default:
			return [...orders]; // Return unsorted if no match (or handle as needed)
	}
};

const searchedOrders = (
	orders: ReformatedOrdersType[],
	searchValues: OrdersSearchType
) => {
	return orders.filter((order) => {
		if (searchValues.option === "OrderId") {
			return order.orderId.includes(searchValues.value);
		} else if (searchValues.option === "User") {
			const name = order.firstName + " " + order.lastName;
			return name.includes(searchValues.value);
		}
	});
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
	const [sortOption, setSortOption] = useState<OrdersSortType>({
		sortOption: "Date: Newest",
	});
	const [displayedOrders, setDisplayedOrders] = useState<
		ReformatedOrdersType[] | null
	>();
	const [searchValues, setSearchValues] = useState<OrdersSearchType>({
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
		setDisplayedOrders(reformattedOrders);
	}, [orders_data]);

	useEffect(() => {
		const sortedOrders = sortOrders(orders ? orders : [], sortOption);
		const searchedResults =
			searchValues.value.length > 0
				? searchedOrders(sortedOrders, searchValues)
				: sortedOrders;
		setDisplayedOrders(searchedResults);
	}, [orders, searchValues, sortOption]);

	const selectOptionsHandler = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSortOption({
			sortOption: event.target.value as OrdersSortType["sortOption"],
		});
	};

	const optionsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValues({
			option: event.target.value as "OrderId" | "User",
			value: "",
		});
	};

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValues({ ...searchValues, value: event.target.value });
	};

	const clickHandler = () => {
		setSearchValues({ ...searchValues, value: "" });
	};

	// console.log("Trimmed: ", trimmmedOrders);
	// console.log("Orders: ", orderedByDate);
	// console.log("Sort by: ", sortOption);
	// console.log(displayedOrders);
	return (
		<div className="">
			<div className="w-full p-4 md:w-3/4 m-auto md:p-0 md:py-4 flex-wrap md:flex md:justify-between">
				<div className="w-full my-2 md:my-0 md:w-1/2">
					<SearchBar
						options={["OrderId", "User"]}
						placeHolder="Search by Order ID or User"
						selectStyles="font-semibold form-select block w-36 md:w-24 py-2 px-3 border border-gray-300 bg-gray-100 text-gray-400 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
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
						className="w-full md:w-fitfont-semibold form-select block py-2.5 px-3 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
						onChange={(event) => selectOptionsHandler(event)}
					>
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
							<th className="font-semibold hidden md:table-cell">Total</th>
							<th className="font-semibold">Status</th>

							<th className="font-semibold rounded-e-lg">Expand</th>
						</tr>
					</thead>
					<tbody className="text-md text-gray-500 text-center">
						{displayedOrders &&
							displayedOrders != null &&
							displayedOrders.map((order) => (
								<TableData
									key={order.orderId}
									orderId={order.orderId}
									firstName={order.firstName}
									lastName={order.lastName}
									total={order.totalAmount}
									orderStatus={order.orderStatus}
									orders={orders}
									setOrders={setOrders}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

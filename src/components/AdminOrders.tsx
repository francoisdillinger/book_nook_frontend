import { useEffect, useState } from "react";
import TableData from "./TableData";
import { orders_data, OrdersType } from "../data/orders_data";
import SearchBar from "./SearchBar";
import {
	OrdersSearchType,
	OrdersSortType,
	ReformatedOrdersType,
	reformateOrders,
	searchedOrders,
	sortOrders,
	trimOrders,
} from "../utils/adminOrdersUtilities";
import { index } from "d3";

const getRange = (paginationIndex: number, numOfItems: number) => {
	const start = (paginationIndex - 1) * numOfItems;
	const end = paginationIndex * numOfItems - 1;
	return [start, end];
};

const filterByRange = (
	orders: ReformatedOrdersType[],
	range: number[]
): ReformatedOrdersType[] => {
	return orders.filter((order, index) => {
		return index >= range[0] && index <= range[1];
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
	const numOfResults = 10;
	const [orders, setOrders] = useState<ReformatedOrdersType[] | null>();
	const [filteredOrders, setFilteredOrders] = useState<
		ReformatedOrdersType[] | null
	>();
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
	const [paginationIndex, setPaginationIndex] = useState(1);
	const [buttonIncreaseDisabled, setIncreaseButtonDiabled] = useState(false);
	const [buttonDecreaseDisabled, setDecreaseButtonDisabled] = useState(true);

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
		setFilteredOrders(searchedResults);
	}, [orders, searchValues, sortOption]);

	useEffect(() => {
		// We need to reset paginationIndex since filtering may return less/no results.
		// We may be on a page index that appears to show no results when there are some
		// at an earlier page index.
		setPaginationIndex(1);
	}, [searchValues]);

	useEffect(() => {
		// We need to reset paginationIndex since filtering may return less/no results.
		// We may be on a page index that appears to show no results when there are some
		// at an earlier page index.
		// Only needed for the following as they filter, sorting doesn't alter
		// the number of results we have, just reorders them.
		if (
			sortOption.sortOption === "Status: Processing" ||
			sortOption.sortOption === "Status: Shipped" ||
			sortOption.sortOption === "Status: Delivered"
		) {
			setPaginationIndex(1);
		}
	}, [sortOption]);

	useEffect(() => {
		const range = getRange(paginationIndex, numOfResults);
		const orders = filterByRange(filteredOrders ? filteredOrders : [], range);
		setDisplayedOrders(orders);
		// console.log("Range: ", range);
		// console.log("Orders: ", orders);
	}, [paginationIndex, filteredOrders]);

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
	const handlePaginationDecrease = () => {
		console.log("Decrease");
		const hasResults = (paginationIndex - 1) * numOfResults > 0;
		// const hasResults = paginationIndex * numOfResults > 0;
		setDecreaseButtonDisabled(!hasResults);
		setIncreaseButtonDiabled(false);
		setPaginationIndex(hasResults ? paginationIndex - 1 : paginationIndex);
	};

	const handlePaginationIncrease = () => {
		console.log("Increase");
		const inRange =
			(paginationIndex + 1) * numOfResults < filteredOrders?.length;
		const hasResults = paginationIndex * numOfResults < filteredOrders?.length;
		// console.log("In Range: ", inRange);
		setDecreaseButtonDisabled(false);
		setIncreaseButtonDiabled(!inRange);
		setPaginationIndex(hasResults ? paginationIndex + 1 : paginationIndex);
	};

	// console.log("Trimmed: ", trimmmedOrders);
	// console.log("Orders: ", orderedByDate);
	// console.log("Sort by: ", sortOption);
	// console.log("Decrease Disabled: ", buttonDecreaseDisabled);
	console.log("Increase Disabled: ", buttonIncreaseDisabled);
	console.log(paginationIndex);
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
			<div className="min-h-[660px]">
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
									userOrders={order.orders}
									orders={orders}
									setOrders={setOrders}
								/>
							))}
					</tbody>
				</table>
			</div>
			<div className="w-3/4 m-auto flex justify-end mt-8 mb-8">
				<div className="bg-gray-100 p-1 rounded-xl shadow-sm">
					<button
						onClick={handlePaginationDecrease}
						className="border-solid border p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
						disabled={buttonDecreaseDisabled}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="w-6 h-6 stroke-2 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<button
						onClick={handlePaginationIncrease}
						className="border-solid border p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
						disabled={buttonIncreaseDisabled}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="w-6 h-6 stroke-2 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

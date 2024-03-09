import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import purpur from "../assets/purpur.jpg";
import useDropDownVisibility from "../hooks/useDropDownVisibility";
import {
	IndividualOrderType,
	ReformatedOrdersType,
} from "../utils/adminOrdersUtilities";
import alchemist from "../assets/alchemist.jpg";
import OrderedItem from "./OrderedItem";
// import { ReformatedOrdersType } from "./AdminOrders";

// type StatusType = "Processing" | "Shipped" | "Delivered";

type BackgroundType = {
	background: "border" | "background";
};

type TableDataType = {
	orderId: string;
	firstName: string;
	lastName: string;
	total: number;
	orderStatus: string;
	userOrders: IndividualOrderType[];
	orders: ReformatedOrdersType[];
	setOrders: Function;
};

const statusColor = (status: string, background: BackgroundType): string => {
	switch (status) {
		case "Processing":
			return background.background === "background"
				? "bg-red-300"
				: "border-red-300";
		case "Shipped":
			return background.background === "background"
				? "bg-yellow-300"
				: "border-yellow-300";
		case "Delivered":
			return background.background === "background"
				? "bg-green-300"
				: "border-green-300";
		default:
			return "";
	}
};

const calculateHeight = (numOfItems: number): string => {
	const header = 5;
	const customerDetails = 13;
	const bookHeight = 9;
	const neededHeight =
		numOfItems > 1
			? header + numOfItems * bookHeight + "em"
			: header + customerDetails + "em";
	console.log("Needed Height: ", neededHeight);
	return neededHeight;
};

export default function TableData({
	orderId,
	firstName,
	lastName,
	total,
	orderStatus,
	userOrders,
	orders,
	setOrders,
}: TableDataType) {
	const [expandSlide, setExpandSlide] = useState<boolean>(false);
	// const [status, setStatus] = useState<StatusType>({ status: "Shipped" });
	const {
		state: dropDownState,
		dispatch: dropDownDispatch,
		profileRef,
		dropDownRef,
	} = useDropDownVisibility();

	const handleExpandSlide = () => {
		setExpandSlide((prevState) => !prevState);
	};
	console.log("User Orders: ", userOrders);
	return (
		<React.Fragment>
			{/* <tr className="border-gray-200 border-solid border-t border-r border-l rounded-t-2xl"> */}
			<tr className="">
				<td>{orderId}</td>
				<td className="text-center">
					<div className="inline-flex items-center py-2 w-44">
						<img
							className={`w-10 rounded-full ${statusColor(orderStatus, {
								background: "border",
							})} border-solid border-2`}
							src={purpur}
							alt=""
						/>
						<p className="pl-2">{firstName + " " + lastName}</p>
					</div>
				</td>
				<td className="hidden md:table-cell">${total.toFixed(2)}</td>
				<td>
					<div className="relative">
						<div
							ref={profileRef}
							id="dropdownDividerButton"
							data-dropdown-toggle="dropdownDivider"
						>
							<span
								className={`cursor-pointer ${statusColor(orderStatus, {
									background: "background",
								})} p-1 rounded-lg text-white`}
							>
								{orderStatus}
							</span>
						</div>
						{dropDownState.show && (
							<div
								ref={dropDownRef}
								id="dropdownDivider"
								className={`z-10 bg-gray-50 divide-y divide-white rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full mt-2 right-0`}
							>
								{/* Dropdown items */}
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownDividerButton"
								>
									<li
										onClick={() => {
											// setStatus({ status: "Processing" });
											dropDownDispatch({ type: "hasSelectedItem" });
											setOrders(
												orders.map((order) => {
													if (order.orderId === orderId) {
														return { ...order, orderStatus: "Processing" };
													}
													return order;
												})
											);
										}}
										className="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
									>
										<span className="px-1">Processing</span>
									</li>
									<li
										onClick={() => {
											// setStatus({ status: "Shipped" });
											dropDownDispatch({ type: "hasSelectedItem" });
											setOrders(
												orders.map((order) => {
													if (order.orderId === orderId) {
														return { ...order, orderStatus: "Shipped" };
													}
													return order;
												})
											);
										}}
										className="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
									>
										<span className="px-1">Shipped</span>
									</li>
									<li
										onClick={() => {
											// setStatus({ status: "Delivered" });
											dropDownDispatch({ type: "hasSelectedItem" });
											setOrders(
												orders.map((order) => {
													if (order.orderId === orderId) {
														return { ...order, orderStatus: "Delivered" };
													}
													return order;
												})
											);
										}}
										className="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
									>
										<span className="px-1">Delivered</span>
									</li>
								</ul>
							</div>
						)}
					</div>
				</td>
				<td className="">
					<div
						onClick={handleExpandSlide}
						className=" w-fit m-auto cursor-pointer"
						role="button"
						tabIndex={0}
						aria-expanded={expandSlide}
					>
						<motion.svg
							xmlns="http://www.w3.org/2000/motion."
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="w-5 h-5 stroke-gray-700"
							animate={{ rotate: expandSlide ? 180 : 0 }}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</motion.svg>
					</div>
				</td>
			</tr>
			{/* <tr className="border-gray-200 border-solid border-b border-r border-l rounded-lg w-full"> */}
			<tr className="border-gray-200 border-solid border-b">
				<td
					className=""
					colSpan={5}
				>
					<motion.div
						initial={{ height: 0 }}
						animate={{
							height: expandSlide ? calculateHeight(userOrders.length) : "0em",
						}}
						transition={
							expandSlide
								? {
										duration: 0.2, // Adjust duration for spring effect
										type: "spring",
										damping: 10, // Tune for a less "bouncy" spring
										stiffness: 100, // Adjust stiffness for the spring
								  }
								: {
										duration: 0.1, // Adjust duration for ease effect
										ease: "easeInOut", // Use an ease-in-out curve for closing
								  }
						}
						className={`relative overflow-hidden`}
					>
						<div className="w-9/10 m-auto p-8">
							<h1 className="text-gray-600 font-semibold text-3xl pb-4">
								Order Details:
							</h1>
							<div className="flex">
								<div className="flex flex-col w-2/3">
									{userOrders.map((order) => (
										<OrderedItem
											imgageURL={alchemist}
											bookTitle={order.bookTitle}
											quantity={order.quantity}
											total={order.orderAmount}
										/>
									))}
								</div>
								<div className="text-center w-1/3">
									<p className="px-2 text-gray-400 text-sm font-medium">
										Customer Name:{" "}
										<div className="text-gray-500 text-2xl font-normal">
											{firstName + " " + lastName}
										</div>
									</p>
									<p
										className="px-2 text-gray-400 text-sm font-medium"
										font-medium
									>
										Address:{" "}
										<div className="text-gray-500 text-2xl font-normal">
											<div>123 Rockingham Rd</div>
											<div>Birmingham AL, 35235</div>
										</div>
									</p>
									<p
										className="px-2 text-gray-400 text-sm font-medium"
										font-medium
									>
										Order Total:{" "}
										<div className="text-gray-500 text-2xl font-normal">
											${total.toFixed(2)}
										</div>
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</td>
			</tr>
		</React.Fragment>
	);
}

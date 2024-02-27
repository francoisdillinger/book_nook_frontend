import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import purpur from "../assets/purpur.jpg";
import useDropDownVisibility from "../hooks/useDropDownVisibility";

const statusColor = (status: StatusType): string => {
	switch (status.status) {
		case "Processing":
			return "red-200";
		case "Shipped":
			return "yellow-200";
		case "Delivered":
			return "green-200";
		default:
			return "";
	}
};

type StatusType = {
	status: "Processing" | "Shipped" | "Delivered";
};

export default function TableData() {
	const [expandSlide, setExpandSlide] = useState<boolean>(false);
	const [status, setStatus] = useState<StatusType>({ status: "Shipped" });
	const {
		state: dropDownState,
		dispatch: dropDownDispatch,
		profileRef,
		dropDownRef,
	} = useDropDownVisibility();

	const handleExpandSlide = () => {
		setExpandSlide((prevState) => !prevState);
	};
	// console.log("Expand: ", expandSlide);
	return (
		<React.Fragment>
			{/* <tr className="border-gray-200 border-solid border-t border-r border-l rounded-t-2xl"> */}
			<tr className="">
				<td>12312312</td>
				<td>
					<div className="flex items-center justify-center py-2">
						<img
							className={`w-10 rounded-full ${
								"border-" + statusColor(status)
							} border-solid border-2`}
							src={purpur}
							alt=""
						/>
						<p className="pl-2">James Jester</p>
					</div>
				</td>
				<td>
					<div className="relative">
						<div
							ref={profileRef}
							id="dropdownDividerButton"
							data-dropdown-toggle="dropdownDivider"
						>
							<span
								className={`cursor-pointer bg-${statusColor(
									status
								)} p-1 rounded-lg`}
							>
								{status.status}
							</span>
						</div>
						{dropDownState.show && (
							<div
								ref={dropDownRef}
								id="dropdownDivider"
								className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full mt-2 right-0`}
							>
								{/* Dropdown items */}
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownDividerButton"
								>
									<li
										onClick={() => {
											setStatus({ status: "Processing" });
											dropDownDispatch({ type: "hasSelectedItem" });
										}}
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
									>
										<span className="px-1">Processing</span>
									</li>
									<li
										onClick={() => {
											setStatus({ status: "Shipped" });
											dropDownDispatch({ type: "hasSelectedItem" });
										}}
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
									>
										<span className="px-1">Shipped</span>
									</li>
									<li
										onClick={() => {
											setStatus({ status: "Delivered" });
											dropDownDispatch({ type: "hasSelectedItem" });
										}}
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
									>
										<span className="px-1">Delivered</span>
									</li>
								</ul>
							</div>
						)}
					</div>
				</td>
				<td>$45.89</td>
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
						animate={{ height: expandSlide ? "5em" : "0em" }}
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
						className={`relative overflow-hidden flex items-center justify-center`}
					>
						hi
					</motion.div>
				</td>
			</tr>
		</React.Fragment>
	);
}

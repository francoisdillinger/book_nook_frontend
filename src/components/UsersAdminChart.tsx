import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { users } from "../data/users";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import useGetWindowSize from "../hooks/useGetWindowSize";
const processDataForLineChart = (users: any[]) => {
	return users.map((user: { orders: any[]; userName: any }) => {
		const ordersByDateAndId = {};

		user.orders.forEach(
			(order: { orderDate: any; orderId: any; quantity: any }) => {
				const dateKey = order.orderDate; // Assuming date is in 'YYYY-MM-DD' format
				const orderId = order.orderId;
				const combinedKey = `${dateKey}-${orderId}`;
				const quantity = order.quantity;

				if (ordersByDateAndId[combinedKey]) {
					ordersByDateAndId[combinedKey].quantity += quantity;
				} else {
					ordersByDateAndId[combinedKey] = {
						date: new Date(dateKey),
						quantity: quantity,
						orderId: orderId,
					};
				}
			}
		);

		return {
			userName: user.userName,
			orders: Object.values(ordersByDateAndId).sort((a, b) => a.date - b.date),
		};
	});
};

const sixMonthsAgo = (date) => {
	let pastDate = new Date(date);
	pastDate.setMonth(pastDate.getMonth() - 6);
	return pastDate;
};

const getFilteredData = (filter) => {
	const now = new Date();
	let filteredData;

	switch (filter) {
		case "day":
			filteredData = processDataForLineChart(
				users.data.users.map((user) => {
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
			filteredData = processDataForLineChart(
				users.data.users.map((user) => {
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
			filteredData = processDataForLineChart(
				users.data.users.map((user) => {
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
			filteredData = processDataForLineChart(
				users.data.users.map((user) => {
					return {
						...user,
						orders: user.orders.filter(
							(order) => new Date(order.orderDate) >= sixMonthsAgo(now)
						),
					};
				})
			);
			break;
		case "year":
			filteredData = processDataForLineChart(
				users.data.users.map((user) => {
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
			filteredData = processDataForLineChart(users.data.users);
	}

	return filteredData;
};

export default function UsersAdminChart() {
	// const windowSize = useGetWindowSize();
	// console.log(windowSize);
	const [focusedUser, setFocusedUser] = useState("");
	console.log(focusedUser);
	const [windowSizeInPixels, setWindowSizeInPixels] = useState(
		window.innerWidth
	);
	const [timeFilter, setTimeFilter] = useState("max");
	const filteredUserchart = getFilteredData(timeFilter);
	// const hasData = filteredUserchart.map((user) => user.orders.length);
	const hasData = filteredUserchart.reduce(
		(accumulator, users) => accumulator + users.orders.length,
		0
	);
	// console.log("Has Data: ", hasData);
	// console.log(processDataForLineChart(users.data.users));
	// console.log(getFilteredData("year")); // As an example
	// console.log("One day ago:", d3.timeDay.offset(new Date(), -1));
	// Do this for week, month, and year as well
	// console.log("Filtered Data: ", filteredUserchart);

	useEffect(() => {
		const windowSizePixels = () => {
			setWindowSizeInPixels(window.innerWidth);
			console.log(window.innerWidth);
		};
		window.addEventListener("resize", windowSizePixels);

		return () => {
			window.removeEventListener("resize", windowSizePixels);
		};
	}, []);
	interface TooltipState {
		visible: boolean;
		content: JSX.Element | null;
		x: number;
		y: number;
	}

	const [tooltip, setTooltip] = useState<TooltipState>({
		visible: false,
		content: null,
		x: 0,
		y: 0,
	});

	// const userchart = processDataForLineChart(users.data.users);
	const allDates = filteredUserchart.flatMap((user: { orders: any[] }) =>
		user.orders.map((order: { date: any }) => order.date)
	);
	const allQuantities = filteredUserchart.flatMap((user: { orders: any[] }) =>
		user.orders.map((order: { quantity: any }) => order.quantity)
	);

	const svgRef = useRef<SVGSVGElement>(null);
	const graphRef = useRef<SVGSVGElement>(null);
	const margin = { top: 20, right: 20, bottom: 100, left: 40 };
	const graphWidth =
		windowSizeInPixels <= 800
			? windowSizeInPixels - margin.left - margin.right
			: windowSizeInPixels * 0.85 - margin.left - margin.right;
	const graphHeight = 600 - margin.top - margin.bottom;
	const max = d3.max(allQuantities);
	const colorScale = d3.scaleOrdinal(d3.schemeTableau10);
	const x = d3.scaleTime().domain(d3.extent(allDates)).range([0, graphWidth]);

	const y = d3
		.scaleLinear()
		.domain([0, max as unknown as number])
		.range([graphHeight, 0]);

	let theLine = d3
		.line()
		.x((d) => x(d.date))
		.y((d) => y(d.quantity));
	const bottomLineGenerator = d3
		.line()
		.x((d) => x(d.date))
		.y(graphHeight);
	// if (filteredUserchart.length === 0) {
	// 	console.log("Emtpy!");
	// }
	useEffect(() => {
		const onGlobalClick = () => {
			setFocusedUser("");
		};

		window.addEventListener("click", onGlobalClick);

		return () => {
			window.removeEventListener("click", onGlobalClick);
		};
	}, []);

	const onUsernameClick = (username, event) => {
		event.stopPropagation(); // Prevent the click from reaching the global listener
		setFocusedUser(username);
	};
	return (
		<React.Fragment>
			<div className="flex">
				<div
					className=""
					style={{ width: windowSizeInPixels * 0.85 }}
				>
					<div className="ml-4 h-8">
						<button
							className={`p-2 w-16 ${
								timeFilter === "day"
									? "bg-slate-100 rounded-full text-logo shadow-md "
									: "text-neutral-600"
							}`}
							onClick={() => setTimeFilter("day")}
						>
							1D
						</button>
						<button
							className={`p-2 w-16 ${
								timeFilter === "week"
									? "bg-slate-100 rounded-full text-logo shadow-md"
									: "text-neutral-600"
							}`}
							onClick={() => setTimeFilter("week")}
						>
							1W
						</button>
						<button
							className={`p-2 w-16 ${
								timeFilter === "month"
									? "bg-slate-100 rounded-full text-logo shadow-md"
									: "text-neutral-600"
							}`}
							onClick={() => setTimeFilter("month")}
						>
							1M
						</button>
						<button
							className={`p-2 w-16 ${
								timeFilter === "half-year"
									? "bg-slate-100 rounded-full text-logo shadow-md"
									: "text-neutral-600"
							}`}
							onClick={() => setTimeFilter("half-year")}
						>
							6M
						</button>
						<button
							className={`p-2 w-16 ${
								timeFilter === "year"
									? "bg-slate-100 rounded-full text-logo shadow-md"
									: "text-neutral-600"
							}`}
							onClick={() => setTimeFilter("year")}
						>
							YTD
						</button>
						<button
							className={`p-2 w-16 ${
								timeFilter === "max"
									? "bg-slate-100 rounded-full text-logo shadow-md"
									: "text-neutral-600"
							}`}
							onClick={() => setTimeFilter("max")}
						>
							Max
						</button>
					</div>

					<div
						className="absolute bg-white rounded-md p-2 text-slate-500 font-light text-xs shadow-2xl"
						style={{
							display: tooltip.visible ? "block" : "none",
							left: `${tooltip.x}px`,
							top: `${tooltip.y}px`,
						}}
					>
						{tooltip.content}
					</div>
					<svg
						ref={svgRef}
						width={windowSizeInPixels}
						height={600}
					>
						<g
							ref={graphRef}
							width={graphWidth}
							height={graphHeight}
							transform={`translate(${margin.left},${margin.top})`}
						>
							<XAxis
								xScale={x}
								height={graphHeight}
							/>
							<YAxis
								yScale={y}
								graphWidth={graphWidth}
								hasData={hasData}
							/>
							{hasData ? (
								filteredUserchart.map(
									(
										user: {
											orders: any[] | Iterable<[number, number]>;
											userName: React.Key | null | undefined;
										},
										index: { toString: () => string }
									) => {
										const color = colorScale(index.toString());
										const linePath = theLine(
											user.orders.map((order: { date: any }) => ({
												...order,
												date: order.date,
											}))
										);

										return (
											<React.Fragment key={user.userName}>
												{/* Unique key for each fragment */}
												<motion.path
													key={user.orders}
													initial={{ d: bottomLineGenerator(user.orders) }}
													animate={{ d: linePath }}
													transition={{ ease: "easeInOut", duration: 0.5 }}
													fill="none"
													strokeWidth={2}
													stroke={
														focusedUser === user.userName || focusedUser === ""
															? color
															: "gray"
													}
													opacity={
														focusedUser === user.userName || focusedUser === ""
															? 1
															: 0.2
													}
												/>
												{user.orders.map(
													(order: { orderId; quantity; date }) => (
														<motion.circle
															key={order.orderId}
															className="cursor-pointer"
															initial={{ cy: graphHeight }}
															animate={{
																cy: y(order.quantity),
																cx: x(new Date(order.date)),
															}}
															transition={{ ease: "easeInOut", duration: 0.5 }}
															r={6}
															fill={
																focusedUser === user.userName ||
																focusedUser === ""
																	? color
																	: "gray"
															}
															opacity={
																focusedUser === user.userName ||
																focusedUser === ""
																	? 1
																	: 0.2
															}
															onMouseEnter={(e) => {
																console.log("We in here");
																const content = (
																	<div>
																		<div>
																			<span className="text-slate-600 font-bold">
																				Order ID:
																			</span>{" "}
																			{order.orderId}
																		</div>
																		<div>
																			<span className="text-slate-600 font-bold">
																				Date:
																			</span>{" "}
																			{order.date.toDateString()}
																		</div>
																		<div>
																			<span className="text-slate-600 font-bold">
																				Quantity:
																			</span>{" "}
																			{order.quantity}
																		</div>
																	</div>
																);
																setTooltip({
																	visible: true,
																	content: content,
																	x: e.clientX,
																	y: e.clientY,
																});
															}}
															onMouseLeave={() => {
																setTooltip({ ...tooltip, visible: false });
															}}
														/>
													)
												)}
											</React.Fragment>
										);
									}
								)
							) : (
								<React.Fragment>
									<rect
										x={1}
										y={0}
										width={graphWidth - 1}
										height={graphHeight}
										className="fill-slate-100"
									/>
									<text
										x={graphWidth / 2}
										y={graphHeight / 2}
										textAnchor="middle" // Centers horizontally
										dominantBaseline="middle" // Centers vertically
										className="fill-current text-logo text-5xl font-light"
									>
										No Data Exists For This Period
									</text>
								</React.Fragment>
							)}
						</g>
					</svg>
				</div>
				<div
					className="mt-16"
					style={{ width: windowSizeInPixels * 0.15 }}
				>
					{filteredUserchart.map((user, index) => {
						const color = colorScale(index.toString());
						return user.orders.length > 0 ? (
							<div
								key={user.userName}
								className="flex mb-2 cursor-pointer"
								onClick={(e) => onUsernameClick(user.userName, e)}
							>
								<div
									className="h-6 w-6 rounded-full mr-2"
									style={{ backgroundColor: color }}
								></div>
								<div className="font-light text-neutral-600">
									{user.userName}
								</div>
							</div>
						) : (
							<></>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
}

// const processDataForD3BarChart = (users) => {
// 	const bookTotals = {};

// 	users.forEach((user) => {
// 		user.orders.forEach((order) => {
// 			const title = order.book.bookTitle;
// 			const quantity = order.quantity;
// 			if (bookTotals[title]) {
// 				bookTotals[title] += quantity;
// 			} else {
// 				bookTotals[title] = quantity;
// 			}
// 		});
// 	});

// 	return Object.entries(bookTotals).map(([title, quantity]) => ({
// 		title,
// 		quantity,
// 	}));
// };
// const usersstuff = processDataForD3BarChart(users.data.users);

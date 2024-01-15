import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { users } from "../data/users";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import ReactSelect from "./ReactSelect";
import {
	reformatUserData,
	getFilteredData,
} from "../utils/usersAdminChartUtilities";

export default function UsersAdminChart() {
	const [focusedUser, setFocusedUser] = useState("");
	const [windowSizeInPixels, setWindowSizeInPixels] = useState(
		window.innerWidth
	);
	const [timeFilter, setTimeFilter] = useState("max");
	const reformatedUserData = reformatUserData(users);
	const filteredUserchart = getFilteredData(timeFilter, reformatedUserData);
	const hasData = filteredUserchart.reduce(
		(accumulator, users) => accumulator + users.orders.length,
		0
	);
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
			: windowSizeInPixels * 0.9 - margin.left - margin.right;
	const graphHeight = 600 - margin.top - margin.bottom;
	const max = d3.max(allQuantities);
	const colorScale = d3.scaleOrdinal(d3.schemeTableau10);
	const parsedDates = allDates
		.map((dateStr) => new Date(dateStr))
		.filter((date) => !isNaN(date.valueOf()));
	const dateExtent = d3.extent(parsedDates) as
		| [Date, Date]
		| [undefined, undefined];
	const domain =
		dateExtent[0] && dateExtent[1] ? dateExtent : [new Date(), new Date()];

	const x = d3.scaleTime().domain(domain).range([0, graphWidth]);

	const y = d3
		.scaleLinear()
		.domain([0, max as unknown as number])
		.range([graphHeight, 0]);

	let theLine = d3
		.line()
		.x((d) => x(d[0])) // d.date
		.y((d) => y(d[1])); // d.quantity
	const bottomLineGenerator = d3
		.line()
		.x((d) => x(d[0])) // d.date
		.y(graphHeight);

	useEffect(() => {
		const onGlobalClick = () => {
			setFocusedUser("");
		};

		window.addEventListener("click", onGlobalClick);

		return () => {
			window.removeEventListener("click", onGlobalClick);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="flex ml-16">
				<div
					className="bg-white rounded-lg my-2 pt-2 mx-auto"
					style={{ width: windowSizeInPixels * 0.9 }}
				>
					<div className="h-12 flex items-center justify-between">
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
						<div className=" mr-5 pt-2">
							<ReactSelect
								options={filteredUserchart}
								colorScale={colorScale}
								setFocusedUser={setFocusedUser}
								focusedUser={focusedUser}
							/>
						</div>
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
					<div className="">
						<svg
							ref={svgRef}
							width={windowSizeInPixels * 0.9}
							height={550}
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
									filteredUserchart.map((user, index) => {
										const color = colorScale(index.toString());
										const linePath = theLine(
											user.orders.map((order) => [
												new Date(order.date).getTime(), // Convert Date string to Date object and then get the time
												order.quantity,
											])
										);

										return (
											<React.Fragment key={user.userName}>
												{/* Unique key for each fragment */}
												<motion.path
													key={user.orders}
													initial={{
														d:
															bottomLineGenerator(
																user.orders.map((order) => [
																	new Date(order.date).getTime(),
																	order.quantity,
																])
															) || "",
													}}
													animate={{ d: linePath || "" }}
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
												{user.orders.map((order) => (
													<motion.circle
														key={order.orderId}
														className="cursor-pointer"
														initial={{ cy: graphHeight }}
														animate={{
															cy: y(order.quantity),
															cx: x(new Date(order.date)),
														}}
														transition={{
															ease: "easeInOut",
															duration: 0.5,
														}}
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
																		{order.date.toString()}
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
												))}
											</React.Fragment>
										);
									})
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

/* <div className=" mr-5 ">
							<select className="w-52 h-8 bg-slate-100 rounded-md px-2 text-neutral-600">
								{filteredUserchart.map((user, index) => {
									const color = colorScale(index.toString());
									return user.orders.length > 0 ? (
										<option>
											<div
												key={user.userName}
												className="flex mb-2 cursor-pointer"
												onClick={(e) => onUsernameClick(user.userName, e)}
											>
												<div
													className="h-6 w-6 rounded-full mr-2"
													style={{ backgroundColor: color }}
												></div>
												<div className="text-neutral-600">{user.userName}</div>
											</div>
										</option>
									) : (
										<></>
									);
								})}
							</select>
						</div> */

/* <div
					className=" bg-white rounded-lg my-2 pt-2 m-auto pl-4
					"
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
				</div> */

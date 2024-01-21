import React, { useEffect, useMemo, useState, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import {
	reformatUserData,
	getFilteredData,
	ProcessedUserType,
	ProcessedOrder,
} from "../utils/usersAdminChartUtilities";
import { TooltipStateType } from "./ChartToolTip";
import { UsersType } from "../data/users";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import { MarginType } from "./AdminChart";
import ResponsiveSVGContainer from "./ResponsiveSVGContainer";

const filterOutInactiveUsers = (
	users: ProcessedUserType[]
): ProcessedUserType[] => {
	return users.filter((user) => user.orders.length > 0);
};

type UsersAdminLineChartType = {
	margin: MarginType;
	timeFilter: string;
	// graphWidth: number;
	// graphHeight: number;
	width: number;
	height: number;
	// windowSizeInPixels: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	users: UsersType;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	setSelectOptions: Function;
	focusedUser: string;
};

export default function UsersAdminLineChart({
	margin,
	timeFilter,
	// graphHeight,
	// graphWidth,
	width,
	height,
	// windowSizeInPixels,
	tooltip,
	setTooltip,
	users,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	focusedUser,
}: UsersAdminLineChartType) {
	console.log("Height: ", height);
	console.log("Width: ", width);
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight - margin.top - margin.bottom;
	const graphWidth = svgWidth - margin.left - margin.right;

	// const graphWidth =
	// 	width <= 800
	// 		? width - margin.left - margin.right
	// 		: width * 0.9 - margin.left - margin.right;
	const svgLineChartRef = useRef<SVGSVGElement>(null);
	const graphLineChartRef = useRef<SVGSVGElement>(null);
	const [filteredUserData, setFilteredUserData] =
		useState<ProcessedUserType[]>();
	const [allDates, setAllDates] = useState();
	const [allQuantities, setAllQuantinties] = useState();

	useEffect(() => {
		const reformatedUserData = reformatUserData(users);
		const filteredUsers = filterOutInactiveUsers(reformatedUserData);
		const filteredUserchart = getFilteredData(timeFilter, filteredUsers);
		setHasData(
			filteredUserchart.reduce(
				(accumulator, users) => accumulator + users.orders.length,
				0
			)
		);
		setFilteredUserData(filteredUserchart);
		setSelectOptions(filteredUserchart);
		setAllDates(
			filteredUserchart.flatMap((user: { orders: ProcessedOrder[] }) =>
				user.orders.map((order: { date: any }) => order.date)
			)
		);
		setAllQuantinties(
			filteredUserchart.flatMap((user: { orders: any[] }) =>
				user.orders.map((order: { quantity: any }) => order.quantity)
			)
		);
	}, [users, timeFilter]);

	// const max = allQuantities ? d3.max(allQuantities) : 0;
	// const parsedDates = (allDates ?? [])
	// 	.map((dateStr) => new Date(dateStr))
	// 	.filter((date) => !isNaN(date.valueOf()));
	// const dateExtent = d3.extent(parsedDates) as
	// 	| [Date, Date]
	// 	| [undefined, undefined];
	// const domain =
	// 	dateExtent[0] && dateExtent[1] ? dateExtent : [new Date(), new Date()];

	// const x = d3.scaleTime().domain(domain).range([0, graphWidth]);

	// const y = d3
	// 	.scaleLinear()
	// 	.domain([0, max as unknown as number])
	// 	.range([graphHeight, 0]);

	// let theLine = d3
	// 	.line()
	// 	.x((d) => x(d[0])) // d.date
	// 	.y((d) => y(d[1])); // d.quantity
	// const bottomLineGenerator = d3
	// 	.line()
	// 	.x((d) => x(d[0])) // d.date
	// 	.y(graphHeight);

	const parsedDates = useMemo(
		() =>
			(allDates ?? [])
				.map((dateStr) => new Date(dateStr))
				.filter((date) => !isNaN(date.valueOf())),
		[allDates]
	);

	const dateExtent = useMemo(
		() => d3.extent(parsedDates) as [Date, Date] | [undefined, undefined],
		[parsedDates]
	);

	const domain = useMemo(
		() =>
			dateExtent[0] && dateExtent[1] ? dateExtent : [new Date(), new Date()],
		[dateExtent]
	);

	const maxQuantity = useMemo(
		() => (allQuantities ? d3.max(allQuantities) : 0),
		[allQuantities]
	);

	const x = useMemo(
		() => d3.scaleTime().domain(domain).range([0, graphWidth]),
		[domain, graphWidth]
	);

	const y = useMemo(
		() =>
			d3
				.scaleLinear()
				.domain([0, Number(maxQuantity) ?? 0])
				.range([graphHeight, 0]),
		[maxQuantity, graphHeight]
	);

	const theLine = useMemo(
		() =>
			d3
				.line()
				.x((d) => x(d[0]))
				.y((d) => y(d[1])),
		[x, y]
	);

	const bottomLineGenerator = useMemo(
		() =>
			d3
				.line()
				.x((d) => x(d[0]))
				.y(graphHeight),
		[x, graphHeight]
	);

	return (
		<React.Fragment>
			<svg
				ref={svgLineChartRef}
				width={svgWidth}
				height={svgHeight}
			>
				<g
					ref={graphLineChartRef}
					width={graphWidth}
					height={graphHeight}
					transform={`translate(${margin.left},${margin.top})`}
				>
					{hasData && (
						<XAxis
							xScale={x}
							height={graphHeight}
							width={graphWidth}
						/>
					)}
					{hasData && (
						<YAxis
							yScale={y}
							graphWidth={graphWidth}
							hasData={hasData}
							graphHeight={graphHeight}
						/>
					)}
					{hasData ? (
						filteredUserData!.map((user, index) => {
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
										transition={{
											duration: 0.5,
											ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
											type: "spring", // Use spring physics for bounce
											damping: 10, // Adjust damping for more or less bounce
											stiffness: 100, // Adjust stiffness for more or less bounce
										}}
										fill="none"
										strokeWidth={2}
										stroke={
											focusedUser === user.userName || focusedUser === ""
												? color
												: "gray"
										}
										opacity={
											focusedUser === user.userName || focusedUser === ""
												? 0.6
												: 0.2
										}
									/>
									{user.orders.map((order) => (
										<motion.circle
											key={order.orderId}
											className="cursor-pointer"
											stroke={"white"}
											strokeWidth={2}
											initial={{ cy: graphHeight }}
											animate={{
												cy: y(order.quantity),
												cx: x(new Date(order.date)),
											}}
											transition={{
												duration: 0.5,
												ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
												type: "spring", // Use spring physics for bounce
												damping: 10, // Adjust damping for more or less bounce
												stiffness: 100, // Adjust stiffness for more or less bounce
											}}
											r={6}
											fill={
												focusedUser === user.userName || focusedUser === ""
													? color
													: "gray"
											}
											opacity={
												focusedUser === user.userName || focusedUser === ""
													? 1
													: 0.2
											}
											onMouseEnter={(e) => {
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
													x: e.clientX + 10,
													y: e.clientY + 10,
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
		</React.Fragment>
	);
}

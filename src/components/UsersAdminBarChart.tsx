import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import {
	reformatUserData,
	getFilteredData,
	ProcessedUserType,
} from "../utils/usersAdminChartUtilities";
import { TooltipStateType } from "./ChartToolTip";
import { UsersType } from "../data/users";
import BarChartXAxis from "./BarChartXAxis";
import BarChartYAxis from "./BarChartYAxis";
import { MarginType } from "./AdminChart";

const reduceOrderQuantities = (
	users: ProcessedUserType[]
): ReducedUserDataType[] => {
	return users.map((user) => {
		return {
			userName: user.userName,
			totalBooksOrdered: user.orders.reduce(
				(accumulator, order) => accumulator + order.quantity,
				0
			),
		};
	});
};

const filterOutInactiveUsers = (
	users: ProcessedUserType[]
): ProcessedUserType[] => {
	return users.filter((user) => user.orders.length > 0);
};

type ReducedUserDataType = {
	userName: string;
	totalBooksOrdered: number;
};

type UsersAdminBarChartType = {
	margin: MarginType;
	timeFilter: string;
	width: number;
	height: number;
	// windowSizeInPixels: number;
	// graphWidth: number;
	// graphHeight: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	users: UsersType;
	colorScale: Function;
	hasData: number;
	focusedUser: string;
	doesToolTipOverflowWindow: Function;
};

export default function UsersAdminBarChart({
	margin,
	timeFilter,
	width,
	height,
	// windowSizeInPixels,
	// graphHeight,
	// graphWidth,
	tooltip,
	setTooltip,
	users,
	colorScale,
	hasData,
	focusedUser,
	doesToolTipOverflowWindow,
}: UsersAdminBarChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight - margin.top - margin.bottom;
	const graphWidth = svgWidth - margin.left - margin.right;
	const [reducedUsersData, setReducedUsersData] =
		useState<ReducedUserDataType[]>();

	useEffect(() => {
		const reformatedUserData = reformatUserData(users);
		// console.log("Reformated user: ", reformatedUserData);
		const filteredUsers = filterOutInactiveUsers(reformatedUserData);
		const timeFilteredUserData = getFilteredData(timeFilter, filteredUsers);
		setReducedUsersData(reduceOrderQuantities(timeFilteredUserData));
	}, [graphWidth, timeFilter]);

	const y = d3
		.scaleLinear()
		.domain([
			0,
			d3.max(
				reducedUsersData
					? reducedUsersData
							.map((user) => user.totalBooksOrdered)
							.filter((value) => value !== undefined) // Filter out undefined values
					: []
			) as number, // Cast the result as number
		])
		.range([graphHeight, 0]);

	const x = d3
		.scaleBand()
		.domain(
			reducedUsersData ? reducedUsersData.map((user) => user.userName) : []
		)
		.range([0, graphWidth])
		.paddingInner(0.1);

	// console.log("Colors: ", colorScale(["James", "Thomas", "Jester"]));
	return (
		<React.Fragment>
			<svg
				width={svgWidth}
				height={svgHeight}
			>
				<g
					width={graphWidth}
					height={graphHeight}
					transform={`translate(${margin.left},${10})`}
				>
					{hasData && (
						<BarChartXAxis
							xScale={x}
							height={graphHeight}
							ticks={reducedUsersData?.length || 0}
							width={graphWidth}
						/>
					)}
					{hasData && (
						<BarChartYAxis
							yScale={y}
							graphWidth={graphWidth}
							graphHeight={graphHeight}
						/>
					)}
					{hasData ? (
						reducedUsersData != undefined &&
						reducedUsersData!.map((user, index) => {
							const color = colorScale(index.toString());
							const barHeight = graphHeight - y(user.totalBooksOrdered);
							return (
								<motion.rect
									initial={{ height: 0, y: graphHeight }}
									animate={{ height: barHeight, y: y(user.totalBooksOrdered) }}
									transition={{
										duration: 0.5,
										ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
										type: "spring", // Use spring physics for bounce
										damping: 10, // Adjust damping for more or less bounce
										stiffness: 100, // Adjust stiffness for more or less bounce
									}}
									key={user.userName}
									width={x.bandwidth()}
									height={barHeight}
									x={x(user.userName)}
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
										const { x, y } = doesToolTipOverflowWindow(e);
										const content = (
											<div>
												<div>
													<span className="text-slate-600 font-bold">
														Username:
													</span>{" "}
													{user.userName}
												</div>
												<div>
													<span className="text-slate-600 font-bold">
														Order Quantity:
													</span>{" "}
													{user.totalBooksOrdered.toString()}
												</div>
											</div>
										);
										setTooltip({
											visible: true,
											content: content,
											x: x,
											y: y,
										});
									}}
									onMouseLeave={() => {
										setTooltip({ ...tooltip, visible: false });
									}}
								></motion.rect>
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
								className="fill-current text-logo text-4xl font-light"
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

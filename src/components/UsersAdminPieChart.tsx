import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { PieArcDatum, pie } from "d3-shape";
import { motion } from "framer-motion";
import {
	reformatUserData,
	getFilteredData,
	ProcessedUserType,
} from "../utils/usersAdminChartUtilities";
import { TooltipStateType } from "./ChartToolTip";
import { UsersType } from "../data/users";

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

type UsersAdminPieChartType = {
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

const UsersAdminPieChart = ({
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
}: UsersAdminPieChartType) => {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight;
	const graphWidth = svgWidth;
	const [reducedUsersData, setReducedUsersData] =
		useState<ReducedUserDataType[]>();
	const [totalOrderCount, setTotalOrderCount] = useState(0);
	const [key, setKey] = useState(0);

	useEffect(() => {
		const reformatedUserData = reformatUserData(users);
		// console.log("Reformated user: ", reformatedUserData);
		const filteredUsers = filterOutInactiveUsers(reformatedUserData);
		const timeFilteredUserData = getFilteredData(timeFilter, filteredUsers);
		const reducedData = reduceOrderQuantities(timeFilteredUserData);
		setTotalOrderCount(
			reducedData.reduce(
				(accumulator, user) => accumulator + user.totalBooksOrdered,
				0
			)
		);
		setReducedUsersData(reducedData);
		setKey((prevKey) => prevKey + 1);
	}, [timeFilter]);
	// console.log("Key: ", key);
	const pie = useMemo(() => {
		return d3
			.pie()
			.sort(null)
			.value((d) => d.totalBooksOrdered);
	}, [graphWidth, reducedUsersData]);

	const radius = useMemo(() => {
		const smallerSide = Math.min(graphWidth, graphHeight);
		return (smallerSide / 2) * 0.8; // 80% of half the smaller dimension
	}, [graphWidth, graphHeight]);

	const arcPath = useMemo(() => {
		return d3
			.arc()
			.outerRadius(radius)
			.innerRadius(radius / 1.8);
	}, [radius, reducedUsersData]);

	return (
		<React.Fragment>
			<svg
				width={svgWidth}
				height={svgHeight}
			>
				<g transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}>
					{" "}
					{hasData && (
						<text
							x={0}
							y={-graphHeight / 2.3}
							textAnchor="middle"
							className="fill-current text-neutral-500 text-2xl  lg:text-base xl:text-xl"
						>
							Percentage of Orders By User
						</text>
					)}
					{hasData ? (
						<text
							x={0}
							y={0}
							textAnchor="middle"
							dominantBaseline="middle"
							className="fill-current text-neutral-600 font-light text-5xl lg:text-4xl xl:text-5xl"
						>
							{focusedUser != ""
								? parseFloat(
										(
											((reducedUsersData?.find(
												(user) => user.userName === focusedUser
											)?.totalBooksOrdered || 0) /
												totalOrderCount) *
											100
										).toString()
								  ).toFixed(0)
								: "100"}
							%
						</text>
					) : (
						<React.Fragment>
							<rect
								x={(-graphWidth * 0.9) / 2}
								y={(-graphHeight * 0.9) / 2}
								width={graphWidth * 0.9}
								height={graphHeight * 0.9}
								className="fill-slate-100"
							/>
							<text
								x={0}
								y={0}
								textAnchor="middle" // Centers horizontally
								dominantBaseline="middle" // Centers vertically
								className="fill-current text-logo text-base sm:text-2xl lg:text-base xl:text-xl font-light"
							>
								No Data Exists For This Period
							</text>
						</React.Fragment>
					)}
					<motion.g
						key={key}
						animate={{
							rotate:
								key > 2
									? [5, -5, 3, -3, 1, -1, 0]
									: [20, -20, 10, -10, 5, -5, 0],
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
					>
						{hasData &&
							reducedUsersData != undefined &&
							pie(reducedUsersData)!.map((user, index) => {
								const color = colorScale(index.toString());
								return (
									<motion.path
										key={user.data.userName}
										d={arcPath(user)}
										stroke={"white"}
										strokeWidth={2}
										transition={{
											duration: 0.5,
											ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
											type: "spring", // Use spring physics for bounce
											damping: 20, // Adjust damping for more or less bounce
											stiffness: 100, // Adjust stiffness for more or less bounce
										}}
										fill={
											focusedUser === user.data.userName || focusedUser === ""
												? color
												: "gray"
										}
										opacity={
											focusedUser === user.data.userName || focusedUser === ""
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
														{user.data.userName}
													</div>
													<div>
														<span className="text-slate-600 font-bold">
															Order Quantity:
														</span>{" "}
														{user.data.totalBooksOrdered.toString()}
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
									></motion.path>
								);
							})}
					</motion.g>
				</g>
			</svg>
		</React.Fragment>
	);
};

export default UsersAdminPieChart;

//const handleMouseEnter = (e, d) => {
// 	console.log("We in here");
// 	const content = (
// 		<div>
// 			<div>
// 				<span className="text-slate-600 font-bold">Username:</span>{" "}
// 				{d.data.userName}
// 			</div>
// 			<div>
// 				<span className="text-slate-600 font-bold">Order Quantity:</span>{" "}
// 				{d.data.totalBooksOrdered.toString()}
// 			</div>
// 		</div>
// 	);
// 	setTooltip({
// 		visible: true,
// 		content: content,
// 		x: e.clientX,
// 		y: e.clientY,
// 	});
// };
// const handleMouseLeave = () => {
// 	setTooltip({ ...tooltip, visible: false });
// };

// const ref = useRef();

// useEffect(() => {
// 	if (ref.current && reducedUsersData) {
// 		// Check if reducedUsersData is not undefined
// 		const paths = d3
// 			.select(ref.current)
// 			.selectAll("path")
// 			.data(pie(reducedUsersData));

// 		paths
// 			.enter()
// 			.append("path")
// 			.merge(paths)
// 			.attr("d", arcPath)
// 			.attr("fill", (d, i) =>
// 				focusedUser === d.data.userName || focusedUser === ""
// 					? colorScale(i.toString())
// 					: "gray"
// 			)
// 			.attr("opacity", (d) =>
// 				focusedUser === d.data.userName || focusedUser === "" ? 1 : 0.2
// 			)

// 			.on("mouseenter", handleMouseEnter)
// 			.on("mouseleave", handleMouseLeave)
// 			.transition()
// 			.duration(1000)
// 			.attrTween("d", (d) => {
// 				const interpolate = d3.interpolate(d.startAngle, d.endAngle);
// 				return (t) => arcPath({ ...d, endAngle: interpolate(t) });
// 			});
// 	}
// }, [reducedUsersData, pie, arcPath, colorScale]);

// useEffect(() => {
// 	if (ref.current && reducedUsersData) {
// 		// Check if reducedUsersData is not undefined
// 		const paths = d3
// 			.select(ref.current)
// 			.selectAll("path")
// 			.attr("fill", (d, i) =>
// 				focusedUser === d.data.userName || focusedUser === ""
// 					? colorScale(i.toString())
// 					: "gray"
// 			)
// 			.attr("opacity", (d) =>
// 				focusedUser === d.data.userName || focusedUser === "" ? 1 : 0.2
// 			);
// 	}
// }, [focusedUser]);

// function arcTweenUpdate(d) {
// 	var i = d3.interpolate(this._current, d);
// 	this._current = i(1);
// 	return function (t) {
// 		return arcPath(i(t));
// 	};
// }

// return (
// 	<g
// 		ref={ref}
// 		transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}
// 	>
// 		<text
// 			x={0}
// 			y={-graphHeight + 200}
// 			textAnchor="middle"
// 			className="fill-current text-neutral-500 text-2xl"
// 		>
// 			Total Percentage of User Book Orders
// 		</text>
// 		<text
// 			x={0}
// 			y={0}
// 			textAnchor="middle"
// 			dominantBaseline="middle"
// 			className="fill-current text-neutral-600 text-5xl font-light"
// 		>
// 			{" "}
// 			{focusedUser != ""
// 				? parseFloat(
// 						(
// 							((reducedUsersData?.find(
// 								(user) => user.userName === focusedUser
// 							)?.totalBooksOrdered || 0) /
// 								totalOrderCount) *
// 							100
// 						).toString()
// 				  ).toFixed(0)
// 				: "100"}
// 			%
// 		</text>
// 	</g>
// );

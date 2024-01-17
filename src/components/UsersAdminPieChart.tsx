import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
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
	graphWidth: number;
	graphHeight: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	users: UsersType;
	colorScale: Function;
	hasData: number;
	focusedUser: string;
};

const UsersAdminPieChart = ({
	timeFilter,
	graphHeight,
	graphWidth,
	tooltip,
	setTooltip,
	users,
	colorScale,
	hasData,
	focusedUser,
}: UsersAdminPieChartType) => {
	const [reducedUsersData, setReducedUsersData] =
		useState<ReducedUserDataType[]>();
	const [totalOrderCount, setTotalOrderCount] = useState(0);

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
	}, [graphWidth, timeFilter]);

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
	// const toRadians = (angleInDegrees) => angleInDegrees * (Math.PI / 180);
	const arcPath = useMemo(() => {
		return d3
			.arc()
			.outerRadius(radius)
			.innerRadius(radius / 2);
	}, [radius, reducedUsersData]);

	const generateArcPaths = (startAngleDegrees, endAngleDegrees) => {
		// const startAngleRadians = toRadians(startAngleDegrees);
		// const endAngleRadians = toRadians(endAngleDegrees);

		// Start path (at the start angle)
		const startPath = arcPath
			.startAngle(startAngleDegrees)
			.endAngle(startAngleDegrees)(); // Empty call to generate path

		// End path (at the end angle)
		const endPath = arcPath
			.startAngle(startAngleDegrees)
			.endAngle(endAngleDegrees)(); // Empty call to generate path

		return { startPath, endPath };
	};

	// Example usage
	// const { startPath, endPath } = generateArcPaths(0, 90); // 0 to 90 degrees
	// console.log("Start Path:", startPath);
	// console.log("End Path:", endPath);

	return (
		<React.Fragment>
			<g transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}>
				{" "}
				<text
					x={0}
					y={-graphHeight + 200}
					textAnchor="middle"
					className="fill-current text-neutral-500 text-2xl"
				>
					Total Percentage of User Book Orders
				</text>
				<text
					x={0}
					y={0}
					textAnchor="middle"
					dominantBaseline="middle"
					className="fill-current text-neutral-600 text-5xl font-light"
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
				{hasData &&
					pie(reducedUsersData)?.map((user, index) => {
						const color = colorScale(index.toString());
						console.log(user.startAngle);
						// const arcTween = (d) => {
						// 	var i = d3.interpolate(user.endAngle, user.startAngle);
						// 	return function (t) {
						// 		user.startAngle = i(t);
						// 		return arcPath(d);
						// 	};
						// };
						const { startPath, endPath } = generateArcPaths(
							user.startAngle,
							user.endAngle
						); // 0 to 90 degrees
						console.log("Start Path:", startPath);
						console.log("End Path:", endPath);
						return (
							<motion.path
								key={user.data.userName}
								d={arcPath(user)}
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								strokeWidth={60}
								stroke={color}
								// transition={{
								// 	duration: 0.5,
								// 	ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
								// 	type: "spring", // Use spring physics for bounce
								// 	damping: 10, // Adjust damping for more or less bounce
								// 	stiffness: 100, // Adjust stiffness for more or less bounce
								// }}
								fill="transparent"
								// fill={
								// 	focusedUser === user.data.userName || focusedUser === ""
								// 		? color
								// 		: "gray"
								// }
								opacity={
									focusedUser === user.data.userName || focusedUser === ""
										? 1
										: 0.2
								}
								onMouseEnter={(e) => {
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
										x: e.clientX,
										y: e.clientY,
									});
								}}
								onMouseLeave={() => {
									setTooltip({ ...tooltip, visible: false });
								}}
							></motion.path>
						);
					})}
			</g>
		</React.Fragment>
	);
};

export default UsersAdminPieChart;

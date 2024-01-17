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
import XAxis from "./XAxis";
import YAxis from "./YAxis";

const reduceOrderQuantities = (users) => {
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

type UsersAdminBarChartType = {
	timeFilter: string;
	graphWidth: number;
	graphHeight: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	users: UsersType;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	setSelectOptions: Function;
	focusedUser: string;
};

export default function UsersAdminBarChart({
	timeFilter,
	graphHeight,
	graphWidth,
	tooltip,
	setTooltip,
	users,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	focusedUser,
}: UsersAdminBarChartType) {
	const [reducedUsersData, setReducedUsersData] = useState<[]>();

	useEffect(() => {
		const reformatedUserData = reformatUserData(users);
		const timeFilteredUserData = getFilteredData(
			timeFilter,
			reformatedUserData
		);
		setReducedUsersData(reduceOrderQuantities(timeFilteredUserData));
	}, [graphWidth, timeFilter]);
	console.log("Reduced User Data: ", reducedUsersData);

	const y = d3
		.scaleLinear()
		.domain([
			0,
			d3.max(
				reducedUsersData
					? reducedUsersData.map((user) => user.totalBooksOrdered)
					: []
			),
		])
		.range([0, graphHeight]);

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
			<XAxis
				xScale={x}
				height={graphHeight}
			/>
			{/* <YAxis
				yScale={y}
				graphWidth={graphWidth}
				hasData={hasData}
			/> */}
			{hasData &&
				reducedUsersData!.map((user, index) => {
					const color = colorScale(index.toString());
					const height = graphHeight - y(user.totalBooksOrdered);
					return (
						<rect
							key={user.userName}
							width={x.bandwidth()}
							height={y(user.totalBooksOrdered)}
							x={x(user.userName)}
							y={height}
							fill={
								focusedUser === user.userName || focusedUser === ""
									? color
									: "gray"
							}
							opacity={
								focusedUser === user.userName || focusedUser === "" ? 1 : 0.2
							}
						></rect>
					);
				})}
		</React.Fragment>
	);
}

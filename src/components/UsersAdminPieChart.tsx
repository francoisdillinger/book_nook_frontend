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
	}, [timeFilter]);

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
			.innerRadius(radius / 2);
	}, [radius, reducedUsersData]);

	const handleMouseEnter = (e, d) => {
		console.log("We in here");
		const content = (
			<div>
				<div>
					<span className="text-slate-600 font-bold">Username:</span>{" "}
					{d.data.userName}
				</div>
				<div>
					<span className="text-slate-600 font-bold">Order Quantity:</span>{" "}
					{d.data.totalBooksOrdered.toString()}
				</div>
			</div>
		);
		setTooltip({
			visible: true,
			content: content,
			x: e.clientX,
			y: e.clientY,
		});
	};
	const handleMouseLeave = () => {
		setTooltip({ ...tooltip, visible: false });
	};

	const ref = useRef();

	useEffect(() => {
		if (ref.current && reducedUsersData) {
			// Check if reducedUsersData is not undefined
			const paths = d3
				.select(ref.current)
				.selectAll("path")
				.data(pie(reducedUsersData));

			paths
				.enter()
				.append("path")
				.merge(paths)
				.attr("d", arcPath)
				.attr("fill", (d, i) =>
					focusedUser === d.data.userName || focusedUser === ""
						? colorScale(i.toString())
						: "gray"
				)
				.attr("opacity", (d) =>
					focusedUser === d.data.userName || focusedUser === "" ? 1 : 0.2
				)

				.on("mouseenter", handleMouseEnter)
				.on("mouseleave", handleMouseLeave)
				.transition()
				.duration(1000)
				.ease(d3.easeBounceOut)
				.attrTween("d", (d) => {
					const interpolate = d3.interpolate(d.startAngle, d.endAngle);
					return (t) => arcPath({ ...d, endAngle: interpolate(t) });
				});
		}
	}, [reducedUsersData, pie, arcPath, colorScale]);

	useEffect(() => {
		if (ref.current && reducedUsersData) {
			// Check if reducedUsersData is not undefined
			const paths = d3
				.select(ref.current)
				.selectAll("path")
				.attr("fill", (d, i) =>
					focusedUser === d.data.userName || focusedUser === ""
						? colorScale(i.toString())
						: "gray"
				)
				.attr("opacity", (d) =>
					focusedUser === d.data.userName || focusedUser === "" ? 1 : 0.2
				);
		}
	}, [focusedUser]);

	return (
		<g
			ref={ref}
			transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}
		>
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
				{" "}
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
		</g>
	);
};

export default UsersAdminPieChart;

// return (
//     <React.Fragment>
//         <g transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}>
//             {" "}
//             <text
//                 x={0}
//                 y={-graphHeight + 200}
//                 textAnchor="middle"
//                 className="fill-current text-neutral-500 text-2xl"
//             >
//                 Total Percentage of User Book Orders
//             </text>
//             <text
//                 x={0}
//                 y={0}
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 className="fill-current text-neutral-600 text-5xl font-light"
//             >
//                 {focusedUser != ""
//                     ? parseFloat(
//                             (
//                                 ((reducedUsersData?.find(
//                                     (user) => user.userName === focusedUser
//                                 )?.totalBooksOrdered || 0) /
//                                     totalOrderCount) *
//                                 100
//                             ).toString()
//                       ).toFixed(0)
//                     : "100"}
//                 %
//             </text>
//             {hasData &&
//                 pie(reducedUsersData).map((user, index) => {
//                     const color = colorScale(index.toString());

//                     return (
//                         <motion.path
//                             key={user.data.userName}
//                             // d={arcPath(user)}
//                             // transform={"rotate(0,45)"}
//                             // transition={{
//                             // 	duration: 1,
//                             // 	ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
//                             // 	type: "spring", // Use spring physics for bounce
//                             // 	damping: 10, // Adjust damping for more or less bounce
//                             // 	stiffness: 100, // Adjust stiffness for more or less bounce
//                             // }}
//                             fill={
//                                 focusedUser === user.data.userName || focusedUser === ""
//                                     ? color
//                                     : "gray"
//                             }
//                             opacity={
//                                 focusedUser === user.data.userName || focusedUser === ""
//                                     ? 1
//                                     : 0.2
//                             }
//                             onMouseEnter={(e) => {
//                                 const content = (
//                                     <div>
//                                         <div>
//                                             <span className="text-slate-600 font-bold">
//                                                 Username:
//                                             </span>{" "}
//                                             {user.data.userName}
//                                         </div>
//                                         <div>
//                                             <span className="text-slate-600 font-bold">
//                                                 Order Quantity:
//                                             </span>{" "}
//                                             {user.data.totalBooksOrdered.toString()}
//                                         </div>
//                                     </div>
//                                 );
//                                 setTooltip({
//                                     visible: true,
//                                     content: content,
//                                     x: e.clientX,
//                                     y: e.clientY,
//                                 });
//                             }}
//                             onMouseLeave={() => {
//                                 setTooltip({ ...tooltip, visible: false });
//                             }}
//                         ></motion.path>
//                     );
//                 })}
//         </g>
//     </React.Fragment>
// );

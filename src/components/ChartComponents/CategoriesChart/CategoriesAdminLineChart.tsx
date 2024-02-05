import React, { useEffect, useMemo, useState, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import {
	reformatUserData,
	getFilteredData,
	ProcessedUserType,
	ProcessedOrder,
} from "../../../utils/usersAdminChartUtilities";
import { TooltipStateType } from "../ChartToolTip";
import XAxis from "../../XAxis";
import YAxis from "../../YAxis";
import { MarginType } from "../AdminChart";
import {
	ReformattedBookType,
	// ReformattedCategoriesBooks,
	ReformattedCategoriesBooksType,
} from "./CategoriesAdminChart";
import { getFilteredCategoriesData } from "../../../utils/categoriesAdminChartUtilities";

export const filterOutEmptyCategories = (
	categories: ReformattedCategoriesBooksType
): ReformattedCategoriesBooksType => {
	return {
		categories: categories.categories.filter(
			(category) => category.orders.length > 0
		),
	};
};

type CategoriesAdminLineChartType = {
	margin: MarginType;
	timeFilter: string;
	width?: number;
	height?: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	categories: ReformattedCategoriesBooksType;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	setSelectOptions: Function;
	focusedUser: string;
	doesToolTipOverflowWindow: Function;
};

export default function CategoriesAdminLineChart({
	margin,
	timeFilter,
	width = 0,
	height = 0,
	tooltip,
	setTooltip,
	categories,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	focusedUser,
	doesToolTipOverflowWindow,
}: CategoriesAdminLineChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight - margin.top - margin.bottom;
	const graphWidth = svgWidth - margin.left - margin.right;
	const svgLineChartRef = useRef<SVGSVGElement>(null);
	const graphLineChartRef = useRef<SVGSVGElement>(null);
	const [orderedCategoriesData, setOrderedCategoriesData] =
		useState<ReformattedBookType[]>();
	const [allDates, setAllDates] = useState<string[]>([]);
	const [allQuantities, setAllQuantinties] = useState<number[]>([]);
	console.log(
		"-------------------------------------------------------------------------"
	);
	console.log(
		"-------------------------------------------------------------------------"
	);
	console.log("Categories: ", categories);

	// const flattenedDates = categories.categories.flatMap(
	// 	(category: ReformattedBookType) => {
	// 		return category.orders.map((order) => order.orderDate);
	// 	}
	// );

	// const uniqueDates = [...new Set(flattenedDates)];
	// const sortedDates = uniqueDates.sort(
	// 	(a, b) => new Date(a).getTime() - new Date(b).getTime()
	// );
	// console.log("Flattened: ", flattenedDates);
	// console.log("Unique Dates: ", uniqueDates);
	// console.log("Sorted Dates: ", sortedDates);

	useEffect(() => {
		// const reformatedUserData = reformatUserData(users);
		const filteredCategories = filterOutEmptyCategories(categories);
		console.log("Filtered Categories: ", filteredCategories);
		const categoryArray = filteredCategories.categories.map((category) => ({
			categoryName: category.categoryName,
			orders: category.orders.sort(
				(a, b) =>
					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
			),
		}));
		const filteredCategoriesChart = getFilteredCategoriesData(
			timeFilter,
			categoryArray
		);
		console.log("Time-Filtered Categories: ", filteredCategoriesChart);
		setHasData(
			categories.categories.reduce(
				(accumulator, category) => accumulator + category.orders.length,
				0
			)
		);
		// setFilteredUserData(filteredUserchart);
		// setSelectOptions(filteredUserchart);
		const flattenedDates = filteredCategoriesChart.flatMap(
			(category: ReformattedBookType) => {
				return category.orders.map((order) => order.orderDate);
			}
		);
		const flattenedQuanities = filteredCategoriesChart.flatMap(
			(category: ReformattedBookType) => {
				return category.orders.map((order) => order.quantity);
			}
		);
		const uniqueDates = [...new Set(flattenedDates)];
		const uniqueQuantities = [...new Set(flattenedQuanities)];
		setAllDates(uniqueDates);
		setAllQuantinties(uniqueQuantities);
		setOrderedCategoriesData(filteredCategoriesChart);
	}, [categories, timeFilter]);
	console.log("All Dates: ", allDates);
	console.log("All Quantities: ", allQuantities);
	// console.log("Has Data: ", hasData);

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
	// console.log("Date Extent: ", dateExtent);
	const domain = useMemo(
		() =>
			dateExtent[0] && dateExtent[1] ? dateExtent : [new Date(), new Date()],
		[dateExtent]
	);

	const maxQuantity = useMemo(
		() => (allQuantities ? d3.max(allQuantities) : 0),
		[allQuantities]
	);
	// console.log("Max Quantity: ", maxQuantity);
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
						orderedCategoriesData != undefined &&
						orderedCategoriesData.map((category, index) => {
							const color = colorScale(index.toString());
							// console.log("Color: ", color);
							// console.log("Category: ", category);
							const linePath = theLine(
								category.orders.map((order) => [
									new Date(order.orderDate).getTime(), // Convert Date string to Date object and then get the time
									order.quantity,
								])
							);
							// console.log("Line Path: ", linePath);

							return (
								<React.Fragment>
									{/* Unique key for each fragment */}
									<motion.path
										key={category.categoryName}
										initial={{
											d:
												bottomLineGenerator(
													category.orders.map((order) => [
														new Date(order.orderDate).getTime(),
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
											color
											// focusedUser === category.categoryName ||
											// focusedUser === ""
											// 	? color
											// 	: "gray"
										}
										// opacity={
										// 	focusedUser === category.categoryName ||
										// 	focusedUser === ""
										// 		? 0.6
										// 		: 0.2
										// }
									/>
									{category.orders.map((order) => {
										// console.log("Order Quantity: ", order.quantity);
										// console.log("cy: ", y(order.quantity));
										return (
											<motion.circle
												key={order.orderId}
												className="cursor-pointer"
												stroke={"white"}
												strokeWidth={2}
												initial={{ cy: graphHeight }}
												animate={{
													cy: y(order.quantity),
													cx: x(new Date(order.orderDate)),
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
													color
													// focusedUser === category.categoryName ||
													// focusedUser === ""
													// 	? color
													// 	: "gray"
												}
												// opacity={
												// 	focusedUser === category.categoryName ||
												// 	focusedUser === ""
												// 		? 1
												// 		: 0.2
												// }
												onMouseEnter={(e) => {
													console.log(e);
													const { x, y } = doesToolTipOverflowWindow(e);
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
																{order.orderDate.toString()}
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
														x: x,
														y: y,
													});
												}}
												onMouseLeave={() => {
													setTooltip({ ...tooltip, visible: false });
												}}
											/>
										);
									})}
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
								className="fill-current text-logo text-base sm:text-2xl lg:text-base xl:text-xl font-light"
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

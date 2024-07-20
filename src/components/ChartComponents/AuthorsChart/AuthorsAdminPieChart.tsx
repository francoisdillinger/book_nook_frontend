import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { TooltipStateType } from "../ChartToolTip";
import { getFilteredCategoriesData } from "../../../utils/categoriesAdminChartUtilities";
import { AuthorsDataType } from "../../../data/authors_data";
import { getFilteredAuthorsData } from "../../../utils/authorsAdminChartUtilities";
import {
	CombinedAuthorsOrdersType,
	ReducedAuthorsDataType,
	trimAuthorsData,
	combineName,
	combineOrders,
	sortOrders,
} from "./AuthorsAdminLineChart";

const reduceOrderQuantities = (
	authors: CombinedAuthorsOrdersType[]
): ReducedAuthorsDataType[] => {
	return authors.map((author) => {
		return {
			authorName: author.authorName,
			totalBooksOrdered: author.orders.reduce(
				(accumulator, order) => accumulator + order.quantity,
				0
			),
		};
	});
};

// const filterOutInactiveUsers = (
// 	users: ProcessedUserType[]
// ): ProcessedUserType[] => {
// 	return users.filter((user) => user.orders.length > 0);
// };

type AuthorsAdminPieChartType = {
	paginatedList: CombinedAuthorsOrdersType[];
	pageIndex: number;
	timeFilter: string;
	width?: number;
	height?: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	authors: AuthorsDataType;
	colorScale: Function;
	hasData: number;
	focusedCategory: string;
	doesToolTipOverflowWindow: Function;
};

const AuthorsAdminPieChart = ({
	paginatedList,
	pageIndex,
	timeFilter,
	width = 0,
	height = 0,
	tooltip,
	setTooltip,
	authors,
	colorScale,
	hasData,
	focusedCategory,
	doesToolTipOverflowWindow,
}: AuthorsAdminPieChartType) => {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight;
	const graphWidth = svgWidth;
	const [reducedAuthorsData, setReducedAuthorsData] =
		useState<ReducedAuthorsDataType[]>();
	const [totalOrderCount, setTotalOrderCount] = useState(0);
	const [key, setKey] = useState(0);

	useEffect(() => {
		const trimmedAuthors = trimAuthorsData(authors);
		const combinedAuthorName = combineName(trimmedAuthors);
		const combinedOrders = combineOrders(combinedAuthorName);
		const sortedCombinedOrders = sortOrders(combinedOrders);
		const filteredAuthorsChart = getFilteredAuthorsData(
			timeFilter,
			sortedCombinedOrders
		);
		// const trimmedCategories = trimCategoriesData(categories);
		// const reformattedCategories = reformatCategoriesBooks(trimmedCategories);
		// const filteredCategories = filterOutEmptyCategories(reformattedCategories);
		// console.log("Empty Filtered: ", filteredCategories);
		// const authorArray = filteredCategories.categories.map((author) => ({
		// 	authorName: author.authorName,
		// 	orders: author.orders.sort(
		// 		(a, b) =>
		// 			new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
		// 	),
		// }));
		// const timeFilteredCategories = getFilteredCategoriesData(
		// 	timeFilter,
		// 	authorArray
		// );
		// console.log("Time Filtered: ", timeFilteredCategories);
		// const reducedData = reduceOrderQuantities(timeFilteredCategories);
		setTotalOrderCount(
			filteredAuthorsChart.reduce(
				(accumulator, author) =>
					accumulator +
					author.orders.reduce(
						(accumulator, order) => accumulator + order.quantity,
						0
					),
				0
			)
		);
		// setReducedCategoriesData(reducedData);
		setReducedAuthorsData(reduceOrderQuantities(filteredAuthorsChart));
		setKey((prevKey) => prevKey + 1);
	}, [timeFilter]);
	// console.log("Key: ", key);
	// console.log("Total Order Count: ", totalOrderCount);
	const pie = useMemo(() => {
		return d3
			.pie<CombinedAuthorsOrdersType>()
			.sort(null)
			.value((d) => d.totalItems);
	}, [graphWidth, reducedAuthorsData]);

	const radius = useMemo(() => {
		const smallerSide = Math.min(graphWidth, graphHeight);
		return (smallerSide / 2) * 0.8; // 80% of half the smaller dimension
	}, [graphWidth, graphHeight]);

	const arcPath = useMemo(() => {
		return d3
			.arc<d3.PieArcDatum<CombinedAuthorsOrdersType>>()
			.outerRadius(radius)
			.innerRadius(radius / 1.8);
	}, [radius, reducedAuthorsData]);

	return (
		<React.Fragment>
			<svg
				width={svgWidth}
				height={svgHeight}
			>
				<g transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}>
					{" "}
					<circle
						cx={0}
						cy={0}
						r={radius * 1.05}
						fill="white"
					/>
					{hasData && (
						<text
							x={0}
							y={-graphHeight / 2.3}
							textAnchor="middle"
							className="fill-current text-neutral-500 text-2xl  lg:text-base xl:text-xl"
						>
							Percentage of Total Orders
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
							{focusedCategory != ""
								? parseFloat(
										(
											((reducedAuthorsData?.find(
												(author) => author.authorName === focusedCategory
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
						key={pageIndex}
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
							paginatedList != undefined &&
							pie(paginatedList)!.map((author, index) => {
								const color = colorScale(index.toString());
								// console.log("Category: ", author);
								// This is to override a bug where orders of 0 are still shown
								// on the chart, but filtering them changes the index #'s so
								// the colors change as well. I'll come back to this.
								if (author.data.totalItems === 0) return;
								return (
									<motion.path
										key={author.data.authorName}
										d={arcPath(author) || ""}
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
											focusedCategory === author.data.authorName ||
											focusedCategory === ""
												? color
												: "gray"
										}
										opacity={
											focusedCategory === author.data.authorName ||
											focusedCategory === ""
												? 1
												: 0.2
										}
										onMouseEnter={(e) => {
											const { x, y } = doesToolTipOverflowWindow(e);
											const content = (
												<div>
													<div>
														<span className="text-slate-600 font-bold">
															Author Name:
														</span>{" "}
														{author.data.authorName}
													</div>
													<div>
														<span className="text-slate-600 font-bold">
															Total Quantity:
														</span>{" "}
														{author.data.totalItems.toString()}
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

export default AuthorsAdminPieChart;

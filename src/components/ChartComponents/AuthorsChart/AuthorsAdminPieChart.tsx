import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import {
	reformatUserData,
	getFilteredData,
	ProcessedUserType,
} from "../../../utils/usersAdminChartUtilities";
import { TooltipStateType } from "../ChartToolTip";
import { UsersType } from "../../../data/users";
import { CategoriesDataType } from "../../../data/categories_data";
import { getFilteredCategoriesData } from "../../../utils/categoriesAdminChartUtilities";
import {
	ReformattedBookType,
	trimCategoriesData,
	reformatCategoriesBooks,
} from "./CategoriesAdminChart";
import { filterOutEmptyCategories } from "./CategoriesAdminLineChart";

const reduceOrderQuantities = (
	categories: ReformattedBookType[]
): ReducedCategoriesDataType[] => {
	return categories.map((category) => {
		return {
			categoriesName: category.categoryName,
			totalBooksOrdered: category.orders.reduce(
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

type ReducedCategoriesDataType = {
	categoriesName: string;
	totalBooksOrdered: number;
};

type AuthorsAdminPieChartType = {
	timeFilter: string;
	width?: number;
	height?: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	categories: CategoriesDataType;
	colorScale: Function;
	hasData: number;
	focusedCategory: string;
	doesToolTipOverflowWindow: Function;
};

const AuthorsAdminPieChart = ({
	timeFilter,
	width = 0,
	height = 0,
	tooltip,
	setTooltip,
	categories,
	colorScale,
	hasData,
	focusedCategory,
	doesToolTipOverflowWindow,
}: AuthorsAdminPieChartType) => {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight;
	const graphWidth = svgWidth;
	const [reducedCategoriesData, setReducedCategoriesData] =
		useState<ReducedCategoriesDataType[]>();
	const [totalOrderCount, setTotalOrderCount] = useState(0);
	const [key, setKey] = useState(0);

	useEffect(() => {
		const trimmedCategories = trimCategoriesData(categories);
		const reformattedCategories = reformatCategoriesBooks(trimmedCategories);
		const filteredCategories = filterOutEmptyCategories(reformattedCategories);
		// console.log("Empty Filtered: ", filteredCategories);
		const categoryArray = filteredCategories.categories.map((category) => ({
			categoryName: category.categoryName,
			orders: category.orders.sort(
				(a, b) =>
					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
			),
		}));
		const timeFilteredCategories = getFilteredCategoriesData(
			timeFilter,
			categoryArray
		);
		console.log("Time Filtered: ", timeFilteredCategories);
		const reducedData = reduceOrderQuantities(timeFilteredCategories);
		setTotalOrderCount(
			reducedData.reduce(
				(accumulator, category) => accumulator + category.totalBooksOrdered,
				0
			)
		);
		setReducedCategoriesData(reducedData);
		setKey((prevKey) => prevKey + 1);
	}, [timeFilter]);
	// console.log("Key: ", key);
	const pie = useMemo(() => {
		return d3
			.pie<ReducedCategoriesDataType>()
			.sort(null)
			.value((d) => d.totalBooksOrdered);
	}, [graphWidth, reducedCategoriesData]);

	const radius = useMemo(() => {
		const smallerSide = Math.min(graphWidth, graphHeight);
		return (smallerSide / 2) * 0.8; // 80% of half the smaller dimension
	}, [graphWidth, graphHeight]);

	const arcPath = useMemo(() => {
		return d3
			.arc<d3.PieArcDatum<ReducedCategoriesDataType>>()
			.outerRadius(radius)
			.innerRadius(radius / 1.8);
	}, [radius, reducedCategoriesData]);

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
							Percentage of Orders By Category
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
											((reducedCategoriesData?.find(
												(category) =>
													category.categoriesName === focusedCategory
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
							reducedCategoriesData != undefined &&
							pie(reducedCategoriesData)!.map((category, index) => {
								const color = colorScale(index.toString());
								console.log("Category: ", category);
								// This is to override a bug where orders of 0 are still shown
								// on the chart, but filtering them changes the index #'s so
								// the colors change as well. I'll come back to this.
								if (category.data.totalBooksOrdered === 0) return;
								return (
									<motion.path
										key={category.data.categoriesName}
										d={arcPath(category) || ""}
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
											focusedCategory === category.data.categoriesName ||
											focusedCategory === ""
												? color
												: "gray"
										}
										opacity={
											focusedCategory === category.data.categoriesName ||
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
															Category Name:
														</span>{" "}
														{category.data.categoriesName}
													</div>
													<div>
														<span className="text-slate-600 font-bold">
															Total Quantity:
														</span>{" "}
														{category.data.totalBooksOrdered.toString()}
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

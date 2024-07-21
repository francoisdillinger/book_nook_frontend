import React, { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { TooltipStateType } from "./ChartToolTip";
import BarChartXAxis from "./UserChart/BarChartXAxis";
import BarChartYAxis from "./UserChart/BarChartYAxis";
import { MarginType } from "./../AdminHome";
import { AuthorsDataType } from "../../data/authors_data";
import { getFilteredAuthorsData } from "../../utils/authorsAdminChartUtilities";
import { trimAuthorsData } from "../../utils/junk";
import {
	// trimAuthorsData,
	combineName,
	combineOrders,
	sortOrders,
	// CombinedAuthorsOrdersType,
	// ReducedAuthorsDataType,
	ReducedChartDataType,
	CombinedChartDataOrdersType,
} from "./LineChart";
// import { CategoriesDataType } from "../../../data/categories_data";
// import { filterOutEmptyCategories } from "./CategoriesAdminLineChart";

export const reduceOrderQuantities = (
	authors: CombinedChartDataOrdersType[]
): ReducedChartDataType[] => {
	return authors.map((author) => {
		return {
			name: author.name,
			totalBooksOrdered: author.orders.reduce(
				(accumulator, order) => accumulator + order.quantity,
				0
			),
		};
	});
};

// type ReducedAuthorsDataType = {
// 	authorName: string;
// 	totalBooksOrdered: number;
// };

type BarChartType = {
	paginatedList: CombinedChartDataOrdersType[];
	allQuantities: number[];
	margin: MarginType;
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

export default function BarChart({
	paginatedList,
	allQuantities,
	margin,
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
}: BarChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const additionalPadding = 20;
	const graphHeight =
		svgHeight - margin.top - margin.bottom + additionalPadding;
	const graphWidth = svgWidth - margin.left - margin.right;
	const [reducedAuthorsData, setReducedAuthorsData] =
		useState<ReducedChartDataType[]>();

	useEffect(() => {
		// console.log("Authors: ", authors);
		// const trimmedAuthors = trimAuthorsData(authors);
		// const combinedAuthorName = combineName(trimmedAuthors);
		// const combinedOrders = combineOrders(combinedAuthorName);
		// const sortedCombinedOrders = sortOrders(combinedOrders);
		// const filteredAuthorsChart = getFilteredAuthorsData(
		// 	timeFilter,
		// 	sortedCombinedOrders
		// );
		// const flattenedDates = filteredAuthorsChart.flatMap(
		// 	(author: CombinedAuthorsOrdersType) => {
		// 		return author.orders.map((order) => order.orderDate);
		// 	}
		// );
		// const flattenedQuanities = filteredAuthorsChart.flatMap(
		// 	(author: CombinedAuthorsOrdersType) => {
		// 		return author.orders.map((order) => order.quantity);
		// 	}
		// );
		// const uniqueDates = [...new Set(flattenedDates)];
		// const uniqueQuantities = [...new Set(flattenedQuanities)];
		// const trimmedCategories = trimCategoriesData(categories);
		// const reformattedCategories = reformatCategoriesBooks(trimmedCategories);
		// const filteredCategories = filterOutEmptyCategories(reformattedCategories);
		// const categoryArray = filteredCategories.categories.map((category) => ({
		// 	categoryName: category.categoryName,
		// 	orders: category.orders.sort(
		// 		(a, b) =>
		// 			new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
		// 	),
		// }));
		// const timeFilteredCategories = getFilteredCategoriesData(
		// 	timeFilter,
		// 	categoryArray
		// );
		setReducedAuthorsData(reduceOrderQuantities(paginatedList));
	}, [graphWidth, timeFilter]);

	// const y = d3
	// 	.scaleLinear()
	// 	.domain([
	// 		0,
	// 		d3.max(
	// 			reducedAuthorsData
	// 				? reducedAuthorsData
	// 						.map((author) => author.totalBooksOrdered)
	// 						.filter((value) => value !== undefined && !isNaN(value))
	// 				: [0]
	// 		) || 0,
	// 	])
	// 	.range([graphHeight, 0]);
	const topPadding = 5;
	const y = d3
		.scaleLinear()
		.domain([
			0,
			(d3.max(
				paginatedList
					? paginatedList
							.map((author) => author.totalItems)
							.filter((value) => value !== undefined && !isNaN(value))
					: [0]
			) || 0) + topPadding,
		])
		.range([graphHeight, 0]);

	// const y = d3
	// 	.scaleLinear()
	// 	.domain([0, 100]) // Test with a fixed domain
	// 	.range([graphHeight, 0]);

	const x = d3
		.scaleBand()
		.domain(paginatedList ? paginatedList.map((author) => author.name) : [])
		.range([0, graphWidth])
		.paddingInner(0.1);

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
					<rect
						x="0"
						y="0"
						width={graphWidth}
						height={graphHeight}
						fill="white"
					/>
					{hasData && (
						<BarChartXAxis
							xScale={x}
							height={graphHeight}
							ticks={paginatedList?.length || 0}
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
						paginatedList != undefined &&
						paginatedList!.map((author, index) => {
							const color = colorScale(index.toString());

							const barHeight =
								author.totalItems !== undefined && !isNaN(author.totalItems)
									? graphHeight - y(author.totalItems)
									: 0;
							// console.log("Author:", author);
							// console.log("PaginatedAuthor: ", paginatedList[index]);
							// console.log("Total Items:", author.totalItems);
							// console.log("y(author.totalItems):", y(author.totalItems));
							// console.log("graphHeight:", graphHeight);
							// console.log(
							// 	"Calculated barHeight:",
							// 	graphHeight - y(author.totalItems)
							// );
							// This is to prevent empty categories from throwing errors.
							// If this item has no book orders then it is rendered as
							// an empty rect, but framer motion tries to animate it and
							// causes a bunch of errors to be thrown. This does not effect
							// the actual application but blows up the console.
							// if (author.totalItems === 0) return;
							if (author.totalItems === 0) return;
							return (
								<motion.rect
									initial={{ height: 0, y: graphHeight ? graphHeight : 0 }}
									animate={{
										height: barHeight,
										y: y(author.totalItems),
									}}
									transition={{
										duration: 0.5,
										ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
										type: "spring", // Use spring physics for bounce
										damping: 10, // Adjust damping for more or less bounce
										stiffness: 100, // Adjust stiffness for more or less bounce
									}}
									key={author.name}
									width={x.bandwidth()}
									height={barHeight}
									x={x(author.name)}
									// y={y(author.totalItems)}
									fill={
										focusedCategory === author.name || focusedCategory === ""
											? color
											: "gray"
									}
									opacity={
										focusedCategory === author.name || focusedCategory === ""
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
													{author.name}
												</div>
												<div>
													<span className="text-slate-600 font-bold">
														Total Quantity:
													</span>{" "}
													{author.totalItems.toString()}
												</div>
												<div>
													<span className="text-slate-600 font-bold">
														Amount:
													</span>{" "}
													${author.totalAmount}
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

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { TooltipStateType } from "../ChartToolTip";
import BarChartXAxis from "../UserChart/BarChartXAxis";
import BarChartYAxis from "../UserChart/BarChartYAxis";
import { MarginType } from "../AdminChart";
import { CategoriesDataType } from "../../../data/categories_data";
// import { filterOutEmptyCategories } from "./CategoriesAdminLineChart";

// const reduceOrderQuantities = (
// 	categories: ReformattedBookType[]
// ): ReducedCategoriesDataType[] => {
// 	return categories.map((category) => {
// 		return {
// 			categoriesName: category.categoryName,
// 			totalBooksOrdered: category.orders.reduce(
// 				(accumulator, order) => accumulator + order.quantity,
// 				0
// 			),
// 		};
// 	});
// };

type AuthorsAdminBarChartType = {
	margin: MarginType;
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

export default function AuthorsAdminBarChart({
	margin,
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
}: AuthorsAdminBarChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight - margin.top - margin.bottom;
	const graphWidth = svgWidth - margin.left - margin.right;
	const [reducedCategoriesData, setReducedCategoriesData] =
		useState<ReducedCategoriesDataType[]>();

	useEffect(() => {
		const trimmedCategories = trimCategoriesData(categories);
		const reformattedCategories = reformatCategoriesBooks(trimmedCategories);
		const filteredCategories = filterOutEmptyCategories(reformattedCategories);
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
		setReducedCategoriesData(reduceOrderQuantities(timeFilteredCategories));
	}, [graphWidth, timeFilter]);

	const y = d3
		.scaleLinear()
		.domain([
			0,
			d3.max(
				reducedCategoriesData
					? reducedCategoriesData
							.map((category) => category.totalBooksOrdered)
							.filter((value) => value !== undefined) // Filter out undefined values
					: []
			) as number, // Cast the result as number to eliminate type errors
		])
		.range([graphHeight, 0]);

	const x = d3
		.scaleBand()
		.domain(
			reducedCategoriesData
				? reducedCategoriesData.map((category) => category.categoriesName)
				: []
		)
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
					{hasData && (
						<BarChartXAxis
							xScale={x}
							height={graphHeight}
							ticks={reducedCategoriesData?.length || 0}
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
						reducedCategoriesData != undefined &&
						reducedCategoriesData!.map((category, index) => {
							const color = colorScale(index.toString());
							const barHeight = graphHeight - y(category.totalBooksOrdered);
							// This is to prevent empty categories from throwing errors.
							// If this item has no book orders then it is rendered as
							// an empty rect, but framer motion tries to animate it and
							// causes a bunch of errors to be thrown. This does not effect
							// the actual application but blows up the console.
							if (category.totalBooksOrdered === 0) return;
							return (
								<motion.rect
									initial={{ height: 0, y: graphHeight }}
									animate={{
										height: barHeight,
										y: y(category.totalBooksOrdered),
									}}
									transition={{
										duration: 0.5,
										ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
										type: "spring", // Use spring physics for bounce
										damping: 10, // Adjust damping for more or less bounce
										stiffness: 100, // Adjust stiffness for more or less bounce
									}}
									key={category.categoriesName}
									width={x.bandwidth()}
									height={barHeight}
									x={x(category.categoriesName)}
									fill={
										focusedCategory === category.categoriesName ||
										focusedCategory === ""
											? color
											: "gray"
									}
									opacity={
										focusedCategory === category.categoriesName ||
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
													{category.categoriesName}
												</div>
												<div>
													<span className="text-slate-600 font-bold">
														Total Quantity:
													</span>{" "}
													{category.totalBooksOrdered.toString()}
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

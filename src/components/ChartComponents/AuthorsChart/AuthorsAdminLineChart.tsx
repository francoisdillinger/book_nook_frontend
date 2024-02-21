import React, { useEffect, useMemo, useState, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { TooltipStateType } from "../ChartToolTip";
import XAxis from "../../XAxis";
import YAxis from "../../YAxis";
import { MarginType } from "../AdminChart";
import { getFilteredCategoriesData } from "../../../utils/categoriesAdminChartUtilities";
import { AuthorsDataType } from "../../../data/authors_data";

// export const filterOutEmptyCategories = (
// 	categories: ReformattedCategoriesBooksType
// ): ReformattedCategoriesBooksType => {
// 	return {
// 		categories: categories.categories.filter(
// 			(category) => category.orders.length > 0
// 		),
// 	};
// };
export const trimAuthorsData = (
	authors: AuthorsDataType
): TrimmedAuthorsDataType => {
	return {
		authors: authors.data.authors.map((author) => author),
	};
};

export const combineName = (
	authors: TrimmedAuthorsDataType
): CombinedAuthorNameType[] => {
	return authors.authors.map((author) => {
		return {
			authorName: author.authorFirstName + " " + author.authorLastName,
			books: author.books,
		};
	});
};

// We need to reformat 'authors' so that each object has an authorName and then a list of all book orders rather than each book individually

// export const filterOutEmptyAuthors = (
// 	authors: CombinedAuthorNameType[]
// ): CombinedAuthorNameType[] => {
// 	return authors.map((author) => {
// 		return author.books.filter((book) => {
// 			return book.bookOrders.
// 		})
// 	})
// };

type TrimmedAuthorsDataType = {
	authors: {
		authorFirstName: string;
		authorLastName: string;
		books: {
			bookTitle: string;
			bookOrders: {
				orderId: string;
				userId: number;
				bookId: number;
				quantity: number;
				orderDate: string;
				orderAmount: number;
			}[];
		}[];
	}[];
};

type CombinedAuthorNameType = {
	authorName: string;
	books: {
		bookTitle: string;
		bookOrders: {
			orderId: string;
			userId: number;
			bookId: number;
			quantity: number;
			orderDate: string;
			orderAmount: number;
		}[];
	}[];
};

type ReducedAuthorsDataType = {
	authorName: string;
	totalBooksOrdered: number;
};

type AuthorsAdminLineChartType = {
	margin: MarginType;
	timeFilter: string;
	width?: number;
	height?: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	authors: AuthorsDataType;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	setSelectOptions: Function;
	focusedCategory: string;
	doesToolTipOverflowWindow: Function;
};

export default function AuthorsAdminLineChart({
	margin,
	timeFilter,
	width = 0,
	height = 0,
	tooltip,
	setTooltip,
	authors,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	focusedCategory,
	doesToolTipOverflowWindow,
}: AuthorsAdminLineChartType) {
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
	// console.log(
	// 	"-------------------------------------------------------------------------"
	// );
	// console.log(
	// 	"-------------------------------------------------------------------------"
	// );
	// console.log("Categories: ", categories);

	useEffect(() => {
		const trimmedAuthors = trimAuthorsData(authors);
		const combinedAuthorName = combineName(trimmedAuthors);
		console.log("Combined: ", combinedAuthorName);
		// const reformattedCategories = reformatCategoriesBooks(trimmedCategories);
		// const filteredCategories = filterOutEmptyCategories(reformattedCategories);
		// const categoryArray = filteredCategories.categories.map((category) => ({
		// 	categoryName: category.categoryName,
		// 	orders: category.orders.sort(
		// 		(a, b) =>
		// 			new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
		// 	),
		// }));
		// const filteredCategoriesChart = getFilteredCategoriesData(
		// 	timeFilter,
		// 	categoryArray
		// );
		// const flattenedDates = filteredCategoriesChart.flatMap(
		// 	(category: ReformattedBookType) => {
		// 		return category.orders.map((order) => order.orderDate);
		// 	}
		// );
		// const flattenedQuanities = filteredCategoriesChart.flatMap(
		// 	(category: ReformattedBookType) => {
		// 		return category.orders.map((order) => order.quantity);
		// 	}
		// );
		// const uniqueDates = [...new Set(flattenedDates)];
		// const uniqueQuantities = [...new Set(flattenedQuanities)];
		// setAllDates(uniqueDates);
		// setAllQuantinties(uniqueQuantities);
		// setOrderedCategoriesData(filteredCategoriesChart);
		// setSelectOptions(filteredCategoriesChart);
		// setHasData(
		// 	filteredCategoriesChart.reduce(
		// 		(accumulator, category) => accumulator + category.orders.length,
		// 		0
		// 	)
		// );
	}, [authors, timeFilter]);
	console.log("Authors: ", authors);
	// console.log("All Dates: ", allDates);
	// console.log("All Quantities: ", allQuantities);
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
			{/* <div className="w-full flex justify-end">
				<CategoriesChartReactSelect
					options={[]}
					colorScale={colorScale}
					setFocusedUser={() => {}}
					focusedCategory={""}
				/>
			</div> */}
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
							// console.log("Focused Category: ", focusedCategory);

							// This prevents framer motion errors from blowing up
							// the console when no orders are present as it tries
							// to create a path from empty points.
							if (category.orders.length === 0) return;
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
											focusedCategory === category.categoryName ||
											focusedCategory === ""
												? color
												: "gray"
										}
										opacity={
											focusedCategory === category.categoryName ||
											focusedCategory === ""
												? 0.8
												: 0.1
										}
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
													focusedCategory === category.categoryName ||
													focusedCategory === ""
														? color
														: "gray"
												}
												opacity={
													focusedCategory === category.categoryName ||
													focusedCategory === ""
														? 1
														: 0.1
												}
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

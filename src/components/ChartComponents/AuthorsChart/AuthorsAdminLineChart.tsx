import React, { useEffect, useMemo, useState, useRef } from "react";
import { usePagination } from "../../../hooks/usePagination";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { TooltipStateType } from "../ChartToolTip";
import XAxis from "../../XAxis";
import YAxis from "../../YAxis";
import { MarginType } from "../../../pages/AdminHomePage";
import { AuthorsDataType } from "../../../data/authors_data";
// import { getFilteredAuthorsData } from "../../../utils/authorsAdminChartUtilities";
// import CategoriesChartReactSelect from "../CategoriesChart/CategoriesChartReactSelect";
import { v4 as uuidv4 } from "uuid";
import { getRange, filterByRange } from "../../../pages/AdminOrdersPage";

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

export const combineOrders = (
	authors: CombinedAuthorNameType[]
): CombinedAuthorsOrdersType[] => {
	console.log("authors: ", authors);
	return authors.map((author) => {
		let totalAmount = 0;
		let totalItems = 0;
		return {
			authorName: author.authorName,

			orders: author.books
				.map((book) => {
					return book.bookOrders.map((order) => {
						totalAmount += order.orderAmount;
						totalItems += order.quantity;
						return {
							bookTitle: book.bookTitle,
							...order,
							uniqueId: uuidv4(),
						};
					});
				})
				.flat(),
			totalAmount: parseFloat(totalAmount.toFixed(2)),
			totalItems: totalItems,
		};
	});
};

export const sortOrders = (
	authors: CombinedAuthorsOrdersType[]
): CombinedAuthorsOrdersType[] => {
	return authors.map((author) => {
		return {
			...author,
			orders: author.orders.sort((a, b) => {
				return (
					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
				);
			}),
		};
	});
};

type TrimmedAuthorsDataType = {
	authors: {
		authorFirstName: string;
		authorLastName: string;
		books: {
			bookTitle: string;
			bookOrders: {
				orderId: string;
				userId: string;
				bookId: string;
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
			userId: string;
			bookId: string;
			quantity: number;
			orderDate: string;
			orderAmount: number;
		}[];
	}[];
};

export type CombinedAuthorsOrdersType = {
	authorName: string;
	totalAmount: number;
	totalItems: number;
	orders: {
		uniqueId: string;
		bookTitle: string;
		orderId: string;
		userId: string;
		bookId: string;
		quantity: number;
		orderDate: string;
		orderAmount: number;
	}[];
};

export type ReducedAuthorsDataType = {
	authorName: string;
	totalBooksOrdered: number;
};

type AuthorsAdminLineChartType = {
	paginatedList: CombinedAuthorsOrdersType[];
	allDates: string[];
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
	setHasData: Function;
	setSelectOptions: Function;
	focusedCategory: string;
	doesToolTipOverflowWindow: Function;
};

export default function AuthorsAdminLineChart({
	allDates,
	allQuantities,
	paginatedList,
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
	// const [orderedAuthorsData, setOrderedAuthorsData] =
	// 	useState<CombinedAuthorsOrdersType[]>();
	// const [allDates, setAllDates] = useState<string[]>([]);
	// const [allQuantities, setAllQuantinties] = useState<number[]>([]);
	// const {
	// 	setPaginateThisList,
	// 	pageIndex,
	// 	paginatedList,
	// 	increasePageIndex,
	// 	decreasePageIndex,
	// 	totalPages,
	// } = usePagination(orderedAuthorsData ? orderedAuthorsData : [], 10);

	// useEffect(() => {
	// 	const trimmedAuthors = trimAuthorsData(authors);
	// 	const combinedAuthorName = combineName(trimmedAuthors);
	// 	const combinedOrders = combineOrders(combinedAuthorName);
	// 	const sortedCombinedOrders = sortOrders(combinedOrders);

	// 	// .authorName: category.authorName,
	// 	// 	orders: category.orders.sort(
	// 	// 		(a, b) =>
	// 	// 			new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
	// 	// 	),
	// 	// }));
	// 	const filteredAuthorsChart = getFilteredAuthorsData(
	// 		timeFilter,
	// 		sortedCombinedOrders
	// 	);
	// 	const flattenedDates = filteredAuthorsChart.flatMap(
	// 		(author: CombinedAuthorsOrdersType) => {
	// 			return author.orders.map((order) => order.orderDate);
	// 		}
	// 	);
	// 	const flattenedQuanities = filteredAuthorsChart.flatMap(
	// 		(author: CombinedAuthorsOrdersType) => {
	// 			return author.orders.map((order) => order.quantity);
	// 		}
	// 	);
	// 	const uniqueDates = [...new Set(flattenedDates)];
	// 	const uniqueQuantities = [...new Set(flattenedQuanities)];
	// 	setAllDates(uniqueDates);
	// 	setAllQuantinties(uniqueQuantities);
	// 	setOrderedAuthorsData(filteredAuthorsChart);
	// 	setPaginateThisList(filteredAuthorsChart);
	// 	setSelectOptions(filteredAuthorsChart);
	// 	setHasData(
	// 		filteredAuthorsChart.reduce(
	// 			(accumulator, author) => accumulator + author.orders.length,
	// 			0
	// 		)
	// 	);
	// }, [authors, timeFilter]);

	// console.log("OrderedData: ", orderedAuthorsData);
	// console.log("Range: ", getRange(2, 10));
	// console.log(
	// 	"filteredRange: ",
	// 	filterByRange(orderedAuthorsData!, getRange(2, 10))
	// );

	// console.log("PaginatedList: ", paginatedList);

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
	const x = useMemo(
		() => d3.scaleTime().domain(domain).range([0, graphWidth]),
		[domain, graphWidth]
	);
	const topPadding = 0.5;
	const y = useMemo(
		() =>
			d3
				.scaleLinear()
				.domain([0, Number(maxQuantity) + topPadding ?? 0])
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
			{/* <div className=" bg-gray-100 lg:ml-20 xl:ml-18 rounded-t-lg pt-3 mt-2">
				<div className="w-1/2 flex justify-between m-auto">
					<button
						onClick={decreasePageIndex}
						className=" p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
						disabled={pageIndex === 1}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="w-6 h-6 stroke-2 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<div className="flex justify-center items-center text-gray-500 text-sm font-semibold">
						Page {pageIndex} of {totalPages}
					</div>
					<button
						onClick={increasePageIndex}
						className=" p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
						disabled={pageIndex === totalPages}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="w-6 h-6 stroke-2 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
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
						paginatedList != undefined &&
						paginatedList.map((author, index) => {
							const color = colorScale(index.toString());
							// console.log("Color: ", color);
							// console.log("Category: ", category);
							const linePath = theLine(
								author.orders.map((order) => [
									new Date(order.orderDate).getTime(), // Convert Date string to Date object and then get the time
									order.quantity,
								])
							);
							// console.log("Line Path: ", linePath);
							// console.log("Focused Category: ", focusedCategory);

							// This prevents framer motion errors from blowing up
							// the console when no orders are present as it tries
							// to create a path from empty points.
							if (author.orders.length === 0) return;
							return (
								<React.Fragment>
									{/* Unique key for each fragment */}
									<motion.path
										key={author.authorName}
										initial={{
											d:
												bottomLineGenerator(
													author.orders.map((order) => [
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
											focusedCategory === author.authorName ||
											focusedCategory === ""
												? color
												: "gray"
										}
										opacity={
											focusedCategory === author.authorName ||
											focusedCategory === ""
												? 0.8
												: 0.1
										}
									/>
									{author.orders.map((order) => {
										// console.log("Order Quantity: ", order.quantity);
										// console.log("cy: ", y(order.quantity));
										return (
											<motion.circle
												// The issue of one or two circles not resetting use due to a few duplicate keys
												// so I added a uuid as a uniqueId field on the order.
												key={order.uniqueId}
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
													focusedCategory === author.authorName ||
													focusedCategory === ""
														? color
														: "gray"
												}
												opacity={
													focusedCategory === author.authorName ||
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
															<div>
																<span className="text-slate-600 font-bold">
																	Amount:
																</span>{" "}
																{order.orderAmount}
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

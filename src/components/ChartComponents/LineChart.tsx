import React, { useMemo, useRef } from "react";
import * as d3 from "d3";
import XAxis from "./../XAxis";
import YAxis from "./../YAxis";
import { colorScale } from "../../utils/junk";
import { MARGIN } from "../../constants";
import LineChartPath from "./LineChartPath";
import LineChartCircle from "./LineChartCircle";

// let totalAmount = 0;
// let totalItems = 0;
// totalAmount += order.orderAmount;
// totalItems += order.quantity;
// totalAmount: parseFloat(totalAmount.toFixed(2)),
// totalItems: totalItems,

// export const combineOrders = (data: ChartDataType[]) => {
// 	console.log("data: ", data);
// };

// export const combineOrders = (
// 	authors: ChartDataType[]
// ): CombinedChartDataOrdersType[] => {
// 	let totalAmount = 0;
// 	let totalItems = 0;
// 	return authors.map((author) => {
// 		return {
// 			name: author.name,
// 			orders: author.books
// 				.map((book) => {
// 					return book.bookOrders.map((order) => {
// 						totalAmount += order.orderAmount;
// 						totalItems += order.quantity;
// 						return {
// 							bookTitle: book.bookTitle,
// 							...order,
// 							uniqueId: uuidv4(),
// 						};
// 					});
// 				})
// 				.flat(),
// 			totalAmount: parseFloat(totalAmount.toFixed(2)),
// 			totalItems: totalItems,
// 		};
// 	});
// };

// data.map((item) => {
//     return {
//         name: item.name,
//         orders: item.books.flatMap((book) => {
//             if (!Array.isArray(book.bookOrders)) {
//                 console.error(
//                     `Expected bookOrders to be an array, but got ${typeof book.bookOrders}`
//                 );
//                 return [];
//             }
//             return book.bookOrders.map((order) => {
//                 return {
//                     bookTitle: book.bookTitle,
//                     ...order,
//                     uniqueId: uuidv4(),
//                 };
//             });
//         }),
//     };
// });

// export const combineName = (
// 	authors: TrimmedAuthorsDataType
// ): CombinedAuthorNameType[] => {
// 	return authors.authors.map((author) => {
// 		return {
// 			authorName: author.authorFirstName + " " + author.authorLastName,
// 			books: author.books,
// 		};
// 	});
// };

// export const sortOrders = (
// 	data: CombinedChartDataOrdersType[]
// ): CombinedChartDataOrdersType[] => {
// 	return data.map((item) => {
// 		return {
// 			...item,
// 			orders: item.orders.sort((a, b) => {
// 				return (
// 					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
// 				);
// 			}),
// 		};
// 	});
// };

// type TrimmedAuthorsDataType = {
// 	authors: {
// 		authorFirstName: string;
// 		authorLastName: string;
// 		books: {
// 			bookTitle: string;
// 			bookOrders: {
// 				orderId: string;
// 				userId: string;
// 				bookId: string;
// 				quantity: number;
// 				orderDate: string;
// 				orderAmount: number;
// 			}[];
// 		}[];
// 	}[];
// };

export type CombinedAuthorNameType = {
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

export type CombinedChartDataOrdersType = {
	name: string;
	totalAmount: number;
	totalItems: number;
	orders: {
		uniqueId: string;
		bookTitle?: string;
		orderId: string;
		userId?: string;
		bookId?: string;
		quantity: number;
		orderDate: string;
		orderAmount: number;
	}[];
};

// export type ReducedAuthorsDataType = {
// 	authorName: string;
// 	totalBooksOrdered: number;
// };

export type ReducedChartDataType = {
	name: string;
	totalBooksOrdered: number;
};

type LineChartType = {
	paginatedList: CombinedChartDataOrdersType[];
	allDates: string[];
	allQuantities: number[];
	// margin: MarginType;
	// timeFilter: string;
	width?: number;
	height?: number;
	// tooltip: TooltipStateType;
	// setTooltip: Function;
	// authors: AuthorsDataType;
	// colorScale: Function;
	hasData: number;
	setHasData: Function;
	// setSelectOptions: Function;
	// focusedCategory: string;
	// doesToolTipOverflowWindow: Function;
};

export default function LineChart({
	allDates,
	allQuantities,
	paginatedList,
	// margin,
	width = 0,
	height = 0,
	// tooltip,
	// setTooltip,
	// colorScale,
	hasData,
}: // focusedCategory,
// doesToolTipOverflowWindow,
LineChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight - MARGIN.top - MARGIN.bottom;
	const graphWidth = svgWidth - MARGIN.left - MARGIN.right;
	const svgLineChartRef = useRef<SVGSVGElement>(null);
	const graphLineChartRef = useRef<SVGSVGElement>(null);
	// const focusedDataPoint = useSelector(
	// 	(state: RootState) => state.highlightData.focusedDataPoint
	// );
	// const dispatch = useDispatch();
	// const tooltip = useSelector((state: RootState) => state.ChartToolTip);
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
			<svg
				ref={svgLineChartRef}
				width={svgWidth}
				height={svgHeight}
			>
				<g
					ref={graphLineChartRef}
					width={graphWidth}
					height={graphHeight}
					transform={`translate(${MARGIN.left},${MARGIN.top})`}
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
						paginatedList.map((dataPoint, index) => {
							const color = colorScale(index.toString());
							// console.log("Color: ", color);
							// console.log("Category: ", category);
							const linePath = theLine(
								dataPoint.orders.map((order) => [
									new Date(order.orderDate).getTime(), // Convert Date string to Date object and then get the time
									order.quantity,
								])
							);
							// console.log("Line Path: ", linePath);
							// console.log("Focused Category: ", focusedCategory);

							// This prevents framer motion errors from blowing up
							// the console when no orders are present as it tries
							// to create a path from empty points.
							if (dataPoint.orders.length === 0) return;
							// You need to implement functionality to check if there is not order then do not animate because it keeps throwing errors for negative heigh of recatngles...meaning there is 0 height
							return (
								<React.Fragment>
									{/* Unique key for each fragment */}
									<LineChartPath
										dataPoint={dataPoint}
										bottomLineGenerator={bottomLineGenerator}
										linePath={linePath}
										color={color}
									/>
									{dataPoint.orders.map((order) => {
										// console.log("Order Quantity: ", order.quantity);
										// console.log("cy: ", y(order.quantity));
										return (
											<LineChartCircle
												order={order}
												dataPoint={dataPoint}
												graphHeight={graphHeight}
												color={color}
												x={x}
												y={y}
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

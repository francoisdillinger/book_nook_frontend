import React from "react";
import * as d3 from "d3";
import BarChartXAxis from "./UserChart/BarChartXAxis";
import BarChartYAxis from "./UserChart/BarChartYAxis";
import { colorScale } from "../../utils/junk";
import { MARGIN } from "../../constants";
import ChartBar from "./ChartBar";
import { ReducedChartDataType, CombinedChartDataOrdersType } from "./LineChart";

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
	// allQuantities: number[];
	// margin: MarginType;
	// timeFilter: string;
	width?: number;
	height?: number;
	// tooltip: TooltipStateType;
	// setTooltip: Function;
	// authors: AuthorsDataType;
	// colorScale: Function;
	hasData: number;
	// focusedCategory: string;
	// doesToolTipOverflowWindow: Function;
};

export default function BarChart({
	paginatedList,
	// allQuantities,
	// margin,
	// timeFilter,
	width = 0,
	height = 0,
	// tooltip,
	// setTooltip,
	// authors,
	// colorScale,
	hasData,
}: // focusedCategory,
// doesToolTipOverflowWindow,
BarChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const additionalPadding = 20;
	const graphHeight =
		svgHeight - MARGIN.top - MARGIN.bottom + additionalPadding;
	const graphWidth = svgWidth - MARGIN.left - MARGIN.right;
	// const [reducedAuthorsData, setReducedAuthorsData] =
	// 	useState<ReducedChartDataType[]>();
	// const focusedDataPoint = useSelector(
	// 	(state: RootState) => state.highlightData.focusedDataPoint
	// );
	// const dispatch = useDispatch();
	// const tooltip = useSelector((state: RootState) => state.ChartToolTip);

	// useEffect(() => {
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
	// setReducedAuthorsData(reduceOrderQuantities(paginatedList));
	// }, [graphWidth, paginatedList]);

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
					transform={`translate(${MARGIN.left},${10})`}
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
								<ChartBar
									graphHeight={graphHeight}
									barHeight={barHeight}
									author={author}
									color={color}
									x={x}
									y={y}
								/>
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

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

type BarChartType = {
	paginatedList: CombinedChartDataOrdersType[];
	width?: number;
	height?: number;
	hasData: number;
};

export default function BarChart({
	paginatedList,
	width = 0,
	height = 0,
	hasData,
}: BarChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const additionalPadding = 20;
	const graphHeight =
		svgHeight - MARGIN.top - MARGIN.bottom + additionalPadding;
	const graphWidth = svgWidth - MARGIN.left - MARGIN.right;
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

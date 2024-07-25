import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import XAxis from "./../XAxis";
import YAxis from "./../YAxis";
import { colorScale } from "../../utils/junk";
import { MARGIN } from "../../constants";
import LineChartPath from "./LineChartPath";
import LineChartCircle from "./LineChartCircle";
import {
	getFlattenedDates,
	getFlattenedQuantities,
	getUniqueDatas,
	getUniqueQuantities,
} from "../../utils/getData";

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

export type ReducedChartDataType = {
	name: string;
	totalBooksOrdered: number;
};

type LineChartType = {
	paginatedList: CombinedChartDataOrdersType[];
	orderedChartsData: CombinedChartDataOrdersType[] | undefined;
	width?: number;
	height?: number;
	hasData: number;
};

export default function LineChart({
	orderedChartsData,
	paginatedList,

	width = 0,
	height = 0,

	hasData,
}: LineChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight - MARGIN.top - MARGIN.bottom;
	const graphWidth = svgWidth - MARGIN.left - MARGIN.right;
	const svgLineChartRef = useRef<SVGSVGElement>(null);
	const graphLineChartRef = useRef<SVGSVGElement>(null);
	const [allDates, setAllDates] = useState<string[]>([]);
	const [allQuantities, setAllQuantinties] = useState<number[]>([]);

	useEffect(() => {
		const flattenedDates = getFlattenedDates(
			orderedChartsData ? orderedChartsData : []
		);
		const flattenedQuanities = getFlattenedQuantities(
			orderedChartsData ? orderedChartsData : []
		);
		const uniqueDates = getUniqueDatas(flattenedDates);
		const uniqueQuantities = getUniqueQuantities(flattenedQuanities);
		setAllDates(uniqueDates);
		setAllQuantinties(uniqueQuantities);
	}, [orderedChartsData]);

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
							const linePath = theLine(
								dataPoint.orders.map((order) => [
									new Date(order.orderDate).getTime(), // Convert Date string to Date object and then get the time
									order.quantity,
								])
							);

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
